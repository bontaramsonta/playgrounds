import { lensProp, view } from 'ramda'

export const objectLens = (object: object, prop: string) => {
  return view(lensProp<any>(prop),object)
}