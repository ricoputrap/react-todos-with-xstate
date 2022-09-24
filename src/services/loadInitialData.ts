import { AnyEventObject } from "xstate";
import { Category, Color, Context, FetchedData, Todo } from "../types";

const loadInitialData = async (
  context: Context,
  event: AnyEventObject
): Promise<Context> => {
  const response: Response = await fetch("data.json");
  const data: FetchedData = await response.json();

  const colorLookup: any = data.colors.reduce((lookup, color) => {
    lookup[color.id] = color;
    return lookup;
  }, {});

  const categoryLookup: any = data.categories.reduce((lookup, category) => {
    lookup[category.id] = category;
    return lookup;
  }, {});

  const categories: Category[] = data.categories.map(category => {
    const color: Color = colorLookup[category.color as number];

    return {
      ...category,
      color
    }
  });

  const todos: Todo[] = data.todos.map(todo => {
    const category: Category = categoryLookup[todo.category as number];

    return {
      ...todo,
      category
    }
  })

  return {
    colors: data.colors,
    categories,
    todos
  }
}

export default loadInitialData;