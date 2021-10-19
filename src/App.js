import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';
import LogIn from './Pages/LogIn/LogIn';
import AuthProvider from './UseContext/AuthProvider';
import Services from './Pages/Services/Services';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';
import SelectService from './Pages/Services/SelectService/SelectService';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Banner></Banner>
          </Route>
          <Route path='/home'>
          <Banner></Banner>
          </Route>
          <Route path='/servises'>
          <Services></Services>
          </Route>
          <Route path='/login'>
          <LogIn></LogIn>
          </Route>
          <PrivateRoute path='/selectservice/:serviceid'>
            <SelectService></SelectService>
          </PrivateRoute>
        </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
