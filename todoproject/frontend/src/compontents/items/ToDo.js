import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getToDo } from '../../actions/todo'

export class ToDo extends Component {
    static propTypes = {
        todo: PropTypes.array.isRequired
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
                                <td>{todo.title}</td>
                                <td>{todo.body}</td>
                                <td>{todo.due_date}</td>
                                <td>
                                    <button className='btn btn-danger btn-sm'>Check off</button>
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

export default connect(mapStateToProps, { getToDo })(ToDo);
