import React from "react";
import { useDispatch } from "react-redux";
import "../styles/cardShop.css";
import { Link as LinkRouter } from 'react-router-dom';
import toast from 'react-hot-toast';

import shopActions from '../redux/actions/shopActions';

import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const CardsShop = ({ shoes }) => {

	const dispatch = useDispatch();
	// const carrito = useSelector(store => store.shopReducer.productsInShop);


	const addCarrito = ({ shoes }) => {

		const product = {
			image: shoes.image[0],
			name: shoes.name,
			price: shoes.price,
			id: shoes._id,
			cant: 1
		}

		dispatch(shopActions.addToShop(product))

		// console.log('alerta agregaste un producto')
		toast.success('Product successfully added')

	}

	return (
		<div id="container">

			<div className="wrapper">
				<div className="card">

					<div className="front">
						{
							shoes.brand ?
								<h1>{shoes.brand.name}</h1>
								: null
						}
						{
							shoes.type ?
								<h1>{shoes.type.name}</h1>
								: null
						}

						{/* <h1>{shoes?.type.name}</h1> */}
						<p className="frontName">{shoes.name}</p>
						<h2 className="price">U$S {shoes.price}</h2>
						
					</div>

					<div className="right">
						<h2>{shoes.brand.name}</h2>
						<p className="w-4/5">{shoes.name}</p>
						<h2 className="price">U$S {shoes.price}</h2>
						<ul className="mt-3">
							{/* <li>talles : 12 12</li> */}
							<li>Color: {shoes.colorway}	</li>

						</ul>
						<LinkRouter to={`/details/${shoes._id}`} >
							<button>Detail</button>
						</LinkRouter>
						<span className="btn-addCartShop" 
							onClick={() => addCarrito({ shoes })}
						><AddShoppingCartOutlinedIcon /></span>

					</div>

				</div>

				<div className="img-wrapper">
					<img className="imgCardShop" src={shoes.image[0]} alt={shoes.name} />
				</div>
			</div>

		</div>
	);
};

export default CardsShop;
