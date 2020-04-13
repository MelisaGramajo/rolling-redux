//importamos el action type para agregar un articulo -  El action es una constante
import { ADD_ARTICLE } from "../constants/action-types";

//exportamos el action addArticle
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}