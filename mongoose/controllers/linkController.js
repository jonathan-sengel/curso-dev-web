const Link = require('../models/Link');


const redirect = async (req, res, next) => {
    let title = req.params.title;
    try {
        let doc = await Link.findOne({ title });
        if (doc) {
            res.redirect(doc.url);
        }
        else {
            next();
        }
    }
    catch (error) {
        res.send(error);
    }
}

const addLink = (req, res) => {
    let link = new Link(req.body);

    link.save()
        .then(doc => res.redirect('/'))
        .catch(error => res.render('index', { error, body: req.body }));
}

const allLinks = (req, res) => {

    Link.find({})
        .then(links => res.render('all', { links }))
        .catch(error => res.send(error));
}


const deleteLink = (req, res) => {
    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }

    // Link.deleteOne({_id:id})
    Link.findByIdAndDelete(id)
        .then(response => res.send(id))
        .catch(error => res.status(404).send(error.message));

}

const loadLink = (req, res) => {
    let id = req.params.id;
    Link.findById(id)
        .then(response => res.render('edit', { error: false, body: response }))
        .catch(error => res.status(404).send(error.message));

}

const editLink = (req, res) => {
    let link = {};
    link.title = req.body.title;
    link.description = req.body.description;
    link.url = req.body.url;

    let id = req.params.id;
    if (!id) {
        id = req.body.id;
    }
    console.log(req.body);
    Link.updateOne({ _id: id }, req.body)
        .then(response => res.redirect('/'))
        .catch(error => res.render('edit', { error, body: req.body }));
}

module.exports = { redirect, addLink, allLinks, deleteLink, loadLink, editLink };