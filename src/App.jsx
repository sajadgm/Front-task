import { useEffect, useState } from 'react'
import Products from './shared/products';
import './App.css'
import './shared/products.scss';
import './assets/scss/index.scss';


function App() {

	const[isLoading , setIsLoading] = useState(true)
	const[myData , setMyData] = useState()
	
	
	useEffect(() =>{
		getData();
	},[])

	const getData = async () => {
		const res = await fetch('http://localhost:3000/posts');
		const data = await res.json();
		console.log(1);

		setIsLoading(false)
		return setMyData(data);
	}

	const removePost = (id) => {
		fetch(`http://localhost:3000/posts/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		
		})
		.then(response => getData())
		.catch(error => console.error(error));

	}

	return (
		<>
		{
			!isLoading ? <Products data={myData} remove={removePost}  /> : ''
		}
		</>
	)
}

export default App
