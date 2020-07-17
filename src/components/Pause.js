import React from 'react'
import { Center, Gutter } from '@patomation/ui'
import UiButton from './UiButton'

export default function Pause ({
  onResumeClick, // () => void
  onRestartClick,
  hide // boolean
}) {

  return hide !== true
  ? (
    <Center style={{textAlign: 'center'}}>
      <h1>Game Paused</h1>
      <Gutter /><Gutter />
      <UiButton
        onClick={onResumeClick}
        title='resume'
        />
      <UiButton
        onClick={onRestartClick}
        title='Restart'
        />
    </Center>
  )
  : null

}