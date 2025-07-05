import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor is called");
    super(props);
    console.log(props);
    this.state = { userInfo: {} };
  }

  render() {
    console.log("Render is called");
    console.log(this.state.userInfo);
    this.timer = setInterval(() => {
      console.log("Logging some random thing");
    }, 1000);
    const { name, company, blog } = this.state.userInfo;
    return (
      <div>
        <h2> {name}</h2>
        <h2> {company}</h2>
        <h2> {blog}</h2>
      </div>
    );
  }

  async componentDidMount() {
    console.log("componentDidMount is called");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount is called");
  }
}

export default UserClass;
