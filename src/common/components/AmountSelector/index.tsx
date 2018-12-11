import * as React from 'react';
import glamorous from 'glamorous';
import { createFormattedNumberInput } from 'react-formatted-number-input';
import { formatMoney } from '../../../formatters';
import { Theme } from '../../../themes';
import { Slider } from '../Slider';

const Minus = () => (
    <svg width="16" height="2" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M1 2h14a1 1 0 0 0 0-2H1a1 1 0 1 0 0 2z" />
    </svg>
);

const Plus = () => (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M9 7h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6V1a1 1 0 1 1 2 0v6z"/>
    </svg>
);

const Container = glamorous.div({
    marginBottom: '3em',
});

const InputContainer = glamorous.div<{ theme: Theme }>(({ theme }) => ({
    border: `1px solid ${theme.colors.mediumGray}`,
    borderRadius: theme.borderRadius.small,
    display: 'flex',
    height: 70,
    position: 'relative',
    zIndex: 2,
    marginBottom: '1em',
}));

const Input = glamorous.input<{ theme: Theme }>(({ theme }) => ({
    appearance: 'none',
    border: `solid ${theme.colors.mediumGray}`,
    borderWidth: '0 1px',
    borderRadius: 0,
    textAlign: 'center',
    width: '100%',
    flex: '80% 1 1',
    font: theme.fonts.desktop.xl,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xl,
    },

    '::-ms-clear': {
        display: 'none'
    },
}));

const AmountInput = createFormattedNumberInput<any>(Input);

const Button = glamorous.button<{ theme: Theme }>(({ theme }) => ({
    fontFamily: 'inherit',
    background: 'transparent',
    border: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    width: 55,
    fontSize: 40,
    padding: 0,
    cursor: 'pointer',
    borderRadius: theme.borderRadius.small,
    transition: 'background-color 100ms',
    color: theme.colors.black,

    ':hover': {
        background: theme.colors.offWhite,
    },
}));

const Range = glamorous.div<{ theme: Theme }>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    font: theme.fonts.desktop.medium,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.medium,
    },
}));

interface Props {
    currency: string;
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    stepSize: number;
}

interface State {
    isDrafting: boolean;
    draftValue?: number;
}

export class AmountSelector extends React.Component<Props, State> {    
    static displayName = 'Collector.AmountSelector';

    state: State = {
        isDrafting: false,
    };

    private increase = () => {
        const remainder = this.props.value % this.props.stepSize;
        const value = remainder > 0
            ? this.props.value + this.props.stepSize - remainder
            : this.props.value + this.props.stepSize;

        this.props.onChange(Math.min(value, this.props.max));
    }

    private decrease = () => {
        const remainder = this.props.value % this.props.stepSize;
        const value = remainder > 0
            ? this.props.value - remainder
            : this.props.value - this.props.stepSize;

        this.props.onChange(Math.max(value, this.props.min));
    }

    private handleRangeInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const middle = this.props.max - this.props.min;
        let value = Number(event.currentTarget.value);

        if (value > middle) {
            value = Math.ceil(value / this.props.stepSize) * this.props.stepSize;
            value = Math.min(value, this.props.max);
        } else {
            value = Math.floor(value / this.props.stepSize) * this.props.stepSize;
            value = Math.max(value, this.props.min);
        }

        this.props.onChange(value);
    }

    private changeDraftValue = (draftValue: number) => {
        this.setState({
            isDrafting: true,
            draftValue
        });
    }

    private commitDraftValue = () => {
        if (this.state.isDrafting && this.state.draftValue != null) {
            const normalized = this.clampAndRound(this.state.draftValue);

            this.props.onChange(normalized);

            this.setState({
                isDrafting: false,
                draftValue: undefined
            });
        }
    }

    private clampAndRound = (value: number) => {
        if (value <= this.props.min) {
            return this.props.min;
        } else if (value >= this.props.max) {
            return this.props.max;
        } else {
            return Math.round(value / this.props.stepSize) * this.props.stepSize;
        }
    }

    render() {
        const { min, max, value, currency } = this.props;
        const { isDrafting, draftValue } = this.state;

        return (
            <Container>
                <InputContainer>
                    <Button onClick={this.decrease} data-testid="decrease"><Minus /></Button>
                    <AmountInput
                        value={isDrafting ? draftValue : value}
                        onChange={this.changeDraftValue}
                        onBlur={this.commitDraftValue}
                        pattern="[0-9]*"
                        data-testid="input"
                    />
                    <Button onClick={this.increase} data-testid="increase"><Plus /></Button>
                </InputContainer>

                <Slider
                    type="range"
                    min={min}
                    max={max}
                    value={value}
                    onChange={this.handleRangeInputChange}
                    data-testid="slider"
                />

                <Range>
                    <div>{formatMoney(min, currency, false)}</div>
                    <div>{formatMoney(max, currency, false)}</div>
                </Range>
            </Container>
        );
    }
}