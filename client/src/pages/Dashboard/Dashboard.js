import React from 'react'
import './dashboard.css'
import Calendar from '../../components/Calendar/Calendar'
import ViewUserData from '../../components/ViewUserData/ViewUserData';
import PieChart from '../../components/Charts/PieChart.js'
import LineChart from '../../components/Charts/LineChart.js'
import API from '../../utils/API';
import moment from 'moment'
import DateRangeSearch from '../../components/RangeSearch/RangeSearch'
import PersonalTabs from '../../components/PersonalTabs/PersonalTabs'

class Dashboard extends React.Component {

  state = {
    selectedDate: moment().format('YYYYMMDD'),
    Mood: "",
    Anxiety: "",
    Energy: "",
    MedicineTaken: "",
    Exercise: "",
    SleepHours: "",
    DailyLog: "",
    ExerciseAmount: "",
    Showered: "",
    Date: "",
    Logged: null,
    dbreturn:{},
    currentDate: moment().format('YYYYMMDD')
  }

  componentDidMount() {
    this.viewByDate();
    this.pullAll()
  }

  grabCalendarDate = (grabYear, grabDay, grabMonth) => {
    let date = `${grabYear}${grabMonth}${grabDay}`
    this.setState({ selectedDate: date })
    this.viewByDate()
  }

  pullAll = () => {
    API.getAll()
    .then(response =>{
        this.setState({dbreturn: response.data.allLogs})
    })
  }

  viewByDate = async () => {
    API.getByDate(this.state.selectedDate)
    .then( async response => {
      if (response.data.todaysentry[0]) {
        await this.setState({
          Mood: response.data.todaysentry[0].Mood,
          Anxiety: response.data.todaysentry[0].Anxiety,
          Energy: response.data.todaysentry[0].Energy,
          MedicineTaken: response.data.todaysentry[0].MedicineTaken,
          Exercise: response.data.todaysentry[0].Exercise,
          SleepHours: response.data.todaysentry[0].SleepHours,
          Showered: response.data.todaysentry[0].Showered,
          DailyLog: response.data.todaysentry[0].DailyLog,
          ExerciseAmount: response.data.todaysentry[0].ExerciseAmount,
          Date: moment(response.data.todaysentry[0].Date, 'YYYYMMDD').format('MMMM Do YYYY'),
          Logged: true
        })
      } else {
        await this.setState({ 
          Mood: "",
          Anxiety: "",
          Energy: "",
          MedicineTaken: "",
          Exercise: "",
          Showered: "",
          SleepHours: "",
          DailyLog: "",
          ExerciseAmount: "",
          Date: ""
        })
      }
    }).catch(err => console.log(err))
  }

  prevEntryCallBack = () => {
    this.viewByDate()
    this.pullAll()
  }

  viewDateRange = (startDate, endDate) => {
    API.getRange(startDate, endDate)
      .then(async response => {
        await this.setState({ dbreturn: response.data.rangeData })
      }).catch(err => console.log(err))
  }

 

  render() {
    return (
      <div className="dash-body">
          <div className="row no-gutters row-top">
            <div className="charts">
              {/* <LineChart 
                dbreturn={this.state.dbreturn}
                />
              <PieChart
                dbreturn={this.state.dbreturn}
              /> */}
            </div>
            <div className="calendar">
              {/* <Calendar grabCalendarDate={this.grabCalendarDate}/>
              <DateRangeSearch 
                viewDateRange={this.viewDateRange}
                currentDate={this.state.currentDate}
              /> */}
            </div>
          </div>

          <div className="row no-gutters row-bottom">
            <div className="user-data">
              {/* {(this.state.selectedDate > this.state.currentDate) ? <h5>You can not enter an Entry for a future date</h5> :
              <ViewUserData  
                selectedDate={this.state.selectedDate}
                mood={this.state.Mood}
                anxiety={this.state.Anxiety}
                energy={this.state.Energy}
                medicineTaken={this.state.MedicineTaken.toString()}
                exercise={this.state.Exercise.toString()}
                sleepHours={this.state.SleepHours}
                dailyLog={this.state.DailyLog}
                exerciseAmount={this.state.ExerciseAmount}
                showered={this.state.Showered.toString()}
                date={this.state.Date}
                logged={this.state.Logged}
                prevEntryCallBack={this.prevEntryCallBack}
                selectedDate={this.state.selectedDate}
                userID={this.props.userID}
              />} */}
            </div>
            <div className="scrape">
              {/* <PersonalTabs userID={this.props.userID}/> */}
            </div>
          </div>
      </div>
    )
  }
}

export default Dashboard