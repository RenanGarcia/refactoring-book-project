const plays = require("./plays.json");
const invoices = require("./invoices.json");
const statment = require("./statment.js");

describe("Statment", () => {
  it("should render BigCo statment", () => {
    expect(statment(invoices[0], plays)).toEqual(
      `Statment for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`
    );
  });
});
