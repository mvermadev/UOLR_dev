import React from 'react'
import {Input, Label} from 'reactstrap'

export default function BV(props) {
    const {labelName, name, placeholder, type, value, onChange} = props

  return (
    <div>
        <Label for={labelName}>{labelName}</Label>
        <Input
            id={labelName}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}
