import { Home } from "./Home/Home";
import { ToastContainer } from 'react-toastify';

import "./styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
function App() {
	return (
		<>
			<Home />
			<ToastContainer />
		</>
	);
}

export default App;
