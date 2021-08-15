//import { Link } from "gatsby"
//import { navigate } from "gatsby-link"
import React from "react"
//import Header from "../components/Header"
//import Footer from "../components/Footer"
import Post from "../components/Post"
import PrimaryLayout from "../layouts/PrimaryLayouts"

export default function Home() {
  return (
    <PrimaryLayout column="col-xs-6">
      <Post title="First Post" excerpt="We are create a new website" />
      <Post title="First Post" excerpt="We are create a new website" />
      <Post title="First Post" excerpt="We are create a new website" />
      <Post title="First Post" excerpt="We are create a new website" />
      <Post title="First Post" excerpt="We are create a new website" />
    </PrimaryLayout>
  )
}
