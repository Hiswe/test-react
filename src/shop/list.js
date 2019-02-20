import React, { useState, useEffect } from 'react'
import axios from 'axios'
import classNames from 'classnames'
// get the most basic spinner component we can get
// https://www.npmjs.com/package/react-svg-spinner
import Spinner from 'react-svg-spinner'

import './list.css'
import Button from '../ui/button'
import ShopItem from './item'

const ENDPOINT = `https://www.leshabitues.fr/testapi/shops`
const REQUEST_TIMEOUT = 1000
const AXIOS_OPTONS = { timeout: REQUEST_TIMEOUT }
const BASE_CLASS = `shops`

export default function ShopList(props) {
  const [shops, setShops] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  async function fetchData() {
    setLoading(true)
    setFetchError(false)
    try {
      const { data } = await axios.get(ENDPOINT, AXIOS_OPTONS)
      setLoading(false)
      const { results } = data
      if (!Array.isArray(results)) return setFetchError(true)
      setShops(results)
    } catch (error) {
      // exercice dœsn't ask us to make something specific about timeout
      const isTimeout = error.code === `ECONNABORTED`
      if (!isTimeout) console.log(error)
      setLoading(false)
      setFetchError(true)
    }
  }

  const compClass = classNames(BASE_CLASS, {
    [`${BASE_CLASS}--loading`]: loading && !fetchError,
    [`${BASE_CLASS}--fetch-error`]: !loading && fetchError,
  })
  const listClass = `${BASE_CLASS}__listing`

  // • empty array to just use mount/unmount
  //   https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  // • useEffect dœsn't work with promises (return an unsubscribe function)
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <section className={compClass}>
      {fetchError ? (
        <>
          <p>Les habitués is currently unvailable</p>
          <Button error onClick={fetchData}>
            retry
          </Button>
        </>
      ) : loading ? (
        <Spinner color="var(--c-accent)" size="128px" />
      ) : (
        <ul className={listClass}>
          {shops.map(shop => (
            <ShopItem shop={shop} key={shop.id} />
          ))}
        </ul>
      )}
    </section>
  )
}
