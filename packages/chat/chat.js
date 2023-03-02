#!/usr/bin/env node
import chatGPT from "chatgpt-io";
import inquirer from "inquirer";
import configJson from "./configs/default-chatgpt-io.js";

const questions = [
  {
    type: "input",
    name: "question",
    message: "想问什么？",
  },
];
const reLogin = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "loginFailed",
        message: "loginFailed:reinput new token?",
      },
    ])
    .then((res) => ask(res));
};
const ask = async (token) => {
  let bot
  try {
    bot = new chatGPT(token);
    await bot.waitForReady();
  } catch (err) {
    return reLogin();
  }

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
        return answer(question);
      })
      .finally(questionInput);
  };
  questionInput();
};
console.log("🚀 ~ file: chat.js:51 ~ json:", configJson);
ask(configJson.sessionToken);
