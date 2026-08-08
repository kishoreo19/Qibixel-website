const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}
const files = walk(path.join(__dirname, 'src'));
const replacements = [
  { regex: /(?<!dark:)text-slate-200/g, replacement: 'text-slate-800 dark:text-slate-200' },
  { regex: /(?<!dark:)text-slate-300/g, replacement: 'text-slate-700 dark:text-slate-300' },
  { regex: /(?<!dark:)text-slate-400/g, replacement: 'text-slate-600 dark:text-slate-400' },
  { regex: /(?<!dark:)text-gray-200/g, replacement: 'text-gray-800 dark:text-gray-200' },
  { regex: /(?<!dark:)text-gray-300/g, replacement: 'text-gray-700 dark:text-gray-300' },
  { regex: /(?<!dark:)text-gray-400/g, replacement: 'text-gray-600 dark:text-gray-400' }
];
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  replacements.forEach(({ regex, replacement }) => {
    content = content.replace(regex, replacement);
  });
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
console.log('Done');
