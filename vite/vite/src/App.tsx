import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { LoginForm } from './stories/LoginForm';

function App() {
	const [count, setCount] = useState(0);

	return <LoginForm />;
}

export default App;
