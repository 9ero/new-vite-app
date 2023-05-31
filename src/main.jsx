// import  ReactDOM  from "react-dom";
import { createRoot } from 'react-dom/client'

import './index.css'

const Title = (props) => {
	return <h2 className='Title'> {props.children}</h2>
}

const app = (
	<div>
		<Title>Desarrollo</Title>
	</div>
)
// const container = document.getElementById("root");
// ReactDOM.render(app, container);

const container1 = document.getElementById('root')
const root = createRoot(container1) // createRoot(container!) if you use TypeScript
root.render(app)
