import React, {Component } from 'react';
import { Button } from 'semantic-ui-react';


class Questions extends Component{
    render(){
        return (
            <div className="TaskBackground">
                <input className="AssignmentInput" type="text" value="Search for Assignment"/>
                <h3>Assignment 1: APPLE</h3>
                <hr/>
                <p><strong>Due</strong> 11 Aug by 23:59</p>
                <hr/>
                <br/>
                <p>
                    Instead, it will copy all the configuration files and the 
                    transitive dependencies (Webpack, Babel, ESLint, etc) right 
                    into your project so you have full control over them. All of 
                    the commands except eject will still work, but they will point 
                    to the copied scripts so you can tweak them. At this point 
                    you’re on your own.
                </p>
                <h2>TASK 1</h2>
                <p>
                Instead, it will copy all the configuration files and the transitive 
                dependencies (Webpack, Babel, ESLint, etc) right into your project so 
                you have full control over them. All of the commands except eject will 
                still work, but they will point to the copied scripts so you can tweak them. 
                At this point you’re on your own.
                <br/><br/>
                You don’t have to ever use eject. The curated feature set is suitable 
                for small and middle deployments, and you shouldn’t feel obligated to use 
                this feature. However we understand that this tool wouldn’t be useful if you 
                couldn’t customize it when you are ready for it.
                <br/>
                <input className="AssignmentInput" type="text" value="choose"/>
                <Button size='medium'>Upload</Button>
                </p>
                <div className="btSubmit">
                    <button type="submit">Next</button>
                </div>
            </div>
        )
    }

}

export default Questions;