import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import store from './store'
import {Provider} from 'react-redux'
import ItemModal from './components/ItemModal';
import {loadUser} from './actions/authActions';

function App() {


  useEffect(()=>{
      store.dispatch(loadUser())
  })
  
  return (
    <Provider store={store}>
    <div className="App">
      
             <AppNavbar/>
             <ItemModal/>
             <ShoppingList/>
     
    </div>
    </Provider>
  );
}

export default App;




