import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import Button from "../../components/button/Button";
import {
  SearchIcon,
  EditIcon,
  DeleteIcon,
  AddIcon,
} from "../../components/button/ButtonIcon";
import "./buttonPage.css";

const ButtonPage = () => {
  return (
    <article className="documents_container">
      <div className="documents_box">
        <h2>Button Components</h2>
        <p>Button components provides various style for different actions </p>
        <div className="button_container">
          <Button variant="solid" text="Solid Button" />
          <Button variant="outline" text="Outline Button" />
          <Button variant="ghost" text="Ghost Button" />
          <Button variant="link" text="Link Button" />
        </div>
        <h3>How to use button component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={`<Button variant="solid" text="Solid Button" />`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="outline" text="Outline Button" />`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="ghost" text="Ghost Button" />`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="link" text="Link Button" />`}
          />
        </div>
      </div>

      <div className="documents_box">
        <h2>IconButton Components</h2>
        <p>IconButton components combines icons with text for actions</p>
        <div className="button_container">
          <Button variant="iconType" text="Search">
            <SearchIcon />
          </Button>
          <Button variant="iconType" text="Edit">
            <EditIcon />
          </Button>
          <Button variant="iconType" text="Delete">
            <DeleteIcon />
          </Button>
          <Button variant="iconType" text="Add">
            <AddIcon />
          </Button>
        </div>
        <h3>How to use button component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={`<Button variant="iconType" text="Search">
        <SearchIcon />
</Button>`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="iconType" text="Edit">
        <EditIcon />
</Button>`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="iconType" text="Delete">
        <DeleteIcon />
</Button>`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="iconType" text="Add">
        <AddIcon />
</Button>`}
          />
        </div>
      </div>

      <div className="documents_box">
        <h2>Button Component</h2>
        <p>Button component provides various style for different actions </p>
        <div className="button_container">
          <Button variant="floatIconType">
            <AddIcon />
          </Button>
          <Button variant="floatIconType">
            <EditIcon />
          </Button>
        </div>
        <h3>How to use button component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={`<Button variant="floatIconType">
         <AddIcon />
</Button>`}
          />
          <CodeSnippetHighlighter
            codeString={`<Button variant="floatIconType">
         <EditIcon />
</Button>`}
          />
        </div>
      </div>
    </article>
  );
};

export default ButtonPage;
