import React, { Component } from "react";
import makeRequest from "./Utils";
import Loader from "react-loader-spinner";

class CreateForumTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      showTextFailed: false,
      showErrorMessage: false,
      showSuccessMessage: false,
      isLoading: false
    };
  }

  handleValueChanged = event => {
    this.setState({ value: event.target.value });
  };

  validateTitle = () => {
    if (this.state.value.length === 0) {
      this.setState({ showTextFailed: true });
    } else {
      this.setState({ showTextFailed: false });
    }
  };

  handleCreateForumClicked = event => {
    event.preventDefault();
    const { forumTitle } = event.target;
    if (forumTitle.value.length === 0) {
      this.setState({ showErrorMessage: true });
      return;
    }
    const message = { title: forumTitle.value };
    this.setState({ isLoading: true });
    makeRequest(
      JSON.stringify(message),
      "post",
      "/api/forum/",
      this.handleResponse
    );
  };

  handleResponse = json => {
    this.setState({
      value: "",
      showErrorMessage: false,
      showSuccessMessage: true,
      isLoading: false
    });
  };

  setError = isError => {
    if (isError) {
      return "error-input";
    }
    return "";
  };

  render() {
    const {
      showTextFailed,
      showErrorMessage,
      showSuccessMessage,
      isLoading,
      value
    } = this.state;
    return (
      <div id="forum-form-outer">
        <form id="forum-form" onSubmit={this.handleCreateForumClicked}>
          <textarea
            id="forum-text"
            className={this.setError(showTextFailed)}
            placeholder="Тема для обсуждения"
            name="forumTitle"
            value={value}
            onChange={this.handleValueChanged}
            onBlur={this.validateTitle}
          />
          <div className="button button-container orange-background">
            <input
              id="forum-button"
              className="button white-color"
              type="submit"
              value="Создать"
            />
            {isLoading ? (
              <Loader
                className="button-loader"
                type="Rings"
                color="white"
                height={40}
                width={50}
                timeout={100000}
              />
            ) : null}
          </div>
        </form>
        {showSuccessMessage ? (
          <h3 className="small-size-text white-color footer-message forum-message">
            Ваш форум создан!
          </h3>
        ) : null}
        {showErrorMessage ? (
          <h3 className="small-size-text white-color footer-message forum-message">
            Все поля должны быть заполнены!
          </h3>
        ) : null}
      </div>
    );
  }
}

export default CreateForumTitle;
