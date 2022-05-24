import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import NavBar from '../components/NavBar';
import App from '../App';

describe('App', () => {
  let container;

  beforeEach(() => (container=shallow(<App/>)))


  it('should render a <h1 />', () => {
    const container = shallow(<App />)
    expect(container.find('h1').length).toEqual(1);
  });
  it("should render the Nav Component", () => {
    expect(container.containsMatchingElement(<NavBar />)).toEqual(true)
  })
});
