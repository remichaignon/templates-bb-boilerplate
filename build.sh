echo ""
echo "[BUILD] Building the stylesheet files..."
cd app/styles
lessc master.less > ../../dist/YOUR_APP.css
cd ../..

echo ""
echo "[BUILD] Building the template files..."
echo ""
python tools/templates.py

echo ""
echo "[BUILD] Optimizing the javascript files..."
node tools/r.js -o tools/build.js