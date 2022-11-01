import React from "react";
import blogPosts from "../../helper-files/blogpost-files";
import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import styles from "../../styles/Resources.module.css";
import { useRouter } from "next/router";
import ContactSection from "../../components/ContactSection";
import { GraphQLClient, gql } from "graphql-request";
import SharePost from "../../components/SharePost";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/cl8oydu3r1ivt01un5k9uek4q/master"
);
const QUERY = gql`
  query Posts($slug: String!) {
    posts(where: { slug: $slug }) {
      author
      slug
      id
      title
      featuredImage {
        url
      }
      datePublished
      body {
        html
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post) => ({ params: { slug: post ? post.slug : null } })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  if (params && params.slug) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, { slug });
    const post = data.posts[0];
    if(!post) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        post,
      }
    };
  }
  return {
    props: { error: true },
  };
}

function BlogPage({ post }) {
  let count = 3;
  let sidePosts = [];
  for (let i = 0; i < count; i++) {
    sidePosts.push(blogPosts[blogPosts.length - 1 - i]);
  }
  const router = useRouter();
  let routeSlug = router.asPath.replace("/blog/", "");
  return (
    <div>
      <div>
        <Head>
          <title> TCL | {`${post.title}`}</title>
          {/* <meta name="description" content={blogMeta} /> */}
          <meta
            name="keywords"
            content="Techspecialist, blog, techspecialist blog, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company Monitoring, Continous Testing, Improvement, Backups, Problem Management, Capacity Management, Incident Mangement, Application Knowledge, First Level Support, Second Level Support, Third Level Support, Configuration Management, Release and Deployment"
          />
          <meta
            property="og:url"
            content={`https://tcl-next-chrismadufor.vercel.app/blog/${post.slug}`}
          />
          <meta property="og:title" content={`${post.title}`} />
          {/* <meta property="og:description" content={blogMeta} /> */}
          <meta property="og:image" content={post.featuredImage.url} />
          <meta property="og:type" content="website" />
          <meta name="twitter:title" content={post.title} />
          {/* <meta name="twitter:description" content={blogMeta} /> */}
          <meta name="twitter:image" content={post.featuredImage.url} />
          <meta name="twitter:site" content="@tclafrica" />
          <meta name="twitter:creator" content="@tclafrica"></meta>
          <link rel="icon" href="/logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
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
              {post.title}
            </h1>
            <div className="flex text-gray-300 text-sm md:text-base mt-5">
              By {post.author} &nbsp; | &nbsp; {new Date(post.datePublished).toDateString().slice(4)}
            </div>
          </div>
        </div>
        <div className={`${styles.blog_main} flex justify-between`}>
          <div className={`${styles.blog_content} pt-10`}>
            <img
              className={styles.featured_img}
              src={post.featuredImage.url}
              alt=""
            />
            <div
              className={`text-gray-700 text-sm ${styles.blog_content_text} leading-loose py-10`}
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            ></div>
            <SharePost
              title={post.title}
              slug={post.slug}
            />
          </div>
        </div>
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default BlogPage;
