import React from "react";
import styled from "styled-components";
import { Collapse, Text } from "@nextui-org/react";
import "../styles/styleHome.css";
function AboutUs() {
	return (
		<AboutUsConteiner >
			<div className="containerAbout">
			<div className="titlecont">About Us</div>

			{/* <div className="first-cont">
				<div className="a">
					DAFTLAB{" "}
					<span>
						is an American retailer of athletic footwear. It is a national
						company, which was founded in 2019. DAFTLAB has around 100
						stores in operation worldwide and it is headquartered in New
						York City, United States.
					</span>
					<br />
					<br />
					Vision:{" "}
					<span>
						to be the leading global provider of high-quality, affordable,
						and stylish products for the sports ,fitness and luxury
						community.
					</span>
					<br />
					<br />
					Mission:{" "}
					<span>
						the mission statement is “To fuel a shared passion of
						self-expression.” The company wants youngsters to express
						their personality through their clothes.
					</span>
				</div>
				<img
					// src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2017%2F03%2Ftw-nike-air-max-1-atmos-elephant-hirofumi-kojima-interview.jpg?w=960&cbr=1&q=90&fit=max"
					src="https://creativereview.imgix.net/content/uploads/2022/03/HP-Desktop.jpg?auto=compress,format&q=60&w=1920&h=947"
					alt="about-hero"
					className="cont-img"
				/>
			</div>
			<div className="second-cont">
				<img
					src="https://i0.wp.com/prettyphresh.com/wp-content/uploads/2021/11/A-Ma-Maniere-x-Air-Jordan-1-Receives-Confirmed-Release-Date-Campaign-Photos-Inside-cover.jpg?fit=1937%2C1090&ssl=1"
					alt="fq-acordion"
					className="cont-img"
				/>
				
			</div> */}
			<h1 className="h1About">The gallery of the store, memorable moments of the sneaker culture</h1>
			<div className="contenedor">
				<div className="div1">

				</div>
				<div className="div2">

				</div>
				<div className="div3">
					<div className="objetivo"></div>
				</div>
				<div className="div4">

				</div>
				<div className="div5">
				</div>
				<div className="div6">
					DAFTLAB{" "}
					<span>
						is an American retailer of athletic footwear. It is a national
						company, which was founded in 2019.
						DAFTLAB has around 100
						stores in operation worldwide and it is headquartered in New
						York City, United States.
					</span>
				</div>
				<div className="div7">

				</div>
				<div className="div8">

				</div>
				<div className="div9">

				</div>
				<div className="div10">

				</div>
				<div className="div10">
					Sneaker collecting is the acquisition and trading of sneakers as a hobby. It is often manifested by the use and collection of shoes made for particular sports, particularly basketball and skateboarding. A person involved in sneaker collecting is sometimes called a sneakerhead.
				</div>
				<div className="div11">

				</div>
				<div className="div12">

				</div>
				<div className="div13">

				</div>
			</div>
			<h3>¿What do you want for buy a new sneaker?</h3>
			<div className="parent">
				<div className="div14">

				</div>
				<div className="div15">
					<h3>A classic store of sneakers</h3>
				</div>
				<div className="div16">
					<p>Why buy in our stores?</p>
					<span>DAFTLAB inspects every pair to make sure whatever the buyer receives is 100% authentic.</span>
				</div>
				<div className="div17">

				</div>
				<div className="div18">
					<span>
						Shoes sold on StockX are considered deadstock, which means that they're authentic, new and unworn at the time of sale. Deadstock sneakers are also sold with the original box including the box lid and the box label indicating the shoe size, as would be acceptable for sale at a retail location.
					</span>
				</div>
				<div className="div19">

				</div>
				<div className="div20">

				</div>
			</div>
			</div>
			<h5 className="aboutQuestions">Frequently Asked Questions</h5>

			<div className="a">

				<Collapse.Group>
					<Collapse title="How I can know about my order?">
						<Text>
						You will receive a shipping confirmation email once the order has shipped from our warehouse. It will contain information to track your order.
						</Text>
					</Collapse>
					<Collapse title="Can I Pay with credit or debit card at your store?">
						<Text>
							Some shops and private tables are accepting credit cards, Mercado Pago etc. But just to be sure, bring enough cash with you to avoid any disappointment.
						</Text>
					</Collapse>
					<Collapse title="How Can I Track My Order?">
						<Text>
							You will receive a shipping confirmation email once the order has shipped from our warehouse. It will contain information to track your order.
							</Text>
						</Collapse>
						
					</Collapse.Group>
				</div>
			<div className="five-cont">
				<div className="payments-methods">

					<img
						src="https://allbike.com.ar/wp-content/uploads/2022/01/kuder-mercadopago-blanco-negro.png"
						alt="mercado-pago"
						id="mercado-pago"
						className="payload"
					/>
					<img
						src="https://images.squarespace-cdn.com/content/v1/5e7218f0d6425741be5a9df9/1589548860801-DGSUZZOECOJY092S5C9P/logos_zahlungsarten_paypal.png"
						alt="paypal"
						id="paypal"
						className="payload"
					/>
					<img
						src="https://cdn-icons-png.flaticon.com/512/61/61555.png"
						alt="visa"
						id="visa"
						className="payload"
					/>
					<img
						src="https://icon-library.com/images/mastercard-icon/mastercard-icon-10.jpg"
						alt="mastercard"
						id="mastercard"
						className="payload"
					/>
				</div>
			</div>

		</AboutUsConteiner>
	);
}

export default AboutUs;

const AboutUsConteiner = styled.div`
	display: flex;
	flex-direction: column;
	Button {
		width: 80%;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.titlecont {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		text-align: center;
		height: 14vh;
		
		/* background: linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 253, 0, 1) 100%
    ); */
		background-color: white;
		// background-image: url(https://images.squarespace-cdn.com/content/v1/5cfd417dcdc28e0001b15cd7/1643170500837-VOWDXP1ZOL3GS38J1LHK/Sneakers+banner.jpg);
		background-size: cover;
		border: 1px solid black;
		box-sizing: border-box;
		color: black;
		font-size: 4rem;
		margin-bottom: 20px;
		z-index: -1;

	}
	.first-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.a {
		padding: 1rem;
		width: 100%;
		font-weight: 500;

		@media (max-width: 1120px) {
			width: 100%;
		}
	}
	.cont-img {
		width: 45%;
		-webkit-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		-moz-box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		box-shadow: 10px 8px 16px -3px rgba(0, 0, 0, 0.63);
		@media (max-width: 1120px) {
			width: 85%;
			align-self: center;
		}
	}
	.interlude {
		font-size: 1.5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20px;
		color: #87cefa;
	}
	.second-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.third-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around !important;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.five-cont {
		display: flex;
		align-content: center;
		justify-content: center !important;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	
	#mercado-pago {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	#paypal {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}

	}
	#visa {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	#mastercard {
		width: 25%;
		@media (max-width: 1120px) {
			width: 15%;}
	}
	.payments-methods{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		margin-bottom: 20px;
		padding: 1rem;
		width: 40%;
		font-weight: 500;

		@media (max-width: 1120px) {
			width: 100%;
		}
	}
	.payload{
		padding:10px
	}
	.four-cont {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-bottom: 20px;
		@media (max-width: 1120px) {
			flex-direction: column;
		}
	}
	.frame {
	width: 80%;
    height: 480px;
    border-radius: 10px;
    background: #55ff;
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
.textito-botita{
	text-align: center;
	font-size: 10rem;
}
.contenedor{
    display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(20, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
min-height: 100vh;
padding: 20px;
}
.div1 { 
	grid-area: 1 / 1 / 4 / 3;
	background-image: url(https://cdn.25gramos.com/wp-content/uploads/2019/07/25-Gramos-Yeezy-Kanye-West-Forbes-1.jpg);
	background-size: cover;
	background-position: center;
	
}
.div2 { 
	grid-area: 1 / 3 / 4 / 5; 
	background-image: url(https://media.revistagq.com/photos/62860b8e1f8d21740a7cbdea/master/w_1600%2Cc_limit/louis-vuitton-nike-air-force-1-virgil-abloh.jpeg);
	/* background-image: url(https://media.gq.com/photos/60d2192a430ae505071c3804/master/w_2571,h_3600,c_limit/SNEAKER_GUIDE_JORDANS_1.jpg); */
	background-size: cover;
	background-position: center;
}
.div3 {
	grid-area: 4 / 1 / 11 / 5; 
	background-image: url(https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/uj9phqfjnlsu1mq2ruwk/air-jordan-1-1985?fimg-ssr-default);
	background-size: cover;
	background-position: center;
	
}

.div4 { 
	grid-area: 1 / 5 / 11 / 7; 
	background-image: url(https://media.gq.com/photos/60d2192a430ae505071c3804/master/w_2571,h_3600,c_limit/SNEAKER_GUIDE_JORDANS_1.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	
}
.div5 {
	grid-area: 1 / 7 / 4 / 9;
	background-image: url(https://90snkrs.com/es/wp-content/uploads/sites/3/2021/05/FLIGHT-CLUB-LA.jpg);
	background-size: cover;
	background-position: center;
	
}

.div6 { 
	grid-area: 4 / 7 / 8 / 9; 
	/* background-image: url(https://www.theridernews.com/wp-content/uploads/2022/04/DSC05208-780x470.jpg); */
	background-color: #222;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
	font-size: 1rem;
	text-align: center;
	border-radius: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.div7 {
	grid-area: 8/ 7 / 11 / 9;
	background-image: url(https://www.theridernews.com/wp-content/uploads/2022/04/DSC05208-780x470.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.div8 {
	grid-area: 11 / 1 / 21 / 3;
	background-image: url(https://images.solecollector.com/complex/images/c_crop,h_1929,w_1638,x_0,y_16/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/tjd6zfjqyv0u09rcorbg/ronnie-fieg-asics-gel-lyte-3-the-palette-2);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.div9 {
	grid-area: 11 / 3 / 14 / 5;
	background-image: url(https://media.revistagq.com/photos/5e8718f0c314930008f2e34b/master/w_1600%2Cc_limit/nike-air-yeezy.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.div10 {
	grid-area: 14/ 3 / 18 /5;
	background-color: #222;
	background-size: cover;
	background-position: center;
	padding-left: 10px;
	font-size: 1rem;
	border-radius: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.div11 {
	grid-area: 18 / 3 / 21 / 5;
	background-image: url(https://www.okayplayer.com/wp-content/uploads/2021/04/120-OKP-SB-Dunks-01-1200.jpg);
	background-size: cover;
	background-position: center;
	
}
.div12 {
	grid-area: 11/ 5 / 16 / 9;
	background-image: url(https://bcchspatriotpost.com/wp-content/uploads/2019/04/F1-900x506.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.div13 {
	grid-area: 16 / 5 / 21 / 9;
	background-image: url(https://external-preview.redd.it/h0NQndlvR2IxgavrlByoUX96Af1jOcWBQJYxfNVe00g.jpg?auto=webp&s=5cc6b13f535f4084f61fb16451c0837a0a7bbdda);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
.parent{
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(20, 1fr);
	grid-column-gap: 10px;
	grid-row-gap: 10px;
	min-height: 100vh;
	padding: 20px;
}
.div14 {
	grid-area: 1 / 1 / 8 / 6;
	background-image: url(https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/scbl5pmzs3ewac4u1cxw/air-jordan-4-1);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
}
.div15 {
	grid-area: 1 / 6 / 3 / 9;
	background-color: #222;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	border-radius: 10px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
}
.div16 {
	grid-area: 3 / 6 / 8 / 9; 
	background-color: #222;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
	font-size: 1rem;
	text-align: center;
	border-radius: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.div17 {
	grid-area: 8 / 1 / 21 / 4; 
	background-image: url(https://cdn.sanity.io/images/c1chvb1i/production/e5334eedeb691b18a5f28a2a96517bb792f9b17f-1100x735.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
}
.div18 {
	grid-area: 8 / 4 / 15 / 6;
	background-color: #222;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 9px;
	font-size: 1rem;
	border-radius: 10px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}
.div19 {
	grid-area: 15 / 4 / 21 / 6; 
	background-image: url(https://www.highsnobiety.com/static-assets/thumbor/0dpObh8E5srkA-wa89nBe1Zsqu0=/1600x2000/www.highsnobiety.com/static-assets/wp-content/uploads/2020/06/17090722/casablanca-new-balance-327-monochrome-release-date-price-01.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	padding: 3px;
}
.div20 {
	grid-area: 8 / 6 / 21 / 9;
	background-image: url(https://www.highsnobiety.com/static-assets/thumbor/7cHrLWs3XKIBdM6VxXWbvcqx2V8=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2019/11/06165748/the-10-most-expensive-sneakers-ever-sold-12.jpg);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	
	padding: 3px;
}
h1, h3, h5{
	font-size: 2rem;
	text-align: center;
}
.nextui-collapse-title {
		margin: 0px;
		text-align: center;
		text-decoration: none !important;
	}
.nextui-c-fMAxGR :last-child {
    padding: 30px;
    margin-bottom: 0px;
    text-align: center;
    font-size: 1.5rem;}
`
