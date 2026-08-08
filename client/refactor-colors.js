const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  path.join(__dirname, 'src', 'components'),
  path.join(__dirname, 'src', 'pages'),
  path.join(__dirname, 'src')
];

const REPLACEMENTS = [
  // Typography combined pairs
  { regex: /text-slate-900\s+dark:text-white/g, replacement: 'text-primary' },
  { regex: /text-white\s+dark:text-slate-900/g, replacement: 'text-primary' },
  { regex: /text-slate-700\s+dark:text-slate-200/g, replacement: 'text-secondary' },
  { regex: /text-slate-600\s+dark:text-slate-300/g, replacement: 'text-secondary' },
  { regex: /text-slate-500\s+dark:text-slate-400/g, replacement: 'text-muted' },
  { regex: /text-slate-400\s+dark:text-slate-500/g, replacement: 'text-muted' },
  
  // Single old colors that might have been missed
  { regex: /(?<![:\w-])text-white(?!\w|-)/g, replacement: 'text-primary' },
  { regex: /(?<![:\w-])text-slate-200(?!\w|-)/g, replacement: 'text-secondary' },
  { regex: /(?<![:\w-])text-slate-300(?!\w|-)/g, replacement: 'text-secondary' },
  { regex: /(?<![:\w-])text-slate-400(?!\w|-)/g, replacement: 'text-muted' },
  { regex: /(?<![:\w-])text-slate-800(?!\w|-)/g, replacement: 'text-primary' },
  { regex: /(?<![:\w-])text-slate-900(?!\w|-)/g, replacement: 'text-primary' },
  { regex: /(?<![:\w-])text-slate-700(?!\w|-)/g, replacement: 'text-secondary' },
  { regex: /(?<![:\w-])text-slate-600(?!\w|-)/g, replacement: 'text-secondary' },
  { regex: /(?<![:\w-])text-slate-500(?!\w|-)/g, replacement: 'text-muted' },
  
  // Accents
  { regex: /(?<![:\w-])text-cyan-400(?!\w|-)/g, replacement: 'text-accent' },
  { regex: /(?<![:\w-])text-cyan-500(?!\w|-)/g, replacement: 'text-accent' },
  { regex: /(?<![:\w-])text-emerald-400(?!\w|-)/g, replacement: 'text-emerald' },
  { regex: /(?<![:\w-])text-emerald-500(?!\w|-)/g, replacement: 'text-emerald' },

  // Backgrounds combined pairs
  { regex: /bg-slate-50\s+dark:bg-\[\#090D15\]/g, replacement: 'bg-background' },
  { regex: /bg-slate-50\s+dark:bg-\[\#080B11\]/g, replacement: 'bg-background' },
  { regex: /bg-slate-100\s+dark:bg-slate-900/g, replacement: 'bg-surface' },
  
  // Backgrounds single
  { regex: /(?<![:\w-])bg-\[\#090D15\](?!\w|-)/g, replacement: 'bg-background' },
  { regex: /(?<![:\w-])bg-\[\#080B11\](?!\w|-)/g, replacement: 'bg-background' },
  { regex: /(?<![:\w-])bg-\[\#0F1420\](?!\w|-)/g, replacement: 'bg-surface' },
  { regex: /(?<![:\w-])bg-\[\#141A29\](?!\w|-)/g, replacement: 'bg-card' },
  { regex: /(?<![:\w-])bg-slate-50(?!\w|-)/g, replacement: 'bg-background' },
  { regex: /(?<![:\w-])bg-slate-100(?!\w|-)/g, replacement: 'bg-surface' },
  { regex: /(?<![:\w-])bg-slate-900(?!\w|-)/g, replacement: 'bg-surface' },
  { regex: /(?<![:\w-])bg-slate-800(?!\w|-)/g, replacement: 'bg-card' },
  
  // Borders combined
  { regex: /border-slate-200\s+dark:border-slate-800/g, replacement: 'border-border' },
  { regex: /border-slate-200\s+dark:border-\[\#1E293B\]/g, replacement: 'border-border' },
  
  // Borders single
  { regex: /(?<![:\w-])border-slate-200(?!\w|-)/g, replacement: 'border-border' },
  { regex: /(?<![:\w-])border-slate-800(?!\w|-)/g, replacement: 'border-border' },
  { regex: /(?<![:\w-])border-slate-700(?!\w|-)/g, replacement: 'border-border' },
  { regex: /(?<![:\w-])border-\[\#1E293B\](?!\w|-)/g, replacement: 'border-border' },
  
  // specific dark classes to remove (since they are now handled by variables)
  { regex: /dark:text-white/g, replacement: '' },
  { regex: /dark:text-slate-200/g, replacement: '' },
  { regex: /dark:text-slate-300/g, replacement: '' },
  { regex: /dark:text-slate-400/g, replacement: '' },
  { regex: /dark:text-slate-800/g, replacement: '' },
  { regex: /dark:text-slate-900/g, replacement: '' },
  { regex: /dark:bg-\[\#090D15\]/g, replacement: '' },
  { regex: /dark:bg-\[\#080B11\]/g, replacement: '' },
  { regex: /dark:bg-\[\#0F1420\]/g, replacement: '' },
  { regex: /dark:bg-\[\#141A29\]/g, replacement: '' },
  { regex: /dark:bg-slate-900/g, replacement: '' },
  { regex: /dark:bg-slate-800/g, replacement: '' },
  { regex: /dark:border-slate-800/g, replacement: '' },
  { regex: /dark:border-\[\#1E293B\]/g, replacement: '' },
  { regex: /dark:border-slate-700/g, replacement: '' },
];

function processDirectory(directory) {
  if (!fs.existsSync(directory)) return;
  
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
  let originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;
  let hasChanges = false;
  
  for (const rule of REPLACEMENTS) {
    if (rule.regex.test(content)) {
      content = content.replace(rule.regex, rule.replacement);
      hasChanges = true;
    }
  }
  
  // Cleanup extra spaces resulting from empty replacements
  content = content.replace(/\s{2,}/g, ' ').replace(/class(Name)?="\s+/g, 'class$1="').replace(/\s+"/g, '"');
  
  if (hasChanges && content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

DIRECTORIES.forEach(dir => {
  processDirectory(dir);
});
console.log('Finished processing colors.');
