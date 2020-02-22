import { RECIPES } from "./_recipes.js";
import { tally } from "../maths.js";

const contents = JSON.stringify(
  RECIPES.map(recipe => {
    return {
      title: recipe.title,
      description: recipe.description
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
