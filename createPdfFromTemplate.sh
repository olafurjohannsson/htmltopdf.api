#!/bin/bash

echo "Calling createPdfFromTemplate"

curl -H "Content-Type: application/json" \
     -X POST \
     -d '{"secret": "oli", "html": "<html><body>{{data}}</body></html>", "template": "s"}' http://localhost:8000/createPdfFromHtmlAndTemplate
