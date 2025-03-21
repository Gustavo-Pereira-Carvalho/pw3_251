import './App.css'
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider
import { useAuth } from './contexts/AuthContext'; // Importe o hook useAuth
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';
import { Route, Routes } from 'react-router-dom';
import UserProfileForm from './views/UserProfilePage';

function App() {
  return (
      <AuthProvider>
        <AuthContent />
      </AuthProvider>
  );
}



function AuthContent() {
  const { user } = useAuth(); 
  return (
    <>
      {user ?

      <MainPage/>
     
       : 
      
      <LoginPage />}
           <Routes>
         <Route index element={<MainPage/>}/>
         <Route path="/user-prof" element={<UserProfileForm/>}/>
     </Routes>
    </>
  );
  
  
}

export default App;