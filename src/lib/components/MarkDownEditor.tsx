import React from "react";
import Editor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

type MarkdownProps = {
  value: string;
  setValue: (value: string) => void;
};

const MarkDownEditor = ({ value, setValue }: MarkdownProps) => {
  function handleEditorChange({ text }: any) {
    setValue(text);
  }
  const mdParser: any = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    langPrefix: "language-",
    linkify: false,
    typographer: false,

    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return (
            '<pre class="hljs"><code>' +
            hljs.highlight(str, { language: lang, ignoreIllegals: false })
              .value +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre class="hljs"><code>' +
        mdParser.utils.escapeHtml(str) +
        "</code></pre>"
      );
    },
    quotes: "“”‘’",
    breaks: false,
  });
  return (
    <div>
      <div className="w-full ">
        <Editor
          value={value}
          onChange={handleEditorChange}
          renderHTML={(text) => mdParser.render(text)}
          // allowPasteImage
          canView={{
            menu: true,
            md: true,
            html: true,
            both: false,
            fullScreen: true,
            hideMenu: false,
          }}
          // view={{
          //     menu: true,
          //     md: true,
          //     html: false
          // }}
          placeholder=" This is your markdown Editor. Type something..."
          className="rounded-md h-[80vh] "
        />
      </div>
    </div>
  );
};

export default MarkDownEditor;
