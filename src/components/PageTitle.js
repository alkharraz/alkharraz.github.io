import React from "react"
import { Container } from "react-bootstrap"

export default ({ title, children }) => (
<div className="py-5 bg-light">
  <Container>
    <h1>{title}</h1>
  </Container>
</div>

)
