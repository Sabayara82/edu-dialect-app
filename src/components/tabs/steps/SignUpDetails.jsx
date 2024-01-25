import React, { useState } from "react";


export default function SignUpDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <form>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" type="role" id="role" name="role"></input>
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" type="role" id="role" name="role"></input>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="role" id="role" name="role"></input>
      <input value={password} onChange={(e) => setEmail(e.target.value)} placeholder="Password" type="role" id="role" name="role"></input>
      <button type="submit" >Sign Up</button>
    </form>
  )
}
