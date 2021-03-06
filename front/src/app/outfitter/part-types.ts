import {PartType} from "./part-type";

export const PART_TYPES: Map<string,PartType[]> = [
  ["accessories_and_shields","Accessories","Accessories & Shields"],
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
  ["guns","Accessories"],
  ["hair","Face"],
  ["hat","Clothing"],
  ["head","Body"],
  ["legs","Body"],
  ["mask","Tights"],
  ["melee_weapons","Accessories","Melee Weapons"],
  ["mouth","Face"],
  ["nose","Face"],
  ["pants","Clothing"],
  ["ranged_weapons","Accessories","Ranged Weapons"],
  ["shirt","Tights"],
  ["sholders","Clothing","Shoulders"],
  ["stockings","Tights"],
  ["swords","Accessories"],
  ["symbol_A","Accessories","Symbol A"],
  ["symbol_B","Accessories","Symbol B"],
  ["tights","Tights","Leggings"],
  ["torso","Body"],
  ["wings_and_tails","Back", "Wings & Tails"]
].reduce((out,args) => {
  let temp = new PartType(args);
  if (out.has(temp.group)) {
    out.get(temp.group).push(temp);
  } else {
    out.set(temp.group,[temp]);
  }
  return out;
},new Map<string,PartType[]>());
