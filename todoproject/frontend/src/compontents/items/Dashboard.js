import React, { Fragment } from 'react';
import Form from './Form';
import ToDo from './ToDo';
import { Fragment } from 'react';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <ToDo />
        </Fragment>
    )
}