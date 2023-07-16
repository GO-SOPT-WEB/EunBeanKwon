import React from 'react'
import PageLayout from './PageLayout'
import { styled } from 'styled-components'

const Error = () => {
  return (
    <div>
    <PageLayout>
        <St.Error>
            <h1>
                Error 404 
            </h1>
            <p>
                주소가 잘못되진 않았나요?
            </p>
        </St.Error>
    </PageLayout>
    </div>
  )
}

export default Error


const St = {
    Error : styled.div `
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60vh;
    
    h1 {
        font-size:10rem;    
    }

    p {
        font-size: 4rem;
    }
    `
}