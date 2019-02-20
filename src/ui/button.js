import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './button.css'

const BASE_CLASS = `button`

Button.propTypes = {
  error: PropTypes.bool,
}

export default function Button(props) {
  const { error, children, className, ...otherProps } = props

  const compClass = classNames(BASE_CLASS, className, {
    [`${BASE_CLASS}--error`]: error,
  })

  return (
    <button className={compClass} {...otherProps}>
      {children}
    </button>
  )
}
