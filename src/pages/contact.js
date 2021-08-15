import React from "react"
//import Header from "../components/Header"
//import Footer from "../components/Footer"
import { Form, Button } from "react-bootstrap"
import PrimaryLayout from "../layouts/PrimaryLayouts"

export default function Home() {
  return (
    <PrimaryLayout column="col-7">
      <div className="pt-4"></div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="success">Submit</Button>{" "}
    </PrimaryLayout>
  )
}
