exports.render = (req, res) => {
    // Load the User model
    const User = req.models.User;

    let users;
    let data;

    // Fetch the user with ID 1
    User.findByPk(1).then(user => {
        if (!user) {
            data = {
                title: 'Home',
                user: 'No user found'
            }
        } else {
            users = user.toJSON();

            data = {
                title: 'Home',
                user: users.email
            }
        }

        // Render the home view
        res.render('home', data);

    }).catch(err => {
        console.error('Error fetching user:', err);
    });
}