
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';



import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
  } from 'reactstrap';
 class LoginModal extends Component {

    state={
      
        modal:false,
        email:'',
        password:'',
        msg:null
    }

  toggle =()=>{

    //clear errors

    this.props.clearErrors()
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

      const {email,password} = this.state;

      const user={
          email,
          password
      }

      this.props.login(user)
     

    }


    


    //this we r using for displaying errors
    componentDidUpdate=(prevProps)=>{
            const {error,isAuthenticated} = this.props;
            if(error !== prevProps.error)
            {
                //check for register user

                if(error.id === 'LOGIN_FAIL')
                {
                    this.setState({msg:error.msg.msg})
                }
                else
                {
                    this.setState({msg:null})
                }
            } 


            if(this.state.modal)
            {
                 if(isAuthenticated)
                 {
                     this.toggle()
                 }
            }
    }

   
    

  
    render() {
        return (
            <div>
                        <NavLink onClick={this.toggle} href='#'>
                                Login
                        </NavLink>

                       <Modal isOpen={this.state.modal} toggle={this.toggle}>
                            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                            <ModalBody>

                                {this.state.msg ? (<Alert color='danger'>
                                             {this.state.msg}
                                   </Alert>):null}
                           
                            <Form  onSubmit={this.handleSubmit}>
                                <FormGroup>
                               
                                 <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email..."
                                    className='mb-3'
                                    onChange={this.handleChangeName}
                                />

                                 <Label for="password">Password</Label>
                                  <Input
                                    type="pasword"
                                    name="password"
                                    id="email"
                                    className='mb-3'
                                    placeholder="Password..."
                                    onChange={this.handleChangeName}
                                />
                                <Button color="dark" style={{ marginTop: '2rem' }} block>
                                     Login
                                </Button>
                                </FormGroup>
                            </Form>
                            </ModalBody>
                        </Modal>
            </div>
        )
    }
}




  const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        error:state.error 
    }
  }
  


  const mapDispatchToProps = {
    login:login,
    clearErrors:clearErrors
  }
  


export default connect(mapStateToProps,{login,clearErrors})(LoginModal)
// mapStateToProps, {addItem}




