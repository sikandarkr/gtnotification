var OneSignal = require('onesignal-node');
module.exports = {
   send:(message, callback)=>{
       var data = {"data":"dummy data"}
        var myClient = new OneSignal.Client({
            userAuthKey: process.env.USERAUTHKEY,
            app: { appAuthKey:process.env.APPAUTHKEY , appId:process.env.APPID}
        });
        myClient.sendNotification(message,  function (err, httpResponse,data) {
            if (err) {
                callback(false, err, httpResponse);
            } else {
                callback(true, data, httpResponse);
                
            }
        });
   }
  };