// import { randomId } from "./Utility";
import uuid from 'uuid'



export const initialState = [
  {
    id: uuid(),
    name: "Zach",
    initiative: 0,
    hitpoints: 0,
  },
  {
    id: uuid(),
    name: "Charles",
    initiative: 0,
    hitpoints: 0,

  }, {
    id: uuid(),
    name: "Gabe",
    initiative: 0,
    hitpoints: 0,

  }, {
    id: uuid(),
    name: "",
    initiative: 0,
    hitpoints: 0,

  }];