const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		//buscar documentos

		const documentosEncontrados = await productosCollection
			.find({
				precio: { $gt: 10 },
			})
			.toArray();
		console.log("Documentos encontrados:", documentosEncontrados);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
