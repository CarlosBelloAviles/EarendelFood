import  DesayunoAmericano from '../img/FoodDesayuno/DesayunoAmericano.jpeg'
import DesayunoIngles from '../img/FoodDesayuno/DesayunoIngles.jpeg'
import Omelette from '../img/FoodDesayuno/Omelette.jpeg'


export const comidas = [
    {
      tipo: "Desayuno",
      opciones: [
        {id: "DES01", 
        nombre: "Desayuno Clásico Americano", 
        desc:" Huevos revueltos o fritos, tocino crujiente, salchichas, papas hash brown y tostadas. Se sirve con café o jugo de naranja fresco." ,
        img: DesayunoAmericano,
        price: "5.500"
      },
        {id: "DES02",
        nombre: "Desayuno Ingles Completo", 
        desc: " Huevos fritos, salchichas, tocino, champiñones salteados, tomates asados, frijoles al estilo inglés, y una rebanada de pan tostado. Se sirve con té o café.",
        img: DesayunoIngles,
        price : "4200" 
      },
        {id: "DES03", 
        nombre: "Omelette Mediterráneo", 
        desc: "Omelette relleno de espinacas frescas, queso feta, tomates secos y aceitunas negras, acompañado de pan integral tostado y una ensalada de hojas verdes." ,
        img: Omelette,
        price: "3700"
      }
      ]
    },
    {
      tipo: "Almuerzo",
      opciones: [
        {id:"Al01", 
        nombre: "pollo asado",
        desc: "yuiwhwkkwkjwkjwjsxbjxjwj",
        img:{DesayunoAmericano} 
      },
        {id:"Al02", 
        nombre: "arroz", 
        desc: "tfehjuyehejkidi" ,
        img:{DesayunoAmericano} 
      },
        {id:"Al03", 
        nombre: "ensalada", 
        desc: "dhfjdkookd" ,
        img:{DesayunoAmericano} 
      }
      ]
    },
    {
      tipo: "Cena",
      opciones: [
        {id:"CE01", 
        nombre: "sopa de verduras", 
        desc: "aaahsjsksks<<<zzzz", 
        img:{DesayunoAmericano} 
      },
        {id:"CE02", 
        nombre: "pescado a la plancha",
        desc: "<zzzzzaaaajsjs" ,
        img:{DesayunoAmericano} 
      },
        {id:"CE03", 
        nombre: "verduras al vapor", 
        desc: "fffethsjs" ,
        img:{DesayunoAmericano}  
      }
      ]
    }
  ];
  