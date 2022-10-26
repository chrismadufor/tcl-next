import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function SharePost({ slug }) {
  return (
    <div className="mt-3">
        <h1 className="mb-3 text-gray-700">Hope you enjoyed reading this post. Share with your friends.</h1>
      <div>
        <FacebookShareButton
          url={`https://tcl-next-chrismadufor.vercel.app/blog/${slug}`}
          className="mr-2"
        >
          <FacebookIcon size={40} round />
        </FacebookShareButton>
        <LinkedinShareButton
          url={`https://tcl-next-chrismadufor.vercel.app/blog/${slug}`}
          title="Check out this post on the Techspecialist Blog"
          className="mr-2"
        >
          <LinkedinIcon size={40} round />
        </LinkedinShareButton>
        <TwitterShareButton
          url={`https://tcl-next-chrismadufor.vercel.app/blog/${slug}`}
          title="Check out this post on the Techspecialist Blog"
        >
          <TwitterIcon size={40} round />
        </TwitterShareButton>
      </div>
    </div>
  );
}

export default SharePost;
