const {describe, test, it, expect} = require('@jest/globals');
import React from 'react';
import  {render, screen, cleanup} from '@testing-library/react';
import { App } from '../App';

//ISSUE RESOLVED: challenging to actually test react since i receive an error: Support for the experimental syntax 'jsx' isn't currently enabled (8:12):
//still taking the TDD approach!!

//now saying reference error: document not defined

//TODO figure out if you should create a new component called HomePage to put in App
//TODO learn how to create a fetch request that loads a new page

beforeAll(()=> {
    render(<App />)
})

describe('The App component', () => {

    it("has a title", () => {
        const h1 = screen.getByTestId('title');
        expect(h1).toBeInTheDocument();
        expect(h1).toHaveTextContent('Wikiverse');
    })

    it("has a subtitle", () => {
        const h2 = screen.getByTestId('subtitle');
        expect(h2).toBeInTheDocument();
        expect(h2).toHaveTextContent('Enter the digital world of articles & stories');
    })
    
    it('has a `Wiki List` button', () => {
        const wikiListButton = screen.getByTestId('wikiList');
        expect(wikiListButton).toBeInTheDocument();
        expect(wikiListButton).toHaveTextContent('Wiki List');
    })

    it('has a `create` button', () => {
        const createButton = screen.getByTestId('create');
        expect(createButton).toBeInTheDocument();
        expect(createButton).toHaveTextContent('Create');
    })

    it('both `Wiki List` nad `Create` buttons have an onCLick attribute', () => {
        const wikiListButton = screen.getByTestId('wikiList'); 
        const createButton = screen.getByTestId('create');
        expect(wikiListButton, createButton).toHaveAttribute('onclick');
    })

    it('`Wiki List` button makes a GET request when the button is clicked using the function `getWikiList`', () => {
        const wikiListButton = screen.getByTestId('wikiList');
        expect(wikiListButton).getAttribute('onClick').toBe('getWikiList') //if doesn't work try toMatch() instead of toBe()
    })
})