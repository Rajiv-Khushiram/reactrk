import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import './images/download.png'

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image circular src={require('./images/download.png')} /> Patrick
    <Image cicular src={require('./images/girl.jpg')} /> Thuy
    <Image cicular src={require('./images/kid_boy-512.png')} /> Lumi
    <Image cicular src={require('./images/anothergirl.png')} /> Veronica
  </Header>
)

export default HeaderExampleImage
