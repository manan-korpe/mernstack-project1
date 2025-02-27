import { createRoot } from 'react-dom/client'
import App from "./App.tsx";

//css and bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/index.css";


createRoot(document.getElementById('root')!).render(
      <App/>
)
