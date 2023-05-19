const { MongoClient } = require("mongodb");
const faker = require("faker");

const uri =
	"mongodb+srv://atanhdz:66Mephisto@cluster0.mfzp6zp.mongodb.net/?retryWrites=true&w=majority";

async function insertarUsuariosAleatorios() {
	const cliente = new MongoClient(uri);
	try {
		await cliente.connect();
		const db = cliente.db("BabySoft");
		const usuariosCollection = db.collection("Usuarios");

		const usuarios = [];

		for (let i = 0; i < 2000; i++) {
			const usuario = {
				idusuario: faker.random.number(), // Tipo: número entero
				nombre: faker.name.findName(), // Tipo: cadena de texto
				contraseña: faker.internet.password(), // Tipo: cadena de texto
				perfil: faker.random.number(), // Tipo: número entero
				correo: faker.internet.email(), // Tipo: cadena de texto
			};

			// Validar los tipos de datos
			if (typeof usuario.idusuario !== "number") {
				throw new Error("El campo idusuario debe ser un número entero");
			}
			if (typeof usuario.nombre !== "string") {
				throw new Error("El campo nombre debe ser una cadena de texto");
			}
			if (typeof usuario.contraseña !== "string") {
				throw new Error("El campo contraseña debe ser una cadena de texto");
			}
			if (typeof usuario.perfil !== "number") {
				throw new Error("El campo perfil debe ser un número");
			}
			if (typeof usuario.correo !== "string") {
				throw new Error("El campo correo debe ser una cadena de texto");
			}

			usuarios.push(usuario);
		}

		// Insertar los documentos en la colección "Usuarios"
		const resultado = await usuariosCollection.insertMany(usuarios);

		console.log("Inserciones aleatorias completadas");
		console.log("Número de documentos insertados:", resultado.insertedCount);
	} catch (error) {
		console.error("Error al insertar los usuarios:", error);
	} finally {
		cliente.close();
	}
}

insertarUsuariosAleatorios();
