import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class CourseView extends Component {
 state={
     courses:[]
 }
 fetchCourses=()=>{
     axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
            console.log(response.data)
            this.setState({
                courses:response.data
            })
        } 
     )
 }
 
    render() {
    return (
      <div>
          <Grid container style={{padding:60}}>
            <Grid style={{padding:5}} item xs={12} sm={12} md={12} lg={12}>
            <Button 
          variant='contained'
          color='primary'
          onClick={this.fetchCourses}>Get Courses</Button>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Course Title</TableCell>
                          <TableCell>Description</TableCell>
                          <TableCell>Venue</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Duration</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {this.state.courses.map( (value,index)=>{
                          return <TableRow>
                          <TableCell>{value.courseTitle}</TableCell>
                          <TableCell>{value.courseDescription}</TableCell>
                          <TableCell>{value.courseVenue}</TableCell>
                          <TableCell>{value.courseDuration}</TableCell>
                          <TableCell>{value.courseDate}</TableCell>

                          </TableRow>
                      } )}
                  </TableBody>
              </Table>
          </TableContainer>
            </Grid>
          </Grid>
      </div>
    )
  }
}
