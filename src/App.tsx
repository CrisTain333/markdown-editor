import React from "react";
import MarkDownEditor from "./lib/components/MarkDownEditor";

const App = () => {
  const markdown = `
# Markdown Editor

---
 **Hello world!!!**

[![](https://avatars.githubusercontent.com/u/1680273?s=80&v=4)](https://avatars.githubusercontent.com/u/1680273?v=4)

1. sdfsdfsdf
2. sdfsdf

\`\`\`javascript
import React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';
\`\`\`
`;

  const [value, setValue] = React.useState(markdown);
  return (
    <div>
      <div className="text-center text-5xl font-bold font-mono my-5">
        Markdown Editor
      </div>

      <div className="mt-10 mx-20">
        <MarkDownEditor value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default App;
