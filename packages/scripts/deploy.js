const shell = require('shelljs');
const { exec, echo, exit } = shell;

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
  echo('Loging in to docker registry...');
  const loginCmd = safeExec('aws ecr get-login', { silent: true }).stdout;
  safeExec(loginCmd);

  echo('Building docker image...');
  safeExec(`docker build -t ${containerName} .`);

  echo('Uploading docker image...');
  safeExec(`docker tag ${containerName}:latest ${containerRepository}:latest`);
  safeExec(`docker push ${containerRepository}:latest`);

  echo('Updating service...');
  exec(
    `docker run --rm -e AWS_ACCESS_KEY_ID=${accessKeyId} -e ` +
    `AWS_SECRET_ACCESS_KEY=${secretAccessKey} -e AWS_DEFAULT_REGION=${region} ` +
    `silintl/ecs-deploy --cluster ${clusterName} --service-name ${serviceName} ` +
    `-i ${containerRepository}:latest --timeout 0`
  );
}

module.exports = deploy;
