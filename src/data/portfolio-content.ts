// Contenido sugerido para el portafolio / CV (texto en español)
// Importar y usar desde `src/app/page.tsx` o donde prefieras.

export const HERO = {
  title: 'Álvaro Raúl Castro',
  subtitle: 'Desarrollador Fullstack — Enfocado en soluciones escalables y Serverless (AWS)',
  lead: 'Ingeniero en Computación e Informática con +9 años de experiencia en desarrollo web, migraciones a arquitecturas modernas y automatización de despliegues.',
};

export const SUMMARY = `Ingeniero en Computación e Informática con amplia experiencia en desarrollo Fullstack. Experto en construir aplicaciones robustas y escalables usando React/Next.js en frontend, APIs y microservicios en Node.js/Serverless y despliegues en AWS. Me enfoco en calidad (testing), automatización (CI/CD) y documentación clara. Busco roles donde aportar en arquitectura, optimización y entrega continua.`;

export const CONTACT = {
  // Email que ya aparece en el repositorio/ UI.
  email: 'alvaroraulcastrosm@gmail.com',
  // No incluir foto. Mostrar sólo email y enlaces a GitHub (ya está en la imagen del attachment).
};

export const SKILLS = {
  frontend: [
    'HTML5',
    'CSS3 (TailwindCSS)',
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Responsive Design',
  ],
  backend: [
    'Node.js',
    'Express / Serverless (AWS Lambda)',
    'REST / GraphQL',
    'PHP (Laravel, CodeIgniter)',
    'Python (scripts, automatización)',
  ],
  databases: ['Relacionales: MySQL, PostgreSQL, SQL Server', 'NoSQL: MongoDB, DynamoDB, Firebase'],
  cloud_and_infra: [
    'AWS (Lambda, API Gateway, S3, IAM)',
    'Serverless Framework / Infrastructure as Code (recomendado: CDK / Terraform)',
    'Docker / Containerización',
    'CI/CD: Bitbucket Pipelines, GitHub Actions (recomendado)',
  ],
  devops_and_quality: [
    'Testing (unit/integration)',
    'Linting',
    'Type checking (TS)',
    'Monitoring/Logs',
  ],
  tools: ['Git (GitHub / Bitbucket)', 'Confluence', 'Jira', 'Postman', 'Firebase'],
};

// Si no tienes proyectos personales, sugerir proyectos cortos que aporten valor
export const SUGGESTED_PROJECTS = [
  {
    title: 'API Serverless para Gestión de Tareas (Demo)',
    problem:
      'Demostrar diseño de APIs sin servidor con buenas prácticas de seguridad, versionado y tests.',
    stack: ['Next.js (Frontend demo)', 'Node.js + AWS Lambda', 'API Gateway', 'DynamoDB / RDS'],
    deliverables: [
      'Repositorio con README con instrucciones de despliegue',
      'Endpoints documentados (OpenAPI/Swagger)',
      'Demo deployada (staging) + métricas de latencia',
    ],
  },
  {
    title: 'Microservicio de Autenticación y Autorización',
    problem: 'Implementar autenticación JWT y autorización por roles, con logs y tests.',
    stack: ['Node.js', 'PostgreSQL / RDS', 'Docker', 'Bitbucket Pipelines'],
    deliverables: ['Dockerfile', 'test coverage >70%', 'CI pipeline básico (lint, test, build)'],
  },
  {
    title: 'E-commerce pequeño (catálogo + carrito)',
    problem: 'Mostrar frontend y backend integrados, pagos mock y despliegue continuo.',
    stack: ['Next.js', 'TailwindCSS', 'API REST en Node.js', 'MySQL', 'S3 para assets'],
    deliverables: ['Demo visual, link a repositorio, screenshots y breve arquitectura'],
  },
];

// Formatos cortos para experiencias (usar en la sección Experiencia ya existente)
export const EXPERIENCE_SNIPPETS = [
  {
    role: 'Desarrollador Fullstack',
    company: 'Xinerlink — Recursos Humanos',
    period: 'ago. 2021 - Presente',
    bullets: [
      'Desarrollo de microservicios en Node.js desplegados en AWS (Lambda).',
      'Migración de funcionalidades legacy a arquitecturas serverless.',
      'Implementación de pipelines CI/CD en Bitbucket Pipelines.',
    ],
  },
  {
    role: 'Desarrollador de Sistemas',
    company: 'Solnet',
    period: 'ago. 2020 - mar. 2021',
    bullets: [
      'Trabajos con Angular y PHP. Integración con servicios externos para municipalidades.',
    ],
  },
];

// Texto para call-to-action (contacto / descargar CV)
export const CTA = {
  contactText: 'Contacto',
  contactSub: 'Escribe a mi correo para propuestas o entrevista técnica.',
  downloadText: 'Descargar CV (PDF)',
  // Nota: si no hay PDF en el repo, se sugiere generar uno y colocarlo en /public/CV.pdf
  downloadHint: 'Colocar `public/CV.pdf` para habilitar descarga.',
};

export default {
  HERO,
  SUMMARY,
  CONTACT,
  SKILLS,
  SUGGESTED_PROJECTS,
  EXPERIENCE_SNIPPETS,
  CTA,
};
