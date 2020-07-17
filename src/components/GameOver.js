import React from 'react'
import { Center, Gutter } from '@patomation/ui'
import UiButton from './UiButton'

export default function GameOver ({
  onRestartClick,
  hide // boolean
}) {

  return hide !== true
  ? (
    <Center style={{textAlign: 'center'}}>
      <h1>Game Over</h1>
      <Gutter /><Gutter />
      <UiButton
        onClick={onRestartClick}
        title='Restart'
        />
    </Center>
  )
  : null

}