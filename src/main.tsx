import 'styles/global.css';

import App from 'containers/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error('No dom element with ID: root');
}
