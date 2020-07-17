import React from 'react'
import { Button } from '@patomation/ui'
export default function UiButton ({
  onClick,
  title
}) {
  return (
    <Button
      activeStyle={{
        background: '#CEB3AB'
      }}
      background='#BAA5FF'
      color='#466365'
      style={{
        border: 0,
        padding: '1rem 2rem'
      }}
      onClick={onClick}
      title={title}
      />
  )
}