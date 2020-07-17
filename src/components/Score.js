import React from 'react'

export default function Score ({
  score
}) {
  return (
    <div style={{
      color: 'gold',
      fontSize: '5rem'
    }}>
      { score }
    </div>
  )
}