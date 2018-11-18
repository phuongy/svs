import React from 'react';
import moment from 'moment'

export const CLIENT_TIME = moment(new Date())
export const WORLD_TIME = moment().utcOffset(-2)
export const CONTENT_WIDTH = '56rem'
