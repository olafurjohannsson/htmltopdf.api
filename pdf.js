'use strict';

const htmltopdf = require('htmltopdf'),
      fs = require('fs'),
      path = require('path');

class PDFCreator {
    
    constructor() {
        this.path = path.join(process.cwd(), 'sheets');

        if (!fs.existsSync(this.path)) {
            try {
                fs.mkdirSync(this.path);
            } catch (e) {
                if (e.code != 'EEXIST') 
                    throw e;
            }
        }
    }

    createFromHtml(html, name) {
        return new Promise((resolve, reject) => {
            if (!html) {
                return reject('Invalid HTML');
            }

            if (!name) {
                return reject('Invalid PDF name');
            }

            let pdfNameAndPath = path.join(this.path, name);

            htmltopdf.createFromHtml(html, pdfNameAndPath, (err, success) => {
                if (!err && success) {
                    fs.readFile(pdfNameAndPath, (err, data) => {
                        if (err) {
                            return reject(err);
                        }
                        try {
                            resolve(new Buffer(data).toString());
                        }
                        catch (e) {
                            return reject(e);
                        }
                    });
                }
                else {
                    return reject(err);
                }
            });
            
        });
    }

    createFromTemplate() {
        return new Promise((resolve, reject) => {
            
            
        });
    }

    static getRandomPdfName(len) {
        
        let text = "", possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (let i = 0; i < (len || 8); i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text.concat('.pdf');
    }
}


module.exports = PDFCreator;