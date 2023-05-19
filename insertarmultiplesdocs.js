const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Insertar múltiples documentos
		const documentosInsertados = await productosCollection.insertMany([
			{
				idreferencia: 2,
				nombre: "Producto 1",
				precio: 9.99,
			},
			{
				idreferencia: 3,
				nombre: "Producto 2",
				precio: 14.99,
			},
		]);
		console.log("Documentos insertados:", documentosInsertados);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
