const FtpDeploy = require('ftp-deploy')
const dotenv = require('dotenv')
const ftpDeploy = new FtpDeploy()

dotenv.config()

console.log()

const config = {
  user: process.env.FTP_LOGIN,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: 'ftp79.hostland.ru',
  port: 21,
  localRoot: __dirname + '/../dist/server/src',
  remoteRoot: '/api.telitsave.ru/projects/node_server',
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
