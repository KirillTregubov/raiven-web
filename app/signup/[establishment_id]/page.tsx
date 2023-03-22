import Prompt from './Prompt'

export default function Page({
  params: { establishment_id }
}: {
  params: { establishment_id: string }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Redirecting...</div>
      <Prompt establishment_id={establishment_id} />
    </main>
  )
}
