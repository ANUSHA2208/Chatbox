import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
