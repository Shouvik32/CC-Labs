
import React,{useState,useEffect} from 'react';
import './App.css';

import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Header from './Components/Header';
import AdminDashboard from './Pages/AdminDashboard';
import AdminLogin from './Pages/AdminLogin';
import Homepage from './Pages/Homepage';
import VendorLogin from './Pages/VendorLogin';
import VendorSignup from './Pages/VendorSignup';
import VendorDashboard from './Pages/VendorDashboard';
import VendorTracker from './Pages/VendorTracker';



function App() {
  const[isAdminLoggedIn,setAdminLoggedIn]=useState(false);
const[isVendorLoggedIn,setIsVendorLoggedIn]=useState(false);


const handleAdminLogin = (loginStatus) => {
  setAdminLoggedIn(loginStatus);
};

const handleVendorLogin = (loggedIn) => {
  setIsVendorLoggedIn(loggedIn);
};
useEffect(() => {
  isAdminLoggedIn&&setAdminLoggedIn(false)
  isVendorLoggedIn&& setIsVendorLoggedIn(false)
  console.log(isAdminLoggedIn+" "+isVendorLoggedIn);

}, [])


  return (
    <>
    {/* <Header/>
    <Homepage/>
    <AdminLogin/>
    <VendorSignup/>
    <VendorLogin/>
    <AdminDashboard/>
    <VendorDashboard/>
   <Footer/> */}
   <BrowserRouter>
   
   <Header/>
 
  <Routes>
  
    <Route path="/" exact element={<Homepage />} />
    <Route
      path="/admin"
      element={
        localStorage.getItem("admin")=='true' ? (
          <Navigate to="/admindashboard" />
        ) : (
          <AdminLogin/>
        )
      }
    />
    <Route
      path="/vendor"
      element={
        localStorage.getItem("vendor")=='true' ? (
          <Navigate to="/vendordashboard/:id" />
        ) : (
      <VendorLogin/>)}
    />
    <Route path="/signup" element={<VendorSignup />} />
    <Route path="/admindashboard"  element={<AdminDashboard />} />
    <Route path="/vendortracker/:id"  element={<VendorTracker />} />
     {/* <Route path="/vendortracker/:id" element={<VendorTracker />} /> */}
    <Route path="/vendordashboard/:id" element={<VendorDashboard/>} />
    
       
        
  </Routes>
  
 
</BrowserRouter>
    </>
  );
}

export default App;


 {/* <Route path="/admindashboard"  element={isAdminLoggedIn?<AdminDashboard />:<Navigate to='/'/>} />
     <Route path="/vendortracker/:id" element={isAdminLoggedIn?<VendorTracker />:<Navigate to='/admin'/>} />
    <Route path="/vendordashboard/:id" element={isVendorLoggedIn?<VendorDashboard/>:<Navigate to='/vendor'/>} />  */}
    {/* <Route
          path="/admindashboard"
          element={<PrivateRoute component={AdminDashboard} isAuthenticated={isAdminLoggedIn} redirectTo="/admin" />}
        />

        <Route
          path="/vendor/vendordashboard/:id"
          element={<PrivateRoute component={VendorDashboard} isAuthenticated={isVendorLoggedIn} redirectTo="/vendor" />}
        /> */}