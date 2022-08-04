const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2


const sendPaypalDetail = async (email, data) => { //depende del mail que ingresa el usuario y el uniqueString que se crea con crypto

  const myOAuth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENTSECRET,
    "https://developers.google.com/oauthplayground"
  )

  myOAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_REFRESHTOKEN
  })

  const accessToken = myOAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      type: "OAuth2",
      user: process.env.USER,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENTSECRET,
      refreshToken: process.env.GOOGLE_REFRESHTOKEN,
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false //para evitar que bloquee el antivirus
    }
  })
  
  /* const urlHost = "http://localhost:4000/" */
  const urlHost = "https://daftlab.herokuapp.com/" 


  let mailOptions = {
    from: process.env.USER,
    to: email,
    subject: 'Buy detail',
    html: `
            <a href=${urlHost}>Thanks for your purchase, take the resume : <div>${data}</div>!</a>
            
          `
  }

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error)
    } else {
      console.log(`Error`)
    }
  })
  
}

module.exports = sendPaypalDetail