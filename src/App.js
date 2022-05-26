import Router from './routes/Router';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Router></Router>;
    </AuthContextProvider>
  );
}

export default App;
