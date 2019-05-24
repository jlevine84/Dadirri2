import React from 'react';
import './ViewUserData.css';
import moment from 'moment'
import API from './../../utils/API';
import Slider from '../Slider/Slider'
import Input from '../Input/Input'
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
            <div id="container">
                {(this.state.logged && !this.state.edit) ?
                    <div className ="jumbotron viewData">
                        <div>
                            <h5>Data for {entryDate}</h5>
                            <p><strong>Mood: </strong>{this.props.mood}</p>
                            <p><strong>Anxiety: </strong>{this.props.anxiety}</p>
                            <p><strong>Energy: </strong>{this.props.energy}</p>
                            <p><strong>Hours Slept: </strong>{this.props.sleepHours}</p>
                            <p><strong>Medicine Taken: </strong>{this.props.medicineTaken}</p>
                            <p><strong>Showered: </strong>{this.props.showered}</p>
                            {this.props.exercise === "true" ?  
                                <div>
                                    <p><strong>Exercised: </strong>{this.props.exercise}</p>
                                    <p><strong>Exercise Details: </strong>
                                    <br></br>
                                    {this.props.exerciseAmount}</p>
                                    <br></br>
                                </div>
                            :   ""  }
                            <p><strong>Daily Log: </strong>
                            <br></br>
                            {this.props.dailyLog}</p>
                            <br></br>
                            <button type="button" className="btn btn-success float2" onClick={this.switchToEdit}>Edit this entry</button>
                        </div>
                    </div>
                : (
                    <div className="jumbotron">
                        <div className="row">
                            <div className="col-sm-12 top">
                                <h5>New Entry for: {entryDate}</h5>
                            </div>
                        </div>
                        <hr/>
                        <h5>How are you feeling today?</h5>
                        <div className="row">
                            <div className="col-sm-12">
                                <Slider 
                                    className="slider"
                                    name={"Mood"}
                                    display={this.state.Mood}
                                    update={this.updateValue}
                                    defaultValue={this.state.Mood}
                                />
                                <Slider 
                                    className="slider"
                                    name={"Anxiety"}
                                    display={this.state.Anxiety}
                                    update={this.updateValue}
                                    defaultValue={this.state.Anxiety}
                                />
                                <Slider
                                    className="slider" 
                                    name={"Energy"}
                                    display={this.state.Energy}
                                    update={this.updateValue}
                                    defaultValue={this.state.Energy}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
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
                        </div> 
                        <div className="input-row">
                            <div className="col-sm-12">
                            {this.state.Exercise === "true" ?
                                <Input
                                    name={"ExerciseAmount"}
                                    title={"Exercise Details"}
                                    placeholder={"Log your exercise details here"}
                                    update={this.updateValue}
                                /> : ""
                            }
                                <Input
                                    name="DailyLog"
                                    title={"Daily Log"}
                                    placeholder={"Log your thoughts about today here"}
                                    update={this.updateValue}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-9">
                            {this.state.logged && 
                                <button onClick={this.switchtoSeeData} className="btn btn-danger float-left">Back</button>}
                            </div>
                        
                            <div className="col-sm-3">
                                <button onClick={this.submitNewEntry} className="btn btn-success float">Submit</button>
                            </div>
                        </div>
                    </div>
                )}           
            </div>    
        )
    }
    
    
}

export default ViewUserData;