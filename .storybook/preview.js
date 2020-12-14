import GlobalStyles from '../src/styles/global';
import React from 'react';

export const decorators = [
    (Story) => (
        <>
            <GlobalStyles />;
            <Story />
        </>
    ),
];

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};
