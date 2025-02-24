import nodemailer from "nodemailer";

const mailConfig = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL_ID,
        pass:process.env.EMAIL_PASSWORD
    }
});

const Mail = async (id,subject,message)=>{
    var mailOption = {
        from:process.env.EMAIL_ID,
        to:id,
        subject:subject,
        text:message
    }
    const info = await mailConfig.sendMail(mailOption);
    return info
}
export default Mail