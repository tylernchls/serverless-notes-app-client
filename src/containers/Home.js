import React, { Component } from "react";
import { PageHeader , ListGroup } from 'react-bootstrap';
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: []
    };
  }

  renderNotesList(notes) {
    return null;
  }

  renderLander() {
    return (
      <div className="Lander">
        <h1>Barrel</h1>
        <p>Your own personal cloud storage service</p>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="Notes">
        <PageHeader>Your Files</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>  
    );
  }
}