const fs = require("fs");

const getDirs = () =>
  new Promise((rosolve) => {
    fs.readdir(".", (err, files) => {
      if (err) {
        console.error(err);
        return;
      }

      // 过滤出只包含文件夹的项目
      const dirs = files.filter((file) => {
        return (
          fs.statSync(file).isDirectory() &&
          !file.startsWith(".") &&
          fs.existsSync(`${file}/package.json`)
        );
      });

      console.log("Directories:");
      console.log(dirs);
      rosolve(dirs);
    });
  });

module.exports = getDirs;
