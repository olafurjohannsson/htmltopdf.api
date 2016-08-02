'use strict';

const express = require('express'),
    app = express(),
    PDFCreator = require('./pdf'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8000;


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb' }));

app.use(function (request, response, next) {
    if (request.body && request.body.secret) {
        return next();
    }
    else {
        return next('Secret is invalid');
    }
});

/* Error handler */
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log('ERROR', err);
    return next();
});





/*
    @description: Returns a Base64 buffer with the contents of the PDF
*/
app.post('getPdfBase64FromHtml', function (request, response) {
    let html = request.body.html,
        pdfCreator = new PDFCreator();

    pdfCreator.createFromHtml(html, PDFCreator.getRandomPdfName())
        .then(function (pdfData) {
            return res.send(pdfData);
        })
        .catch(function (reason) {
            return res.send(reason);
        })


});

/*

*/
app.post('/createPdfFromHtml', function (request, response) {

    let html = request.body.html,
        name = request.body.name || PDFCreator.getRandomPdfName();

    var pdfCreator = new PDFCreator();
    
    pdfCreator.createFromHtml(html, name)
        .then(function (pdfData) {
            response.setHeader('Content-disposition', 'attachment; filename="' + name + '"');
            response.setHeader('Content-type', 'application/pdf');
            return response.send(pdfData);
        })
        .catch(function (reason) {
            return response.send('');
        });

});

app.post('/createPdfFromHtmlAndTemplate', function (request, response) {
    let html = request.body.html,
        name = request.body.name || PDFCreator.getRandomPdfName(),
        template = request.body.template,
        pdfCreator = new PDFCreator();
    
    pdfCreator.createFromTemplate()
    


});


app.listen(8000, '0.0.0.0', function onStart(err) {
    err ? console.log(err) : void 0;

    console.info('🌎 Listening on port %s', 8000);
});