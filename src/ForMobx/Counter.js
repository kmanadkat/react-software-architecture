import { action, makeObservable, observable } from "mobx";

export class Counter {
  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  }

  count = 0;

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    this.count -= 1;
  };
}
