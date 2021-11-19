const express = require("express");
const router = express.Router();
const fs =require('fs');

router.route('/')
    .get((req,res)=>{
        let users= fs.readFileSync('./data/data.json');
        users = JSON.parse(users);
        res.status(200).json(users);
    })

router.route('/:usersId')
    .get((req,res)=>{
        let users= fs.readFileSync('./data/data.json');
        users = JSON.parse(users);
        const selectedUser = users.find(user => user.id===req.params.usersId)
        res.status(200).json(selectedUser);
    })


module.exports = router;