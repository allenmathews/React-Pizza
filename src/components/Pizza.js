import React, {Component} from "react"
import PizzaForm from "./PizzaForm"

class Pizza extends Component {
  state = {editable: false};
  handleClick = () => {
    this.setState(prevState => ({
      editable: this.state.editable
    }))
}
  render() {
    return (this.state.editable ? 
      <PizzaForm />
       : (
     <tr>
        <td>{this.props.pizza.topping}</td>
        <td>{this.props.pizza.size}</td>
        <td>{this.props.pizza.vegetarian?"true":"false"}</td>
        <td><button type="button" className="btn btn-primary" onClick={this.handleClick}>Edit Pizza</button></td>
      </tr>)
  }
export default Pizza
