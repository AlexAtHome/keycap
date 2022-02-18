import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store'
import { Key } from '../key/key'
import './feed.css';

export const KeyFeed: React.FC = () => {
  // TODO: There's gotta be another store for *all* key presses
  const keysHistory = useSelector((state: RootState) => state.keysHistory)

  return (
    <section className="feed">
      {keysHistory.map((key, index) => {
        return (
          <Key
            className="feed__item"
            id={key.code}
            label={key.label}
            heightRatio={key.heightRatio}
            isLabelHTML={key.isLabelHTML}
            widthRatio={key.widthRatio}
            key={index}
          />
        )
      })}
    </section>
  )
}
