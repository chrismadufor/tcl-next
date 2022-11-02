import React from "react";
import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Resources.module.css";
import ContactSection from "../components/ContactSection";
import Blogpost from "../components/Blogpost";
import { GraphQLClient, gql} from 'graphql-request'

const graphcms = new GraphQLClient(process.env.NEXT_APP_GCMS_URL)
const QUERY = gql`
{
  posts(first:100){
    author
    slug
    id
    title
    featuredImage {
      url
    }
    datePublished
  }
}
`

export async function getStaticProps() {
    let {posts} = await graphcms.request(QUERY);
    posts = posts.reverse()
    return {
      props: {
        posts,
      },
    }
  }

function Blog({posts}) {
  return (
    <div>
      <Head>
        <title>{`Techspecialist Blog | ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
        <meta name="description" content="The Techspecialist Blog" />
        <meta
          name="keywords"
          content="Techspecialist,blog, techspecialist blog, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company, Connect, Install, Network, Boot, BIOS, Login, Download, Update, Troubleshoot, Online, Support, reset, setup, configure, ticket, user, incidemt, advised, assisted, resolved, closed-out, escalate"
        />
        <meta property="og:url" content="https://techspecialistlimited.com/blog" />
        <meta property="og:title" content="The Techspecialist Blog" />
        <meta
          property="og:description"
          content="The Techspecialist Blog"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Techspecialist Blog" />
        <meta
          name="twitter:description"
          content="The Techspecialist Blog"
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
      </Head>
      <Header />
      <div className={`${styles.hero_bg} relative`}>
        <img
          src="/assets/img/resources.jpg"
          alt=""
          className="absolute h-full"
        />
        <h1 className="text-xl sm:text-2xl lg:text-4xl uppercase text-white font-semibold">
          The Techspecialist Blog
        </h1>
      </div>
      <div className={`${styles.blogposts} grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-3 lg:gap-7`}>
        {posts.map((post, index) => (
          <Blogpost
            key={index}
            img={post.featuredImage.url}
            author={post.author}
            date={new Date(post.datePublished).toDateString().slice(4)}
            title={post.title}
            id={post.id}
            slug={post.slug}
          />
        ))}
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Blog;
