module.exports = function(app){
  app.get('/', (req, res) => {
      var packers_array = [
          {name: 'Randal Cobb', position: 'wide receiver'},
          {name: 'Jordy Nelson', position: 'wide receiver'},
          {name: 'Ha Ha Clinton-Dix', position: 'free safety'},
          {name: 'Aaron Rodgers', position: 'quarterback'}
      ]
      res.render("index", {packers: packers_array});
  });

  app.get('/pandas', (req, res) => {
      res.render('pandas');
  });

  app.post('/packers', (req,res) => {
    console.log(req.body);
    res.redirect('/pandas')
  });
}
