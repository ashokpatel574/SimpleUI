import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import { ClipboardIcon, ClipboardCheckIcon } from "./codeSnippetIcons";

// eslint-disable-next-line react/prop-types
const CodeSnippetHighlighter = ({ codeString }) => {
  const [copy, setCopy] = useState(false);

  const clipBoardHandler = () => {
    navigator.clipboard.writeText(codeString);
    setCopy(true);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setCopy(false);
    }, 3500);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [copy]);

  return (
    <div className="codeBlock_conatiner">
      <SyntaxHighlighter language="jsx" style={nightOwl} wrapLongLines={true}>
        {codeString}
      </SyntaxHighlighter>
      {copy ? (
        <span className="copy-btn">
          <ClipboardCheckIcon />
        </span>
      ) : (
        <span className="copy-btn" onClick={clipBoardHandler}>
          <ClipboardIcon />
        </span>
      )}
    </div>
  );
};

export default CodeSnippetHighlighter;
