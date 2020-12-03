export class InventoryRedemptionCode {
  itemId: number;
  date: Date;
  limit: number;

  private static delimiter: string = "~";

  constructor(itemId: number,date: Date,limit: number) {
    this.itemId = itemId;
    this.date = date;
    this.limit = limit;
  }

  public encode(): string {
    return btoa([this.itemId, this.date.getTime(), this.limit].map((n)=>n.toString(36)).join(InventoryRedemptionCode.delimiter));
  }

  public static decode(code: string): InventoryRedemptionCode {
    let values: number[] = atob(code).split(InventoryRedemptionCode.delimiter).map((n):number=>parseInt(n,36));
    return new InventoryRedemptionCode(values[0],new Date(values[1]),values[2]);
  }
}
