import React, { Component } from 'react';
import styled from 'react-emotion';
import moment from 'moment';

import { WORLD_TIME, EVENTS } from '../constants';

export class SVSCalculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startOfWeek: moment(WORLD_TIME).startOf('isoWeek'),
      now: moment(),
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.updateTimers()
    }, 1000);
  }

  updateTimers = () => {
    this.setState({ now: moment() });
  }
  /*
    getCompletionTime = duration => {
      const durationPattern = /(\dd\s)?(\d{1,2})?:(\d{1,2})?:(\d{1,2})?/g
      const durationComponents = durationPattern.exec(duration)
  
      console.log(durationComponents);
  
      if (durationComponents == null || durationComponents.length == null) return 0;
  
      const dayComponents = /(\d)/g.exec(durationComponents[1]) // extract days
      const days = dayComponents != null ? dayComponents[0] : 0;
  
      const hours = durationComponents[2];
      const minutes = durationComponents[3];
      const seconds = durationComponents[4];
  
      return moment(CLIENT_TIME)
        .addDays(days)
        .addHours(hours)
        .addMinutes(minutes)
    }
  */

  getDateOfNextEvent = event => {
    const { startOfWeek, now } = this.state;

    let current = startOfWeek.clone().add(event.dayIndex - 1, 'days');
    let daysDiff = current.diff(now, "days");

    if (daysDiff < 0) {
      current.add(7, 'days');
    }

    return current.add(30, 'minutes'); // offset 30 minutes for reset
  }

  getFormattedDuration = ({ days, hours, minutes, seconds }) => `${days > 0 ? `${days}d ` : ''}${hours}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`;

  getTimeTillNextEvent = event => {
    const { now } = this.state;
    const current = this.getDateOfNextEvent(event);

    const duration = moment.duration(current.diff(now));
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    if (hours > 0) {
      return this.getFormattedDuration({ days, hours, minutes, seconds });
    }

    return 'Now';
  }

  render() {
    return (
      <div>
        <h2>SVS Calendar</h2>
        <Events>
          {EVENTS.map((event, index) => (
            <Event key={`option-${index}`}>
              <Day>{this.getDateOfNextEvent(event).format('dddd')}</Day>
              <Icon>{event.icon && (<event.icon />)}</Icon>
              <Name>{event.name}</Name>
              <Duration>{this.getTimeTillNextEvent(event)}</Duration>
            </Event>
          ))}
        </Events>
      </div>
    )
  }
}

const Events = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.5rem;
`;

const Event = styled.div`
  border: 1.5px solid #000;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  font-size: .875rem;
  margin: 0.5rem;
  min-width: 10rem;
  padding: 1rem;
  text-align: center;
`;

const Name = styled.div`
  font-size: .875rem;
  font-weight: 600;
`;

const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 4rem;
  margin-bottom: 1rem;
`;

const Day = styled.div`
  font-size: 1.1rem;
  /* font-weight: 600; */
  margin-bottom: 1rem;
`;

const Duration = styled.div`
  font-family: Helvetica, Arial, sans-serif;
`;