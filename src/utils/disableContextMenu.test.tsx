import { MouseEvent } from 'react';
import { disableContextMenu } from './disableContextMenu';

describe('disableContextMenu', () => {
  it('preventDefault', () => {
    const event = { preventDefault: () => { } } as MouseEvent;
    const eventSpy = jest.spyOn(event, 'preventDefault');
    disableContextMenu(event);
    expect(eventSpy).toBeCalled();
  });
  it('stopPropagation', () => {
    const event = { stopPropagation: () => { } } as MouseEvent;
    const eventSpy = jest.spyOn(event, 'stopPropagation');
    expect(disableContextMenu(event)).toEqual(false);
    expect(eventSpy).toBeCalled();
  });
});