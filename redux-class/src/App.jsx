import "./App.css";
import { useState } from 'react'
import Todo from "./components/Todo";
import { Provider } from 'react-redux';
import {store} from "./app/store";


function App() {

  return (
    
    <>
    <Provider store={store} >
     <Todo/>
    </Provider>
    </>

  );
}

export default App;
