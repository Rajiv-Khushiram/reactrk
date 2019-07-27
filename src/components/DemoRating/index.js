import React, {Component } from 'react'
import SearchExampleCategory from './searchbar.js'
import './rating.scss'
import SkillComponent from './SkillComponent'
import ButtonRed from './button.js'

class Rating extends Component{
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
                <h2 className='header'> Please Choose How Petent You Are With These Skills</h2>
                <h3 className='technicalskill'> Technical skills</h3>
                <div className='ratingSkills'><SkillComponent /> </div>
                <br />
                <a href="/tasks"><div className='button'><ButtonRed/></div></a>
            </div>
        )
    }

}

export default Rating;