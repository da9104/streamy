import { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import  * as actions from '../actions'
import './App.css'
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'

const SurbeyNew = () => <h2>SurbeyNew</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
         <Header />
          <div className='flex items-center justify-center mt-20'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurbeyNew} />
          </div>
        </BrowserRouter>
      </>
    )
  }
}

export default connect(null, actions)(App)
