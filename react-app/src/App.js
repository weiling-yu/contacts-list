import React from 'react';
import './App.css';
import { getContacts, deleteContactName, insertContact, editContactName, deleteAllContatcs, deleteContactId } from './util/contacts';
import Contact from './Components/Contact/Contact';
import NewContact from './Components/NewContact/NewContacts';

let contact = {
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
let contacts = [];

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      readOnly: true,
      disabled: true,                                                  
      contacts: [],
      deleteIds: []
    }
    this.getContacts = this.getContacts.bind(this);
    this.deleteContactName = this.deleteContactName.bind(this);
    this.editContactName = this.editContactName.bind(this);
    this.insertContact = this.insertContact.bind(this);
    this.reload = this.reload.bind(this);
    this.deleteAllContatcs = this.deleteAllContatcs.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.deleteContactId = this.deleteContactId.bind(this);
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    let contactsData = getContacts().then(data => {
      this.setState({
        contacts: data
      });
    });    
  }

  insertContact() {
    let insered = insertContact().then(data =>{
      this.setState({
        contacts: data
      })
    })
  }

  deleteContactName() {
    let deletedName = deleteContactName().then(data => {
      this.setState({
        contacts: data
      });
    })
  }

  deleteContactId() {
    for (let i = 0; i < this.state.deleteIds.length; i++){
      let deletedId = deleteContactId().then(data => {
        this.setState({
          contacts: data
        });
      })
    }
  }


  deleteAllContatcs(data){
    deleteAllContatcs(data).then(()=>{
        this.reload();
    });
  }

  handleDeleteAll(){
      if (window.confirm('Are you sure you want to remove all the contatcs?')) {
          this.deleteAllContatcs(this.state.contacts);
      }
  }

  editContactName() {
    let editContact = editContactName().then(data =>{
      this.setState({
        contacts: data
      }).then(()=>{
        this.reload();
      })
     
    })
  }

  reload() {
    this.getContacts();
  }

  addDeleteId(id){
    let deleteIdsLocal = this.state.deleteIds;
    deleteIdsLocal.push(id);
    this.setState({
      deleteIds: deleteIdsLocal
    });
  }

  removeDeleteId(){
    // do later
  }
  


  render () {

    return (
    <div className="App">
      <h1>Contact List App</h1>
      <table className='table table-striped table-contacts'>
        <thead>
        <tr className='thead-dark'>
          <th className="text-center" id="id"></th>
          <th className="text-center" id="id">ID</th>
          <th className='text-center' id='fullName'>Full Name</th>
          <th className='text-center' id='email'>Email</th>
          <th className='text-center' id='phone_number'>Phone</th>
          <th className='text-center' id='address'>Address</th>
          <th className='text-center' id='birthDay'>Birth Day</th>
          <th className="text-center" id="gender">Gender</th>
          <th className="text-center" id="county">Country</th>
          <th className='text-center' id='action'>Action</th>
        </tr>
        </thead>
        
        <tbody>
          {this.state.contacts.map(c=>{ return<Contact contact={c} addDeleteId={this.addDeleteId.bind(this)} reload={this.reload} key={c.id} /> })}
        </tbody>
        
    </table>
    <div style={{marginLeft: "30 px"}}>
      <button className = "btn btn-light" onClick={this.handleDeleteAll}>Delete All</button>
      <button className = "btn btn-light" onClick={this.handleDeleteSelected}>Delete Selected</button>
    </div>
      
      <NewContact reload={this.reload}/>
    </div>


    );
  }

};

export default App;
