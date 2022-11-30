import { createRoot } from 'react-dom/client';
import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import App from './App';
import AWSCredentials from './pages/AWSCredentials';
import Home from './pages/Home';
import Rekognize from './pages/Rekognize';

const container = document.getElementById('root')!;
const root = createRoot(container);

export enum appRoutes {
  index = '/',
  rekognize = 'rekognize',
  awsCredentials = 'aws-credentials',
}

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={appRoutes.rekognize} element={<Rekognize />} />
        <Route path={appRoutes.awsCredentials} element={<AWSCredentials />} />
      </Route>
    </Routes>
  </Router>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
