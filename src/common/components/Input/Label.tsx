import React from 'react';
import { Theme } from '../../../themes';
import { Label } from '../Label';
import styled from '../../..';

interface LabelProps {
    shouldHover: boolean;
    disabled?: boolean;
}

const getLabelColor = (shouldHover: boolean, theme: Theme, disabled?: boolean) => {
    if (disabled) {
        return shouldHover
            ? `linear-gradient(${theme.colors.white} 0%, ${theme.colors.white} 50%, ${theme.colors.offWhite} 50%);`
            : theme.colors.offWhite;
    }

    return shouldHover ? theme.colors.white : 'initial';
};

const FloatingLabel = styled(Label)<LabelProps>(({ shouldHover, disabled, theme }) => ({
    display: 'table-cell',
    alignItems: 'center',
    transition: 'transform 150ms ease-in-out, background-color 150ms cubic-bezier(1,-0.68, 0.79, 2.55), color 150ms ease-in-out',
    borderRadius: 50,
    fontSize: 14,
    lineHeight: 1,
    width: '100%',
    transform: shouldHover ? `translate(7px, 8px) scale(0.875)` : `translate(12px, 26px)`,
    background: getLabelColor(shouldHover, theme, disabled),
    color: shouldHover ? 'initial' : theme.colors.darkGray,
    paddingLeft: 2,
    paddingRight: 2,
    fontWeight: 300,
}));

interface InputLabelProps {
    shouldHover: boolean;
    disabled?: boolean;
    inputId: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({ children, disabled, shouldHover, inputId }) => {
    return (
        <FloatingLabel shouldHover={shouldHover} htmlFor={inputId} disabled={disabled}>
            {children}
        </FloatingLabel>
    );
};
