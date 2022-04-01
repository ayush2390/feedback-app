import React from 'react'

function Button({version, isDisabled, type, children}) {
  return (
    <button type={type} disabled={isDisabled} className={` btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    isDisabled: false,
    type:'button'
}

export default Button
