const { ask } = require("./inquireUtil");
const shelljs = require("./shelljsUtil");

const targetBranchsQuestions = {
  type: "checkbox",
  name: "gitBranchs",
  message: "请选择想要更新的分支",
};

const askFortargetBranchs = () => {
  const { stdout } = shelljs.exec(`git branch `);
  const allBranch = stdout.split("\n  ");
  const choices = allBranch.reduce((branchs, branch) => {
    if (!branch.includes("*")) {
      branchs.push({
        name: branch.replace(" ", ""),
        value: branch.replace(/\s/, ""),
      });
    }
    return branchs;
  }, []);

  return ask([{ ...targetBranchsQuestions, choices }]);
};

module.exports = {
  targetBranchsQuestions,
  askFortargetBranchs,
};
