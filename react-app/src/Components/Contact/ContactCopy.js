import React from "react";
import "./Contact.css";
import Button from "../Button/Button";
import { getContacts, deleteContactName, insertContact, editContactName} from '../../util/contacts';

class Contact extends React.Component {
    constructor(){
        super()
        this.state = {
            contacts:[]
        }
    }
    removeContact (data){
        return deleteContactName(data);
    }
    editContact (data){
        return editContactName(data);
    }

    insertData (data){
        insertContact(data);
    }

    render(){
        return (
            <tr>
                <td className='td'>{this.props.contact.id}</td>
                <td className='td'>{this.props.contact.name}</td>
                <td className='td'>{this.props.contact.phone_number}</td>
                <td className='td'>{this.props.contact.age}</td>
                <td><Button 
                    removeContact={this.removeContact} name={this.props.contact.name} reload={this.props.reload}
                    editContact={this.editContact} name={this.props.contact.name} reload={this.props.reload}
                  />
                </td>

            </tr>
        )
    }
}

export default Contact;