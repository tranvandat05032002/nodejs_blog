class NewsController{
    
    // [GET] / News

    index(req, res){
        res.render('news');
    }

    show(req, res){
        res.send('news/slug');
    }
}

module.exports = new NewsController;
