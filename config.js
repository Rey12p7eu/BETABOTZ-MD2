global.owner = ['6283156958610']  
global.mods = ['6283156957610'] 
global.prems = ['6283156957610']
global.nameowner = 'Hannn'
global.numberowner = '6283156957610'
global.mail = 'Niabot@gmail.com' 
global.gc = 'https://chat.whatsapp.com/HPK9MOa6aqL6zXluPAbG0g'
global.instagram = 'https://instagram.com/Hannn2257'
global.wm = '© Han'
global.wait = '_*Tunggu kak sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat tunggu ya kak...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'MQiLq9e3' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'l6Rl9vGn'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'MQiLq9e3', 
  'https://api.botcahx.eu.org': 'l6Rl9vGn'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
