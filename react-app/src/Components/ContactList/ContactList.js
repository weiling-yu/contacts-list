import React from "react";
import "./Contact.css";
import Contact from "../Contact/Contact";

class ContactList extends React.Component {
    render(){
        return(
            <div className="ContactList">
                {this.props.contacts.map( contact =>{
                    return <Contact key={contact.id} contact={contact}/>
                })}
            </div>
        )
    }
}
export default ContactList;
// in App, create a dynamic businesses list using array and, pass it as a property in businessList instance
// in BusinessList, map through array return Business component