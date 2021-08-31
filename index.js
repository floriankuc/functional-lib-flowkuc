import { Maybe } from './src/Maybe.js';
import { Nothing } from './src/Nothing.js';
import { Just } from './src/Just.js';
import { getField } from './src/getField.js';
import os from 'os';

const alerts = {
  latitude: 29.76,
  longitude: -95.37,
  timezone: 'America/Chicago',
  offset: -5,
  currently: {
    time: 1503660334,
    summary: 'Drizzle',
    icon: 'rain',
    temperature: 24.97,
    uvIndex: 0,
  },
};

const getAlerts = () => alerts;

const produceAlertsTable = (weatherObj) =>
  Maybe.of(weatherObj)
    .map(getField('alerts'))
    .map((a) => a.map((x) => `<tr><td>${x.title}</td>` + `<td>${x.description.substr(0, 500)}...</td></tr>`))
    .map((a) => a.join(os.EOL))
    .map((s) => `<table>${s}</table>`);

console.log(getAlerts(29.76, -95.37, (x) => console.log(produceAlertsTable(x).valueOf())));

console.log(getAlerts(-34.9, -54.6, (x) => console.log(produceAlertsTable(x).orElse('<span>No alerts today.</span>'))));
