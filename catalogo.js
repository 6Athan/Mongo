const { MongoClient } = require("mongodb");
const faker = require("faker");

const uri =
	"mongodb+srv://atanhdz:66Mephisto@cluster0.mfzp6zp.mongodb.net/?retryWrites=true&w=majority";

async function insertarProductosAleatorios() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const catalogoCollection = db.collection("Catalogos");

		for (let i = 0; i < 2000; i++) {
			const producto = {
				idreferencia: faker.random.number(), // Tipo: número entero
				nombreproducto: faker.commerce.productName(), // Tipo: cadena de texto
				cantidad: faker.random.number(), // Tipo: número entero
				precio: faker.commerce.price(), // Tipo: número decimal
				talla: faker.random.arrayElement(["S", "M", "L", "XL"]), // Tipo: cadena de texto
			};

			// Insertar el documento en la colección "Catalogos"
			await catalogoCollection.insertOne(producto);
		}

		console.log("Inserciones aleatorias completadas");
	} catch (error) {
		console.error("Error al insertar los productos:", error);
	} finally {
		cliente.close();
	}
}

insertarProductosAleatorios();
