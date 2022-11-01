const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'My Portfolio.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tomas Astrada',
  role: 'Data Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://docs.google.com/document/d/1qUwFZtSk4VUVrnHtah1OAebzErShhQG1aDqc6FgFxZY/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-astrada-370b73171/',
    github: 'https://github.com/AstradaT',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Amazon Reviews',
    description:
      'Group Project. BI Dashboard, Recommendation System and Sentiment Analysis.',
    stack: ['Azure', 'PowerBI', 'NLP'],
    sourceCode: 'https://github.com/dhugueth/DTS03-06_Amazon_Reviews_PF',
    livePreview: 'https://astradat-dts03-06-amazon-reviews-pf-streamlitmain-4idio3.streamlitapp.com/',
  },
  {
    name: 'Cryptocurrency Dashboard',
    description:
      'Streamlit dashboard to display data of cryptocurrencies fetched from FTX API',
    stack: ['Python', 'API'],
    sourceCode: 'https://github.com/AstradaT/PI03-Analytics',
    livePreview: 'https://astradat-pi03-analytics-0--dashboard-cplxbs.streamlitapp.com/',
  },
  {
    name: 'F1 World Championship API',
    description:
      'API built to query a data warehouse with data from F1 World Championship dataset',
    stack: ['Python', 'API', 'SQL'],
    sourceCode: 'https://github.com/AstradaT/PI01_DATA03',
    livePreview: 'pi01data03-production.up.railway.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'Jupyter',
  'Pandas',
  'Azure',
  'Git',
  'Spark',
  'MinIO',
  'Hadoop',
  'Docker',
  'Airflow',
  'Kafka',
  'NiFi',
  'Linux',
  'Machine Learning',
  'PowerBI',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tomasastrada907@gmail.com',
}

export { header, about, projects, skills, contact }
