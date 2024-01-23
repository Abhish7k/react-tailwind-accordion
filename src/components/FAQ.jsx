/* eslint-disable react-refresh/only-export-components */

import Accordion from "./Accordion";

function FAQ() {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion title={"This is the title"} answer={"this is the answer"} />
      <Accordion title={"This is the title"} answer={"this is the answer"} />
      <Accordion title={"This is the title"} answer={"this is the answer"} />
    </div>
  );
}

export default FAQ;
