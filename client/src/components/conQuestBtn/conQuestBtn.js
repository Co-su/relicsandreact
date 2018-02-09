import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
 
export class ConQuestBtn extends React.Component {
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
        <button onClick={this.onOpenModal}>Continue Your Quest!</button>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>Sign in to continue your Quest!</h2>
            <form id="signup" name="signup" method="get" action="/hubworld">
                <label for="email">Email Address</label>
                <input class="text" name="email" type="email" />
                <br/>
                <label for="password">Password</label>
                <input name="password" type="password" />
                <br/>
                <input class="btn" type="submit" value="Sign In" />
            </form>
        </Modal>
      </div>
    );
  }
}
 
export default ConQuestBtn;