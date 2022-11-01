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
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/tom%C3%A1s-astrada-370b73171/',
    github: 'https://github.com/AstradaT',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
