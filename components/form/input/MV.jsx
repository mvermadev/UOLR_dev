import React from 'react'
import {Input, Label} from 'reactstrap'

export default function MV(props) {
    const {labelName, name, placeholder, type} = props

  return (
    <div>
        <Label for={labelName}>{labelName}</Label>
        <Input
            id={labelName}
            name={name}
            placeholder={placeholder}
            type={type}
        />
    </div>
  )
}
