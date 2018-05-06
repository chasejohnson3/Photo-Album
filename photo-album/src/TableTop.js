//draggable website with tutorials/information 
//https://github.com/mzabriskie/react-draggable


import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";

import Draggable from 'react-draggable';

const image1 = "/dog2.jpg"
const image2 = "/baby1.jpg"
const image3 = "/dog4.jpg"
const image4 = "/baby2.jpg"
const image5 = "/dog1.jpg"
const image6 = "/dog3.jpg"
const image7 = "/baby3.jpg"

class Table extends Component{
 	constructor(props){
 		super(props);
 		this.state={
 		images : [image1, image2, image3, image4, image5, image6, image7]
 		}
 	}
 	render(){
		const renderImage = (imageURL) => {return   <Draggable>
														<img src = {imageURL} className = 'Polaroid'/> 
													</Draggable>} 		
		return(
		<div className = 'tallDiv' id = 'boundaries'>
			{this.state.images.map(renderImage)}
		</div>
		
				);
 	}
 }



export default Table;