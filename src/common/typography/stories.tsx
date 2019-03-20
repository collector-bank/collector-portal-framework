import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { H1, H2, H3, Text, TextLink } from './';
import notes from './README.md';

const typography = storiesOf('Typography', module);

typography.addDecorator(withKnobs);

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur
    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis,
    congue vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue.
    Suspendisse tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula
    eros elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.
`;

typography.add('Heading 1', () => <H1>{text('Heading', 'Heading 1')}</H1>, { notes });

typography.add('Heading 2', () => <H2>{text('Heading', 'Heading 2')}</H2>, { notes });

typography.add('Heading 3', () => <H3>{text('Heading', 'Heading 3')}</H3>, { notes });

typography.add('Body text', () => <Text>{text('Text', loremIpsum)}</Text>, { notes });

typography.add('Text link', () => <TextLink href="#">{text('Link text', 'This is a link')}</TextLink>, { notes });
