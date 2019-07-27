import React, {Component } from 'react';
import SearchExampleCategory from './searchbar';
import './result.scss'
import HeaderExampleImage from './image.js';
import ButtonExamplePositive from './button.js';

class Result extends Component{
    render(){
        return (
            <div>
            
                <div className='searchbar'><SearchExampleCategory /></div>
                <div><h1 className='assignmentheader'>Assignment 1: APPLE</h1></div>
                <hr/>
                <h2 className='teamSugesstion'> Team Suggesstion</h2>
                <div>
                <div className='suggestionArea'>
                    <HeaderExampleImage  />
                </div>
                </div>
                <div className='messageButton'>
                    <ButtonExamplePositive />
                </div>
                <hr/>
            </div>
        )
    }

}

export default Result;