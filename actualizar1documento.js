const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Actualizar un solo documento sin upsert
		const resultadoUpdateOne = await productosCollection.updateOne(
			{ idreferencia: 1 },
			{ $set: { precio: 15.99 } }
		);
		console.log("Resultado updateOne:", resultadoUpdateOne);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
