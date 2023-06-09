'use client'

import { useCallback, useEffect, useState } from 'react'

export default function Prompt({
  establishment_id
}: {
  establishment_id: string
}) {
  const [url, setUrl] = useState<string | null>('10.0.0.132')
  const derivedUrl = `exp://${url}:19000/--/signup?establishment_id=${establishment_id}`

  const redirect = useCallback(() => {
    if (!url) return
    window.location.replace(derivedUrl)
  }, [derivedUrl, url])

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

  useEffect(() => {
    if (url) {
      redirect()
    }
  }, [redirect, url])

  if (!establishment_id) return <div>Establishment ID not found</div>

  return (
    <div>
      <a href={derivedUrl}>Open link</a>
    </div>
  )
}
