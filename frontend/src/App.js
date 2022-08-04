import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import Account from './components/Account';
import AdminForm from './components/AdminForm';
import Home from './pages/Home'
import Shop from './pages/Shop'
import Details from './pages/Details'
import shoesActions from './redux/actions/shoesActions';
import AboutUs from './pages/AboutUs';
import styled from 'styled-components';
import userActions from '../src/redux/actions/userActions';
import shopActions from './redux/actions/shopActions';

import { Toaster } from 'react-hot-toast'; // TOSTADA


function App() {
	const dispatch = useDispatch();
	const user = useSelector(store => store.userReducer.user);

	// HOOKS
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}
			, 3000);
	}
		, []);

	useEffect(() => {
		dispatch(shoesActions.getShoes())
		// eslint-disable-next-line
	}, [])

	// USE EFFECT PARA TRAER LOCAL STORAGE SI EXISTE
	useEffect(() => {

		if (localStorage.getItem('token') !== null) {
			const token = localStorage.getItem('token')
			dispatch(userActions.verifyToken(token))

		}

		if (localStorage.getItem('carrito') !== null) {
			const carrito = JSON.parse(localStorage.getItem('carrito'))
			dispatch(shopActions.verifyShopStorage(carrito))
		} 

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])



	return (
		<SneakerStore>
			<div className="App">
				{
					loading ?
						(<>
							<div className="four-cont">
								<div className="frame">
									<img id="img-1" src="https://wallpaperaccess.com/full/810836.png" alt="ad" className="botitas" />
									<img id="img-2" src="https://wallpaperaccess.com/full/810836.png" alt="asd" className="botitas" />
									<div className="street">

									</div>
								</div>
							</div>
							</>)
						:
						(
							<>
								<Toaster />
								<NavBar />
								<Routes>
									{!user && <Route path='/signIn' element={<SignIn />} />}
									{!user && <Route path='/signup' element={<SignUp />} />}
									{!user && <Route path='/account' element={<Account />} />}

									{
										user &&
											user.role === 'admin'
											? <Route path='/adminForm' element={<AdminForm />} />
											: null

									}

									<Route path='/shop' element={<Shop />} />
									<Route path='/about' element={<AboutUs />} />
									<Route path='/*' element={<Home />} />
									<Route path='/details/:id' element={<Details />} />
								</Routes>
								<Footer />
							</>
						)}

			</div>
		</SneakerStore>
	);
}
export default App;

const SneakerStore = styled.div`

.App{
}
.four-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		height: 100vh;
		background: #222;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.frame {
	width: 90%;
    height: 480px;
    border-radius: 10px;
    background: #222;
    overflow: hidden;
    transform: translate(10px, 10px);
    align-self: center;
}

.botitas {
	top: 170px;
	left: 40%;
	position: absolute;
	width: 180px;
	z-index: 100;
}

#img-1 {
	transform: translate(-130px, -50px) rotate(45deg);
	opacity: 1;
	animation: boot-1 2s infinite linear, opacity-boot 500ms linear;
}

#img-2 {
	transform: translate(130px, -40px) rotate(-25deg);
	opacity: 1;
	animation: boot-2 2s 100ms infinite linear, opacity-boot 500ms linear;
}

.street {
	position: absolute;
	width: 100%;
	height: 200px;
	bottom: 0;
	background: #222;
	color: white;
}

@keyframes boot-1 {
	0% {
		transform: translate(-130px, -40px) rotate(45deg);
	}

	25% {
		transform: translate(0, -70px) rotate(0deg);
	}

	50% {
		transform: translate(130px, -40px) rotate(-25deg);
	}

	75% {
		transform: translate(0, 0) rotate(0deg);
	}

	100% {
		transform: translate(-130px, -40px) rotate(45deg);
	}
}

@keyframes boot-2 {
	0% {
		transform: translate(130px, -40px) rotate(-25deg);
	}

	25% {
		transform: translate(0, 0px) rotate(0deg);
	}

	50% {
		transform: translate(-130px, -40px) rotate(45deg);
	}

	75% {
		transform: translate(0, -70px) rotate(0deg);
	}

	100% {
		transform: translate(130px, -40px) rotate(-25deg);
	}
}

@keyframes opacity-boot {
	0% {
		opacity: 0;
	}
}


`