import { Component } from 'react'
import Head from 'next/head'

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
        <h1> Header </h1>
      </div>

    )
  }
}

export default Header