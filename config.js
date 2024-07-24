const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_30_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDUwLFxuICAgICAgICA1OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2LFxuICAgICAgICA5NSxcbiAgICAgICAgODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDkxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1MixcbiAgICAgICAgMTYxLFxuICAgICAgICA5MixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NSxcbiAgICAgICAgMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDgwLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDAsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNixcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMVFueGVPL0dFNWh4OE1Fb3pXQW95TU5HOTBWV25Wc0hPWEVRVVJqQWlXWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNzcyMTkyNzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBBQ0Q4QjBEMkE3M0E3OUE3NTcxRTg1MTQ3QUUxOTExXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgxMzQxN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJZTUFJeTJkRVFZYTl6aEg2ZnFvcTRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU5OGI1NmE5LTUzMDUtNDY3NS1iNzM3LTcwMjBmZDk1YTdmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAyLFxuICAgICAgNTcsXG4gICAgICA5NyxcbiAgICAgIDE5NCxcbiAgICAgIDIxMCxcbiAgICAgIDE1MSxcbiAgICAgIDY2LFxuICAgICAgMTAsXG4gICAgICAxNTUsXG4gICAgICA2NCxcbiAgICAgIDE0OSxcbiAgICAgIDI2LFxuICAgICAgMTkzLFxuICAgICAgMTEyLFxuICAgICAgNzksXG4gICAgICAxNixcbiAgICAgIDIwOCxcbiAgICAgIDE3NyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMTczLFxuICAgICAgNTUsXG4gICAgICAxNTMsXG4gICAgICA4OCxcbiAgICAgIDYxLFxuICAgICAgODEsXG4gICAgICAyMDUsXG4gICAgICA5NixcbiAgICAgIDIyOSxcbiAgICAgIDg1LFxuICAgICAgMjMsXG4gICAgICAzLFxuICAgICAgMjI5LFxuICAgICAgMTkwLFxuICAgICAgMjA2LFxuICAgICAgMjI3LFxuICAgICAgODQsXG4gICAgICA5MSxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjc2MkFUREE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzcyMTkyNzk6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3MjIxNjIwMTkxNDMzOjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xLMXo4OENFS0NUZzdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMHhNYjc4bGh0ZlRXVEl4WXhqTzZNWHhTYStqMFN0YUpISkpkOUdRVHRBcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJTTkJVcHlLZ08vOXNIZUN4L2ozNDBuMjlQTTNrT056MnM0T3pCTnFGcnFKRmZjUFJvVUEwZEVpQ3lIYWdkZEpkNjRkZU5IQmRuZ2tCZzBmZ1A1SlRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2SnVUR1pBR08ycFZPbDYrbFdvZjBaM0FHeTVtZ0p5MHQ0dXdYTkhyNHB0b0xOR2Q4N0hqc0dIMXFnaFJlUzBkamZuNi9YMDNhQ3kvNnYveGpNVGlpZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzcyMTkyNzk6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgxMzQxMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZOUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRk5RLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMEZWb0FrdkNGYlViZ1NCL296U1gyMFVvNGl6NCtlbTR0MWdpMEdNRE5GST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDM4NDcwOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTgxMzQxNTU0MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
