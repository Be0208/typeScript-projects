import {v4 as uuid} from 'uuid'
import { CategoryType, ProductType } from './types'
import transformUpperText from './utils/transformUperText';
import { verifyDataEnable } from './utils';

const category: CategoryType = {
  id: uuid(),
  name: "Tecnologia",
  enabled: true,
}

const product1: ProductType = {
  id: uuid(),
  name: 'Monitor ultraWide',
  enabled: true,
  kind: 'TECH',
  description: 'monitor 29", tela ips, 144hz'
}
const product2: ProductType = {
  id: uuid(),
  name: 'Notebok',
  enabled: false,
  kind: 'TECH',
  description: 'monitor 29", tela ips, 144hz'
}
const product3: ProductType = {
  id: uuid(),
  name: 'Teclado',
  enabled: true,
  kind: 'TECH',
  description: 'monitor 29", tela ips, 144hz'
}

const listProducts : ProductType[] = []; //isto é uma lista de produtos  
listProducts.push(product1);
listProducts.push(product2);
listProducts.push(product3);

const listAtivade = verifyDataEnable(listProducts)

console.log(listAtivade);




// console.log(product1);

// const test = transformUpperText(product1.name)
// console.log(test);