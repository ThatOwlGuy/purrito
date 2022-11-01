import logo from './logo.svg';
import './App.css';
import simpleResolver from './simpleResolver';
import Navigation from './navigation';

const MetaCharset = () => <meta charSet="utf-8" />;
const MetaContent = () => <meta name="viewport" content="width=device-width, initial-scale=1.1, shrink-to-fit=no" />;

function App() {
  return (
      <div className="container-fluid">
        <MetaCharset />
        <MetaContent />
        <Navigation />
        <div style={{marginTop:"var(--navHeight)"}}>
          {simpleResolver(window.location.pathname)}
        </div>
      </div>
  );
}

export default App;
