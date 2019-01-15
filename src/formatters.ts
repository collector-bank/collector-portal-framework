import dateFormatter from 'date-fns/format';

export const formatDate = (date: Date | number, format = 'yyyy-MM-dd') => {
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

export const formatString = (str: string, ...args: any[]) => {
    if (args.length > 0) {
        return str.replace(/{(\d+)}/g, (match, i) => (args[i] == null ? match : args[i]));
    }

    return str;
};
