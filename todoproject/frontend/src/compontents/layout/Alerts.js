import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'



export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props
        if (error !== prevProps.error) {
            if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
            if (error.msg.body) alert.error(`Body: ${error.msg.body.join()}`);
            if (error.msg.due_date) alert.error(`Body: ${error.msg.due_date.join()}`);
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
        }

    }
    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));