const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
client.user.setActivity("Metehan ❤️")
client.user.setStatus("dnd")
console.log("Bot aktif, s ve j gibi kadim olun.")
};