import React, { Fragment } from "react";
import { Text, Color, render, Box } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import Select from "../select";

const TEXT_COLOR = "#9bfaff";

function UI() {
  return (
    <Fragment>
      <Box marginTop={1} flexDirection="column" />
      <Color bold hex={TEXT_COLOR}>
        Hey, I am
      </Color>
      <Gradient name="pastel">
        <BigText text="Guy Livni" />
      </Gradient>
      <Box />
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
      <Select />
    </Fragment>
  );
}

render(<UI />);
