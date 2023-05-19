const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Insertar un solo documento
		const documentoInsertado = await productosCollection.insertOne({
			idreferencia: 1,
			nombre: "Producto de ejemplo",
			precio: 10.99,
		});
		console.log("Documento insertado:", documentoInsertado);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
