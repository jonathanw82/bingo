"use strict";

// const video1_url =  "https://rr4---sn-aigzrnze.c.drive.google.com/videoplayback?expire=1703259760&ei=QISFZdKwCMnYwtQP9Z61sAE&ip=95.145.38.115&id=9ef9a30e2844b4ec&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=1g&mm=32&mn=sn-aigzrnze&ms=su&mv=u&mvi=4&pl=25&ttl=transient&susc=dr&driveid=1pUUnODpkpi-XknpE3mHA7DqRcldPYP3p&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=154.760&lmt=1703185179501814&mt=1703246740&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAJbUKJ9ROP2dhIl1YHpzL7QOBE2w8RQJY7r2GRj0aIsVAiEAsEKs7dhH2ntVMphw8uiK6LbSsswqkFHvt3_f2kJfsWI=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgIlZPfDv7gucLC78L4x0lBnYUZvmzQasLiuA6TFeotZECIQDeT1RFJlJBFYnBnsNZstHqFfFFLK1Tn_DNclMRcYRVRA==&cpn=AkmiomUYeWtwwKAs&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00";
// const video2_url =  "https://rr2---sn-aigl6nz7.c.drive.google.com/videoplayback?expire=1703259808&ei=cISFZfOkKYX2wtQPvc-eGA&ip=95.145.38.115&id=2a94b39526f37cce&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=MU&mm=32&mn=sn-aigl6nz7&ms=su&mv=u&mvi=2&pl=25&ttl=transient&susc=dr&driveid=11hMUgEq3RHIyt55Lw_Cd65zzeS7GgMpW&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=144.451&lmt=1703185044019294&mt=1703246740&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgOmmq0RyYCYzpaTqqE4Mp6zmOsTrYK1mtVLzuJEDZibUCIHsLbZy2T7Li_W6Gt606Mp-B_j0bPmCXoapdATJ96ZBq&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAIJeeJWZ9gi7hbg2Jq25mmf_DgEPVHHaEP6Je7i546qHAiEA-g2KPs4TM6ZhIJAG8cj3mPMVpt_GSjblZcWQHBpqqEI=&cpn=_BwDqDUqeGvY5pnz&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00";
// const video3_url =  "https://rr2---sn-aigl6nsk.c.drive.google.com/videoplayback?expire=1703259839&ei=j4SFZYTWIdOHkucPkIGpwAw&ip=95.145.38.115&id=d8cb654da1d51814&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=Hu&mm=32&mn=sn-aigl6nsk&ms=su&mv=u&mvi=2&pl=25&ttl=transient&susc=dr&driveid=1v5xY3PR79OFFoxOO775c3YHGnLqk8HsR&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=149.884&lmt=1703184968169749&mt=1703246740&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAOJItP0SOXanMGky3TBMttHCCvKK9oMJtnCLECs3s9A3AiAcKxGTFlp-JwCKLwNwR7kmAJA5lew7hgKFsN6yIEUeJw==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAIPbXy9TsszWOQhWaC9E7o5qoLofJF2gLiM9xj-grT4nAiEAzbs1tQbqBbnwKdhrMst6vtcBZ08OsRPsFF1eKb-KDdU=&cpn=_E3Wqx4HxbjGC_Bh&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00";
// const video4_url =  "https://rr2---sn-aigzrnse.c.drive.google.com/videoplayback?expire=1703259873&ei=sYSFZfPoJ93Fu7APwL-WuAQ&ip=95.145.38.115&id=1d1fffc4920a880e&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=YX&mm=32&mn=sn-aigzrnse&ms=su&mv=m&mvi=2&pl=25&ttl=transient&susc=dr&driveid=1pReVOlj1uDVpzIcDU_11P4CJxjNXaxxk&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=144.590&lmt=1703185288926968&mt=1703248852&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhAJcmWtOjzeYCb9lGYpY9aCvLCxRZSWOfG7uRJKaVddc0AiAv2utJvFODTL7CDKM9s0OApSoS6ZmtgB1CVbds8tz0NQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRAIgPtSvdR7McHBvqMiW1JeUWRW9KgkoNiiTSrFSMYwjMy8CIAd0CbmszE6yHTkNXhcxmE63uanqVPVd9PXs5BzoQexe&cpn=JF3lgblYjSDG0n64&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00";
// const video5_url =  "https://rr5---sn-aigl6nek.c.drive.google.com/videoplayback?expire=1703259928&ei=6ISFZan8MvL5pb0PnraGkAU&ip=95.145.38.115&id=fc7718a61c104226&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=dI&mm=32&mn=sn-aigl6nek&ms=su&mv=m&mvi=5&pl=25&ttl=transient&susc=dr&driveid=1QNPz9i76QHV-rQVPdbK1G_TXGSHo7zPf&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=147.028&lmt=1703186737035862&mt=1703248852&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRgIhAN19Tkf36TVMuG9fX0zp4B5Cv4HI0Y4hIxDWWEwlo7JEAiEA42CAPiHiFUMnSH-DkjokUNpfWEisBwH8htiSj_ALRjw=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAP_Tnso4LeZeBTw4d7VBxmdY2iMeypPRxgLhut5pxOUaAiEAwDaH6NFfMRhqp4kIAf_YOTwXJwBUYljE92pCLa28GP8=&cpn=sK7Vqknvfod8o53J&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00";
// const endCredit_vid = "https://rr4---sn-aigzrnsl.c.drive.google.com/videoplayback?expire=1703273129&ei=ebiFZZqTL-Wq2bQPzrWw8AI&ip=95.145.38.115&id=af83d146b49886ef&itag=22&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=4t&mm=32&mn=sn-aigzrnsl&ms=su&mv=u&mvi=4&pl=25&ttl=transient&susc=dr&driveid=1bQqL8uWxdKxwLj1yMzWGikpYwfhBXuCL&app=explorer&eaua=WIug9EHVF8Q&mime=video/mp4&vprv=1&prv=1&dur=213.716&lmt=1703261408018003&mt=1703261899&subapp=DRIVE_WEB_FILE_VIEWER&txp=0006224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRAIgUGRw2Odcn2BNWoQVXTbaj5ilsfQJSPF6OnHMYkPLZ3kCIA2r-N_hwq0X8vejSDND77w6s2kg7g9j4fQ47CnaFvTg&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRgIhAOkgG0ZZCAvKdn2avALk2vzY5w1laZbdXKqVBfR2rRu1AiEAps2Z7AQzN7x8oTq1z-ho-ojAhIlwRPlF1JEbK71SbbU=&cpn=h8zKBQMHVagpZ0I4&c=WEB_EMBEDDED_PLAYER&cver=1.20231217.00.00"

const video1_url = "assets/video/video1.mp4";
const video2_url = "assets/video/video2.mp4";
const video3_url = "assets/video/video3.mp4";
const video4_url = "assets/video/video4.mp4";
const video5_url = "assets/video/video5.mp4";
const endCredit_vid = "assets/video/end credits.mp4";