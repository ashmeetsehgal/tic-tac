import React from 'react'

const Square = ({ clickFunction, value }) => (
<button className="square" onClick={clickFunction}>
  {value}
</button>
)

export default Square
