const fs = require('fs');
let data = fs.readFileSync('src/data.ts', 'utf8');
data = data.replace(/export const tools = \[([\s\S]*?)\];/, (match, inner) => {
  const updatedInner = inner.replace(/\{ name: '([^']+)',/g, (m, name) => {
    const id = name.toLowerCase().replace(/ /g, '-');
    return `{ id: '${id}', name: '${name}',`;
  });
  return `export const tools = [\n${updatedInner}\n];`;
});
fs.writeFileSync('src/data.ts', data);
console.log('Patched src/data.ts');
