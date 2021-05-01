import React from "react";

export default class Starwarspeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }
  async componentDidMount() {
    await this.loadData();
  }

  render() {
    return (
      <table>
        <tr>
          <td>name</td>
          <td>mass</td>
          <td>hair_color</td>
          <td>skin_color</td>
          <td>eye_color</td>
          <td>birth_year</td>
          <td>gender</td>
        </tr>
        {this.state.characters.map((char) => this.renderRow(char))}
      </table>
    );
  }

  renderRow = (value) => {
    return (
      <tr>
        <td>{value.name}</td>
        <td>{value.mass}</td>
        <td>{value.hair_color}</td>
        <td>{value.skin_color}</td>
        <td>{value.eye_color}</td>
        <td>{value.birth_year}</td>
        <td>{value.gender}</td>
      </tr>
    );
  };

  async loadData() {
    const response = await fetch("https://swapi.dev/api/people/");
    const parsedResponse = await response.json();

    this.setState({
      characters: parsedResponse.results || [],
    });
  }
}
