import React from 'react';
import { Page } from './Page';

//create a list of article pages with only titles on display

export const PagesList = ({pages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} />
			})
		}
	</>
} 
