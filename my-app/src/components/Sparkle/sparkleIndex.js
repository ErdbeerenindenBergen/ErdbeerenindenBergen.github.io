import React from 'react'
import Sparkle from 'react-sparkle'

const SparklyThing = () => (
  // Note: the parent of Sparkle must be positioned relatively or absolutely
  <div style={{ position: 'relative' }}>
    <Sparkle />
  </div>
)