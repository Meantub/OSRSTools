import React, {Component} from 'react';
import ReactTable from 'react-table';
import ReactLoading from 'react-loading';

export default class XPCalculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columns: null,
            userData: localStorage.getItem('userData')
        }
    }

    componentWillMount() {
    }

    render() {
        return (
            <div>
                {this.state.data !== null ? 
                <ReactTable data={this.state.data} columns={this.state.columns} /> : 
                <ReactLoading type="bars" color="#878787" height="8rem" width="8rem" />}
            </div>
        );
    }
}