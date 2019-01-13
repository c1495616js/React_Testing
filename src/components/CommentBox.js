import React from 'react';

class CommentBox extends React.Component {
  state = { comment: ''};
  handleChange = (event) => {
    this.setState({comment: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    // TODO

    this.setState({ comment: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment}/>
          <div>
            <button >Submit Comment</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CommentBox;