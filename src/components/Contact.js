import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeContact } from '../redux/contactActions'
import { editContact } from '../redux/contactActions'
import { Button } from 'reactstrap';

const Contact = (props) => {
  return (
      <tr>
      <td>{props.contact.name} <img src={props.contact.photo_url} alt=""></img> </td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td>{props.contact.company}</td>
      <td>{props.contact.address}</td>
      <td>
      <Button onClick={() => props.removeContact(props.contact.id)}>Delete</Button>
      </td>
      <td>
      <Button onClick={() => props.editContact(props.contact.id)}>Edit</Button>
      </td>
    </tr>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  removeContact,
  editContact
}, dispatch)

export default connect(null, mapDispatchToProps)(Contact)