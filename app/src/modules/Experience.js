import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  margin-bottom: 15px;
`

const Heading = styled.h3`
  color: darkblue;
`

const Row = styled.section`
  display: flex;
  margin-bottom: 10px;
`

const Years = styled.span`
  font-weight: bold;
  font-size: 14;
  width: 140px;
`

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Institution = styled.span`
  font-weight: bold;
  font-size: 14;
`

const Title = styled.span`
  font-size: 14;
`

const Experience = records => (
  <Container>
    <Heading>Experience</Heading>
    {Object.values(records).map(
      ({ title, endYear, institution, startYear }, index) => (
        <Row key={index}>
          <Years>{`${startYear}-${endYear || 'Present'}`}</Years>
          <InfoWrapper>
            <Institution>{institution}</Institution>
            <Title>{title}</Title>
          </InfoWrapper>
        </Row>
      )
    )}
  </Container>
)

export default Experience
