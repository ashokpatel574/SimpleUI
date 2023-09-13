import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import Text from "../../components/text/Text";
import "./textPage.css";

const TextPage = () => {
  return (
    <article className="documents_container">
      <h2>Text Component</h2>
      <p>
        The Text component is used render text and paragraphs within a
        interface.
      </p>

      <div className="text_container">
        <Text size="xs" content="(xs) In love with React and CSS" />
        <Text size="s" content="(s) In love with React and CSS" />
        <Text size="m" content="(m) In love with React and CSS" />
        <Text size="l" content="(l) In love with React and CSS" />
        <Text size="xl" content="(xl) In love with React and CSS" />
        <Text size="2xl" content="(2xl) In love with React and CSS" />
        <Text size="3xl" content="(3xl) In love with React and CSS" />
        <Text size="4xl" content="(4xl) In love with React and CSS" />
        <Text size="5xl" content="(5xl) In love with React and CSS" />
        <Text size="6xl" content="(6xl) In love with React and CSS" />
      </div>

      <h3>How to use alert component?</h3>
      <div className="snippet_container">
        <CodeSnippetHighlighter
          codeString={` <Text size="xs" content="(xs) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="s" content="(s) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={`  <Text size="m" content="(m) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="l" content="(l) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="xl" content="(xl) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="2xl" content="(2xl) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Text size="3xl" content="(3xl) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="4xl" content="(4xl) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="5xl" content="(5xl) In love with React and CSS" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Text size="6xl" content="(6xl) In love with React and CSS" />`}
        />
      </div>
    </article>
  );
};

export default TextPage;
