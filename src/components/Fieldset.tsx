import glamorous, { GlamorousComponent } from 'glamorous';

export const Fieldset: GlamorousComponent<React.HTMLProps<HTMLFieldSetElement>, {}> = glamorous.fieldset({
    margin: 0,
    marginBottom: 16,
    padding: 0,
    display: 'block',
    minWidth: 0,
    border: 0,
});
