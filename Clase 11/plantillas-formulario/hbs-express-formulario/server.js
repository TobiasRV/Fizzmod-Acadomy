import express from 'express'
import handlebars from 'express-handlebars'

let personas = []

const app = express()

app.use(express.urlencoded({extended: true}))

app.engine('hbs', handlebars({extname:'.hbs', defaultLayout: 'index.hbs'}) )
app.set('views', './views')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('formulario', {personas});
});

app.post('/datos', (req, res) => {
    personas.push(req.body)
    console.log(personas)
    res.redirect('/')
});

/* ------------------------------------------------------ */
/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
