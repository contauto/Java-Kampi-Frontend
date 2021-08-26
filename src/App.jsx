
import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
<Container className="main">
<Dashboard />
</Container>
    </div>
  );
}

export default App;
