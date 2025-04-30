// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Tienda");

// Buyscar por parecidos ne los docuemntos
//Hay que usar la herramiento de REGEX

// Para encontrar los valroes que empiezan por Find - ^
db.moviles.find({
    modelo: {$regex: "^Find"}
})

// Que contenga sin poner nada delante ni detras. 
// Busca con ese detalle de options sin importar mayusculas y minusciulas
db.moviles.find({
    "especificaciones.sistemaOperativo" : {$regex: "android", $options: "i"}
})

// Que termine el String en eso - $
db.moviles.find({
    "especificaciones.sistemaOperativo" : {$regex: "2.0$"}
});

db.moviles.createIndex({precio:-1});

// Crear indices y verificar tiempo de la consulta en millisegundos
db.usuarios.find({ nombre: 'user1500001' }).explain("executionStats").executionStats.executionTimeMillis
 
db.usuarios.createIndex({nombre:-1});

//OPERADORES DE ACTUALIZACIÓN
// $set -> Actualizar un valor
// db.moviles.updateOne({ marca: 'Oppo'},{ $set: { modelo: "Find X56"} });
 
// $inc -> Incrementar un valor
// db.moviles.updateMany({ marca: 'Oppo' },{ $inc: { precio: 1} });
 
// $push -> Agregar un valor a un array
// db.moviles.updateMany({ marca: 'Oppo' },{ $push: { coloresDisponibles: "verde"} });
 
// $pull -> Quitar valores a un array
// db.moviles.updateMany({ marca: 'Oppo' },{ $pull: { coloresDisponibles: "verde"} });
 
 // Obtener todos los productos que tengan 12GB de RAM y color Azul
 db.moviles.find(
    {
          "especificaciones.RAM": '12GB',
          coloresDisponibles: 'Azul'
    },
    {
      marca: 1, modelo: 1, _id: 0,
    }
  );

// Obtener un listado con todos los comentarios que sean por encima o igual del 4.9
db.moviles.find(
    {
          "opiniones.puntuacion": { $gte: 4.9}
    },
    {
      "opiniones.comentario": 1, _id: 0,
    }
);

// aggregate() -> Te permite hacer consultas complejas y potetenes
// $match -> Para buscar en nuestra colecction (igual que un find)
// $project -> Proyectar la información
db.moviles.aggregate(
    [
      {
        $match: {
          marca: "Oppo"
        }
      },
      {
        $project: {
          marca: 1,
          modelo: 1,
          coloresDisponibles: 1
        }
      }
    ]
  );
   
   
  // $unwind -> Descompone un array dentro de un documento,
  // y crea un nuevo documento por cada elemento del array
  db.moviles.aggregate(
    [
      {
        $unwind: "$opiniones"
      },
      {
        $match: {
          "opiniones.puntuacion": { $gte: 4.9}
        }
      },
      {
        $project: {
          "opiniones.comentario": 1,
          _id: 0
        }
      }
    ]
  );
   
  // $group -> se compone siempre de
                // _id -> Donde le indicamos por lo que queremos agrupar
                // nombre_campo le indicamos el calculo que queremos hacer
  db.moviles.aggregate(
    [
      {
        $unwind: "$coloresDisponibles"
      },
      {
        $group: {
          _id: "$coloresDisponibles",
          cantidad: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          color : "$_id",
          cantidad: 1
        }
      }
    ]
  );

  // $avg -> Para calcular la media
  // Calculas la media del precio por marca
  db.moviles.aggregate(
    [
      {
        $group: {
          _id: "$marca",
          precioMedio: { $avg: "$precio" }
        }
      },
      {
        $project: {
          _id: 0,
          Marca : "$_id",
          precioMedio: 1
        }
      }, 
      {
        $sort: { precioMedio: 1 }
      },
      {
        $limit: 1
      }
    ]
  );

// $cond -> PAra hacer una condicion
  db.moviles.aggregate(
    [
      {
        $group: {
          _id: "$marca",
          precioMedio: { $avg: "$precio" }
        }
      },
      {
        $project: {
          _id: 0,
          marca: "$_id",
          categoria: {
            $cond: {
                if: { $gt: ["$precioMedio", 800] },
                then: "Caro",
                else: "Barato"
            }
          }
        }
      }
    ]
  );


  // $avg -> Para calcular la media
// Calcular la media de precio por marca.
// $sort -> Para ordenadr los valores, 1 de menos a mayor, y -1 de mayor a menor
// $limit -> Para limitar la cantidad de valores que va a devolver
db.moviles.aggregate([
    {
      $group: {
        _id: "$marca",
        media: { $avg: "$precio"}
      }
    },
    {
      $project: {
        _id: 0,
        media: 1,
        marca: "$_id"
      }
    },
    {
      $sort: { media: 1 }
    },
    {
      $limit: 1
    }
  ]);
   
   
  // $cond -> Para hacer una condición
  db.moviles.aggregate([
    {
      $group: {
        _id: "$marca",
        media: { $avg: "$precio"}
      }
    },
    {
      $project: {
        _id: 0,
        marca: "$_id",
        categoria: {
          $cond: {
            if: { $gt: ["$media", 800 ]},
            then: "Caro",
            else: "Barato"
          }
        }
      }
    }
  ]);
   