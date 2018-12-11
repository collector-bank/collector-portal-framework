import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { H1, H2, H3, Text, TextLink } from './';
import readme from './README.md';

const typography = storiesOf('Typography', module);

typography.addDecorator(withKnobs);

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur
    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis,
    congue vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue.
    Suspendisse tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula
    eros elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.
`;

typography.add('Heading 1', withReadme(readme, () =>
    <H1 centered={boolean('Centered', false)}>{text('Heading', 'Heading 1')}</H1>
));

typography.add('Heading 2', withReadme(readme, () =>
    <H2 centered={boolean('Centered', false)}>{text('Heading', 'Heading 2')}</H2>
));

typography.add('Heading 3', withReadme(readme, () =>
    <H3 centered={boolean('Centered', false)}>{text('Heading', 'Heading 3')}</H3>
));

typography.add('Body text', withReadme(readme, () =>
    <Text>{text('Text', loremIpsum)}</Text>
));

typography.add('Text link', withReadme(readme, () =>
    <TextLink href="#">{text('Link text', 'This is a link')}</TextLink>
));
