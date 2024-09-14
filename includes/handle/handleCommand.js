module.exports = function ({ api, models, Users, Threads, Currencies }) {
  const fs = require("fs");
  const request = require("request");
  const stringSimilarity = require('string-similarity'),
    escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    logger = require("../../utils/log.js");
  const moment = require("moment-timezone");
  return async function ({ event }) {
    const dateNow = Date.now();
    const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss DD/MM/YYYY");
    const { allowInbox, PREFIX, ADMINBOT, NDH, DeveloperMode, adminOnly, keyAdminOnly, ndhOnly, adminPaseOnly } = global.config;
    const { userBanned, threadBanned, threadInfo, threadData, commandBanned } = global.data;
    const { commands, cooldowns } = global.client;
    var { body, senderID, threadID, messageID } = event;
    var senderID = String(senderID),
      threadID = String(threadID);
    const threadSetting = threadData.get(threadID) || {}
    const prefixRegex = new RegExp(`^(<@!?${senderID}>|${escapeRegex((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : PREFIX)})\\s*`);
    if (!prefixRegex.test(body)) return;
    const adminbot = require('./../../config.json');
    
if (!global.data.allThreadID.includes(threadID) && !ADMINBOT.includes(senderID) && adminbot.adminPaseOnly == true) return api.sendMessage("", threadID, messageID)    
if (!ADMINBOT.includes(senderID) && adminbot.adminOnly == true) return api.sendMessage('', threadID, messageID)
if (!NDH.includes(senderID) && !ADMINBOT.includes(senderID) && adminbot.ndhOnly == true) return api.sendMessage('', threadID, messageID)
    const dataAdbox = require('./../../modules/commands/data/data.json');
    var threadInf = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const findd = threadInf.adminIDs.find(el => el.id == senderID);
    if (dataAdbox.adminbox.hasOwnProperty(threadID) && dataAdbox.adminbox[threadID] == true && !ADMINBOT.includes(senderID) && !findd && event.isGroup == true) return api.sendMessage('', event.threadID, event.messageID)
    if (userBanned.has(senderID) || threadBanned.has(threadID) || allowInbox == ![] && senderID == threadID) {
      if (!ADMINBOT.includes(senderID.toString())) {
        if (userBanned.has(senderID)) {
          const { reason, dateAdded } = userBanned.get(senderID) || {};
          return api.sendMessage(global.getText("handleCommand", "userBanned", reason, dateAdded), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
        } else {
          if (threadBanned.has(threadID)) {
            const { reason, dateAdded } = threadBanned.get(threadID) || {};
            return api.sendMessage(global.getText("handleCommand", "threadBanned", reason, dateAdded), threadID, async (err, info) => {
              await new Promise(resolve => setTimeout(resolve, 5 * 1000));
              return api.unsendMessage(info.messageID);
            }, messageID);
          }
        }
      }
    }
    const [matchedPrefix] = body.match(prefixRegex),
      args = body.slice(matchedPrefix.length).trim().split(/ +/);
    commandName = args.shift().toLowerCase();
    var command = commands.get(commandName);
    if (!command) {
          var allCommandName = [];
          const commandValues = commands['keys'](); 

        const girl = require('./../../includes/girl.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        const poem = require('./../../includes/poem.json');

       var tho = poem[Math.floor(Math.random() * poem.length)].trim();

          for (const cmd of commandValues) allCommandName.push(cmd)
          const checker = stringSimilarity.findBestMatch(commandName, allCommandName);
          if (checker.bestMatch.rating >= 0.5) command = client.commands.get(checker.bestMatch.target);

        let callback = function () {
           return api.sendMessage({ body: `${global.getText("handleCommand", "commandNotExist", checker.bestMatch.target)}\n>Thính: ${tho}`, attachment: fs.createReadStream(__dirname + `/1.png`)
        }, event.threadID, () => fs.unlinkSync(__dirname + `/1.png`), event.messageID);
      }
        request(image).pipe(fs.createWriteStream(__dirname + `/1.png`)).on("close", callback);
    }
if (true) {
    let fs = require('fs');

    let path = __dirname+'/../../modules/commands/data/commands-banned.json';
    let data = {};
    let send = msg=>api.sendMessage(msg, threadID, messageID);
    let is_qtv_box = id=>threadInfo.get(threadID).adminIDs.some($=>$.id == id);
    let name = id=>global.data.userName.get(id);
    let cmd = command.config.name;

    if (fs.existsSync(path))data = JSON.parse(fs.readFileSync(path));
    if (data[threadID]) {
        if (ban = data[threadID].cmds.find($=>$.cmd == cmd)) {
            if (ADMINBOT.includes(ban.author) && !ADMINBOT.includes(senderID))return send(`❎ ${ban.time} admin bot: ${name(ban.author)}\nĐã cấm nhóm sử dụng lệnh ${cmd}`);
            if (is_qtv_box(ban.author) && !is_qtv_box(senderID) && !ADMINBOT.includes(senderID))return send(`❎ ${ban.time} qtv nhóm: ${name(ban.author)}\nĐã cấm thành viên sử dụng lệnh ${cmd}`);
        };
        if (all = (data[threadID].users[senderID] || {}).all) {
            if (all.status == true && ADMINBOT.includes(all.author) && !ADMINBOT.includes(senderID))return send(`❎ ${all.time} bạn đã bị admin bot: ${name(all.author)} cấm`);
            if (all.status == true && is_qtv_box(all.author) && !ADMINBOT.includes(sid) && !is_qtv_box(senderID))return send(`❎ ${all.time} bạn đã bị qtv box: ${name(all.author)} cấm`);
        };
        if (user_ban = (data[threadID].users[senderID] || {
            cmds: []}).cmds.find($=>$.cmd == cmd)) {
            if (ADMINBOT.includes(user_ban.author) && !ADMINBOT.includes(senderID))return send(`❎ ${user_ban.time} admin bot: ${name(user_ban.author)}\nĐã cấm bạn sử dụng lệnh ${cmd}`);
            if (is_qtv_box(user_ban.author) && !is_qtv_box(senderID) && !ADMINBOT.includes(senderID))return send(`❎ ${user_ban.time} qtv nhóm: ${name(user_ban.author)}\nĐã cấm bạn sử dụng lệnh ${cmd}`);
        }
    }
};
    if (commandBanned.get(threadID) || commandBanned.get(senderID)) {
      if (!ADMINBOT.includes(senderID)) {
        const banThreads = commandBanned.get(threadID) || [],
          banUsers = commandBanned.get(senderID) || [];
        if (banThreads.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandThreadBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000))
            return api.unsendMessage(info.messageID);
          }, messageID);
        if (banUsers.includes(command.config.name))
          return api.sendMessage(global.getText("handleCommand", "commandUserBanned", command.config.name), threadID, async (err, info) => {
            await new Promise(resolve => setTimeout(resolve, 5 * 1000));
            return api.unsendMessage(info.messageID);
          }, messageID);
      }
    }
let path_disable_cmd_category = __dirname+'/../../modules/commands/data/disable-command.json';
let data_disable_cmd_category = {};
let cmd_category = command.config.commandCategory;

if (!!fs.existsSync(path_disable_cmd_category))data_disable_cmd_category = JSON.parse(fs.readFileSync(path_disable_cmd_category));
if (!data_disable_cmd_category[threadID])data_disable_cmd_category[threadID] = [];
if (!ADMINBOT.includes(senderID) && data_disable_cmd_category[threadID][cmd_category] == true)return api.sendMessage(`❎ Nhóm bạn không được phép sử dụng nhóm lệnh ${cmd_category}`, threadID);
    if (command.config.commandCategory.toLowerCase() == 'nsfw' && !global.data.threadAllowNSFW.includes(threadID) && !ADMINBOT.includes(senderID))
      return api.sendMessage(global.getText("handleCommand", "threadNotAllowNSFW"), threadID, async (err, info) => {

        await new Promise(resolve => setTimeout(resolve, 5 * 1000))
        return api.unsendMessage(info.messageID);
      }, messageID);
    var threadInfo2;
    if (event.isGroup == !![])
      try {
        threadInfo2 = (threadInfo.get(threadID) || await Threads.getInfo(threadID))
        if (Object.keys(threadInfo2).length == 0) throw new Error();
      } catch (err) {
        logger(global.getText("handleCommand", "cantGetInfoThread", "error"));
      }
    var permssion = 0;
    var threadInfoo = (threadInfo.get(threadID) || await Threads.getInfo(threadID));
    const find = threadInfoo.adminIDs.find(el => el.id == senderID);
    if (NDH.includes(senderID.toString())) permssion = 2;
    if (ADMINBOT.includes(senderID.toString())) permssion = 3;
    else if (!ADMINBOT.includes(senderID) && !NDH.includes(senderID) && find) permssion = 1;
    if (command.config.hasPermssion > permssion) return api.sendMessage(global.getText("handleCommand", "permssionNotEnough", command.config.name), event.threadID, event.messageID);

          if (!client.cooldowns.has(command.config.name)) client.cooldowns.set(command.config.name, new Map());
        const timestamps = client.cooldowns.get(command.config.name);;
        const expirationTime = (command.config.cooldowns || 1) * 1000;
        if (timestamps.has(senderID) && dateNow < timestamps.get(senderID) + expirationTime) 
      return api.sendMessage(`⏱️`, threadID, messageID);
    
    var getText2;
    if (command.languages && typeof command.languages == 'object' && command.languages.hasOwnProperty(global.config.language))
      getText2 = (...values) => {
        var lang = command.languages[global.config.language][values[0]] || '';
        for (var i = values.length; i > 0x2533 + 0x1105 + -0x3638; i--) {
          const expReg = RegExp('%' + i, 'g');
          lang = lang.replace(expReg, values[i]);
        }
        return lang;
      };
    else getText2 = () => { };
    try {
      const Obj = {};
      Obj.api = api
      Obj.event = event
      Obj.args = args
      Obj.models = models
      Obj.Users = Users
      Obj.Threads = Threads
      Obj.Currencies = Currencies
      Obj.permssion = permssion
      Obj.getText = getText2
      command.run(Obj);
      timestamps.set(senderID, dateNow);
      if (DeveloperMode == !![])
        logger(global.getText("handleCommand", "executeCommand", time, commandName, senderID, threadID, args.join(" "), (Date.now()) - dateNow), "[ DEV MODE ]");
      return;
    } catch (e) {
      return api.sendMessage(global.getText("handleCommand", "commandError", commandName, e), threadID);
    }
  };
};
