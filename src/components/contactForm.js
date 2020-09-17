import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 70%;
  margin: 0 auto;
  back
`

const StyledForm = styled.form`
  font-family: 'PT Sans', sans-serif;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-color: yellow;

  p {
    position: relative;
  }

  input {
    width: 100%;
    padding-top: 20px;
    border: none;
    &:required {
      box-shadow: none;
    }
  }

  textarea {
    min-width: 100%;
    &:required {
      box-shadow: none;
    }
  }

  label {
    border-bottom: 2px solid black;
  }
`

const FormInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const contactForm = () => (
  <Wrapper>
    <StyledForm name="contact" netlify>
      <FormInputs>
        <p>
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
      </FormInputs>
      <p>
        <label htmlFor="message">
          <span>Bericht </span>
          <textarea name="message" required />
        </label>
      </p>
      <p>
        <button type="submit">Verzenden</button>
      </p>
    </StyledForm>
  </Wrapper>
)

export default contactForm
