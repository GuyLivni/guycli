import React, { Fragment } from "react";
import { Text, Color, render, Box } from "ink";
import SelectInput from "ink-select-input";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import opn from "opn";
import options from "./select-options";

const open = url => opn(url, { wait: false });

const handleSelect = ({ value, action }) => {
  if (value) {
    open(value);
  }

  if (action) {
    action();
  }
};

const TEXT_COLOR = "#9bfaff";

const UI = () => (
  <Fragment>
    <Gradient name="pastel">
      <BigText text="Guy Livni" />
    </Gradient>
    <Box marginBottom={1} flexDirection="column">
      <Box>
        <Color hex={TEXT_COLOR}>
          I’m a FrontEnd Engineer, a foodie and your friendly neighbourhood
          sweets dealer.
        </Color>
      </Box>
      <Box>
        <Color hex={TEXT_COLOR}>
          Talk with me about software, anime, bouldering and gaming.
        </Color>
      </Box>
    </Box>
    <SelectInput items={options} onSelect={handleSelect} />
  </Fragment>
);

render(<UI />);
