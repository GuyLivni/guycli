import React from "react";
import SelectInput from "ink-select-input";
import opn from "opn";
import options from "./options";

const HANDLE_MAP = {
  site: ({ url }) => opn(url, { wait: false }),
  action: ({ fnc }) => fnc()
};

const handleSelect = ({ action }) => {
  const { type, fnc, url } = action;
  const handler = HANDLE_MAP[type];

  return handler({ url, fnc });
};

function Select() {
  return <SelectInput items={options} onSelect={handleSelect} />;
}

export default Select;
