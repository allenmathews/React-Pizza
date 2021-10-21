import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  state = {
    pizzas: null
  }
  componentDidMount() {
    fetch('http://localhost:3000/pizzas') 
    .then( (res) => res.json())
    .then( (data) => this.setState({
      pizzas: data
    }))
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.state.pizzas?
            this.state.pizzas.map((pizza) => <Pizza pizza={pizza} />): <h2>no pizzas available</h2>
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
