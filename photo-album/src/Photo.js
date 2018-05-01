//flexbox
//display
import React, { Component } from 'react';


class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : false,
            comment: localStorage.getItem('Comment') || "Do not click me",
            editableComment: false,
            autoFocusOnComment: false,
            autoFocusOnTitle: false,            
            title: localStorage.getItem('Title') || "Title",
            
        }
    }

    setPhoto(photoLocation){
        this.setState((prevState, props) => {
            return {image: photoLocation}
        })
    }



    updateTitle(newTitle){
        this.setState((prevState, props) => {
            return {title: newTitle}
        })
        localStorage.setItem('Title', newTitle);
    }

    makeTitleNotEditable(){
        this.setState({
            editableTitle: false
        });
    }

    makeTitleEditable(){
        this.setState({
            editableTitle: true, // Open up the text box for the user
            autoFocusOnTitle: true, // When the user goes to edit a comment, make the cursor turn on so the user can start typing right away
        });
    }

    waitForEnterTitle = (event) => {
        if(event.key == 'Enter'){
            this.updateTitle(this.inputValTitle.value);
            this.makeTitleNotEditable();
        }
    }





    updateComment(newComment){
        this.setState((prevState, props) => {
            return {comment: newComment}
        })
        localStorage.setItem('Comment',newComment);
    }

    makeCommentNotEditable(){
        this.setState({
            editableComment: false
        });
    }

    makeCommentEditable(){
        this.setState({
            editableComment: true, // Open up the text box for the user
            autoFocusOnComment: true, // When the user goes to edit a comment, make the cursor turn on so the user can start typing right away
        });
    }

    waitForEnterComment = (event) => {
        if(event.key == 'Enter'){
            this.updateComment(this.inputValComment.value);
            this.makeCommentNotEditable();
        }
    }


    render(){
        const styles ={
			width: '100%'
        }
        const makeTitleBoxBigger={
            height:50,
            fontSize:30,
        }

        return(
            <div className = 'Photo'>
                <h1
                    onClick={() => this.makeTitleEditable()}
                > {!this.state.editableTitle && this.state.title}</h1> {/*Display the title above the image */}
                {(this.state.editableTitle) && 
                    (<input
                        style={makeTitleBoxBigger}
                        ref={(titleBox) => {this.inputValTitle = titleBox}}
                        autoFocus={this.state.autoFocusOnTitle}
                        //value = {this.state.title}// Have a nice message to encourage the user to enter a comment
                        onKeyPress={this.waitForEnterTitle} // If the user types a non-empty message and hits enter, the message is displayed as text
                    />)}
                <img src={this.props.image} style={styles}/>
                <h1>{this.state.editableComment}</h1>
                
                <h6
                    onClick={() => this.makeCommentEditable()}
                > {!this.state.editableComment && this.state.comment}</h6>  {/*Display the user's comment as text*/}
                
                {(this.state.editableComment) && 
                    (<input
                        ref={(commentBox) => {this.inputValComment = commentBox}}
                        autoFocus={this.state.autoFocusOnComment}
                         //value = {this.state.comment}// Have a nice message to encourage the user to enter a comment
                        onKeyPress={this.waitForEnterComment} // If the user types a non-empty message and hits enter, the message is displayed as text
                    />)}
            </div>
        )
    }
}

export default Photo;