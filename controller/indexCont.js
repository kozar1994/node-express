module.exports.index = (req,res) => {
  res.render('pages/index.pug', { title: 'Express' });
}