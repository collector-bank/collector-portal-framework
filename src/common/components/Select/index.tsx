import glamorous from 'glamorous';
import * as React from 'react';
import * as uniqid from 'uniqid';
import { Theme } from '../../../themes';
import { Alert } from '../Alert';
import { Label } from '../Label';

const arrow =
    "'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3Cpath d=%22M8 11.841a.5.5 0 0 1-.348-.141L.735 5.018a.5.5 0 0 1 .695-.719L8 10.646l6.569-6.347a.5.5 0 1 1 .695.719L8.348 11.7a.5.5 0 0 1-.348.141z%22 fill=%22%23111%22/%3E%3C/svg%3E'";

const SelectContainer = glamorous.div({
    marginBottom: '1.25em',
});

const SelectFieldContainer = glamorous.div<{ hasError?: boolean; disabled?: boolean; theme: Theme; }>(
    {
        position: 'relative',
        maxWidth: 220,
        border: '1px solid',

        '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            pointerEvents: 'none',
            background: `url(${arrow}) no-repeat center`,
            backgroundSize: 16,
            width: 40,
            height: '100%',
        },
    },
    ({ hasError, disabled, theme }) => ({
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.small,
        borderColor: hasError ? theme.colors.red : disabled ? theme.colors.lightGray : theme.colors.mediumGray,
    })
);

const SelectField = glamorous.select<{ theme: Theme }>(
    {
        font: 'inherit',
        color: 'inherit',
        appearance: 'none',
        background: 'transparent',
        border: 0,
        width: '100%',
        padding: 11, // To make it 11 when accounting for border
        paddingRight: 40,

        '&::-ms-expand': {
            display: 'none',
        },
    },
    ({ theme }) => ({
        '&:disabled': {
            background: theme.colors.offWhite,
        },
    })
);

export interface SelectItem {
    key?: string;
    label: string;
}

export interface SelectProps {
    label?: string | React.ReactNode;
    disabled?: boolean;
    error?: string | boolean;
    items?: SelectItem[];
    value?: string;
    name?: string;
    placeholder?: string;
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

export interface SelectState {
    id: string;
}

export class Select extends React.Component<SelectProps, SelectState> {
    static displayName = 'Collector.Select';

    state: SelectState = {
        id: uniqid(),
    };

    render() {
        const { label, disabled, value, name, error, placeholder, onChange } = this.props;
        let { items } = this.props;

        if (!value && items) {
            items = [
                {
                    key: '-1',
                    label: placeholder ? placeholder : '',
                },
                ...items,
            ];
        }

        return (
            <SelectContainer>
                <Label htmlFor={this.state.id}>{label}</Label>
                <SelectFieldContainer hasError={Boolean(error)} disabled={disabled}>
                    <SelectField id={this.state.id} disabled={disabled} name={name} value={value ? value : '-1'} onChange={onChange}>
                        {items ? (
                            items.map(item => (
                                <option
                                    key={item.key ? item.key : item.label}
                                    value={item.key ? item.key : item.label}
                                    disabled={item.key === '-1'}
                                >
                                    {item.label}
                                </option>
                            ))
                        ) : (
                            <option disabled={true} />
                        )}
                    </SelectField>
                </SelectFieldContainer>
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </SelectContainer>
        );
    }
}
