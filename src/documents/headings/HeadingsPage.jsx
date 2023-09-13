import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import Headings from "../../components/headings/Headings";
import "./headingsPage.css";

const HeadingsPage = () => {
  return (
    <article className="documents_container">
      <h2>Headings Component</h2>
      <p>
        The Headings component is used render sementic HTML heading elements
      </p>

      <div className="headings_container">
        <Headings size="xs" text="(xs) In love with React and Next" />
        <Headings size="s" text="(s) In love with React and Next" />
        <Headings size="m" text="(m) In love with React and Next" />
        <Headings size="l" text="(l) In love with React and Next" />
        <Headings size="xl" text="(xl) In love with React and Next" />
        <Headings size="2xl" text="(2xl) In love with React and Next" />
        <Headings size="3xl" text="(3xl) In love with React and Next" />
        <Headings size="4xl" text="(4xl) In love with React and Next" />
      </div>

      <h3>How to use alert component?</h3>
      <div className="snippet_container">
        <CodeSnippetHighlighter
          codeString={`<Headings size="xs" text="(xs) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Headings size="s" text="(s) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Headings size="m" text="(m) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Headings size="l" text="(l) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Headings size="xl" text="(xl) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Headings size="2xl" text="(2xl) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Headings size="3xl" text="(3xl) In love with React and Next" />`}
        />
        <CodeSnippetHighlighter
          codeString={` <Headings size="4xl" text="(4xl) In love with React and Next" />`}
        />
      </div>
    </article>
  );
};

export default HeadingsPage;
