import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Card } from './';
import glamorous from 'glamorous';
import { Button, H3, Text } from '../../../components/index';

const components = storiesOf('Components', module);

const CardContainer = glamorous.div({
    marginTop: 16,
    marginLeft: 16,
});

components.addDecorator(withKnobs);
components.add('Card', () => {
    return (
        <CardContainer>
            <Card
                body={
                    <div style={{ height: 120 }}>
                        <H3>My title</H3>

                        <Text>Här kommer det in mer text</Text>
                    </div>
                }
                subBody={
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                            <Button onClick={() => null}>Button</Button>
                            <Button type="text" onClick={() => null}>
                                Avbryt
                            </Button>
                        </div>
                    </>
                }
                color="yellow"
                heading="Label"
            />
        </CardContainer>
    );
});
