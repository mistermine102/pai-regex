import { useState } from 'react'

function Form() {
  const regex = {
    pesel: /^[0-9]{11}$/,
    fullname: /^(?=.{0,50}$)[A-Za-z]+ [A-Za-z-]+$/,
    street: /^[0-9]* *[A-Z]+[A-Za-z]*$/,
    number: /^[0-9]+[a-z]*$/,
    city: /^[A-Za-z]{2,30}$/,
  }

  const [formData, setFormData] = useState({
    pesel: '',
    fullname: '',
    street: '',
    number: '',
    city: '',
  })

  const [errors, setErrors] = useState({
    pesel: null,
    fullname: null,
    street: null,
    number: null,
    city: null,
  })

  const clearErrors = () => {
    setErrors({
      pesel: null,
      fullname: null,
      street: null,
      number: null,
      city: null,
    })
  }

  const handleFormChange = evt => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    })
  }

  const validate = () => {
    clearErrors()
    const { pesel, fullname, street, number, city } = formData
    if (!regex.pesel.test(pesel)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        pesel: 'Nieprawidłowy pesel.',
      }))
    }
    if (!regex.fullname.test(fullname)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        fullname: 'Nieprawdiłowe imię.',
      }))
    }
    if (!regex.street.test(street)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        street: 'Nieprawidłowa ulica.',
      }))
    }
    if (!regex.number.test(number)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        number: 'Nieprawidłowy number mieszkania.',
      }))
    }
    if (!regex.city.test(city)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        city: 'Nieprawidłowe miasto.',
      }))
    }
    console.log(errors)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    validate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" name="pesel" value={formData.pesel} onChange={handleFormChange} placeholder="PESEL" />
        {errors.pesel && <p className='invalid-input-message'>{errors.pesel}</p>}
      </div>
      <div className="form-control">
        <input type="text" name="fullname" value={formData.fullname} onChange={handleFormChange} placeholder="Imię i nazwisko" />
        {errors.fullname && <p className='invalid-input-message'>{errors.fullname}</p>}
      </div>
      <div className="form-control">
        <input type="text" name="street" value={formData.street} onChange={handleFormChange} placeholder="Ulica" />
        {errors.street && <p className='invalid-input-message'>{errors.street}</p>}
      </div>
      <div className="form-control">
        <input type="text" name="number" value={formData.number} onChange={handleFormChange} placeholder="Numer mieszkania" />
        {errors.number && <p className='invalid-input-message'>{errors.number}</p>}
      </div>
      <div className="form-control">
        <input type="text" name="city" value={formData.city} onChange={handleFormChange} placeholder="Miasto" />
        {errors.city && <p className='invalid-input-message'>{errors.city}</p>}
      </div>
      <button>Submit</button>
    </form>
  )
}
export default Form
