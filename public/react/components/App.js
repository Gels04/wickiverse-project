import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import router from '../../../server/routes/wiki';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [pages, setPages] = useState([]);

	//function used to fetch list or articles from PageList when you click `Wiki List` button

	async function getWikiList(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	return (
		<main>	
      		<h1 data-testid = "title">WikiVerse</h1>
			<h2 data-testid = 'subtitle'>Enter the digital world of articles & stories</h2>
			{/* <button data-testid = "wikiLIst" onClick = {getWikiList} >Wiki List</button>
			<button data-testid = "create">Create</button> */}
			<PagesList pages={pages} />
		</main>
	)
}