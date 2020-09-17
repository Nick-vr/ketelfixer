import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
`

const StyledForm = styled.form`
  font-family: 'PT Sans', sans-serif;
  margin: 100px 0 50px;
  /* padding: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* position: relative; */
  background-color: yellow;

  textarea {
    min-width: 100%;
    padding-top: 20px;
    border: none;
    overflow: auto;
    outline: none;
    &:required {
      box-shadow: none;
    }
  }
`

const Input = styled.input`
  width: 250px;
  padding-top: 20px;
  border: none;
  outline: none;
  &:required {
    box-shadow: none;
  }
`
const Span = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: red;

  ${Input}:focus & {
    bottom: 40px;
  }
`

const Label = styled.label`
  border-bottom: 2px solid black;

  & ${Input}:focus + ${Span} {
    bottom: 40px;
  }
`

const InputWrapper = styled.div`
  background: lightgoldenrodyellow;
  width: 300px;
  margin-bottom: 10px;
  position: relative;
`

const contactForm = () => (
  <Wrapper>
    <StyledForm name="contact" netlify>
      <InputWrapper>
        <Label htmlFor="FirstName">
          <Input type="text" name="FirstName" required />
          <Span>Voornaam </Span>
        </Label>
      </InputWrapper>

      {/* <p>
        <label htmlFor="name">
          <span>Naam </span>
          <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          <span>Email </span>
          <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          <span>Bericht </span>
          <textarea name="message" required />
        </label>
      </p>
      <p>
        <button type="submit">Verzenden</button>
      </p> */}
    </StyledForm>
  </Wrapper>
)

export default contactForm
