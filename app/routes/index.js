module.exports = (application) => {
    application.get('/', (req, res) => {
        res.render('index')
        // application.app.controllers.index.home(application, req, res);
    });
}