const ChatGPT = require("chatgpt");
const api = new ChatGPT.ChatGPTAPI({
  apiKey: "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",
});
const send = async () => {
  const res = await api.sendMessage("Hello World!");
  console.log(res.text);
};

send();
