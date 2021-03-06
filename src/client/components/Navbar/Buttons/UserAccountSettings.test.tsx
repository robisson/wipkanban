import * as React from "react";
import UserAccountSettings from "./UserAccountSettings";
import { createShallow } from "@material-ui/core/test-utils";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { ShallowWrapper } from "enzyme";

describe("<UserAccountSettings /> Component", () => {
  let shallow: any;
  let wrapper:ShallowWrapper;
  let user: Object;
  let fn: any;

  beforeEach(() => {
    shallow = createShallow({ dive: true });
    user = { name: "name", lastname: "lastname" };
    fn = jest.fn();
    wrapper = shallow(<UserAccountSettings user={user} onLogout={fn} />);
  });

  it("should render correctly", () => {
    expect(wrapper.find(Menu).type()).toEqual(Menu);
    expect(wrapper.find(MenuItem).length).toEqual(2);
    expect(wrapper).toMatchSnapshot();
  });

  it("should state is not null when clicked on IconBUtton button", () => {
    wrapper.find(IconButton).simulate("click", {
      currentTarget: true
    });

    expect(wrapper.state()).toEqual({anchorEl: true});

    expect(wrapper).toMatchSnapshot();
  });

  it("should state to be null when clicked on MenuItem", () => {
    wrapper.find(MenuItem).at(0).simulate("click");

    expect(wrapper.state()).toBeNull;

    expect(wrapper).toMatchSnapshot();
  });

  it("should call function when clicked on logout button", () => {
    wrapper
      .find(ListItemText)
      .at(1)
      .simulate("click");
    expect(fn.mock.calls.length).toEqual(1);

    expect(wrapper).toMatchSnapshot();
  });
});
