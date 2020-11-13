
import React, { Component } from 'react'
import { connect } from 'react-redux';

import {addItem} from '../actions/itemsActions'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
 class ItemModal extends Component {

    state={
        name:"",
        modal:false
    }

  toggle =()=>{
      this.setState({
          modal:!this.state.modal
      })
  }

  handleChangeName=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
  }

  handleSubmit=(e)=>{
      e.preventDefault()

      const newItem={
         
          name:this.state.name
      }

      this.props.addItem(newItem)


      //close modal

      this.toggle()

  }
    render() {
        return (
            <div>
                {
                    this.props.isAuthenticated?  <Button
                       
                    color="dark"
                   style={{ marginBottom: '2rem' }}
                   onClick={this.toggle}
                  
                  >
                          Add Item
                     </Button>: <h4 className='mb-3 ml-4'>Please Login...</h4>
                }
                      

                       <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                            <ModalBody>
                           
                            <Form  onSubmit={this.handleSubmit}>
                                <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add shopping item"
                                    onChange={this.handleChangeName}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                    Add Item
                                </Button>
                                </FormGroup>
                            </Form>
                            </ModalBody>
                        </Modal>
            </div>
        )
    }
}

// export default ItemModal



const mapStateToProps = (state) => {
    // console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
         
    }
  }



// export default connect(null, {addItem})(ItemModal)

export default connect(mapStateToProps, {addItem})(ItemModal)

// mapStateToProps, {addItem}