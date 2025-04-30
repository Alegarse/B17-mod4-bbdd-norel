use ('test')

/* db.usuarios.insertMany([
    {
      nombre: "Ana",
      apellido: "García",
      correo: "ana.garcia@example.com",
      edad: 28,
      activo: true
    },
    {
      nombre: "Luis",
      apellido: "Fernández",
      correo: "luis.fernandez@example.com",
      edad: 34,
      activo: false
    },
    {
      nombre: "Marta",
      apellido: "Sánchez",
      correo: "marta.sanchez@example.com",
      edad: 25,
      activo: true
    }
  ]); */

// Ejercicios Clase del 23-04-2025


  // Parte de lectura de documentos
  // Método find sin parametros: Obtenemos toda la información de la colección
  // ---> db.usuarios.find();

  // Segundo parametro del fin se usa para mostrar la clientInformation,macion, 1 muestra y 0 oculta
  // ---> db.usuarios.find({}, {nombre: 1, apellido: 1, _id: 0});

  // Primer parametro se usa para filtar la información
  // ---> db.usuarios.find({ nombre: "Luis"});
  // ---> db.usuarios.find({ nombre: "Luis"}, {nombre: 1, apellido: 1, _id: 0});

/*   Condicionales:
  $gt: Mayor que
  $lt: Menor que
  $eq: Igual a 
  $ne: Diferente a 
  $gte: Mayor o igual que 
  $lte: Menor o igual que  */

  db.usuarios.find({ activo: false, edad: { $gt: 30}});
  db.usuarios.find({ activo: true, edad: { $lt: 30}});