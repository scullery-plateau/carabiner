import {PartType} from "./part-type";

export const PART_TYPES: Map<string,PartType[]> = [
  ["arm","Body"],
  ["back","Back"],
  ["beard","Face"],
  ["belt","Clothing"],
  ["boots","Clothing"],
  ["chest","Clothing"],
  ["collar","Clothing"],
  ["ears","Face"],
  ["eyebrows","Face"],
  ["eyes","Face"],
  ["gauntlets","Clothing"],
  ["gloves","Tights"],
  ["hair","Face"],
  ["hat","Clothing"],
  ["head","Body"],
  ["legs","Body"],
  ["mask","Tights"],
  ["mouth","Face"],
  ["nose","Face"],
  ["pants","Clothing"],
  ["shirt","Tights"],
  ["sholders","Clothing","Shoulders"],
  ["stockings","Tights"],
  ["symbol_A","Accessories","Symbol A"],
  ["symbol_B","Accessories","Symbol B"],
  ["tights","Tights","Leggings"],
  ["torso","Body"],
  ["wings_and_tail","Back", "Wings And Tails"]
].reduce((out,args) => {
  let temp = new PartType(args);
  if (out.has(temp.group)) {
    out.get(temp.group).push(temp);
  } else {
    out.set(temp.group,[temp]);
  }
  return out;
},new Map<string,PartType[]>());
