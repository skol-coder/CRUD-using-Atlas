const express = require('express');
const router = express.Router()
const Student = require('../model/student');



router.get('/', async(req,res)=>{
    try{
        const students = await Student.find();
        res.json(students);
    }catch(err){
        res.send('Error '+err);
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const s = await Student.findById(req.params.id);
        res.json(s);
    }catch(err){
        res.send('Error '+err);
    }
});

router.post('/', async(req,res)=>{
    const s = new Student({
        name: req.body.name,
        email: req.body.email,
        course: req.body.course
    })
    try{
        const s1 = await s.save();
        res.json(s1);
    }catch(err){
        res.send('Error' + err);
    }
});

router.patch('/:id',async(req,res)=>{
    try{
        const s = await Student.findById(req.params.id);
        s.course = req.body.course;
        const s1 = await s.save();
        res.json(s1);
    }catch(err){
        res.send('Error '+err);
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const s = await Student.remove({ _id : req.params.id });
        res.json(s);
    }catch(err){
        res.json('Error '+err);
    }
});

module.exports = router; 