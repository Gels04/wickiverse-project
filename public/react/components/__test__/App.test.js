/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import "@testing-library/jest-dom";

const {describe, test, it, expect} = require('@jest/globals');
import React from 'react';
import  {render, screen, cleanup} from '@testing-library/react';
import { App } from '../App';
import { PagesList } from "../PagesList";
import { Page } from "../Page";

//ISSUE RESOLVED: challenging to actually test react since i receive an error: Support for the experimental syntax 'jsx' isn't currently enabled (8:12):
//still taking the TDD approach!!

// ISSUE RESOLVED: now saying reference error: document not defined

//TODO figure out if you should create a new component called HomePage to put in App
//TODO learn how to create a fetch request that loads a new page



describe('The App component', () => {

    it("has a title", () => {

        render(<App />)
        const h1 = screen.getByTestId('title');
        expect(h1).toBeInTheDocument();
        expect(h1).toHaveTextContent('WikiVerse');
    })

    it("has a subtitle", () => {
        render(<App />)
        const h2 = screen.getByTestId('subtitle');
        expect(h2).toBeInTheDocument();
        expect(h2).toHaveTextContent('Enter the digital world of articles & stories');
    })
    
    it('has a `Wiki List` button', () => {
        render(<App />)
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

// describe("PagesList component", () => {

//     render(<PagesList />)

//     it("has a `back` button", () => {
//         const backButton = screen.getByTestId('backButton');
//         expect(backButton).toBeInTheDocument();
//         expect(backButton).toHaveTextContent('Back');
//     })

//     it('`back` button makes a GET request when the button is clicked using the function `getHomePage`', () => {
//         const backButton = screen.getByTestId('backButton');
//         expect(backButton).getAttribute('onClick').toBe('getHomePage')
//     })

//     it('has titles listed ', () => {
//         const firstTitle = screen.getByText('First Page');
//         const otherTitle = screen.getByText("Eleanor of Aquitaine");
//         expect(firstTitle).toBeInTheDocument();
//         expect(otherTitle).toBeInTheDocument();
//     })

//     it('titles are displayed as buttons', () => {
//         const title1 = screen.getByText('First Page', {selector: "button"})
//         expect(title1).toBeInTheDocument();
//     })

//     it('titles make a GET request to the /wiki/:slug endpoint for the specific article using the function `getArticle` ', () => {
//         const titleButton = screen.getAttribute('onClick').toBe('getArticle')
//     })

// })

// describe('Page component', () => {

//     render(<Page />)

//     it('has a title', () => {
//         const title = screen.getByTestId('title');
//         expect(title).toBeInTheDocument();
//     })

//     it('has an author', () => {
//         const author = screen.getByTestId('author');
//         expect(author).toBeInTheDocument();
//     })

//     it('has a content', () => {
//         const content = screen.getByTestId('content');
//         expect(content).toBeInTheDocument();
//     })

//     it('has a date (createdAt)', () => {
//         const date = screen.getByTestId('date');
//         expect(date).toBeInTheDocument();
//     })

// })