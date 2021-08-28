import React, { memo } from "react";
import ShareIcon from "../images/share.png";
import CopyIcon from "../images/copy.png";

const navigatorHasShare = navigator.share;

const URL = "https://main.d38rvspk2bo6hv.amplifyapp.com/";

function Actions({ post, subject }) {
  const { id, title } = post;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - Breaking News - ${subject}`,
      text: title,
      url: URL,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(
      `${title} - *Learn more about in* ${URL}/${subject}/${id}`
    );
  };

  const renderAction = () => {
    const action = navigatorHasShare ? shareInfo : copyInfo;

    const icon = navigatorHasShare ? ShareIcon : CopyIcon;

    return (
      <div className="share-icon">
        <img alt="icon" src={icon} onClick={action} />
      </div>
    );
  };

  return <div className="share">{renderAction()}</div>;
}

export default memo(Actions);
