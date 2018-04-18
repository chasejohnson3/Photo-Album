import React, { Component } from 'react';


class Photo extends Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : false,
            comment: "",
            editableText: true,
            autoFocusOn: false,
        }
    }

    setPhoto(photoLocation){
        this.setState((prevState, props) => {
            return {image: photoLocation}
        })
    }

    updateComment(newComment){
        this.setState((prevState, props) => {
            return {comment: newComment}
        })
    }

    makeCommentNotEditable(){
        this.setState({
            editableText: false
        });
    }

    makeCommentEditable(){
        this.setState({
            editableText: true, // Open up the text box for the user
            autoFocusOn: true, // When the user goes to edit a comment, make the cursor turn on so the user can start typing right away
        });
    }

    waitForEnter = (event) => {
        if(event.key == 'Enter'){
            this.updateComment(this.inputVal.value);
            this.makeCommentNotEditable();
        }
    }


    render(){
        const styles ={
            height:400,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }

        return(
            <div>
                <img src={this.props.image} style={styles}/>
                <h1>{this.state.editableText}</h1>
                
                <h6
                    onClick={() => this.makeCommentEditable()}
                > {!this.state.editableText && this.state.comment}</h6>  {/*Display the user's comment as text*/}
                
                {(this.state.editableText) && 
                    (<input
                        ref={(commentBox) => {this.inputVal = commentBox}}
                        autoFocus={this.state.autoFocusOn}
                        placeholder="Add a comment..." // Have a nice message to encourage the user to enter a comment
                        onKeyPress={this.waitForEnter} // If the user types a non-empty message and hits enter, the message is displayed as text
                    />)}
            </div>
        )
    }
}

export default Photo;