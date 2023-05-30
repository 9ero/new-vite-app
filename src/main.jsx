// import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client'

import './index.css'
const app = <h1> Desarrollo util</h1>
// const container = document.getElementById("root");
// ReactDOM.render(app, container);

const container1 = document.getElementById('root')
const root = createRoot(container1) // createRoot(container!) if you use TypeScript
root.render(app)
