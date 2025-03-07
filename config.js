const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_11_03_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTcyLFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NixcbiAgICAgICAgMjE5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA4NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA2NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDk1LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDY0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDMyLFxuICAgICAgICAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImh3T2FCeFJJTnFPdmVlTGlyZHpUbThoaFRIQXRyTTA1M1NOUUxMeWkyWk09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5MzI0OTU1NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFNThEQTcyMTc2M0FGMDcxNTI5NEUwNkIyRkFDMzdBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTc0MTM2NzUxMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvYTdZemQ3NlQ0TzZzZ2Z1Tzd0Zkd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjE1OThhZWY3LTJmNTItNGRhOC05MjU3LWQzZDgxMTRlOGU1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMSxcbiAgICAgIDE0MSxcbiAgICAgIDQsXG4gICAgICAyMyxcbiAgICAgIDE5LFxuICAgICAgMjMzLFxuICAgICAgMTc5LFxuICAgICAgMjQ3LFxuICAgICAgMTkyLFxuICAgICAgMTMxLFxuICAgICAgMTc5LFxuICAgICAgMTk0LFxuICAgICAgNyxcbiAgICAgIDEyNSxcbiAgICAgIDE5NSxcbiAgICAgIDI0OSxcbiAgICAgIDE1MSxcbiAgICAgIDgzLFxuICAgICAgMzIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDEyMSxcbiAgICAgIDE3LFxuICAgICAgMjQ1LFxuICAgICAgMTY3LFxuICAgICAgMTY3LFxuICAgICAgNjMsXG4gICAgICAyMjMsXG4gICAgICA0MSxcbiAgICAgIDE0NSxcbiAgICAgIDEwOSxcbiAgICAgIDE0MSxcbiAgICAgIDcwLFxuICAgICAgMTAwLFxuICAgICAgMTcwLFxuICAgICAgMTcwLFxuICAgICAgMTg2LFxuICAgICAgMjUyLFxuICAgICAgMTgwLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ3TDVKQ0Q4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDkzMjQ5NTU0NTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTg0MzAxODI4MjE5MDkxOjg2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pMXNMWUhFTTdSckw0R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ1ZMMThBS01ISWtYT1ZaUnBHYU1RR1duRjEzZ01kdGJRQnN2cHdNVy9HND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJERjNsSVFoM21JTVhUYjdESERTc0Z5ekZ2d0lnWFdPMnd2RlUwZ2c5YWhHN2xKcGZhK3djYUp2UHBrRk5TdTdVbzBIcVpjd0prSzhSMGMrcHV6ZjBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxQ2hpUVZjb2lvUTg3dVNqeW1VUE5FaitXWjlHRU5GSzdmTnlWWjk0Rm1yUG5pR3d3Y2FCNks0OC9peEJ4dDRpZmMwSWhLV3pZSlVkaHZWTHRlUGNodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzMjQ5NTU0NTo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0MTM2NzUwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZMcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkxxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRTlJbVpXLzhmb0xnQUFQNU9lWXlUWkJLTEJISE00SFNkblRzbkNVRXBCUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTkzMDg3Njk4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzQwNzg2NDI4NjY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "#",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


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
