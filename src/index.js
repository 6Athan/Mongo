const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://atanhdz:66Mephisto@cluster0.mfzp6zp.mongodb.net/?retryWrites=true&w=majority';

async function crearColecciones() {
  const cliente = new MongoClient(uri);
  try {
    await cliente.connect();
    const db = cliente.db('BabySoft');
    
    // Crear colección "Productos"
    await db.createCollection('Productos');
    console.log('Colección "Productos" creada exitosamente');

    // Crear colección "Catalogos"
    await db.createCollection('Catalogos');
    console.log('Colección "Catalogos" creada exitosamente');

    // Crear colección "Usuarios"
    await db.createCollection('Usuarios');
    console.log('Colección "Usuarios" creada exitosamente');
  } catch (error) {
    console.error('Error al crear las colecciones:', error);
  } finally {
    cliente.close();
  }
}



crearColecciones();
