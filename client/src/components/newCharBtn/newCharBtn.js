import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
 
export class NewCharBtn extends React.Component {
  state = {
    open: false,
  };
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Create a New Character here!</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Complete this form to get started</h2>
            <form id="signup" name="signup" method="get" action="/hubworld">

                <label for="firstname">Firstname</label>
                <input name="firstname" type="text" />
                
                <label for="lastname">Lastname</label>
                <input name="lastname" type="text" />
                
                <label for="email">Email Address</label>
                <input class="text" name="email" type="email" />
                
                <label for="password">Password</label>
                <input name="password" type="password" />
                
                <label for="charname">Character Name</label>
                <input name="charname" type="text" />
                
                <input class="btn" type="submit" value="Sign Up" />
            </form>
        </Modal>
      </div>
    );
  }
}
 
export default NewCharBtn;