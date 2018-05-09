
import React, { Component } from 'react';


class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : false,
            comment: localStorage.getItem('Comment_' + this.props.image) || "Click me to add comment...", // Until the user enters a comment, encourage them to do so
            editableComment: false,
            autoFocusOnComment: false,
            autoFocusOnTitle: false,            
            title: localStorage.getItem('Title_' + this.props.image) || "Title", // Until the user enters a title, display "Title"
            
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
        localStorage.setItem('Title_' + this.props.image, newTitle); // save the title for future reference
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
        localStorage.setItem('Comment_' + this.props.image, newComment); // save the comment for future reference
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
            this.updateComment(this.inputValComment.value); // When the user hits enter, save the comment's value
            this.makeCommentNotEditable(); // display the newly updated comment's value
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
            <div>
                <h1
                    onClick={() => this.makeTitleEditable()} // When the title is clicked, turn it into a text box whose value is set by hitting enter
                > {!this.state.editableTitle && this.state.title}</h1> {/*Display the title above the image */}
                {(this.state.editableTitle) && 
                    (<input
                        style={makeTitleBoxBigger}
                        ref={(titleBox) => {this.inputValTitle = titleBox}} // Set the value of the title (we only get to this point if the title has been clicked)
                        autoFocus={this.state.autoFocusOnTitle} // Put the cursor in the text box if the user just clicked and can edit the title
                        onKeyPress={this.waitForEnterTitle} // If the user types a non-empty message and hits enter, the message is displayed as text
                    />)}
                <img src={this.props.image} style={styles}/>
                
                <h6
                    onClick={() => this.makeCommentEditable()}
                > {!this.state.editableComment && this.state.comment}</h6>  {/*Display the user's comment as text*/}
                
                {(this.state.editableComment) && 
                    (<input
                        ref={(commentBox) => {this.inputValComment = commentBox}} // Set the value of the comment (we only get to this if the comment has been clicked)
                        autoFocus={this.state.autoFocusOnComment} // Put the cursor in the text box if the user just clicked and can edit the comment
                        onKeyPress={this.waitForEnterComment} // If the user types a non-empty message and hits enter, the message is displayed as text
                    />)}
            </div>
        )
    }
}

export default Photo;