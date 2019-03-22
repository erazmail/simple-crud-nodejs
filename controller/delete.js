app.post('/delete', async (req, res) =>
{
    var id = req.body.id;

    var sql = 'delete from data where id = ?';
    db.query(sql, id, (err, result)=>
    {
        if (err) throw err;
        
        res.redirect('http://localhost:3001/select');
    })
})