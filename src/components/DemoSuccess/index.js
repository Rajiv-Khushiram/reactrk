import React, {Component } from 'react';
import ButtonExamplePositive from './button';
import SearchExampleCategory from './searchbar';
import './index.scss';

class Success extends Component{
    render(){
        return (
            <div >
                <div className='searchbar'><SearchExampleCategory /></div>
                <div><h1 className='assignmentheader'>Assignment 1: APPLE</h1></div>
                <hr/>
                <div className='text'> 
                    <h1 >Congratulations! You have finished all of the required steps </h1>
                    <ButtonExamplePositive />
                </div>
                <hr/>
            </div>
        )
    }

}

export default Success;