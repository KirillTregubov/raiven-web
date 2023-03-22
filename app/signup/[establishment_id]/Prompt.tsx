'use client'

import { useEffect, useState } from 'react'

export default function Prompt({
  establishment_id
}: {
  establishment_id: string
}) {
  const [url, setUrl] = useState<string | null>(null)
  const derivedUrl = `exp://${url}:19000/--/signup?establishment_id=${establishment_id}`

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
    window.location.replace(derivedUrl)
  }

  return (
    <div>
      <a href={derivedUrl}>Open link</a>
    </div>
  )
}
