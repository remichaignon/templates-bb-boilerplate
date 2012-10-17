echo ""
echo "[BUILD] Building the stylesheet files..."
echo ""
lessc app/styles/master.less > dist/YOUR_APP.css

echo ""
echo "[BUILD] Building the template files..."
echo ""
python tools/templates.py