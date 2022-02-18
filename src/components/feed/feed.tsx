import React from 'react'
import { useSelector } from 'react-redux'
import { reverse, takeRight } from 'lodash-es'

import { RootState } from '../../store'
import { Key } from '../key/key'
import { keycapsMap } from '../keyboard/keys.map'
import './feed.css';

export const KeyFeed = () => {
  // TODO: There's gotta be another store for *all* key presses
  const pressedKeys: string[] = useSelector((state: RootState) => {
    const portion = takeRight(state.pressedKeys, 15)
    return reverse(portion)
  })

  return (
    <section className="feed">
      {pressedKeys.map((key, index) => {
        const keycap = keycapsMap.get(key)
        return (
          <Key
            className="feed__item"
            id={key}
            label={keycap?.label}
            heightRatio={keycap?.heightRatio}
            isLabelHTML={keycap?.isLabelHTML}
            widthRatio={keycap?.widthRatio}
            key={index}
          />
        )
      })}
    </section>
  )
}
