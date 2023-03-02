#!/usr/bin/env node
import chatGPT from "chatgpt-io";
import inquirer from "inquirer";

const questions = [
  {
    type: "input",
    name: "question",
    message: "想问什么？",
  },
];
(async () => {
  let bot = new chatGPT(process.env.SESSION_TOKEN);
  await bot.waitForReady();

  const answer = async (question) => {
    let response = await bot.ask(question);
    console.log(response);
    return response;
  };
  const questionInput = () => {
    inquirer
      .prompt(questions)
      .then((res) => {
        const { question } = res;
        console.log("🚀 ~ file: chattest.js:27 ~ .then ~ question", question);
        return answer(question);
      })
      .finally(questionInput);
  };
  questionInput();
})();
