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
  margin-right: 50px;
`

const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Institution = styled.span`
  font-weight: bold;
  font-size: 14;
`

const Degree = styled.span`
  font-size: 14;
`

const Education = records => (
  <Container>
    <Heading>Education</Heading>
    {Object.values(records).map(
      ({ degree, endYear, institution, startYear }, index) => (
        <Row key={index}>
          <Years>{`${startYear}-${endYear}`}</Years>
          <InfoWrapper>
            <Institution>{institution}</Institution>
            <Degree>{degree}</Degree>
          </InfoWrapper>
        </Row>
      )
    )}
  </Container>
)

export default Education
