import React from 'react';
import { Arrow } from '../Media';
import './styles.css';



class WheelChild extends React.Component {

    onComponentDidMount() {
       
    }

    onComponentWillUnmount() {

    }

    render() {
        return(
            <div className="wheelChildContainer">
                {this.props.children}
            </div>
        )
    }
}

export default class Wheel extends React.Component {
    constructor(props) {
        super(props)
        const wheelChildren = [];
        for (let i = 0; i < this.props.children.length; i++) {
            wheelChildren.push(<WheelChild>{this.props.children[i]}</WheelChild>)
        }
        this.state = {
            wheelChildren: wheelChildren,
            index: 0,
        }
    }

    showPrevious() {
        const currIndex = this.state.index
        const lastIndex = this.state.wheelChildren.length - 1
        const prevIndex = currIndex === 0 ? lastIndex : currIndex - 1
        this.setState({ index: prevIndex })
        
    }

    showNext() {
        const currIndex = this.state.index
        const lastIndex = this.state.wheelChildren.length - 1
        const nextIndex = currIndex === lastIndex ? 0 : currIndex + 1
        this.setState({ index: nextIndex })
        
    }



    render() {
        return (
            <div className="wheelCenteringContainer">
                <div className="wheelContainer">
                    <div className="wheelButtonContainer">
                        <Arrow className="wheelButton" direction="left" onClick={() => { this.showPrevious() }}/>
                    </div>
                    
                        {this.state.wheelChildren[this.state.index]}
                   

                    <div className="wheelButtonContainer">
                        <Arrow className="wheelButton" direction="right" onClick={() => { this.showNext() }} />
                    </div>
                </div>
            </div>
        )
    }
}