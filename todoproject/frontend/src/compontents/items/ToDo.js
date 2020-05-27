import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToDo, deleteToDo } from '../../actions/todo'

export class ToDo extends Component {
    static propTypes = {
        todo: PropTypes.array.isRequired,
        getToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getToDo();
    }
    render() {
        return (
            <Fragment>
                <h1>My To Do</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>To Do</th>
                            <th>Due on</th>
                            <th>Created on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.todo.map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.body}</td>
                                <td>{todo.due_date}</td>
                                <td>
                                    <button
                                        className='btn btn-danger btn-sm'
                                        onClick={this.props.deleteToDo.bind(this, todo.id)}
                                    >Check off</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    todo: state.todo.todo
})

export default connect(mapStateToProps, { getToDo, deleteToDo })(ToDo);
