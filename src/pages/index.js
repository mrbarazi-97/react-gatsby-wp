import { Link } from "gatsby"
import { navigate } from "gatsby-link"
import React from "react"
import Header from "../components/header"

export default function Home() {
  return (
    <div>
      <Header title="My header"></Header>
      <h1>Hii Their</h1>
      <Link to="https://Google.com" />
      <button onClick={() => navigate("/test")}>Test</button>
    </div>
  )
}
