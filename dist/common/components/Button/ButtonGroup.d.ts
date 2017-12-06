/// <reference types="react" />
import { GlamorousComponent } from 'glamorous';
export interface ButtonGroupProps {
    align?: 'flex-start' | 'flex-end' | 'center';
}
export declare const ButtonGroup: GlamorousComponent<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, ButtonGroupProps>;
