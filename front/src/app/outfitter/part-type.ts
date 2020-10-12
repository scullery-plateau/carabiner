export class PartType {
  part:string;
  group:string;
  label:string;

  constructor([part,group,label]:string[]) {
    this.part = part;
    this.group = group;
    this.label = label || (part.charAt(0).toUpperCase() + part.substr(1).toLowerCase());
  }
}
