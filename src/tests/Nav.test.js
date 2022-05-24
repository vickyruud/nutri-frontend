import { shallow } from 'enzyme';
import { screen, prettyDOM } from '@testing-library/react';
import NavBar from '../components/NavBar';
import NavItem from '../components/NavItem';

describe('NavBar', () => {
  let container;

  beforeEach(() => (container=shallow(<NavBar/>)))


  it('should render a <nav />', () => {
    expect(container.find('nav').length).toEqual(1);
  });
  it("should render 4 NavList items", () => {
    console.log(container.debug())
    expect(container.containsMatchingElement(<NavItem />)).toEqual(true);
    expect(container.find(NavItem)).toHaveLength(4)
  })
});
