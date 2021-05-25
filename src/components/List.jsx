import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleted } from "../store/actions";
// import { Button } from "react-bootstrap";
// import { connect } from "react-redux";

// const mapDispatchToProps = (dispatch) => ({
//   toggleCompleted: (id) => dispatch(toggleCompleted(id)),
//   reset: () => dispatch(reset())
// });

const List = (props) => {

  const list = useSelector(state => state.list)
  const dispatch = useDispatch()

    return (
      <>
        <ul>
          {list && list.map((todo) => (
            <li
              key={todo.id}
              onClick={() => dispatch(toggleCompleted(todo))}
              className={todo.completed ? 'strikethrough' : ''}
            >
              {todo.description}
            </li>
          ))}
        </ul>
      </>
    );
}

export default List
