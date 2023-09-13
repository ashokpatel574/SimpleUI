import Avatar from "../../components/avatar/Avatar";
import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import "./avatarPage.css";

const AvatarPage = () => {
  return (
    <article className="documents_container">
      <h2>Avatar Component</h2>
      <p>
        The Avatar component display an image representing a user or entity,
        along with a name
      </p>

      <div className="avatar_container">
        <Avatar size="sm" src={"https://bit.ly/code-beast"} name="Code Beast" />
        <Avatar size="m" src={"https://bit.ly/code-beast"} name="Code Beast" />
        <Avatar size="l" src={"https://bit.ly/code-beast"} name="Code Beast" />
      </div>

      <h3>How to use avatar component?</h3>
      <div className="snippet_container">
        <CodeSnippetHighlighter
          codeString={`<Avatar size="sm" src={"https://bit.ly/code-beast"} name="Code Beast" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Avatar size="m" src={"https://bit.ly/code-beast"} name="Code Beast" />`}
        />
        <CodeSnippetHighlighter
          codeString={`<Avatar size="l" src={"https://bit.ly/code-beast"} name="Code Beast" />`}
        />
      </div>
    </article>
  );
};

export default AvatarPage;
