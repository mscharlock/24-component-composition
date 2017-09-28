import React from 'react';
import uuid from 'uuid/v4';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    //Bind things//
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  noteMaker(string) {
    let note = {
      id: uuid(),
      editing: false,
      completed: false,
      content: string,
    };
    this.setState(prevState => ({
      notesArr: [...prevState.notesArr, note],
    })
  );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleNoteMaker(this.state.content);
  }

  componentDidUpdate() {
    console.log('__APP_STATE_FROM_DASH__', this.props.app.state);
  }

  render() {
    return (
      <div className ="note-container">
        <h2>Yay notes</h2>
        <form
          className = "note-create-form"
          onSubmit = {this.handleSubmit}>

        <input
          type = "text"
          name = "content"
          placeholder = "Write a note here! YEAH"
          value = {this.state.content}
          onChange = {this.handleChange}/>

          <button type="submit">Click!</button>
        </form>
      </div>
    );
  }
}

export default NoteCreateForm;
