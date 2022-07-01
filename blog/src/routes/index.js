
const newRouter = require('./news');
const siteRouter = require('./site');

function route(app){ 
    app.use('/news', newRouter);

    app.use('/', siteRouter);

    // app.use('/search', siteRouter);

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })
      
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })

   
      
    //   app.get('/search', (req, res) => {
    //     // console.log(res)
    //     res.render('search');
    //   })
      
      // app.post('/search', (req, res) => {
      //   res.render('search');
      // })
      
    //   app.post('/search', (req, res) => {
      
    //     console.log(req.body.q);
    //     console.log(req.body.gender);
      
    //     res.send('')
    //   })
}

module.exports = route;
