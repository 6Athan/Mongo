const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Actualizar un solo documento con upsert
		const resultadoUpdateOneUpsert = await productosCollection.updateOne(
			{ idreferencia: 4 },
			{ $set: { precio: 19.99 } },
			{ upsert: true }
		);
		console.log("Resultado updateOne con upsert:", resultadoUpdateOneUpsert);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
