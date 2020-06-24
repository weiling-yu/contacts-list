import React from 'react';
import "./Flexbox.css";

class Flexbox extends React.Component {
    render(){
        return(
            <div>
                <h1>Flex Start</h1>
                    <div class="container" id="flexstart">
                    <div class="left"></div>
                    <div class="center"></div>
                    <div class="right"></div>
                </div>
                <h1>Flex End</h1>
                    <div class="container" id="flexend">
                    <div class="left"></div>
                    <div class="center"></div>
                    <div class="right"></div>
                </div>
                <h1>Center</h1>
                    <div class="container" id="center">
                    <div class="left"></div>
                    <div class="center"></div>
                    <div class="right"></div>
                </div>
                <h1>Baseline</h1>
                    <div class="container" id="baseline">
                    <div class="left"></div>
                    <div class="center"></div>
                    <div class="right"></div>
                </div>
                <h1>Stretch</h1>
                    <div class="container" id="stretch">
                    <div class="left"></div>
                    <div class="center"></div>
                    <div class="right"></div>
                </div>
            </div>
        )
    }
}

export default Flexbox;