const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: 'host1870882_deploy',
  // Password optional, prompted if none given
  password: 'CU7^7TQtx7NPyvVx2aS#tA#o',
  host: 'ftp79.hostland.ru',
  port: 21,
  localRoot: __dirname + '/../dist/server/src',
  remoteRoot: '/api.telitsave.ru/node_server/www/dist',
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ['*', '**/*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['package.json'],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: false,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
}

ftpDeploy
  .deploy(config)
  .then((res) => console.log('finished:', res))
  .catch((err) => console.log(err))
