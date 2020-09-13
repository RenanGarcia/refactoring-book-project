const createStatmentData = require("./createStatmentData");
const { statment, htmlStatment } = require("./statment");

const plays = require("./plays.json");
const invoices = require("./invoices.json");

const expectedStatmentData = {
  customer: "BigCo",
  performances: [
    {
      amount: 65000,
      audience: 55,
      play: {
        name: "Hamlet",
        type: "tragedy",
      },
      playID: "hamlet",
      volumeCredits: 25,
    },
    {
      amount: 58000,
      audience: 35,
      play: {
        name: "As You Like It",
        type: "comedy",
      },
      playID: "as-like",
      volumeCredits: 12,
    },
    {
      amount: 50000,
      audience: 40,
      play: {
        name: "Othello",
        type: "tragedy",
      },
      playID: "othello",
      volumeCredits: 10,
    },
  ],
  totalAmount: 173000,
  totalVolumeCredits: 47,
};

const expectedTextStatment = `\
Statment for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;

const expectedHtmlStatment = `\
<h1>Statment for BigCo</h1>
<table>
  <tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is $1,730.00</p>
<p>You earned 47 credits</p>
`;

describe("Statment", () => {
  it("should create statment data", () => {
    expect(createStatmentData(invoices[0], plays)).toEqual(
      expectedStatmentData
    );
  });

  it("should render BigCo text statment", () => {
    expect(statment(invoices[0], plays)).toEqual(expectedTextStatment);
  });

  it("should render BigCo html statment", () => {
    expect(htmlStatment(invoices[0], plays)).toEqual(expectedHtmlStatment);
  });
});
