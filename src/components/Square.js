import React from 'react'

const Square = ({ clickFun, value }) => (
<button className="square" onClick={clickFun}>
  {value}
</button>
)

export default Square
