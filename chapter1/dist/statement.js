"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datas_1 = require("./datas");
// invoices에 맞게 공연료를 청구하는 코드
function statement(invoice, plays) {
    var totalAmount = 0;
    var volumeCredits = 0;
    var result = "\uCCAD\uAD6C \uB0B4\uC5ED (\uACE0\uAC1D\uBA85 : " + invoice.customer + ")\n";
    var format = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format;
    for (var _i = 0, _a = invoice.performances; _i < _a.length; _i++) {
        var perf = _a[_i];
        var play = plays[perf.playId]; // 공연 목록에서 해당 공연 정보 가져옴
        var thisAmount = 0;
        switch (play.type) {
            case 'tragedy':
                thisAmount = 40000;
                if (perf.audience > 30)
                    thisAmount += 1000 * (perf.audience - 30);
                break;
            case 'comedy':
                thisAmount = 30000;
                if (perf.audience > 20)
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error("\uC54C \uC218 \uC5C6\uB294 \uC7A5\uB974 : " + play.type);
        }
        // 포인트 적립
        volumeCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가 포인트를 제공
        if ('comedy' === play.type)
            volumeCredits += Math.floor(perf.audience / 5);
        // 청구 내역 출력
        result += play.name + " : " + format(thisAmount / 100) + " (" + perf.audience + ")\uC11D\n";
        totalAmount += thisAmount;
    }
    result += "\uCD1D\uC561 : " + format(totalAmount / 100) + "\n";
    result += "\uC801\uB9BD \uD3EC\uC778\uD2B8 : " + volumeCredits + "\uC810\n";
    return result;
}
var result = statement(datas_1.invoice, datas_1.plays);
console.log(result);
//# sourceMappingURL=statement.js.map