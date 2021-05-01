import'./App.css';

import React from 'react';
import { findByPlaceholderText } from '@testing-library/react';

export default class Alert extends React.Component{
render(){
    return(
    <div>{this.props.count>60?"Peligro! la cantidad de segundos ha excedido el límte!!!":
    ""}</div>);
}
async loadData(){
    const response=await fetch("https://swapi.dev/api/people/");
    const parsedResponse=await response.json();
    this.setState({
        characters: parsedResponse.result || []
    })
}
}