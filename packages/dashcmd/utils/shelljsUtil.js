const shelljs = require("shelljs");

//判定git命令是否可用
if (!shelljs.which("git")) {
  //向命令行打印git命令不可用的提示信息
  shelljs.echo("Sorry, this script requires git");
  //退出当前进程
  shelljs.exit(1);
}

module.exports = shelljs;
