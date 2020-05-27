import React, { Component } from 'react'

export class Form extends Component {
    state = {
        title: "",
        body: "",
        due_date: ""
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    }

    render() {
        const { title, body, due_date } = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add To Do Item</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            className='form-control'
                            type='text'
                            name='title'
                            onChange={this.onChange}
                            value={title} />
                    </div>
                    <div className='form-group'>
                        <label>To Do</label>
                        <input
                            className='form-control'
                            type='text'
                            name='body'
                            onChange={this.onChange}
                            value={body} />
                    </div>
                    <div className='form-group'>
                        <label>Due On</label>
                        <input
                            className='form-control'
                            type='datetime-local'
                            name='due_date'
                            onChange={this.onChange}
                            value={due_date} />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
