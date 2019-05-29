import React from 'react';
import './ViewUserData.css';
import moment from 'moment'
import API from './../../utils/API';
import Slider from '../Slider/Slider'
import BooleanInput from '../BooleanInput/BooleanInput'
import DropDownInput from './../dropdownInput/DropDownInput';

class ViewUserData extends React.Component {

    state = {
        viewDate: moment(this.props.selectedDate, 'YYYYMMDD').format('MMMM Do YYYY'),
        edit: false,
        Mood: "5",
        Anxiety: "5",
        Energy: "5",
        MedicineTaken: "false",
        Exercise: "false",
        SleepHours: 0,
        DailyLog: "",
        ExerciseAmount: "",
        Showered: "",
        Date: this.props.selectedDate,
        UserID: this.props.userID,
        logged: false
    } 

    switchToEdit=() => {
        this.setState({
           edit:true
        })   
    }
    
    switchtoSeeData = () =>{
        this.setState({
            edit: false
        })
    }

    componentDidMount(){
        API.getByDate(this.props.selectedDate)
        .then(async response=>{
            if (response.data.todaysentry[0]){
                await this.setState({ logged: true })
            } else await this.setState({ logged: false })
        }).catch(err => console.log(err))
    }

    componentWillReceiveProps() {
        API.getByDate(this.props.selectedDate)
        .then(async response=>{
            if (response.data.todaysentry[0]) {
                await this.setState({ logged: true })
            } 
            else await this.setState({ 
                Mood: "5",
                Anxiety: "5",
                Energy: "5",
                MedicineTaken: false,
                Exercise: false,
                SleepHours: "0",
                DailyLog: "",
                ExerciseAmount: "",
                Showered: false,
                logged: false, 
                viewDate: moment(this.props.selectedDate, 'YYYYMMDD').format('MMMM Do YYYY'), 
            })
        }).catch(err => console.log(err))
    }

    updateValue = async event => {
        let name = event.target.name
        let value = event.target.value
        await this.setState({[name]: value})
    }
    
    submitNewEntry = () => {
        let newEntry = {
            Mood: this.state.Mood,
            Anxiety: this.state.Anxiety,
            Energy: this.state.Energy,
            MedicineTaken: this.state.MedicineTaken,
            Exercise: this.state.Exercise,
            SleepHours: this.state.SleepHours,
            DailyLog: this.state.DailyLog,
            ExerciseAmount: this.state.ExerciseAmount,
            Showered: this.state.Showered,
            Date: this.props.selectedDate,
            UserID: this.props.userID
        }
        API.createEntry(newEntry)
            .then(async response=>{
                await this.setState({
                    logged: true,
                    edit: false,
                })
        })
        .then(() => this.props.prevEntryCallBack())
        .catch(err => console.log(err))
    }
    

    render(){
        const entryDate = moment(this.props.selectedDate, 'YYYYMMDD').format('MMMM Do YYYY')
        return(
            <div className="entries-container">
                {(this.state.logged && !this.state.edit) ?
                    <div className="view-entry">
                        <div className="validation">
                            <h5>Entry for: {entryDate}</h5>
                            <hr/>
                        </div>
                        <div className="view-entry-container">
                            <div className="sliders">
                                <p><strong>Mood: {this.props.mood}</strong></p>
                                <p><strong>Anxiety: {this.props.anxiety}</strong></p>
                                <p><strong>Energy: {this.props.energy}</strong></p>
                            </div>
                            <div className="booleans">
                                <p><strong>Hours Slept: {this.props.sleepHours}</strong></p>
                                <p><strong>Medicine Taken: {this.props.medicineTaken}</strong></p>
                                <p><strong>Showered: {this.props.showered}</strong></p>
                            </div>
                            <div className="text-areas">
                                <p><strong>Daily Log: </strong>
                                <br></br>
                                {this.props.dailyLog}</p>
                                <br></br>
                                {this.props.exercise === "true" ?  
                                <div>
                                    <p><strong>Exercised: </strong>{this.props.exercise}</p>
                                    <p><strong>Exercise Details: </strong>
                                    <br></br>
                                    {this.props.exerciseAmount}</p>
                                    <br></br>
                                </div>
                                :   ""  }
                            </div>
                            <div className="buttons">
                                <button type="button" className="btn btn-success" onClick={this.switchToEdit}>Edit</button>
                            </div>
                        </div>
                    </div>
                : (
                    <div className="new-entry">
                        <div className="validation">
                            <h5>New Entry for: {entryDate}</h5>
                            <hr/>
                        </div>
                        <div className="new-entry-container">
                            {/* Sliders */}
                            <div className="sliders">
                                <Slider 
                                    name={"Mood"}
                                    display={this.state.Mood}
                                    update={this.updateValue}
                                    defaultValue={this.state.Mood}
                                />
                                <Slider 
                                    name={"Anxiety"}
                                    display={this.state.Anxiety}
                                    update={this.updateValue}
                                    defaultValue={this.state.Anxiety}
                                />
                                <Slider
                                    name={"Energy"}
                                    display={this.state.Energy}
                                    update={this.updateValue}
                                    defaultValue={this.state.Energy}
                                />
                            </div>
                            {/* Booleans */}
                            <div className="booleans">
                                <BooleanInput
                                    name={"MedicineTaken"}
                                    title={"Medicine Taken"}
                                    update={this.updateValue}
                                />
                                <BooleanInput
                                    name={"Exercise"}
                                    title={"Exercise"}
                                    update={this.updateValue}
                                />
                                <BooleanInput
                                    name={"Showered"}
                                    title={"Showered"}
                                    update={this.updateValue}
                                />
                                <DropDownInput
                                    title={"Hours Slept: "}
                                    name="SleepHours"
                                    update={this.updateValue}
                                    defaultValue={this.state.SleepHours}
                                />
                            </div>
                            {/* Inputs */}
                            <div className="text-areas">
                                <div className="form-group daily-input">
                                    <label>Daily Log</label>
                                    <textarea 
                                        className="form-control" 
                                        placeholder="How was your Day?"
                                        name="DailyLog"
                                        onChange={this.updateValue}
                                        rows="6"/>
                                </div>
                                {this.state.Exercise === "true" ?
                                    <div className="form-group exercise-input">
                                        <label>Exercise Details</label>
                                        <textarea 
                                            className="form-control" 
                                            placeholder="Log your exercise here."
                                            name="ExerciseAmount"
                                            onChange={this.updateValue}
                                            rows="2"/>
                                    </div>: "" }
                            </div>
                            <div className="buttons">
                                <div className="">
                                    <button onClick={this.submitNewEntry} className="btn btn-success">Submit</button>
                                </div>
                                <div className="">
                                    {this.state.logged && 
                                    <button onClick={this.switchtoSeeData} className="btn btn-danger">Back</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}           
            </div>    
        )
    }
    
    
}

export default ViewUserData;