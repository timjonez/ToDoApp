import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToDo } from '../../actions/todo'

export class ToDo extends Component {
    static propTypes = {
        todo: PropTypes.array.isRequired
    }
    render() {
        return (
            <div>
                <h1>This is the todo items comp</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    todo: state.todo.todo
})

export default connect(mapStateToProps)(ToDo);
