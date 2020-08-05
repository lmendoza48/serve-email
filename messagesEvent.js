const request = require('request');
module.exports = () =>{
   request('https://api.bitso.com/v3/order_book/?book=btc_ars', { json: true }, (err, res, body) => {
      if (err) {
         return console.log(err); 
      }
      let resp = JSON.stringify(body, undefined, 1);
      console.log("response: ", resp);
   });

//funciona request get
    
 /*let options = {
 
    path:'https://api.bitso.com/v3/order_book/?book=btc_ars',
    method: 'GET'
 }
 
 callBackData = (resp)=>{
      let dato = '';

      resp.on('data', (chunk)=>{
          dato += chunk;
      });

      resp.on('end', ()=>{
           console.info('response', dato);
      });
 }

 let getInfo = https.request(options, callBackData);

 getInfo.end();
 getInfo.on('error', (error)=>{
    console.info('error', error.message);
 });*/

}
