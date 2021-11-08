const { Client } = require("pg")

module.exports = {
    actividades: [ {
        countries: ["SHN", "LKA", "TUN"],
        dificultad: 4,
        duracion: "09-09-2024",
        nombre: "Escalada",
        temporada: "Invierno",
        imagen_identificatoria:"https://www.lacumbreonline.cl/media/magefan_blog/GIGIO1.jpg"
      },  {
        countries: ["IRQ", "PYF", "CYP"],
        dificultad: 5,
        duracion: "17-03-2024",
        nombre: "Teatro",
        temporada: "Invierno",
        imagen_identificatoria:"https://encolombia.com/wp-content/uploads/2021/07/La-Musica-y-el-Teatro.jpg"
      },  {
        countries: ["LBY", "MWI", "CRI"],
        dificultad: 1,
        duracion: "09-11-2021",
        nombre: "Cine",
        temporada: "Invierno",
        imagen_identificatoria:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sala_de_cine.jpg/1200px-Sala_de_cine.jpg"
      },  {
        countries: ["RWA", "BOL", "KHM"],
        dificultad: 4,
        duracion: "31-03-2022",
        nombre: "Viñedo",
        temporada: "Invierno",
        imagen_identificatoria:"https://como-funciona.com/wp-content/uploads/2020/08/qu%C3%A9-es-un-vi%C3%B1edo.jpg"
      },  {
        countries: ["BGR", "FIN", "NCL"],
        dificultad: 1,
        duracion: "24-10-2023",
        nombre: "Juegos de agua",
        temporada: "Verano",
        imagen_identificatoria:"https://sousas.com/wp-content/uploads/2017/08/imagen-1.jpg"
      },  {
        countries: ["JPN", "OMN", "BLM"],
        dificultad: 4,
        duracion: "19-09-2023",
        nombre: "Senderismo",
        temporada: "Invierno",
        imagen_identificatoria:"https://estaticos.muyinteresante.es/uploads/images/gallery/5f2a75795cafe8053b39bcfc/senderismo-redes.jpg"
      },  {
        countries: ["MRT", "PRK", "UGA"],
        dificultad: 2,
        duracion: "19-09-2023",
        nombre: "Paddle surf",
        temporada: "Verano",
        imagen_identificatoria:"https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/05/26/15904879474918.jpg"
      },  {
        countries: ["ARM", "CHE", "VGB"],
        dificultad: 1,
        duracion: "24-10-2023",
        nombre: "Paseo en barco",
        temporada: "Verano",
        imagen_identificatoria:"https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6b/8b/af.jpg"
      },  {
        countries: ["CCK", "GRC", "MLI"],
        dificultad: 3,
        duracion: "31-03-2022",
        nombre: "Ruta en bicicleta",
        temporada: "Verano",
        imagen_identificatoria:"https://img.asmedia.epimg.net/resizer/8BAoO2gl9zVTY8omI7h4sUGauK4=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/JHQ7GNAKLVOLHPKFNHZKTMEMYA.jpg"
      },  {
        countries: ["MUS", "NAM", "KGZ"],
        dificultad: 1,
        duracion: "31-03-2022",
        nombre: "Montar a caballo",
        temporada: "Invierno",
        imagen_identificatoria:"https://cdn.atrapalo.com/common/photo/event/5/3/6/83/307572/vertic_880_0.jpg"
      },  {
        countries: ["UKR", "LVA", "DJI"],
        dificultad: 2,
        duracion: "21-11-2022",
        nombre: "Prueba un segway",
        temporada: "Verano",
        imagen_identificatoria:"https://s03.s3c.es/imag/_v0/770x420/8/6/b/600x400_segway-parque-grupo-getty.jpg"
      },  {
        countries: ["CHL", "MNG", "ZMB"],
        dificultad: 1,
        duracion: "25-05-2023",
        nombre: "Volar en globo",
        temporada: "Verano",
        imagen_identificatoria:"https://www.siempreenlasnubes.com/wp-content/uploads/2016/11/montar-en-globo-segovia-e1483979516254.jpg"
      },  {
        countries: ["IRL", "MCO", "TGO"],
        dificultad: 3,
        duracion: "31-12-2022",
        nombre: "Turismo de Playa",
        temporada: "Verano",
        imagen_identificatoria:"https://www.ngenespanol.com/wp-content/uploads/2018/08/Las-5-mejores-playas-desconocidas-en-M%C3%A9xico.jpg"
      },  {
        countries: ["BEN", "UMI", "URY"],
        dificultad: 2,
        duracion: "12-11-2024",
        nombre: "Paseo en Lancha",
        temporada: "Invierno",
        imagen_identificatoria:"https://www.vamosamiami.net/files/wp-content/uploads/lancha-4.jpg"
      },  {
        countries: ["MDG", "BLZ", "TWN"],
        dificultad: 4,
        duracion: "30-08-2022",
        nombre: "Acampar",
        temporada: "Verano",
        imagen_identificatoria:"https://www.bucketlistec.com/wp-content/uploads/2017/10/tips-acampar-frio-portada.jpg"
      },  {
        countries: ["OMN", "USA", "PRT"],
        dificultad: 3,
        duracion: "21-11-2022",
        nombre: "Paseo en lago",
        temporada: "Otoño",
        imagen_identificatoria:"https://t2.ev.ltmcdn.com/es/posts/5/5/0/diferencia_entre_lago_y_laguna_1055_orig.jpg"
      },  {
        countries: ["GUF", "SLE", "SGS"],
        dificultad: 1,
        duracion: "24-10-2023",
        nombre: "Ruta de la cerveza",
        temporada: "Verano",
        imagen_identificatoria:"https://images.ecestaticos.com/TBKAVq78GQnHc8KEu1ov26WJWa4=/6x62:2713x1587/1600x900/filters:fill(white):format(JPG)/f.elconfidencial.com/original/cbe/7a6/03a/cbe7a603a178438d236336676c457cc2.jpg"
      },  {
        countries: ["TWN", "ALA", "NGA"],
        dificultad: 2,
        duracion: "09-11-2021",
        nombre: "Crucero",
        temporada: "Invierno",
        imagen_identificatoria:"https://media.revistagq.com/photos/5dd52bc3fed5480008f705be/4:3/w_1063,h_797,c_limit/Crucero-lujo-millo%CC%81n-de-euros.jpg"
      },  {
        countries: ["BIH", "YEM", "JOR"],
        dificultad: 2,
        duracion: "04-11-2021",
        nombre: "Recorrido por las montañas",
        temporada: "Verano",
        imagen_identificatoria:"https://travesiapirenaica.com/wp-content/uploads/2018/05/jan-niclas-aberle-309470-unsplash_760x500.jpg"
      },  {
        countries: ["CUW", "SUR", "PAK"],
        dificultad: 5,
        duracion: "13-08-2022",
        nombre: "Paseo en Helicoptero",
        temporada: "Invierno",
        imagen_identificatoria:"https://fotos.perfil.com/2021/06/24/trim/1280/720/2406helicoptero-1195135.jpg"
      },  {
        countries: ["GLP", "SXM", "MLT"],
        dificultad: 4,
        duracion: "22-02-2022",
        nombre: "Recorrido por la selva",
        temporada: "Otoño",
        imagen_identificatoria:"https://denomades.s3.us-west-2.amazonaws.com/blog/wp-content/uploads/2018/12/06181815/IMG_0273.jpg"
      },  {
        countries: ["GMB", "SMR", "GIB"],
        dificultad: 2,
        duracion: "17-05-2024",
        nombre: "Alojamiento en la selva",
        temporada: "Verano",
        imagen_identificatoria:"https://mexicodesign.com/wp-content/uploads/2018/07/Como-hacer-un-hotel-en-medio-de-la-selva-1100x778.jpg"
      },  {
        countries: ["NGA", "SVN", "CPV"],
        dificultad: 5,
        duracion: "24-10-2023",
        nombre: "Excursion al desierto",
        temporada: "Invierno",
        imagen_identificatoria:"https://www.ee-today.com/wp-content/uploads/2019/09/Excursion-desierto-marrakech-3-d%C3%ADas.jpg"
      },  {
        countries: ["JPN", "HTI", "LTU"],
        dificultad: 3,
        duracion: "24-10-2023",
        nombre: "Turismo Aventura",
        temporada: "Invierno",
        imagen_identificatoria:"http://imperialtour.com.co/wp-content/uploads/2017/05/art-3.jpg"
      },  {
        countries: ["BVT", "VNM", "ALA"],
        dificultad: 2,
        duracion: "22-02-2022",
        nombre: "Prueba autos Alta Gama",
        temporada: "Otoño",
        imagen_identificatoria:"https://soymotor.com/sites/default/files/imagenes/noticia/tesla_roadster_2022.jpg"
      },  {
        countries: ["TKM", "MDA", "MAF"],
        dificultad: 3,
        duracion: "28-08-2022",
        nombre: "Recorrido en islas paradisíaca",
        temporada: "Otoño",
        imagen_identificatoria:"https://www.meteorologiaenred.com/wp-content/uploads/2021/06/que-es-una-isla.jpg"
      },  {
        countries: ["DNK", "AFG", "LIE"],
        dificultad: 1,
        duracion: "09-09-2024",
        nombre: "Carrera en auto",
        temporada: "Verano",
        imagen_identificatoria:"https://www.autonocion.com/wp-content/uploads/2020/05/NASCAR.jpg"
      },  {
        countries: ["SVK", "GEO", "CUW"],
        dificultad: 2,
        duracion: "22-02-2022",
        nombre: "Paseo de comidas exoticas",
        temporada: "Otoño",
        imagen_identificatoria:"https://publiko.mx/wp-content/uploads/2019/03/comida-exotica.jpg"
      },  {
        countries: ["MDV", "IMN", "LTU"],
        dificultad: 2,
        duracion: "24-10-2023",
        nombre: "Ir de pesca",
        temporada: "Invierno",
        imagen_identificatoria:"https://verdeyazul.diarioinformacion.com/wp-content/uploads/2021/03/fikret-kabay-en-Pixabay-fishing-4933219_1920.jpg"
      },  {
        countries: ["BGR", "IRN", "HUN"],
        dificultad: 2,
        duracion: "28-08-2022",
        nombre: "Bailar",
        temporada: "Otoño",
        imagen_identificatoria:"https://ecotripschile.com/wp-content/uploads/2019/10/Fiesta-La-Tirana-Chile-Ecotrips.jpg"
      },  {
        countries: ["IMN", "SVK", "GGY"],
        dificultad: 2,
        duracion: "09-09-2024",
        nombre: "Tragos éxoticos",
        temporada: "Verano",
        imagen_identificatoria:"https://static.vix.com/es/sites/default/files/styles/4x3/public/imj/elgrancatador/t/tragos-exoticos-sin-alcohol.jpg"
      },  {
        countries: ["GEO", "MEX", "GGY"],
        dificultad: 4,
        duracion: "09-09-2024",
        nombre: "Monumentos historicos",
        temporada: "Verano",
        imagen_identificatoria:"https://elonce-media2.elonce.com.ar/fotos-nuevo/2016/07/05/o_1467704041.jpg"
      },  {
        countries: ["VGB", "TZA", "KHM"],
        dificultad: 2,
        duracion: "09-07-2022",
        nombre: "Parque de diversiones",
        temporada: "Otoño",
        imagen_identificatoria:"https://www.imer.mx/tropicalisima/wp-content/uploads/sites/19/Monta%C3%B1a-Rusa.jpg"
      },  {
        countries: ["CUW", "BGR", "BFA"],
        dificultad: 4,
        duracion: "13-07-2022",
        nombre: "Sendero de río",
        temporada: "Verano",
        imagen_identificatoria:"https://doshermanas.tuciudadhoy.com/wp-content/uploads/2018/01/sendero-rio-majaceite-3.jpg"
      },  {
        countries: ["SEN", "VNM", "HND"],
        dificultad: 2,
        duracion: "09-09-2024",
        nombre: "Spa & Sauna",
        temporada: "Otoño",
        imagen_identificatoria:"https://images.clarin.com/2019/11/28/en-palermo-hollywood-el-hotel___0IupWRaz_720x0__1.jpg"
      },  {
        countries: ["ALA", "AIA", "WSM"],
        dificultad: 1,
        duracion: "31-03-2022",
        nombre: "Tratamientos de Belleza Organicos",
        temporada: "Invierno",
        imagen_identificatoria:"https://cdn.forbes.com.mx/2019/06/solaya_spa_eden_roc_cap_cana_o2_relax-e1561158339314.jpg"
      },  {
        countries: ["NLD", "TLS", "KGZ"],
        dificultad: 2,
        duracion: "30-08-2022",
        nombre: "Rapel",
        temporada: "Otoño",
        imagen_identificatoria:"https://lh3.googleusercontent.com/proxy/2sq8qM7vvPSJ5Ug-cZpqSaerFHM4o2z__aqYc5NUvnH3gtqVQyRFikHvTTqJilgimYHXHaAwkEVZGCw5xT_XfZoOyjorIzAlRsoKZH3NsXbNCCz-5RfCWA"
      },  {
        countries: ["ISR", "BEL", "SMR"],
        dificultad: 3,
        duracion: "29-10-2024",
        nombre: "Carrera de Montaña",
        temporada: "Verano",
        imagen_identificatoria:"https://www.consumer.es/wp-content/uploads/2019/07/img_guadarrama-carreras.hd_-1280x720.jpg"
      }]
}

/* "Escalada"
"Teatro"
"Cine"
"Viñedo"
"Juegos de agua"
"Senderismo"
"Paddle surf"
"Paseo en barco"
"Ruta en bicicleta"
"Montar a caballo"
"Prueba un segway"
"Volar en globo"

"Turismo de Playa"
"Paseo en Lancha"
"Acampar"
"Paseo en lago"
"Ruta de la cerveza"
"Crucero"
"Recorrido por las montañas"
"Paseo en Helicoptero"
"Recorrido por la selva"
"Alojamiento en la selva"
"Excursion al desierto"
"Andar en camello"
"Paseo en autobus"
"Recorrido en islas paradisíaca"
"Carrera en auto"
"Paseo de comidas exoticas"
"Ir de pesca"
"Bailar"
"Tragos éxoticos"
"Monumentos historicos"
"Parque de diversiones"
"Sendero de río"
"Spa & Sauna"
"Tratamientos de Belleza Organicos"
"Rapel"
"Carrera de Montaña" */