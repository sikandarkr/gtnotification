var notificationHandler = require('../../utils/notification_handler');
var OneSignal = require('onesignal-node');
module.exports =
{
    sendGift:async(req,res,next)=>{

      const { player_id, message, notification_banner, sender_name, reciever_name, sender_profile} = req.body;

      var notification = new OneSignal.Notification({
          contents: {
              en: message,
              tr: "test notification from gifticon....."
          },
          include_player_ids: [player_id],
          small_icon: "", // can not be an url
          large_icon: sender_profile,
          big_picture:notification_banner
      });
      notification.postBody["data"] = {"type": "marketing", "data": "sikandar"};  
      notificationHandler.send(notification, function(status, data, onesignalRes){
          if(status){
              if(onesignalRes.statusCode=='200'){
                return res.status(200).send({statusCode:200, status:true,message:"notification sent successfully"});
              }
              else
              {
                return res.status(500).send({statusCode:500, status:false,message:"Internal server error"});
              }
          }
          else
          {
            return data;
          }
      });
    },
  sendTease:async(req,res, next) =>{
    const { player_id, message, notification_banner, sender_name, reciever_name, sender_profile} = req.body;
    var notification = new OneSignal.Notification({
      contents: {
          en: message,
          tr: "test notification from gifticon....."
      },
      include_player_ids: [player_id],
      small_icon: "", 
      large_icon: sender_profile,
      big_picture:notification_banner
  });

  notificationHandler.send(req,res, notification);

},

notifyEvent:async(req, res, next)=>{
  const { player_id, message, sender_name, reciever_name, sender_profile} = req.body;
    var notification = new OneSignal.Notification({
      contents: {
          en: message,
      },
      include_player_ids: [player_id],
      large_icon: sender_profile,
  });
  notification.postBody["data"] = {"abc": "123", "foo": "bar"};  
  notificationHandler.send(req,res, notification);
  
}

}
