"use strict";
module.exports.nodemail=function(result){
    const nodemailer = require("nodemailer");
    let table='';
    let template;
    let rows=result.length;
    let cols=result[0].length;
    for(let r=0;r<rows;r++){
        table+='<tr>';
        for(let c=0;c<cols;c++){
            table+='<td>'+result[r][c]+'</td>'
        }
        table+='</tr>';
    }
    template='<table border="2">'+table+'</table>';
    
    
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'sakshipokhria1997@gmail.com', // sender address
      to: "om.pandey@crownstack.com", // list of receivers
      subject: "task 1", // Subject line
      text: "Hello world?", // plain text body
      html:template, // html body
    });
    
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);

}