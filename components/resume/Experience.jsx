import { ExperienceItem } from './ExperienceItem';

const experiences = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Hepsiburada(NASDAQ: HEPS)',
    location: 'Istanbul',
    period: 'Sep 2022 - Present',
    description: `Working in the Checkout team, improving the Basket, Checkout, and Success pages. Spearheaded the redevelopment of the New Checkout (New OPC) project using React, TypeScript, and Zustand, optimized load time by 30% and enhanced user experience, resulting in a significant increase in customer satisfaction scores. Experience with Voltran (a micro frontend framework) and micro frontends such as Address Select, Coupons and Hepsimat. Full-stack development experience using Vue and Node.js in various back-office projects. Using the Davinci (Hepsiburada event library) for event handling and Swing for A/B tests.`,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'eBay - GittiGidiyor',
    location: 'Istanbul',
    period: 'Feb 2022 - Aug 2022',
    description: `Built the new product page using NextJS, TypeScript and GraphQL, following an atomic design architecture approach. The page was built into molecules and organisms, resulting in a more modular, scalable and maintainable structure. Developed features for product comparison and review pages, as well as a modern front-end architecture and central BFF infrastructure. Implemented server-side rendering (SSR) and static site generation (SSG) with Next.js to improve performance and SEO. Utilized GraphQL with Apollo Client for efficient data fetching and state management. Focused on optimizing performance to ensure a smooth user experience. Participated in code reviews to maintain code quality and share knowledge within the team.`,
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Innovance',
    location: 'Istanbul',
    period: 'Aug 2020 - Feb 2022',
    description: `Worked on the financial screen transformation project of TC Ziraat Bank. Developed digital wallet mobile applications with React Native. Some of them are the Hayat and Poca applications, which are currently live. Although the applications are generally similar, I have worked with different technologies (Redux Toolkit/Context, SASS/Styled Components).`,
  },
  {
    id: 4,
    title: 'Frontend Developer',
    company: 'Ziraat Bank',
    location: 'Istanbul',
    period: 'Aug 2020 - Apr 2021',
    description: `Was responsible for the financial screen transformation project for TC Ziraat Bank, where I utilized React and TypeScript technologies. The objective was to redesign and enhance the bank's financial interface to optimize user experience and performance.`,
  },
  {
    id: 5,
    title: 'Intern',
    company: 'Ege Seramik',
    location: 'Izmir',
    period: 'Sep 2019 - Oct 2019',
    description: `Was responsible for the development of the website, while concurrently developing small-scale projects utilizing React.`,
  },
  {
    id: 6,
    title: 'Intern',
    company: 'Arçelik',
    location: 'Istanbul',
    period: 'Aug 2016 - Oct 2016',
    description: `SAP aims to provide an instant and most efficient response to the needs of companies by bringing together all processes and jobs. I've seen the SAP program usage, programming (ABAP) and reporting technologies.`,
  },
  {
    id: 7,
    title: 'Intern',
    company: 'Ford Motor Company',
    location: 'Kocaeli',
    period: 'Aug 2015 - Oct 2015',
    description: `I was tasked with developing a student information system application as part of a group assignment for the company. I worked alongside my colleague to learn from the software developers and develop our project.`,
  }
];

const Experience = () => {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <ExperienceItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience; 