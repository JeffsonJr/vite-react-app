import { createRoot } from 'react-dom/client';

import App from './src/App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement as HTMLElement);

root.render(<App />);
