use("clinica_veterinaria");

/* db.animales.insertMany([
    {
      "nombre": "Firulais",
      "tipo": "Perro",
      "raza": "Labrador Retriever",
      "sexo": "Macho",
      "color": "Negro",
      "edad": 3,
      "peso": 40,
      "fechaRegistro": "2024-06-12",
      "consulta": "Le duele la pata derecha",
      "precio": 50,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-06-12"
        },
        {
          "tipo": "Moquillo",
          "fechaVacuna": "2024-06-12"
        },
        {
          "tipo": "Parvovirus",
          "fechaVacuna": "2023-12-01"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Infección de oído",
          "tratamiento": "Antibióticos y limpieza de oídos",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": ["Cultivo de muestras"]
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": ["Análisis de sangre"]
        }
      ],
      "notasAdicionales": "Firulais necesita una dieta especial para mantener su peso. También tiene una leve cojera en la pata trasera izquierda."
    },
    {
      "nombre": "Luna",
      "tipo": "Gato",
      "raza": "Siamés",
      "sexo": "Hembra",
      "color": "Blanco y gris",
      "edad": 2,
      "peso": 5,
      "fechaRegistro": "2024-06-11",
      "consulta": "Vómitos frecuentes",
      "precio": 40,
      "historico_vacunas": [],
      "proxima_vacuna": [
        {
          "tipo": "Vacuna triple felina",
          "fechaVacuna": "2024-06-12"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-08",
          "diagnostico": "Parásitos intestinales",
          "tratamiento": "Desparasitación oral",
          "procedimientos": [],
          "resultadosPruebas": ["Examen de heces"]
        },
        {
          "fecha": "2024-05-30",
          "diagnostico": "Conjuntivitis",
          "tratamiento": "Colirio antibiótico",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Luna es alérgica al pollo. Además de los vómitos, ha estado mostrando letargo y pérdida de apetito."
    },
    {
      "nombre": "Paco",
      "tipo": "Perro",
      "raza": "Bulldog Francés",
      "sexo": "Macho",
      "color": "Atigrado",
      "edad": 5,
      "peso": 12,
      "fechaRegistro": "2024-06-10",
      "consulta": "Problemas respiratorios",
      "precio": 60,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-01"
        },
        {
          "tipo": "Moquillo",
          "fechaVacuna": "2023-12-20"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-08",
          "diagnostico": "Infección respiratoria",
          "tratamiento": "Antibióticos y reposo",
          "procedimientos": [],
          "resultadosPruebas": ["Radiografía de tórax"]
        },
        {
          "fecha": "2024-04-20",
          "diagnostico": "Dermatitis alérgica",
          "tratamiento": "Cambio de dieta y medicación para la piel",
          "procedimientos": [],
          "resultadosPruebas": ["Raspado cutáneo"]
        }
      ],
      "notasAdicionales": "Paco requiere supervisión constante debido a sus problemas respiratorios. Se recomienda evitar el ejercicio vigoroso para evitar empeorar su condición."
    },
    {
      "nombre": "Nala",
      "tipo": "Gato",
      "raza": "Maine Coon",
      "sexo": "Hembra",
      "color": "Atigrado",
      "edad": 1,
      "peso": 8,
      "fechaRegistro": "2024-06-09",
      "consulta": "Pérdida de apetito",
      "precio": 45,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-15"
        }
      ],
      "proxima_vacuna": [
        {
          "tipo": "Vacuna triple felina",
          "fechaVacuna": "2024-07-10"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-08",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos para el malestar estomacal",
          "procedimientos": [],
          "resultadosPruebas": ["Análisis de sangre"]
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Herida en la pata",
          "tratamiento": "Limpieza y sutura",
          "procedimientos": ["Limpieza de la herida", "Sutura"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Nala es muy juguetona y le encanta jugar con pelotas de lana. Se recomienda monitorear su apetito y si persiste la pérdida de apetito, programar una consulta adicional."
    },
      {
      "nombre": "Max",
      "tipo": "Perro",
      "raza": "Golden Retriever",
      "sexo": "Macho",
      "color": "Dorado",
      "edad": 2,
      "peso": 30,
      "fechaRegistro": "2024-06-15",
      "consulta": "Tos persistente",
      "precio": 55,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-01"
        },
        {
          "tipo": "Moquillo",
          "fechaVacuna": "2024-05-15"
        },
        {
          "tipo": "Parvovirus",
          "fechaVacuna": "2023-12-10"
        }
      ],
      "proxima_vacuna": [
        {
          "tipo": "Leptospirosis",
          "fechaVacuna": "2024-07-01"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Bronquitis",
          "tratamiento": "Antibióticos y antiinflamatorios",
          "procedimientos": ["Radiografía de tórax"],
          "resultadosPruebas": ["Análisis de sangre"]
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Max es muy activo y necesita mucho ejercicio. Tiene una ligera cojera en la pata trasera izquierda."
    },
    {
      "nombre": "Lucky",
      "tipo": "Gato",
      "raza": "Persa",
      "sexo": "Macho",
      "color": "Blanco",
      "edad": 4,
      "peso": 6,
      "fechaRegistro": "2024-06-14",
      "consulta": "Secreción ocular",
      "precio": 35,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-04-20"
        },
        {
          "tipo": "Vacuna triple felina",
          "fechaVacuna": "2024-03-15"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Conjuntivitis",
          "tratamiento": "Limpieza ocular y colirio antibiótico",
          "procedimientos": [],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Infección de oído",
          "tratamiento": "Limpieza de oídos y antibióticos",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Lucky es un gato tranquilo y le encanta dormir en lugares cálidos. Tiene una buena apetito y no presenta problemas de comportamiento."
    },
    {
      "nombre": "Simba",
      "tipo": "Perro",
      "raza": "Pastor Alemán",
      "sexo": "Macho",
      "color": "Negro y marrón",
      "edad": 1,
      "peso": 35,
      "fechaRegistro": "2024-06-13",
      "consulta": "Herida en la pata",
      "precio": 60,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-01"
        }
      ],
      "proxima_vacuna": [
        {
          "tipo": "Leptospirosis",
          "fechaVacuna": "2024-06-20"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Herida profunda en la pata",
          "tratamiento": "Limpieza, sutura y vendaje",
          "procedimientos": ["Sutura"],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Simba es un cachorro enérgico y juguetón. Es muy sociable con otros perros y le gusta correr en el parque."
    },
      {
      "nombre": "Bobby",
      "tipo": "Perro",
      "raza": "Bulldog Inglés",
      "sexo": "Macho",
      "color": "Blanco y marrón",
      "edad": 5,
      "peso": 25,
      "fechaRegistro": "2024-06-16",
      "consulta": "Diarrea crónica",
      "precio": 55,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-05"
        },
        {
          "tipo": "Leptospirosis",
          "fechaVacuna": "2024-04-15"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Gastroenteritis",
          "tratamiento": "Dieta especial y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": ["Análisis de heces"]
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Dermatitis alérgica",
          "tratamiento": "Medicación y champú especial",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Bobby es un perro muy dócil y le encanta pasear en el parque. Es alérgico al polen y se recomienda evitar áreas con mucha vegetación."
    },
    {
      "nombre": "Coco",
      "tipo": "Gato",
      "raza": "Persa",
      "sexo": "Hembra",
      "color": "Negro",
      "edad": 2,
      "peso": 4,
      "fechaRegistro": "2024-06-17",
      "consulta": "Problemas urinarios",
      "precio": 35,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-04-30"
        },
        {
          "tipo": "Vacuna triple felina",
          "fechaVacuna": "2024-03-25"
        }
      ],
      "proxima_vacuna": [
        {
          "tipo": "Leucemia felina",
          "fechaVacuna": "2024-07-15"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Infección urinaria",
          "tratamiento": "Antibióticos y dieta especial",
          "procedimientos": [],
          "resultadosPruebas": ["Análisis de orina"]
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Conjuntivitis",
          "tratamiento": "Limpieza ocular y colirio antibiótico",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Coco es una gata muy cariñosa y le gusta dormir en lugares elevados. Se recomienda proporcionarle una dieta rica en agua para prevenir futuras infecciones urinarias."
    },
    {
      "nombre": "Rocky",
      "tipo": "Perro",
      "raza": "Boxer",
      "sexo": "Macho",
      "color": "Atigrado",
      "edad": 3,
      "peso": 30,
      "fechaRegistro": "2024-06-18",
      "consulta": "Problemas de articulaciones",
      "precio": 60,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-01"
        },
        {
          "tipo": "Leptospirosis",
          "fechaVacuna": "2024-04-20"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Artrosis",
          "tratamiento": "Suplementos articulares y ejercicio moderado",
          "procedimientos": [],
          "resultadosPruebas": ["Radiografía de articulaciones"]
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Otitis",
          "tratamiento": "Limpieza de oídos y medicación",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Rocky es un perro muy activo y necesita mucho ejercicio. Se recomienda evitar actividades que pongan presión adicional en sus articulaciones."
    },
      {
      "nombre": "Canela",
      "tipo": "Gato",
      "raza": "Persa",
      "sexo": "Hembra",
      "color": "Blanco y marrón",
      "edad": 4,
      "peso": 4.5,
      "fechaRegistro": "2024-06-25",
      "consulta": "Problemas de piel",
      "precio": 40,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-05"
        },
        {
          "tipo": "Vacuna triple felina",
          "fechaVacuna": "2024-04-20"
        }
      ],
      "proxima_vacuna": [
        {
          "tipo": "Leucemia felina",
          "fechaVacuna": "2024-07-10"
        }
      ],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Dermatitis alérgica",
          "tratamiento": "Champú especial y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Otitis",
          "tratamiento": "Limpieza de oídos y medicación",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Canela es una gata tranquila pero propensa a problemas de piel. Se recomienda mantener su pelaje limpio y proporcionarle una dieta equilibrada."
    },
    {
      "nombre": "Chichu",
      "tipo": "Perro",
      "raza": "Chihuahua",
      "sexo": "Macho",
      "color": "Marrón",
      "edad": 3,
      "peso": 4,
      "fechaRegistro": "2024-06-26",
      "consulta": "Problemas de comportamiento",
      "precio": 45,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-10"
        },
        {
          "tipo": "Parvovirus",
          "fechaVacuna": "2024-04-20"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Ansiedad por separación",
          "tratamiento": "Entrenamiento y terapia de comportamiento",
          "procedimientos": [],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Chichu es un perro cariñoso pero sufre de ansiedad por separación. Se recomienda un entrenamiento adecuado y mantenerlo acompañado la mayor parte del tiempo."
    },
    {
      "nombre": "Pepita",
      "tipo": "Gato",
      "raza": "Maine Coon",
      "sexo": "Hembra",
      "color": "Atigrado",
      "edad": 2,
      "peso": 6,
      "fechaRegistro": "2024-06-27",
      "consulta": "Pérdida de apetito",
      "precio": 40,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-15"
        },
        {
          "tipo": "Leucemia felina",
          "fechaVacuna": "2024-04-25"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Gastritis",
          "tratamiento": "Dieta blanda y medicamentos",
          "procedimientos": [],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Conjuntivitis",
          "tratamiento": "Limpieza ocular y colirio antibiótico",
          "procedimientos": [],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Pepita es una gata juguetona pero ha estado mostrando pérdida de apetito. Se recomienda una visita adicional para un chequeo completo."
    },
      {
      "nombre": "Bella",
      "tipo": "Perro",
      "raza": "Poodle",
      "sexo": "Hembra",
      "color": "Blanco",
      "edad": 6,
      "peso": 10,
      "fechaRegistro": "2024-06-21",
      "consulta": "Problemas de visión",
      "precio": 55,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-05"
        },
        {
          "tipo": "Moquillo",
          "fechaVacuna": "2023-12-20"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Cataratas",
          "tratamiento": "Cirugía de cataratas",
          "procedimientos": ["Cirugía de cataratas"],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-20",
          "diagnostico": "Infección de oído",
          "tratamiento": "Limpieza de oídos y medicación",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Bella es una perra muy cariñosa pero ha estado mostrando signos de problemas de visión. Se recomienda una evaluación oftalmológica completa."
    },
    {
      "nombre": "Oreo",
      "tipo": "Gato",
      "raza": "Siamés",
      "sexo": "Macho",
      "color": "Blanco con manchas negras",
      "edad": 4,
      "peso": 7,
      "fechaRegistro": "2024-06-22",
      "consulta": "Pérdida de peso",
      "precio": 45,
      "historico_vacunas": [
        {
          "tipo": "Rabia",
          "fechaVacuna": "2024-05-15"
        },
        {
          "tipo": "Leucemia felina",
          "fechaVacuna": "2024-04-25"
        }
      ],
      "proxima_vacuna": [],
      "historialMedico": [
        {
          "fecha": "2024-06-10",
          "diagnostico": "Hipertiroidismo",
          "tratamiento": "Medicamentos antitiroideos",
          "procedimientos": [],
          "resultadosPruebas": []
        },
        {
          "fecha": "2024-05-25",
          "diagnostico": "Infección de oído",
          "tratamiento": "Limpieza de oídos y medicación",
          "procedimientos": ["Limpieza de oídos"],
          "resultadosPruebas": []
        }
      ],
      "notasAdicionales": "Oreo ha estado perdiendo peso últimamente y se ha diagnosticado con hipertiroidismo. Se recomienda seguir de cerca su condición y ajustar la medicación según sea necesario."
    },
  ]); */

// 1. Obtener los animales que sean de tipo Perro y tengan un precio de 50.
db.animales.find(
  { tipo: "Perro", precio: 50 },
  { _id: 0, nombre: 1 }
);
// RESULTADO -> 1 Firulais

// 2. Obtener el nombre y raza de los animales que sean mayores de 3 aÃ±os y pesen menos de 10 kilos.
db.animales.find(
  { edad: { $gt: 3 }, peso: { $lt: 10 } },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Canela, 2 Lucky, 3 Oreo

// 3. Obtener nombre y raza de los perros que se han vacunado 3 veces en nuestra clÃ­nica.
db.animales.find(
  { historico_vacunas: { $size: 3 } },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Max, 2 Firulais

// 4. Obtener el nombre de los animales que tengan una consulta con el texto "Le duele la pata derecha".
db.animales.find(
  { consulta: { $regex: 'Le duele la pata derecha' } },
  { _id: 0, nombre: 1 }
);
// RESULTADO -> 1 Firulais

// 5. Obtener el nombre y raza de los animales que se han vacunado contra el Parvovirus.
db.animales.find(
  { 'historico_vacunas.tipo': 'Parvovirus' },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Firulais, 2 Max, 3 Chichu

// 6. Obtener el nombre y raza de los animales vacunados en el aÃ±o 2023.
db.animales.find(
  { 'historico_vacunas.fechaVacuna': { $regex: '^2023' } },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Firulais, 2 Paco, 3 Max y 4 Bella

// 7. Obtener la consulta mÃ¡s reciente (fechaRegistro). NOSale
db.animales.aggregate(
  {
    $unwind: '$historialMedico'
  },
  {
    $project: {
      _id: 0,
      'historialMedico.diagnostico': 1,
      'historialMedico.fecha': 1
    }
  },
  {
    $sort: { 'historialMedico.fecha': -1 }
  },
  {
    $limit: 1
  }
);
// RESULTADO -> PÃ©rdida de apetito

// 8. Obtener la cantidad de perros que se han vacunado contra el Moquillo.
db.animales.find(
  { 'historico_vacunas.tipo': 'Moquillo' }
).count();
// RESULTADO -> 4

// 9. Obtener el nombre y raza de los animales que tengan una consulta con el texto "Le duele la pata derecha" y tengan un precio de 50.
db.animales.find(
  { consulta: { $regex: 'Le duele la pata derecha' }, precio: 50 },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Firulais

// 10. Obtener el nombre y raza de los animales que tengan una edad superior a 5 aÃ±os o un precio superior a 50.
db.animales.find(
  {
    $or: [
      { edad: { $gt: 5 } },
      { precio: { $gt: 50 } }
    ]
  },
  { _id: 0, nombre: 1, raza: 1 }
);
// RESULTADO -> 1 Paco, 2 Max, 3 Simba, 4 Bobby, 5 Bella y 6 Rocky

// 11. Obtener nombre y cantidad de animales por tipo.
db.animales.aggregate(
  {
    $group: {
      _id: "$tipo",
      cantidad: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      nombre: '$_id',
      cantidad: 1
    }
  }
);

// RESULTADO -> PERRO -> 8  Y GATO -> 7

// 12. Obtener la media del precio de consultas de los animales de tipo Perro y mostrarlo con el sÃ­mbolo de euro.
db.animales.aggregate(
  {
    $match: {
      tipo: 'Perro'
    }
  },
  {
    $group: {
      _id: "$tipo",
      precio_medio_consulta: { $avg: '$precio' }
    }
  },
  {
    $project: {
      _id: 0,
      precio_consulta: { $concat: [{ $toString: "$precio_medio_consulta" }, "€"] }
    }
  }
);
// RESULTADO -> 55â‚¬

// 13. AÃ±adir un historial de vacunas a Paco con fecha actual y tipo de vacuna "Rabia Avanzada".
/* db.animales.updateMany(
    { nombre: 'Paco' },
    { $push: { historico_vacunas: { tipo: 'Rabia Avanzada', fechaVacuna: new Date()}} }); */
// RECUERDA COMENTAR LA LINEA PARA NO EJECUTARLA DE NUEVO

// 14. Eliminar a Paco de la base de datos. NO EJECUTAR ESTE COMANDO, SOLO ESCRIBIR
/* db.animales.deleteOne({ nombre: 'Paco' }) */

// 15. Obtener la media del historial de vacunas de los perros.
db.animales.aggregate([
  { $match: { tipo: "Perro" } },
  {
    $project: {
      historico_vacunas: { $size: "$historico_vacunas" }
    }
  },
  {
    $group: {
      _id: 0,
      media_vacunas: { $avg: "$historico_vacunas" }
    }
  },
  {
    $project: {
      _id: 0,
      media_vacunas: { $round: ["$media_vacunas", 2] }
    }
  }
]);
// RESULTADO ->
// 16. Obtener el animal con mÃ¡s vacunas.
db.animales.aggregate([
  {
    $project: {
      _id: 0,
      nombre: 1,
      cantidad_vacunas: { $size: "$historico_vacunas" }
    }
  },
  {
    $sort: { historico_vacunas: -1 }
  },
  {
    $limit: 1
  }
]);
// RESULTADO -> 3 Firulais

// 17. Buscar en notasAdicionales la palabra "dieta" y obtener el nombre y raza de los animales que la contengan.
db.animales.find(
  {
    notasAdicionales: /dieta/
  },
  {
    _id: 0,
    nombre: 1,
    raza: 1
  }
)
// RESULTADO -> 1 Firulais, 2 Coco, 3 Canela

// 18. Obtener el penÃºltimo animal mÃ¡s viejo.
db.animales.aggregate(
  {
    $sort: { edad: -1 }
  },
  {
    $skip: 1
  },
  {
    $limit: 1
  }
)
// RESULTADO -> 1 Bobby

// 19. Obtener los colores y la cantidad de animales que hay de cada uno, donde la cantidad sea superior a 1.
db.animales.find()
db.animales.aggregate(
  {
    $group: {
      _id: "$color",
      cantidad: { $sum: 1 }
    }
  },
  {
    $match: {
      cantidad: { $gt: 1 }
    }
  },
  {
    $project: {
      _id: "$color",
      color: "$_id",
      cantidad: 1
    }
  }
)
// RESULTADO -> 1 Blanco, 2 Blanco y marroÌn, 3 Atigrado y 4 negro

// 20. Eliminar el atributo precio del animal "Paco".

db.animales.find({ nombre: 'Paco' });
/* db.animales.updateOne(
  {
    nombre: 'Paco'
  },
  {
    $unset: { precio: ''}
  }
) */


// 21. Calcular cuÃ¡nto ha facturado la clÃ­nica en total.
db.animales.aggregate(
  {
    $group: {
      _id: 'precio',
      facturado: { $sum: '$precio' }
    }
  },
  {
    $project: {
      _id: 0,
      facturado: 1
    }
  }
)
// RESULTADO -> 720

// 22. Encontrar todos los perros ordenados por peso de forma descendente.
db.animales.aggregate(
  {
    $match: {
      tipo: 'Perro'
    }
  },
  {
    $sort: {
      peso: -1
    }
  },
  {
    $project: {
      _id: 0,
      nombre: 1,
      peso: 1
    }
  }
)

// 23. Encontrar el promedio del precio de consultas por tipo de animal, 
// mostrando solo dos decimales.
db.animales.find();
db.animales.aggregate(
  {
    $group: {
      _id: '$tipo',
      promedio: { $avg: '$precio' }
    }
  },
  {
    $project: {
      _id: 0,
      promedio: { $round: ['$promedio', 2] }
    }
  }
)
