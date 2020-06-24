import React from 'react';
import "./Button.css";
import EditForm from '../EditForm/EditForm';

class Button extends React.Component {
    constructor(){
        super()
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);   
    }
    handleRemoveClick () {
        this.props.removeContact(this.props.name).then(()=>{
            this.props.reload();
        });
    }
    handleEditClick(){
        this.props.editContact(this.props.name).then(()=>{
            return <EditForm name = {this.state.name} />
        }).then(() =>{
            this.props.reload();
        })
    }


    render(){

    

        return (
            <div>
                <button className = "button" onClick={this.handleRemoveClick} >Remove</button>
                <button className = "button" onClick={this.handleEditClick}>Edit</button>
            </div>
        )
    }
}

export default Button;