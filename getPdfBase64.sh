#!/bin/bash

echo "Calling getPdfBase64FromHtml"
curl -H "Content-Type: application/json" \ 
     -X POST \
     -d '{"secret": "oli", "html": "<html><body>data</body></html>"' http://localhost:8000/getPdfBase64FromHtml