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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace text-white on h1, h2, h3, p tags that don't already have dark:text-white
  content = content.replace(/(<h[123456]|<p)([^>]*?className=(?:\{`|"))([^`"]*?text-white[^`"]*?)((?:`\}|")[^>]*>)/g, (match, tag, beforeClass, classContent, afterClass) => {
    if (classContent.includes('dark:text-white') || classContent.includes('bg-')) {
      return match;
    }
    const newClassContent = classContent.replace(/\btext-white\b/g, 'text-slate-900 dark:text-white');
    return `${tag}${beforeClass}${newClassContent}${afterClass}`;
  });

  // Also replace text-slate-[234]00 with proper responsive classes instead of relying on !important CSS
  // But wait! Doing this regex might break if they are already responsive.
  // We can just rely on the CSS for text-slate-X, it's safer.
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
