'use client'

import { useEffect, useState } from 'react'

export default function Prompt({ establishment_id }) {
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (!url && establishment_id) {
      const response = prompt(
        'Enter the URL of your local dev server',
        '10.0.0.132'
      )
      setUrl(response)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //   if (url) {
  //     redirect()
  //   }
  // }, [url])

  if (!establishment_id) return <div>Establishment ID not found</div>

  const redirect = () => {
    if (!url) return
    window.location.replace(`exp://${url}:19000/--/signup/${establishment_id}`)
  }

  return (
    <div>
      <a href={`exp://${url}:19000/--/signup/${establishment_id}`}>Open link</a>
    </div>
  )
}
