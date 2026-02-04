import { StaticImageData } from "next/image";

type KeyStatItem = {
  icon: StaticImageData;
  description: string;
};

type Props = {
  list: KeyStatItem[];
};

export const statsData = {
      isVisible: true,
      heading: 'Key Stats Related to SEO Services ',
      list: [
        {
          description:
            'The search engine optimization services are projected to experience rapid growth, reaching $173.89 billion by 2029 at a CAGR of 17%. ',
        },
        {
          description:
            'Although AI has certainly changed the dynamics of the SEO industry, 99% of market leaders suggest that non-AI tools remain an integral part of their toolkit.',
        },
        {
          description:
            'Social media drives only 5% of website traffic, whereas organic traffic accounts for 53% of trackable traffic to websites. ',
        },
        {
          description:
            'An average business spends between $500- $700 per month on SEO services.  ',
        },
        {
          description:
            '71% of businesses that have invested in SEO have reported that they are satisfied with their results.',
        },
      ],
    }