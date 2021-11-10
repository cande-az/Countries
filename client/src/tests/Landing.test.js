import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Landing from "../components/Landing";

configure({ adapter: new Adapter() });

describe("<Landing />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Landing />);
  });

  it("render one <Link />", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
  it('First Link have text "Home" and redirect to "/home".', () => {
    //el orden donde declaran los Links es importante
    expect(wrapper.find(Link).at(0).prop("to")).toEqual("/home");
    // Tiene que ser literal! ojo con los espacios.
    expect(wrapper.find(Link).at(0).text()).toEqual("Ingresar");
  });
});