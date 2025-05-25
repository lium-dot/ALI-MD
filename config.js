const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "STARK-ALI~65hkWCjC#zvzbXHcfM8H8MQ1B5tvYkrilESpt8b_y7CVQJoSCF2I",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Ꭿℒℒℰℕ ℐЅ ᏇᎯTℂℋℐℕᎶ👀ℐℕ ᎶℋᎾЅT ℳᎾⅅℰ👻*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "A༙L༙LI༙-M༙D༙",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "MR ΛĿĿƐИ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎",
// add bot owner name 
WELCOME: process.env.WELCOME || "false",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups
ADMIN_STATUS: process.env.ADMIN_STATUS || "false",
// make true to know who dismiss or promoted a member in group
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// maks true for always online 
ANTI_CALL: process.env.ANTI_CALL || "true",
//maks anticall true, false for calls
REJECT_MSG: process.env.REJECT_MSG || "★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫ ĪS ΛŦ ßƐΛSŦ MᎾDƐ ŔĪƓĤŦ ИᎾᏯ ƇΛИŦ ŔƐƇĪƐ√Ɛ YᎾƱŔ ƇΛĿĿ 📞📵 ", 
// add anticall message 
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘσωєʀє∂ ву ✞︎★Ꭿ☼︎ℒ☼︎ℒ✩ℰ✫ℕ♫☠︎︎*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/2du3i5.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "𝕭𝕰𝕬𝕾𝕿 𝕸𝕺𝕯𝕰 𝕬𝕮𝕿𝕴𝖁𝕬𝕿𝕰𝕯 🔥🔥 𝕽𝖀𝕹 𝕱𝕺𝕽 𝖄𝕺𝖀𝕽 𝕷𝕴𝕱𝕰👀☠️",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "private",
// make bot public-private-inbox-group 
DELETE_LINK: process.env.DELETE_LINK || "false",
// make anti link true,false for groups 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "true",
// true if want mark commands as read 
DEV: process.env.DEV || "254758443111",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
  
