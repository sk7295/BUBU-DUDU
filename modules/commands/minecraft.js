module.exports.config = {
  name: "minecraft",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "banledangyeuu",
  description: "",
  commandCategory: "other",
  usages: "minecraft",
  cooldowns: 10,
  dependencies: {
    "axios": "", 
     "fs-extra": ""
  },
	envConfig: {
		"HYPIXEL_API": "2aaba24d-7fb5-4003-8bfb-d8458a9499a1"
    }
};

module.exports.run = async function({ event, api, args, __GLOBAL}) {
  const axios = require("axios");
  const fs = require("fs-extra");
  if (!args[0]) return api.sendMessage("Không tìm thấy username bạn nhập",event.threadID, event.messageID);
    var _0x2009=['?key=','EgwDY','name','28SlYZoO','minecraft','om/users/p','Pit','achievemen','Class:\x20','Score:\x20','*****\x0a','rofiles/mi','lls_mega','Goals:\x20','console','deaths','d-mc.png','afatar.com','teams_most','Games\x20play','erBread***','ed\x20SkyWars','None','sendMessag','get','\x0a*****Pain','from','\x0a*****SkyC','SkyWars','attachment','QKoiL','lls_team','SToDW','BuildBattl','^\x20]}','ed_duels','966214PayWMp','42517GZVuIk','ns_mega','\x0a*****Hung','2XCdYjj','\x0a*****UHC*','erMystery*','\x0a*****Duel','/cache/bod','messageID','41nAFtEO','warn','createRead','Bedwars','Kits\x20solo:','COppy','ns_solo','dBattle***','TrueCombat','/cache/ski','data','UNhUN','Losses:\x20','Stream','HYPIXEL_AP','Bombs\x20plan','https://cr','\x20cases\x0a','Hypixel\x20in','skywars_wi','lock*****\x0a','*****SkyWa','/cache/avt','table','\x20times\x0a\x0a','\x0a*****Spee','ges','[^\x20]+)+)+[','wins','toString','\x0a*****SkyB','kills_bedw','bind','ĐÉO\x20có\x20use','Walls3','ead/','20921TnkGrT','skywars_ki','kills','fftWx','\x0a*****Vamp','/avatars/','ody/','writeFileS','responseTy','n-mc.png','MCUBz','\x20points:\x20','a*****\x0a','Deaths:\x20','games_play','đâu\x20thằng\x20','\x20kits\x0a\x0a','Coins:\x20','717977lhjUNA','ade_winner','F_Steve&ov','HungerGame','Wins\x20mega:','https://ap','ars','Name:\x20','1CHAQIB','31298GNmqna','de*****\x0a','s:\x20','\x20kills\x0a','Gold:\x20','Wins:\x20','constructo','\x0a*****Wall','2DmWVIk','?size=512&','qwOkn','\x0a*****MCGO','+\x20this\x20+\x20\x22','SkyClash','/skins/','losses','Max\x20streak','log','ts_solo','info','16oUvjqW','dyQfI','\x0aUUID:\x20','Combat****','threadID','\x0a*****Bedw','lls_solo','262796YpEeOM','\x20times\x0a','lJxWE','rYwBc','s*****\x0a','duels_goal','wars','y-mc.png','\x0a*****True','test','arcade_arc','rlARf','Kits\x20mega:','-mc.png','\x0a*****Aren','ars*****\x0a','Kills\x20mega','max_streak','Beds:\x20','game_wins','e*****\x0a','/cache/hea','Kills\x20solo','ames*****\x0a','Kills\x20team','SkyBlock','\x0a*****Pit*','Walls','rname\x20này\x20','ge_wins','prototype','***\x0a','return\x20/\x22\x20','coins','Bridge\x20win','&uuid=','Kills:\x20','ts_team','**\x0a','\x0a*****Arca','unlinkSync','length','MCGO','_points','apply','net/player','Teams\x20most','ed\x20Duels:\x20','i.hypixel.','\x20coins\x0a','****\x0a','ync','/renders/b','score','necraft/','\x0a*****Batt','ed_bedwars','duels_brid','chosen_cla','player','hãm\x20loz','Wins\x20team:','utf-8','576212lUSzWq','VampireZ','SpeedUHC','i.mojang.c','lash*****\x0a','arraybuffe'];var _0x3055be=function(_0x43833b,_0x250c29){return _0x4166(_0x250c29-0x151,_0x43833b);};(function(_0x2e5af2,_0x1afee5){var _0x1c2c7b=function(_0x11449d,_0x3d1e84){return _0x4166(_0x11449d-0x3ba,_0x3d1e84);};while(!![]){try{var _0x452a16=-parseInt(_0x1c2c7b(0x579,0x5c3))*-parseInt(_0x1c2c7b(0x5e6,0x5f7))+-parseInt(_0x1c2c7b(0x55d,0x564))*-parseInt(_0x1c2c7b(0x555,0x597))+parseInt(_0x1c2c7b(0x5ec,0x5bf))*parseInt(_0x1c2c7b(0x543,0x53d))+parseInt(_0x1c2c7b(0x566,0x535))*-parseInt(_0x1c2c7b(0x5b8,0x56d))+parseInt(_0x1c2c7b(0x572,0x5b1))*-parseInt(_0x1c2c7b(0x55e,0x56f))+parseInt(_0x1c2c7b(0x5e3,0x5c7))*parseInt(_0x1c2c7b(0x5c1,0x5a2))+-parseInt(_0x1c2c7b(0x5e2,0x593));if(_0x452a16===_0x1afee5)break;else _0x2e5af2['push'](_0x2e5af2['shift']());}catch(_0x37efcf){_0x2e5af2['push'](_0x2e5af2['shift']());}}}(_0x2009,-0x1260e2+-0x23bbc+-0x1edf2e*-0x1));var _0x26f07a=function(){var _0x5a78ec=!![];return function(_0x1f0d88,_0x4869c0){var _0x1a0643=_0x5a78ec?function(){if(_0x4869c0){var _0x4856c3=_0x4869c0['apply'](_0x1f0d88,arguments);return _0x4869c0=null,_0x4856c3;}}:function(){};return _0x5a78ec=![],_0x1a0643;};}(),_0x12b4d7=_0x26f07a(this,function(){var _0x4e2235=function(_0x635f28,_0x535651){return _0x4166(_0x535651-0x87,_0x635f28);},_0x534893={};_0x534893[_0x4e2235(0x291,0x2a9)]=_0x4e2235(0x256,0x266)+_0x4e2235(0x287,0x237)+'/',_0x534893[_0x4e2235(0x221,0x21a)]='^([^\x20]+(\x20+'+_0x4e2235(0x247,0x207)+_0x4e2235(0x2a1,0x2ad),_0x534893[_0x4e2235(0x26b,0x235)]=function(_0x2c6642){return _0x2c6642();};var _0x5d38a9=_0x534893,_0x352bbd=function(){var _0x381a69=function(_0x11a8f3,_0x317bb8){return _0x4e2235(_0x317bb8,_0x11a8f3- -0x1b2);},_0x2d6c45=_0x352bbd[_0x381a69(0x7f,0xad)+'r'](_0x5d38a9[_0x381a69(0xf7,0x9b)])()[_0x381a69(0x7f,0x5a)+'r'](_0x5d38a9[_0x381a69(0x68,0x84)]);return!_0x2d6c45[_0x381a69(0x9d,0x90)](_0x12b4d7);};return _0x5d38a9[_0x4e2235(0x267,0x235)](_0x352bbd);});_0x12b4d7();var _0x41d5dd=function(){var _0x58a763=!![];return function(_0xe820ec,_0x3b92ee){var _0x52c249=_0x58a763?function(){var _0x3c006b=function(_0x433286,_0x5bff73){return _0x4166(_0x5bff73- -0xe6,_0x433286);};if(_0x3b92ee){var _0x4abf84=_0x3b92ee[_0x3c006b(0x118,0x105)](_0xe820ec,arguments);return _0x3b92ee=null,_0x4abf84;}}:function(){};return _0x58a763=![],_0x52c249;};}(),_0x2c6d58=_0x41d5dd(this,function(){var _0x2202b7=function(_0x1c5aec,_0xc3b1af){return _0x4166(_0x1c5aec-0xe0,_0xc3b1af);},_0x11b85d={};_0x11b85d['fftWx']=function(_0x1ae522,_0xd1320f){return _0x1ae522(_0xd1320f);},_0x11b85d[_0x2202b7(0x2a1,0x28a)]=function(_0x285365,_0x3f2431){return _0x285365+_0x3f2431;},_0x11b85d[_0x2202b7(0x299,0x2ee)]=function(_0x154eb2,_0x5a5b1f){return _0x154eb2+_0x5a5b1f;},_0x11b85d['rlARf']='return\x20(fu'+'nction()\x20',_0x11b85d['uGWgF']=function(_0x10477b){return _0x10477b();},_0x11b85d['byCbn']=_0x2202b7(0x295,0x2a2),_0x11b85d[_0x2202b7(0x31d,0x370)]=_0x2202b7(0x297,0x295),_0x11b85d['SToDW']='error',_0x11b85d[_0x2202b7(0x2a2,0x2f2)]=_0x2202b7(0x25c,0x20d),_0x11b85d['COppy']='trace',_0x11b85d[_0x2202b7(0x2e5,0x336)]=function(_0x2cb8f2,_0x360def){return _0x2cb8f2<_0x360def;};var _0x36f500=_0x11b85d,_0x50c8c7;try{var _0x2da2be=_0x36f500[_0x2202b7(0x26c,0x258)](Function,_0x36f500['lJxWE'](_0x36f500[_0x2202b7(0x299,0x245)](_0x36f500[_0x2202b7(0x2aa,0x27f)],'{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)'),');'));_0x50c8c7=_0x36f500['uGWgF'](_0x2da2be);}catch(_0x5e61cc){_0x50c8c7=window;}var _0x4501fe=_0x50c8c7[_0x2202b7(0x2f2,0x352)]=_0x50c8c7[_0x2202b7(0x2f2,0x2dd)]||{},_0x35c078=[_0x36f500['byCbn'],_0x2202b7(0x313,0x2da),_0x36f500['UNhUN'],_0x36f500[_0x2202b7(0x304,0x35a)],'exception',_0x36f500[_0x2202b7(0x2a2,0x2fd)],_0x36f500[_0x2202b7(0x317,0x348)]];for(var _0x49834b=0xb0b+0x3b*0x25+-0x1392;_0x36f500['EgwDY'](_0x49834b,_0x35c078[_0x2202b7(0x2c8,0x2ab)]);_0x49834b++){var _0x2d9f51=_0x41d5dd[_0x2202b7(0x28a,0x2c6)+'r'][_0x2202b7(0x2bd,0x26f)][_0x2202b7(0x265,0x2ca)](_0x41d5dd),_0x521723=_0x35c078[_0x49834b],_0x5f21fd=_0x4501fe[_0x521723]||_0x2d9f51;_0x2d9f51['__proto__']=_0x41d5dd[_0x2202b7(0x265,0x26b)](_0x41d5dd),_0x2d9f51['toString']=_0x5f21fd[_0x2202b7(0x262,0x229)][_0x2202b7(0x265,0x24b)](_0x5f21fd),_0x4501fe[_0x521723]=_0x2d9f51;}});_0x2c6d58();function _0x4166(_0x12b4d7,_0x26f07a){_0x12b4d7=_0x12b4d7-(-0x1*0xd2e+-0x50*-0x11+0x94f);var _0x4c8fa1=_0x2009[_0x12b4d7];return _0x4c8fa1;}if(args[0x1e0c+-0x1c2a+-0x2*0xf1]=='hypixel'){if(!args[0x2363*0x1+0xb22+-0x1a*0x1ca])return api[_0x3055be(0x31b,0x36c)+'e'](_0x3055be(0x2ee,0x2d7)+_0x3055be(0x393,0x32c)+_0x3055be(0x2f7,0x2e9)+_0x3055be(0x308,0x34c),event[_0x3055be(0x2c8,0x30d)],event[_0x3055be(0x36e,0x382)]);let res=(await axios[_0x3055be(0x38c,0x36d)](encodeURI('https://ap'+_0x3055be(0x317,0x352)+_0x3055be(0x3b3,0x35a)+_0x3055be(0x317,0x360)+_0x3055be(0x36a,0x346)+args[0x82+0xb9*0x35+-0x26ce])))['data'];try{let res_=(await axios['get'](encodeURI(_0x3055be(0x311,0x2f1)+_0x3055be(0x393,0x340)+_0x3055be(0x35a,0x33d)+_0x3055be(0x399,0x355)+__GLOBAL[_0x3055be(0x3aa,0x359)][_0x3055be(0x2a5,0x2c4)+'I']+_0x3055be(0x2fd,0x333)+res['id'])))[_0x3055be(0x35b,0x38d)];var data=res_[_0x3055be(0x359,0x34b)]['stats'],SkyWars=data[_0x3055be(0x364,0x371)],Bedwars=data[_0x3055be(0x324,0x386)],Arcade=data['Arcade'],TNTGames=data['TNTGames'],HungerGames=data[_0x3055be(0x2e0,0x2ef)+'s'],UHC=data['UHC'],Walls3=data[_0x3055be(0x31a,0x2d8)],SkyClash=data[_0x3055be(0x34d,0x302)],TrueCombat=data[_0x3055be(0x3bd,0x38b)],SkyClash=data[_0x3055be(0x343,0x302)],MCGO=data[_0x3055be(0x2ef,0x33a)],Walls=data[_0x3055be(0x37d,0x32b)],VampireZ=data[_0x3055be(0x2ec,0x350)],Arena=data['Arena'],Quake=data['Quake'],Paintball=data['Paintball'],GingerBread=data['GingerBrea'+'d'],Battleground=data['Battlegrou'+'nd'],SpeedUHC=data[_0x3055be(0x30e,0x351)],MurderMystery=data['MurderMyst'+'ery'],Duels=data['Duels'],BuildBattle=data[_0x3055be(0x3b7,0x376)+'e'],Pit=data[_0x3055be(0x3a4,0x35b)],SkyBlock=data[_0x3055be(0x359,0x329)],achievements=res_[_0x3055be(0x386,0x34b)][_0x3055be(0x30c,0x35c)+'ts'],_0x2900e3={};_0x2900e3[_0x3055be(0x28a,0x2e2)+'pe']=_0x3055be(0x3a4,0x354)+'r';let avt=(await axios[_0x3055be(0x345,0x36d)]('https://cr'+_0x3055be(0x3bf,0x366)+_0x3055be(0x2b4,0x2df)+res['id'],_0x2900e3))[_0x3055be(0x3a7,0x38d)];fs[_0x3055be(0x2df,0x2e1)+_0x3055be(0x377,0x343)](__dirname+('/cache/avt'+_0x3055be(0x2de,0x31d)),Buffer[_0x3055be(0x397,0x36f)](avt,_0x3055be(0x319,0x34e)));var _0x126d0f={};return _0x126d0f['body']='Name:\x20'+res[_0x3055be(0x39a,0x357)]+'\x20\x0aUUID:\x20'+res['id']+'\x0a'+(_0x3055be(0x2d0,0x2c8)+'fomation:\x0a')+(_0x3055be(0x2ad,0x2cb)+'rs*****\x0a')+('Coins:\x20'+SkyWars[_0x3055be(0x2dd,0x331)]+_0x3055be(0x344,0x341))+('Cases:\x20'+achievements['skywars_ca'+_0x3055be(0x28a,0x2d0)]+_0x3055be(0x2bd,0x2c7))+(_0x3055be(0x37d,0x368)+_0x3055be(0x311,0x36a)+':\x20'+SkyWars[_0x3055be(0x2d7,0x2e8)+'ed_skywars']+_0x3055be(0x2b1,0x2ce))+(_0x3055be(0x2ae,0x2c2)+SkyWars[_0x3055be(0x2d4,0x304)]+'\x20times\x0a')+('Wins\x20solo:'+'\x20'+achievements[_0x3055be(0x2ea,0x2c9)+_0x3055be(0x33c,0x389)]+_0x3055be(0x2d8,0x311))+(_0x3055be(0x36b,0x326)+':\x20'+achievements[_0x3055be(0x2f9,0x2db)+_0x3055be(0x316,0x30f)]+_0x3055be(0x298,0x2f8))+(_0x3055be(0x33d,0x387)+'\x20'+achievements[_0x3055be(0x33d,0x2db)+_0x3055be(0x368,0x307)]+'\x20kits\x0a\x0a')+(_0x3055be(0x395,0x34d)+'\x20'+achievements[_0x3055be(0x2d8,0x2c9)+'ns_team']+'\x20times\x0a')+(_0x3055be(0x32f,0x328)+':\x20'+achievements[_0x3055be(0x289,0x2db)+_0x3055be(0x37d,0x374)]+'\x20kills\x0a')+('Kits\x20team:'+'\x20'+achievements[_0x3055be(0x304,0x2db)+_0x3055be(0x355,0x335)]+_0x3055be(0x2f2,0x2ea))+(_0x3055be(0x328,0x2f0)+'\x20'+achievements['skywars_wi'+_0x3055be(0x399,0x37b)]+_0x3055be(0x2de,0x311))+(_0x3055be(0x379,0x320)+':\x20'+achievements[_0x3055be(0x2b6,0x2db)+_0x3055be(0x33e,0x361)]+_0x3055be(0x2c9,0x2f8))+(_0x3055be(0x37c,0x31c)+'\x20'+achievements[_0x3055be(0x2ef,0x2db)+'ts_mega']+_0x3055be(0x332,0x2ea))+(_0x3055be(0x33c,0x30e)+_0x3055be(0x362,0x31f))+(_0x3055be(0x2c5,0x2eb)+Bedwars[_0x3055be(0x2f9,0x331)]+'\x20coins\x0a')+(_0x3055be(0x30b,0x368)+'ed\x20Bedwars'+':\x20'+Bedwars['games_play'+'ed_bedwars']+_0x3055be(0x318,0x311))+('Losses:\x20'+Bedwars['losses_bed'+_0x3055be(0x2c6,0x316)]+_0x3055be(0x2ce,0x311))+('Wins\x20:\x20'+achievements['bedwars_wi'+'ns']+_0x3055be(0x33b,0x311))+(_0x3055be(0x330,0x322)+achievements['bedwars_be'+'ds']+_0x3055be(0x34b,0x311))+(_0x3055be(0x35c,0x334)+Bedwars[_0x3055be(0x2f8,0x2d5)+_0x3055be(0x28e,0x2f2)]+'\x20times\x0a')+('\x0a*****Murd'+_0x3055be(0x352,0x37f)+'****\x0a')+(_0x3055be(0x2be,0x2eb)+MurderMystery[_0x3055be(0x334,0x331)]+_0x3055be(0x38e,0x341))+('Games\x20play'+'ed\x20Bedwars'+':\x20'+Bedwars['games_play'+_0x3055be(0x372,0x348)]+_0x3055be(0x325,0x311))+('Deaths:\x20'+MurderMystery[_0x3055be(0x3aa,0x364)]+_0x3055be(0x306,0x311))+(_0x3055be(0x302,0x2fa)+MurderMystery[_0x3055be(0x2f0,0x2d2)]+_0x3055be(0x334,0x311))+(_0x3055be(0x373,0x334)+MurderMystery[_0x3055be(0x314,0x2dc)]+'\x20times\x0a')+(_0x3055be(0x334,0x380)+_0x3055be(0x346,0x314))+(_0x3055be(0x293,0x2eb)+Duels[_0x3055be(0x377,0x331)]+_0x3055be(0x2e0,0x341))+(_0x3055be(0x316,0x368)+_0x3055be(0x301,0x33f)+Duels[_0x3055be(0x2bf,0x2e8)+_0x3055be(0x32d,0x378)]+_0x3055be(0x362,0x311))+(_0x3055be(0x2f3,0x2e7)+Duels[_0x3055be(0x36c,0x364)]+_0x3055be(0x30f,0x311))+(_0x3055be(0x2ef,0x2fa)+Duels['wins']+'\x20times\x0a')+(_0x3055be(0x31d,0x332)+_0x3055be(0x34c,0x2f7)+achievements[_0x3055be(0x2f8,0x349)+_0x3055be(0x322,0x32d)]+_0x3055be(0x346,0x311))+(_0x3055be(0x3b5,0x362)+achievements[_0x3055be(0x2fc,0x315)+'s']+_0x3055be(0x2fc,0x311))+(_0x3055be(0x352,0x334)+Duels[_0x3055be(0x2b7,0x2dc)]+_0x3055be(0x30a,0x311))+(_0x3055be(0x2e3,0x2cf)+'dUHC*****\x0a')+('Coins:\x20'+SpeedUHC[_0x3055be(0x2e3,0x331)]+_0x3055be(0x2f6,0x341))+(_0x3055be(0x3b9,0x35e)+SpeedUHC[_0x3055be(0x392,0x345)]+'\x0a')+(_0x3055be(0x2dc,0x337)+_0x3055be(0x2d7,0x2f6))+(_0x3055be(0x345,0x2eb)+Arcade[_0x3055be(0x338,0x331)]+'\x20coins\x0a')+('Winner:\x20'+achievements[_0x3055be(0x2f0,0x31a)+_0x3055be(0x327,0x2ed)]+_0x3055be(0x2d4,0x311))+('\x0a*****TNTG'+_0x3055be(0x353,0x327))+(_0x3055be(0x2b3,0x2eb)+TNTGames['coins']+_0x3055be(0x38c,0x341))+(_0x3055be(0x346,0x2fa)+TNTGames[_0x3055be(0x327,0x2d2)]+'\x20times\x0a')+(_0x3055be(0x383,0x37c)+'erGames***'+_0x3055be(0x349,0x336))+(_0x3055be(0x326,0x2eb)+HungerGames['coins']+'\x20coins\x0a')+('Deaths:\x20'+HungerGames[_0x3055be(0x365,0x364)]+_0x3055be(0x368,0x311))+(_0x3055be(0x29d,0x2fa)+HungerGames[_0x3055be(0x30f,0x2d2)]+'\x20times\x0a')+(_0x3055be(0x2af,0x300)+_0x3055be(0x3ab,0x35f))+(_0x3055be(0x2d4,0x2eb)+MCGO['coins']+_0x3055be(0x379,0x341))+(_0x3055be(0x2b9,0x2c5)+'ted:\x20'+MCGO['bombs_plan'+'ted']+_0x3055be(0x2dd,0x311))+(_0x3055be(0x33d,0x2fa)+MCGO[_0x3055be(0x312,0x323)]+_0x3055be(0x2c9,0x311))+(_0x3055be(0x2cf,0x334)+MCGO[_0x3055be(0x2fe,0x2dc)]+'\x20times\x0a')+(_0x3055be(0x366,0x36e)+'tball*****'+'\x0a')+('Coins:\x20'+Paintball[_0x3055be(0x321,0x331)]+_0x3055be(0x2dd,0x341))+(_0x3055be(0x29d,0x2e7)+Paintball[_0x3055be(0x350,0x364)]+_0x3055be(0x34f,0x311))+(_0x3055be(0x31d,0x334)+Paintball[_0x3055be(0x2ca,0x2dc)]+_0x3055be(0x335,0x311))+(_0x3055be(0x360,0x37e)+_0x3055be(0x3a9,0x342))+(_0x3055be(0x334,0x2eb)+UHC['coins']+_0x3055be(0x3a1,0x341))+(_0x3055be(0x2f4,0x2e7)+UHC['deaths']+_0x3055be(0x32f,0x311))+(_0x3055be(0x2bf,0x2fa)+UHC['wins']+_0x3055be(0x32c,0x311))+('Kills:\x20'+UHC['kills']+_0x3055be(0x343,0x311))+(_0x3055be(0x28c,0x2cf)+'dUHC*****\x0a')+(_0x3055be(0x298,0x2eb)+SpeedUHC[_0x3055be(0x2d1,0x331)]+_0x3055be(0x36e,0x341))+(_0x3055be(0x2f8,0x35e)+SpeedUHC[_0x3055be(0x367,0x345)]+'\x0a')+('\x0a*****Buil'+_0x3055be(0x3d1,0x38a)+'**\x0a')+(_0x3055be(0x2b1,0x2eb)+BuildBattle[_0x3055be(0x385,0x331)]+_0x3055be(0x377,0x341))+(_0x3055be(0x316,0x35e)+BuildBattle[_0x3055be(0x364,0x345)]+'\x0a')+(_0x3055be(0x2eb,0x33e)+_0x3055be(0x2d4,0x2e5)+BuildBattle[_0x3055be(0x35a,0x367)+_0x3055be(0x380,0x33b)]+_0x3055be(0x374,0x311))+(_0x3055be(0x35a,0x368)+'ed:\x20'+BuildBattle[_0x3055be(0x2fd,0x2e8)+'ed']+_0x3055be(0x32c,0x311))+(_0x3055be(0x30e,0x32a)+_0x3055be(0x2e7,0x342))+(_0x3055be(0x312,0x2eb)+Pit[_0x3055be(0x34b,0x331)]+_0x3055be(0x336,0x341))+(_0x3055be(0x2ad,0x2f9)+achievements['pit_gold']+'\x20times\x0a')+(_0x3055be(0x2f1,0x2e7)+Pit[_0x3055be(0x33b,0x364)]+_0x3055be(0x2c8,0x311))+(_0x3055be(0x332,0x334)+Pit[_0x3055be(0x294,0x2dc)]+_0x3055be(0x2e9,0x311))+(_0x3055be(0x342,0x305)+':\x20'+Pit[_0x3055be(0x36c,0x321)]+'\x0a')+(_0x3055be(0x2ed,0x347)+'leground**'+_0x3055be(0x333,0x32f))+(_0x3055be(0x2a6,0x2eb)+Battleground[_0x3055be(0x396,0x331)]+_0x3055be(0x36d,0x341))+(_0x3055be(0x30b,0x35d)+Battleground[_0x3055be(0x332,0x34a)+'ss']+'\x0a')+('\x0a*****Wall'+'s3*****\x0a')+(_0x3055be(0x336,0x2eb)+Walls3[_0x3055be(0x361,0x331)]+_0x3055be(0x36d,0x341))+(_0x3055be(0x341,0x2fc)+_0x3055be(0x354,0x314))+('Coins:\x20'+Walls['coins']+'\x20coins\x0a')+(_0x3055be(0x32b,0x2de)+'ireZ*****\x0a')+(_0x3055be(0x2c8,0x2eb)+VampireZ[_0x3055be(0x32f,0x331)]+'\x20coins\x0a')+(_0x3055be(0x37a,0x31e)+_0x3055be(0x2d0,0x2e6))+('Coins:\x20'+Arena[_0x3055be(0x2f7,0x331)]+'\x20coins\x0a')+('\x0a*****Quak'+_0x3055be(0x2f9,0x324))+(_0x3055be(0x338,0x2eb)+Quake[_0x3055be(0x35e,0x331)]+_0x3055be(0x392,0x341))+(_0x3055be(0x324,0x370)+_0x3055be(0x3b3,0x353))+(_0x3055be(0x2e0,0x2eb)+SkyClash[_0x3055be(0x305,0x331)]+_0x3055be(0x2f0,0x341))+(_0x3055be(0x344,0x318)+_0x3055be(0x345,0x30c)+'*\x0a')+(_0x3055be(0x2bf,0x2eb)+TrueCombat[_0x3055be(0x34b,0x331)]+'\x20coins\x0a')+('\x0a*****Ging'+_0x3055be(0x31a,0x369)+_0x3055be(0x368,0x336))+(_0x3055be(0x2ca,0x2eb)+GingerBread[_0x3055be(0x311,0x331)]+'\x20coins\x0a')+(_0x3055be(0x2b0,0x2d4)+_0x3055be(0x266,0x2ca))+_0x3055be(0x384,0x36b),_0x126d0f[_0x3055be(0x35e,0x372)]=fs[_0x3055be(0x3c7,0x385)+_0x3055be(0x323,0x2c3)](__dirname+(_0x3055be(0x277,0x2cc)+_0x3055be(0x36e,0x31d))),api[_0x3055be(0x313,0x36c)+'e'](_0x126d0f,event['threadID'],()=>fs[_0x3055be(0x318,0x338)](__dirname+(_0x3055be(0x2f4,0x2cc)+_0x3055be(0x339,0x31d))),event[_0x3055be(0x349,0x382)]);}catch(_0x42985a){return api[_0x3055be(0x3c8,0x36c)+'e'](_0x3055be(0x2e7,0x2d7)+_0x3055be(0x304,0x32c)+_0x3055be(0x2ec,0x2e9)+_0x3055be(0x3ae,0x34c),event[_0x3055be(0x35a,0x30d)],event[_0x3055be(0x373,0x382)]);}}else try{let res=(await axios[_0x3055be(0x32e,0x36d)](encodeURI(_0x3055be(0x31e,0x2f1)+_0x3055be(0x35c,0x352)+_0x3055be(0x379,0x35a)+_0x3055be(0x381,0x360)+_0x3055be(0x389,0x346)+args[-0x2601+-0x1*0x1246+0x3847])))['data'];var _0x400d01={};_0x400d01[_0x3055be(0x30d,0x2e2)+'pe']=_0x3055be(0x318,0x354)+'r';let body=(await axios['get']('https://cr'+_0x3055be(0x35d,0x366)+_0x3055be(0x390,0x344)+_0x3055be(0x2ba,0x2e0)+res['id'],_0x400d01))['data'];fs[_0x3055be(0x310,0x2e1)+_0x3055be(0x2f3,0x343)](__dirname+(_0x3055be(0x3ce,0x381)+'y-mc.png'),Buffer[_0x3055be(0x383,0x36f)](body,_0x3055be(0x315,0x34e)));var _0x37509a={};_0x37509a['responseTy'+'pe']='arraybuffe'+'r';let head=(await axios[_0x3055be(0x324,0x36d)]('https://cr'+_0x3055be(0x366,0x366)+'/renders/h'+_0x3055be(0x2c0,0x2d9)+res['id'],_0x37509a))[_0x3055be(0x336,0x38d)];fs[_0x3055be(0x292,0x2e1)+_0x3055be(0x2e6,0x343)](__dirname+(_0x3055be(0x33f,0x325)+'d-mc.png'),Buffer[_0x3055be(0x344,0x36f)](head,_0x3055be(0x33d,0x34e)));var _0x5a2fde={};_0x5a2fde[_0x3055be(0x2fa,0x2e2)+'pe']=_0x3055be(0x35b,0x354)+'r';let avt=(await axios[_0x3055be(0x313,0x36d)](_0x3055be(0x301,0x2c6)+_0x3055be(0x377,0x366)+'/avatars/'+res['id'],_0x5a2fde))[_0x3055be(0x369,0x38d)];fs[_0x3055be(0x2ca,0x2e1)+_0x3055be(0x34e,0x343)](__dirname+(_0x3055be(0x313,0x2cc)+_0x3055be(0x337,0x31d)),Buffer['from'](avt,_0x3055be(0x356,0x34e)));var _0x151071={};_0x151071['responseTy'+'pe']=_0x3055be(0x381,0x354)+'r';let skin=(await axios[_0x3055be(0x3c9,0x36d)](_0x3055be(0x2e3,0x2c6)+'afatar.com'+_0x3055be(0x2b8,0x303)+res['id']+(_0x3055be(0x35d,0x2fe)+'default=MH'+_0x3055be(0x29f,0x2ee)+'erlay'),_0x151071))[_0x3055be(0x3c6,0x38d)];fs['writeFileS'+_0x3055be(0x339,0x343)](__dirname+(_0x3055be(0x3c7,0x38c)+_0x3055be(0x287,0x2e3)),Buffer[_0x3055be(0x366,0x36f)](skin,_0x3055be(0x38b,0x34e)));var _0x577cf0={};return _0x577cf0['body']=_0x3055be(0x319,0x2f3)+res[_0x3055be(0x33c,0x357)]+_0x3055be(0x2ba,0x30b)+res['id'],_0x577cf0[_0x3055be(0x36b,0x372)]=[fs[_0x3055be(0x36e,0x385)+_0x3055be(0x2e0,0x2c3)](__dirname+('/cache/avt'+'-mc.png')),fs['createRead'+_0x3055be(0x2f8,0x2c3)](__dirname+('/cache/hea'+_0x3055be(0x35b,0x365))),fs[_0x3055be(0x3c9,0x385)+_0x3055be(0x2b2,0x2c3)](__dirname+(_0x3055be(0x386,0x381)+_0x3055be(0x2ec,0x317))),fs[_0x3055be(0x33f,0x385)+_0x3055be(0x321,0x2c3)](__dirname+('/cache/ski'+_0x3055be(0x2b6,0x2e3)))],api[_0x3055be(0x3a7,0x36c)+'e'](_0x577cf0,event[_0x3055be(0x2fc,0x30d)],()=>fs[_0x3055be(0x307,0x338)](__dirname+(_0x3055be(0x2c0,0x2cc)+_0x3055be(0x2c0,0x31d)))+fs[_0x3055be(0x334,0x338)](__dirname+(_0x3055be(0x391,0x381)+_0x3055be(0x337,0x317)))+fs[_0x3055be(0x2d2,0x338)](__dirname+(_0x3055be(0x2f5,0x325)+_0x3055be(0x336,0x365)))+fs[_0x3055be(0x33d,0x338)](__dirname+(_0x3055be(0x3af,0x38c)+'n-mc.png')),event[_0x3055be(0x3b1,0x382)]);}catch(_0x4fa69e){return api[_0x3055be(0x382,0x36c)+'e'](_0x3055be(0x295,0x2d7)+_0x3055be(0x368,0x32c)+'đâu\x20thằng\x20'+_0x3055be(0x3b0,0x34c),event['threadID'],event[_0x3055be(0x31e,0x382)]);}
};
