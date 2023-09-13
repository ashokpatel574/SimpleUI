/* eslint-disable react/prop-types */
import Alert from "../../components/alert/Alert";
import CodeSnippetHighlighter from "../../components/codeSnippetHighlighter/CodeSnippetHighlighter";
import "./alertPage.css";
import {
  SuccessAlertIcon,
  InfoAlertIcon,
  WarningAlertIcon,
  ErrorAlertIcon,
} from "../../components/alert/AlertIcons";

const getIconType = (status) => {
  const caseType = status.toLowerCase();
  switch (caseType) {
    case "success": {
      return SuccessAlertIcon;
    }

    case "error": {
      return ErrorAlertIcon;
    }

    case "waring": {
      return WarningAlertIcon;
    }

    case "info": {
      return InfoAlertIcon;
    }

    default: {
      return InfoAlertIcon;
    }
  }
};

const AlertIcon = ({ status }) => {
  const IconType = getIconType(status);
  return <IconType />;
};

const AlertPage = () => {
  return (
    <article className="documents_container">
      <h2>Alert Component</h2>
      <p>
        The Alert component is used to display various types of message with
        different statuses.
      </p>

      <div className="alert_container">
        <Alert status="success">
          <AlertIcon status="success" />
          Data uploaded on server. Fire on!
        </Alert>
        <Alert status="error">
          <AlertIcon status="error" />
          There was an error processing your request!
        </Alert>
        <Alert status="warning">
          <AlertIcon status="warning" />
          Seems your account about to expire, Upgrade now!
        </Alert>
        <Alert status="info">
          <AlertIcon status="info" />
          neoG is going live on 30th August, Get ready!
        </Alert>
      </div>

      <h3>How to use alert component?</h3>
      <div className="snippet_container">
        <CodeSnippetHighlighter
          codeString={`<Alert status="success">
          <AlertIcon status="success" />
          Data uploaded on server. Fire on!
</Alert>`}
        />
        <CodeSnippetHighlighter
          codeString={`<Alert status="error">
          <AlertIcon status="error" />
          There was an error processing your request!
</Alert>`}
        />
        <CodeSnippetHighlighter
          codeString={`<Alert status="warning">
          <AlertIcon status="warning" />
          Seems your account about to expire, Upgrade now!
</Alert>`}
        />
        <CodeSnippetHighlighter
          codeString={`<Alert status="info">
          <AlertIcon status="info" />
          neoG is going live on 30th August, Get ready!
</Alert>`}
        />
      </div>
    </article>
  );
};

export default AlertPage;
