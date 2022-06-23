import React, { useState, useEffect } from "react";

const Home = () => {
	const [nuevaTarea, setNuevaTarea] = useState("");
	const [items, setItems] = useState([]);
	function agregar() {
		const item = {
			id: Math.floor(Math.random() * 100),
			value: nuevaTarea,
		};

		setItems((listaVieja) => [...listaVieja, item]);
		setNuevaTarea("");
	}

	function borrado(id) {
		const listaNueva = items.filter((item) => item.id !== id);
		setItems(listaNueva);
	};
	useEffect(() => {
		//logica
		fetch("https://assets.breatheco.de/apis/fake/todos/user/alonsogomez", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				
				console.log(resp.status);
				return resp.json();
			})
			.then((data) => {
				setNuevaTarea(data);
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	}, []);

	return (
		<div>
			<div className="card">
				<h2 className="card-header">To_do List</h2>
				<div className="card-body">
					<h5 className="card-title">Guarda aca tu tarea</h5>
					<input
						type="text"
						placeholder="Agregar Tarea"
						value={nuevaTarea}
						onChange={(e) => setNuevaTarea(e.target.value)}
					/>

					<button
						type="button"
						className="btn btn-success"
						onClick={() => agregar()}>
						Guardar
					</button>
					<ol>
						{items.map((item) => {
							return (
								<li key={item.id}>
									{item.value}{" "}
									<button
										type="button"
										className="btn btn-danger"
										onClick={() => borrado(item.id)}>
										Borrar
									</button>
								</li>
							);
						})}
					</ol>
				</div>
			</div>
		</div>
	);
};

export default Home;

