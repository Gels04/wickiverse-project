const {Describe, test, it, expect} = require('@jest/globals');
import React from 'react';
import  {render, screen, cleanup, getByTestId} from '@testing-library/react';
import App from '../App';

Describe('Test for App', () => {
    it("renders", () => {
        const getByTestId = render(<App />);
        expect(getByTestId('title')).toBeInTheDocument()
    })
})