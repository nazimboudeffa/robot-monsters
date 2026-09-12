import airImg from '../../assets/2d/Meshy_AI_robot-air-concept.png'
import fireImg from '../../assets/2d/Meshy_AI_robot-fire-extract.png'
import plantImg from '../../assets/2d/Meshy_AI_robot-plant-extract.png'
import waterImg from '../../assets/2d/Meshy_AI_robot-water-extract.png'

export const TYPE_COLORS = {
  air: '#7cc7ff',
  fire: '#ff5a3c',
  plant: '#58c95c',
  water: '#4f9dff',
  electric: '#ffd23c'
}

export const robots = [
  {
    id: 1,
    name: 'Aerobot',
    types: ['air'],
    image: airImg,
    description:
      "Ce petit droid volant aspire l'air pour se propulser dans le ciel. Ses rotors silencieux font de lui un éclaireur parfait."
  },
  {
    id: 2,
    name: 'Pyrobot',
    types: ['fire'],
    image: fireImg,
    description:
      "Son cœur de fusion chauffe à blanc. Quand Pyrobot s'énerve, des étincelles jaillissent de ses articulations."
  },
  {
    id: 3,
    name: 'Robotruffe',
    types: ['plant'],
    image: plantImg,
    description:
      "Recouvert de lianes recyclées, ce monstre végétal recharge ses batteries grâce à la photosynthèse."
  },
  {
    id: 4,
    name: 'Hydrobot',
    types: ['water'],
    image: waterImg,
    description:
      "Ses circuits sont refroidis par un flux d'eau continu. Hydrobot transforme l'humidité de l'air en carburant."
  }
]