import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import Image from "../../components/image/Image";
import "./imagePage.css";

const ImagePage = () => {
  return (
    <article className="documents_container">
      <div className="documents_box">
        <h2>Image Component</h2>
        <p>
          The Image component is used display images with support for fallback
        </p>

        <div className="image_container">
          <Image
            srcImg="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackImg="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            maxWidth="800px"
            maxHeight="400px"
            imgType="full"
            altText="Mountain landscape picture"
          />
        </div>

        <h3>How to use alert component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Image
            srcImg="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            fallbackImg="https://nitikapharma.com/wp-content/uploads/2017/11/800x400-ph.jpg"
            maxWidth="800px"
            maxHeight="400px"
            imgType="full"
            altText="Mountain landscape picture"
          />`}
          />
        </div>
      </div>
      <div className="documents_box">
        <h2>Round Image Component</h2>
        <p>The Image component is used display round images</p>

        <div className="image_container">
          <Image
            srcImg="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            maxWidth="200px"
            maxHeight="100px"
            imgType="round"
            altText="Mountain landscape picture"
          />
        </div>

        <h3>How to use alert component?</h3>
        <div className="snippet_container">
          <CodeSnippetHighlighter
            codeString={` <Image
            srcImg="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
            maxWidth="200px"
            maxHeight="100px"
            imgType="round"
            altText="Mountain landscape picture"
          />`}
          />
        </div>
      </div>
    </article>
  );
};

export default ImagePage;
