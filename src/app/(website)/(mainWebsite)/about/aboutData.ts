import test from "node:test";
import GrowingBrands from "../services/[slug]/GrowingBrands";

import MeetTheFounder from "./MeetTheFounder";
import { Title } from "rizzui";
import { Quote } from "lucide-react";

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

    MeetTheFounder: {
        isVisible: true,
        heading: '',
        Title: 'Dheeraj Swami',
        designation: 'Founder & CEO',
        image: '/assets/images/about/Rectangle 10109.png',
        Quote:
    "Digital marketing isn’t about being everywhere; it’s about being effective where it matters most.",
  descriptionHeading:
    'Dheeraj is a visionary digital growth leader who believes marketing should empower businesses, not overwhelm them.',
  description: [
    `He founded Adaired Digital Media in 2017 with one clear objective: to build a digital marketing agency that prioritizes measurable growth over marketing noise. With extensive experience in performance marketing and lead generation, he saw firsthand how brands were overwhelmed by complexity but underwhelmed by results`,
    `His strategy is based on data-driven insights, ongoing optimization, and complete transparency. That’s why at Adaired, we create every campaign to generate qualified leads and measurable business growth.`
  ]
},


    growingBrands: { 
        isVisible: true,
    },

    testimonial: {
        isVisible: true,
    },

    readyToStart: {
        isVisible: true,
    }
};