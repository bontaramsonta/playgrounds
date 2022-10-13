import { objectLens } from './utils/objectLens.js'
export const main = async () => {
  console.log('[main]')
  let obj = {x:2,y:4}
  console.log(objectLens(obj,'x'))
}