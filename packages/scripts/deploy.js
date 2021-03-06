const shell = require('shelljs');
const AWS = require('aws-sdk');
const { exec, echo, exit, env, cd } = shell;

// Exec that exits on non 0 exit code.
function safeExec(command, options) {
  const result = exec(command, options);
  if (result.code !== 0) {
    exit(result.code);
    return null;
  }
  return result;
}

/**
 * Build and deploy a new image and update the service on AWS ECS.
 */
function deploy({
  containerName,
  containerRepository,
  clusterName,
  serviceName,
  accessKeyId,
  secretAccessKey,
  region = 'us-west-2',
}) {
  AWS.config.update({ accessKeyId, secretAccessKey, region });
  cd('C:\\Users\\janic\\Developer\\pikapik\\th3rdwave-api');
  const commitSHA = env.CIRCLE_SHA1 || safeExec('git rev-parse HEAD').stdout.trim();

  echo(`Deploying commit ${commitSHA}...`);

  echo('Loging in to docker registry...');
  const loginCmd = safeExec('aws ecr get-login', { silent: true }).stdout;
  safeExec(loginCmd);

  echo('Building docker image...');
  safeExec(`docker build -t ${containerName} .`);

  echo('Uploading docker image...');
  safeExec(`docker tag ${containerName} ${containerRepository}:${commitSHA}`);
  safeExec(`docker tag ${containerName} ${containerRepository}:latest`);
  safeExec(`docker push ${containerRepository}`);

  echo('Updating service...');

  const ecs = new AWS.ECS();

  ecs.describeServices({
    cluster: clusterName,
    services: [serviceName],
  }).promise()
    .then((data) => {
      const taskDefinition = data.services[0].taskDefinition;
      return ecs.describeTaskDefinition({
        taskDefinition,
      }).promise();
    })
    .then((data) => {
      const { taskDefinition } = data;

      return ecs.registerTaskDefinition({
        containerDefinitions: taskDefinition.containerDefinitions.map(def => {
          const newImage = `${def.image.split(':')[0]}:${commitSHA}`;
          return Object.assign({}, def, { image: newImage });
        }),
        family: taskDefinition.family,
        networkMode: taskDefinition.networkMode,
        taskRoleArn: taskDefinition.taskRoleArn,
        volumes: taskDefinition.volumes,
      }).promise();
    })
    .then((data) => {
      echo(`Created new revision ${data.taskDefinition.revision}.`);
      return ecs.updateService({
        service: serviceName,
        cluster: clusterName,
        taskDefinition: data.taskDefinition.taskDefinitionArn,
      }).promise();
    })
    .then(() => {
      echo('Service updated successfully.');
    })
    .catch((err) => {
      echo(err);
      exit(1);
    });
}

module.exports = deploy;
