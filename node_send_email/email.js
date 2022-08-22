const {
    sendEmail,
    sendTemplateEmail,
    SendNewTemplate
} = require('./AWS-ses_email')

// sendEmail('wahajreh96@gmail.com', 'wahaj')
//     .catch((ch) => {
//         console.log('catch\n', ch)
//     })
//     .then((th) => {
//         console.log(th)
//     })

// sendEmail('wahajreh96@gmail.com', 'wahaj')
//     .catch((ch) => {
//         console.log('catch\n', ch)
//     })
//     .then((th) => {
//         console.log('then', th)
//     })
main = async () => {
    try {
        var html = `<!DOCTYPE html>
        <html>
        <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <title>Email Template</title>
        <link href='https://fonts.googleapis.com/css?family=Heebo:100,300,400,500,700,800,900&display=swap' rel='stylesheet'>
        </head>
        
        <style type='text/css'>
            body {margin: 0; padding: 0; background: #f7f7f7; font-family: 'Heebo', sans-serif;}
            td {color: #000;}
        </style>
        <body>
        <table width='680' align='center' cellpadding='40' cellspacing='0' border='0' bgcolor='#fff'>
            <tr>
                <td width='100%'>
                    <table width='100%' cellpadding='0' cellspacing='0' border='0'>
                        <tr>
                            <td width='100%'>
                                <table width='100%' cellpadding='0' cellspacing='0' border='0'>
                                    <tr>
                                        <td align='left' width='50%'>
                                            <img src='https://api.elitepartyz.com/Images/logo.png'>
                                        </td>
                                    </tr>							
                                </table>
                            </td>
                        </tr>
        
                        <tr>
                            <td width='100%'>
                                <table width='100%' cellpadding='20' cellspacing='0' border='0'>
                                    <tr>
                                        <td>
                                            <table width='100%' cellpadding='0' cellspacing='0' border='0'>										
                                                <tr>
                                                    <td width='100%' style='height: 20px'></td>
                                                </tr>
                                                <tr>
                                                    <td align='center' style='font-size: 48px; font-weight: bold;'>Transaction Summary</td>
                                                </tr>										
        
                                                <tr>
                                                    <td width='100%' style='height: 60px'>&nbsp;</td>
                                                </tr>
        
                                                <tr>
                                                    <td align='left' style='font-size: 20px; font-weight: bold;'>Dear {{firstlastNameStrPrtyApp}},</td>
                                                </tr>
        
                                                <tr>
                                                    <td width='100%' style='height: 60px'>&nbsp;</td>
                                                </tr>
        
                                                <tr>
                                                    <td width='100%'>
                                                        <table width='100%' cellpadding='0' cellspacing='0' border='0'>													
                                                            <tr>
                                                                <td align='left' style='font-size: 20px; color: #000;'><b>Business Name:</b> {{businessNameStrPrtyApp}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='font-size: 20px; color: #000;'><b>ABN:</b> {{ABNNamePrtyApp}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='font-size: 20px; color: #000;'><b>Business Address:</b> {{businessAddressApp}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='font-size: 20px; color: #000;'><b>Business Phone:</b> {{landlineNumberApp}}</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
                                                            </tr>
                                                            <tr>
                                                                <td align='left' style='font-size: 20px; color: #000;'><b>Transaction Date:</b> {{DateStrPrtyApp}} </td>
                                                            </tr>`
        html += `<tr><td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td></tr>
<tr><td align='left' style='font-size: 20px; color: #000;'><b>Product Name:</b> {{ProductNamePrtyApp}} </td></tr>`

        html += `<tr>
<td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
</tr>
<tr>
<td align='left' style='font-size: 20px; color: #000;'><b>Quantity:</b> {{purchaseQuantityPrtyApp}}</td>
</tr>

<tr>
<td align='left' style='height: 5px; line-height: 5px;'>&nbsp;</td>
</tr>
<tr>
<td align='left' style='font-size: 20px; color: #000;'><b>Product Type:</b> {{productTypePrtyApp}}</td>
</tr>

<tr>
<td align='left' style='height: 20px; line-height: 20px;'>&nbsp;</td>
</tr>
<tr>
<td align='left' style='font-size: 20px; color: #000;'><b>Total Amount:</b> $ {{totalPrtyApp}}</td>
</tr>

<tr>
<td align='left' style='height: 60px;'>&nbsp;</td>
</tr>

<tr>
<td align='left' style='font-size: 20px; color: #000;'>Thank you for your business, if you have any queries please contact us on @landlineNumberPrtyApp or via <br/>Email: {{emailAddressPrtyApp}} <br/>All purchases and transactions are GST inclusive.</td>
</tr>

<tr>
<td align='left' style='height: 60px;'>&nbsp;</td>
</tr>

<tr>
<td align='left' style='font-size: 14px; line-height: 20px; color: #000;'>Note: Elite Partyz PTY LTD is not responsible for any transactions, purchases, rentals and hires. All payments are between the purchaser and the business. If you have an issue with a transaction, you must contact the business directly. Please keep a copy of this receipt. </td>
</tr>

<tr>
<td width='100%' style='height: 60px'>&nbsp;</td>
</tr>

</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>

<tr>
<td width='100%'>
<table align='center' width='68%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td width='100%'>
<table width='100%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td align='center' width='33.33%'>
<a href='https://www.instagram.com/elite.partyz/' target='_blank'><img src='https://api.elitepartyz.com/Images/insta.png'></a>
</td>
<td align='center' width='33.33%'>
<a href='https://www.facebook.com/elitepartyz.io/' target='_blank'><img src='https://api.elitepartyz.com/Images/fb.png'></a>
</td>
<td align='center' width='33.33%'>
<a href='https://twitter.com/ElitePartyz' target='_blank'><img src='https://api.elitepartyz.com/Images/twitter.png'></a>
</td>
</tr>
</table>
</td>								
</tr>
</table>
</td>
</tr>

<tr>
<td width='100%'>
<table align='center' width='68%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td width='100%' style='height: 40px;'>&nbsp;</td>
</tr>

<tr>
<td width='100%'>
<table width='100%' cellpadding='0' cellspacing='0' border='0'>
<tr>
<td align='center' width='100%'>
<a style='font-size: 16px; width: 33.33%; box-sizing: border-box; float: left; height: 14px; line-height: 14px; color: #000; text-decoration: none; padding: 0 15px; border-right: 1px solid #000;' href='https://www.elitepartyz.com/' target='_blank'>Elite Partyz</a>
<a style='font-size: 16px; width: 33.33%; box-sizing: border-box; float: left; height: 14px; line-height: 14px; color: #000; text-decoration: none; padding: 0 15px; border-right: 1px solid #000;' href='https://www.elitepartyz.com/support/' target='_blank'>Support</a>
<a style='font-size: 16px; width: 33.33%; box-sizing: border-box; float: left; height: 14px; line-height: 14px; color: #000; text-decoration: none; padding: 0 15px;' href='https://www.elitepartyz.com/privacy-policy/' target='_blank'>Privacy Policy</a>
</td>											
</tr>
</table>
</td>								
</tr>							
</table>
</td>
</tr>
</table>
</td>
</tr>	
</table>
</body>
</html>`

        // console.log(html)

        //   .catch(ch => {
        //     console.log(ch)
        //   })
        //   .then(th => {
        //     console.log(th)
        //   })
        //   console.log(senTempEmail)
        // }

        var a = {
            name: 'ali',
            email: 'abc.com',
            age: 40
        }

        Ja = JSON.stringify(a)

        console.log(Ja)
        var temData = await SendNewTemplate(
            'test1',
            '<h1>{{name}} and {{email}} and {{age}}</h1>',
            'abc'
        )

        console.log('aa', temData)

        var senTempEmail = await sendTemplateEmail(
            'wahajreh96@gmail.com',
            'test1',
            Ja
        )
    } catch (ex) {
        console.log(ex)
    }
}

// main()



date = Date.parse()