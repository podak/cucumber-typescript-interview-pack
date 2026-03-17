import { Given, Then } from '@cucumber/cucumber'
import {getEvents} from './services/event-manager';
import assert from 'assert';


Given(/I receive the order ...$/i, async function() {
  // To replace
  await new Promise(f => setTimeout(f, 1000))
})

// TODO 

Then('There should not be any event in EventManager', async function() {
  const events = await getEvents([]);
  assert.deepEqual(events, []);
})