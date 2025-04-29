
'use client'; // Add 'use ' directive because we need useState and event handlers

import { useState } from 'react'; // Import useState
import Link from 'next/link'; // Import Link for navigation
import { Header } from "@/components/header";
import { SkillCard } from "@/components/skill-card";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // Import Dialog components
import { Code, GitBranch, Database, Cloud, MonitorSmartphone, Settings, GraduationCap, ShieldCheck, Smartphone, Server, Briefcase, Linkedin, Mail } from 'lucide-react'; // Import Linkedin and Mail icons

// Define interface for Skill
interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

// Define interface for AcademicFormation
interface AcademicFormation {
    title: string;
    institution: string;
    details: string;
    status: string;
    years: string;
    icon: React.ReactNode;
}

// Define interface for WorkExperience
interface WorkExperience {
    title: string;
    company: string;
    dates: string;
    description: string;
    icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: "JavaScript", icon: <Code className="h-8 w-8 text-primary" />, description: "Construyendo aplicaciones web dinámicas e interactivas." },
  { name: "React", icon: <Code className="h-8 w-8 text-primary" />, description: "Desarrollando interfaces de usuario modernas basadas en componentes." },
  { name: "Node.js", icon: <Server className="h-8 w-8 text-primary" />, description: "Creando aplicaciones y APIs escalables del lado del servidor." },
  { name: "PHP", icon: <Code className="h-8 w-8 text-primary" />, description: "Desarrollo backend robusto y aplicaciones web dinámicas." },
  { name: "Angular", icon: <Code className="h-8 w-8 text-primary" />, description: "Creación de aplicaciones web complejas y de gran escala." },
  { name: "Git", icon: <GitBranch className="h-8 w-8 text-primary" />, description: "Control de versiones y flujos de trabajo de desarrollo colaborativo." },
  { name: "MongoDB", icon: <Database className="h-8 w-8 text-primary" />, description: "Base de datos NoSQL para almacenamiento de datos flexible." },
  { name: "PostgreSQL", icon: <Database className="h-8 w-8 text-primary" />, description: "Gestión de bases de datos relacionales robustas y escalables." },
  { name: "SQL Server", icon: <Database className="h-8 w-8 text-primary" />, description: "Administración y desarrollo de bases de datos empresariales." },
  { name: "Firebase", icon: <Cloud className="h-8 w-8 text-primary" />, description: "Backend como Servicio para construir aplicaciones web y móviles." },
  { name: "AWS", icon: <Cloud className="h-8 w-8 text-primary" />, description: "Despliegue y gestión de aplicaciones en la nube de Amazon Web Services." },
  { name: "Android", icon: <Smartphone className="h-8 w-8 text-primary" />, description: "Desarrollo de aplicaciones móviles nativas para el ecosistema Android." },
  { name: "Responsive Design", icon: <MonitorSmartphone className="h-8 w-8 text-primary" />, description: "Asegurando que las aplicaciones se vean bien en todos los dispositivos." },
  { name: "REST APIs", icon: <Code className="h-8 w-8 text-primary" />, description: "Diseñando y consumiendo servicios web RESTful." },
  { name: "Cybersecurity", icon: <ShieldCheck className="h-8 w-8 text-primary" />, description: "Comprendiendo e implementando las mejores prácticas de seguridad." },
];

const academicFormation: AcademicFormation[] = [
    {
        title: "Ingeniería de Ejecución en Computación e Informática",
        institution: "IP Centro de Informática e Ingeniería de Sistemas en Administración",
        details: "Presencial",
        status: "Titulado",
        years: "2013 - 2016",
        icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
        title: "Análisis de Sistemas / Analista Programador",
        institution: "INACAP, Sede STGO CENTRO",
        details: "Presencial",
        status: "Titulado",
        years: "2009 - 2012",
        icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
        title: "Certificado de Ciberseguridad",
        institution: "Coursera",
        details: "E-learning",
        status: "Titulado",
        years: "2025",
        icon: <ShieldCheck className="h-6 w-6 text-primary" />
    }
];

const workExperience: WorkExperience[] = [
  {
    title: "Desarrollador fullstack",
    company: "Xinerlink, Recursos Humanos",
    dates: "ago. 2021 - A la fecha",
    description: "Se trabaja con nodejs, se crean microservicios en Javascript asociados a AWS. Se trabaja en la actualizaciones de varios proyectos en React y PHP. También se realiza gestión asociado a los proyectos de los microservicios. Grupo de trabajo. Scrum. Documentación en Confluence, Jira, Git y Bitbucket.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Desarrollador de sistemas",
    company: "Solnet, Tecnologías de Información",
    dates: "ago. 2020 - mar. 2021",
    description: "Trabajar en Angular y PHP. Se implementa servicios informáticos para diferentes municipalidades. Ademas de ir actualizando el sistema de php a angular.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Desarrollador web",
    company: "Gnoma, Informática / Tecnología",
    dates: "oct. 2019 - dic. 2019",
    description: "Contratado por Gnoma para trabajar en la Agencia de calidad de la educación. - Desarrollo e implementación de requerimientos para las paginas agenciaeducacion.cl y simce.cl.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Desarrollador web",
    company: "Nexo IT Consultores, Informática / Tecnología",
    dates: "mar. 2019 - ago. 2019",
    description: "Desarrollador externo en la Caja los Héroes en el área de desarrollo para la migración de sus portales a Wordpress y creación del portal BHP, trabajando en equipo para lograr las metas usando Scrum como metodología. Usamos tecnologías: PHP, Javascript, WordPress, Servicios Rest.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Desarrollador web",
    company: "Ceramica Santiago, Construcción",
    dates: "ene. 2018 - dic. 2018",
    description: "Desarrollar diferentes aplicaciones para web y móvil, según requerimientos solicitados. Muchas de estas aplicaciones son para mejorar el procedimientos y flujo de las otras áreas de la empresa, mejorando el desempeño y el sistema. - se trabaja en MVC, usando codeigniter. - PHP y ASP. - Android y Phonegap.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Desarrollador web",
    company: "Ingesmart, Informática / Tecnología",
    dates: "abr. 2017 - dic. 2017",
    description: "Se trabaja en el desarrollo de código para proyectos informáticos que clientes le solicita a la empresa. Por mis manos pasaron muchos proyectos, pero mi principal labor fue el desarrollo del nuevo sistema de kilómetro lanpass se ha sido estandarizado para latino américa. Se trabaja en equipo, apoyando a colegas si se requiere para finalizar proyectos. - Metodología usada Scrum. - Desarrollo en codeigniter. - PHP",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Analista programador",
    company: "Consejo Nacional de la Cultura y las Artes, Cultura",
    dates: "jul. 2016 - dic. 2016",
    description: "Encargado en el desarrollo e implementación del Plan de Lectura (http://plandelectura.gob.cl/). Realizado en PHP, jQuery, creando nuevas herramientas, servicios y en edición de plugin de Wordpress. - La metodología utilizada: Scrum.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Analista ti",
    company: "Europacific, Inversiones (Soc / Cías / Holding)",
    dates: "may. 2015 - abr. 2016",
    description: "Encargado de todo el soporte informático y el desarrollo y mantención de tiendas e-commerce (Somosretro, Tecnogeek y LDR), trabajo realizado en equipo. • Apoyar en la gestión del comercio electrónico. Implementación de herramientas como google analytics y google adwords, herramientas a utilizar: Prestashop, Wordpress, Mysql, Java, Jquery, Bizagi, html, PHP, integración de webpay y Khipu. - La metodología utilizada: Scrum.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Analista programador ti",
    company: "Compan, Tecnologías de Información",
    dates: "nov. 2014 - abr. 2015",
    description: "Programador para Compan Ltda, empresa holding (GPS, VSAT, BGAN, Consolas, Cámaras, entre otros). Labor: encargado de crear varios sistemas y servicios informaticos para cada área. tiendas e-commerce. • La metodología utilizada: Scrum.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Analista programador",
    company: "Soft-Factory, Informática / Tecnología",
    dates: "ene. 2013 - oct. 2014",
    description: "Programador. En donde se realizan programas en VB6, VB.net y PHP para varias empresas mineras, laboratorios y de geología. En Soft-factory, desarrollé un sistema de evaluación de desempeño para \"Cochilco\" (PHP y MySQL), además en la creación de sitios web solicitados por clientes (portafolios). • La metodología utilizada: Scrum.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Relator armado y mantención de pc",
    company: "Tecnocap, Educación / Capacitación",
    dates: "sep. 2012 - oct. 2012",
    description: 'Proyecto de capacitaciones para Militares (SLC) en un curso de "Armado y Mantención de PC" en el regimiento n°9 de cañal bajo, Osorno. Se entrega conocimientos y practicas necesarias para solucionar cualquier inconveniente con un computador. La Capacitación fue de 100 horas cronológicas (24/9/2012 hasta 10/10/2012).',
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Analista programador",
    company: "Aguamarket, Agua / Obras Sanitarias",
    dates: "feb. 2012 - abr. 2012",
    description: "Programador para proyecto de mejorar páginas web, tiendas e-commerce, también participe en la edición del software de administración de la empresa ERP aguamarket, además de administrar la base de datos de otras áreas. Se trabajó con ASP con SQL Server y PHP con MySQL. proyecto se realizado en equipo.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  },
  {
    title: "Soporte en computacion",
    company: "Corporación Nacional de Desarrollo Indígena, Poder ejecutivo y administración pública",
    dates: "jul. 2010 - oct. 2010",
    description: "Mi práctica profesional fue desempeñada en la CONADI, mi función fue Administrar la red, Mantención de computadores, además de trabajar con planillas Excel, y ayudar tareas solicitadas por algunos funcionarios.",
    icon: <Briefcase className="h-6 w-6 text-primary" />
  }
].sort((a, b) => {
  // Sort by start date, newest first
  const dateA = new Date(a.dates.split(' - ')[0].replace('ene.', 'Jan').replace('feb.', 'Feb').replace('mar.', 'Mar').replace('abr.', 'Apr').replace('may.', 'May').replace('jun.', 'Jun').replace('jul.', 'Jul').replace('ago.', 'Aug').replace('sep.', 'Sep').replace('oct.', 'Oct').replace('nov.', 'Nov').replace('dic.', 'Dec') + ' 1');
  const dateB = new Date(b.dates.split(' - ')[0].replace('ene.', 'Jan').replace('feb.', 'Feb').replace('mar.', 'Mar').replace('abr.', 'Apr').replace('may.', 'May').replace('jun.', 'Jun').replace('jul.', 'Jul').replace('ago.', 'Aug').replace('sep.', 'Sep').replace('oct.', 'Oct').replace('nov.', 'Nov').replace('dic.', 'Dec') + ' 1');
  if (a.dates.includes('A la fecha')) return -1; // Keep current job at the top
  if (b.dates.includes('A la fecha')) return 1;
  return dateB.getTime() - dateA.getTime();
});


export default function Home() {
  // State for managing the work experience modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<WorkExperience | null>(null);

  // Function to open the modal with the selected job details
  const handleCardClick = (job: WorkExperience) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <section className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Álvaro Raúl Castro San Martín
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bienvenido a mi portafolio digital, un escaparate de mis habilidades técnicas y mi trayectoria académica y profesional.
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-16 animate-fade-in-up max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-center">
            Sobre mí
          </h2>
          <Card className="bg-card p-6 shadow-lg border border-border">
            <CardContent className="text-center text-card-foreground p-0">
              <p className="leading-relaxed">
                Ingeniero en Informática con 9 años de experiencia como desarrollador Full Stack, especializado en tecnologías como <strong>Node.js</strong>, <strong>React</strong>, <strong>PHP</strong> y <strong>AWS</strong>. Destaco por mi capacidad para liderar proyectos con metodologías ágiles (Scrum), crear microservicios escalables y modernizar sistemas legacy. Experto en CMS (<strong>WordPress</strong>, <strong>PrestaShop</strong>) y frameworks MVC (<strong>Laravel</strong>, <strong>CodeIgniter</strong>), con sólidos conocimientos en bases de datos <strong>SQL</strong>/<strong>NoSQL</strong> y despliegue en la nube. Comprometido con la calidad del código, la documentación clara (Confluence, Jira) y el trabajo en equipo. Apasionado por aprender y aplicar soluciones innovadoras que agreguen valor técnico y empresarial.
              </p>
            </CardContent>
          </Card>
          {/* Contact Icons */}
          <div className="flex justify-center items-center space-x-6 mt-6">
             <Link href="mailto:alvaroraulcastrosm@gmail.com" aria-label="Send Email">
               <Mail className="h-8 w-8 text-primary hover:text-primary/80 transition-colors" />
             </Link>
           </div>
        </section>


        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            Conjunto de Herramientas y Tecnologías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                {...skill}
                className="transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
              />
            ))}
          </div>
        </section>

        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
           <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
             Formación Académica
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {academicFormation.map((formation, index) => (
                <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-lg border-l-4 border-primary bg-card">
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                        <div>
                            <CardTitle className="text-xl font-semibold mb-1">{formation.title}</CardTitle>
                            <CardDescription className="text-base text-muted-foreground">{formation.institution}</CardDescription>
                        </div>
                        {formation.icon}
                    </CardHeader>
                    <CardContent className="flex-1 space-y-1 pt-4">
                        <p className="text-sm font-medium">{formation.details}</p>
                        <p className="text-sm text-primary font-semibold">{formation.status}</p>
                        <p className="text-sm text-muted-foreground">{formation.years}</p>
                    </CardContent>
                </Card>
             ))}
           </div>
        </section>

        <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">
            Experiencia Laboral
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Changed gap to 6 */}
            {workExperience.map((job, index) => (
              <Card
                key={index}
                className="flex flex-col transition-all duration-300 hover:shadow-lg border-l-4 border-primary bg-card cursor-pointer" // Apply similar styles as academic formation cards
                onClick={() => handleCardClick(job)} // Add onClick handler
              >
                 <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                    <div>
                        <CardTitle className="text-xl font-semibold mb-1">{job.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground">{job.company}</CardDescription>
                    </div>
                    {job.icon}
                 </CardHeader>
                 <CardContent className="flex-1 pt-4"> {/* Removed specific content, keep CardContent structure */}
                     <p className="text-sm text-muted-foreground">{job.dates}</p>
                     {/* Description is now shown in modal */}
                 </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Work Experience Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{selectedJob?.title}</DialogTitle>
              <DialogDescription>
                {selectedJob?.company} ({selectedJob?.dates})
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedJob?.description}
              </p>
            </div>
          </DialogContent>
        </Dialog>

      </main>
      <footer className="py-6 md:px-8 md:py-0 border-t bg-muted/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Construido por Álvaro Raúl Castro San Martín.
          </p>
        </div>
      </footer>
    </div>
  );
}
