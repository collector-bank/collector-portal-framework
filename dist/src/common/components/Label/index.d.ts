/// <reference types="react" />
import { GlamorousComponent } from 'glamorous';
export interface LabelProps {
    error?: boolean;
    optional?: boolean;
}
export declare const Label: GlamorousComponent<LabelProps & React.HTMLProps<HTMLLabelElement>, LabelProps>;
