const fs = require('fs');
const content = fs.readFileSync('old-site/assets/index-BaKTzfQs.js', 'utf-8');
const hrefs = content.match(/href:\"([^\"]+)\"/g) || [];
const unique = [...new Set(hrefs)];
console.log(unique.join('\n'));
