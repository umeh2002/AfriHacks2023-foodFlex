import nodemailer from "nodemailer";
import { google } from "googleapis";
import path from "path"
import ejs from 'ejs'



const Google_ID: string =
  "515997591712-h3d7e0p17ipjumbuusqs93f5boldtucr.apps.googleusercontent.com";
const Google_SECRET: string = "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";
const Google_REFRESH: string =
  "1//04Wc0f74tqzFuCgYIARAAGAQSNwF-L9Irdku-fajBIhK05UXlrAh8sZzFFiHRk3NCbjfDlo3yf_1umhcXijr8A-2nl2p4YSXrNHY";
const Google_URL: string = "https://developers.google.com/oauthplayground";


const oAuth = new google.auth.OAuth2(Google_ID, Google_SECRET, Google_URL);
oAuth.setCredentials({ access_token: Google_REFRESH });

const URL : string = "http://localhost:2738"

export const sendMail = async (newUser:any, tokenID:any)=>{
  try {
    const getAccess:any = await oAuth.getAccessToken()
    const transport = nodemailer.createTransport({
      service:"gmail",
      auth:{
        type:"OAuth2",
        user:"elizabethokorie407@gmail.com",
        clientId:Google_ID,
        clientSecret:Google_SECRET,
        refreshToken:Google_REFRESH,
        accessToken:getAccess.token
      }
    })

    const userInfo = {
      name:newUser?.name,
      email:newUser?.email,
      url:`${URL}/${tokenID}/verify`
    }

    const data = path.join(__dirname,"../views/verificationMail.ejs")

    const mainData = await ejs.renderFile(data,userInfo)
    const mail = {
      from:"verify <elizabethokorie407@gmail.com>",
      to:newUser.email,
      subject:"Verify",
      html:mainData
    }
    transport.sendMail(mail).then(()=>{
      console.log("This mail went through!!")
    }).catch((error:any)=>{
      console.log(error)
    })
  } catch (error:any) {
    throw error
  }
}