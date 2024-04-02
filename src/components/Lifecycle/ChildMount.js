import React, { Component } from 'react'

class ChildMount extends Component {
    constructor(props) {
        super(props)
        console.log('inside constructor');
        this.state = {
            childnumber: + this.props.data + 10,
            product: "Dummy",
        }
    }
    static getDerivedStateFromProps(props, state) {
        console.log('inside derived');

        return {
            childnumber: + props.data + 10,
        }
    }
    shouldComponentUpdate() {
        console.log('inside should component update');
        return true;
    }
    componentDidMount() {
        console.log('inside Did mount ');

        fetch('http://fakestoreapi.com/products/1').then(res => res.json()).then(json => { console.log(json); this.setState({ ...this.state, product: json.title }) })
    }
    getSnapshotBeforeUpdate() {
        console.log('Inside get snapshot');
        return null;
    }
    componentDidUpdate() {
        console.log('API calls Async calls, Inside Did Update');
    }
    componentWillUnmount() {
        console.log('Inside  Unmount');
    }
    render() {
        console.log('inside render');

        return (
            <div>
                <h6>This is Child Component for  Mounting Stage  second Method getDerivedStateFromProps()</h6>
                <h5>Passed data by Parent Component : {this.props.data}</h5>
                <h5>This is Child Component : {this.state.childnumber}</h5>
                <h5>This is componentDidMount : {this.state.product}</h5>
            </div>
        )
    }
}

export default ChildMount;