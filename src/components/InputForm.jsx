import React, { useState } from "react";
import { Form } from "react-bootstrap";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

const InputForm = (props) => {
  const [description, setDescription] = useState("");
  
  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      description: description,
      id: uniqid(),
      completed: false
    };

    console.log(todo);
    props.addTodo(todo);
    setDescription("");
  };

  return (
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="New task..."
          value={description}
          onChange={handleChange}
        />
        <Form.Control type="submit" />
      </Form>
    );
}

// class InputForm extends Component {
//   state = {
//     description: ""
//   };

  // handleChange = (event) => {
  //   this.setState({ description: event.target.value });
  // };

  // handleSubmit = (event) => {
  //   event.preventDefault();

  //   const todo = {
  //     description: this.state.description,
  //     id: uniqid(),
  //     completed: false
  //   };

  //   console.log(todo);
  //   this.props.addTodo(todo);
  //   this.setState({ description: "" });
  // };

//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Control
//           type="text"
//           placeholder="New task..."
//           value={this.state.description}
//           onChange={this.handleChange}
//         />
//         <Form.Control type="submit" />
//       </Form>
//     );
//   }
// }

export default connect((s) => s, mapDispatchToProps)(InputForm);
