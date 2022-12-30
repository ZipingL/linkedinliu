import React from 'react';
import Aside from './Aside';
import logo from './logo.svg';
import Main from './Main';
import {
  Routes,
  Route,
  BrowserRouter,
  redirect,
  useParams,
  Link,
} from "react-router-dom";
import Redirecter from './Redirecter';

function App() {
  return (
      <BrowserRouter>

      <Routes>
        <Route path="/in/liu" element={
          <>
            <Main/>
            <Aside/>
          </>
        }
        />

        <Route path="*"    element={
                <Redirecter {...{ redirect: "https://linkedin.com/" }} />
              } />
      </Routes>
        </BrowserRouter>
  );
}

export default App;
