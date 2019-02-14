import { formatDate, formatMoney, formatPercentage, formatString } from './formatters';

test('formatDate', () => {
    expect(formatDate('2018-10-28T08:31:32.1929446+00:00')).toBe('2018-10-28');
    expect(formatDate('2011-10-28T08:31:32.1929446+00:00', 'yyyy-MM-dd')).toBe('2011-10-28');
    expect(formatDate('2014-10-28T08:31:32.1929446+00:00', 'dd/MM yyyy')).toBe('28/10 2014');
    expect(formatDate(new Date('2018-10-28T08:31:32.1929446+00:00'))).toBe('2018-10-28');
    expect(formatDate(new Date('2018-10-28T08:31:32.1929446+00:00'), 'yyyy-MM-dd')).toBe('2018-10-28');
    expect(formatDate('')).toBe('');
});

describe('formatMoney', () => {
    test('without currency', () => {
        expect(formatMoney(100)).toBe('100,00');
        expect(formatMoney(1000)).toBe('1 000,00');
        expect(formatMoney(100000000)).toBe('100 000 000,00');
        expect(formatMoney(456.5433)).toBe('456,54');
        expect(formatMoney(1456.5433)).toBe('1 456,54');
        expect(formatMoney(0.5)).toBe('0,50');
        expect(formatMoney(1.5)).toBe('1,50');
    });

    test('with currency', () => {
        expect(formatMoney(1234, 'SEK')).toBe('1 234,00 SEK');
        expect(formatMoney(12345678, 'SEK')).toBe('12 345 678,00 SEK');
        expect(formatMoney(4356.5433, 'SEK')).toBe('4 356,54 SEK');
    });

    test('without decimals', () => {
        expect(formatMoney(4356.5433, 'SEK', false)).toBe('4 357 SEK');
        expect(formatMoney(4356.5433, undefined, false)).toBe('4 357');
        expect(formatMoney(14356.5433, undefined, false)).toBe('14 357');
        expect(formatMoney(0.5, undefined, false)).toBe('1');
        expect(formatMoney(1.5, undefined, false)).toBe('2');
    });
});

test('formatPercentage', () => {
    expect(formatPercentage(0.14)).toBe('14,00 %');
    expect(formatPercentage(0.1456)).toBe('14,56 %');
    expect(formatPercentage(0.145687)).toBe('14,57 %');
    expect(formatPercentage(1.145687)).toBe('114,57 %');
    expect(formatPercentage(0)).toBe('0,00 %');
    expect(formatPercentage(-0.1456)).toBe('-14,56 %');
});

test('formatString', () => {
    expect(formatString('foo')).toBe('foo');
    expect(formatString('foo {0}', 'bar')).toBe('foo bar');
    expect(formatString('foo {0} {1}', 'bar', 'baz')).toBe('foo bar baz');
});
