import express from 'express';

import router from './routes/routes.js'

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('assets'))


app.use('/', router);
app.use('/crear', router)





app.listen(PORT, ()=>{console.log(`servidor conectado al puerto ${PORT}`)})