const dateFormatter = require('tinydate'); // `require` to suppress "missing declaration file warning"

export const formatDate = (date: Date | string, format = 'YYYY-MM-DD') => {
    if (date) {
        return dateFormatter(format)(date);
    }

    return '';
};

export const formatMoney = (money: number, currency?: string) => {
    if (money != null) {
        const formatted = money
            .toFixed(2)
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

        if (num > 0) {
            return num;
        }
    }

    return 0;
};
