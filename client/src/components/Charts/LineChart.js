import React from 'react';
import { Line } from 'react-chartjs-2';
import './LineChart.css'
import moment from 'moment'

function LineChart (props) {

    function getData(data) {
        let dates = []
        let energy = []
        let mood = []
        let anxiety = []
        let sleep = []
        let dailyLog = []
        let exerciseAmount = []
        let medicineTaken = []
        let exercise = []
    
        for (var i = data.length -1; i>-1; i--) {
          let dateFormatted = moment(data[i]['Date'], 'YYYYMMDD').format('MMMM DD')      
          anxiety.push(data[i]['Anxiety'])
          dailyLog.push(data[i]['DailyLog'])
          dates.push(dateFormatted)          
          energy.push(data[i]['Energy'])
          exercise.push(data[i]['Exercise'])
          exerciseAmount.push(data[i]['ExerciseAmount'])
          medicineTaken.push(data[i]['MedicineTaken'])
          mood.push(data[i]['Mood'])
          sleep.push(data[i]['SleepHours'])
        }
    
    
        let chartData = {
            labels: dates,
        
            datasets: [
            {
                label: 'Sleep',
                backgroundColor: 'rgba(140, 6, 224, .06)',
                borderColor: 'rgba(140, 6, 224, 1)',
                hoverBackgroundColor: 'rgba(140, 6, 224, 1)',
                hoverBorderColor: 'rgba(140, 6, 224, 1)',
                borderWidth: 1.5,
                data: sleep
                
            },
              {
                label: 'Mood',
                backgroundColor: 'rgba(184, 184, 32, 0.15)',
                hoverBackgroundColor: 'rgba(206, 250, 46, .5)',
                borderColor: 'rgba(199, 199, 81, 1)',
                hoverBorderColor:'rgba(199, 199, 81, 1)',
                borderWidth: 2,
                data: mood
        
            },
            {
                label: 'Anxiety',
                backgroundColor: 'rgba(163, 84, 97, 0.15)',
                borderColor: 'rgba(163, 84, 97, 1)',
                hoverBackgroundColor: '163, 84, 97, 1)',
                hoverBorderColor: '163, 84, 97, 1)',
                borderWidth: 1.5,
                data: anxiety
            },
            {
                label: 'Energy',
                backgroundColor: 'rgba(41, 142, 182, 0.15)',
                borderColor: 'rgba(41, 142, 182, 1)',
                hoverBackgroundColor: 'rgba(41, 142, 182, 1)',
                hoverBorderColor: 'rgba(41, 142, 182, 1)',
                borderWidth: 1.5,
                data: energy
            }
          ] 
        }

        return(
            <Line
                data={chartData}
                width={500}
                height={200}
                options={{
                    maintainAspectRatio: false,
                    scales: { yAxes: [{ ticks: { beginAtZero: true } }], xAxes: [{ ticks: { beginAtZero: true } }] }
                }}
            />
        )
    }


    return (
        <div className="lineChart">
            {getData(props.dbreturn)}
        </div>
    );
};

export default LineChart