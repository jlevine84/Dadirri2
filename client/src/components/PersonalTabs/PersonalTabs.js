import React from 'react'
import './personaltabs.css'
import Scrape from '../scrape/scrape'
import API from '../../utils/API'

class PersonalTabs extends React.Component {

  state = {
    scrape: [],
  }

  componentWillMount(){
    this.scrape()
  }

  scrape = () => {
    API.scrape().then(async response => {
      await this.setState({
        scrape: response.data
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="jumbotron personaltabs">
        <Scrape scrape={this.state.scrape}/>
      </div>
    )
  }
}

export default PersonalTabs