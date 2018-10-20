import React from "react";
import BoardList from "./BoardList";
import { createShallow } from "@material-ui/core/test-utils";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { boards } from "../../fakeData";
import toJson from "enzyme-to-json";

// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("BoardList Component", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should render a div", () => {
    let wrapper = shallow(<BoardList boards={boards} />);
    expect(wrapper.type()).toEqual("div");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should render 1 Typogragh and 2 Grid", () => {
    let wrapper = shallow(<BoardList boards={boards} />);
    expect(wrapper.find(Typography).length).toEqual(1);
    expect(wrapper.find(Grid).length).toEqual(2);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
