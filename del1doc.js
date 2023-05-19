const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Eliminar un solo documento
		const resultadoDeleteOne = await productosCollection.deleteOne({
			idreferencia: 1,
		});
		console.log("Resultado deleteOne:", resultadoDeleteOne);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
