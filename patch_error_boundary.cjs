const fs = require('fs');
let data = fs.readFileSync('src/components/ErrorBoundary.tsx', 'utf8');
data = data.replace(/extends Component<Props, State>/, 'extends React.Component<Props, State>');
fs.writeFileSync('src/components/ErrorBoundary.tsx', data);
