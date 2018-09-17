import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import App from './App';

describe('App (Snapshot)', () => {
  it('App renders input and button', () => {
    // const tree = renderer.create(<App />) //why do we need this??
    // const json = tree.toJSON()
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should display a text input to fill question', () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toEqual(1);
});

it('should display a submit button to send question to the Internet Gods', () =>{
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toEqual(1);
} )