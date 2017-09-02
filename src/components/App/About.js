import React, { Component } from 'react'

class About extends Component {
  state = { sunset: null }

  async componentDidMount() {
    const sunset = await import('../../static/images/sunset.jpg')
    this.setState({ sunset: <img src={sunset} alt="sunset" /> })
  }

  render() {
    return (
      <div>
        Boring example but for me to find out how it works

        {this.state.sunset || <h1>Loading...</h1>}
      </div>
    );
  }
}

export default About
