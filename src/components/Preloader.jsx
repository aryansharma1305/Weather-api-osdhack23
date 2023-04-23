import React from 'react'
import { CirclesWithBar} from 'react-loader-spinner'

function Preloader
() {
  return (
    <div>
        < CirclesWithBar height="100"
  width="200"
  radius="10"
  color="Black"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass />

    </div>
  )
}

export default Preloader
