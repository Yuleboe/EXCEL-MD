const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-vtsf.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255714382802";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Yuleboe-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "its Gaddaffi",


  sessionName:process.env.SESSION_ID|| "",  // PUT SUHAIL_13_20_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjExLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMixcbiAgICAgICAgMTkwLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA3NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDcyLFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSRDBTVk9HUDBOUDd0N0p1a0hreW5tSTYrM0Z1RGJyUWwrdFBGcVZRUGNFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwLVVYMlZmeFFkU0c4Qi14SWhsUm5RXCIsXG4gIFwicGhvbmVJZFwiOiBcImZmMjgxOWI5LTgzYjYtNDA5OC1iOTMxLTRmZTA0NDgzYjMyYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDAsXG4gICAgICA5OSxcbiAgICAgIDE4MyxcbiAgICAgIDIzNyxcbiAgICAgIDIxOSxcbiAgICAgIDIzOSxcbiAgICAgIDc0LFxuICAgICAgNTAsXG4gICAgICAyOSxcbiAgICAgIDE3NixcbiAgICAgIDI1NCxcbiAgICAgIDExMixcbiAgICAgIDgwLFxuICAgICAgOTUsXG4gICAgICA3MSxcbiAgICAgIDE5NyxcbiAgICAgIDM0LFxuICAgICAgMTMwLFxuICAgICAgMjMxLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMjQxLFxuICAgICAgMTU5LFxuICAgICAgMjQxLFxuICAgICAgMjQ3LFxuICAgICAgNDMsXG4gICAgICAxOTAsXG4gICAgICA3MCxcbiAgICAgIDE2MixcbiAgICAgIDE4NCxcbiAgICAgIDE1NixcbiAgICAgIDE2MyxcbiAgICAgIDg0LFxuICAgICAgMTQ5LFxuICAgICAgMjA4LFxuICAgICAgODEsXG4gICAgICAxMzUsXG4gICAgICAxODAsXG4gICAgICAzNyxcbiAgICAgIDE4M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDSDJLOU4zRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzE0MzgyODAyOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM5NTYxMjk2MTQyMzc4OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEhMMHFjR0VJWFowTE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYVUQ0bzJYZ2JEWG1wK1d3T0xKMTN5dEdhcXZZamZZQkIwSllVL0NHR0ZNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjl3Rk1vR2w3RXg0NGxvbEI3VlVHSmVBWEtNRzdpcWRFUVRzOGxIZTRuK0JCOHBteDBabU94SzYvSFJPQlU0ZkZYSG9VOFljWEh4ZStaZ3V6T2ZDdENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInljZk5uQ1pRRUVNYndrb1gyODliUHlVQjNLdmlQRkJGWlBQU0NUWU5YRVdTaUovU3lsMFNiWjFNcTkxQjE5TFVMRXZxdzY4NkJqVHRDK0ZCNGFPUERRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTcxNDM4MjgwMjo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODg5NjA5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ== ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
