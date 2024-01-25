import React, { useState } from "react";


export default function SignUpAccount() {
  const [role, setRole] = useState('');
  const [method, setMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(role);
    console.log(method);
}
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Please select your role:</label>
      <input value={role} onChange={(e) => setRole(e.target.value)} type="role" id="role" name="role"></input>
      <label htmlFor="method">Please select your method to sign up with:</label>
      <input value={method} onChange={(e) => setMethod(e.target.value)} type="method" id="method" name="method"></input>
      <button type="submit" >Next</button>
  </form>
  )
}
