#!/bin/bash
# build.sh: Custom build script for Jekyll + StatiCrypt encryption on Vercel

# 1. Build Jekyll site
echo "Building Jekyll site..."
bundle exec jekyll build

# 2. Run StatiCrypt encryption on the private directory output
if [ -d "_site/private" ]; then
  echo "StatiCrypt: starting explicit encryption..."
  if [ -z "$SITE_PASSWORD" ]; then
    echo "ERROR: SITE_PASSWORD environment variable is not set!"
    exit 1
  fi
  
  find _site/private -name "*.html" | while read -r file; do
    dir=$(dirname "$file")
    npx -y staticrypt "$file" -p "$SITE_PASSWORD" -d "$dir" --remember 7 --short
  done
  echo "StatiCrypt: encryption completed successfully."
else
  echo "StatiCrypt: private directory not found, skipping encryption."
fi
