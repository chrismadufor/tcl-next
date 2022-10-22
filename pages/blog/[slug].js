import React, { useEffect, useState, useRef } from "react";
import blogPosts from "../../helper-files/blogpost-files";
import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import styles from "../../styles/Resources.module.css";
import { useRouter } from "next/router";
import ContactSection from "../../components/ContactSection";
import Link from "next/link";

function BlogPage() {
  let [currArr, setCurrArr] = useState("");
  let [currentPost, setCurrentPost] = useState({});
  let count = 3;
  let sidePosts = [];
  for (let i = 0; i < count; i++) {
    sidePosts.push(blogPosts[blogPosts.length - 1 - i]);
  }
  const router = useRouter();
  let slug = router.asPath.replace("/blog/", "");

  // The issue is that route is undefined at first so it makes the id not valid.

  useEffect(() => {
    let savedId = sessionStorage.getItem("tcl-blog-id");
    if (slug !== "[slug]") {
      if (savedId) {
        currId = savedId;
      } else {
        let currPost = blogPosts.filter((post) => post.slug == slug);
        const blogId = currPost[0].id;
        setCurrArr(blogId);
        setCurrentPost(blogPosts[+blogId - 1]);
      }
    }
  }, [slug]);
  const blogContent = useRef();
  useEffect(() => {
    currentPost ? (blogContent.current.innerHTML = currentPost.content) : null;
  }, [blogContent, currentPost]);
  return (
    <div>
      <Head>
        <title> {currentPost.title} | Techspecialist Blog</title>
        <meta name="description" content="Read this and more on the Techspecialist blog" />
        <meta
          name="keywords"
          content="Techspecialist, blog, techspecialist blog, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company Monitoring, Continous Testing, Improvement, Backups, Problem Management, Capacity Management, Incident Mangement, Application Knowledge, First Level Support, Second Level Support, Third Level Support, Configuration Management, Release and Deployment"
        />
        <meta property="og:url" content={`https://techspecialistlimited.com/blog/${currentPost.slug}`} />
        <meta property="og:title" content={currentPost.title} />
        <meta
          property="og:description"
          content="Read this and more on the Techspecialist blog"
        />
        <meta property="og:image" content={currentPost.img} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={currentPost.title} />
        <meta
          name="twitter:description"
          content="Read this and more on the Techspecialist blog"
        />
        <meta name="twitter:image" content={currentPost.img} />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <Header />
      <div
        className={`${styles.blogpage_hero} ${styles.blog_bg} relative flex items-center`}
      >
        <div className={styles.text}>
          <h1 className="text-white mt-10 text-2xl sm:text-3xl">
            {currentPost.title}
          </h1>
          <div className="flex text-gray-300 text-sm md:text-base mt-5">
            By {currentPost.author} &nbsp; | &nbsp; {currentPost.date}
          </div>
        </div>
      </div>
      <div className={`${styles.blog_main} flex justify-between`}>
        <div className={`${styles.blog_content} pt-10`}>
          <img className={styles.featured_img} src={currentPost.img} alt="" />
          <div
            className={`text-gray-700 text-sm ${styles.blog_content_text} leading-loose py-10`}
            ref={blogContent}
          ></div>
        </div>
        <div className={`${styles.blog_side} pt-10 grid`}>
          <h1 className="mb-4 uppercase font-semibold text-xl text-center">
            Recent Posts
          </h1>
          <div className={styles.blog_side_wrap}>
            {sidePosts.map((post, index) => (
              <div
                key={index}
                className={`${styles.blog_side_item} border border-gray-100 shadow mb-5`}
              >
                <img src={post.img} alt="" />
                <div className={`${styles.text} relative p-3`}>
                  <Link
                    href={`/blog/${post.slug}`}
                    state={{ id: `${post.id}` }}
                  >
                    <h3 className="font-semibold text-sm cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <div
                    className={`${styles.metadata} flex text-gray-500 text-xs mt-5`}
                  >
                    By {post.author} &nbsp; | &nbsp; {post.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default BlogPage;
