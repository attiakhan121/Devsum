import { AuthProvider } from './context/AuthContext';
import Login from './pages/Auth/Login';

function App() {
  
  return (<AuthProvider>
    <Login />;
     </AuthProvider>)
}

export default App;