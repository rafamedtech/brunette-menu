export interface Item {
  title?: string;
  description?: string;
  price?: string;
}

export interface Section extends Attribute {
  title: string;
  description?: string;
  cover: string;
  items: Item;
}

export interface Attribute {
  title: string;
  description?: string;
  sections?: Section;
  items?: Item;
}

export interface Category {
  id: number;
  title: string;
  cover: string;
  attributes: Attribute;
}
