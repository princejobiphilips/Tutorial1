import React, { Component } from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'


export default class Posts extends Component {
  state={
      posts:[]
  }
  dataFetching=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
          (response)=>{
              console.log(response.data);
              this.setState({
                  posts:response.data
              })
          }
      )
  }
  
    render() {
    return (
      <div>

          <Grid container  style={{padding:70}}>
              <Grid item xs={12} sm={12} md={12}>
                <Button
                variant='contained'
                onClick={this.dataFetching}
                color='primary'>
                    Fetch Posts
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Message</TableCell>
                        </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.posts.map(
                                    (value,index)=>{
                                        return <TableRow>
                                            <TableCell>{value.title}</TableCell>
                                            <TableCell>{value.body}</TableCell>
                                        </TableRow>
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
              </Grid>

          </Grid>

      </div>
    )
  }
}
