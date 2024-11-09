import DesayunoAmericano from "../img/FoodDesayuno/DesayunoAmericano.jpeg";
import DesayunoIngles from "../img/FoodDesayuno/DesayunoIngles.jpeg";
import Omelette from "../img/FoodDesayuno/Omelette.jpeg";
import smothiee from "../img/FoodDesayuno/smothiee.jpeg";
import PanquequesArandanos from "../img/FoodDesayuno/PanquequesArandanos.jpeg";
import filetePimienta from "../img/FoodAlmuerzo/filetePimienta.jpeg";
import PolloalLimon from "../img/FoodAlmuerzo/PolloalLimonconPure.jpeg";
import RissotoChampiñones from "../img/FoodAlmuerzo/RissotoChampiñones.jpeg";
import SalmonalaPlancha from "../img/FoodAlmuerzo/salmonalaPlancha.jpeg";
import TallarinesalPesto from "../img/FoodAlmuerzo/TallarinesalPesto.jpeg";



export const comidas = [
  {
    tipo: "Desayuno",
    opciones: [
      {
        id: "DES01",
        nombre: "Desayuno Clásico Americano",
        desc: " Huevos revueltos o fritos, tocino crujiente, salchichas, papas hash brown y tostadas. Se sirve con café o jugo de naranja fresco.",
        img: DesayunoAmericano,
        price: "5.500",
      },
      {
        id: "DES02",
        nombre: "Desayuno Ingles Completo",
        desc: " Huevos fritos, salchichas, tocino, champiñones salteados, tomates asados, frijoles al estilo inglés, y una rebanada de pan tostado. Se sirve con té o café.",
        img: DesayunoIngles,
        price: "4200",
      },
      {
        id: "DES03",
        nombre: "Omelette Mediterráneo",
        desc: "Omelette relleno de espinacas frescas, queso feta, tomates secos y aceitunas negras, acompañado de pan integral tostado y una ensalada de hojas verdes.",
        img: Omelette,
        price: "3700",
      },

      
      {
        id: "DES04",
        nombre: "Panqueques de Arandanos",
        desc: "Esponjosos panqueques hechos con arándanos frescos, servidos con un toque de mantequilla y jarabe de maple. Opción de acompañar con frutas frescas o yogurt.",
        img: PanquequesArandanos,
        price: "5700",
      },
      {
        id: "DES05",
        nombre: "Smothiee Bowl Tropical",
        desc: " Smoothie espeso hecho con mango, piña y leche de coco, cubierto con coco rallado, rodajas de kiwi, fresas y semillas de lino.",
        img: smothiee,
        price: "3700",
      }
    ],
  },
  {
    tipo: "Almuerzo",
    opciones: [
      {
        id: "Al01",
        nombre: "Filete a la Pimienta",
        desc: "Un jugoso corte de carne de res a la parrilla, sellado y bañado en una suave salsa de pimienta negra, acompañada de papas gratinadas y vegetales salteados. Perfecto para los amantes de los sabores intensos y bien equilibrados.",
        img:  filetePimienta ,
      },
      {
        id: "Al02",
        nombre: "Pollo al Limón con Puré",
        desc: "Pechuga de pollo marinada en jugo de limón y hierbas, asada y acompañada de un suave puré de papas casero y espinacas salteadas en ajo. Una opción ligera pero con sabor vibrante, ideal para un almuerzo equilibrado.",
        img:  PolloalLimon ,
      },
      {
        id: "Al03",
        nombre: "Rissoto de Champiñones y Trufas",
        desc: "Cremoso risotto de arroz arborio, infusionado con hongos frescos y un toque de aceite de trufa. Este platillo se adorna con parmesano rallado y perejil fresco, ofreciendo una experiencia única y sofisticada.",
        img:  RissotoChampiñones ,
      },
      {
        id: "Al04",
        nombre: "Salmón a la Plancha",
        desc: "Filete de salmón fresco cocinado a la perfección, servido sobre una cama de quinoa sazonada con hierbas y acompañado de espárragos al vapor. Un plato saludable y lleno de sabor que combina texturas suaves y crujientes.",
        img:  SalmonalaPlancha ,
      },
      {
        id: "Al05",
        nombre: "Tallarines al Pesto con Camarones",
        desc: "Pasta fresca bañada en una salsa de pesto casera, hecha con albahaca, ajo y nueces, acompañada de camarones salteados en mantequilla y un toque de limón. Este plato ofrece un delicioso equilibrio entre sabores herbales y marinos.",
        img:  TallarinesalPesto,
      },
    ],
  },
  {
    tipo: "Cena",
    opciones: [
      {
        id: "CE01",
        nombre: "sopa de verduras",
        desc: "aaahsjsksks<<<zzzz",
        img: { DesayunoAmericano },
      },
      {
        id: "CE02",
        nombre: "pescado a la plancha",
        desc: "<zzzzzaaaajsjs",
        img: { DesayunoAmericano },
      },
      {
        id: "CE03",
        nombre: "verduras al vapor",
        desc: "fffethsjs",
        img: { DesayunoAmericano },
      },
    ],
  },
];
