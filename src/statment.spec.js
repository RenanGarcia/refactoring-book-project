const plays = require("./plays.json");
const invoices = require("./invoices.json");
const { statment, htmlStatment } = require("./statment.js");

describe("Statment", () => {
  it("should render BigCo text statment", () => {
    expect(statment(invoices[0], plays)).toEqual(
      `Statment for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n`
    );
  });

  it("should render BigCo html statment", () => {
    expect(htmlStatment(invoices[0], plays)).toEqual(
      "<h1>Statment for BigCo</h1>\n<table>\n<tr><th>play</th><th>seats</th><th>cost</th></tr>\n<tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n<tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n<tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n</table>\n<p>Amount owed is $1,730.00</p>\n<p>You earned 47 credits</p>\n"
    );
  });
});
