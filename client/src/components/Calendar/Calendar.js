import React from "react";
import moment from "moment";
import "./calendar.css";

export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  state = {
    showMonthTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: moment().format("DD"),
    selectedMonth: moment().format("MM"),
    selectedYear: moment().format("YYYY")
  };

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  year = () => {
    return this.state.dateObject.format("Y");
  };

  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
      .startOf("month")
      .format("d"); // Day of week 0...1..5...6
    return firstDay;
  };

  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  showMonth = (e, month) => {
    this.setState({
      showMonthTable: !this.state.showMonthTable,
     showDateTable: !this.state.showDateTable
    });
  };

  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo);
    this.setState({
      selectedMonth: dateObject.format("MMMM"),
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setMonth(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });
    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });
    rows.push(cells);
    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="select-month-table">
        <thead>
          <tr>
            <th>Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  };

  onPrev = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr),
      selectedMonth: this.state.dateObject.format("MM")
    });
  };

  onNext = () => {
    let curr = "";
    if (this.state.showYearTable === true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr),
      selectedMonth: this.state.dateObject.format("MM")
    });
  };

  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  // Selected Day function
  onDayClick = async (event) => {
    let newD = moment(event.target.getAttribute('value'), 'D').format("DD")
    await this.setState({ selectedDay: newD })
    let grabMonth = this.state.selectedMonth
    let grabDay = this.state.selectedDay
    let grabYear = this.state.selectedYear
    this.props.grabCalendarDate(grabYear, grabDay, grabMonth)
  }

  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
      let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
      daysInMonth.push(
        <td 
          key={d}
          value={d}
          onClick={event => this.onDayClick(event)}
          className={currentDay + selectedClass}
        >
        {d}
        </td>
      );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
      if (i === totalSlots.length - 1) {
        // let insertRow = cells.slice();
        rows.push(cells);
      }
    });

    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <div className="calendar-container">
        <div className="calendar-nav">
          <button
            onClick={e => {
              this.onPrev();
            }}
            class="calendarbtn btn-prev"
          >Previous</button>
          {!this.state.showMonthTable ?  (
            <div
              onClick={e => {
                this.showMonth();
              }}
              className="month-label"
            >
              <b>Month: {this.month()}</b>
            </div>
          ) : (<div className="month-label">{this.month()}</div>)}
          <div className="year-label">
            <b>Year: {this.year()}</b>
          </div>
           <button
          onClick={e => {
            this.onNext();
          }}
          className="calendarbtn btn-prev"
          >Next</button>
        </div>
       
        {this.state.showMonthTable && (
          <this.MonthList props={this.month()} data={moment.months()} />
        )}

        {this.state.showDateTable && (
          <table className="select-day-table">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
            <tbody>{daysinmonth}</tbody>
          </table>
        )}
      </div>
    );
  }
}