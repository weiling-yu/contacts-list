import React from 'react';
import './EditForm.css';
import {editContactName} from '../../util/contacts';

class EditForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            phone_number: '',
            age: ''
        }
    }
    editContact(name){
        editContactName(name).then(()=>{
            this.props.reload();
        })
    }

    render(){
        return(
            <div className="App">
            <h1>Edit Contact</h1>
            <table className='table'>
              <tr>
                {/* <th className="th">ID</th> */}
                <th className="th">Name</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
                <th className="th">Action</th>
              </tr>
            <tr>
                {/* <td className='td_new'><input type='text' id='id' value='readOnly' readOnly ></input></td> */}
                <td className='td_new'><input type='text' id='name' ></input></td>
                <td className='td_new'><input type='text' id='number' ></input></td>
                <td className='td_new'><input type='text' id='age' ></input ></td>
                <td><button className = "button" >Edit</button></td>
            </tr>
            </table>
          </div>
        )
    }
}

export default EditForm;