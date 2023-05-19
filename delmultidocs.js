const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Eliminar múltiples documentos
		const resultadoDeleteMany = await productosCollection.deleteMany({
			precio: { $gt: 15 },
		});
		console.log("Resultado deleteMany:", resultadoDeleteMany);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
