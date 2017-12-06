import * as React from 'react';
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Label } from '../Label';
import { Alert } from '../Alert';

const arrow = require('./arrow.svg');

const SelectContainer = glamorous.div({
    marginBottom: '1.25em',
});

const SelectFieldContainer = glamorous.div<{ hasError?: boolean }>(
    {
        position: 'relative',
        maxWidth: 220,
        backgroundColor: colors.white,
        border: '1px solid',
        borderRadius: borderRadius.small,

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
    ({ hasError }) => ({
        borderColor: hasError ? colors.red : colors.mediumGray
    })
);

const SelectField = glamorous.select({
    font: 'inherit',
    color: 'inherit',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    width: '100%',
    padding: 12,
    paddingRight: 40,

    '&:disabled': {
        background: colors.offWhite,
    },

    '&::-ms-expand': {
        display: 'none',
    },
});

export interface SelectItem {
    key?: string;
    label: string;
}

interface Props {
    label?: string;
    disabled?: boolean;
    error?: string | boolean;
    optional?: boolean;
    items?: SelectItem[];
    value?: string;
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}

interface State {
    id: string;
}

export class Select extends React.Component<Props, State> {
    static displayName = 'Collector.Select';

    state: State = {
        id: uniqid(),
    };

    render() {
        const { label, disabled, value, error, optional, onChange } = this.props;
        let { items } = this.props;

        if (!value && items) {
            items = [
                {
                    key: '',
                    label: '',
                },
                ...items,
            ];
        }

        return (
            <SelectContainer>
                <Label htmlFor={this.state.id} optional={optional}>{label}</Label>
                <SelectFieldContainer hasError={Boolean(error)}>
                    <SelectField id={this.state.id} disabled={disabled} value={value ? value : ''} onChange={onChange}>
                        {items ? (
                            items.map(item => (
                                <option key={item.key ? item.key : item.label} value={item.key ? item.key : item.label}>
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
