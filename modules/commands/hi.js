const axios = require("axios");
module.exports.config = {
    name: "hi",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "Kanichi",
    description: "noprefix",
    commandCategory: "không cần dấu lệnh",
    usages: "Chỉ cần nhắn Hi",
    cooldowns: 0,
    denpendencies: {
        "axios": "",
        "moment-timezone": ""
    }
}

module.exports.handleEvent = async ({ event, api,Users }) => {
  const res = await axios.get('https://api-nodejsx.miraiofficials123.repl.co/images/v2?type=catbox');
  const data = res.data.data;
  let download = (await axios.get(data, {
			responseType: "stream"
		})).data;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Ho_Chi_Minh").format("HHmm");
  const session = (hours > 2401 && hours <= 400 ? "sớm tinh mơ" : hours > 401 && hours <= 700 ? "sáng sớm" : hours > 701 && hours <= 1000 ? "sáng" : hours > 1001 && hours <= 1200 ? "trưa" : hours > 1201 && hours <= 1700 ? "chiều" : hours > 1701 && hours <= 1800 ? "chiều tà" : hours > 1801 && hours <= 2400 ? "tối" : "khuya")
  let name = await Users.getNameUser(event.senderID)
  var msg = {body: `🖐️Hi,Chào buổi ${session},Bây giờ là ${time}\n💕Chúc bạn ${name} 1 ngày vui vẻ và may mắn 🍀`, attachment: download}
  if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hii"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hì"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "híí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "chao"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "lô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hello mn"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hê nhô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api }) => {
return api.sendMessage("𝐃𝐮̀𝐧𝐠 𝐬𝐚𝐢 𝐜𝐚́𝐜𝐡 𝐫𝐨̂̀𝐢 𝐥𝐞̂𝐮 𝐥𝐞̂𝐮",event.threadID)
    }