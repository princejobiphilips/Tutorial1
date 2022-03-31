import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddCourse extends Component {
  state={
      courseTitle:"",
      courseDescription:"",
      courseDate:"",
      courseDuration:"",
      coursevenue:""
  }
  onHandle=()=>{
      this.setState({
          [Event.target.name]:Event.target.value
      })
  }
  onRead=()=>{
      console.log(this.state)

      axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
          (response)=>{
              console.log(response.data)
              if(response.data.status==="success"){
                  alert("Added Successfully")
              }
              else{
                  alert("Something went wrong")
              }
          }
      )
  }
    render() {
    return (
      <div>
          <Grid container style={{padding:70}}>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                  variant='outlined'
                  label="Title"
                  margin='normal'
                  fullWidth
                  name='courseTitle'
                  onChange={this.onHandle}/>
              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                  variant='outlined'
                  label="Description"
                  fullWidth
                  margin='normal'
                  name='courseDescription'
                  onChange={this.onHandle}/>
              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                  variant='outlined'
                  label="Date"
                  type="date"
                  fullWidth
                  margin='normal'
                  name='courseDate'
                  onChange={this.onHandle}/>
              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                  variant='outlined'
                  label="Duration"
                  margin='normal'
                  fullWidth
                  name='courseDuration'
                  onChange={this.onHandle}/>
              </Grid>
              <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6}>
                  <TextField
                  variant='outlined'
                  label="Venue"
                  margin='normal'
                  fullWidth
                  name='coursevenue'
                  onChange={this.onHandle}/>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  onClick={this.onRead}
                  >
                        Submit
                  </Button>
              </Grid>

          </Grid>
      </div>
    )
  }
}
