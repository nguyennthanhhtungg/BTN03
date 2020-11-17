exports.index = function (req, res) {
    res.render('layout', {partial_content: 'home/index', title: 'THE MATRIX'});
}