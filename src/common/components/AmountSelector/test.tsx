import * as React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { ThemeProvider } from 'glamorous';
import * as theme from '../../../themes/collector';
import { AmountSelector } from './';

class Container extends React.Component {
    state = {
        value: 1000
    };

    handleChange = (value?: number) => {
        this.setState({ value });
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <AmountSelector
                    currency="SEK"
                    min={740}
                    max={1330}
                    stepSize={100}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </ThemeProvider>
        );;
    }
}

const setup = () => {
    const utils = render(<Container />);

    const increase = utils.getByTestId('increase') as HTMLButtonElement;
    const decrease = utils.getByTestId('decrease') as HTMLButtonElement;
    const input = utils.getByTestId('input') as HTMLInputElement;
    const slider = utils.getByTestId('slider') as HTMLInputElement;

    return {
        increase,
        decrease,
        input,
        slider,
        ...utils,
    }
}

afterEach(cleanup);

describe('The text input field', () => {
    test('It should show the value', () => {
        const { input } = setup();
        expect(input.value).toBe('1 000');
    });

    test('It should handle input changes', () => {
        const { input } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.change(input, { target: { value: '1300' }});
        expect(input.value).toBe('1 300');
    });
    
    test('It should round inputted values on blur', () => {
        const { input } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.change(input, { target: { value: '1250' }});
        fireEvent.blur(input);
        expect(input.value).toBe('1 300');
    });
    
    test('It should not be able to increase the value beyond the maximum', () => {
        const { input } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.change(input, { target: { value: '1500' }});
        fireEvent.blur(input);
        expect(input.value).toBe('1 330');
    });
    
    test('It should not be able to decrease the value beyond the minimum', () => {
        const { input } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.change(input, { target: { value: '600' }});
        fireEvent.blur(input);
        expect(input.value).toBe('740');
    });    
});

describe('Increase/decrease buttons', () => {
    test('Clicks on the increase button should increase the value', () => {
        const { input, increase } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.click(increase);
        expect(input.value).toBe('1 100');
        fireEvent.click(increase);
        fireEvent.click(increase);
        expect(input.value).toBe('1 300');
    });
    
    test('Clicks on the decrease button should decrease the value', () => {
        const { input, decrease } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.click(decrease);
        expect(input.value).toBe('900');
        fireEvent.click(decrease);
        expect(input.value).toBe('800');
    });
    
    test('The increase button should not be able to increase the value beyond the maximum', () => {
        const { input, increase } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.click(increase);
        fireEvent.click(increase);
        fireEvent.click(increase);
        fireEvent.click(increase);
        expect(input.value).toBe('1 330');
    });
    
    test('The decrease button should not be able to decrease the value beyond the minimum', () => {
        const { input, decrease } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.click(decrease);
        fireEvent.click(decrease);
        fireEvent.click(decrease);
        expect(input.value).toBe('740');
    });
    
    test('It should be able to handle multiple mixed increase/decrease clicks', () => {
        const { input, increase, decrease } = setup();
        expect(input.value).toBe('1 000');
        fireEvent.click(increase);
        expect(input.value).toBe('1 100');
        fireEvent.click(decrease);
        fireEvent.click(increase);
        expect(input.value).toBe('1 100');
    });
});

describe('The range slider', () => {
    test('It should show the value', () => {
        const { slider } = setup();
        expect(slider.value).toBe('1000');
    });

    test('It should handle input changes', () => {
        const { slider } = setup();
        expect(slider.value).toBe('1000');
        fireEvent.change(slider, { target: { value: '1300' }});
        expect(slider.value).toBe('1300');
    });
});
