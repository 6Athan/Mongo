const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Actualizar múltiples documentos sin upsert
		const resultadoUpdateMany = await productosCollection.updateMany(
			{ precio: { $lt: 10 } },
			{ $inc: { precio: 2 } }
		);
		console.log("Resultado updateMany:", resultadoUpdateMany);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
