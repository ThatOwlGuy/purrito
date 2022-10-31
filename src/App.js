import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Error from './pages/error';
import Thanks from './pages/thanksForPurrito';

const MetaCharset = () => <meta charSet="utf-8" />;
const MetaContent = () => <meta name="viewport" content="width=device-width, initial-scale=1.1, shrink-to-fit=no" />;
const path = window.location.pathname;

function App() {
  return (
      <div className="container-fluid">
        <MetaCharset />
        <MetaContent />
        {(path == "/home" || path == "/") && <Home />}
        {path == "/thanks" && <Thanks />}
        {!(path == "/home" || path == "/" || path == "/thanks") && <Error />}
      </div>
  );
}

export default App;
