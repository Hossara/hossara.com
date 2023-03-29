import { SMTPClient } from 'emailjs'

export default defineEventHandler((event) =>
{
  const validate = (str: any) =>
    str !== null && typeof str !== "undefined"

  const query = getQuery(event)

  if(validate(query.to) && validate(query.subject) && validate(query.fl) && validate(query.message))
  {
    const email = process.env.EMAIL!.toString()
    const pass = process.env.APP_PASS
  
    const client = new SMTPClient({
      user: email,
      password: pass,
      host: "smtp.gmail.com",
      ssl: true,
    })

    client.send({
      text: query.message!!.toString(),
      from: email,
      to: query.to!!.toString(),
      subject: `Email from ${query.fl} - ${query.subject}`
    }, (err, message) => {
      console.log(err || message)
      throw createError({
        statusCode: 500,
        statusMessage: 'Something went wrong!',
      })
    })
  }
  else throw createError({
    statusCode: 400,
    statusMessage: 'Inputs invalid',
  })
})
