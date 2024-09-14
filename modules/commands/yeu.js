module.exports.config = {
	name: "yêu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "ManhG",
	description: "Hãy nhắn Yêu",
	commandCategory: "không cần dấu lệnh",
	usages: "Chỉ cần nhắn yêu",
	cooldowns: 0,
	denpendencies: {
		"fs-extra": "",
		"request": ""
	}
};

module.exports.handleEvent = async ({
	event,
	api,
	Users
}) => {
	const fs = global.nodemodule["fs-extra"];
	var {
		threadID,
		messageID,
		body,
		senderID
	} = event;
	const thread = global.data.threadData.get(threadID) || {};
	if (typeof thread["hi"] !== "undefined" && thread["hi"] == false) return;

	let name = await Users.getNameUser(event.senderID);
	if (senderID == api.getCurrentUserID()) return;

	function out(data) {
		api.sendMessage(data, threadID, messageID)
	}0
	//trả lời
	var msg = {
		body: `💘Yêu ghê,Chúc đôi bạn trẻ hạnh phúc mãi mãi❤`,
		attachment: (await global.nodemodule["axios"]({
			url: (await global.nodemodule["axios"]('https://Love.thanhha6.repl.co')).data.url,
			method: "GET",
			responseType: "stream"
		})).data
	}
	// Gọi bot
	var arr = ["yêu", "yêu ghê", "i love you", "anh yêu em", "em yêu anh", "cưới", "love you", "i love you 3000", "thích"];
	arr.forEach(i => {
		let str = i[0].toUpperCase() + i.slice(1);
		if (body === i.toUpperCase() | body === i | str === body) return out(msg)
	});
};

module.exports.languages = {
	"vi": {
		"on": "Bật",
		"off": "Tắt",
		"successText": "hi thành công",
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "hi success!",
	}
}

module.exports.run = async function({
	api,
	event,
	Threads,
	getText
}) {
	const {
		threadID,
		messageID
	} = event;
	let data = (await Threads.getData(threadID)).data;

	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;

	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}