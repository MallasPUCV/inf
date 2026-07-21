const semesters = {
    1: [
        { code: "ICI1241", name: "Fundamentos de Algoritmos", prereq: [], credits: 4 },
        { code: "ICI1243", name: "Introducción a la Ingeniería Informática", prereq: [], credits: 4 },
        { code: "ICI1458", name: "Bienestar y Aprendizaje Universitario", prereq: [], credits: 2 },
        { code: "MAT1001", name: "Fundamentos de Matemáticas para Ingeniería", prereq: [], credits: 6 }
    ],

    2: [
        { code: "FIN100", name: "Desarrollo Integral y Comunicación para Ingeniería", prereq: [], credits: 3 },
        { code: "ICI1242", name: "Fundamentos de Programación", prereq: ["ICI1241"], credits: 4 },
        { code: "MAT1002", name: "Cálculo Diferencial e Integral", prereq: ["MAT1001"], credits: 6 },
        { code: "MAT1004", name: "Álgebra Lineal", prereq: ["MAT1001"], credits: 4 },
        { code: "FOFU1", name: "Formación Fundamental 1", prereq: [], credits: 2 }
    ],

    3: [
        { code: "FIS1002", name: "Física para Ingeniería", prereq: ["MAT1001"], credits: 5 },
        { code: "ICI2145", name: "Análisis Inteligente de Datos", prereq: ["MAT1002"], credits: 4 },
        { code: "ICI2240", name: "Estructura de Datos", prereq: ["ICI1242"], credits: 4 },
        { code: "MAT1003", name: "Cálculo en Varias Variables", prereq: ["MAT1002"], credits: 4 },
        { code: "IER010", name: "Antropología Cristiana", prereq: [], credits: 2 },
        { code: "FOFU2", name: "Formación Fundamental 2", prereq: [], credits: 2 }
    ],

    4: [
        { code: "FIS2120", name: "Física Electromagnetismo", prereq: ["FIS1002"], credits: 3 },
        { code: "ICI2141", name: "Métodos Numéricos", prereq: ["ICI1242"], credits: 3 },
        { code: "ICI2241", name: "Programación Avanzada", prereq: ["ICI2240"], credits: 4 },
        { code: "ICI2242", name: "Análisis y Diseño de Algoritmos", prereq: [], credits: 4 },
        { code: "ING9001", name: "Inglés 1", prereq: [], credits: 2 },
        { code: "IER020", name: "Ética Cristiana", prereq: [], credits: 2 }
    ],

      5: [
        { code: "FIS3149", name: "Física Moderna", prereq: ["FIS1002"], credits: 3 },
        { code: "ICI3240", name: "Base de Datos", prereq: ["ICI1242"], credits: 4 },
        { code: "ICI3244", name: "Inteligencia Artificial", prereq: ["ICI2242"], credits: 4 },
        { code: "ICI3245", name: "Autómatas y Compiladores", prereq: ["ICI2241"], credits: 3 },
        { code: "ICI3344", name: "Hardware y Sistemas Operativos", prereq: ["ICI1242"], credits: 4 },
        { code: "ING9002", name: "Inglés 2", prereq: ["ING9001"], credits: 2 }
    ],

    6: [
        { code: "ICA4121", name: "Administración de Empresas", prereq: [], credits: 3 },
        { code: "ICI3150", name: "Ciencia y Tecnología", prereq: [], credits: 3 },
        { code: "ICI3170", name: "Estadística Computacional", prereq: ["MAT1003"], credits: 4 },
        { code: "ICI3246", name: "Modelamiento de Software", prereq: ["ICI3240"], credits: 4 },
        { code: "ICI3343", name: "Redes de Computadores", prereq: ["ICI3245"], credits: 4 },
        { code: "ING9003", name: "Inglés 3", prereq: ["ING9002"], credits: 2 }
    ],

    7: [
        { code: "ICI4150", name: "Robótica y Sistemas Autónomos", prereq: ["ICI3343"], credits: 3 },
        { code: "ICI4151", name: "Optimización", prereq: [], credits: 4 },
        { code: "ICI4244", name: "Ingeniería de Software", prereq: ["ICI3246"], credits: 4 },
        { code: "ICI4247", name: "Ingeniería Web y Móvil", prereq: ["ICI3246"], credits: 4 },
        { code: "ICI4344", name: "Computación Paralela y Distribuida", prereq: ["ICI3343"], credits: 4 },
        { code: "ING9004", name: "Inglés 4", prereq: ["ING9003"], credits: 2 }
    ],

    8: [
        { code: "ICA4161", name: "Economía y Finanzas", prereq: ["ICA4121"], credits: 3 },
        { code: "ICI4248", name: "Ingeniería de Requerimientos", prereq: ["ICI4247"], credits: 4 },
        { code: "ICI4370", name: "Ciberseguridad", prereq: ["ICI3343"], credits: 4 },
        { code: "ICI4541", name: "Taller de Base de Datos", prereq: ["ICI3240"], credits: 4 },
        { code: "OPT1", name: "Optativo 1", prereq: [], credits: 4 },
        { code: "FOFU3", name: "Formación Fundamental 3", prereq: [], credits: 2 }
    ],

      9: [
        { code: "ICI5247", name: "Experiencia de Usuario", prereq: ["ICI4248"], credits: 3 },
        { code: "ICI5441", name: "Administración de Proyectos Informáticos", prereq: [], credits: 3 },
        { code: "ICI5442", name: "Tecnologías Emergentes", prereq: [], credits: 4 },
        { code: "ICI5475", name: "Negocios, Innovación y Emprendimiento", prereq: [], credits: 3 },
        { code: "OPT2", name: "Optativo 2", prereq: [], credits: 4 },
        { code: "ICI5545", name: "Taller de Ingeniería de Software", prereq: ["ICI4244"], credits: 4 }
    ],

    10: [
        { code: "ICI5345", name: "Legislación Ética y Tecnológica", prereq: [], credits: 3 },
        { code: "ICI5444", name: "Taller de Formulación de Proyectos Informáticos", prereq: ["ICI5441"], credits: 4 },
        { code: "ICI5476", name: "Taller de Liderazgo y Trabajo en Equipo", prereq: [], credits: 3 },
        {
            code: "ICI5541",
            name: "Seminario de Título",
            prereq: [
                "ICA4161",
                "ICI4248",
                "ICI4370",
                "ICI5441",
                "ICI5545",
                "ICI5442",
                "ICI5247",
                "ICI5475",
                "ICI4151",
                "ICI3170",
                "ICI3344",
                "ICI3244"
            ],
            credits: 5
        },
        { code: "OPT3", name: "Optativo 3", prereq: [], credits: 4 }
    ],

    11: [
        {
            code: "ICI6541",
            name: "Proyecto de Título",
            prereq: ["ICI5541"],
            credits: 12
        },
        { code: "OPT4", name: "Optativo 4", prereq: [], credits: 4 }
    ]
};
