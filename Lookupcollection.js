const { MongoClient } = require("mongodb");

async function ejecutarOperaciones() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		// Realizar $lookup en la colección de productos con la colección de proveedores
		const resultadoLookup = await productosCollection
			.aggregate([
				{
					$lookup: {
						from: "Proveedores",
						localField: "idproveedor",
						foreignField: "idproveedor",
						as: "proveedor",
					},
				},
			])
			.toArray();
		console.log("Resultado $lookup:", resultadoLookup);
	} catch (error) {
		console.error("Error al ejecutar operacion:", error);
	} finally {
		cliente.close();
	}
}

ejecutarOperaciones();
