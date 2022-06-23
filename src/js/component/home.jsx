import React, { useState } from "react";

const Home = () => {
	const [pokemones, setPokemones] = useState([]);

	fetch("https://pokeapi.co/api/v2/pokemon")
		.then((resp) => resp.json())//lo hace JSON
		.then((response) => setPokemones(response.results)) //results=nombre del arreglo donde estan 
		.catch();
	return (
		<div>
			<h1 className="text-center mt-5">Pokeapi_fetch</h1>
			{pokemones.map((item, index) => (
				<p key={index}>
					<div className="card" style={{ width: "18rem" }}>
						<img
							className="card-img-top"
							src="..."
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Atrapalos Ya!!!</p>
							<a href={item.url} class="btn btn-primary">
								POKEBOLA
							</a>
						</div>
					</div>
				</p>
			))}
		</div>
	);
};

export default Home;
