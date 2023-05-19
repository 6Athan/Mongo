const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Agregar una colección de proveedores
		const proveedoresCollection = db.collection("Proveedores");
		const proveedor = {
			idproveedor: 1,
			nombre: "Proveedor 1",
			direccion: "Calle 123",
		};
		await proveedoresCollection.insertOne(proveedor);
		console.log("Proveedor insertado:", proveedor);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
