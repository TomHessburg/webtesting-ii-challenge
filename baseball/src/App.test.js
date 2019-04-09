import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display.js';
import Dashboard from './components/Dashboard.js';

import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('adds a ball', () => {

    const { getByText } = render(<App />);

    const button = getByText("ball");
    fireEvent.click(button);
    getByText('balls: 1')
  })
  it('balls out at 4', () => {

    const { getByText } = render(<App />);

    const button = getByText("ball");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('balls: 0')
  })

  it('adds a strike', () => {

    const { getByText } = render(<App />);

    const button = getByText("strike");
    fireEvent.click(button);
    getByText('strikes: 1')
  })
  it('strikes out at 3', () => {

    const { getByText } = render(<App />);

    const button = getByText("strike");
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('strikes: 0')
  })

  it('adds a foul', () => {

    const { getByText } = render(<App />);

    const button = getByText("foul");
    fireEvent.click(button);
    getByText('fouls: 1')
  })
  it('fouls stop at 2', () => {

    const { getByText } = render(<App />);

    const button = getByText("foul");
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    getByText('fouls: 2')
  })
  it('strikes stop at 2 with fouls', () => {
    const { getByText } = render(<App />);
    
    getByText('strikes: 2')
  })

  it('adds a hit', () => {

    const { getByText } = render(<App />);

    const button = getByText("hit");
    fireEvent.click(button);
    getByText('hits: 1')
  })
  it('hits rest values to 0', () => {

    const { getByText } = render(<App />);

    getByText('strikes: 0')
    getByText('balls: 0')
    getByText('fouls: 0')
  })

  it('balls, strikes both reset values to 0 at right points', () => {

    const { getByText } = render(<App />);

    const strikeButton = getByText("strike");
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    getByText('strikes: 0')

    const ballButton = getByText("ball");
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    getByText('balls: 0')
  })
})

describe('<Display />', () => {
  it('renders without crashing', () => {
    render(<Display />);
  });
  it('renders w info passed', () => {
    render(<Dashboard
      balls={3} 
      strikes={2}
      fouls={2}
      hits={4}
    />
  );
  })
})

describe('<Dashboard />', () => {
  it('renders without crashing', () => {
    render(<Dashboard />);
  });
})