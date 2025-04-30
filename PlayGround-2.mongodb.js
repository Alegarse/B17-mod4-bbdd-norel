use('Usuarios');

/* db.Usuarios.insertMany([
  {
    nombre: "Carlos Pérez",
    edad: 25,
    email: "carlos.perez@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-06-15T10:00:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Gran Vía 123",
      ciudad: "Madrid",
      codigoPostal: "28013"
    },
    telefonos: ["600123456", "911223344"],
    intereses: ["música", "deportes", "cine"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 95 },
      { asignatura: "Historia", puntaje: 88 }
    ]
  },
  {
    nombre: "Lucía Gómez",
    edad: 17,
    email: "lucia.gomez@hotmail.com",
    activo: false,
    fechaRegistro: ISODate("2023-07-20T14:30:00Z"),
    ciudad: "Barcelona",
    direccion: {
      calle: "Passeig de Gràcia 45",
      ciudad: "Barcelona",
      codigoPostal: "08007"
    },
    telefonos: ["650987654"],
    intereses: ["lectura", "teatro"],
    notas: [
      { asignatura: "Física", puntaje: 70 },
      { asignatura: "Química", puntaje: 60 }
    ]
  },
  {
    nombre: "Marcos Díaz",
    edad: 30,
    email: "marcos.diaz@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-05-12T09:15:00Z"),
    ciudad: "Valencia",
    direccion: {
      calle: "Av. del Puerto 77",
      ciudad: "Valencia",
      codigoPostal: "46023"
    },
    telefonos: ["600000111", "963456789"],
    intereses: ["música", "viajar", "fotografía"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 99 },
      { asignatura: "Historia", puntaje: 93 }
    ]
  },
  {
    nombre: "Ana Ruiz",
    edad: 22,
    email: "ana.ruiz@yahoo.com",
    activo: true,
    fechaRegistro: ISODate("2023-03-01T11:45:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Calle Alcalá 90",
      ciudad: "Madrid",
      codigoPostal: "28009"
    },
    telefonos: ["600888777"],
    intereses: ["deportes", "cine"],
    notas: [
      { asignatura: "Inglés", puntaje: 85 },
      { asignatura: "Matemáticas", puntaje: 90 }
    ]
  },
  {
    nombre: "Elena Torres",
    edad: 29,
    email: "elena.torres@gmail.com",
    activo: false,
    fechaRegistro: ISODate("2022-12-10T08:00:00Z"),
    ciudad: "Sevilla",
    direccion: {
      calle: "Calle Sierpes 30",
      ciudad: "Sevilla",
      codigoPostal: "41004"
    },
    telefonos: ["620112233"],
    intereses: ["pintura", "viajar", "yoga"],
    notas: [
      { asignatura: "Arte", puntaje: 91 },
      { asignatura: "Historia", puntaje: 87 }
    ]
  },
  {
    nombre: "Iván Morales",
    edad: 35,
    email: "ivan.morales@outlook.com",
    activo: true,
    fechaRegistro: ISODate("2021-11-05T17:20:00Z"),
    ciudad: "Bilbao",
    direccion: {
      calle: "Gran Vía 18",
      ciudad: "Bilbao",
      codigoPostal: "48001"
    },
    telefonos: ["944556677"],
    intereses: ["música", "cocina", "senderismo"],
    notas: [
      { asignatura: "Matemáticas", puntaje: 92 },
      { asignatura: "Física", puntaje: 89 }
    ]
  },
  {
    nombre: "Natalia Fernández",
    edad: 21,
    email: "natalia.fernandez@gmail.com",
    activo: false,
    fechaRegistro: ISODate("2023-01-20T12:00:00Z"),
    ciudad: "Zaragoza",
    direccion: {
      calle: "Paseo Independencia 12",
      ciudad: "Zaragoza",
      codigoPostal: "50004"
    },
    telefonos: ["676543210"],
    intereses: ["lectura", "música", "cine"],
    notas: [
      { asignatura: "Lengua", puntaje: 90 },
      { asignatura: "Historia", puntaje: 82 }
    ]
  },
  {
    nombre: "David Romero",
    edad: 27,
    email: "david.romero@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-02-15T15:30:00Z"),
    ciudad: "Granada",
    direccion: {
      calle: "Calle Recogidas 15",
      ciudad: "Granada",
      codigoPostal: "18005"
    },
    telefonos: ["678000999", "958333222"],
    intereses: ["cine", "videojuegos", "fútbol"],
    notas: [
      { asignatura: "Informática", puntaje: 94 },
      { asignatura: "Matemáticas", puntaje: 88 }
    ]
  },
  {
    nombre: "Sofía Navarro",
    edad: 19,
    email: "sofia.navarro@gmail.com",
    activo: true,
    fechaRegistro: ISODate("2023-04-10T10:45:00Z"),
    ciudad: "Valencia",
    direccion: {
      calle: "Calle Colón 33",
      ciudad: "Valencia",
      codigoPostal: "46004"
    },
    telefonos: ["610222333"],
    intereses: ["deportes", "moda"],
    notas: [
      { asignatura: "Inglés", puntaje: 79 },
      { asignatura: "Arte", puntaje: 86 }
    ]
  },
  {
    nombre: "Jorge Herrera",
    edad: 40,
    email: "jorge.herrera@empresa.com",
    activo: false,
    fechaRegistro: ISODate("2020-09-01T09:00:00Z"),
    ciudad: "Madrid",
    direccion: {
      calle: "Av. América 20",
      ciudad: "Madrid",
      codigoPostal: "28028"
    },
    telefonos: ["600999888"],
    intereses: ["lectura", "cocina", "viajar"],
    notas: [
      { asignatura: "Cocina", puntaje: 97 },
      { asignatura: "Lengua", puntaje: 84 }
    ]
  }
]) */


// Ejercicios Clase del 24-04-2025

// OPERADORES DE COMPARACIÓN
// $gt -> mayor que
db.Usuarios.find({ edad: { $gt: 30 } });

// $lt -> menor que
db.Usuarios.find({ edad: { $lt: 30 } });

// $eq -> Igual a
db.Usuarios.find({ edad: 30 });
db.Usuarios.find({ edad: { $eq: 30 } });

// $ne -> Diferente a
db.Usuarios.find({ edad: { $ne: 30 } });

// $gte -> Mayor o igual que
db.Usuarios.find({ edad: { $gte: 30 } });

// $lte -> Menor o igual que
db.Usuarios.find({ edad: { $lte: 30 } });

// OPERADORES LÓGICOS
// $and -> Debe de cumplir las dos condiciones
db.Usuarios.find({
  $and: [
    { edad: { $lte: 25 } },
    { ciudad: "Madrid" },
    { intereses: { $all: ["deportes"] } },
    { "direccion.codigoPostal": "28013" },
  ],
});

// $or -> Debe de cumplir una de las condiciones
db.Usuarios.find({
  $or: [
    { edad: { $lte: 25 } },
    { ciudad: "Madrid" },
    { intereses: { $all: ["deportes"] } },
    { "direccion.codigoPostal": "28013" },
  ],
});

// $nor -> No cumple ninguna de las condiciones
db.Usuarios.find({
  $nor: [
    { edad: { $lte: 25 } },
    { ciudad: "Madrid" },
    { intereses: { $all: ["deportes"] } },
    { "direccion.codigoPostal": "28013" },
  ],
});

// ¿Cuántas personas viven en Madrid y son mayores de 20 años?
db.Usuarios.find({
  $and: [
    { edad: { $gt: 20 } },
    { ciudad: "Madrid" },
  ],
},
  {
    _id: 0,
    nombre: 1,
    ciudad: 1,
  }
);
db.Usuarios.find({ ciudad: 'Madrid', edad: { $gt: 20 } }).count();
// Buscar usuarios mayores de 40 años o que tengan interés en "cine"
db.Usuarios.find({
  $or: [
    { edad: { $gt: 40 } },
    { intereses: { $all: ["cine"] } },
  ],
},
  {
    nombre: 1,
    ciudad: 1,
  }
);


//OPERADORES DE ARRAY
// $all -> Para buscar en un array de numeros o strings
db.Usuarios.find({
  intereses: { $all: ["cine"] },
});

// $elemMatch -> Para buscar en un array de objetos
db.Usuarios.find({
  notas: {
    $elemMatch: {
      asignatura: "Matemáticas",
      puntaje: 92,
    },
  },
});

// Ejemplo con notación de punto
db.Usuarios.find({
  "notas.puntaje": 89,
});

// $size -> Obtiene la cantidad de valores del array

db.Usuarios.find({
  intereses: { $size: 2 },
});

// Buscar usuarios que no tengan "viajar" como interés
db.Usuarios.find(
  {
    $nor:
      [{ intereses: 'viajar' },]
  }
)
// Más correcta. $nor y demás si es más de una condición
db.Usuarios.find({
  intereses: {
    $not: {
      $all: ["viajar"],
    },
  },
});

// Buscar usuarios que tengan el interés "deportes" y una nota mayor o igual a 90
db.Usuarios.find(
  {
    $and:
      [
        { intereses: { $all: ["deportes"] } },
        { "notas.puntaje": { $gte: 90 } },
      ]
  },
);

db.Usuarios.find({
  intereses: { $all: ["deportes"] },
  "notas.puntaje": { $gte: 90 },
}
);