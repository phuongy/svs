import React from 'react';
import moment from 'moment';
import { WORLD_TIME, CLIENT_TIME } from '../../constants';
import EVENTS from './data';
import { Wrapper } from './styles';
import { now } from 'moment';

export class Hourly extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      now: CLIENT_TIME
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.updateTimers();
      this.props.updateServerTime();
    }, 30000);
  }

  getDayIndex = () => WORLD_TIME.format('d');

  getHour = time => (offset = 0) => {
    const offsetTime = time.clone().add(offset, 'hours');
    return `${offsetTime.format('H')}:00`
  };

  getWorldTimeHour = this.getHour(WORLD_TIME);

  getClientTimeHour = this.getHour(moment());

  getUpcomingEvents = hour => {
    const dayIndex = this.getDayIndex();
    const dayEvents = EVENTS[dayIndex];

    return dayEvents.find(x => x.time === hour).events || [];
  }

  render() {
    let hours = [];
    for (let i = 0; i < 12; i++) {
      hours = [...hours, i];
    }

    const currentClientHour = this.getClientTimeHour(0);

    const upcomingEvents = hours.map(h => {
      const hour = this.getWorldTimeHour(h);
      return ({
        gametime: hour,
        mytime: this.getClientTimeHour(h),
        events: this.getUpcomingEvents(hour)
      });
    });

    return (
      <Wrapper>
        {upcomingEvents.map((x, index) => (
          <React.Fragment>
            <strong className={currentClientHour === x.mytime ? 'current-hour' : ''}>{x.mytime} </strong>
            <small>({x.gametime} ST)</small><br />
            <ul>
              {x.events.map(y => <li>{y.desc}</li>)}
            </ul>
          </React.Fragment>))
        }
      </Wrapper>
    )
  }
}