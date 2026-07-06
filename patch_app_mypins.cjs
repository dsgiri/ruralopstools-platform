const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');

data = data.replace(/if \(path === '\/my-pins'\) return 'MyPins';/, "if (path === '/my-pins') return 'My Pins';");
data = data.replace(/else if \(activeItem === 'MyPins'\) path = '\/my-pins';/, "else if (activeItem === 'My Pins') path = '/my-pins';");
data = data.replace(/activeItem === 'MyPins' \?/, "activeItem === 'My Pins' ?");

fs.writeFileSync('src/App.tsx', data);
