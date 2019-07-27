import React, {Component } from 'react';
import './tasks.css';
class Tasks extends Component{
    render(){
        return (
            <div className="TaskBackground">
                <input className="AssignmentInput" type="text" value="Search for Assignment"/>
                <h3>Assignment 1: APPLE</h3>
                <hr/>
                <p><strong>Due</strong> 11 Aug by 23:59</p>
                <hr/>
                <p>
                    Instead, it will copy all the configuration files and the 
                    transitive dependencies (Webpack, Babel, ESLint, etc) right 
                    into your project so you have full control over them. All of 
                    the commands except eject will still work, but they will point 
                    to the copied scripts so you can tweak them. At this point 
                    you’re on your own.
                </p>
                <h2>PICK YOUR INITIAL TASK</h2>
                <a href="http://localhost:3000/questions">
                <div className="AssignmentTask">
                
                    <div className="AssignmentIcon">
                        <img src="/images/computer.png" alt="computer icon"/>
                    </div>
                    <div className="AssignmentContent">
                        <strong>Task 1 - Specifycation</strong>
                        <p>
                            depending on the scroll position. It is positioned relative 
                            until a given offset position is met in the viewport - then 
                            it "sticks" in place
                        </p>
                        <button type="button">Read More</button>
                    </div>
                
                </div>
                </a>
                <a href="http://localhost:3000/questions">
                <div className="AssignmentTask">
                    <div className="AssignmentIcon">
                        <img src="./images/computer.png" alt="computericon"/>
                    </div>
                    <div className="AssignmentContent">
                        <strong>Task 2 - Specifycation</strong>
                        <p>
                            depending on the scroll position. It is positioned relative 
                            until a given offset position is met in the viewport - then 
                            it "sticks" in place
                        </p>
                        <button type="button">Read More</button>
                    </div>
                </div>
                </a>
                <a href="http://localhost:3000/questions">
                <div className="AssignmentTask">
                    <div className="AssignmentIcon">
                        <img src="/images/computer.png" alt="computer icon"/>
                    </div>
                    <div className="AssignmentContent">
                        <strong>Task 3 - Specifycation</strong>
                        <p>
                            depending on the scroll position. It is positioned relative 
                            until a given offset position is met in the viewport - then 
                            it "sticks" in place
                        </p>
                        <button type="button">Read More</button>
                    </div>
                </div>
                </a>
            </div>
        )
    }

a}

export default Tasks;