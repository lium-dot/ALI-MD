const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-md-pair.onrender.com";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "ALI-MD~yQ9QzIQY#AI7cvSR3mHJSxnR_XIXyHqWHTs-ivDfL9W3x4XnNIqM", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254758443111", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "false",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "false",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY STARK-MD", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254778620961", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "ΛĿĿᏋЙ", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "ΛĿĿᏋЙ", // Custom
    PACK_NAME: process.env.PACK_NAME || "",
    HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "", // Custom
    PREFIX: process.env.PREFIX || "*",
    VERSION: process.env.VERSION || "7.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTIBAD: process.env.ANTIBAD || "true",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ƇΛĿĿ ИᎾŦ ΛĿĿᎾᏯƐD ṖŔᎾßΛßĿY ßƱSY 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "❤︎ƓƐИZ✞︎☺ҠƐИYΛ❤︎", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://ibb.co/Z6ctM06q", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "STARK MD ALIVE",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "null", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Kenya/Nairobi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
