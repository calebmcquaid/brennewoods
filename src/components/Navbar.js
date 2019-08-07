import React, { Component } from "react";
import classnames from "classnames";
import App from "../App";
import Portfolio from "../Portfolio";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div>
        <nav
          className={classnames("navbar", {
            "navbar--hidden": !this.state.visible
          })}
        >
          <h2>Brennewoods</h2>
          <div>
            <a href="#">Portfolio Page</a>
            <a href="#">Contact Me</a>
            <a href="#">Shop</a>
          </div>
        </nav>
      </div>
    );
  }
}
