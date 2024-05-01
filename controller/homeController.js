exports.render = (req, res) => {
    const data = {
        title: 'Home',
    }

    res.render('home',data);
}