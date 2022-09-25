export type Color = {
  id: number;
  name: string;
}

export type Category = {
  id: number;
  name: string;
  color: Color | number;
}

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  category: Category | number;
}

export type Context = {
  colors: Color[];
  categories: Category[];
  todos: Todo[];
  highlightedIndex?: number;
}

export type FetchedData = Context;