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

  // Parte de lectura de documentos
  // Método find sin parametros: Obtenemos toda la información de la colección
  db.usuarios.find();