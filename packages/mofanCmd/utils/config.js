const targetBranchQuestions = [
  {
    type: "checkbox",
    name: "gitBranchs",
    message: "请选择想要更新的分支",
    choices: [
      {
        name: "dev",
        value: "dev",
      },
      {
        name: "test",
        value: "test",
      },
      {
        name: "uat",
        value: "uat",
        checked: true,
      },
    ],
  },
];

module.exports = {
  targetBranchQuestions,
};
