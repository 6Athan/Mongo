const { MongoClient } = require("mongodb");
//Este pipeline realiza las siguientes etapas: $match, $group y $sort.
// Pipeline 1
const pipeline1 = [
	{
		$match: {
			talla: "M",
		},
	},
	{
		$group: {
			_id: "$idproveedor",
			totalProductos: { $sum: 1 },
		},
	},
	{
		$sort: {
			totalProductos: -1,
		},
	},
];

const resultadoPipeline1 = await productosCollection
	.aggregate(pipeline1)
	.toArray();
console.log("Resultado Pipeline 1:", resultadoPipeline1);

// Pipeline 2
const pipeline2 = [
	{
		$match: {
			precio: { $gt: 10 },
		},
	},
	{
		$project: {
			nombre: 1,
			precio: 1,
		},
	},
	{
		$limit: 5,
	},
];

const resultadoPipeline2 = await productosCollection
	.aggregate(pipeline2)
	.toArray();
console.log("Resultado Pipeline 2:", resultadoPipeline2);

// Ejemplo de $limit
const pipelineLimit = [
	{
		$limit: 10,
	},
];

const resultadoLimit = await usuariosCollection
	.aggregate(pipelineLimit)
	.toArray();
console.log("Resultado de $limit:", resultadoLimit);

// Ejemplo de $sort
const pipelineSort = [
	{
		$sort: {
			nombre: 1, // Orden ascendente por el campo "nombre"
		},
	},
];

const resultadoSort = await usuariosCollection
	.aggregate(pipelineSort)
	.toArray();
console.log("Resultado de $sort:", resultadoSort);

// Ejemplo de $unwind
const pipelineUnwind = [
	{
		$unwind: "$etiquetas",
	},
];

const resultadoUnwind = await productosCollection
	.aggregate(pipelineUnwind)
	.toArray();
console.log("Resultado de $unwind:", resultadoUnwind);
