const nodemailer = require('nodemailer')

export default async function (req, res) {
  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'robert.a.white625@gmail.com',
        pass: process.env.GMAIL,
      },
      secure: true,
    })
    const mailData = {
      from: 'dscvrfy@mail.com',
      to: 'robert.a.white625@gmail.com',
      subject: `${req.body.email} requesting permission to use discoverfy`,
      text: `${req.body.email} is requesting permission to use dscvrfy`,
      html: `<div><p>${req.body.email} is requesting permission to use dscvrfy</p></div>`,
    }
    let i = await transporter.sendMail(mailData)
    if (i.rejected.length > 0) {
      transporter.close()
      throw new Error('Could not send E-Mail')
    }
    transporter.close()
    res.status(200).json(i)
  } catch (error) {
    res.status(400).json({ msg: 'failed' })
  }
}
