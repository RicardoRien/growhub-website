import React from 'react'
import './SignUpForm.css'
import { useForm } from "react-hook-form";
import ErrorMessage from './errorMessage'

function SignUpForm() {
  // Hooks~
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = e => e.target.reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__h1">Registrate</h1>
      <label htmlFor="firstName">
        Nombre:
      </label>
      <input className="form__input" name="firstName" ref={register({ required: true })} />
      <ErrorMessage error={errors.firstName} />

      <label htmlFor="lastName">
        Apellido:
      </label>
      <input className="form__input" name="lastName" ref={register({ required: true, minLength: 2 })} />
      <ErrorMessage error={errors.firstName} />

      <label htmlFor="username">
        Nombre de usuario
      </label>
      <input 
        className="form__input"
        name="username"
        ref={register({ required: true })}
      />
      <ErrorMessage error={errors.username} />

      <label htmlFor="email">
        Email
      </label>
      <input
       className="form__input"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      <ErrorMessage error={errors.email} />

      <label htmlFor="aboutyou">
        Sobre ti:
      </label>
      <textarea name="aboutyou" ref={register} />

      {/* Button Submit */}
      <input className="form__submit" type="submit" value="Registrar" />
    </form>

  )
}

export default SignUpForm
