import {v4 as uuid} from 'uuid'
import { CategoryType, ProductType } from './types'
import transformUpperText from './utils/transformUperText';

const category: CategoryType = {
  id: uuid(),
  name: "Tecnologia",
  enabled: true,
}

const product: ProductType = {
  id: uuid(),
  name: 'Monitor ultraWide',
  enabled: true,
  kind: 'TECH',
  description: 'monitor 29", tela ips, 144hz'
}

console.log(product);

const test = transformUpperText(product.name)
console.log(test);
