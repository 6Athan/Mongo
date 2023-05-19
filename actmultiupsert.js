const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Actualizar múltiples documentos con upsert
		const resultadoUpdateManyUpsert = await productosCollection.updateMany(
			{ precio: { $gt: 20 } },
			{ $inc: { precio: 5 } },
			{ upsert: true }
		);
		console.log("Resultado updateMany con upsert:", resultadoUpdateManyUpsert);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
