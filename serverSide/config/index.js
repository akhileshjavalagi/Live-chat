import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import compression from 'compression'


const configexpress = (app) =>{
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())
    app.use(compression(9));
    app.use(cors())
}

export default configexpress