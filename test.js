const axios = require("axios");

axios({
	url: "https://logrik.go88.video/api/Account/LoginRikVip",
	method: 'POST',
	data: {"LoginType":1,"UserName":"vietle11","Password":"7749truong","DeviceId":getGUID(),"DeviceType":1}
}).then(data=>{
	console.log(data.data)
}).catch(e=>{console.log(e.response.data)})

function getGUID() {
	let dateNow = Date.now(),
		xyz = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
			/[xy]/g,
			function (_0x32f946) {
				let random = Math.floor((dateNow + Math.random() * 16) % 16)
				dateNow = Math.floor(dateNow / 16)
				let _0x31fcdd = (
					_0x32f946 == 'x' ? random : (random & 7) | 8
				).toString(16)
				return _0x31fcdd
			}
		)
	return xyz
}