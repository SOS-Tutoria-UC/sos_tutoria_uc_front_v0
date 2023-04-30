export const Q01OPTIONS = [
  {
    id: "M",
    name: "Masculino",
  },
  {
    id: "F",
    name: "Femenino",
  },
  {
    id: "O",
    name: "Prefiero no decir",
  },
];

export const Q03AOPTIONS = [
  {
    id: "asuncion",
    name: "Asunción",
  },
  {
    id: "alto_parana",
    name: "Alto Paraná",
  },
  {
    id: "caaguazu",
    name: "Caaguazú",
  },
  {
    id: "concepcion",
    name: "Concepción",
  },
  {
    id: "guaira",
    name: "Guairá",
  },
  {
    id: "itapua",
    name: "Itapúa",
  },
];

export const Q03BOPTIONS = [
  {
    id: "U1",
    name: "Estudiante - 1° año",
  },
  {
    id: "U2",
    name: "Estudiante - 2° año",
  },
  {
    id: "U3",
    name: "Estudiante - 3° año",
  },
  {
    id: "U4",
    name: "Estudiante - 4° año",
  },
  {
    id: "U5",
    name: "Estudiante - 5° año",
  },
  {
    id: "TS",
    name: "Estudiante de PFC",
  },
  {
    id: "MSC",
    name: "MSc/MA",
  },
  {
    id: "PHD",
    name: "MPhil/MRes/PhD",
  },
];

export const SKILLS = {
  "Ciencias exactas": [
    { id: "c_logic", name: "Lógica", level: 1 },
    { id: "c_math", name: "Matemáticas", level: 1 },
    { id: "c_fisics", name: "Física", level: 1 },
    { id: "c_probability", name: "Probabilidad y estadística", level: 1 },
    { id: "c_trigonometry", name: "Trigonometría", level: 1 },
    { id: "c_arithmetic", name: "Aritmética", level: 1 },
    { id: "c_algebra", name: "Algebra", level: 1 },
    { id: "c_analytical_geometry", name: "Geometría Analítica", level: 1 },
    { id: "c_calculus", name: "Cálculo", level: 1 },
  ],
  "Ciencias de la computación": [
    { id: "c_informatics", name: "Informática", level: 1 },
    { id: "c_soft_engineering", name: "Ingeniería de Software", level: 1 },
    { id: "c_programing", name: "Programación", level: 1 },
    { id: "c_networks", name: "Redes de computadoras", level: 1 },
    { id: "c_operating_systems", name: "Sistemas Operativos", level: 1 },
    { id: "c_databases", name: "Base de datos", level: 1 },
    { id: "c_automata_theory", name: "Teoría de Autómatas", level: 1 },
    { id: "c_data_science", name: "Ciencia de datos", level: 1 },
    { id: "c_compilers", name: "Compiladores", level: 1 },
  ],
  Salud: [
    { id: "c_chemistry", name: "Química", level: 1 },
    { id: "c_biology", name: "Biología y Genética", level: 1 },
    { id: "c_kinesiology", name: "Kinesiología", level: 1 },
    { id: "c_physiotherapy", name: "Fisioterapia", level: 1 },
    { id: "c_biochemistry", name: "Bioquímica", level: 1 },
    { id: "c_odontology", name: "Odontología", level: 1 },
    { id: "c_nutrition", name: "Nutrición", level: 1 },
    { id: "c_pharmacology", name: "Farmacología", level: 1 },
    { id: "c_anatomy", name: "Anatomía", level: 1 },
    { id: "c_phonoaudiology", name: "Fonoaudiología", level: 1 },
    { id: "c_histology", name: "Histología y Embiología", level: 1 },
    { id: "c_gynecology", name: "Ginecología y Obstetricia", level: 1 },
    { id: "c_oncology", name: "Oncología", level: 1 },
    { id: "c_psychiatry", name: "Psiquiatría", level: 1 },
    { id: "c_pediatrics", name: "Pediatría", level: 1 },
    { id: "c_otorhin", name: "Otorrinolaringología", level: 1 },
    { id: "c_traumatology", name: "Traumatología", level: 1 },
    { id: "c_dermatology", name: "Dermatología", level: 1 },
  ],
  "Administrativas y Contables": [
    { id: "c_administration", name: "Administración de empresas", level: 1 },
    { id: "c_accounting", name: "Contabilidad", level: 1 },
    { id: "c_economy", name: "Economía", level: 1 },
    { id: "c_marketing", name: "Marketing", level: 1 },
    { id: "c_int_commerce", name: "Comercio internacional", level: 1 },
  ],
  "Ciencias Sociales": [
    { id: "c_psicology", name: "Psicología", level: 1 },
    { id: "c_history", name: "Historia", level: 1 },
    { id: "c_sociology", name: "Sociología", level: 1 },
  ],
  Jurídicas: [
    { id: "c_diplomacy", name: "Diplomacia", level: 1 },
    { id: "c_politics", name: "Política", level: 1 },
    { id: "c_law", name: "Derecho", level: 1 },
    { id: "c_notary", name: "Notariado", level: 1 },
  ],
  "Ciencias de la Electrónica": [
    { id: "c_anan_electronics", name: "Electrónica analógica", level: 1 },
    { id: "c_digit_electronics", name: "Electrónica digital", level: 1 },
    { id: "c_telecommunications", name: "Telecomunicaciones", level: 1 },
    { id: "c_automation", name: "Automatización", level: 1 },
    { id: "c_electronics", name: "Electrónica de potencia", level: 1 },
  ],
  "Diseño y Construcción": [
    {
      id: "c_sanitary_installations",
      name: "Instalaciones sanitarias",
      level: 1,
    },
    {
      id: "c_electrical_installations",
      name: "Instalaciones eléctricas",
      level: 1,
    },
    { id: "c_contr_management", name: "Gestión de obras", level: 1 },
    { id: "c_structure_design", name: "Diseño de estructuras", level: 1 },
    { id: "c_visual_design", name: "Diseño visual", level: 1 },
    { id: "c_digital_design", name: "Diseño digital", level: 1 },
  ],
  Ambiental: [
    { id: "c_environmental_sciences", name: "Ciencias ambientales", level: 1 },
  ],
};

export const Q03OPTIONS = [
  {
    id: "q03a",
    name: "Administración de Empresas",
  },
  {
    id: "q03b",
    name: "Administración de Empresas Agropecuarias",
  },
  {
    id: "q03c",
    name: "Análisis de Sistemas Informáticos",
  },
  {
    id: "q03d",
    name: "Arquitectura",
  },
  {
    id: "q03e",
    name: "Atención Integral Temprana",
  },
  {
    id: "q03f",
    name: "Bioquímica",
  },
  {
    id: "q03g",
    name: "Ciencia Pastoral",
  },
  {
    id: "q03h",
    name: "Ciencias Contables",
  },
  {
    id: "q03i",
    name: "Ciencias de la Comunicación",
  },
  {
    id: "q03j",
    name: "Ciencias de la Educación",
  },
  {
    id: "q03k",
    name: "Ciencias Diplomáticas",
  },
  {
    id: "q03l",
    name: "Ciencias Políticas",
  },
  {
    id: "q03m",
    name: "Comercio Internacional",
  },
  {
    id: "q03n",
    name: "Comunicación Institucional",
  },
  {
    id: "q03o",
    name: "Contador Público Nacional",
  },
  {
    id: "q03p",
    name: "Derecho",
  },
  {
    id: "q03q",
    name: "Diseño Gráfico",
  },
  {
    id: "q03r",
    name: "Diseño Industrial",
  },
  {
    id: "q03s",
    name: "Economía",
  },
  {
    id: "q03t",
    name: "Enfermería",
  },
  {
    id: "q03u",
    name: "Filosofía",
  },
  {
    id: "q03v",
    name: "Fonoaudiología",
  },
  {
    id: "q03w",
    name: "Historia",
  },
  {
    id: "q03x",
    name: "Hotelería y turismo",
  },
  {
    id: "q03y",
    name: "Ingeniería Agroambiental",
  },
  {
    id: "q03z",
    name: "Ingeniería Agroindustrial",
  },
  {
    id: "q03aa",
    name: "Ingeniería Agronómica",
  },
  {
    id: "q03ab",
    name: "Ingeniería Ambiental",
  },
  {
    id: "q03ac",
    name: "Ingeniería Civil",
  },
  {
    id: "q03ad",
    name: "Ingeniería Electromecánica con Orientación Electrónica",
  },
  {
    id: "q03ae",
    name: "Ingeniería Electrónica",
  },
  {
    id: "q03af",
    name: "Ingeniería Industrial",
  },
  {
    id: "q03ag",
    name: "Ingeniería Informática",
  },
  {
    id: "q03ah",
    name: "Ingeniería Química",
  },
  {
    id: "q03ai",
    name: "Ingeniería Zootécnica",
  },
  {
    id: "q03aj",
    name: "Kinesiología y Fisiatría",
  },
  {
    id: "q03ak",
    name: "Kinesiología y Fisioterapia",
  },
  {
    id: "q03al",
    name: "Licenciatura en Educación Parvularia y 1°Ciclo Educación Escolar Básica con énfasis en Gestión Educativa",
  },
  {
    id: "q03am",
    name: "Sociología",
  },
  {
    id: "q03an",
    name: "Marketing",
  },
  {
    id: "q03ao",
    name: "Medicina",
  },
  {
    id: "q03ap",
    name: "Medicina veterinaria",
  },
  {
    id: "q03aq",
    name: "Musicoterapia",
  },
  {
    id: "q03ar",
    name: "Notariado",
  },
  {
    id: "q03as",
    name: "Nutrición",
  },
  {
    id: "q03at",
    name: "Odontología",
  },
  {
    id: "q03au",
    name: "Periodismo",
  },
  {
    id: "q03av",
    name: "Psicología",
  },
  {
    id: "q03aw",
    name: "Publicidad",
  },
  {
    id: "q03ax",
    name: "Química Industrial",
  },
  {
    id: "q03ay",
    name: "Química y Farmacia",
  },
  {
    id: "q03az",
    name: "Trabajo Social",
  },
];

export const Q08OPTIONS = [
  {
    id: "v_support",
    name: "01. APOYO SOCIAL. Obtener ayuda cuando la necesite; sentir que no estás solo en el mundo.",
    level: 1,
  },
  {
    id: "v_success",
    name: "02. ÉXITO. Alcanzar sus metas; ser eficiente en todo lo que haces.",
    level: 1,
  },
  {
    id: "v_sexuality",
    name: "03. SEXUALIDAD. Tener relaciones sexuales; obtener placer sexual.",
    level: 1,
  },
  {
    id: "v_know",
    name: "04. CONOCIMIENTO. Buscar noticias de actualidad sobre asuntos no muy conocidos; Tratar de descubrir cosas nuevas sobre el mundo.",
    level: 1,
  },
  {
    id: "v_emotion",
    name: "05. EMOCIÓN. Disfrutar de retos o situaciones desconocidas; buscar aventuras.",
    level: 1,
  },
  {
    id: "v_power",
    name: "06. PODER. Tener el poder de influir en los demás y controlar las decisiones; ser el jefe de un equipo.",
    level: 1,
  },
  {
    id: "v_affect",
    name: "07. AFECTIVIDAD. Tener una relación afectiva profunda y duradera; tener a alguien con quien compartir éxitos y fracasos.",
    level: 1,
  },
  {
    id: "v_relig",
    name: "08. RELIGIOSIDAD. Creer en Dios como salvador de la humanidad; cumplir la voluntad de Dios.",
    level: 1,
  },
  {
    id: "v_health",
    name: "09. SALUD. Velar por su salud en todo momento, no sólo cuando esté enfermo; no estar enfermo",
    level: 1,
  },
  {
    id: "v_pleasure",
    name: "10. PLACER. Vivir el momento; satisfacer todos tus deseos.",
    level: 1,
  },
  {
    id: "v_prestige",
    name: "11. PRESTIGIO. Saber que mucha gente te conoce y te admira; cuando seas mayor para recibir un homenaje por tus aportes.",
    level: 1,
  },
  {
    id: "v_obed",
    name: "12. OBEDIENCIA. Cumplir con sus deberes y obligaciones diarias; respetar a tus padres, superiores o mayores.",
    level: 1,
  },
  {
    id: "v_stabil",
    name: "13. ESTABILIDAD PERSONAL. Tener la certeza de que mañana tendrás todo lo que tienes hoy; tener una vida organizada y planificada.",
    level: 1,
  },
  {
    id: "v_belong",
    name: "14. PERTENENCIA. Tener buenas relaciones de vecindad; formar parte de un grupo (por ejemplo, social, religioso, deportivo, etc.)",
    level: 1,
  },
  {
    id: "v_beauty",
    name: "15. BELLEZA. Poder apreciar lo mejor del arte, la música y la literatura; ir a museos o exposiciones donde se pueden ver cosas bonitas.",
    level: 1,
  },
  {
    id: "v_trad",
    name: "16. TRADICIÓN. Seguir las normas sociales de su país; respetar las tradiciones de vuestra sociedad.",
    level: 1,
  },
  {
    id: "v_surviv",
    name: "17. SUPERVIVENCIA. Tener agua, alimento y abrigo todos los días de tu vida; vivir en un lugar con suficiente comida.",
    level: 1,
  },
  {
    id: "v_mature",
    name: "18. MADUREZ. Sentir que tu propósito en la vida se ha cumplido; desarrollar todas tus capacidades.",
    level: 1,
  },
];

export const Q09OPTIONS = [
  {
    id: "p_party",
    name: "1. Soy el alma de la fiesta",
    level: 1,
  },
  {
    id: "p_feel",
    name: "2. Empatizo con los sentimientos de los demás",
    level: 1,
  },
  {
    id: "p_chores",
    name: "3. Hago los quehaceres domésticos inmediatamente",
    level: 1,
  },
  {
    id: "p_mood",
    name: "4. Tengo frecuentes cambios de humor",
    level: 1,
  },
  {
    id: "p_vivid",
    name: "5. Poseo una imaginación vívida",
    level: 1,
  },
  {
    id: "p_talk",
    name: "6. No hablo mucho",
    level: 1,
  },
  {
    id: "p_otherprblm",
    name: "7. No estoy interesado en los problemas de otras personas",
    level: 1,
  },
  {
    id: "p_place",
    name: "8. A menudo olvido poner las cosas de vuelta en su lugar",
    level: 1,
  },
  {
    id: "p_relax",
    name: "9. Estoy relajado la mayor parte del tiempo",
    level: 1,
  },
  {
    id: "p_intabs",
    name: "10. No estoy interesado en ideas abstractas",
    level: 1,
  },
  {
    id: "p_tlkparty",
    name: "11. Hablo mucho a diferentes personas en fiestas",
    level: 1,
  },
  {
    id: "p_feelem",
    name: "12. Siento las emociones de los demás",
    level: 1,
  },
  {
    id: "p_order",
    name: "13. Me gusta el orden",
    level: 1,
  },
  {
    id: "p_upset",
    name: "14. Me enojo fácilmente",
    level: 1,
  },
  {
    id: "p_undabs",
    name: "15. Tengo dificultades para comprender ideas abstractas",
    level: 1,
  },
  {
    id: "p_back",
    name: "16. Permanezco en segundo plano",
    level: 1,
  },
  {
    id: "p_intother",
    name: "17. Realmente no estoy interesado en los demás",
    level: 1,
  },
  {
    id: "p_mess",
    name: "18. Hago desastres",
    level: 1,
  },
  {
    id: "p_blue",
    name: "19. Pocas veces me siento deprimido",
    level: 1,
  },
  {
    id: "p_goodim",
    name: "20. No tengo buena imaginación",
    level: 1,
  },
];

export const getDomainLabel = (domain) => {
  switch (domain) {
    case "exact_sciences":
      return "Ciencias Exactas";
    case "computer_s_science":
      return "Ciencias de la computación";
    case "health":
      return "Salud";
    case "administrative_and_accounting":
      return "Administrativas y Contables";
    case "social_sciences":
      return "Ciencias Sociales";
    case "legal":
      return "Jurídicas";
    case "environmental":
      return "Ambiental";
    case "design_and_construction":
      return "Diseño y Construcción";
    case "electronic_sciences":
      return "Ciencias de la Electrónica";
    default:
      break;
  }
};
