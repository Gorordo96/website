import type { PortfolioData } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { PlaceHolderVideos } from './placeholder-videos';
import { getAssetPath } from './utils';

const findImage = (id: string) => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        return { url: 'https://picsum.photos/seed/fallback/600/400', hint: 'fallback' };
    }
    return { url: getAssetPath(img.imageUrl), hint: img.imageHint };
}

const findVideo = (id: string) => {
    const video = PlaceHolderVideos.find(p => p.id === id);
    if (!video) {
        return { url: getAssetPath('/videos/fallback.mp4'), hint: 'Video no encontrado' };
    }
    return { url: getAssetPath(video.videoUrl), hint: video.videoHint };
}

export const portfolioData: PortfolioData = {
  hero: {
    name: "Lucas Gorordo",
    title: "Ingeniero en telecomunicaciones",
    location: "Rio Cuarto, Cordoba , Argentina",
    links: [
      { name: "GitHub", url: "https://github.com/Gorordo96" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/lucas-gorordo-407323168/" },
    ],
  },
  about: {
    description: "Soy Ingeniero en Telecomunicaciones y Arquitecto de Soluciones de Software. Más allá de diseñar sistemas robustos, mi verdadera pasión está en el cómo construimos la mejor solución. Soy un firme creyente en el poder de la colaboración, donde la comunicación abierta y un entorno de equipo sólido son la base de cualquier proyecto exitoso. Me considero un explorador tecnológico por naturaleza. Disfruto profundamente el proceso de investigar lo desconocido, de tomar una idea y transformarla en un prototipo tangible que nos permita aprender y validar el camino a seguir. Esta misma pasión por explorar se extiende a mi vocación por compartir conocimiento: disfruto presentando ideas, enseñando a otros y traduciendo lo complejo a lo simple, ya que creo que el crecimiento de un equipo es el mayor acelerador de la innovación."
  },
  education: [
    {
      category: "Formación Universitaria",
      institution: "Universidad Nacional de Río Cuarto (UNRC)",
      degree: "Ingeniería en Telecomunicaciones",
      date: "Egresado 2021",
      details: "Facultad de Ingeniería. Promedio: 9.11 (con y sin aplazo)."
    },
    {
      category: "Formación Secundaria",
      institution: "Instituto adscripto San Buenaventura",
      degree: "Bachiller en Economía y Administración",
      date: "Egresado 2013",
      details: "Promedio general de 8.52."
    },
  ],
  courses: [
    {
      title: "Observability in Cloud Native apps using OpenTelemetry",
      institution: "Udemy",
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f290924e-97e6-48b0-9ff2-e5879e473589.pdf",
    },
    {
      title: "Python TOTAL - Programador Avanzado en 16 dias",
      institution: "Udemy",
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f9906ebc-41f9-4255-8649-26e1093d6281.pdf",
    },
    {
      title: "Become a Product Manager, without obstacles",
      institution: "Alaimo Labs",
      certificateUrl: "https://alaimolabs.com/en/certificates/3b20d869-1869-4616-84bc-0d6c23dc7097",
    },
    {
      title: "Jenkins, de cero a experto: conviertete en un Jenkins Master",
      institution: "Udemy",
      certificateUrl: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f1d6debb-134b-46d8-b1ee-8dcfb880cbc3.pdf"
    },
    {
      title: "2023 Red Hat Customer Test Drive Workshop - Ansible for Red Hat Enterprise Linux",
      institution: "Red Hat",
      certificateUrl: "https://www.credly.com/badges/131739cf-3496-4c69-add6-bee52ed54d2f/public_url"
    },
    {
      title: "Curso de Ansible: Automatización de principiante a experto",
      institution: "Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-e2599006-3abc-4a21-9f74-8339a9ce1601/"
    },
    {
      title: "Creacion de reportes con JasperReport y JasperStudio",
      institution: "Udemy",
      certificateUrl: "https://www.udemy.com/certificate/UC-c3cc0ece-21a7-4bd6-91dd-0d70c719013a/"
    },
    {
      title: "Curso de fundamentos de base de datos",
      institution: "Platzi",
      certificateUrl: "https://platzi.com/p/gorordo96/curso/1566-bd/diploma/detalle/"
    },
    {
      title: "Curso de Administración de Servidores Linux",
      institution: "Platzi",
      certificateUrl: "https://platzi.com/p/gorordo96/curso/1667-linux/diploma/detalle/"
    }
  ],
  experience: [
    {
      id: "exp0",
      role: " Desarrollador Freelance",
      company: "",
      dates: "Septiembre 2025",
      summary: "",
      detailedDescription: `
####  Landing Page y Sistema de Reservas para Estudio Jurídico

Desarrollé una solución web integral y a medida para un estudio jurídico local, con el objetivo de establecer su presencia digital y automatizar por completo su proceso de agendamiento de consultas.

Mis responsabilidades y los entregables clave del proyecto fueron:

* **Diseño y Desarrollo de Landing Page**: Creé una landing page con un diseño moderno, limpio y profesional, optimizada para dispositivos móviles (responsive). La página fue diseñada para comunicar claramente los servicios del estudio y guiar a los visitantes hacia la acción de reservar una consulta.
* **Implementación de Sistema de Reservas Automatizado**: Integré una plataforma de agendamiento de turnos online que permite a los potenciales clientes ver la disponibilidad en tiempo real de los abogados y reservar una cita en pocos clics, eliminando la necesidad de coordinación manual vía teléfono o email.

**Sitio Web:** [https://estudioayg.github.io/webpage/](https://estudioayg.github.io/webpage/)





`,
      media: []
    },
    {
      id: "exp1",
      role: "Arquitecto de Soluciones",
      company: "Stechs",
      dates: "Mayo 2022 - Actualidad",
      summary: "Evolución profesional a través de roles clave, desde DevOps y desarrollo de software hasta la ingeniería de plataformas y arquitectura de soluciones.",
      detailedDescription: `Mi trayectoria en Stechs ha sido una de crecimiento continuo, asumiendo responsabilidades crecientes en diversas áreas estratégicas de la compañía. Comencé en operaciones, evolucioné hacia el desarrollo de software y actualmente contribuyo en la definición de la arquitectura tecnológica.

### **Etapa 1: DevOps Engineer (Soporte y Operaciones)**
En mi rol inicial, me enfoqué en la estabilidad de las operaciones y la automatización de procesos, desarrollando habilidades clave:
* **Troubleshooting Analítico:** Fortalecí mi capacidad para diagnosticar y resolver problemas complejos en componentes de software sobre servidores.
* **Automatización con Python:** Desarrollé scripts para ejecutar tareas críticas, como la corrección masiva de datos y para **facilitar el *onboarding* de nuevos clientes, automatizando la ingesta de grandes volúmenes de datos desde sus sistemas heredados** hacia nuestras plataformas.


### **Etapa 2: Software Developer (Proyectos Especiales)**
Asumí un rol de mayor especialización como Desarrollador Python, enfocándome en la creación de soluciones de alto impacto para clientes internos y externos:
* **Task Manager (Producto Interno):** Lideré el diseño y la construcción de este componente de software propietario, utilizando **Apache Airflow** para automatizar operaciones masivas en la plataforma DSA, lo que optimizó la gestión de miles de suscripciones de clientes.
* **HNTAP (Producto para Telecom Argentina):** Fui un desarrollador clave en este producto de automatización de pruebas de red. Mis responsabilidades incluyeron el desarrollo de módulos en **Python** y la implementación de pipelines con **Jenkins** y **Ansible** para la homologación automática de equipos (ONTs/Cablemodems) mediante protocolos como **TR-069** y **SNMP**.


### **Etapa 3: Ingeniero de Plataformas / Infraestructura**
Fui promovido al equipo de Plataformas, donde mis responsabilidades incluyeron:
* **Gestión Avanzada y Arquitectura en AWS:**
    * **Gobernanza y FinOps:** Definí e implementé una política de etiquetado (tags) en toda la organización, lo que permitió una visualización detallada de costos por proyecto y optimizó la gestión del presupuesto en la nube.
    * **Arquitectura Multi-Cuenta:** Lideré la redefinición estratégica del entorno cloud, migrando de una cuenta monolítica a una arquitectura multi-cuenta con AWS Organizations para aislar cargas de trabajo, mejorar la seguridad y facilitar la escalabilidad.
    * **Gestión de Identidad Centralizada:** Implementé AWS Identity Center (sucesor de AWS SSO) integrado con Google Workspace, automatizando por completo el ciclo de vida de los accesos de usuarios y fortaleciendo la postura de seguridad.
* **Administración de Redes:** Gestioné la configuración, mantenimiento y seguridad de la infraestructura de red, incluyendo la administración de routers y políticas de acceso.
* **Soporte Experto a Desarrollo:** Actué como punto de escalamiento técnico (segundo nivel) para los equipos de desarrollo, liderando el troubleshooting de problemas complejos de infraestructura, rendimiento y conectividad.
* **Innovación y Soluciones Open Source:** Dirigí el ciclo completo de investigación, prueba de concepto (PoC) e implementación de nuevas herramientas open source para resolver desafíos de negocio, presentando soluciones innovadoras a los stakeholders.

### **Etapa 4: Arquitecto de Soluciones**
Como Arquitecto de Soluciones, mi rol se centra en la investigación, el diseño y la validación de tecnologías emergentes para resolver desafíos complejos de negocio y definir la hoja de ruta tecnológica de la compañía. Lidero pruebas de concepto (PoC) y defino arquitecturas de referencia en áreas clave, demostrando el valor y la viabilidad de nuevas soluciones.

A continuación, los hitos más representativos de mi rol:

#### **Arquitectura de Datos y Sistemas de Telecomunicaciones**
* **Procesamiento de Eventos en Tiempo Real (para Telecom):** Diseñé una arquitectura de ingesta de datos de alta disponibilidad utilizando **Kafka** y **ksqlDB**. Esta solución resolvió el problema de duplicación de Traps SNMP en un entorno activo-activo, garantizando un procesamiento de eventos consistente y en tiempo real.
* **Colectores de Telemetría para Redes:** Desarrollé una PoC para un sistema de colectores de telemetría para equipos de red (OLTs). Propuse un modelo *push* para reemplazar el *polling* tradicional con SNMP, con el objetivo de mejorar drásticamente la eficiencia y la granularidad de los datos obtenidos.

#### **I+D en Protocolos de Red de Nueva Generación**
* **Controlador USP (TR-369):** Lideré la investigación y el desarrollo de una PoC de un controlador para el protocolo **USP (TR-369)** en Python. Utilicé simuladores como **OBUSPA** para validar la nueva generación de gestión de dispositivos de red, posicionando a la compañía a la vanguardia tecnológica.
* **Colectores de Datos Masivos (TR-181):** Diseñé y construí un colector de datos masivos (bulk data) para el modelo de datos **TR-181**, creando una solución para la recolección eficiente de grandes volúmenes de información de dispositivos.

#### **Arquitectura Cloud-Native y Alta Disponibilidad**
* **Sistema AAA en Kubernetes (para Altice):** Diseñé y validé una solución de alta disponibilidad para un sistema de autenticación **AAA (FreeRadius)** sobre **Kubernetes**, cumpliendo con los estrictos requisitos de resiliencia de un cliente Telco internacional.
* **Integración de OpenTelemetry:** Investigué y desarrollé una PoC para la integración de **OpenTelemetry** en los productos de la compañía, demostrando sus beneficios para unificar la observabilidad (logs, métricas y trazas) y mejorar las capacidades de monitoreo.

#### **Innovación en Inteligencia Artificial (IA) y Observabilidad**
* **Agentes de IA para APIs de Producto:** Lideré el desarrollo de una prueba de concepto de agentes de IA, utilizando **LangChain**, diseñados para interactuar con las APIs de los productos de la compañía (incluyendo herramientas MCP construidas para la PoC). El objetivo era proporcionar una **interfaz inteligente y versátil** que permitiera a nuestros **clientes externos explotar al máximo y de forma autónoma las funcionalidades de nuestras APIs**.
* **Sistema RAG para Soporte:** Desarrollé una prueba de concepto para implementar un sistema **RAG (Retrieval-Augmented Generation)** con **Haystack** para crear un asistente inteligente, con el fin de mejorar drásticamente la velocidad y precisión en el análisis de tickets de soporte.

#### **Integración de Protocolos en Plataforma ACS**
* Lideré el análisis técnico y la estrategia de integración para los protocolos **STUN** y **XMPP** en la plataforma ACS de la compañía, expandiendo las capacidades de comunicación y adaptabilidad frente a distintas arquitecturas de red.
`,
      media: [
        {
          type: "image",
          placeholder: "exp1-img1",
          url: findImage('exp1-img1').url,
          hint: "Equipo de Stechs en una sesión de brainstorming y estrategia."
        },
        {
          type: "image",
          placeholder: "exp1-img2",
          url: findImage('exp1-img2').url,
          hint: "Equipo completo de Stechs en un encuentro anual."
        },
        {
          type: "image",
          placeholder: "exp1-img3",
          url: findImage('exp1-img3').url,
          hint: "Ambiente de trabajo colaborativo en las oficinas de Stechs Río Cuarto."
        }
      ]
    },
    {
      id: "exp2",
      role: "Ingeniero DevOps",
      company: "Futit Services",
      dates: "Septiembre 2021 - Mayo 2022",
      summary: "Responsable de la automatización, gestión y optimización de la infraestructura y los procesos de despliegue para la solución Etendo y Openbravo",
      detailedDescription: `

**Cloud & Kubernetes**:

* Optimización de Costos en Kubernetes: Implementé una estrategia de autoescalado a cero (scale-to-zero) que suspendía los despliegues sin tráfico y los reactivaba automáticamente, logrando una reducción significativa en los costos de la nube.

* Análisis de Costos: Integré **Kubecost** en los entornos de desarrollo para monitorear y analizar el consumo de recursos, proporcionando visibilidad clave para la optimización de costos.

* Mejora de la Experiencia del Desarrollador (DevEx): Colaboré en la mejora de una utilidad de consola (CLI) desarrollada en **bash** interna que automatiza el despliegue de la solución Etendo en clústeres de Kubernetes.

* Containerización: Lideré el proceso de "dockerización" de la aplicación Etendo, creando imágenes de contenedor optimizadas para asegurar la portabilidad y consistencia entre entornos.

**Automatización & Infraestructura como Código (IaC)**:

* Gestión de Configuración con Ansible: Actualicé y mantuve playbooks de **Ansible** para el despliegue automatizado de la solución en una plataforma de virtualización cloud.

* Seguridad Automatizada: Desarrollé y actualicé un playbook de **Ansible** para la rotación automática de claves SSH en servidores de testing y producción, fortaleciendo la postura de seguridad.

**CI/CD & Pruebas**:

* Pipeline de Integración Continua: Diseñé y construí un pipeline en **Jenkins** para ejecutar de forma automática la suite completa de tests de Etendo, acelerando el feedback hacia los desarrolladores por cada merge request y facilitando las tareas de QA para testear.

* Pruebas de carga: Planifique y ejecute un plan de pruebas de carga utilizando **JMeter** para probar la aplicacion movile de Etendo.

**Operaciones en la Nube (CloudOps) & Monitoreo**:

* Despliegue en AWS: Gestioné el despliegue de la solución en la infraestructura de **AWS**, utilizando servicios como **EC2**.

* Estrategia de Backup: Implementé **AWS Backup** como solución de respaldo y recuperación de datos para diversos clientes, asegurando la continuidad del negocio.

* Monitoreo y Alertas: Actualicé y mantuve la infraestructura de monitoreo de clientes basada en **Nagios** para garantizar la detección proactiva de incidentes.

**Colaboración y Soporte**:

* Optimización de Bases de Datos: Colaboré estrechamente con el equipo de desarrollo para realizar troubleshooting, identificar y optimizar consultas SQL con problemas de rendimiento.

* Automatización de Datos: Participé en la automatización de procesos ETL para la ingesta de datos en PowerBI, mejorando la eficiencia de los reportes para clientes.
`,
      media: [
          {
            type: "image",
            placeholder: 'exp2-img1',
            url: findImage('exp2-img1').url,
            hint: findImage('exp2-img1').hint,
          },
          {
            type: "image",
            placeholder: 'exp2-img2',
            url: findImage('exp2-img2').url,
            hint: findImage('exp2-img2').hint,
          }
      ]
    },
    {
      id: "exp3",
      role: "Pasantía en el área de Ingeniería de Redes",
      company: "Ascentio S.A",
      dates: "Marzo 2021 - Agosto 2021",
      summary: "El objetivo de la practica profesional fue colaborar con los ingenieros en redes para modernizar la infraestructura de red, mejorar la conectividad entre oficinas y planificar mecanismos de failover de hardware",
      detailedDescription: `
### Rediseño de la Red LAN de la Oficina Central

* **Expansión y Fortalecimiento de la Red**: Amplié la capacidad y el rendimiento de la red LAN mediante la integración de un nuevo switch conectado al switch core.
* **Segmentación y Organización de la Red**: Rediseñé la topología lógica de la red, reconfigurando y organizando los puertos de los switches en múltiples VLANs para separar el tráfico por áreas funcionales.
* **Documentación y Etiquetado Físico**: Llevé a cabo un proyecto de documentación física, etiquetando todos los puertos de red para facilitar futuras tareas de mantenimiento y troubleshooting.

### Implementación de Alta Disponibilidad y Redundancia

* **Actualización del Router de Borde**: Migré el router de borde principal de un Mikrotik RB1100AHx2 a un RB1100AHx4 de mayor capacidad. Adicionalmente, instalé un segundo RB1100AHx4 en modo de espera (standby).
* **Diseño de Failover Automático**: Desarrollé un pequeño sistema de scripts en el lenguaje de mikrotik de sincronización y monitoreo entre ambos routers. En caso de falla del router principal, el script permitía al secundario detectar la caída, activar sus interfaces y asumir el rol de router de borde de forma automática, garantizando la continuidad del servicio.
* **Redundancia de Conexión Remota**: Diseñé y configuré una solución de VPN redundante utilizando IPsec site-to-site para asegurar la estabilidad y disponibilidad de la conexión con otras sedes.
    `,
      media: [
          {
            type: "image",
            placeholder: 'exp3-img1',
            url: findImage('exp3-img1').url,
            hint: findImage('exp3-img1').hint,
          },
          {
            type: "video",
            placeholder: "exp3-video1",
            url: findVideo('exp3-video1').url,
            hint: findVideo('exp3-video1').hint
       }
      ]
    },
    {
      id :"exp4",
      role :"Ayudante de Cátedra",
      company :"Departamento de Telecomunicaciones, UNRC",
      dates :"2019 - 2021",
      summary :"Ayudante de Cátedra por concurso para las asignaturas de Sistemas y Señales I y II.",
      detailedDescription : `
Seleccionado para el cargo por concurso de antecedentes y oposición, asumí un rol activo en la docencia y preparación de los laboratorios para dos materias fundamentales que sientan las bases del ciclo de especialización en Telecomunicaciones.

* **Diseño de Contenido Práctico**: Fui responsable de crear, redactar y preparar el material didáctico y las guías de laboratorio para los alumnos. Mi enfoque fue conectar la teoría abstracta con casos de uso prácticos y reales del mundo de las telecomunicaciones.
* **Instrucción y Presentación en Laboratorio**: Impartí las clases prácticas, presentando los objetivos de cada laboratorio y guiando a los estudiantes durante los experimentos. Mi rol principal era traducir la teoría compleja a observaciones prácticas, ampliando conceptualmente los temas a partir de los resultados observados.
* **Preparación de Entornos de Prueba**: Realicé la configuración y el montaje completo de los entornos de laboratorio, asegurando el correcto funcionamiento del hardware (osciloscopios, generadores de señales) y software (MATLAB/Simulink) antes de cada clase.
* **Mentoría y Soporte a Estudiantes**: Brindé soporte directo a los alumnos durante las prácticas, fomentando un aprendizaje interactivo y ayudando a consolidar los conocimientos teóricos a través de la experiencia práctica.
`
    },
    {
      id :"exp5",
      role :"Instructor y Colaborador en Proyecto de Extensión Universitaria",
      company :"GSTR (UNRC) en colaboración con el Instituto Galileo Galilei",
      dates :"2019",
      summary :"",
      detailedDescription : `
Participé como instructor en un proyecto de extensión universitaria coordinado por el Grupo de Sistemas en Tiempo Real (GSTR) de la UNRC. El objetivo principal fue capacitar a docentes del nivel primario y acompañar la implementación de la robótica en la currícula del Instituto Galileo Galilei.

Mis responsabilidades y logros clave fueron:

* **Adaptación y Creación de Contenido Didáctico**: Co-desarrollé el material educativo del curso, adaptando conceptos técnicos de programación y electrónica para que fueran comprensibles y atractivos tanto para los docentes como para los alumnos del nivel primario (4to, 5to y 6to grado).
* **Capacitación y Formación Docente**: Impartí el curso de formación intensivo a los docentes de primaria del colegio, entrenándolos en los fundamentos de la plataforma Arduino y proporcionándoles las herramientas pedagógicas para liderar sus propias clases de robótica.
* **Soporte Pedagógico y Acompañamiento en Aula**: Brindé asistencia directa a los docentes durante las primeras clases con los alumnos de 4to, 5to y 6to grado. Mi rol era ser un facilitador, ayudando a traducir los conceptos a actividades prácticas y asegurando que los docentes ganaran la confianza necesaria para enseñar de forma autónoma.
* **Impacto y Legado**: El proyecto fue un éxito, logrando que el colegio integrara de manera sostenible la robótica en su plan de estudios y sentando las bases para la alfabetización tecnológica de sus alumnos desde una edad temprana.
      `,
      media:[
        {
          type: "image",
          placeholder: "exp5-img1",
          url: findImage('exp5-img1').url,
          hint: findImage('exp5-img1').hint
        },
        {
          type: "video",
          placeholder: "exp5-video1",
          url: findVideo('exp5-video1').url,
          hint: findVideo('exp5-video1').hint
        }
      ]
    },
    {
      id: "exp6",
      role: "Instructor y Colaborador en Curso de Formación Técnica",
      company: "Grupo de Sistemas en Tiempo Real (GSTR), UNRC",
      dates: "2019",
      summary: "",
      detailedDescription: `
Como miembro activo del Grupo de Sistemas en Tiempo Real (GSTR), participé en la creación y ejecución de un curso de formación técnica diseñado para introducir a los estudiantes de segundo año de Ingeniería en Telecomunicaciones en el mundo de los sistemas embebidos y la programación con Arduino.

Mis responsabilidades principales fueron:

* **Desarrollo de Material Didáctico**: Colaboré activamente en el diseño y la redacción del contenido del curso, incluyendo guías de laboratorio detalladas, ejercicios prácticos y la documentación técnica de soporte.
* **Asistencia y Soporte en Clase**: Durante el dictado del curso, brindé soporte directo a mis compañeros, actuando como mentor para resolver dudas de programación, depurar código y solucionar problemas de hardware en tiempo real.
* **Evaluación y Feedback Formativo**: Fui parte del equipo responsable de la corrección de las actividades y proyectos entregados por los alumnos, proporcionando feedback constructivo para afianzar su aprendizaje y asegurar el cumplimiento de los objetivos del curso.
      `,
      media: [
        {
          type: "image",
          placeholder: "exp6-img1",
          url: findImage('exp6-img1').url,
          hint: findImage('exp6-img1').hint
        },
        {
          type: "video",
          placeholder: "exp6-video1",
          url: findVideo('exp6-video1').url,
          hint: findVideo('exp6-video1').hint
        }
      ]
    },
    {
      id: "exp7",
      role: "Becario de Investigación",
      company: "Grupo de Sistemas en Tiempo Real (GSTR), Facultad de Ingeniería - UNRC",
      dates: "2018",
      summary: 'Becario del proyecto "Sistema embebido aplicado a la deteccion y alerta de incendios para implementar en sistemas de aviones no tripulados" en la UNRC, a cargo del directo PRIMO, Damián de la facultad de ingeniería.',
      detailedDescription: `
Adjudicatario de una beca de investigación por mérito académico para participar en un proyecto de I+D dentro del Grupo de Sistemas en Tiempo Real (GSTR). El proyecto se centró en el desarrollo de un sistema embebido para la detección y alerta temprana de incendios utilizando drones (UAVs).

En un entorno altamente colaborativo, mis contribuciones se enfocaron en dos áreas críticas:

**Procesamiento y Transmisión de Imágenes bajo Ancho de Banda Restringido**:

Investigué y evalué algoritmos de procesamiento digital de imágenes con el objetivo de optimizar los datos visuales para su transmisión en tiempo real. El principal desafío fue adaptar las imágenes para ser enviadas eficientemente a través de un canal de comunicación de largo alcance y bajo consumo como LoRa.

**Diseño y Robustecimiento del Enlace de Comunicación Drone-Tierra**:

Participé en el diseño del sistema de comunicaciones, investigando arquitecturas de antenas y protocolos para fortalecer el enlace. Mis tareas incluyeron la ejecución de pruebas de campo para validar la conectividad, el ciclo completo de envío y recepción de imágenes, y la correcta visualización de los datos en la estación terrena.
      `,
      media: [
        {
          type: "image",
          placeholder: "exp7-img1",
          url: findImage('exp7-img1').url,
          hint: findImage('exp7-img1').hint
        },
        {
          type: "video",
          placeholder: "exp7-video1",
          url: findVideo('exp7-video1').url,
          hint: findVideo('exp7-video1').hint
        }
      ]
    },
    {
      id: "exp8",
      role: "Miembro del Grupo de Investigación GSTR",
      company: "Grupo de Sistemas en Tiempo Real (GSTR), Departamento de Telecomunicaciones - UNRC",
      dates: "2017 -2021",
      summary: "Como miembro del grupo de I+D GSTR, participé en proyectos de investigación, docencia y extensión que formaron la base de mi desarrollo profesional.",
      detailedDescription: `
Como miembro activo del Grupo de Sistemas en Tiempo Real (GSTR), un equipo dedicado a la investigación y desarrollo en el campo de los sistemas embebidos y las comunicaciones, participé en múltiples proyectos que formaron la base de mi desarrollo profesional. Mi rol en el grupo me permitió cultivar un perfil integral de ingeniero, enfocado en cuatro pilares fundamentales:

* **Investigación Aplicada (I+D)**: Participé en la formulación y ejecución de proyectos de investigación, como la beca para el "Sistema de detección de incendios en UAVs". Esta experiencia me enseñó a aplicar metodologías formales para analizar problemas complejos, evaluar tecnologías y proponer soluciones innovadoras.
* **Docencia y Divulgación Tecnológica**: Colaboré activamente en la creación y el dictado de cursos de formación técnica, como el de "Introducción a Arduino". Esta labor me permitió desarrollar habilidades para comunicar conceptos técnicos complejos a audiencias diversas, desde estudiantes de ingeniería hasta docentes y niños de primaria.
* **Ingeniería Aplicada y Desarrollo Práctico**: Mi participación en el grupo fue un puente constante entre la teoría académica y la aplicación en el mundo real. Traduje conceptos teóricos en soluciones funcionales a través del diseño de guías prácticas, la construcción de prototipos y la ejecución de pruebas de concepto.
* **Colaboración y Trabajo en Equipo**: Todos los proyectos dentro del GSTR se desarrollaron en un entorno altamente colaborativo. Este ambiente fomentó el intercambio constante de ideas, el liderazgo de pares y la gestión conjunta de proyectos desde su concepción hasta su implementación.
      `,
      media: [
        {
          type: "image",
          placeholder: "exp8-img1",
          url: findImage('exp8-img1').url,
          hint: findImage('exp8-img1').hint
        },
        {
          type: "image",
          placeholder: "exp8-img2",
          url: findImage('exp8-img2').url,
          hint: findImage('exp8-img2').hint
        }
      ]
    }
  ],
};
