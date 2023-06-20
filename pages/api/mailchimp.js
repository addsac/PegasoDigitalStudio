var Mailchimp = require('mailchimp-api-v3')

export default function handler(req, res) {
    const {
        api_key,
        list_id,
        email,
        username,
        rag_soc,
        data_reg,
        abbonato,
        codice_ditta,
        phone,
        scadenza_abbonamento,
        data_ins,
    } = req.query

    var mailchimp = new Mailchimp(api_key)

    // Validity checks
    if(!email || email.trim() == '') {
        res.status(500).json({ error: 'Email is empty' })
    }
    if(!username || username.trim() == '') {
        res.status(500).json({ error: 'Username is empty' })
    }
    if(!codice_ditta || codice_ditta.trim() == '') {
        res.status(500).json({ error: 'Codice ditta is empty' })
    }
    if(!data_reg || data_reg.trim() == '') {
        res.status(500).json({ error: 'Data registrazione is empty' })
    }
    if(!data_ins || data_ins.trim() == '') {
        res.status(500).json({ error: 'Data inserimento is empty' })
    }
    if(!abbonato) {
        res.status(500).json({ error: 'Abbonato is empty' })
    }
    if(abbonato.trim() != 'Si' && abbonato.trim() != 'No') {
        res.status(500).json({ error: 'Abbonato is not valid' })
    }

    mailchimp
        .put(`/lists/${list_id}/members/${email}`, {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
                USERNAME: username,
                RAGSOC: rag_soc,
                DATAREG: data_reg,
                ABBON: abbonato,
                CODDITTA: codice_ditta,
                PHONE: phone,
                SCADABB: scadenza_abbonamento,
                DATAINS: data_ins,
            },
        })
        .then(function (results) {
            console.log(results)
            /* return result */
            res.status(200).json({ results })
        })
        .catch(function (err) {
            console.log(err)
            /* return error */
            res.status(500).json({ error: err })
        })
}
