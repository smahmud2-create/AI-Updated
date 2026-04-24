const fs = require('fs');

const filePath = '/src/app/components/SampleTablePage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Replace the specific lines
const lines = content.split('\n');

// Line 1503: change </tr> to </TableRow>
if (lines[1502] && lines[1502].trim() === '</tr>') {
  lines[1502] = lines[1502].replace('</tr>', '</TableRow>');
}

// Line 1509: change renderRow to renderRowHierarchy
if (lines[1508]) {
  lines[1508] = lines[1508].replace('renderRow(', 'renderRowHierarchy(');
}

// Line 1763 (Quickview): Update opening tag
// Line 1931 (Quickview): change </tr> to </TableRow>
// Line 1936 (Quickview): change renderRow to renderRowQuickview

// Find and replace for Quickview
for (let i = 1760; i < 1770; i++) {
  if (lines[i] && lines[i].includes('<tr') && lines[i].includes('key={row.id}')) {
    lines[i] = lines[i].replace('<tr', '<TableRow');
    break;
  }
}

for (let i = 1928; i < 1935; i++) {
  if (lines[i] && lines[i].trim() === '</tr>') {
    lines[i] = lines[i].replace('</tr>', '</TableRow>');
    break;
  }
}

for (let i = 1933; i < 1940; i++) {
  if (lines[i] && lines[i].includes('renderRow(')) {
    lines[i] = lines[i].replace('renderRow(', 'renderRowQuickview(');
    break;
  }
}

// Find and update the Quickview table.map call
for (let i = 2110; i < 2120; i++) {
  if (lines[i] && lines[i].includes('quickviewData.map') && lines[i].includes('renderRow')) {
    lines[i] = lines[i].replace('renderRow(', 'renderRowQuickview(');
    break;
  }
}

content = lines.join('\n');
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed table rows!');
