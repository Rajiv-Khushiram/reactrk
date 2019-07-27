import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckboxExampleRadioGroup extends Component {
  state = {}
  
  render() {
    return (
      <Form>
        <Form.Field>
          Question 1: <p className="questionTitle">The section contains questions and answers on oops basic concepts, objects, classes, oops features, polymorphism, encapsulation and abstraction.</p>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='OOPs Basic Concepts'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Encapsulation'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='OOPs Features'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Polymorphism'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          Question 2: <p className="questionTitle">The section contains questions on constructors and its types, copy constructor, overloading constructors, destructors, execution of constructor or destructor.</p>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Copy Constructor'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Types of Constructors'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Execution of Constructor or Destructor'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Overloading Constructors'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          Question 3: <p className="questionTitle">The section contains questions and answers on access specifiers, private, public and protected access Specifiers.</p>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Private Access Specifier'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Public Access Specifier'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Access Specifiers'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Protected Access Specifier'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          Question 4: <p className="questionTitle">The section contains questions and answers on passing and returning object with functions, object reference and memory allocation, object array and usage.</p>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Passing and Returning Object with Functions'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Memory Allocation of Object'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Object Reference'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Object Use'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          Question 5: <p className="questionTitle">The section contains questions and answers on inheritance and its types, single and multilevel inheritance, multiple inheritance, hierarchical and hybrid inheritance.</p>
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Passing and Returning Object with Functions'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Memory Allocation of Object'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Object Reference'
            name='checkboxRadioGroup'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='Object Use'
            name='checkboxRadioGroup'
          />
        </Form.Field>
      </Form>
      
    )
  }
}