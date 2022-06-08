import Router from './routes/Router';
import AuthContextProvider from './contexts/AuthContext';
import ErrorContextProvider from './contexts/ErrorContext';

function App() {
  return (
    <AuthContextProvider>
      <ErrorContextProvider>
        <Router></Router>
      </ErrorContextProvider>
    </AuthContextProvider>
  );
}

export default App;
