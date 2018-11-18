import React, { Component } from 'react';
import moment from 'moment';

import { WORLD_TIME } from '../../constants';
import { EVENTS } from './data';
import { Wrapper, Events, Event, Day, Icon, Name, Duration } from './styles';

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
      this.updateTimers();
      this.props.updateServerTime();
    }, 30000);
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

  getFormattedDuration = ({ days, hours, minutes, seconds }) => `${days > 0 ? `${days}d ` : ''}${hours}h ${minutes}m`;

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
      <Wrapper>
        <h2>SVS Calendar</h2>
        <Events>
          {EVENTS.map((event, index) => {
            const day = this.getDateOfNextEvent(event).format('dddd');
            const duration = this.getTimeTillNextEvent(event);
            const isCurrent = duration === 'Now';
            const props = { isCurrent };

            return (
              <Event key={`option-${index}`} {...props}>
                <Day {...props}>{day}</Day>
                <Icon {...props}>{event.icon && (<event.icon />)}</Icon>
                <Name {...props}>{event.name}</Name>
                <Duration {...props}>{duration}</Duration>
              </Event>
            )
          })}
        </Events>
      </Wrapper>
    )
  }
}
