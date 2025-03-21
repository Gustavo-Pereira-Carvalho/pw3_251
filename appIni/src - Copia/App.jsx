import './App.css'
import { AuthProvider } from './contexts/AuthContext'; // Importe o AuthProvider
import { useAuth } from './contexts/AuthContext'; // Importe o hook useAuth
import LoginPage from './views/LoginPage';
import MainPage from './views/MainPage';

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
    </>
  );
  
  
}

export default App;