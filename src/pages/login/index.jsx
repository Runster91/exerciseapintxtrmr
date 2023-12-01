
import { useState } from "react"
 
const Index = () => {
  const [register, setRegister]= useState(false)
  const [formData, setFormData]= useState({
    name: "",
    lastname: "",
    country: "",
    address: "",
    zipcode: "",
    email: "",
    password: ""
  })
 
  const {name, lastname, country, address, zipcode, email, password} = formData
 
  const onChangeData = ({target}) => setFormData({
    ...formData,
      [target.name]: target.value
  })
 
  const onSubmitForm = (e)=>{
    e.preventDefault();
    console.log(formData)
    setFormData({
      name: "",
      lastname: "",
      country: "",
      address: "",
      zipcode: "",
      email: "",
      password: ""
    })
  }
 
 
  return (
   <>
    <form onSubmit={(e) => onSubmitForm(e)}>
      <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => onChangeData(e)} />
      <input type="text" placeholder="Lastname" name="lastname" value={lastname} onChange={(e) => onChangeData(e)}/>
      {
        register && (
          <>
            <input type="text" placeholder="country" name="country" value={country} onChange={(e) => onChangeData(e)} />
            <input type="text" placeholder="address" name="address" value={address} onChange={(e) => onChangeData(e)} />
            <input type="text" placeholder="zipcode" name="zipcode" value={zipcode} onChange={(e) => onChangeData(e)} />
          </>
        )
      }
      <input type="email" placeholder="Email" name="email" value={email} onChange={(e) => onChangeData(e)}/>
      <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => onChangeData(e)}/>
      <input type="submit"  value={!register? "sign in" : "sign up"} />
    </form>
    <br />
    {!register? <p>no tienes cuenta? <span onClick={()=>{setRegister(true)}}>crear cuenta</span></p> : <p>tienes cuenta?, <span onClick={()=>{setRegister(false)}}>iniciar sesión</span></p> }
   </>
  )
}
 
export default Index
 