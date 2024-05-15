import React from 'react'
import Typewriter from 'typewriter-effect';
export default function Writer() {
  return (
    <Typewriter
    options={{
    strings: [
      `I'm a MERN Stack Developer`
        ,`I build things for the web`
],
    autoStart: true,
    loop: true,
    deleteSpeed: 50
  }}
/>
  )
}
