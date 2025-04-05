export default function Audio({ audioUrl }: { audioUrl: string }) {

  if (audioUrl === undefined) {
    return <p>No audio available</p>
  }
  return (
    <>
      <audio
        controls
        style={{ width: '100%', height: '50px' }}
      >
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
    </>
  )
}