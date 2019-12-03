import { randomId } from "./Utility";


export const initialState = [{
  id: randomId(),
  name: "player 1",
  initiative: 20,
  hitpoints: 50,
}, {
  id: randomId(),
  name: "player 2",
  initiative: 19,
  hitpoints: 50,

}, {
  id: randomId(),
  name: "player 3",
  initiative: 18,
  hitpoints: 50,

}, {
  id: randomId(),
  name: "player 4",
  initiative: 17,
  hitpoints: 50,

}];
