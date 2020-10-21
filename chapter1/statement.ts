import {plays, Play, invoice, Invoice} from './datas';

// invoices에 맞게 공연료를 청구하는 코드

function statement(invoice: Invoice, plays: Play) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명 : ${invoice.customer})\n`;
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playId]; // 공연 목록에서 해당 공연 정보 가져옴
    let thisAmount = 0;

    switch (play.type) {
      case 'tragedy':
        thisAmount = 40000;
        if (perf.audience > 30) thisAmount += 1000 * (perf.audience - 30);
        break;

      case 'comedy':
        thisAmount = 30000;
        if (perf.audience > 20)
          thisAmount += 10000 + 500 * (perf.audience - 20);
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르 : ${play.type}`);
    }
    // 포인트 적립
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공
    if ('comedy' === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역 출력
    result += `${play.name} : ${format(thisAmount / 100)} (${
      perf.audience
    })석\n`;
    totalAmount += thisAmount;
  }

  result += `총액 : ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점\n`;
  return result;
}

const result = statement(invoice, plays);
console.log(result);
