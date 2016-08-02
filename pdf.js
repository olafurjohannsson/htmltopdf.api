'use strict';

const htmltopdf = require('htmltopdf');

class PDFCreator {
    static getRandomPdfName(len) {
        
        let text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (let i = 0; i < (len || 8); i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text.concat('.pdf');
    }
}


module.exports = PDFCreator;