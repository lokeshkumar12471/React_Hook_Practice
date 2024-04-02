import React, { Component } from 'react';
import ChildMount from './ChildMount';

class Mount extends Component {
    //React Component LifeCycle Phases(stages).
    // 1.Mounting 2.Updating 3.UnMounting
    //Mounting phase : When a Component renders first time then mounting lifecycle methods called as below
    // 1.Constructor() 2.getDerivedStateFromProps() 3.render() 4.componentDidMount()
    //Updating phase : When a component re-renders then updating lifecycle methods called as below
    // 1.getDerivedStateFromProps() 2.ShouldComponentUpdate() 3.render() 4.getSnapshotBeforeUpdate() 5.componentDidUpdate()
    // Unmounting phase : When a component removed from Dom the unmounting lifecycle methods called .
    //1.componentWillUnmount()


    //Mounting Stage Iam using  Constructor();
    constructor() {
        super();
        this.state = {
            count: 10,
            show: true,
        }
    }
    render() {

        return (
            <div>
                <h6>React Component LifeCycle Phases(stages).
                    1.Mounting 2.Updating 3.UnMounting
                    Mounting phase : When a Component renders first time then mounting lifecycle methods called as below
                    1.Constructor() 2.getDerivedStateFromProps() 3.render() 4.componentDidMount()
                    Updating phase : When a component re-renders then updating lifecycle methods called as below
                    1.getDerivedStateFromProps() 2.ShouldComponentUpdate() 3.render() 4.getSnapshotBeforeUpdate() 5.componentDidUpdate()
                    Unmounting phase : When a component removed from Dom the unmounting lifecycle methods called .
                    1.componentWillUnmount()</h6>
                <h6>This is Parent Component for  Mounting Stage First Method Constructor()</h6>
                {this.state.show && <ChildMount data={this.state.count} />}
                <button onClick={() => { this.setState({ show: false }) }}>Hide</button>
                <button onClick={() => { this.setState({ show: true }) }}>Show</button>
                <button onClick={() => { this.setState({ count: this.state.count + 10 }) }}>Increment</button>
            </div>
        );
    }
}

export default Mount;
