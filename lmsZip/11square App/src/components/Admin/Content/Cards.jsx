import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,} from "reactstrap";

const Cards = () => {
  return (
    <Card className='shadow-sm border-none'>
    <CardBody>
      <CardTitle>Card1</CardTitle>
      <CardSubtitle className="mb-2 text-muted">
        Widget you can use
      </CardSubtitle>
    </CardBody>
  </Card>
  )
}

export default Cards