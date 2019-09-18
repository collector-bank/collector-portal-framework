import { CSSObject } from '@emotion/core';
import { Theme } from '../../../themes';
import styled from '../../../';

const track = (theme: Theme, percentFilled?: number) => ({
    width: '100%',
    height: 9,
    cursor: 'pointer',
    background:
        percentFilled != null
            ? `linear-gradient(to right, ${theme.colors.purple} ${percentFilled}%, ${theme.colors.purple} ${percentFilled}%, ${theme.colors.lightGray} ${percentFilled}%)`
            : theme.colors.lightGray,
    borderRadius: theme.borderRadius.small,
});

const thumb = (theme: Theme): CSSObject => ({
    boxSizing: 'border-box',
    border: '4px solid #fff',
    width: 36,
    height: 36,
    borderRadius: '100%',
    background: theme.colors.purple,
    cursor: 'pointer',
    WebkitAppearance: 'none',
    marginTop: -14,
});

const percentFilled = (value: number, min: number, max: number) => ((value - min) / (max - min)) * 100;

interface SliderProps {
    min: number;
    max: number;
    value: number;
}

export const Slider = styled.input<SliderProps>(({ min, max, value, theme }) => ({
    WebkitAppearance: 'none',
    width: '100%',
    height: 36,
    margin: 0,

    '&:focus': {
        outline: 'none',
    },

    '&::-webkit-slider-runnable-track': track(theme, percentFilled(value, min, max)),
    '&::-webkit-slider-thumb': thumb(theme),
    '&::-moz-range-track': track(theme, percentFilled(value, min, max)),
    '&::-moz-range-thumb': thumb(theme),

    '&::-ms-track': {
        ...track(theme, percentFilled(value, min, max)),
        background: 'transparent',
        borderColor: 'transparent',
        color: 'transparent',
    },

    '&::-ms-fill-lower': {
        background: theme.colors.purple,
    },

    '&::-ms-fill-upper': {
        background: theme.colors.lightGray,
    },

    '&::-ms-thumb': {
        ...thumb(theme),
        marginTop: 0,
    },
}));

Slider.displayName = 'Collector.Slider';
