const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
  user: process.env.FTP_LOGIN,
  // Password optional, prompted if none given
  password: process.env.FTP_PASSWORD,
  host: 'ftp79.hostland.ru',
  port: 21,
  localRoot: __dirname + '/../dist/apps/client-vite',
  remoteRoot: '/telitsave.ru/htdocs/www',
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ['*', '**/*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [],
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
