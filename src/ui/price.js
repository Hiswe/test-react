import React from 'react'
import PropTypes from 'prop-types'

const CURRENCIES = Object.freeze({
  EUR: `€`,
  USD: `$`,
})

// make a custom price component
// I don't know if it's worth to support many currencies
// can look into:
// https://www.npmjs.com/package/react-format-currency

Price.propTypes = {
  shop: PropTypes.shape({
    // value seems already formated
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    currency: PropTypes.string.isRequired,
  }),
}

export default function Price(props) {
  const { value, currency } = props
  return (
    <span className="price">
      {value} {CURRENCIES[currency]}
    </span>
  )
}
