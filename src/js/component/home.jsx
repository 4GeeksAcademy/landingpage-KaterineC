import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"
import Contenedor from "./contenedor.jsx";



//create your first component
const Home = () => {
	return (<>
		<NavBar/>
		<div className="container">
		<Jumbotron/>
		<Contenedor/>
		</div>
		<Footer/>
		</>
	);
};

export default Home;
