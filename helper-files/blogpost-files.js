// import blogImg11 from '../assets/img/blog/blog-img11.png'
// import blogImg21 from '../assets/img/blog/blog-img21.jpeg'
// import blogImg31 from '../assets/img/blog/blog-img31.jpeg'
// import blogImg41 from '../assets/img/blog/blog-img41.jpeg'
// import blogImg51 from '../assets/img/blog/blog-img51.png'
// import blogImg61 from '../assets/img/blog/blog-img61.jpg'
// import blogImg7 from '../assets/img/blog/blog-img7.jpg'
// import blogImg81 from '../assets/img/blog/blog-img81.jpeg'
// import blogImg91 from '../assets/img/blog/blog-img91.jpg'
// import blogImg101 from '../assets/img/blog/blog-img101.jpg'
// import blogImg111 from '../assets/img/blog/blog-img111.jpg'
// import blogImg121 from '../assets/img/blog/blog-img121.jpg'
// import blogImg131 from '../assets/img/blog/blog-img131.jpg'
// import blogImg141 from '../assets/img/blog/blog-img141.jpg'
// import blogImg151 from '../assets/img/blog/blog-img151.jpg'
// import blogImg161 from '../assets/img/blog/blog-img161.jpg'
// import blogImg171 from '../assets/img/blog/blog-img171.jpg'
// import blogImg181 from '../assets/img/blog/blog-img181.jpg'

// Blog Content
import data_forensics from './blogfiles/data_forensics'
import managing_your_it from './blogfiles/managing_your_it'
import protect_your_business from './blogfiles/protect_your_business'
import vpn from './blogfiles/vpn'
import increase_your_roi from './blogfiles/increase_your_roi'
import the_interview from './blogfiles/the_interview'
import customer_experience from './blogfiles/customer_experience'
import ideate_3 from './blogfiles/ideate_3'
import ideate_2 from './blogfiles/ideate_2'
import ideate_1 from './blogfiles/ideate_1'
import aws_outposts from './blogfiles/aws_outposts'
import welcome_lead_business from './blogfiles/welcome_lead_business'
import service_provider from './blogfiles/service_provider'
import why_businesses_need_ism from './blogfiles/why_businesses_need_ism'
import cisco_hacking from './blogfiles/cisco_hacking'
import social_engineering from './blogfiles/social_engineering'
import protect_yourself_against_social_engineering from './blogfiles/protect_yourself_against_social_engineering'
import uber_attack from './blogfiles/uber_attack'

const blogPosts = [
    {
        id: 1,
        title: 'Ideate & Validate - Part 1',
        slug: 'ideate-and-validate-part-1',
        author: 'Damilola Adebayo',
        date: 'Jan 25, 2021',
        img: "/assets/img/blog/blog-img101.jpg",
        content: ideate_1
    },
    {
        id: 2,
        title: 'Ideate & Validate - Part 2',
        slug: 'ideate-and-validate-part-2',
        author: 'Grace Alubari',
        date: 'Feb 1, 2021',
        img: "/assets/img/blog/blog-img91.jpg",
        content: ideate_2
    },
    {
        id: 3,
        title: 'Ideate & Validate - Part 3',
        slug: 'ideate-and-validate-part-3',
        author: 'Grace Alubari',
        date: 'Feb 5, 2021',
        img: "/assets/img/blog/blog-img81.jpeg",
        content: ideate_3
    },
    {
        id: 4,
        title: 'Customer Experience - Your Next Destination!',
        slug: 'customer-experience-your-next-destination',
        author: 'Grace Alubari',
        date: 'Feb 10, 2021',
        img: "/assets/img/blog/blog-img7.jpg",
        content: customer_experience
    },
    {
        id: 5,
        title: 'The Interview-Business Proposal Secrets Revealed',
        slug: 'the-interview-business-proposal-secrets-revealed',
        author: 'Grace Alubari',
        date: 'Feb 18, 2021',
        img: "/assets/img/blog/blog-img61.jpg",
        content: the_interview
    },
    {
        id: 6,
        title: 'How To Increase Your ROI In IT Infrastructure',
        slug: 'how-to-increase-your-roi-in-it-infrastructure',
        author: 'Grace Alubari',
        date: 'June 17, 2021',
        img: "/assets/img/blog/blog-img51.png",
        content: increase_your_roi
    },
    {
        id: 7,
        title: 'The Emergence Of VPN',
        slug: 'the-emergence-of-vpn',
        author: 'Grace Alubari',
        date: 'June 24, 2021',
        img: "/assets/img/blog/blog-img41.jpeg",
        content: vpn
    },
    {
        id: 8,
        title: 'Protect Your Business Every Minute Of The Day',
        slug: 'protect-your-business-every-minute-of-the-day',
        author: 'Damilola Adebayo',
        date: 'October 13, 2021',
        img: "/assets/img/blog/blog-img31.jpeg",
        content: protect_your_business
    },
    {
        id: 9,
        title: 'Managing Your IT Systems with Techspecialist',
        slug: 'managing-your-it-systems-with-tech-specialist',
        author: 'Damilola Adebayo',
        date: 'March 7, 2022',
        img: "/assets/img/blog/blog-img21.jpeg",
        content: managing_your_it
    },
    {
        id: 10,
        title: 'Data Forensics',
        slug: 'data-forensics',
        author: 'Grace Alubari',
        date: 'March 10, 2022',
        img: "/assets/img/blog/blog-img11.png",
        content: data_forensics
    },
    {
        id: 11,
        title: 'AWS Outposts For Nigerian Businesses',
        slug: 'aws_outposts_for_nigerian_businesses',
        author: 'Lanre Yusuf',
        date: 'July 26, 2022',
        img: "/assets/img/blog/blog-img111.jpg",
        content: aws_outposts
    },
    {
        id: 12,
        title: 'Welcome New Lead Of Business Development',
        slug: 'welcome-new-lead-of-business-development',
        author: 'Lanre Yusuf',
        date: 'July 29, 2022',
        img: "/assets/img/blog/blog-img121.jpg",
        content: welcome_lead_business
    },
    {
        id: 13,
        title: 'Choosing The Right IT Service Provider',
        slug: 'choosing-the-right-it-service-provider',
        author: 'Lanre Yusuf',
        date: 'August 8, 2022',
        img: "/assets/img/blog/blog-img131.jpg",
        content: service_provider
    },

    {
        id: 14,
        title: 'Why Businesses Need Information Security Management',
        slug: 'why-businesses-need-information-security-management',
        author: 'Lanre Yusuf',
        date: 'August 16, 2022',
        img: "/assets/img/blog/blog-img141.jpg",
        content: why_businesses_need_ism
    },
    {
        id: 15,
        title: 'Cisco Hacking Incident',
        slug: 'cisco-hacking-incident',
        author: 'Temitope Ayeni',
        date: 'August 17, 2022',
        img: "/assets/img/blog/blog-img151.jpg",
        content: cisco_hacking
    },
    {
        id: 16,
        title: 'Social Enginnering Techniques - The Human Factor Approach',
        slug: 'social-engineering-techniques',
        author: 'Lanre Yusuf',
        date: 'September 15, 2022',
        img: "/assets/img/blog/blog-img161.jpg",
        content: social_engineering
    },
    {
        id: 17,
        title: 'Tips On How To Protect Yourself Against Social Engineering',
        slug: 'tips_on_how_to_protect_yourself_against_social_engineering',
        author: 'Lanre Yusuf',
        date: 'September 20, 2022',
        img: "/assets/img/blog/blog-img171.jpg",
        content: protect_yourself_against_social_engineering
    },
    {
        id: 18,
        title: 'Lessons I Learnt From The Uber Attack',
        slug: 'lessons_i_learnt_from_the_uber_attack',
        author: 'Lanre Yusuf',
        date: 'September 20, 2022',
        img: "/assets/img/blog/blog-img181.jpg",
        content: uber_attack
    },
]

/**
 * Copy and paste this after the last post's details.
 * 
 * {
        id: number,
        title: 'Post Title',
        slug: 'post-title',
        author: 'Author Name',
        date: 'Date Published',
        img: featured image,
        content: name_of_file_that_has_your_content
    },
 */

export default blogPosts