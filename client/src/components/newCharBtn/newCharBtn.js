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
                <br/>
                <label for="lastname">Lastname</label>
                <input name="lastname" type="text" />
                <br/>
                <label for="email">Email Address</label>
                <input class="text" name="email" type="email" />
                <br/>
                <label for="password">Password</label>
                <input name="password" type="password" />
                <br/>
                <label for="charname">Character Name</label>
                <input name="charname" type="text" />
                <br/>
                <label for="class">Character Class</label>
                <input name="class" type="text" />
                <br/>
                <label for="STR">Strength</label>
                <input name="STR" type="text" />
                <br/>
                <label for="DEX">Dexterity</label>
                <input name="DEX" type="text" />
                <br/>
                <label for="CON">Constitution</label>
                <input name="CON" type="text" />
                <br/>
                <label for="WIS">Wisdom</label>
                <input name="WIS" type="text" />
                <br/>
                <label for="CHA">Charisma</label>
                <input name="CHA" type="text" />
                <br/>
                <input class="btn" type="submit" value="Sign Up" />
            </form>
        </Modal>
      </div>
    );
  }
}
 
export default NewCharBtn;