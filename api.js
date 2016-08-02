'use strict';

const express = require('express'),
      app = express(),
      PDFCreator = require('./pdf');




app.get('/', function (request, response) {
    console.log('pdf', new PdfCreator());

    return response.send('herro');
});

/*
    @description: Returns a Base64 buffer with the contents of the PDF
*/
app.post('getPdfBase64FromHtml', function (request, response) {

});

/*

*/
app.post('/createPdfFromHtml', function (request, response) {
   let html = request.body.html,
       name = request.body.name || PDFCreator.getRandomPdfName();

    console.info('Calling endpoint /createPdfFromHtml, html: %s, name: %s', html, name);

    return res.send('herro');
});

app.post('/createPdfFromHtmlAndTemplate', function (request, response) {
   let html = req.body.html;
    

});


app.listen(8000, '0.0.0.0', function onStart(err) {
    err ? console.log(err) : void 0;

    console.info('🌎 Listening on port %s', 8000);
});