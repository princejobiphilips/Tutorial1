import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography> My App </Typography>
                  <Link to="/addcourse"><Typography color='' style={{padding:5}}>AddCourse</Typography></Link>
                  <Link to="/courseview"><Typography style={{padding:5}}>ViewCourse</Typography></Link>
                  <Link to="/news"><Typography style={{padding:5}}>News</Typography></Link>
                  <Link to="/posts"><Typography style={{padding:5}}>Posts</Typography></Link>
              </Toolbar>
          </AppBar>
      </div>
    )
  }
}
