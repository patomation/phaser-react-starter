import React from 'react'
import { Center, Gutter } from '@patomation/ui'
import UiButton from './UiButton'

export default function Title ({
  onStartClick, // () => void
  hide // boolean
}) {

  return hide !== true
  ? (
    <Center style={{textAlign: 'center'}}>
      <h1>PHASER REACT GAME</h1>
      <Gutter /><Gutter />
      <UiButton
        onClick={onStartClick}
        title='Start'
        />
    </Center>
  )
  : null

}