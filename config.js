const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "254741063628" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254741063628";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254741063628,254741063628";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254741063628,254xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_05_45_02_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiaUxGaXZqSUlQSUlkUS9TWm5vVWk4UktkZkZRTVVkZlF4STBJNGFyRnhYTT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIms3MithbUd1Y2JxU0hTMi8zZmY5OGFOOGt1a3d1QU0yNWUvVzlGQ2pSM009XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiNEpDTmRTVkcrSlR1Unh0TklWUTVqYVJLLzEwUVo0emo4bHhXRnhCVVozcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm80b1dqRWNCRFBzOUYydi9XbWRWQ1lJMnhNdVc4TTV2MHBRK0gvWGU1M0E9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwic05zc3RQOURLOW9FNkoyeHAyRkVCVXl0SzcrQlRnVjNTZmlvelhlOGprOD1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInVmVldBeFl6WWR0TWhpc3o1c1JRZlRPc1VQWWg5MTJCaWVCK0J4OXR0SFk9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJnQWF2d0p6cVlzVnFwRklVUDlzNDROU3RVVkQzK1hYNFRrWERQV2tLc2tvPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiUTlUY3FSV1JLU2ErZmV4YTArd1JZaTlWelBqSkY2a0hHZU82LytPaDN5MD1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJBWEQvdFRIVk1GbGcrTk1jZXFiTWhmamtBSHBNSFpNUy9laXlZdjA5Y1paUzdGYVozUWlBRzMwZWFmZGozUnRMWC9SakR0aWE0V1h6Mkx0TDlkU29DZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTUsXCJhZHZTZWNyZXRLZXlcIjpcImVuSE1oMDFtU3k0YlFQQjJ5b1pmOG1BUk1FTHpHMTdqM1dvbmdtUTIvMXM9XCIsXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjpbe1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCIyNTQ3NDEwNjM2MjhAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiRjQ1NzI2QkMyRjBBQTI0NjFGNTFFRTdBNjhFRDI5MkRcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcwODgzOTkzMX1dLFwibmV4dFByZUtleUlkXCI6MzEsXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOjMxLFwiYWNjb3VudFN5bmNDb3VudGVyXCI6MCxcImFjY291bnRTZXR0aW5nc1wiOntcInVuYXJjaGl2ZUNoYXRzXCI6ZmFsc2V9LFwiZGV2aWNlSWRcIjpcIkx5LUZueFM4UXAyNEhDWXBJR0M4ckFcIixcInBob25lSWRcIjpcImNmYjA0MGMzLWU4YzktNDcwMi04MDcxLTc3MzNjMzlhNzQxNVwiLFwiaWRlbnRpdHlJZFwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMjZQeHduQkE1VkozWVF4RC80aWJOSUpWcEh3PVwifSxcInJlZ2lzdGVyZWRcIjpmYWxzZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDSDlxQitmOUdlcEttNlhiR1B0OUNMcXNMeHc9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJhY2NvdW50XCI6e1wiZGV0YWlsc1wiOlwiQ01HdHAyY1E4cWZycmdZWUFpQUFLQUE9XCIsXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6XCJjMDR0SFVHUWFERVpjaWJGUUdqOWpEUXp3RE9Kdmh5MzBTSjBMTTFZV1JRPVwiLFwiYWNjb3VudFNpZ25hdHVyZVwiOlwiTE9MUVlhaHlxVFBUL1U4aFYxMnJUVFJYbkxkYUNzcVU5NjBBcW05Yjk1ak9KVlUvU2lsQXhET2pnM1d6a09IeFNUYXJiRStiYlRtMHJDNEhhdkowQkE9PVwiLFwiZGV2aWNlU2lnbmF0dXJlXCI6XCJRZjljcnlJaE5VK05nMXRyY25pWklLWHU3NzNUWEoxc0FFaWZmTENuOU5qd0ZiSUN4UEdKWXI1SnVoa3RHcjJ6ayt2WWJHWWpoQjRxZmRQelBZTXFBdz09XCJ9LFwibWVcIjp7XCJpZFwiOlwiMjU0NzQxMDYzNjI4OjJAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMjE4MjY2NDEyNzg5ODQ2OjJAbGlkXCIsXCJuYW1lXCI6XCJWdm7wn6aL8J+kjSDwn6aLXCJ9LFwic2lnbmFsSWRlbnRpdGllc1wiOlt7XCJpZGVudGlmaWVyXCI6e1wibmFtZVwiOlwiMjU0NzQxMDYzNjI4OjJAcy53aGF0c2FwcC5uZXRcIixcImRldmljZUlkXCI6MH0sXCJpZGVudGlmaWVyS2V5XCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJCWE5PTFIxQmtHZ3hHWElteFVCby9ZdzBNOEF6aWI0Y3Q5RWlkQ3pOV0ZrVVwifX1dLFwicGxhdGZvcm1cIjpcImFuZHJvaWRcIixcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOjE3MDg4Mzk5MjcsXCJteUFwcFN0YXRlS2V5SWRcIjpcIkFBQUFBR1VlXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1VlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRk15THNDWUNpbG9ycGt5b0dVUW82RXd3K1c5MGtVTzA5ZDFRK0ZpWU9Lbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTY2NTE0NTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwODc3ODU1NjQzNlwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "steve-ai",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
