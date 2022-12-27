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
    'Hi! 👋 I\'m a Developer from Argentina who started as a self-taught Python learner, spent his time learning Web Dev, decided he wanted a challenge (Math is not my thing), and switched to studying the relevant tools and subjects to become a professional in the world of Big Data!',
  resume: 'https://docs.google.com/document/d/1qZ4e9Qj2XxRE8RHxQgvKBRCOeML1comNOIw4hbFgheI/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/tomas-astrada/',
    github: 'https://github.com/AstradaT/',
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
  'Django',
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
