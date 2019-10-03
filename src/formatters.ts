import dateFormatter from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

Number.isInteger =
    Number.isInteger ||
    function(value) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    };

export const formatDate = (date: Date | string, format = 'yyyy-MM-dd') => {
    if (date) {
        if (typeof date === 'string') {
            date = parseISO(date);
        }

        return dateFormatter(date, format);
    }

    return '';
};

export const formatMoney = (money: number, currency?: string, includeDecimals = true) => {
    if (money != null) {
        const formatted = money
            .toFixed(includeDecimals && !Number.isInteger(money) ? 2 : 0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
            .replace('.', ',');
        return currency ? `${formatted} ${currency}` : formatted;
    }

    return '';
};

export const formatPercentage = (fraction: number) => {
    if (fraction != null) {
        return (fraction * 100).toFixed(2).replace('.', ',') + ' %';
    }

    return '';
};

export const formatString = (str: string, ...args: any[]) => {
    if (args.length > 0) {
        return str.replace(/{(\d+)}/g, (match, i) => (args[i] == null ? match : args[i]));
    }

    return str;
};
