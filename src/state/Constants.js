// import { randomId } from "./Utility";
import uuid from 'uuid'



export const initialState = [
  {
    id: uuid(),
    name: "Zach",
    initiative: undefined,
    hitpoints: undefined,
    ac: undefined,
  },
  {
    id: uuid(),
    name: "Charles",
    initiative: undefined,
    hitpoints: undefined,
    ac: undefined,

  }, {
    id: uuid(),
    name: "Gabe",
    initiative: undefined,
    hitpoints: undefined,
    ac: undefined,

  }, {
    id: uuid(),
    name: "",
    initiative: undefined,
    hitpoints: undefined,
    ac: undefined,

  }];

export const rolls = [
  {
    rolls: undefined,
  },
]
