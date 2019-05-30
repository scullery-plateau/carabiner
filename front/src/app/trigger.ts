export class Trigger {
  private elem: any = document.createElement("span");
  private eventName: string;
  private listeners: Function[] = [];

  constructor(eventName: string) {
    this.eventName = eventName;
  }

  addListener(fn: Function): number {
    let len = this.listeners.length;
    this.listeners.push(fn);
    this.elem.addEventListener(this.eventName, fn);
    return len;
  }

  fire() {
    this.elem.dispatchEvent(new Event(this.eventName));
  }
}
