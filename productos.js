const { MongoClient } = require("mongodb");
const faker = require("faker");

const uri =
	"mongodb+srv://atanhdz:66Mephisto@cluster0.mfzp6zp.mongodb.net/?retryWrites=true&w=majority";

async function insertarProductosAleatorios() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const productosCollection = db.collection("Productos");

		for (let i = 0; i < 2000; i++) {
			const producto = {
				idreferencia: faker.random.number(), // Tipo: número entero
				idproveedor: faker.random.number(), // Tipo: número entero
				nombre: faker.commerce.productName(), // Tipo: cadena de texto
				precio: parseFloat(faker.commerce.price()), // Tipo: número entero
				talla: faker.random.arrayElement(["S", "M", "L", "XL"]), // Tipo: cadena de texto
			};

			// Validar los tipos de datos
			if (typeof producto.idreferencia !== "number") {
				throw new Error("El campo idreferencia debe ser un número entero");
			}
			if (typeof producto.idproveedor !== "number") {
				throw new Error("El campo idproveedor debe ser un número entero");
			}
			if (typeof producto.nombre !== "string") {
				throw new Error("El campo nombre debe ser una cadena de texto");
			}
			if (typeof producto.precio !== "number") {
				throw new Error("El campo precio debe ser un número");
			}
			if (typeof producto.talla !== "string") {
				throw new Error("El campo talla debe ser una cadena de texto");
			}

			// Insertar el documento en la colección "Productos"
			await productosCollection.insertOne(producto);
		}

		console.log("Inserciones aleatorias completadas");
	} catch (error) {
		console.error("Error al insertar los productos:", error);
	} finally {
		cliente.close();
	}
}

insertarProductosAleatorios();
