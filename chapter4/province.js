import Producer from "./producer.js";
export const TEST = "test";
export default class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    doc.producers.forEach((d) => this.addProducer(new Producer(this, d)));
  }

  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }

  get name() {
    return this._name;
  }

  get producers() {
    return this._producers;
  }

  get totalProduction() {
    return this._totalProduction;
  }

  set totalProduction(arg) {
    this._totalProduction = arg;
  }

  get demand() {
    return this._demand;
  }

  set demand(arg) {
    this._demand = parseInt(arg);
  }

  get price() {
    return this._price;
  }

  set price(arg) {
    return (this._price = parseInt(arg));
  }

  get shortfall() {
    return this._demand - this._totalProduction;
  }

  // 수요에 요구되는 가격
  get demandValue() {
    return this.satisfiedDemand * this.price;
  }

  // 수요 충족분 (개수)
  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }

  // 비용
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach((p) => {
        const contribution = Math.min(remainingDemand, p.production);
        remainingDemand -= contribution;
        result += contribution * p.cost;
      });

    return result;
  }

  // consturtor 내부에 없는 변수들은 어디서 나왔지?
  // 수익
  get profit() {
    return this.demandValue - this.demandCost;
  }
}
