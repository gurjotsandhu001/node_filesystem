const express = require('express');
const app = express();
require ('dotenv').promises;


const fs = require('fs');
const PORT = process.env.PORT || 3000;

app.get('/', async (req,res)  => {

    try{
        const filename = "exaample.txt";
        const content = " this is just example text that was written to file";
        
        //Writing the contextnto the file
        await fs.writerfile(filename, context, 'utf-s');

        const data = await fs.readFile('example.txt', 'utf-s');
        res.send(data);

    }catch(error){
        console.error('Sometimes went wrong:', error);
        res.status(500).send('internet server error');

    }
});






app.listen(PORT,()=>{
     console.log(`Connected on port ${PORT}`);
});
