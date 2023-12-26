import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import  {auth}  from "./firebase";

function App() {
  const [user, dispatch] = useStateValue();

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(authUser){
          // the user is logged in
          dispatch({
            type: "SET_USER",
            user: authUser
          })
        }
        else{
          // the user is logged out
          dispatch({
            type: "SET_USER",
            user: null
          })
        }
      });
      return () => {
        // any cleanup operations go in here...
        unsubscribe();
      }
  }, []);

  console.log('user is >>>> ', user);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={
            <>
            <Header />
            <Checkout />
            </>
          } />
          <Route path="/login" element={
          <Login />
          } />
          {/* Used for the default route */}
          <Route path="/" 
          element={
            <>
            <Header />
            <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
