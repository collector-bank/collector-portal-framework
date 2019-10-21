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
    transition:
        'transform 150ms ease-in-out, background-color 150ms cubic-bezier(1,-0.68, 0.79, 2.55), color 150ms ease-in-out, font-size 150ms ease-in-out',
    borderRadius: 50,
    fontSize: shouldHover ? 16 : 18,
    lineHeight: '24px',
    transform: shouldHover ? `translate(8px, 12px)` : `translate(12px, 38px)`,
    width: '100%',
    background: getLabelColor(shouldHover, theme, disabled),
    color: shouldHover ? 'initial' : theme.colors.darkGray,
    paddingLeft: 4,
    paddingRight: 4,
    fontWeight: 300,
    position: 'relative',
    zIndex: 999,
    pointerEvents: 'none',
}));

interface InputLabelProps {
    shouldHover: boolean;
    disabled?: boolean;
    inputId: string;
}

export const InputLabel: React.FC<InputLabelProps> = ({ children, disabled, shouldHover, inputId, ...rest }) => {
    return (
        <FloatingLabel shouldHover={shouldHover} htmlFor={inputId} disabled={disabled} {...rest}>
            {children}
        </FloatingLabel>
    );
};
