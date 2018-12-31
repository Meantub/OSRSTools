import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store";

import SkillGetter from "../../src/components/SkillGetter";

const mockStore = configureStore();
const initialState = {
  userReducer: {
    isLoading: false,
    username: "",
    skillData: null
  }
};

const store = mockStore(initialState);

describe("<SkillGetter />", () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe("render()", () => {
    const wrapper = shallow(<SkillGetter store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("onClick() getStats", () => {
    const mockOnClick = jest.fn();
    const wrapper = mount(<SkillGetter store={store} />);

    wrapper.find("button").simulate("click");

    expect(mockOnClick.mock.calls.length).toEqual(1);
  });
});
