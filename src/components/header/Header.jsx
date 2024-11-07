// import React from 'react'
import "./Header.css"

function Header() {
  return (
    <header>
      <h1 className="flex items-center font-sans font-bold">Hello, I&apos;m Dale <span className="ml-4"><img className="size-11" src="src\assets\images\emoji\wavingHand.png" alt="Waving emoji" /></span></h1>
      <h2 className="mt-1 font-sans font-medium tracking-wider">Frontend Developer</h2>
      <p className="flex items-center mt-5 font-sans font-medium tracking-wider"><img className="mr-1.5 size-5" src="src\assets\images\emoji\pin.png" alt="Pin emoji" />Philippines</p>
      <p className="flex items-center font-sans font-medium tracking-wider"><img className="mr-1.5 size-5" src="src\assets\images\emoji\envelope.png" alt="Envelope Emoji" />porciuncula.randale@gmail.com</p>
    </header>
  )
}

export default Header

// ayusin font style