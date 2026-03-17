import {DispatchEvent} from '../types';

// We are providing the dispatch events only because this is a fake scenario
// In the real world this function would call directly the EventManager APIs
export async function getEvents(dispatchEvents: DispatchEvent[]): Promise<DispatchEvent[]> {
    // In the real world
    // await request.GET(config.EventManagerURL)
    return dispatchEvents;
} 