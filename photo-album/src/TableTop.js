//draggable website with tutorials/information 
//https://github.com/mzabriskie/react-draggable


import React, { Component } from 'react';
import Photo from "./Photo.js"
import { render } from "react-dom";

import Draggable from 'react-draggable';

import image1 from "./dog1.jpg"


class Table extends Component{
 	constructor(props){
 		super(props);
 		this.state={
 		image : image1
 		}
 	}
 	render(){
 		return(
		<Draggable>
		<div>
			<img src = {this.state.image} className = 'Folder'/>
 		</div>
		</Draggable>
				);
 	}
 }


export default Table;