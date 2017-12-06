import * as dateFormatter from 'date-fns/format';
export var formatDate = function (date, format) {
    if (format === void 0) { format = 'YYYY-MM-DD'; }
    if (date) {
        return dateFormatter(date, format);
    }
    return '';
};
export var formatMoney = function (money, currency) {
    if (money != null) {
        var formatted = money
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            .replace('.', ',');
        return currency ? formatted + " " + currency : formatted;
    }
    return '';
};
export var formatPercentage = function (fraction) {
    if (fraction != null) {
        return (fraction * 100).toFixed(2).replace('.', ',') + ' %';
    }
    return '';
};
export var parseAmountString = function (amount) {
    if (amount) {
        var cleaned = amount.replace(/,/g, '.').replace(/[^\d.]/g, '');
        var num = parseFloat(cleaned);
        if (num > 0) {
            return num;
        }
    }
    return 0;
};
//# sourceMappingURL=formatters.js.map