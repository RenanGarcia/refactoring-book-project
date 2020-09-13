const createStatmentData = require("./createStatmentdata");

function statment(invoice, plays) {
  return renderPlainText(createStatmentData(invoice, plays));
}

function renderPlainText(data) {
  let result = `Statment for ${data.customer}\n`;

  for (let perf of data.performances) {
    result += `  ${perf.play.name}: ${usd(perf.amount)}`;
    result += ` (${perf.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;

  return result;
}

function htmlStatment(invoice, plays) {
  return renderHtml(createStatmentData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statment for ${data.customer}</h1>\n`;
  result += `<table>\n`;
  result += `  <tr><th>play</th><th>seats</th><th>cost</th></tr>\n`;

  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>\n`;
  }

  result += `</table>\n`;
  result += `<p>Amount owed is ${usd(data.totalAmount)}</p>\n`;
  result += `<p>You earned ${data.totalVolumeCredits} credits</p>\n`;

  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

module.exports = { statment, htmlStatment };
