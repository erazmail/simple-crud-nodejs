app.post('/insert', async (req, res) =>
{
    console.log(req.body);

    var data = 
    {
        name: req.body.name, 
        email:req.body.email, 
        phonenumber: req.body.phonenumber
    }
    var sql = 'insert into data set ?';
    db.query(sql, data, (err, result)=>
    {
        if (err) throw err;
    })
    
    res.end();
})