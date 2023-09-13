import Card from "../../components/card/Card";
import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import "./cardPage.css";
import { RemoveIcon } from "../../components/card/cardIcons";

const CardPage = () => {
  return (
    <article className="documents_container">
      <div className="documents_box">
        <h2>Card with badge Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card
            title="Title"
            content="Card content with a badge"
            type="badge"
            badgeContent="New"
          />
        </div>

        <h3>How to use card with badge component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Card
            title="Title"
            content="Card content with a badge"
            type="badge"
            badgeContent="New"
          />`}
          />
        </div>
      </div>
      <div className="documents_box">
        <h2>Card with dismiss Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card
            title="Title"
            content="Card content with a badge"
            type="dismiss"
            Icon={RemoveIcon}
          />
        </div>

        <h3>How to use card with dismiss component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Card
            title="Title"
            content="Card content with a badge"
            type="dismiss"
            Icon={RemoveIcon}
          />`}
          />
        </div>
      </div>
      <div className="documents_box">
        <h2>Card with text overlay Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card
            title="Overlay Title"
            content="Card with text overlay Component"
            type="textOverlay"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackImgSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />
        </div>

        <h3>How to use card with text overlay component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Card
            title="Overlay Title"
            content="Card with text overlay Component"
            type="textOverlay"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackImgSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />`}
          />
        </div>
      </div>

      <div className="documents_box">
        <h2>Card with text Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card content="This is text only card" type="text" />
        </div>

        <h3>How to use card with text component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={`<Card content="This is text only card" type="text" />`}
          />
        </div>
      </div>

      <div className="documents_box">
        <h2>Vertical Card Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card
            title="Vertical card title"
            content="Vertical card text content"
            type="vertical"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />
        </div>

        <h3>How to use vertical card component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Card
            title="Vertical card title"
            content="Vertical card text content"
            type="vertical"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />`}
          />
        </div>
      </div>

      <div className="documents_box">
        <h2>Horizontal Card Component</h2>
        <p>
          Card is flexable component used to group and display content in clear
          and concise format
        </p>

        <div className="card_container">
          <Card
            title="Horizontal card title"
            content="Horizontal card text content"
            type="horizontal"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />
        </div>

        <h3>How to use horizontal card component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Card
            title="Horizontal card title"
            content="Horizontal card text content"
            type="horizontal"
            imgSrc="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackSrc="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            altText="mountain landscape picture"
            maxWidth="300px"
          />`}
          />
        </div>
      </div>
    </article>
  );
};

export default CardPage;
