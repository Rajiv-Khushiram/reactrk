import React, { Component } from 'react'
import { Search, Grid} from 'semantic-ui-react'


export default class SearchExampleCategory extends Component {


  render() {


    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            category
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    )
  }
}