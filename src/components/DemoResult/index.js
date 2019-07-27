import React, {Component } from 'react';
import SearchExampleCategory from './searchbar';
import './result.scss'
import HeaderExampleImage from './image.js';

class Result extends Component{
    render(){
        return (
            <div>
            
                <div className='searchbar'><SearchExampleCategory /></div>
                <div><h1 className='assignmentheader'>Assignment 1: APPLE</h1></div>
                <hr/>
                <div className='randomtext'>
                    <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
                    <p> Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
                         Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>
 
                </div>
                <h2 className='teamSugesstion'> Team Suggesstion</h2>
                <div>
                <div className='suggestionArea'>
                    <HeaderExampleImage  />
                </div>
                </div>
                <hr/>
            </div>
        )
    }

}

export default Result;