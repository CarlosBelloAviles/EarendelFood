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
import CarnesPremium from "../img/FoodParrilladas/carnespremiun.jpeg";
import MariscosyPescados from "../img/FoodParrilladas/mariscosypescados.jpeg";
import MixtaFamiliar from "../img/FoodParrilladas/mixtafamiliar.jpeg";
import VegetalesyQuesos from "../img/FoodParrilladas/vegetalesyquesos.jpeg";
import ParrilladaArgentina from "../img/FoodParrilladas/parrilladaArgentina.jpeg";
import Coulant from "../img/FoodPostres/Coulant.jpg";
import Tiramisu from "../img/FoodPostres/Tiramisu.jpg";
import Cheeesecake from "../img/FoodPostres/Cheesecake.jpg";
import CremeBrulee from "../img/FoodPostres/CremeBrulee.jpg";
import TartaManzana from "../img/FoodPostres/TartaManzana.jpg";
import WhiskyEscoces from "../img/FoodLicores/WhiskyEscoces.jpg";
import TequilaAñejo from "../img/FoodLicores/TequilaAñejo.jpg";
import Cognac from "../img/FoodLicores/Cognac.jpg";
import Amaretto from "../img/FoodLicores/Amaretto.jpg";
import LicorCafe from "../img/FoodLicores/LicorCafe.jpg";




export const comidas = [
  {
    tipo: "Desayuno",
    opciones: [
      {
        id: "DES01",
        nombre: "Desayuno Clásico Americano",
        desc: " Huevos revueltos o fritos, tocino crujiente, salchichas, papas hash brown y tostadas. Se sirve con café o jugo de naranja fresco.",
        img: DesayunoAmericano,
        price: "5500",
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
      },
    ],
  },
  {
    tipo: "Almuerzo",
    opciones: [
      {
        id: "Al01",
        nombre: "Filete a la Pimienta",
        desc: "Un jugoso corte de carne de res a la parrilla, sellado y bañado en una suave salsa de pimienta negra, acompañada de papas gratinadas y vegetales salteados. Perfecto para los amantes de los sabores intensos y bien equilibrados.",
        img: filetePimienta,
        price: "8200"
      },
      {
        id: "Al02",
        nombre: "Pollo al Limón con Puré",
        desc: "Pechuga de pollo marinada en jugo de limón y hierbas, asada y acompañada de un suave puré de papas casero y espinacas salteadas en ajo. Una opción ligera pero con sabor vibrante, ideal para un almuerzo equilibrado.",
        img: PolloalLimon,
        price: "6200"
      },
      {
        id: "Al03",
        nombre: "Rissoto de Champiñones y Trufas",
        desc: "Cremoso risotto de arroz arborio, infusionado con hongos frescos y un toque de aceite de trufa. Este platillo se adorna con parmesano rallado y perejil fresco, ofreciendo una experiencia única y sofisticada.",
        img: RissotoChampiñones,
        price: "9000"
      },
      {
        id: "Al04",
        nombre: "Salmón a la Plancha",
        desc: "Filete de salmón fresco cocinado a la perfección, servido sobre una cama de quinoa sazonada con hierbas y acompañado de espárragos al vapor. Un plato saludable y lleno de sabor que combina texturas suaves y crujientes.",
        img: SalmonalaPlancha,
        price: "7500"
      },
      {
        id: "Al05",
        nombre: "Tallarines al Pesto con Camarones",
        desc: "Pasta fresca bañada en una salsa de pesto casera, hecha con albahaca, ajo y nueces, acompañada de camarones salteados en mantequilla y un toque de limón. Este plato ofrece un delicioso equilibrio entre sabores herbales y marinos.",
        img: TallarinesalPesto,
        price: "4700"
      },
    ],
  },
  {
    tipo: "Parrilladas",
    opciones: [
      {
        id: "PA01",
        nombre: "Parrillada de Carnes Premium",
        desc: "Selección de cortes de carne de alta calidad: ribeye, churrasco, filete mignon y costillas de cerdo, marinados en hierbas frescas y ajo. Se sirve con guarniciones de papas rústicas, chimichurri casero y vegetales asados.",
        img: CarnesPremium,
        price: "25000"
      },
      {
        id: "PA02",
        nombre: "Parrillada de Mariscos y Pescado",
        desc: "Combinación de mariscos como langostinos, pulpo, calamares y filetes de pescado blanco, sazonados con limón, ajo y finas hierbas. Acompañado de una salsa de mantequilla con perejil, ensalada fresca y pan artesanal. ",
        img: MariscosyPescados,
        price: "12500"
      },
      {
        id: "PA03",
        nombre: "Parrillada Mixta Familiar",
        desc: "Ideal para compartir: incluye carne de res, pollo, chorizo, costillas de cerdo y morcilla. Acompañada de mazorcas de maíz asadas, papas al horno, ensalada verde y salsas variadas (chimichurri, salsa criolla y guacamole).",
        img: MixtaFamiliar,
        price: "37400"
      },
      {
        id: "PA04",
        nombre: "Parrillada de Vegetales y Quesos",
        desc: "Perfecta para vegetarianos: una mezcla de vegetales frescos (calabacín, pimientos, espárragos, champiñones y berenjena), asados a la parrilla junto a quesos ahumados y halloumi. Se sirve con pan pita, hummus y salsa de yogur con hierbas.",
        img: VegetalesyQuesos,
        price: "7200"
      },
      {
        id: "PA05",
        nombre: "Parrillada Argentina",
        desc: "Clásica parrillada argentina que incluye cortes tradicionales como bife de chorizo, entraña, tira de asado, chorizo y morcilla. Acompañada de chimichurri, ensalada de papa con huevo y un pan crujiente tipo baguette.",
        img: ParrilladaArgentina,
        price: "9200"
      },
    ],
  },
  {
    tipo: "Postres",
    opciones: [
      {
        id: "PO01",
        nombre: "Coulant de Chocolate con Helado de Vainilla",
        desc: "Un postre clásico de interior líquido y cálido, servido con una bola de helado de vainilla y decorado con frutos rojos frescos y una pizca de azúcar glas.",
        img: Coulant,
        price: "3200"
      },
      {
        id: "PO02",
        nombre: "Tiramisú Tradicional",
        desc: "Capas de bizcochos empapados en café expreso, intercaladas con una crema de mascarpone suave y espolvoreado de cacao en polvo. Perfecto para los amantes de los postres italianos.",
        img: Tiramisu,
        price: "4000"
      },
      {
        id: "PO03",
        nombre: "Cheesecake de Maracuyá",
        desc: "Suave tarta de queso con una capa superior de maracuyá fresca, servida con una base de galleta crocante y decorada con frutas tropicales.",
        img: Cheeesecake,
        price: "7800"
      },
      {
        id: "PO04",
        nombre: "Crème Brûlée Clásica",
        desc: "Cremoso flan de vainilla con una costra de caramelo crujiente en la parte superior, acompañado de una galleta de mantequilla o una ramita de menta.",
        img: CremeBrulee,
        price: "2500"
      },
      {
        id: "PO05",
        nombre: "Tarta Tatin de Manzana con Crema Inglesa",
        desc: "Tarta invertida de manzana caramelizada, servida tibia con un toque de crema inglesa o helado de canela para contrastar texturas y temperaturas.",
        img: TartaManzana,
        price: "6400"
      },
    ],
  },
  {
    tipo: "Licores",
    opciones: [
      {
        id: "LI01",
        nombre: "Whisky Escocés Single Malt",
        desc: "Ideal para conocedores, este whisky se disfruta solo o con un poco de agua. Algunas opciones populares incluyen Glenfiddich, Macallan o Lagavulin.",
        img: WhiskyEscoces,
        price: "8200"
      },
      {
        id: "LI02",
        nombre: "Tequila Añejo",
        desc: "Un tequila envejecido con sabores profundos y suaves. Perfecto para servir solo, en las rocas, o como base para cócteles sofisticados como el Tequila Old Fashioned.",
        img: TequilaAñejo,
        price: "6900"
      },
      {
        id: "LI03",
        nombre: "Cognac VSOP",
        desc: "Un licor elegante, ideal como digestivo después de la cena. Marcas como Hennessy, Remy Martin o Martell son opciones excelentes.",
        img: Cognac,
        price: "7300"
      },
      {
        id: "LI04",
        nombre: "Amaretto",
        desc: "Licor dulce de almendra perfecto para cócteles como el Amaretto Sour o para servir solo como un toque dulce al final de la comida.",
        img: Amaretto,
        price: "9600"
      },
      {
        id: "LI05",
        nombre: "Licor de Café",
        desc: "Versátil para usar en postres o cócteles como el Espresso Martini. Opciones como Kahlúa o Tía María son clásicos que no fallan.",
        img: LicorCafe,
        price: "4600"
      },
    ],
  },
];
