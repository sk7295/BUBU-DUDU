let math = require('./math.js');
var createCharacter = require("./createCharacter");
let pvp_rooms = {};
var get = require("./getData");
var set = require("./setData");
var axios = require("axios");

async function getTop({ api:a, event:e }) {
    const { threadID:t, messageID:m } = e, _ = require("./data/datauser.json");
        if (_.length < 3) return api.sendMessage('Cần có ít nhất 3 người trên server để xem top', threadID, messageID)
        _.sort((a, b) => b.level - a.level);
      let c = '<( Hall Of Elders )>\n', d = 1;
        for (i of _) {
        c += `${d++}. ${i.name}\nLevel hiện tại: ${i.level}\n`;
        }
        return a.sendMessage(c,t,m)
}

async function getTopPower({ api:a, event:e }) {
    const { threadID:t, messageID:m } = e, _ = require("./data/datauser.json");
        if (_.length < 3) return api.sendMessage('Cần có ít nhất 3 người trên server để xem top', threadID, messageID)
        _.sort((a, b) => ((b.hp + 4 * b.atk + 3 * b.def + 5 * b.spd) + Math.round((b.weapon != null ? b.weapon.HP + 4 * b.weapon.ATK + 3 * b.weapon.DEF + 5 * b.weapon.SPD: 0 ) * (1+((b.weapon != null ? b.weapon.stage: 0)/100)))) - ((a.hp + 4 * a.atk + 3 * a.def + 5 * a.spd) + Math.round((a.weapon != null ? a.weapon.HP + 4 * a.weapon.ATK + 3 * a.weapon.DEF + 5 * a.weapon.SPD: 0 ) * (1+((a.weapon != null ? a.weapon.stage: 0)/100)))));
      let c = '<( Hall Of The Strongests )>\n', d = 1;
        for (i of _) {
        c += `${d++}. ${i.name}\nLực Chiến: ${i.hp + 4 * i.atk + 3 * i.def + 5 * i.spd + Math.round((i.weapon != null ? i.weapon.HP + 4 * i.weapon.ATK + 3 * i.weapon.DEF + 5 * i.weapon.SPD: 0 ) * (1+((i.weapon != null ? i.weapon.stage: 0)/100)))}\n`;
        }
        return a.sendMessage(c,t,m)
}

async function getTopRank({ api:a, event:e }) {
    const { threadID:t, messageID:m } = e, _ = require("./data/datauser.json");
        if (_.length < 3) return api.sendMessage('Cần có ít nhất 3 người trên server để xem top', threadID, messageID)
        _.sort((a, b) => b.rankScore - a.rankScore);
      let c = '<( HALL OF FAME )>\n', d = 1;
        for (i of _) {
            var rank = "";
            if(i.rankScore >= 1) rank = "Đồng ★";
            if(i.rankScore >= 2) rank = "Đồng ★★";
            if(i.rankScore >= 4) rank = "Đồng ★★★";
            if(i.rankScore >= 6) rank = "Bạc ★";
            if(i.rankScore >= 8) rank = "Bạc ★★";
            if(i.rankScore >= 10) rank = "Bạc ★★★";
            if(i.rankScore >= 12) rank = "Vàng ★";
            if(i.rankScore >= 14) rank = "Vàng ★★";
            if(i.rankScore >= 16) rank = "Vàng ★★★";
            if(i.rankScore >= 18) rank = "Bạch Kim ★";
            if(i.rankScore >= 20) rank = "Bạch Kim ★★";
            if(i.rankScore >= 22) rank = "Bạch Kim ★★★";
            if(i.rankScore >= 24) rank = "Kim Cương ★";
            if(i.rankScore >= 26) rank = "Kim Cương ★★";
            if(i.rankScore >= 28) rank = "Kim Cương ★★★";
            if(i.rankScore >= 30) rank = "Tinh Anh ★";
            if(i.rankScore >= 32) rank = "Tinh Anh ★★";
            if(i.rankScore >= 34) rank = "Tinh Anh ★★★";
            if(i.rankScore >= 36) rank = "Cao Thủ ★";
            if(i.rankScore >= 38) rank = "Cao Thủ ★★";
            if(i.rankScore >= 40) rank = "Cao Thủ ★★★";
            if(i.rankScore >= 45) rank = "Chiến Thần Bậc ★";
            if(i.rankScore >= 50) rank = "Chiến Thần Bậc ★★";
            if(i.rankScore >= 55) rank = "Chiến Thần Bậc ★★★";
            if(i.rankScore >= 60) rank = "Đại Đế《★》";
        c += `${d++}. ${i.name}\nRank: ${rank} - ${i.rankScore.toFixed(2)}\n`;
        }
        return a.sendMessage(c,t,m)
}

async function createCharecter({ Users, api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = createCharacter({
        data: {
            id: senderID,
            name: (await Users.getData(senderID)).name
        }
    });
    if (dataUser == 403) return api.sendMessage("❎ Bạn đã có nhân vật rồi", threadID, messageID);
    var stream = (await axios.get(global.configMonster.create, { responseType: 'stream' })).data;
    const user = get.getDataUser(senderID);
    const rating = user.talentHP + user.talentATK + user.talentDEF + user.talentSPD + user.talentGrow;
    var tpHP = "";
    if(user.talentHP == 3) tpHP = "D";
    if(user.talentHP == 4) tpHP = "C";
    if(user.talentHP == 5) tpHP = "B";
    if(user.talentHP == 6) tpHP = "A";
    if(user.talentHP == 7) tpHP = "S";
    var tpATK = "";
    if(user.talentATK == 1) tpATK = "D";
    if(user.talentATK == 2) tpATK = "C";
    if(user.talentATK == 3) tpATK = "B";
    if(user.talentATK == 4) tpATK = "A";
    if(user.talentATK == 5) tpATK = "S";
    var tpDEF = "";
    if(user.talentDEF == 1) tpDEF = "D";
    if(user.talentDEF == 2) tpDEF = "C";
    if(user.talentDEF == 3) tpDEF = "B";
    if(user.talentDEF == 4) tpDEF = "A";
    if(user.talentDEF == 5) tpDEF = "S";
    var tpSPD = "";
    if(user.talentSPD == 1) tpSPD = "D";
    if(user.talentSPD == 2) tpSPD = "C";
    if(user.talentSPD == 3) tpSPD = "B";
    if(user.talentSPD == 4) tpSPD = "A";
    if(user.talentSPD == 5) tpSPD = "S";
    var tpGrow = "";
    if(user.talentGrow == 3) tpGrow = "D";
    if(user.talentGrow == 4) tpGrow = "C";
    if(user.talentGrow == 5) tpGrow = "B";
    if(user.talentGrow == 6) tpGrow = "A";
    if(user.talentGrow == 7) tpGrow = "S";
    var judge = "";
         if(rating >= 9) judge = "Phế Vật";
         if(rating >= 14) judge = "Người Thường";
         if(rating >= 19) judge = "Có Triển Vọng";
         if(rating >= 24) judge = "Thiên Thượng Thiên Hạ\nDuy Ngã Độc Tôn";
    return api.sendMessage({body: `✅ Tạo nhân vật thành công\n____________________________\n👤Tên: ${user.name}\n✨Thiên phú:\nHP: ${tpHP}\nATK: ${tpATK}\nDEF: ${tpDEF}\nSPD: ${tpSPD}\nTăng trưởng: ${tpGrow}\n Kết Luận:\n${judge}\n____________________________\n✏️ Sử dụng lệnh /monster info để xem thông tin nhân vật\n✏️ Sử dụng lệnh /monster help để xem cách chơi`, attachment: stream}, threadID, messageID);
}

async function getCharacter({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    var statusBag = "";
        if(dataUser.monster.length >= 1) statusBag = "🟢";
        if(dataUser.monster.length >= 10) statusBag = "🟡";
        if(dataUser.monster.length >= 20) statusBag = "🟠";
        if(dataUser.monster.length >= 30) statusBag = "🔴";
    var statusKarma = "";
        if(dataUser.karma >= 10) statusKarma = "Những Linh hồn đang than khóc, level quái +10";
        if(dataUser.karma >= 20) statusKarma = "Những vong hồn vất vưởng, level quái +20";
        if(dataUser.karma >= 30) statusKarma = "Những oan hồn đang gào rú, level quái +30";
        if(dataUser.karma >= 40) statusKarma = "Mày còn không bú ngay một chai nước thánh là mày ăn cứt nhé em, level quái +40";
        if(dataUser.karma >= 50) statusKarma = "Á đù nguyên một quân đoàn ác quỷ sau lưng, level quái +50";
        if(dataUser.karma >= 60) statusKarma = "Mày có chắc là không bú nước thánh không đấy, level quái +60";
        if(dataUser.karma >= 70) statusKarma = "Vẫn đang giết thêm quái đấy à, level quái +70";
        if(dataUser.karma >= 80) statusKarma = "Hết cứu, level quái +80";
        if(dataUser.karma >= 90) statusKarma = "Nghe lời tao, bú nhanh một chai nước thánh đi, level quái +90";
        if(dataUser.karma >= 100) statusKarma = "Vãi lồn, game chưa đủ khó à, level quái +100";
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `[ ------ STATUS ------ ]\n────────────────\n👤 Tên nhân vật: ${dataUser.name}\n📝 Uid: ${dataUser.id}\n✏️ Level: ${dataUser.level}\n✨ EXP: ${Math.round(dataUser.exp)} / ${500 * Math.round(Math.pow(1.25, dataUser.level - 1))}\n🦾 Chỉ số:\n❤️ Máu: ${dataUser.hp} (+${dataUser.weapon != null ? Math.round(dataUser.weapon.HP * (1+(dataUser.weapon != null ? dataUser.weapon.stage/100: 0))): "0"})\n⚔️ Dmg: ${dataUser.atk} (+${dataUser.weapon != null ? Math.round(dataUser.weapon.ATK * (1+(dataUser.weapon != null ? dataUser.weapon.stage/100: 0))) : "0"})\n🛡 Giáp: ${dataUser.def} (+${dataUser.weapon != null ? Math.round(dataUser.weapon.DEF * (1+(dataUser.weapon != null ? dataUser.weapon.stage/100: 0))): "0"})\n⚡ Tốc độ: ${dataUser.spd} (+${dataUser.weapon != null ? Math.round(dataUser.weapon.SPD * (1+(dataUser.weapon != null ? dataUser.weapon.stage/100: 0))): "0"})\n🗡️ Skill point: ${dataUser.points}\n💪🏻 Lực Chiến cơ bản: ${dataUser.hp + 4 * dataUser.atk + 3 * dataUser.def + 5 * dataUser.spd}\n🛡️ Trang bị cộng thêm: ${Math.round((dataUser.weapon != null ? dataUser.weapon.HP + 4 * dataUser.weapon.ATK + 3 * dataUser.weapon.DEF + 5 * dataUser.weapon.SPD: 0 ) * (1+(dataUser.weapon != null ? dataUser.weapon.stage/100: 0)))}\n🦾 Thể lực: ${dataUser.the_luc}\n💀 Karma: ${dataUser.karma}\n${statusKarma}\n────────────────\n⚔️ Vũ khí: ${dataUser.weapon ? dataUser.weapon.name + " (Độ bền: " + dataUser.weapon.durability + ")" : "Không có"}\n🧺 Số vật phẩm trong túi đồ: ${dataUser.bag.length}\n💰 Số quái trong túi: ${dataUser.monster.length}/30 (`+ statusBag +`)\n🏚️ Khu vực: ${dataUser.locationID ? dataUser.locationID : "Home"}\n\n`, attachment: stream}, threadID, messageID);
}

async function getRankingInfo({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    var rank = "";
        if(dataUser.rankScore >= 1) rank = "Đồng ★";
        if(dataUser.rankScore >= 2) rank = "Đồng ★★";
        if(dataUser.rankScore >= 4) rank = "Đồng ★★★";
        if(dataUser.rankScore >= 6) rank = "Bạc ★";
        if(dataUser.rankScore >= 8) rank = "Bạc ★★";
        if(dataUser.rankScore >= 10) rank = "Bạc ★★★";
        if(dataUser.rankScore >= 12) rank = "Vàng ★";
        if(dataUser.rankScore >= 14) rank = "Vàng ★★";
        if(dataUser.rankScore >= 16) rank = "Vàng ★★★";
        if(dataUser.rankScore >= 18) rank = "Bạch Kim ★";
        if(dataUser.rankScore >= 20) rank = "Bạch Kim ★★";
        if(dataUser.rankScore >= 22) rank = "Bạch Kim ★★★";
        if(dataUser.rankScore >= 24) rank = "Kim Cương ★";
        if(dataUser.rankScore >= 26) rank = "Kim Cương ★★";
        if(dataUser.rankScore >= 28) rank = "Kim Cương ★★★";
        if(dataUser.rankScore >= 30) rank = "Tinh Anh ★";
        if(dataUser.rankScore >= 32) rank = "Tinh Anh ★★";
        if(dataUser.rankScore >= 34) rank = "Tinh Anh ★★★";
        if(dataUser.rankScore >= 36) rank = "Cao Thủ ★";
        if(dataUser.rankScore >= 38) rank = "Cao Thủ ★★";
        if(dataUser.rankScore >= 40) rank = "Cao Thủ ★★★";
        if(dataUser.rankScore >= 45) rank = "Chiến Thần Bậc ★";
        if(dataUser.rankScore >= 50) rank = "Chiến Thần Bậc ★★";
        if(dataUser.rankScore >= 55) rank = "Chiến Thần Bậc ★★★";
        if(dataUser.rankScore >= 60) rank = "Đại Đế《★》";
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `[ CURRENT RANK ]\n──────────────\n👤 Tên nhân vật: ${dataUser.name}\n📝 UID: ${dataUser.id}\n✏️ Level: ${dataUser.level}\n✨ Rank Score: ${dataUser.rankScore.toFixed(2)}\n🌟Bậc: ${rank}`, attachment: stream}, threadID, messageID);
}



async function getWeapon({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (dataUser.weapon == null) return api.sendMessage("❎ Bạn chưa trang bị vũ khí", threadID, messageID);
    var stream = (await axios.get(dataUser.weapon.image, { responseType: 'stream' })).data;
    var durabilityRating = (dataUser.weapon.durability/dataUser.weapon.baseDurability)*100;
    var weaponStatus = "";
    if (durabilityRating == 0) weaponStatus = "Đã Hỏng - Sửa đi";
    if (durabilityRating > 0) weaponStatus = "Sắp Hỏng - Giảm 50% chỉ số";
    if (durabilityRating > 25) weaponStatus = "Nứt Vỡ - Giảm 25% chỉ số";
    if (durabilityRating > 50) weaponStatus = "Cùn - Giảm 10% chỉ số";
    if (durabilityRating > 75) weaponStatus = "Tốt";
    return api.sendMessage({body: `[ TRANG BỊ HIỆN TẠI ]\n──────────────\n🗡️ Vũ khí: ${dataUser.weapon ? dataUser.weapon.name : "Không có"}\n⭐ Bậc: +${dataUser.weapon.stage}\n⭐ Level: ${dataUser.weapon.usage}\n✨EXP: ${Math.round(dataUser.weapon.exp)} / ${500 * Math.round(Math.pow(1.25, dataUser.weapon.usage - 1))}\n🔨Độ bền: ${dataUser.weapon.durability}/${dataUser.weapon.baseDurability} - ${((dataUser.weapon.durability/dataUser.weapon.baseDurability)*100).toFixed(2)}%\n⭐ Tình Trạng: ${weaponStatus}\n❤️ HP: ${Math.round(dataUser.weapon.HP * (1+(dataUser.weapon.stage/100)))}\n⚔️ ATK: ${Math.round(dataUser.weapon.ATK * (1+(dataUser.weapon.stage/100)))}\n🛡️ DEF: ${Math.round(dataUser.weapon.DEF * (1+(dataUser.weapon.stage/100)))}\n⚡ SPD: ${Math.round(dataUser.weapon.SPD * (1+(dataUser.weapon.stage/100)))}\n📝 Thuộc Tính Đặc Thù Vũ Khí:\n+ Sát Thương tạo thành: ${dataUser.weapon.dmgBonus * 100}%\n+ Khả Năng phòng thủ: ${dataUser.weapon.defBonus * 100}%\n+ Tốc Độ tung đòn: ${dataUser.weapon.spdBonus * 100}%\n+ Xuyên Giáp: ${Math.round((1 - dataUser.weapon.ArmorPiercing) * 100)}%\n🦾 Lực chiến: ${Math.round((dataUser.weapon != null ? dataUser.weapon.HP + 4 * dataUser.weapon.ATK + 3 * dataUser.weapon.DEF + 5 * dataUser.weapon.SPD: 0 ) * (1+(dataUser.weapon.stage/100)))}\n────────────────\n${dataUser.weapon.description}`, attachment: stream}, threadID, messageID);
}

async function getStats({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    const rating = dataUser.talentHP + dataUser.talentATK + dataUser.talentDEF + dataUser.talentSPD + dataUser.talentGrow;
    var tpHP = "";
    if(dataUser.talentHP == 3) tpHP = "D";
    if(dataUser.talentHP == 4) tpHP = "C";
    if(dataUser.talentHP == 5) tpHP = "B";
    if(dataUser.talentHP == 6) tpHP = "A";
    if(dataUser.talentHP == 7) tpHP = "S";
    var tpATK = "";
    if(dataUser.talentATK == 1) tpATK = "D";
    if(dataUser.talentATK == 2) tpATK = "C";
    if(dataUser.talentATK == 3) tpATK = "B";
    if(dataUser.talentATK == 4) tpATK = "A";
    if(dataUser.talentATK == 5) tpATK = "S";
    var tpDEF = "";
    if(dataUser.talentDEF == 1) tpDEF = "D";
    if(dataUser.talentDEF == 2) tpDEF = "C";
    if(dataUser.talentDEF == 3) tpDEF = "B";
    if(dataUser.talentDEF == 4) tpDEF = "A";
    if(dataUser.talentDEF == 5) tpDEF = "S";
    var tpSPD = "";
    if(dataUser.talentSPD == 1) tpSPD = "D";
    if(dataUser.talentSPD == 2) tpSPD = "C";
    if(dataUser.talentSPD == 3) tpSPD = "B";
    if(dataUser.talentSPD == 4) tpSPD = "A";
    if(dataUser.talentSPD == 5) tpSPD = "S";
    var tpGrow = "";
    if(dataUser.talentGrow == 3) tpGrow = "D";
    if(dataUser.talentGrow == 4) tpGrow = "C";
    if(dataUser.talentGrow == 5) tpGrow = "B";
    if(dataUser.talentGrow == 6) tpGrow = "A";
    if(dataUser.talentGrow == 7) tpGrow = "S";
    var judge = "";
         if(rating >= 9) judge = "Phế Vật";
         if(rating >= 14) judge = "Người Thường";
         if(rating >= 19) judge = "Có Triển Vọng";
         if(rating >= 24) judge = "Thiên Thượng Thiên Hạ\nDuy Ngã Độc Tôn";
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `[ THIÊN PHÚ ]\n────────────────\n‣ Thiên Phú:\n❤️ HP: ${dataUser.talentHP} - ${tpHP}\n⚔️ ATK: ${dataUser.talentATK} - ${tpATK}\n🛡️ DEF: ${dataUser.talentDEF} - ${tpDEF}\n⚡ SPD: ${dataUser.talentSPD} - ${tpSPD}\n✨Khả năng tăng trưởng: ${(dataUser.talentGrow - 3)*100}% - ${tpGrow}\n────────────────\n${judge}\n🦾 Skill point: ${dataUser.points}\n────────────────\nSkill point được sử dụng để nâng chỉ số HP, ATK, DEF, SPD\n📌 Nhập /monster + stt dưới đây\n+ up-HP: tăng chỉ số HP với 1pts = ${dataUser.talentHP}HP\n+ up-ATK: tăng chỉ số ATK với 1pts = ${dataUser.talentATK}ATK\n+ up-DEF: tăng chỉ số phòng thủ với 1pts = ${dataUser.talentDEF}DEF\n+ up-SPD: tăng chỉ số SPD với 1pts = ${dataUser.talentSPD}SPD`, attachment: stream}, threadID, messageID);
}

async function getServer({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const datauser = require("./data/datauser.json");
    const dataitem = require("./data/item.json");
    const datamonster = require("./data/monster.json");
    const data = require("./data/data.json");
    var stream = (await axios.get(global.configMonster.info, { responseType: 'stream' })).data;
    return api.sendMessage({body: `[ MONSTER STATUS ]\n────────────────\n👤 Tổng số người chơi: ${datauser.length}\n🏚️ Tổng khu vực: ${datamonster.length}\n🧌 Tổng: ${data.length} quái\n🗡️ Tổng số vũ khí: ${dataitem.length}\n⭐ Các tier (độ hiếm): I, II, III, IV, V, X, XX\n⚠️ Các mức độ nguy hiểm: 1 ~ 16`, attachment: stream}, threadID, messageID);
}

async function getItems({ api, event, type }) {
    const { senderID, threadID, messageID } = event;
    if(!type) return api.sendMessage("❎ Không hợp lệ", threadID, messageID);
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    const item = get.getItems();
    var greatSword = item.filter(i => i.category == 'Great Sword');
    var lance = item.filter(i => i.category == 'Lance');
    var swords = item.filter(i => i.category == 'Sword');
    var blades = item.filter(i => i.category == 'Dual Blades');
    var HBGs = item.filter(i => i.category == 'Heavy Bowgun');
    var LBGs = item.filter(i => i.category == 'Light Bowgun');
    var gunlance = item.filter(i => i.category == 'Gunlance');
    switch(type) {
        case "1":
            var msg = "Vũ khí loại Great Sword với lượng sát thương khủng bố 200% nhưng tốc độ giảm 50%:\n\n";
            num = 0;
            greatSword.forEach(greatSword => {
                num++;
                msg += `${num}. ${greatSword.name}\n✏️ Độ bền: ${greatSword.durability}\n📝 Chỉ số:\n⚔️ ATK: ${greatSword.ATK}\n🛡️ DEF: ${greatSword.DEF}\n⚡ SPEED: ${greatSword.SPD}\n💵 Giá: ${greatSword.price}$\n\n`;
            });
            var stream = (await axios.get(global.configMonster.GreatSword, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "1",
                    data: greatSword
                });
            }, messageID);
        case "2":
                var msg = "Các vũ khí thuộc loại Lance nổi bật với lượng DEF khủng bố, HP cao và nội tại tăng 200% DEF cho người trang bị nhưng sẽ giảm 50% tốc độ:\n\n";
                num = 0;
                lance.forEach(lance => {
                    num++;
                    msg += `${num}. ${lance.name}\n✏️ Độ bền: ${lance.durability}\n📝 Chỉ số:\n⚔️ ATK: ${lance.ATK}\n🛡️ DEF: ${lance.DEF}\n⚡ SPEED: ${lance.SPD}\n💵 Giá: ${lance.price}$\n────────────────\n`;
                });
                msg += "Reply (phản hồi) theo stt để mua vũ khí";
                var stream = (await axios.get(global.configMonster.Lance, { responseType: 'stream' })).data;
                return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: senderID,
                        type: "buyItem",
                        id: "1",
                        data: lance
                    });
                }, messageID);
                case "3":
                        var msg = "Các vũ khí thuộc loại Sword'n Shield  nổi bật với sự cân bằng công thủ tốc toàn diện:\n\n";
                        num = 0;
                        swords.forEach(swords => {
                            num++;
                            msg += `${num}. ${swords.name}\n✏️ Độ bền: ${swords.durability}\n📝 Chỉ số:\n⚔️ ATK: ${swords.ATK}\n🛡️ DEF: ${swords.DEF}\n⚡ SPEED: ${swords.SPD}\n💵 Giá: ${swords.price}$\n────────────────\n`;
                        });
                        msg += "Reply (phản hồi) theo stt để mua vũ khí";
                        var stream = (await axios.get(global.configMonster.Sword, { responseType: 'stream' })).data;
                        return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                            global.client.handleReply.push({
                                name: 'monster',
                                messageID: info.messageID,
                                author: senderID,
                                type: "buyItem",
                                id: "1",
                                data: swords
                            });
        }, messageID);
        case "4":
                var msg = "Các vũ khí thuộc loại Dual Blades vói tốc độ khủng bố, nội tại tăng 250% tốc độ nhưng giảm thủ xuống 50%:\n\n";
                num = 0;
                blades.forEach(blades => {
                    num++;
                    msg += `${num}. ${blades.name}\n✏️ Độ bền: ${blades.durability}\n📝 Chỉ số:\n⚔️ ATK: ${blades.ATK}\n🛡️ DEF: ${blades.DEF}\n⚡ SPEED: ${blades.SPD}\n💵 Giá: ${blades.price}$\n────────────────\n`;
                });
                msg += "Reply (phản hồi) theo stt để mua vũ khí";
                var stream = (await axios.get(global.configMonster.Blades, { responseType: 'stream' })).data;
                return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: senderID,
                        type: "buyItem",
                        id: "1",
                        data: blades
                    });
        }, messageID);
        case "5":
            var msg = "Các vũ khí thuộc loại HBG tức Heavy Bowgun vói lượng sát thương khủng cùng khả năng xuyên giáp cao, nội tại tăng 350% sát thương cùng với đó từ 30-60% xuyên giáp tuỳ cấp vũ khí nhưng giảm thủ và speed xuống 50%:\n\n";
            num = 0;
            HBGs.forEach(HBGs => {
                num++;
                msg += `${num}. ${HBGs.name}\n✏️ Độ bền: ${HBGs.durability}\n📝 Chỉ số:\n⚔️ ATK: ${HBGs.ATK}\n🛡️ DEF: ${HBGs.DEF}\n⚡ SPEED: ${HBGs.SPD}\n💵 Giá: ${HBGs.price}$\n────────────────\n`;
            });
            msg += "Reply (phản hồi) theo stt để mua vũ khí";
            var stream = (await axios.get(global.configMonster.HBG, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "1",
                    data: HBGs
                });

            }, messageID);
            case "6":
                    var msg = "Các vũ khí thuộc loại LBG tức Light Bowgun có tốc độ cao và sát thương ổn định, đòn đánh có xuyên giáp 15% nhưng giáp bị giảm 40%:\n\n";
                    num = 0;
                    LBGs.forEach(LBGs => {
                        num++;
                        msg += `${num}. ${LBGs.name}\n✏️ Độ bền: ${LBGs.durability}\n📝 Chỉ số:\n⚔️ ATK: ${LBGs.ATK}\n🛡️ DEF: ${LBGs.DEF}\n⚡ SPEED: ${LBGs.SPD}\n💵 Giá: ${LBGs.price}$\n────────────────\n`;
                    });
                    msg += "Reply (phản hồi) theo stt để mua vũ khí";
                    var stream = (await axios.get(global.configMonster.LBG, { responseType: 'stream' })).data;
                    return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: 'monster',
                            messageID: info.messageID,
                            author: senderID,
                            type: "buyItem",
                            id: "1",
                            data: LBGs
                        });

                    }, messageID);        
        case "8":
            var foods = [
                {
                    type: "food",
                    name: "A Platter Mini (+5 mọi chỉ số)",
                    price: 5000,
                    heal: 100,
                    boostHP: 5,
                    boostATK: 5,
                    boostDEF: 5,
                    boostSPD: 5,
                    boostEXP: 0,
                    boostKarma: 0,
                    boostPoints: 0,
                    image: "https://i.imgur.com/a4sWP0L.png"
                },
                {
                    type: "food",
                    name: "B Platter Medium (+10 mọi chỉ số)",
                    price: 12500,
                    boostHP: 10,
                    boostATK: 10,
                    boostDEF: 10,
                    boostSPD: 10,
                    boostEXP: 0,
                    boostKarma: 0,
                    boostPoints: 0,
                    heal: 250,
                    image: "https://i.imgur.com/Zzjdj65.png"
                },
                {
                    type: "food",
                    name: "C Platter XL (+15 mọi chỉ số)",
                    price: 25000,
                    boostHP: 15,
                    boostATK: 15,
                    boostDEF: 15,
                    boostSPD: 15,
                    boostEXP: 0,
                    boostKarma: 0,
                    boostPoints: 0,
                    heal: 500,
                    image: "https://i.imgur.com/6LTkApY.png"
                },
                {
                    type: "food",
                    name: "Trà Sữa TocoToco Full Topping (+20 mọi chỉ số)",
                    price: 50000,
                    boostHP: 20,
                    boostATK: 20,
                    boostDEF: 20,
                    boostSPD: 20,
                    boostEXP: 0,
                    boostKarma: 0,
                    boostPoints: 0,
                    heal: 1000,
                    image: "https://i.imgur.com/JoyQr1y.png"
                },
                {
                    type: "food",
                    name: "Nước Thánh (-10 Karma)",
                    price: 5000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    boostKarma: -10,
                    boostPoints: 0,
                    heal: 0,
                    image: "https://i.imgur.com/xhLi9dU.png"
                },
                {
                    type: "food",
                    name: "Nước Thánh Tối Thượng (-100 Karma)",
                    price: 50000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    boostKarma: -100,
                    boostPoints: 0,
                    heal: 0,
                    image: "https://i.imgur.com/EwsRhwb.png"
                },
                {
                    type: "food",
                    name: "Sức Mạnh Tri Thức (Tăng SP)",
                    price: 5000000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    boostKarma: 0,
                    boostPoints: 50000,
                    heal: 0,
                    image: "https://i.imgur.com/eTSNtJF.png"
                },
                {
                    type: "food",
                    name: "Package +100 Karma",
                    price: 100000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    boostKarma: 100,
                    boostPoints: 0,
                    heal: 0,
                    image: "https://i.imgur.com/jws0SLF.png"
                },
                {
                    type: "food",
                    name: "Package 1500 Karma siêu sếch",
                    price: 1000000,
                    boostHP: 0,
                    boostATK: 0,
                    boostDEF: 0,
                    boostSPD: 0,
                    boostEXP: 0,
                    boostKarma: 1500,
                    boostPoints: 0,
                    heal: 0,
                    image: "https://i.imgur.com/poMORA9.png"
                }
            ]
            var msg = "Thức ăn hồi thể lực và thuốc:\n";
            num = 0;
            foods.forEach(item => {
                num++;
                msg += `${num}. ${item.name}\n🦾 Hồi thể lực: ${item.heal} - ${item.price}$\n`;
            });
            msg += "⭐ Bạn có thể mua thức ăn bằng cách nhập số thứ tự thức ăn (có thể nhập nhiều số cách nhau bởi dấu phẩy hoặc tất cả -all)";
            var stream = (await axios.get(global.configMonster.food, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "7",
                    data: foods
                });
            }, messageID);
        case "9":
            if(!dataUser.monster || dataUser.monster.length == 0) return api.sendMessage("❎ Túi của bạn không có gì", threadID, messageID);
            var msg = "🦾 Chiến lợi phẩm của bạn:\n";
            var num = 0;
            dataUser.monster.forEach(monster => {
                num++;
                msg += `${num}. ${monster.Name} - ${monster.price}$\n`;
            });
            msg += "⭐ Bạn có thể bán quái vật của mình bằng cách nhập số thứ tự quái vật (có thể nhập nhiều số cách nhau bởi dấu phẩy hoặc tất cả -all)";
            var stream = (await axios.get(global.configMonster.sell, { responseType: 'stream' })).data;
            return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                global.client.handleReply.push({
                    name: 'monster',
                    messageID: info.messageID,
                    author: senderID,
                    type: "buyItem",
                    id: "8",
                    data: dataUser.monster
                });
            }, messageID);
        case "10":
                var upgrades = [
                    {
                        type: "upgrade",
                        name: "Mithril",
                        stage: 1,
                        price: (dataUser.weapon.price * 0.01 * (dataUser.weapon.stage + 1)),
                        description: "Một viên Mithril bình thường. Nâng bậc vũ khí +1",
                        image: "https://i.imgur.com/Cvg8eHC.png"
                    },
                    {
                        type: "upgrade",
                        name: "Orichalcum",
                        stage: 2,
                        price: 100000 + (dataUser.weapon.price * 0.02 * (dataUser.weapon.stage + 1)),
                        description: "Một viên đồng thiên thanh. Nâng bậc vũ khí +2",
                        image: "https://i.imgur.com/Sz0A2hp.png"
                    },
                    {
                        type: "upgrade",
                        name: "Adamantium",
                        stage: 4,
                        price: 200000 + (dataUser.weapon.price * 0.04 * (dataUser.weapon.stage + 1)),
                        description: "Một cục Adamantium thuần tuý. Nâng bậc vũ khí +4",
                        image: "https://i.imgur.com/SnObhnz.png"
                    },
                    {
                        type: "upgrade",
                        name: "Scarite",
                        stage: 8,
                        price: 400000 + (dataUser.weapon.price * 0.08 * (dataUser.weapon.stage + 1)),
                        description: "Thứ khoáng vật đỏ như máu và kì diệu. Nâng bậc vũ khí +8",
                        image: "https://i.imgur.com/iIMwZEy.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Dragonite",
                        stage: 16,
                        price: 800000 + (dataUser.weapon.price * 0.16 * (dataUser.weapon.stage + 1)),
                        description: "Một viên cứt rồng trong suốt và lấp lánh như pha lê. Nâng bậc vũ khí +16",
                        image: "https://i.imgur.com/mKzBHAK.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Lunarite",
                        stage: 32,
                        price: 1600000 + (dataUser.weapon.price * 0.32 * (dataUser.weapon.stage + 1)),
                        description: "Một loại khoáng vật hấp thu năng lượng của mặt trăng. Nâng bậc vũ khí +32",
                        image: "https://i.imgur.com/40qcjeG.jpg",
                    },
                    {
                        type: "upgrade",
                        name: "Kriztonite",
                        stage: 64,
                        price: 3200000 + (dataUser.weapon.price * 0.64 * (dataUser.weapon.stage + 1)),
                        description: "Một loại khoáng vật đặc biệt hấp thu năng lượng tù lòng đất. Nâng bậc vũ khí +64",
                        image: "https://i.imgur.com/awGbMAP.jpg"
                    },
                    {
                        type: "upgrade",
                        name: "Damascusium Crytalite",
                        stage: 128,
                        price: 6400000 + (dataUser.weapon.price * 1.28 * (dataUser.weapon.stage + 1)),
                        description: "Một viên khoáng vật là sản phẩm đến từ sự đông kết cô đọng từ năng lượng hỗn độn. Nâng bậc vũ khí +128",
                        image: "https://i.imgur.com/a0T8AZf.jpg"
                    }
                ]
                var msg = "Nguyên liệu cường hoá:\n";
                num = 0;
                upgrades.forEach(item => {
                    num++;
                    msg += `${num}. ${item.name}\n${item.price}$\n⬆️ Mô tả: Cấp độ cường hoá tăng ${item.stage}\n`;
                });
                msg += "⭐ Bạn có thể mua bằng cách nhập số thứ tự vật phẩm nâng cấp, vô bag để sử dụng vật phẩm";
                var stream = (await axios.get(global.configMonster.weapon, { responseType: 'stream' })).data;
                return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                    global.client.handleReply.push({
                        name: 'monster',
                        messageID: info.messageID,
                        author: senderID,
                        type: "buyItem",
                        id: "9",
                        data: upgrades
                    });
                }, messageID);
                case "7":
                    var msg = "Vũ khí loại Gunlance có cả công lên tới 200% và thủ lên 150% nhưng bị giảm mạnh tốc độ:\n\n";
                    num = 0;
                    gunlance.forEach(gunlance => {
                        num++;
                        msg += `${num}. ${gunlance.name}\n✏️ Độ bền: ${gunlance.durability}\n📝 Chỉ số:\n⚔️ ATK: ${gunlance.ATK}\n🛡️ DEF: ${gunlance.DEF}\n⚡ SPEED: ${gunlance.SPD}\n💵 Giá: ${gunlance.price}$\n\n`;
                    });
                    var stream = (await axios.get(global.configMonster.GunLance, { responseType: 'stream' })).data;
                    return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: 'monster',
                            messageID: info.messageID,
                            author: senderID,
                            type: "buyItem",
                            id: "1",
                            data: gunlance
                        });
                    }, messageID);
                case "11":
                    var reset = [
                        {
                            type: "reset",
                            name: "Truck-kun",
                            price: 15200000,
                            setHP: 1000,
                            setATK: 250,
                            setDEF: 200,
                            setSPD: 100,
                            instruction: "Bị xe tải tông? Tôi isekai thành phế vật",
                            resetHP: Math.floor(Math.random()* 4) + 3,
                            resetATK: Math.floor(Math.random()* 4) + 1,
                            resetDEF: Math.floor(Math.random()* 4) + 1,
                            resetSPD: Math.floor(Math.random()* 4) + 1,
                            image: "https://i.imgur.com/12UjedZ.png"
                        },
                        {
                            type: "reset",
                            name: "Golden Truck-kun",
                            price: 77200000,
                            setHP: 1000,
                            setATK: 250,
                            setDEF: 200,
                            setSPD: 100,
                            instruction: "Bị xe tải mạ vàng tông? Tôi isekai thành siêu nhân bi vàng",
                            resetHP: Math.floor(Math.random()* 3) + 4,
                            resetATK: Math.floor(Math.random()* 3) + 2,
                            resetDEF: Math.floor(Math.random()* 3) + 2,
                            resetSPD: Math.floor(Math.random()* 3) + 2,
                            image: "https://i.imgur.com/9nVmzfD.png"
                        },
                        {
                            type: "reset",
                            name: "Platinum Truck-kun",
                            price: 566500000,
                            setHP: 1000,
                            setATK: 250,
                            setDEF: 200,
                            setSPD: 100,
                            instruction: "Bị xe tải bạch kim tông? Tôi isekai thành Tinh Trùng Bạch Kim",
                            resetHP: Math.floor(Math.random()* 2) + 5,
                            resetATK: Math.floor(Math.random()* 2) + 3,
                            resetDEF: Math.floor(Math.random()* 2) + 3,
                            resetSPD: Math.floor(Math.random()* 2) + 3,
                            image: "https://i.imgur.com/CwNXu5H.png"
                        },
                        {
                            type: "reset",
                            name: "Tinh Hoa Isekai",
                            price: 219870650000,
                            setHP: 1000,
                            setATK: 250,
                            setDEF: 200,
                            setSPD: 100,
                            instruction: "Tinh tú của thể loại isekai. Chắc chắn mày sẽ isekai thành đấng toàn năng",
                            resetHP: Math.floor(Math.random()* 1) + 6,
                            resetATK: Math.floor(Math.random()* 1) + 4,
                            resetDEF: Math.floor(Math.random()* 1) + 4,
                            resetSPD: Math.floor(Math.random()* 1) + 4,
                            image: "https://i.imgur.com/XMg33mH.png"
                        }
                    ]
                    var msg = "Đập đi xây lại, đổi lại thiên phú:\n";
                    num = 0;
                    reset.forEach(item => {
                        num++;
                        msg += `${num}. ${item.name} - ${item.price}$\n`;
                    });
                    msg += "⭐ Mua vật phẩm bằng cách reply stt\n Chú ý sau khi sử dụng sẽ reset lại toàn bộ chỉ số người dùng về ban đầu!!!";
                    var stream = (await axios.get(global.configMonster.food, { responseType: 'stream' })).data;
                    return api.sendMessage({body: msg, attachment: stream}, threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: 'monster',
                            messageID: info.messageID,
                            author: senderID,
                            type: "buyItem",
                            id: "10",
                            data: reset
                        });
                    }, messageID);

        default:
            return api.sendMessage("⚠️ Không hợp lệ", threadID, messageID);

    }
}

async function buyItem({ api, event, idItem, Currencies, handleReply }) {
    var { senderID, threadID, messageID } = event;
    var dataGlobal = require("./data/datauser.json");
    var dataUser = dataGlobal.find(item => item.id == senderID);
    var fs = require("fs-extra");
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    if (!idItem) return api.sendMessage("❎ Bạn chưa nhập ID vật phẩm", threadID, messageID);
    var money = (await Currencies.getData(senderID)).money;
    var upgrades = dataUser.bag.filter(item => item.type == "upgrade");
    try {
        switch(handleReply.id) {
            case "1":
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("❎ Bạn không đủ tiền, hãy chăm chỉ làm việc nhé", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const item = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (item == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                if (item == 403) return api.sendMessage("❎ Bạn đã sở hữu vật phẩm này từ trước", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `✅ Bạn đã mua thành công ${handleReply.data[idItem - 1].name}\n - Thuộc Tính:\n⚔️ ATK Bonus: x${handleReply.data[idItem - 1].dmgBonus}\n🛡️ DEF Bonus: x${handleReply.data[idItem - 1].defBonus}\n⚡ SPD Bonus: x${handleReply.data[idItem - 1].spdBonus}\n• Giá ${handleReply.data[idItem - 1].price}$\n${handleReply.data[idItem - 1].description}`, attachment: stream}, threadID, messageID);
            case "7":
                if(handleReply.data[idItem - 1] == undefined) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("❎ Bạn không đủ tiền, hãy làm việc chăm chỉ nhé", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const food = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (food == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `✅ Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$`, attachment: stream}, threadID, messageID);
            case "9":
                if(handleReply.data[idItem - 1] == undefined) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("❎ Bạn không đủ tiền, hãy làm việc chăm chỉ nhé", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const upgrade = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (upgrade == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `✅ Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$\n__________________\n${handleReply.data[idItem - 1].description}`, attachment: stream}, threadID, messageID);
            case "10":
                if(upgrades.length >= 5) return api.sendMessage("Số lượng vật phẩm loại này trong túi tối đa là 5, hãy sử dụng rồi mới mua thêm!!!", threadID, messageID)
                if(handleReply.data[idItem - 1] == undefined) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("❎ Bạn không đủ tiền, hãy làm việc chăm chỉ nhé", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const reset = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (reset == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `✅ Bạn đã mua thành công ${handleReply.data[idItem - 1].name} với giá ${handleReply.data[idItem - 1].price}$\n__________________\n${handleReply.data[idItem - 1].instruction}`, attachment: stream}, threadID, messageID);
            case "12":
                if(money < handleReply.data[idItem - 1].price) return api.sendMessage("❎ Bạn không đủ tiền, hãy chăm chỉ làm việc nhé", threadID, messageID);
                await Currencies.decreaseMoney(event.senderID, parseInt( handleReply.data[idItem - 1].price));
                const accessories = set.buyItem(senderID, handleReply.data[idItem - 1]);
                if (accessories == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
                if (accessories == 403) return api.sendMessage("❎ Bạn đã sở hữu vật phẩm này từ trước", threadID, messageID);
                api.unsendMessage(handleReply.messageID);
                var stream = (await axios.get(handleReply.data[idItem - 1].image, { responseType: 'stream' })).data;
                return api.sendMessage({body: `✅ Bạn đã mua thành công ${handleReply.data[idItem - 1].name}\n - Thuộc Tính:\n⚔️ HP Bonus: ${handleReply.data[idItem - 1].hpBuff}\n🛡️ DEF Bonus: x${handleReply.data[idItem - 1].defBuff}\n⚡ SPD Bonus: x${handleReply.data[idItem - 1].spdBuff}\n• Giá ${handleReply.data[idItem - 1].price}$\n${handleReply.data[idItem - 1].description}`, attachment: stream}, threadID, messageID);
            case "8":
                var list = event.body.split(" ");
                var num = 0;
                var moneySell = 0;
                if(list[0] == "-all") {
                    dataUser.monster.forEach(monster => {
                        num++;
                        moneySell += monster.price;
                    });
                    dataUser.monster = [];
                    fs.writeFileSync(__dirname + "/data/datauser.json", JSON.stringify(dataGlobal, null, 4));
                }
                else {
                    list.forEach(id => {
                        if(dataUser.monster[id - 1] == undefined) {
                            api.sendMessage("⚠️ Không tìm thấy quái tại số " + id, threadID, messageID);
                        }
                        else {
                            num++;
                            moneySell += dataUser.monster[id - 1].price;
                            dataUser.monster.splice(id - 1, 1);
                        }
                    });
                    fs.writeFileSync(__dirname + "/data/datauser.json", JSON.stringify(dataGlobal, null, 4));
                }
                api.unsendMessage(handleReply.messageID);
                await Currencies.increaseMoney(event.senderID, parseInt(moneySell));
                return api.sendMessage(`✅ Bạn đã bán thành công ${num} quái vật và nhận được ${moneySell} đô`, threadID, messageID);
            default:
                return api.sendMessage("⚠️ Không hợp lệ", threadID, messageID);
        }
    }
    catch (e) {
        return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
    }
}

async function setItem({ api, event, handleReply }) {
    var weapon = handleReply.data[event.body - 1];
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if(!weapon) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", threadID, messageID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    if (!event.body) return api.sendMessage("❎ Bạn chưa nhập ID vật phẩm", threadID, messageID);
    set.setItem(senderID, weapon);
    set.setItem(senderID, accessories);
    api.unsendMessage(handleReply.messageID);
    var stream = (await axios.get(weapon.type == "weapon" ? global.configMonster.setWeapon : global.configMonster.eatGif, { responseType: 'stream' })).data;
    return api.sendMessage({body: `✅ Đã ${weapon.type == "weapon" ? "đặt" : "sử dụng"} vật phẩm`, attachment: stream}, threadID, messageID);
}

async function myItem({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    var msg = "📌 Các vật phẩm của bạn:\n";
    var num = 0;
    var weapon = dataUser.bag.filter(item => item.type == "weapon");
    var food = dataUser.bag.filter(item => item.type == "food");
    var upgrade = dataUser.bag.filter(item => item.type == "upgrade");
    var reset = dataUser.bag.filter(item => item.type == "reset");
    var accessories = dataUser.bag.filter(item => item.type == "accessories");
    var user = get.getDataUser(senderID);
    msg += "🗡️ Vũ khí:\n";
    if(weapon.length == 0) msg += "\n\n";
    else {
        weapon.forEach(item => {
            num++;
            msg += `${num}. ${item.name}\n\n`;
        });
    }
    msg += "🍗 Thực phẩm:\n";
    if(food.length == 0) msg += "\n\n";
    else {
        food.forEach(item => {
            num++;
            msg += `${num}. ${item.name}\n`;
        });
        reset.forEach(item => {
            num++;
            msg += `${num}. ${item.name}\n`;
        });
    }
    if(reset.length == 0) msg += "\n\n";
    else {
        reset.forEach(item => {
            num++;
            msg += `${num}. ${item.name}\n`;
        });
    }
    msg += "⬆️ Nâng Cấp:\n";
    if(upgrade.length == 0) msg += "\n\n";
    if(user.weapon == null) msg += "\n\n";
    else {
        upgrade.forEach(item => {
            num++;
            msg += `${num}. ${item.name}\n`;
        });
    }
    msg += "⭐ Bạn có thể trang bị vũ khí hoặc dùng thức ăn bằng cách nhập số thứ tự của vật phẩm\n────────────────\n📌 Vũ khí mới sẽ thay thế vũ khí cũ và vũ khí cũ sẽ bị mất";
    var stream = (await axios.get(global.configMonster.bag, { responseType: 'stream' })).data;
    return api.sendMessage({ body: msg, attachment: stream }, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setItem",
            data: weapon.concat(food, upgrade, reset, accessories)
        });
    }, messageID);
}


async function increaseDurability({ api, event, Currencies, handleReply }) {
    try {
        if(event.body == NaN) return api.sendMessage("❎ Vui lòng nhập một chữ số", event.threadID, event.messageID);
        if (isNaN(event.body)) return api.sendMessage("❎ Vui lòng nhập 1 con số", event.threadID, event.messageID);
        const money = (await Currencies.getData(event.senderID)).money;
        if(money < event.body * 10) return api.sendMessage("❎ Bạn không đủ tiền, hãy làm việc chăm chỉ nhé", threadID, messageID);
        const item = set.increaseDurability(event.senderID, event.body);
        await Currencies.decreaseMoney(event.senderID, parseInt(event.body * 10));
        if (item == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`✅ Đã gia tăng độ bền thành công với giá ${event.body * 10}$, độ bền hiện tại của vật phẩm là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}

async function increaseHp({ api, event, handleReply }) {
    try {
        const dataUser = get.getDataUser(event.senderID);
        if(event.body == NaN) return api.sendMessage("❎ Vui lòng nhập một chữ số", event.threadID, event.messageID);
        if (isNaN(event.body)) return api.sendMessage("❎ Vui lòng nhập 1 con số", event.threadID, event.messageID);
        if(dataUser.points < event.body) return api.sendMessage("❎ Bạn không đủ điểm, hãy chăm chỉ cày cuốc nhé", threadID, messageID);
        const item = set.increaseHP(event.senderID, event.body * dataUser.talentHP);
        set.decreasePoints(event.senderID, event.body);
        if (item == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`✅ Đã gia tăng ${event.body * dataUser.talentHP} điểm vào HP, tổng HP là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}

async function increaseDef({ api, event, handleReply }) {
    try {
        const dataUser = get.getDataUser(event.senderID);
        if(event.body == NaN) return api.sendMessage("❎ Vui lòng nhập một chữ số", event.threadID, event.messageID);
        if (isNaN(event.body)) return api.sendMessage("❎ Vui lòng nhập 1 con số", event.threadID, event.messageID);
        if(dataUser.points < event.body) return api.sendMessage("❎ Bạn không đủ điểm, hãy chăm chỉ cày cuốc nhé", threadID, messageID);
        const item = set.increaseDEF(event.senderID, event.body * dataUser.talentDEF);
        set.decreasePoints(event.senderID, event.body);
        if (item == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`✅ Đã gia tăng ${event.body * dataUser.talentDEF} điểm vào DEF, tổng DEF là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}

async function increaseAtk({ api, event, handleReply }) {
    try {
        const dataUser = get.getDataUser(event.senderID);
        if(event.body == NaN) return api.sendMessage("❎ Vui lòng nhập một chữ số", event.threadID, event.messageID);
        if (isNaN(event.body)) return api.sendMessage("❎ Vui lòng nhập 1 con số", event.threadID, event.messageID);
        if(dataUser.points < event.body) return api.sendMessage("❎ Bạn không đủ điểm, hãy chăm chỉ cày cuốc nhé", threadID, messageID);
        const item = set.increaseATK(event.senderID, event.body * dataUser.talentATK);
        set.decreasePoints(event.senderID, event.body);
        if (item == 404) return api.sendMessage("❎ Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`✅ Đã gia tăng ${event.body * dataUser.talentATK} điểm vào ATK, tổng ATK là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}

async function increaseSpd({ api, event, handleReply }) {
    try {
        const dataUser = get.getDataUser(event.senderID);
        if(event.body == NaN) return api.sendMessage("❎ Vui lòng nhập một chữ số", event.threadID, event.messageID);
        if (isNaN(event.body)) return api.sendMessage("❎ Vui lòng nhập 1 con số", event.threadID, event.messageID);
        if(dataUser.points < event.body) return api.sendMessage("❎ Bạn không đủ điểm, hãy chăm chỉ cày cuốc nhé", threadID, messageID);
        const item = set.increaseSPD(event.senderID, event.body * dataUser.talentSPD);
        set.decreasePoints(event.senderID, event.body);
        if (item == 404) return api.sendMessage("⚠️ Không tìm thấy vật phẩm", event.threadID, event.messageID);
        api.unsendMessage(handleReply.messageID);
        return api.sendMessage(`✅ Đã gia tăng ${event.body * dataUser.talentSPD} điểm vào SPD, tổng SPD là ${item}`, event.threadID, event.messageID);
    }
    catch (e) {
        console.log(e);
    }
}

async function match({ api, event }) {
    try { 
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    if (dataUser.locationID == null) return api.sendMessage("❎ Bạn chưa đến khu vực nào", threadID, messageID);
    const monster = (await axios.get(`https://raw.githubusercontent.com/theguardian132/Alphelios/main/${dataUser.locationID}.json`)).data.creature
    const minLevel = (await axios.get(`https://raw.githubusercontent.com/theguardian132/Alphelios/main/${dataUser.locationID}.json`)).data.minLevel;
    const maxLevel = (await axios.get(`https://raw.githubusercontent.com/theguardian132/Alphelios/main/${dataUser.locationID}.json`)).data.maxLevel;
    const locationLevel = (await axios.get(`https://raw.githubusercontent.com/theguardian132/Alphelios/main/${dataUser.locationID}.json`)).data.level;
    if(dataUser.weapon == null) return api.sendMessage("❎ Bạn chưa lên đồ, bộ bạn định đánh bằng tay không à?", threadID, messageID);
    if(dataUser.weapon.durability <= 0) return api.sendMessage("⚠️ Vũ khí của bạn đã bị hỏng, sửa đi rồi phang nhau tiếp nhé", threadID, messageID);
    if(dataUser.level < locationLevel) return api.sendMessage('❎ Bạn chưa đạt đủ level, hãy cày thêm\nLevel khu vực: ' + locationLevel, threadID, messageID);
    if(dataUser.the_luc < 50) return api.sendMessage("⚠️ Thể lực của bạn không đủ để đánh quái vật, vui lòng ghé cửa hàng để mua thức ăn!", threadID, messageID);
    if(dataUser.monster.length > 30) return api.sendMessage("⚠️ Bạn đã đầy túi, hãy bán bớt đồ trong túi", threadID, messageID);
    const random = Math.floor(Math.random() * 1000);
    var tier = 0;
    if (random < 340) tier = "I";
    else if (random < 540) tier = "II";
    else if (random < 690) tier = "III";
    else if (random < 790) tier = "IV";
    else if (random < 840) tier = "V";
    else if (random < 860) tier = "X";
    else if (random < 861) tier = "XX";
    else return api.sendMessage("Bạn không gặp quái vật", threadID, messageID);
    const monsterTier = monster.filter((item) => item.Tier == tier);
        if (monsterTier.length == 0) return api.sendMessage('Bạn không gặp quái vật', threadID, messageID);
    const monsterRandom = monsterTier[Math.floor(Math.random() * monsterTier.length)];
    var karma = dataUser.karma;
    if (dataUser.karma < 0) karma = 0;
    var level = Math.floor(Math.random() * maxLevel + minLevel) + karma;
    var durabilityRating = (dataUser.weapon.durability/dataUser.weapon.baseDurability)*100;
    var durabilityMultiplier = 1;
    if (durabilityRating > 0) durabilityMultiplier = 0.5;
    if (durabilityRating > 25) durabilityMultiplier = 0.75;
    if (durabilityRating > 50) durabilityMultiplier = 0.9;
    if (durabilityRating > 75) durabilityMultiplier = 1;
    ////////////////////////////////////////
    const exp = Math.round(monsterRandom.exp + (monsterRandom.exp * 0.1) * (level - 1))
    var monsterHp = monsterRandom.HP + (monsterRandom.HP * 0.25) * (level - 1)
    const monsterHP = Math.round(monsterHp)
    var monsterAtk = monsterRandom.ATK + (monsterRandom.ATK * 0.25) * (level - 1)
    const monsterATK = Math.round(monsterAtk)
    var monsterDef = monsterRandom.DEF + (monsterRandom.DEF * 0.25) * (level - 1)
    const monsterDEF = Math.round(monsterDef)
    var monsterSpd = monsterRandom.SPD + (monsterRandom.SPD * 0.25) * (level - 1)
    const monsterSPD = Math.round(monsterSpd)
    /////////////////////////////////////////
    var userHP = ((dataUser.hp + Math.round(dataUser.weapon.HP * (1+(dataUser.weapon.stage/100))) * durabilityMultiplier) * dataUser.weapon.hpBonus)
    var userATK = ((dataUser.atk + Math.round(dataUser.weapon.ATK * (1+(dataUser.weapon.stage/100))) * durabilityMultiplier) * dataUser.weapon.dmgBonus)
    var userDEF = ((dataUser.def + Math.round(dataUser.weapon.DEF * (1+(dataUser.weapon.stage/100))) * durabilityMultiplier) * dataUser.weapon.defBonus)
    var userSPD = ((dataUser.spd + Math.round(dataUser.weapon.SPD * (1+(dataUser.weapon.stage/100))) * durabilityMultiplier) * dataUser.weapon.spdBonus)
    /////////////////////////////////////////
    var threat = ((monsterHP + 4 * monsterATK + 3 * monsterDEF + 5 * monsterSPD)/((userHP + 4 * userATK + userDEF * 3 + userSPD * 5))).toFixed(2) * 10;
    var path = __dirname + "/" + senderID + ".png";
    var image = await get.getImgMonster(monsterRandom, path);
    var badge = "";
        if (monsterRandom.category == "Small monster") badge = "I";
        if (monsterRandom.category == "Medium monster") badge = "II";
        if (monsterRandom.category == "Big monster") badge = "III";
        if (monsterRandom.category == "Giant monster") badge = "IV";
        if (monsterRandom.category == "Elder Dragon") badge = "V";
        if (monsterRandom.category == "Dragon") badge = "VI";
        if (monsterRandom.category == "True Dragon") badge = "VII";
        if (monsterRandom.category == "Dragon Lord") badge = "VIII";
        if (monsterRandom.category == "True Dragon Lord") badge = "IX";
        if (monsterRandom.category == "Exotic") badge = "X";
    var fs = require('fs-extra');
    var msgStatus = `[ ENEMY SPOTTED ]\n────────────────\nBạn đã gặp quái vật ${monsterRandom.Name} có chỉ số:\n✏️ Level: ${level}\n❤️ HP: ${monsterHP}\n⚔️ ATK: ${monsterATK}\n🛡️ DEF: ${monsterDEF}\n⚡ SPEED: ${monsterSPD}\n🧟 Cấp Bậc: ${badge}\n⚠️ Độ đe doạ: ${threat}` + `\n👊 Lực Chiến: ${monsterHP + 4 * monsterATK + 3 * monsterDEF + 5 * monsterSPD}\n────────────────\n⭐ Nội tại:\n⚔️ Tăng ATK: ${monsterRandom.ATKbonus * 100}%\n🛡️ Tăng DEF: ${monsterRandom.DEFbonus * 100}%\n⚡ Tăng SPD: ${monsterRandom.SPDbonus * 100}%\n🏹 Xuyên Giáp: ${(1 - monsterRandom.ArmorPiercing) * 100}%`
       var msg = {
        body: msgStatus,
        attachment: image
    }
    await api.sendMessage(msg, threadID);
    fs.unlinkSync(path);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await api.sendMessage("🔄 Đang đấm nhau...", threadID);

        var fight = require('./fight.js');
        var result = fight.fight({
            HP: userHP,
            ATK: userATK,
            DEF: userDEF,
            SPD: userSPD,
            AP: Math.round(dataUser.weapon.ArmorPiercing),
            Mana: 1
        }, {
            HP: (monsterHP),
            ATK: (monsterATK * monsterRandom.ATKbonus),
            DEF: (monsterDEF * monsterRandom.DEFbonus),
            SPD: (monsterSPD * monsterRandom.SPDbonus),
            AP: Math.round(monsterRandom.ArmorPiercing),
            Mana: 1
        });
        var dur = set.decreaseDurability(senderID);
        var dame = 0,
            def = 0,
            dameMonster = 0,
            defMonster = 0,
            countTurn = result.log.length
        result.log.map(i => {
            if(i.attacker == "player") {
                dame += i.damage;
                defMonster += i.defenderDef;
            }
            else {
                dameMonster += i.damage;
                def += i.defenderDef;
            }
        })
        set.decreaseHealthWeapon(senderID, dameMonster);
        var msg = `⭐ Bạn và nó đấm nhau trong ${countTurn} hiệp\n👤 Bạn:\n⚔️ Tổng sát thương: ${dame}\n🛡️ Chống chịu: ${def}\n🧌 Quái vật:\n⚔️ Tổng sát thương: ${dameMonster}\n🛡️ Chống chịu: ${defMonster}`;
        if(dur == 0) await api.sendMessage("⚠️ Vũ khí của bạn đã bị hỏng, sửa đi để còn phang nhau...", threadID);
        if(dataUser.the_luc < 150) await api.sendMessage("⚠️ Thể lực gần cạn, chú ý bổ sung thể lực", threadID);
        var status = "";
        if(result.log.length == 1) status = "NHỜN! một vụt là oẳng\n\n";
        if(result.log.length >= 2) status = "Quá EZ!!!\n\n";
        if(result.log.length > 10) status = "Quá ghê gớm, bạn và con quái giao cấu mãnh liệt\n\n";
        if(result.log.length > 20) status = "Bạn và con quái giao cấu tanh bành cả một khu!!!\n\n";
        if(result.log.length > 30) status = "Dã man tàn bạo vô nhân đạo, bạn và quái giao cấu banh cả map!!!\n\n";
        if (result.tie === true) {
            await api.sendMessage(status + "hoà", threadID);
            await api.sendMessage(`Vũ khí đã bị giảm ${Math.round(dameMonster/2)+1} độ bền, còn ${((dataUser.weapon.durability/dataUser.weapon.baseDurability)*100).toFixed(2)}%`, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("📝 Thống kê trận đấu★\n\n" + msg, threadID);
            return;
        } else if(result.winner == true) {
            var sendMsg = status + `⭐ Bạn đã hạ được ${monsterRandom.Name} (Tier: ${tier})\nBạn nhận được ${exp}EXP`;
            set.addMonster(senderID, monsterRandom);
            set.karmaUp(senderID);
            await api.sendMessage(sendMsg, threadID);
            await api.sendMessage(`Vũ khí đã bị giảm ${Math.round(dameMonster/2)+1} độ bền, còn ${((dataUser.weapon.durability/dataUser.weapon.baseDurability)*100).toFixed(2)}%`, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("📝 Thống kê trận đấu\n────────────────\n" + msg, threadID);
            set.setExp(senderID, exp, api, threadID);
        }
        else {
            await api.sendMessage(status + "💔 Bạn đã thua trận đấu", threadID);
            await api.sendMessage(`Vũ khí đã bị giảm ${Math.round(dameMonster/2)+1} độ bền, còn ${((dataUser.weapon.durability/dataUser.weapon.baseDurability)*100).toFixed(2)}%`, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("📝 Thống kê trận đấu★\n\n" + msg, threadID);
            return;
        }
    }
    catch (e) {
        console.log(e);
    }

}

async function matchRanking({ api, event, Currencies }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    const monster = require("./data/datauser.json")
    const monsterRandom = monster[Math.floor(Math.random() * monster.length)];

    var fs = require('fs-extra');
    var msgStatus = `[ Match Ranking ]\n────────────────\nBạn đã đối mặt ngườI chơi ${monsterRandom.name} có chỉ số:\n✏️ Level: ${monsterRandom.level}\n❤️ HP: ${monsterRandom.hp}\n⚔️ ATK: ${monsterRandom.atk}\n🛡️ DEF: ${monsterRandom.def}\n⚡ SPEED: ${monsterRandom.spd}` + `\n👊 Lực Chiến: ${monsterRandom.hp + 4 * monsterRandom.atk + 3 * monsterRandom.def + 5 * monsterRandom.spd}\n`
    msgStatus += "Chỉ số của bạn:\n";
    msgStatus += `- ❤: ${dataUser.hp}\n`;
    msgStatus += `- ⚔: ${dataUser.atk}\n`;
    msgStatus += `- 🛡: ${dataUser.def}\n`;
    msgStatus += `- ⚡: ${dataUser.spd}\n`;
    msgStatus += `Lực Chiến👊: ${dataUser.hp + 4 * dataUser.atk + 3 * dataUser.def + 5 * dataUser.spd}\n`;

       var msg = {
        body: msgStatus,
    }
    const rankPoint = 0.5;
    var rankPointDown = 0.5;
    await api.sendMessage(msg, threadID);
    await new Promise(resolve => setTimeout(resolve, 3000));
    await api.sendMessage("🔄 Trận đấu bắt đầu...", threadID);
    try {
        var fight = require('./fight.js');
        var result = fight.fight({
            HP: dataUser.hp,
            ATK: dataUser.atk,
            DEF: dataUser.def,
            SPD: dataUser.spd,
            AP: 1,
            Mana: 1
        }, {
            HP: monsterRandom.hp,
            ATK: monsterRandom.atk,
            DEF: monsterRandom.def,
            SPD: monsterRandom.spd,
            AP: 1,
            Mana: 1
        });
        var dame = 0,
            def = 0,
            dameMonster = 0,
            defMonster = 0,
            countTurn = result.log.length
        result.log.map(i => {
            if(i.attacker == "player") {
                dame += i.damage;
                defMonster += i.defenderDef;
            }
            else {
                dameMonster += i.damage;
                def += i.defenderDef;
            }
        })
        var msg = `⭐ Bạn và ${monsterRandom.name} đấm nhau trong ${countTurn} hiệp\n👤 Bạn:\n⚔️ Tổng sát thương: ${dame}\n🛡️ Chống chịu: ${def}\n🧌 ${monsterRandom.name}:\n⚔️ Tổng sát thương: ${dameMonster}\n🛡️ Chống chịu: ${defMonster}`;

        var status = "";
        if(result.log.length == 1) status = "NHỜN! một vụt là oẳng\n\n";
        if(result.log.length >= 2) status = "Quá EZ!!!\n\n";
        if(result.log.length > 10) status = "Quá ghê gớm, bạn và đối phương giao cấu mãnh liệt\n\n";
        if(result.log.length > 20) status = "Bạn và đối phương giao cấu tanh bành cả một khu!!!\n\n";
        if(result.log.length > 30) status = "Dã man tàn bạo vô nhân đạo, bạn và đối phương giao cấu banh cả map!!!\n\n";
        if(result.winner == true) {
            var sendMsg = status + `⭐ Bạn đã hạ được người chơi ${monsterRandom.name}\n Bạn được tăng thêm ${rankPoint.toFixed(2)} điểm`;
            await api.sendMessage(sendMsg, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("📝 Thống kê trận đấu\n────────────────\n" + msg, threadID);
            set.rankUp(senderID, rankPoint, api, threadID);
        }
        else {
            await api.sendMessage(status + `💔 Bạn đã bại trận trước sức mạnh vĩ đại của người chơi ${monsterRandom.name}\n Bạn bị trừ đi ${rankPoint.toFixed(2)} điểm`, threadID);
            await new Promise(resolve => setTimeout(resolve, 1000));
            await api.sendMessage("📝 Thống kê trận đấu★\n\n" + msg, threadID);
            set.rankDown(senderID, rankPointDown, api, threadID);
            return;
        }
    }
    catch (e) {
        console.log(e);
    }

}

async function listLocationNormal({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    const listLocation = require("./data/monster.json")
    var normal = listLocation.filter(i => i.area == 'normal');
    var msg = "[ MONSTER MAP ]\n───────────────\n🏚️ Các khu vực:\n";
    normal.forEach(location => {
        msg += `ID ${location.ID}: ${location.location}\nLevel yêu cầu: ${location.level}\n───────────────\n `;
    });
    msg += `Reply tin nhắn cùng ID Vùng bạn muốn chọn, bạn sẽ tự động chuyển đến khu vực tương ứng với ID`;
    var stream = await axios.get(global.configMonster.location, { responseType: 'stream' });
    return api.sendMessage({body: msg, attachment: stream.data}, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setLocationID"
        });
    }, messageID);
}

async function listLocationBoss({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    const listLocation = require("./data/monster.json")
    var boss = listLocation.filter(i => i.area == 'boss');
    var msg = "[ MONSTER MAP ]\n───────────────\n🏚️ Các khu vực:\n";
    boss.forEach(location => {
        msg += `ID ${location.ID}: ${location.location}\nLevel yêu cầu: ${location.level}\n───────────────\n `;
    });
    msg += `Reply tin nhắn cùng ID Vùng bạn muốn chọn, bạn sẽ tự động chuyển đến khu vực tương ứng với ID`;
    var stream = await axios.get(global.configMonster.location, { responseType: 'stream' });
    return api.sendMessage({body: msg, attachment: stream.data}, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setLocationID"
        });
    }, messageID);
}

async function listGuide({ api, event }) {
    const { senderID, threadID, messageID } = event;
    const listGuide = require("./data/guide.json")
    var msg = "[ HƯỚNG DẪN ]\n───────────────\n🏚️ Các giáo án:\n";
    listGuide.forEach(guide => {
        msg += `${guide.ID + 1}. ${guide.nameGuide}\n───────────────\n `;
    });
    msg += `Reply tin nhắn cùng stt bạn chọn để xem hướng dẫn tương ứng`;
    var stream = await axios.get(global.configMonster.location, { responseType: 'stream' });
    return api.sendMessage({body: msg, attachment: stream.data}, threadID, (err, info) => {
        global.client.handleReply.push({
            name: 'monster',
            messageID: info.messageID,
            author: senderID,
            type: "setGuide"
        });
    }, messageID);

}

async function setGuide({ api, event, handleReply }) {
    const { senderID, threadID, messageID } = event;
    const guideID = Number(event.body) - 1;
    const guide = require("./data/guide.json")[guideID];
    if (!guide) return api.sendMessage("⚠️ Không tìm thấy hướng dẫn", threadID, messageID);
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`${guide.guide}`, threadID, messageID);
}

function setLocationID({ api, event, handleReply }) {
    const { senderID, threadID, messageID } = event;
    const dataUser = get.getDataUser(senderID);
    if (!dataUser) return api.sendMessage("❎ Bạn chưa có nhân vật", threadID, messageID);
    const locationID = Number(event.body);
    const location = require("./data/monster.json")[locationID];
    if (!location) return api.sendMessage("⚠️ Không tìm thấy khu vực", threadID, messageID);
    set.setLocation(senderID, String(locationID));
    api.unsendMessage(handleReply.messageID);
    return api.sendMessage(`✅ Đã đến khu vực ${location.location}`, threadID, messageID);
}

function pvp(o, id, expression){
    let tid = o.event.threadID;
    let send = (msg, cb)=>o.api.sendMessage(msg, tid, cb, o.event.messageID);
    let data_user = get.getDataUser(id);
    let pvp_room = pvp_rooms[tid];

    if (!pvp_room)pvp_room = pvp_rooms[tid] = [];
    if (!data_user)return send(("❎ Bạn chưa có nhân vật"));
    if (!data_user.weapon)return send("❎ Bạn chưa lên đồ, bộ bạn định đánh bằng tay không à?");

    let room = pvp_room.find($=>$.players.includes(id));

    switch (expression) {
        case 'list rooms': 
            send(`${pvp_room.length == 0?'⚠️ không có phòng do chưa có người chơi nào tạo':pvp_room.map(function($, i, o, [p_1, p_2] = $.players.map($=>get.getDataUser($))){return`${i+1}. ${$.title}\n👤 Player 1: ${p_1.name} (${math.power.sum(p_1)} LC)\n👤 Player 2: ${!p_2?'null':`${p_2.name} (${math.power.sum(p_2)} LC)`}\n📝 Status: ${global.configMonster.status_room[$.status]}\n────────────────`}).join('\n')}\n\nReply (phản hồi) join + stt để vào phòng pvp`, (err, res)=>(res.name = 'monster', res.type = 'pvp.rooms', global.client.handleReply.push(res)));
            break;
        case 'info room': {
            if (!room)return send('❎ Bạn chưa tạo or tham gia phòng pvp nào cả');

            let [p_1, p_2] = room.players.map($=>get.getDataUser($));

            send(`[ Phòng PVP Số ${room.stt} - ${room.title}]\n────────────────\n👤 Player 1: ${p_1.name}\n⚔️ Chiến lực: ${math.power.sum(p_1)}\n👤 Player 2: ${!p_2?'null':`${p_2.name}\n⚔️ Chiến lực:${math.power.sum(p_2)}`}\n📝 Status: ${global.configMonster.status_room[room.status]}\n\nThả cảm xúc '👍' để ${id == p_1.id?'bắt đầu':'sẵn sàng'} hoặc '👎' để rời phòng\nReply (phản hồi) 'start' để bắt đầu, 'ready' để sẵn sàng, 'leave' để rời phòng, 'join' để vào phòng`, (err, res)=>(res.name = 'monster', res.type = 'pvp.room.info', res.stt = room.stt, global.client.handleReaction.push(res), global.client.handleReply.push(res)));
        } break;
        case 'create room': {
            if (!!room)return send('❎ Bạn đã tạo or tham gia phòng pvp rồi');

            pvp_room.push({
                stt: pvp_room.length+1,
                title: o.event.args.slice(1).join(' '),
                players: [id],
                status: 1,
            });
            send(`✅ Đã tạo phòng pvp, phòng của bạn là số ${pvp_room.length}`, ()=>pvp(o, id, 'info room'));
        } break;
        default:
          break;
    }
}

pvp.room = async(o, id = o.event.senderID, expression = (o.event.args||[])[0], stt = (o.event.args||[])[1])=>{
    let tid = o.event.threadID;
    let send = (msg, cb)=>new Promise(r=>o.api.sendMessage(msg, tid, cb||r, o.event.messageID));
    let data_user = get.getDataUser(id);
    let pvp_room = pvp_rooms[tid];

    if (id == o.api.getCurrentUserID())return;
    if (!data_user)return send(("❎ Bạn chưa có nhân vật"));
    if (!data_user.weapon)return send("❎ Bạn chưa lên đồ, bộ bạn định đánh bằng tay không à?");

    switch (expression) {
        case 'join': {
            let room = pvp_room[stt-1] || pvp_room[o.handleReply.stt-1];

            if (!room)return send('⚠️ Phòng không tồn tại');
            if (room.players.includes(id))return send('❎ Bạn đã trong phòng pvp rồi');
            if (/^(2|3)$/.test(room.status))return send(global.configMonster.status_room[room.status]);

            room.players.push(id),
            room.status = 2,
            room.ready = false,
            pvp(o, id, 'info room');
        } break;
        case 'start':
        case 'ready':
        case 'leave': {
            let room = pvp_room.find($=>$.players.includes(id));

            if (!room)return send('❎ Bạn chưa tạo or tham gia phòng pvp nào cả');
            if (room.status == 3)return send('⚠️ Trận pvp đang diễn ra không thể thực hiện các thao tác này!')
            if (expression == 'start' && id != room.players[0])return send('❎ Bạn không phải chủ phòng để có thể bắt đầu trận pvp');
            //if (expression == 'ready' && id == room.players[0])return send('bạn là chủ phòng nên không cần sẵn sàng');
            if (expression == 'leave')return(id == room.players[0]?(pvp_room.splice(room.stt-1, 1), send('✅ Đã rời phòng pvp, vì bạn là chủ phòng nên phòng sẽ bị huỷ')):(room.ready = false,room.status == 1,room.players.length == 1?pvp_room.splice(room.stt-1, 1):room.players.splice(room.players.findIndex($=>$ == id), 1), send('✅ Đã rời phòng pvp')));
            if (id == room.players[1]) {
                room.ready = !room.ready?true:false;
                send(`đã ${room.ready?'':'huỷ'} sẵn sàng`);
            } else if (id == room.players[0]) {
                if (room.status == 1)return send(global.configMonster.status_room[room.status]);
                if (!room.ready)return send('⚠️ Đối thủ chưa sẵn sàng');

                room.status = 3,
                await send('🔄 PVP đang diễn ra...');

                let players = room.players.map($=>get.getDataUser($));
                let result = require('./pvp.js')(players);
                let dmg = {
                    player1: 0,
                    player2: 0,
                };
                let def = {
                    player1: 0,
                    player2: 0,
                };

                result.log.map($=>(dmg[$.attacker] += $.damage, def[$.attacker] += $.defenderDef));
                send(`[ Kết Quả Trận PVP - ${players[0].name} VS ${players[1].name} ]\n\n⭐ Winner: ${result.winner=='player1'?players[0].name:players[1].name}\n📝 Số Hiệp: ${result.log.length}\n👤 Player 1 - ${players[0].name}:\n⚔️ Tổng Sát Thương Gây Ra: ${dmg.player1}\n🛡️ Chống Chịu: ${def.player2}\n\n👤 Player 2 - ${players[1].name}:\n⚔️ Tổng Sát Thương Gây Ra: ${dmg.player2}\n🛡️ Chống Chịu: ${def.player1}`, (err, res)=>(room.status = 2, room.ready = false));
            };
        } break;
        default: 
          break;
    }
}

module.exports = {
    createCharecter,
    getCharacter,
    getItems,
    getServer,
    buyItem,
    setItem,
    myItem,
    increaseDurability,
    match,
    listLocationNormal,
    listLocationBoss,
    setLocationID,
    getWeapon,
    increaseHp,
    increaseDef,
    increaseAtk,
    increaseSpd,
    getStats,
    listGuide,
    setGuide,
    pvp,
    pvp_rooms,
    getTop,
    getTopPower,
    matchRanking,
    getRankingInfo,
    getTopRank
}