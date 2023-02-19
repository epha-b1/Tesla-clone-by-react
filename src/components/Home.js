import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Containor>
      <Section
        title='Model -s'
        description = 'Order Online for Touchless Delivery'
        backgroundImg='model-s.jpg'
        leftBtnText='Custom order'
        rightBtnText = 'Existing inventory'
      />
      
      <Section
        title='Model Y'
        description = 'Order Online for Touchless Delivery'
        backgroundImg='model-y.jpg'
        leftBtnText='Custom order'
        rightBtnText = 'Existing inventory'
      />
      
      <Section
        title='Model X'
        description = 'Order Online for Touchless Delivery'
        backgroundImg='model-x.jpg'
        leftBtnText='Custom order'
        rightBtnText = 'Existing inventory'
      />
       
      <Section
        title="Cost Solar Panels in America"
        description = 'Money—back guarantee'
        backgroundImg='solar-panel.jpg'
        leftBtnText='Order now'
        rightBtnText = 'Learn more'
      />        
      
      <Section
        title="Solar for New Roofs"
        description = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
        backgroundImg='solar-roof.jpg'
        leftBtnText='Order now'
        rightBtnText = 'Learn more'
      />  

      <Section
        title="Accessories"
        description = ""
        backgroundImg='accessories.jpg'
        leftBtnText='Shop now'
      />        
            
    </Containor>
  )
}

export default Home

const Containor = styled.div`
  height:100vh;
`
