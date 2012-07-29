
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Post Title' });
};

exports.login = function(req, res){
  res.render('login', { title: 'This is the Login!' });
};
