import React from 'react';
import './styles.css';
import {initialize} from './PathFindingVisualizer';

export default class PathFindingVisualizer extends React.Component {
    constructor (props){
        super(props);
        this.AStarScript = document.createElement('script');
        this.PathFindScript = document.createElement('script');
    }
    render (){
        return (
            <div id="outer">
        
                 <canvas id="gridCanvas"></canvas>

            
                <form id="setup-form">
                        <div id="positions-box">

                        <div>
                            <label>Starting Position (x,y):</label>
                        </div>

                        <div>
                            <input type="text" id="sxBox" name="sxBox" />
                            <input type="text" id="syBox" name="syBox" />
                            <button id="setStartBtn" className="setbutton" type="button">SET</button><br/><br/>
                        </div>

                        <div>
                            <label>Ending Position (x,y):</label>
                        </div>

                        <div>
                            <input type="text" id="exBox" name="exBox"/>
                            <input type="text" id="eyBox" name="eyBox"/>
                            <button id="setEndBtn" className="setbutton" type="button">SET</button><br/><br/>
                        </div>

                </div>

                <button className= "bigbutton" id="resetButton" type="button">Reset</button><br/><br/>
                <button className="bigbutton" id="runAlgorithmButton" type="button">Run Algorithm</button><br/><br/>
                <label>visualize</label> <input type="checkbox" id="visualizeCheckBox"/>
                <label>keep obsticles</label> <input type="checkbox" id="keepObsticlesCheckBox"/>

            </form> 
            
            </div>
        
        
        );
    }
    componentDidMount(){
        initialize();
    }
}