import './components/App.css';
import { DoctorEntry, Front } from './components/Enter';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  document.body.style.background = 'white';

  return (  
    <BrowserRouter>
      <Routes>
        <Route path="patient/" element={<Front/>}/>
          {/* <Route index element={<Home />} /> */}
          <Route path="doctor" element={<DoctorEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
