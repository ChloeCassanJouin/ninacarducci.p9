const purify = require('purify-css');
const fs = require('fs');

// Chemins vers les fichiers HTML et JavaScript à analyser
const content = [
  './index.html',  // Remplace par le chemin de ton fichier HTML
  './assets/**/*.js' // Chemin vers tes fichiers JavaScript, si nécessaire
];

// Chemin vers le fichier CSS que tu veux purger
const css = './bootstrap/bootstrap.min.css'; // Remplace par le chemin de ton fichier CSS

// Chemin vers le fichier CSS purifié que tu veux créer
const output = './bootstrap/purified.css'; // Choisis où tu veux sauvegarder le CSS purifié

const options = {
  minify: true, // Minifie le CSS purifié
};

// Appelle la méthode pour purifier le CSS
const purifiedCss = purify(content, css, options);

// Écris le CSS purifié dans un nouveau fichier
fs.writeFileSync(output, purifiedCss);
console.log('CSS purifié et enregistré dans', output);