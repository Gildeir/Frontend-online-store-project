import React, { Component } from 'react';

export default class FormComents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nota: '',
      mensagem: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { handleComents } = this.props;
    handleComents(this.state);
  }

  handleChangeState = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="input-id">
            <input
              type="text"
              name="email"
              id="input-id"
              placeholder="Email"
              onChange={ this.handleChangeState }
            />
          </label>
          <textarea
            name="mensagem"
            id="input-msg"
            placeholder="Mensagem"
            onChange={ this.handleChangeState }
          />
          <button type="button" onClick={ this.handleSubmit }>Avaliar</button>
        </form>
      </div>
    );
  }
}
