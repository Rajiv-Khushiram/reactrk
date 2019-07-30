import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import './images/download.png'
import ButtonExamplePositive from './button.js';

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image circular src={require('./images/download.png')} /> Rajiv 
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/girl.jpg')} /> Rashil
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/kid_boy-512.png')} /> Thuy
    <ButtonExamplePositive />
    <br/>
    <Image cicular src={require('./images/anothergirl.png')} /> Trung
    <ButtonExamplePositive />
    
  </Header>
)

export default HeaderExampleImage
