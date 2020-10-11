import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`

const StyledForm = styled.form`
  font-family: 'PT Sans', sans-serif;
  margin: 100px 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

const Textarea = styled.textarea`
  padding-top: 10px;
  font-size: 13px;
  width: 250px;
  height: 100px;
  border: none;
  outline: none;
  resize: none;
  &:required {
    box-shadow: none;
  }
`

const Span = styled.span`
  position: absolute;
  font-size: 0.9rem;
  bottom: 0px;
  left: 0px;
  transition: all 0.2s ease-in-out;
  color: #a3a3a3;
`

const Label = styled.label`
  height: 100px;
  input,
  textarea {
    border-bottom: 1px solid #a3a3a3;
  }

  span {
    padding-bottom: 2px;
  }

  & ${Input}:focus + ${Span}, ${Input}:valid + ${Span} {
    bottom: 30px;
  }

  & ${Textarea}:focus + ${Span}, ${Textarea}:valid + ${Span} {
    bottom: 100px;
  }

  input:not(:placeholder-shown) + span {
    bottom: 30px;
  }
`

const InputWrapper = styled.div`
  position: relative;
  margin: 30px 0;
`

const Button = styled.button`
  margin: 20px 0 40px;
  border: none;
  border-radius: 45px;
  width: 150px;
  height: 45px;
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #fff;
  color: #a3a3a3;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    submitted: false,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: `https://getform.io/f/${process.env.GETFORM_ENDPOINT}`,
      data: new FormData(form),
    })
      .then(() => {
        handleServerResponse(true, 'Thanks!', form)
        setServerState({ submitted: true })
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <Wrapper>
      <StyledForm name="contact" onSubmit={handleOnSubmit}>
        <InputWrapper>
          <Label>
            <Input type="text" name="firstName" placeholder=" " required />
            <Span>Voornaam </Span>
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input type="text" name="lastName" placeholder=" " required />
            <Span>Achternaam </Span>
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input type="email" name="email" placeholder=" " required />
            <Span>Email </Span>
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Textarea name="message" required />
            <Span>Bericht </Span>
          </Label>
        </InputWrapper>
        <Button type="submit" disabled={serverState.submitting}>
          {serverState.submitted === false ? `Verzenden` : `Verzonden!`}
        </Button>
      </StyledForm>
    </Wrapper>
  )
}

export default ContactForm
