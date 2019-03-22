app.get('/select', async (req, res) =>
{
    var sql = 'select * from data';
    db.query(sql, (err, result)=>
    {
        if (err) throw err;
        
        res.json(result);
    })
})