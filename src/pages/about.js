import * as React from 'react';
import Layout from '../components/layout';
const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle='About Me'>
        <p>
          A Full-Stack Developer based in New York City, with a main technical
          focus being in Javascript, TypeScript, React, Node.js, and TailWind,
          as well as server side programming. After graduating from the
          University at Albany, I began my professional career in consulting. I
          have had the luxury of working for multiple Fortune 500 companies
          across various sectors focusing on cybersecurity, risk assessment, and
          IT Consulting. For as long as I can remember, I have been surrounded
          by amazing technical mentors who inspired me to not only learn more
          about software development but also finally transition into the
          career. I began looking into Open Source projects, which led me to
          OSLabs, a non-profit tech accelerator. Since then, I have contributed
          to open-source products, tackling real-world challenges while working
          closely with other engineers from diverse backgrounds.
        </p>
      </Layout>
    </main>
  );
};
export const Head = () => <title>About Me</title>;

export default AboutPage;
