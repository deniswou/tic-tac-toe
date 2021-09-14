import React, { Component } from 'react';
import './footer.css';

class footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://twitter.com/woubeats" target="_blank" rel="noreferrer noopener">
          Twitter
        </a>
        {" "}
        <a href="https://github.com/deniswou" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </footer>
    );
  }
}

export default footer;