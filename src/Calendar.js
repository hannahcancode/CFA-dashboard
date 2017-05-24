import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

class Calendar extends Component {


  render() {
    let today = new Date();
    let lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div>
        <InfiniteCalendar
          displayOptions={{
            layout: 'landscape'
          }}
          width={700}
          height={200}
          selected={today}
          disabledDays={[0,6]}
          minDate={lastWeek}
        />
      </div>
    );
  }
}

export default Calendar;
