const AWS = require('aws-sdk')

const SES_CONFIG = {
  accessKeyId: 'AKIAQANF6JGNEZFSTQXT',
  secretAccessKey: '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',
  // region: 'us-west-1',
  region: 'us-west-2'
  // region: 'us-east-1',
  // region: 'Ap-southeast-2',
}

const AWS_SES = new AWS.SES(SES_CONFIG)

let sendEmail = (recipientEmail, name) => {
  let params = {
    Source: 'support@elitepartyz.com',
    Destination: {
      ToAddresses: [recipientEmail]
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: 'This is the body of my email!'
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: `Hello, ${name}!`
      }
    }
  }
  return AWS_SES.sendEmail(params).promise()
}

let sendTemplateEmail = async (recipientEmail, template, tData) => {
  try {
    let params = {
      Source: 'support@elitepartyz.com',
      Template: template,
      Destination: {
        ToAddresses: [recipientEmail]
      },
      TemplateData: tData // '{\n    "name":"ali"\n}' //'{ \"name\':\'John Doe\'}'
    }
    return await AWS_SES.sendTemplatedEmail(params).promise()
  } catch (ex) {
    console.log(ex)
  }
}
let SendNewTemplate = async (temName, html, subject) => {
  var params = {
    Template: {
      TemplateName: temName /* required */,
      HtmlPart: html,
      SubjectPart: subject,
      TextPart: ''
    }
  }

  // Create the promise and SES service object
  var templatePromise = new AWS.SES(SES_CONFIG).updateTemplate(params).promise()

  // Handle promise's fulfilled/rejected states
  //   templatePromise
  //     .then(function (data) {
  //       console.log('Template Updated')
  //     })
  //     .catch(function (err) {
  //       console.error(err, err.stack)
  //     })
}
module.exports = {
  sendEmail,
  sendTemplateEmail,
  SendNewTemplate
}
