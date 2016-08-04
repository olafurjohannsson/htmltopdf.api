#!/bin/bash


echo "Calling createPdfFromHtml"
curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"secret": "oli", "html": "<html><body>TESTING</body></html>"}' http://localhost:8000/createPdfFromHtml

