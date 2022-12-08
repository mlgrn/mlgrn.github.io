import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from "nodemailer"

type Data = {
  message?: string,
  success?: boolean
}

const handler = async (
    req: NextApiRequest, 
    res: NextApiResponse<Data>) =>
    {
if(req.method === "POST") {
const data = req.body

// configures nodemailer. seperate this out if you need to use this in multiple places. 
const email = process.env.NODEMAILER_LOGIN
const passw = process.env.NODEMAILER_PW
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: passw
    }})

const mailOptions = {
    from:email, 
    to: "mlgrn1@protonmail.com"
}  

try {
    await transporter.sendMail({
        ...mailOptions, subject: data.subject,
        text: `subject:${data.subject} name: ${data.name} email:${data.email} message: ${data.message}`,
        html: `<h1>${data.subject}</h1> <h2>${data.name}</h2> <h3>${data.email}</h3> <p>${data.message}</p>`
    })

    return res.status(200).json({ success: true })
}
catch (error) {
    console.log(error)
    if (error instanceof Error) {
        return res.status(400).json({ message: error.message })
    } 
}

}
  return res.status(400).json({ message: 'Bad Request' })
    }
    
    export default handler