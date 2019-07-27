import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import './images/download.png'
import ButtonExamplePositive from './button.js';

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image circular src={require('./images/download.png')} /> Patrick 
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/girl.jpg')} /> Thuy
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/kid_boy-512.png')} /> Lumi
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/anothergirl.png')} /> Veronica
    <ButtonExamplePositive />
    
  </Header>
)

export default HeaderExampleImage
