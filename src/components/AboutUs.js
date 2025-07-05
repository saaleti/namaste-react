import React from "react";
import UserClass from "./UserClass";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("AboutUs Constrctor called");
  }

  render() {
    console.log("AboutUs render called");
    return (
      <div>
        <h1> About Us</h1>
        <h2> This is Namste React Bootcamp</h2>
        <UserClass />
      </div>
    );
  }

  async componentDidMount() {
    console.log("AboutUs componentDidMount called");
  }
}

export default AboutUs;
