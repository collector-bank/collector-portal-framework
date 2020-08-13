import React from 'react';
import Collapse from 'react-css-collapse';
import { ClassNames } from '@emotion/core';
import uniqid from 'uniqid';
import styled from '../../../';
import { Alert } from '../Alert';
import { Label } from '../Label';
import { RadioButton } from './';

export type Direction = 'row' | 'column';

const RadioButtonGroupContainer = styled.div({
    marginBottom: '1.25em',
});

const RadioButtonList = styled.ul<{ direction: Direction }>(({ direction }) => ({
    listStyleType: 'none',
    display: 'flex',
    flexDirection: direction,
    padding: 0,
    margin: 0,
}));

const RadioButtonContainer = styled.li<{ direction: Direction }>(({ direction }) => ({
    paddingRight: direction === 'row' ? 32 : 0,
}));

const KidsContainer = styled.div({
    overflow: 'hidden',
    marginLeft: 34,
    maxWidth: 500 - 34,
});

export type Key = any;

export interface RadioButtonItem {
    key: Key;
    label: string | JSX.Element;
    child?: React.ReactNode;
}

export interface RadioButtonGroupProps {
    label?: React.ReactNode;
    items: RadioButtonItem[];
    selected?: Key;
    disabled?: boolean;
    error?: string | boolean;
    direction?: Direction;
    onChange: (key: Key) => void;
}

export interface RadioButtonGroupState {
    name: string;
}

export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, RadioButtonGroupState> {
    static displayName = 'Collector.RadioButtonGroup';

    state: RadioButtonGroupState = {
        name: uniqid(),
    };

    private handleChange = (key: string) => {
        this.props.onChange(key);
    };

    render() {
        const { label, items, selected, disabled, error, direction = 'column' } = this.props;

        return (
            <ClassNames>
                {({ css }) => (
                    <RadioButtonGroupContainer>
                        <Label>{label}</Label>
                        <RadioButtonList direction={direction}>
                            {items.map((item, i) => (
                                <RadioButtonContainer direction={direction} key={i}>
                                    <RadioButton
                                        label={item.label}
                                        name={this.state.name}
                                        selected={item.key === selected}
                                        disabled={disabled}
                                        onChange={() => this.handleChange(item.key)}
                                    />
                                    <Collapse isOpen={item.key === selected} className={css({ transition: 'height 150ms' })}>
                                        <KidsContainer aria-hidden={item.key !== selected}>{item.child}</KidsContainer>
                                    </Collapse>
                                </RadioButtonContainer>
                            ))}
                        </RadioButtonList>
                        {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
                    </RadioButtonGroupContainer>
                )}
            </ClassNames>
        );
    }
}
