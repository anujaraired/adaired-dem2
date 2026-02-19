import SEOManager from '../../../../../public/assets/icons/service/SEOManager.png';
import HRManager from '../../../../../public/assets/icons/service/HRManager.png';
import ORMManager from '../../../../../public/assets/icons/service/ORMManager.png';
import WebDevelopmentManager from '../../../../../public/assets/icons/service/WebDevelopmentManager.png';
import SalesManager from '../../../../../public/assets/icons/service/SalesManager.png';
import Linkedin from '../../../../../public/assets/icons/service/Linkedin.png';

export const ABOUT_DATA = {
    banner: {
        isCenter: true,
        isVisible: true,
        heading: 'We Turn Digital Marketing',
        label: 'Into Predictable Growth',
        span: ``,
        desc: '',
        subheading: `Performance-focused strategies, real data, and measurable ROI  - No Guesswork!`,
        button: 'Book a Strategy Call',
    },

    keyStats: {
        isVisible: true,
        code: '04',
        heading: 'Did You Know?',
        isCard: false,
        list: [
            {
                title: 'Data First. Always',
                description: [
                    `Every decision is backed by real performance data and real-world testing, not assumptions.`,
                ],
            },
            {
                title: 'Partnership, Not Just Service',
                description: [
                    `We work as an extension of your team, aligned with your goals, challenges, and long-term vision.`,
                ],
            },
            {
                title: 'Tech-Savvy & Future-Ready',
                description: [
                    `We stay ahead of trends, tools, and platforms to help brands compete in a rapidly changing digital landscape.`,
                ],
            },
            {
                title: 'Transparency and Trust',
                description: [
                    `Our approach to work is defined by clear communication, honest reporting, and complete accountability.`,
                ],
            },
        ],
    },

    peopleBehindWork: {
        isVisible: true,
        breakIndex: 3,
        heading: 'The People Behind the Work',
        description: `Behind every strategy and result is a team of digital media specialists who are deeply concerned with performance and outcomes. \n At Adaired Digital Media, our team combines expertise in strategy, media, technology, content, and analytics to help brands grow smarter, faster.\n As an enterprise digital marketing agency, we build scalable systems that integrate marketing, automation, and analytics.`,
        images: [
        {
          img: SEOManager,
          title: 'Gourav Manuja',
          desc: 'Seo Team manger',
          icon: Linkedin,
        },
        {
          img: HRManager,
          title: 'Aarushi Sharma',
          desc: 'HR manger',
          icon: Linkedin,
        },
        {
          img: ORMManager,
          title: 'Sandeep Grewal',
          desc: 'ORM Team manger',
          icon: Linkedin,
        },
        {
          img: WebDevelopmentManager,
          title: 'Ratanjyot Singh',
          desc: 'Design & Development Team Manger',
          icon: Linkedin,
        },
        {
          img: SalesManager,
          title: 'Sahil Khanna',
          desc: 'Sales Team manger',
          icon: Linkedin,
        },
      ],
    },

    readyToStart: {
        isVisible: true,
    },
}