import * as dateFormatter from 'date-fns/format';

export const formatDate = (date: Date | string, format = 'YYYY-MM-DD') => {
    if (date) {
        return dateFormatter(date, format);
    }

    return '';
};

export const formatMoney = (money: number, currency?: string, includeDecimals = true) => {
    if (money != null) {
        const formatted = money
            .toFixed(includeDecimals ? 2 : 0)
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

export const parseAmountString = (amount: string) => {
    if (amount) {
        const cleaned = amount.replace(/,/g, '.').replace(/[^\d.]/g, '');
        const num = parseFloat(cleaned);
        const rounded = Math.round(num * 100) / 100;

        if (rounded > 0) {
            return rounded;
        }
    }

    return 0;
};

export const formatString = (str: string, ...args: any[]) => {
    if (args.length > 0) {
        return str.replace(/{(\d+)}/g, (match, i) => args[i] == null ? match : args[i]);
    }

    return str;
};
