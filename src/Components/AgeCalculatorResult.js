import React from 'react'

const AgeCalculatorResult = ({age}) => {
  const styles = {
    marginleft: "40px",
  };
  return (
    <div>
      <h2 style={styles}>You are {age.years} years old</h2>
    </div>
  )
}

export default AgeCalculatorResult