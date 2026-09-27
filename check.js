import express from 'express'
const  app = express();

app.use(express.json())

const note = [{
    title: 'todolist',
    description : 'warshing',
    },
    {
        title:'Bank Information',
        description:' The name of my bank is wema bank'
    },
    {
        title: ' Data',
        description:'Data is there'
    }
]

app.get('/', (req, res) =>{
    res.send(note)
})

app.post('/',(req,res) => {
    const not= req.body
    note.push(not)
    res.status(200).json({message:"Added Successfully!"})
})
app.put('/',(req,res) =>{
    const {title , description} = req.body
    note[0].title = title
    note[0].description = description
    res.status(200).json({message: 'added succesfully'})
})
app.delete('/', (req,res)=>{
    note.length=0
    res.status(200).json({Message:' deleted finally'})
})

app.listen(3000, ()=>{ console.log('server is running')})