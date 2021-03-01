import React, { useEffect } from "react";
import Router from 'next/router'

export default function Index() {

	useEffect(() => {
		const {pathname} = Router
		if(pathname == '/' ){
			Router.push('/home')
		}
	});

	return(
		<h1></h1>
	)
}
