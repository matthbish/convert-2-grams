import {Ingredient, Measurement} from "../models/models";

export const MEASUREMENTS: Measurement[] = [
  {name: 'Cups', inOneCup: 1 },
  {name: 'Tablespoons', inOneCup: 16 },
  {name: 'Teaspoons', inOneCup: 48 },
  {name: 'Fluid ounces', inOneCup: 8 },
];
export const INGREDIENTS: Ingredient[] = [ // TODO get more from https://www.kingarthurbaking.com/learn/ingredient-weight-chart
  {name: 'All purpose flour', gramsInOneCup: 120 },
  {name: 'Whole wheat flour', gramsInOneCup: 113 },
  {name: 'Butter', gramsInOneCup: 226 },
  {name: 'Granulated white sugar', gramsInOneCup: 198 },
  {name: 'Brown Sugar (dark or light)', gramsInOneCup: 213 },
  {name: 'Honey', gramsInOneCup: 336 },
  {name: 'Molasses', gramsInOneCup: 340 },
  {name: 'Salt', gramsInOneCup: 272 },
  {name: 'Vanilla extract', gramsInOneCup: 224 },
  {name: 'Chocolate chips', gramsInOneCup: 170 },
  {name: 'Milk', gramsInOneCup: 227 },
  {name: 'Corn Starch', gramsInOneCup: 112 },
];
