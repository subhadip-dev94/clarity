class AppController {

    //home page
    async home(req, res) {
        try {
            res.render('home', {
                title: 'Home - MexantFinancial',
            });
        } catch (err) {
            throw err;
        }
    }
    //About page
    async about(req, res) {
        try {
            res.render('about', {
                title: 'About - MexantFinancial',
            });
        } catch (err) {
            throw err;
        }
    }
     // Our Services page
    async services(req, res) {
        try {
            res.render('services', {
                title: 'Our Services - MexantFinancial',
            });
        } catch (err) {
            throw err;
        }
    }
    //Contact page
    async contact(req, res) {
        try {
            res.render('contact', {
                title: 'Contact - MexantFinancial',
            });
        } catch (err) {
            throw err;
        }       
    }
    //404 page
    async notFound(req, res) {
        try {
            res.render('404', {
                title: '404 - MexantFinancial',
            });
        } catch (err) {
            throw err;
        }
    }


}


module.exports = new AppController();