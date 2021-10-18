import { describe, it, beforeEach } from "mocha";
import { assert } from "chai";
import Province from "./province.js";

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      {
        name: "Byzantium",
        cost: 10,
        production: 9,
      },
      {
        name: "Attalia",
        cost: 12,
        production: 10,
      },
      {
        name: "Sinope",
        cost: 10,
        production: 6,
      },
    ],
    demand: 30,
    price: 20,
  };
}

describe("province", () => {
  let asia;

  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it(" ", () => {
    assert.equal(asia.shortfall, 5);
  });

  it("profit", () => {
    asia = new Province(sampleProvinceData());
    assert.equal(asia.profit, 230);
  });
});
