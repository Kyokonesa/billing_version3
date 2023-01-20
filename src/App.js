import './App.scss';
import Sidenav from './components/Sidenav';
import { Route, Routes  } from 'react-router-dom';
import Admin from './components/Admin';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Sidenav/>}/>
        <Route exact path='/admin' element={<Admin/>}/>
      </Routes>
    </>
  );
}

export default App;
