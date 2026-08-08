const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages'),
];

const REPLACEMENTS = [
  // Regex to match exact class name without `dark:` prefix or other prefixes like `hover:`
  { regex: /(?<![:\w-])text-white(?!\w|-)/g, replacement: 'text-slate-900 dark:text-white' },
  { regex: /(?<![:\w-])text-slate-200(?!\w|-)/g, replacement: 'text-slate-700 dark:text-slate-200' },
  { regex: /(?<![:\w-])text-slate-300(?!\w|-)/g, replacement: 'text-slate-600 dark:text-slate-300' },
  { regex: /(?<![:\w-])text-slate-400(?!\w|-)/g, replacement: 'text-slate-500 dark:text-slate-400' },
  { regex: /(?<![:\w-])bg-\[\#090D15\](?!\w|-)/g, replacement: 'bg-slate-50 dark:bg-[#090D15]' },
  { regex: /(?<![:\w-])border-slate-800(?!\w|-)/g, replacement: 'border-slate-200 dark:border-slate-800' },
  { regex: /(?<![:\w-])bg-slate-900(?!\w|-)/g, replacement: 'bg-slate-100 dark:bg-slate-900' }
];

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.jsx') || fullPath.endsWith('.js'))) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  for (const rule of REPLACEMENTS) {
    if (rule.regex.test(content)) {
      content = content.replace(rule.regex, rule.replacement);
      hasChanges = true;
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

DIRECTORIES.forEach(dir => {
  if (fs.existsSync(dir)) {
    processDirectory(dir);
  } else {
    console.warn(`Directory not found: ${dir}`);
  }
});
console.log('Finished processing.');
