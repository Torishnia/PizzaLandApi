export interface IPizza {
  id: string,
  title: string,
  description: string,
  price: number,
  image: string,
  types: IPizzaType[],
  sizes: IPizzaSize[],
  category: number,
  rating: number,
  otherImgs: IPizzaAdditionalImage[],
}

export interface IPizzaType {
  id: number,
  title: string,
}

export interface IPizzaSize {
  id: number,
  title: string,
  size: number,
  coefficient: number,
}

export interface IPizzaAdditionalImage {
  id: number,
  alt: string,
  img: string,
}