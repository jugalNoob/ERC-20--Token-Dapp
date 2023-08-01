import React, { createContext, useReducer, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Form from './page/Form';
import Login from './page/Login';
import Page from './page/Page';
import Update from './page/Update';
import Dash from './page/Dash';
import Logout from './page/Logout';
import { initialState, reducer } from '../src/reducer/UserReducer';

export const UserContext = createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
        <UserContext.Provider value={{state , dispatch}}>
    <Routes>
    <Fragment>
<Route path="/" element={<Home />} />
<Route path="/form" element={<Form />} />
<Route path="/login" element={<Login />} />
<Route path="/page" element={<Page />} />
<Route path="/update" element={<Update />} />
<Route path="/dash" element={<Dash />} />
<Route path="/logout" element={<Logout></Logout>}/>
</Fragment>
</Routes>

</UserContext.Provider>
    </div>
  )
}

export default App