import { opine } from 'https://deno.land/x/opine@1.6.0/mod.ts'
import upload from './upload.js'

const app = opine()

app.post('/upload', upload('file'), async function (req, res) {
    //console.log('token', req.headers.get('authorization'))
    console.log('file', req.file.filename)
    const decoder = new TextDecoder()
    console.log(decoder.decode(req.file.content))

    res.send({ok: true})
})

app.get('/', function(req, res) {
    res.send('Hello')
})

app.listen(3000, () => console.log('listening on 3000'))

