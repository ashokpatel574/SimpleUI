import Badge from "../../components/badge/Badge";
import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import "./badgePage.css";

const BadgePage = () => {
  return (
    <article className="documents_container">
      <h2>Badge Component</h2>
      <p>
        The Badge component is used to highlight and display short information,
        labels and statuses
      </p>

      <div className="badge_container">
        <Badge type="primary" title="Primary" />
        <Badge type="secondary" title="Secondary" />
        <Badge type="success" title="Success" />
        <Badge type="danger" title="Danger" />
        <Badge type="warning" title="Warning" />
        <Badge type="info" title="Info" />
      </div>

      <h3>How to use badge component?</h3>
      <div className="snippet_container">
        <CodeSnippetHighlighter
          codeString={`<Badge type="primary" title="Primary" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Badge type="secondary" title="Secondary" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Badge type="success" title="Success" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Badge type="danger" title="Danger" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Badge type="warning" title="Warning" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Badge type="info" title="Info" />`}
        />
      </div>
    </article>
  );
};

export default BadgePage;
