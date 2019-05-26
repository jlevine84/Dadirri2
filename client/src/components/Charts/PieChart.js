import React from 'react';
import { Pie } from 'react-chartjs-2';
import './PieChart.css'

function PieChart(props) {

    function getData(data) {
        
        let medtrues = 0
        let medfalses = 0
        let exertrues = 0
        let exerfalses = 0
        let showertrues = 0
        let showerfalses = 0

        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["MedicineTaken"]) {
                medtrues = medtrues + 1
            } else if
                (!data[i]["MedicineTaken"]) {
                medfalses = medfalses + 1
            }

        }

        let medTotal = parseInt(medtrues) + parseInt(medfalses)
        let medTruPer = parseInt(medtrues)/parseInt(medTotal) * 100
        let medFalPer = parseInt(medfalses) / parseInt(medTotal) * 100

        const medicineData = {

            labels: [`Took Meds: ${medTruPer.toFixed(2)}%`, `Didn't Take Meds: ${medFalPer.toFixed(2)}%`],
            datasets: [
                {
                    data: [parseInt(medtrues), parseInt(medfalses)],
                    backgroundColor: ['rgba(149, 88, 206, .5)'],
                    hoverBackgroundColor: ['rgba(149, 88, 206, 1)']
                }
            ]
        }

        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["Exercise"]) {
                exertrues = exertrues + 1
            } else if
                (!data[i]["Exercise"]) {
                exerfalses = exerfalses + 1
            }
        }

        let exerTotal = parseInt(exertrues) + parseInt(exerfalses)
        let exerTruPer = parseInt(exertrues) / parseInt(exerTotal) * 100
        let exerFalPer = parseInt(exerfalses) / parseInt(exerTotal) * 100

        const exerciseData = {
            labels: [`Exercised: ${exerTruPer.toFixed(2)}%`, `Didn't Exercise: ${exerFalPer.toFixed(2)}%`],
            datasets: [
                {
                    data: [parseInt(exertrues), parseInt(exerfalses)],
                    backgroundColor: ['rgba(142, 204, 159, 5)'],
                    hoverBackgroundColor: ['rgba(142, 204, 159, 1)']
                }
            ]
        }

        for (var i = data.length - 1; i > -1; i--) {
            if (data[i]["Showered"]) {
                showertrues = showertrues + 1
            } else if
                (!data[i]["Showered"]) {
                showerfalses = showerfalses + 1
            }
        }
        let showerTotal = parseInt(showertrues) + parseInt(showerfalses)
        let showerTruPer = parseInt(showertrues) / parseInt(showerTotal) * 100
        let showerFalPer = parseInt(showerfalses) / parseInt(showerTotal) * 100

        const showerData = {
            labels: [`Showered: ${(showerTruPer.toFixed(2))}%`, `Didn't Shower: ${showerFalPer.toFixed(2)}%`],
            datasets: [
                {
                    data: [parseInt(showertrues), parseInt(showerfalses)],
                    backgroundColor: ['rgba(41, 152, 216, 0.5)'],
                    hoverBackgroundColor: ['rgba(41, 152, 216, 1)']
                }
            ]
        }

        return (
            <div>
                <Pie className="pies" data={medicineData} width={10} height={10} />
                <Pie data={exerciseData} width={10} height={10} />
                <Pie data={showerData} width={10} height={10} />
            </div>
        )
    }

    return (
        <div className="pie-chart">
            {getData(props.dbreturn)}
        </div>
    );

}



export default PieChart