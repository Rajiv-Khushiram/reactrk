import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckboxExampleRadioGroup extends Component {
  state = {}
  
  render() {
    return (
      <Form>
        <Form.Field>
          Question 1: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number A'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number B'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number C'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number D'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          Question 2: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number A'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number B'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number C'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Answer number D'
            name='checkboxRadioGroup'
          />
        </Form.Field>
      </Form>
      
    )
  }
}