import React from 'react'

const TextForm = (props) => {
  return (
  
  <div className="mb-3">
    <h1>{props.title}</h1>
    {/* <label htmlFor="box" className="form-label">Example textarea</label> */}
    <textarea className="form-control" id="box" rows="10"></textarea>
  </div>
  )
}

export default TextForm