import React from "react";
import "./Contact.css";
import { getContacts ,deleteContactName, editContactName, deleteContactId} from '../../util/contacts';



class Contact extends React.Component {
    constructor(){
        super();
        //console.log(this.props);
        this.state = {
            readOnly: true,
            disabled: true,
            check: '',
            id: '',
            full_name: '',
            email: '',
            phone_number: '',
            address : '',
            dob_dd: '',
            dob_mm: '',
            dob_yy: '',
            gender: '', 
            country: '',
        }
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.hadleCancelClick = this.hadleCancelClick.bind(this);
        this.handleDeleteSelected = this.handleDeleteSelected.bind(this);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this); 
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    //React Method
    componentWillMount (){
        this.setState({
            id: this.props.contact.id,
            full_name: this.props.contact.full_name,
            email: this.props.contact.email,
            phone_number: this.props.contact.phone_number,
            address : this.props.contact.address,
            dob_dd: this.props.contact.dob_dd,
            dob_mm: this.props.contact.dob_mm,
            dob_yy: this.props.contact.dob_yy,
            gender: this.props.contact.gender,
            country: this.props.contact.country,
        });
    }
    removeContact(data){
        deleteContactName(data).then(()=>{
            this.props.reload();
        })
    }
    
    removeSelectedContatcs(data){
        deleteContactId(data).then(()=>{
            this.props.reload();
        })
    }
    handleCheckbox(e){
        this.setState({
            check: e.target.checked
        });
        this.props.addDeleteId(this.props.contact.id);
    }

    handleDeleteSelected(){
        if(window.confirm('Are you sure you want to delete the contacts you selected?')){
          this.deleteContactId(this.state.contatc.id);
        }
      }
    
    editContact(id, full_name, email, phone_number, address, dob_dd, dob_mm, dob_yy, gender, country) {
        // console.log(id, full_name, email, phone_number, address, birthday);
        // editContactName(1, 'a', 'a', 'a', 'a', 'a');
        editContactName(id, full_name, email, phone_number, address, dob_dd, dob_mm, dob_yy, gender, country).then(()=>{
            this.props.reload();
        })
    }

    handleEditClick(){
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
        });
    }
    handleSaveClick(){
        this.editContact(this.state.id, this.state.full_name, this.state.email, this.state.phone_number, this.state.address, this.state.dob_dd, this.state.dob_mm, this.state.dob_yy, this.state.gender, this.state.country);
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
        });
    }
    hadleCancelClick(){
        this.setState({
            readOnly: !this.state.readOnly,
            disabled: !this.state.disabled,
            id: this.props.contact.id,
            full_name: this.props.contact.full_name,
            email: this.props.contact.email,
            phone_number: this.props.contact.phone_number,
            address : this.props.contact.address,
            dob_dd: this.props.contact.dob_dd,
            dob_mm: this.props.contact.dob_mm,
            dob_yy: this.props.contact.dob_yy,
            gender: this.props.contact.gender,
            country: this.props.contact.country,
        })
        this.props.reload();
    }

    // handle input change methods
    handleNameChange(e){
        this.setState({
            full_name: e.target.value,
        });
    }
    handleEmailChange(e){
        this.setState({
            email: e.target.value
        });
    }
    handlePhoneChange(e){
        this.setState({
            phone_number: e.target.value,
        });
    }
    handleAddressChange(e){
        this.setState({
            address: e.target.value,
        });
    }
    handleDayChange(e){
        this.setState({
            dob_dd: e.target.value,
        });
    }
    handleMonthChange(e){
        this.setState({
            dob_mm: e.target.value,
        });
    }
    handleYearChange(e){
        this.setState({
            dob_yy: e.target.value,
        });
    }
    handleGenderChange(e){
        this.setState({
            gender: e.target.value,
        })
    }
    handleCountryChange(e){
        this.setState({
            country: e.target.value,
        })
    }

    handleRemoveClick() {

    }


    render(){
        // render not JS
        // return JSX
        let readOnly=this.state.readOnly;
        let disabled=this.state.disabled;
        let buttons;
        if (readOnly) {
            buttons = (
                <div>
                    <button className = "btn btn-light" onClick={this.handleRemoveClick}>Remove</button>
                    <button className = "btn btn-light" onClick={this.handleEditClick}>Edit</button>
                </div>
            );
        } else {
            buttons = (
                <div>
                    <button className = "btn btn-light" onClick={this.handleSaveClick}>Save</button>
                    <button className = "btn btn-light" onClick={this.hadleCancelClick}>Cancel</button>
                </div>
            );
        }

        return ( 
               <tr className='text-center'>
                    <td id='checkbox'><input type='checkbox' id={this.state.id} onChange={this.handleCheckbox}></input></td>
                    <td id="id"><input className="readOnly text-center" type="text" value={this.state.id} readOnly={readOnly}></input></td>
                    <td id='fullName'><input className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.full_name} readOnly={readOnly} onChange={this.handleNameChange}></input></td>
                    <td id='email'><input className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.email} readOnly={readOnly} onChange={this.handleEmailChange}></input></td>
                    <td id='phone'><input className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.phone_number} readOnly={readOnly} onChange={this.handlePhoneChange}></input></td>
                    <td id='address'><input className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.address} readOnly={readOnly} onChange={this.handleAddressChange}></input></td>
                    
                    <td ><input id='dob_dd' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_dd} readOnly={readOnly} onChange={this.handleDayChange} maxLength='2'></input>
                        <input id='dob_mm' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_mm} readOnly={readOnly} onChange={this.handleMonthChange} maxLength='2'></input>
                        <input id='dob_yy' className={this.state.readOnly ? 'readOnly text-center' : ''} type='text' value={this.state.dob_yy} readOnly={readOnly} onChange={this.handleYearChange} maxLength='4'></input>
                    </td>
                    
                    <td id="gender">
                        <select name="gender" className={this.state.disabled ? 'disabled' : ''} type='text' value={this.state.gender} disabled={disabled} onChange={this.handleGenderChange}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </td>
                    <td>
                        <select name='country' className={this.state.disabled ? 'disabled' : ''} type='text' value={this.state.country} disabled={disabled} onChange={this.handleCountryChange}>
                            <option value='taiwan'>Taiwan</option>
                            <option value='chile'>Chile</option>
                        </select>
                    </td>
                    <td>
                        {buttons}
                    </td>
               </tr>
        );
    }
}

export default Contact;