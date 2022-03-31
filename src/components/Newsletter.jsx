import { Send } from '@material-ui/icons'
import React from 'react'

const Newsletter = () => {
  return (
    <Container>
        <Title></Title>
        <Description></Description>
        <InputContainer>
           <Input/>
           <Button>
               <Send/>
            </Button> 
        </InputContainer>
    </Container>
  )
}

export default Newsletter