import React from 'react'
import PropTypes from 'prop-types'

import Price from '../ui/price'

const BASE_CLASS = `shop`

ShopItem.propTypes = {
  shop: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    maxoffer: PropTypes.string.isRequired,
  }),
}

export default function ShopItem(props) {
  const { shop } = props
  return (
    <li className={BASE_CLASS}>
      <dl className={`${BASE_CLASS}__item`}>
        <dt className={`${BASE_CLASS}__name`}>{shop.name}</dt>
        <dd className={`${BASE_CLASS}__full-address`}>
          <p>{shop.address}</p>
          <p>
            {shop.zipcode} {shop.city}
          </p>
        </dd>
        <dd className={`${BASE_CLASS}__offer`}>
          up to <Price currency={shop.currency} value={shop.maxoffer} /> offered
        </dd>
        <dd className={`${BASE_CLASS}__logo`}>
          <img src={shop.logo} alt={shop.name} />
        </dd>
      </dl>
    </li>
  )
}
