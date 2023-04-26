import NextCors from 'nextjs-cors';
import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'POST'], // 'HEAD', 'PUT', 'PATCH', 'DELETE'
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const query = req.query;
    const { source } = query
    const { interest, email, name, phone, budget, message, list, question1, question2, question3 } = query

    let fullText = ''

    /* 
     * Form from Pegaso Informatica
    */

    if(source == 'pegaso-informatica'){
        if(interest == 1){
            fullText = `
                interesse: Hardware <br />
                nome: ${name} <br />
                email: ${email} <br />
                messaggio: ${message} <br />
            `

            const data = {
                to: 'paolo@pegasoinformatica.com',
                from: 'pegasodigitalstudio@gmail.com',
                subject: `Nuovo messaggio di ${name} - ${email}`,
                text: fullText,
                html: fullText.replace(/\r\n/g, '<br />'),
            }

            await mail.send(data)
                .catch((err) => console.log(err.response.body))
        }
        if(interest == 2){
            fullText = `
                interesse: Reti e sicurezza <br />
                nome: ${name} <br />
                email: ${email} <br />
                messaggio: ${message} <br />
            `

            const data = {
                to: 'davide@pegasoinformatica.com',
                from: 'pegasodigitalstudio@gmail.com',
                subject: `Nuovo messaggio di ${name} - ${email}`,
                text: fullText,
                html: fullText.replace(/\r\n/g, '<br />'),
            }

            await mail.send(data)
                .catch((err) => console.log(err.response.body))
        }
        if(interest == 3){
            fullText = `
                interesse: Software <br />
                nome: ${name} <br />
                email: ${email} <br />
                messaggio: ${message} <br />
            `

            const data = {
                to: 'info@pegasodigitalstudio.com',
                from: 'pegasodigitalstudio@gmail.com',
                subject: `Nuovo messaggio di ${name} - ${email}`,
                text: fullText,
                html: fullText.replace(/\r\n/g, '<br />'),
            }

            await mail.send(data)
                .catch((err) => console.log(err.response.body))
        }

        return res.status(200).json({ status: 'OK' })
    }

    /* 
     * Form from Pegaso Digital Studio
    */

    if(interest == 0){
        fullText = `
            interest: Sito web <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 1){
        fullText = `
            interest: Ecommerce <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 2){
        fullText = `
            interest: Branding <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            message: ${message} <br />
            budget: ${budget} <br />
        `
    }
    else if(interest == 3){
        fullText = `
            interest: Marketing <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            question1: ${question1} <br />
            question2: ${question2} <br />
            question3: ${question3} <br />
        `
    }
    else if(interest == 4){
        fullText = `
            interest: Social Media <br />
            name: ${name} <br />
            email: ${email} <br />
            phone: ${phone} <br />
            list: ${list} <br />
            question1: ${question1} <br />
            question2: ${question2} <br />
            question3: ${question3} <br />
        `
    }

    const data = {
        to: 'info@pegasodigitalstudio.com',
        from: 'pegasodigitalstudio@gmail.com',
        cc: ['citton.massimo6@gmail.com', 'leocitton@gmail.com'],
        subject: `New message from ${name} - ${email}`,
        text: fullText,
        html: fullText.replace(/\r\n/g, '<br />'),

    }

    await mail.send(data)
        .catch((err) => console.log(err.response.body))

    res.status(200).json({ status: 'OK' })
}
