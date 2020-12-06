import { Component } from 'react'
import Head from 'next/head'
import Waveform from '../waveform'

class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/css/app.min.css" />
        </Head>
        <Waveform />
      </div>

    )
  }
}

export default Header