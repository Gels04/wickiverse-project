import React from 'react';
import { useState } from 'react';
import apiURL from '../api';

//every time an article title is clicked, a page is opened and displays title, author content tags and date

export const Page = (props) => {

  const [page, setPage] = useState([])
  async function getPage() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
		  const pagesData = await response.json();
      console.log(pagesData);
      setPage(pagesData.content);

    } catch (error) {
      console.log("OH no an error occured!", error);
    }
  }

  return <>

    <h2 onClick = {getPage}>{props.page.title}</h2>
  </>
} 
	