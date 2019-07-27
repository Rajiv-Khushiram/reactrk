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
                <div className='randomtext'>
                    <p> Due date: 27 June by 20:29 Points: 8500 Submission: None</p>
                    <p> Thuy that la hai huoc va xinh dep nua hihi. Hi vong giam khao se cham bai nay diem that caoooooo
                         Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. </p>
 
                </div>
                <div className='text'> 
                    <h1 >Congratulations! You have finished all of the required steps </h1>
                    <a href="/result"><ButtonExamplePositive /></a>
                </div>
                <hr/>
            </div>
        )
    }

}

export default Success;