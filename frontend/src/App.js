import React from 'react';
import {markdown} from "markdown";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdown: "",
      html: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      html: markdown.toHTML(e.currentTarget.textContent)
    })
    document.getElementById("output").innerHTML = this.state.html
  }

  convertToHtml() {
    markdown.toHTML("Hello *World*")
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="text-center"> Type Markdown text </h1>

        <div contentEditable="true" onInput={this.handleChange} className="mt-5 markdown-container">
          This text can be edited by the user.
        </div>

        <h1 className="text-center"> Output </h1>
        <div id="output"> </div>
      </div>
    );
  }
}
