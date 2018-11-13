import React, { Component } from 'react';
import styled from 'react-emotion';
import moment from 'moment';

import { WORLD_TIME, EVENTS } from '../constants';

const PRIMARY_TEXT = '#3D3D3F';
const BACKGROUND = '#F0F0F0';
const ALT1 = '#FF532B';
const ALT2 = '#3D3D3F';

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

const Wrapper = styled.div`
  color: ${PRIMARY_TEXT};
`

const Events = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 -0.5rem;
`;

const Event = styled.div`
  border: 1.5px solid ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  border-radius: 6px;
  display: flex;
  flex: 0 0 calc(50% - .66rem);
  flex-direction: column;
  font-size: .875rem;
  margin: 0.33rem;
  min-width: 8rem;
  padding: 0.75rem 0.5rem;
  text-align: center;

  @media (min-width: 360px) {
    /* flex: 0 0 calc(50% - 1rem); */
    /* margin: 0.5rem; */
    /* min-width: 10rem; */
  }

  @media (min-width: 420px) {
    flex: 0 0 calc(50% - 1rem);
    margin: 0.5rem;
    min-width: 10rem;
  }

  @media (min-width: 600px) {
    flex: 0 0 auto;
  }
`;

const Name = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-size: .875rem;
  font-weight: 600;
  margin: 0.5rem 0 0;
`;

const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 1.4rem;
  margin: 0.33rem 0;

  @media (min-width: 360px) {
    height: 2.8rem;
  }

  @media (min-width: 380px) {
    height: 4rem;
  }

  svg {
    transform: scale(0.6);

    @media (min-width: 360px) {
      transform: scale(0.8);
    }

    @media (min-width: 380px) {
      transform: scale(1);
    }
  }

  svg path, svg circle, svg polygon {
    fill: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  }
`;

const Day = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-size: 1.1rem;
  margin: 0 0 0.33rem
`;

const Duration = styled.div`
  color: ${p => p.isCurrent ? ALT1 : PRIMARY_TEXT};
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.05rem;
`;