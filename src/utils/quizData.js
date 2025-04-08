const QuizData = {
  personalQuestions: [
    {
      key: "fullName",
      question: {
        ar: "الاسم الثلاثي",
        en: "Full Name",
      },
    },
    {
      key: "phone",
      question: {
        ar: "رقم الجوال",
        en: "Phone Number",
      },
    },
    {
      key: "email",
      question: {
        ar: "البريد الالكتروني",
        en: "Email Address",
      },
    },
    {
      key: "selfEvaluation",
      question: {
        ar: "كيف تقييم نفسك بالذكاء الاصطناعي",
        en: "How would you rate your AI knowledge?",
      },
    },
  ],
  quizQuestions: [
    {
      id: 1,
      en: "How do you view artificial intelligence?",
      ar: "كيف ترى الذكاء الاصطناعي؟",
      options: {
        A: {
          en: "A chance to develop new technologies",
          ar: "فرصة لتطوير تقنيات جديدة",
        },
        B: {
          en: "A tool for solving data-driven problems",
          ar: "أداة لحل المشاكل بناءً على البيانات",
        },
        C: { en: "A way to make life easier", ar: "وسيلة لجعل الحياة أسهل" },
        D: {
          en: "Something interesting, I want to understand it more",
          ar: "شيء مثير للاهتمام، أود فهمه أكثر",
        },
      },
    },
    {
      id: 2,
      en: "When you hear about a new AI technology, what’s your first reaction?",
      ar: "عند سماعك عن تقنية ذكاء اصطناعي جديدة، ما هو رد فعلك الأول؟",
      options: {
        A: {
          en: "I try it and figure out how it works",
          ar: "أجربها وأحاول فهم كيفية عملها",
        },
        B: {
          en: "I look for research and studies about its effectiveness",
          ar: "أبحث عن أبحاث ودراسات حول فعاليتها",
        },
        C: {
          en: "I think about how to apply it in my daily life",
          ar: "أفكر في كيفية تطبيقها في حياتي اليومية",
        },
        D: {
          en: "I read about it and share it with friends",
          ar: "أقرأ عنها وأشاركها مع أصدقائي",
        },
      },
    },
    {
      id: 3,
      en: "How do you deal with a complex technical problem?",
      ar: "كيف تتعامل مع مشكلة تقنية معقدة؟",
      options: {
        A: {
          en: "I try to build a new solution using available tools",
          ar: "أحاول بناء حل جديد باستخدام الأدوات المتاحة",
        },
        B: {
          en: "I analyze data to reach conclusions",
          ar: "أقوم بتحليل البيانات والتوصل إلى استنتاجات",
        },
        C: {
          en: "I look for a tool to help solve it quickly",
          ar: "أبحث عن أداة تساعدني في حلها بسرعة",
        },
        D: {
          en: "I ask experts or search for courses to understand it",
          ar: "أسأل الخبراء، أو أبحث عن كورسات لفهمها",
        },
      },
    },
    {
      id: 4,
      en: "What attracts you most when watching AI-related content?",
      ar: "ما الذي يجذبك أكثر عند مشاهدة محتوى عن الذكاء الاصطناعي؟",
      options: {
        A: {
          en: "How models and algorithms are developed",
          ar: "كيفية تطوير النماذج والخوارزميات",
        },
        B: {
          en: "In-depth analysis of AI impacts",
          ar: "التحليل العميق لتأثيرات الذكاء الاصطناعي",
        },
        C: {
          en: "Practical applications like robots and voice assistants",
          ar: "التطبيقات العملية مثل الروبوتات والمساعدات الصوتية",
        },
        D: {
          en: "Future stories and theories about AI",
          ar: "القصص المستقبلية والنظريات حول الذكاء الاصطناعي",
        },
      },
    },
    {
      id: 5,
      en: "If you were to start an AI project, what’s the first thing you’d do?",
      ar: "إذا كنت ستبدأ مشروعاً في الذكاء الاصطناعي، ما أول شيء ستفعله؟",
      options: {
        A: {
          en: "Program and test different models",
          ar: "البرمجة وتجربة النماذج المختلفة",
        },
        B: {
          en: "Research and analyze the best possible solutions",
          ar: "البحث وتحليل أفضل الحلول الممكنة",
        },
        C: {
          en: "Find a ready-made tool and use it directly",
          ar: "إيجاد أداة جاهزة واستخدامها مباشرة",
        },
        D: {
          en: "Learn the basics first through training courses",
          ar: "تعلم الأساسيات أولاً من خلال الدورات التدريبية",
        },
      },
    },
    {
      id: 6,
      en: "Do you have experience in programming or data analysis?",
      ar: "هل لديك خبرة في البرمجة أو تحليل البيانات؟",
      options: {
        A: {
          en: "Yes, I program and build AI-based applications",
          ar: "نعم، أبرمج وأطور تطبيقات باستخدام الذكاء الاصطناعي",
        },
        B: {
          en: "I have analytical knowledge and understand the basics",
          ar: "لدي معرفة تحليلية وفهم المفاهيم الأساسية",
        },
        C: {
          en: "I use some ready-made tools without coding",
          ar: "أستخدم بعض الأدوات الجاهزة دون الحاجة للبرمجة",
        },
        D: {
          en: "I have no experience, but I want to learn",
          ar: "ليس لدي خبرة، لكن أرغب في التعلم",
        },
      },
    },
    {
      id: 7,
      en: "What’s your level of knowledge in Machine Learning?",
      ar: "ما هو مستوى معرفتك في تعلم الآلة؟",
      options: {
        A: {
          en: "I work on it practically and build models",
          ar: "أعمل عليه بشكل عملي وأطور نماذج",
        },
        B: {
          en: "I understand the concepts and read about it regularly",
          ar: "أفهم المفاهيم وأقرأ عنها بانتظام",
        },
        C: {
          en: "I’ve heard of it and want to use it in the future",
          ar: "سمعت عنه وأرغب في استخدامه في المستقبل",
        },
        D: {
          en: "I don’t have enough knowledge about it yet",
          ar: "ليس لدي معرفة كافية عنه حتى الآن",
        },
      },
    },
    {
      id: 8,
      en: "When using an AI tool, do you think about how it works internally?",
      ar: "عند استخدام أداة ذكاء اصطناعي، هل تفكر في كيفية عملها داخلياً؟",
      options: {
        A: {
          en: "Yes, I try to analyze the code and used models",
          ar: "نعم، أحاول تحليل الكود والنماذج المستخدمة",
        },
        B: {
          en: "I try to understand the theoretical idea behind it",
          ar: "أحاول فهم المبدأ النظري وراءها",
        },
        C: {
          en: "I don’t care how it works as long as it’s useful",
          ar: "لا يهمني كيف تعمل، طالما أنها مفيدة",
        },
        D: {
          en: "I think I need to learn more about it",
          ar: "أعتقد أنني بحاجة إلى تعلم المزيد عنها",
        },
      },
    },
    {
      id: 9,
      en: "What’s your attitude towards data analysis?",
      ar: "ما هو موقفك من تحليل البيانات؟",
      options: {
        A: {
          en: "I enjoy analyzing data and developing predictive models",
          ar: "أستمتع بتحليل البيانات وتطوير النماذج التنبؤية",
        },
        B: {
          en: "I like analyzing data to make evidence-based decisions",
          ar: "أحب تحليل البيانات لاتخاذ قرارات قائمة على الأدلة",
        },
        C: {
          en: "I use data when it’s ready, but I don’t analyze it",
          ar: "أستخدم البيانات عندما تكون جاهزة، ولكن لا أعمل بتحليلها",
        },
        D: {
          en: "I’ve never worked with data analysis before",
          ar: "لم أتعامل مع تحليل البيانات من قبل",
        },
      },
    },
    {
      id: 10,
      en: "How familiar are you with AI algorithms?",
      ar: "ما مدى معرفتك بالخوارزميات المستخدمة في الذكاء الاصطناعي؟",
      options: {
        A: {
          en: "I have hands-on experience applying them",
          ar: "لدي خبرة عملية في تطبيقها",
        },
        B: {
          en: "I have theoretical knowledge and understand the concepts",
          ar: "لدي معرفة نظرية وفهم للمفاهيم",
        },
        C: {
          en: "I don’t use them, but I’m familiar with some terms",
          ar: "لا أستخدمها، ولكن أتعرف على بعض المصطلحات",
        },
        D: {
          en: "I’ve heard of them but don’t know how to use them",
          ar: "أسمع عنها، ولكن لا أعرف كيفية استخدامها",
        },
      },
    },
    {
      id: 11,
      en: "Have you ever used AI tools in your daily life or work?",
      ar: "هل سبق لك استخدام أداة ذكاء اصطناعي في حياتك اليومية أو عملك؟",
      options: {
        A: {
          en: "Yes, and I develop solutions based on them",
          ar: "نعم، وأقوم بتطوير حلول تعتمد عليها",
        },
        B: {
          en: "Yes, but only for analytical purposes",
          ar: "نعم، ولكن فقط لأغراض تحليلية",
        },
        C: {
          en: "Yes, but in a basic way like using ChatGPT or ready tools",
          ar: "نعم، ولكن بشكل سطحي مثل استخدام ChatGPT أو أدوات جاهزة",
        },
        D: {
          en: "I haven’t used it yet, but I’m interested in trying",
          ar: "لم أستخدمها بعد، لكنني مهتم بتجربتها",
        },
      },
    },
    {
      id: 12,
      en: "If you wanted to learn AI, how would you start?",
      ar: "إذا أردت تعلم الذكاء الاصطناعي، كيف ستبدأ؟",
      options: {
        A: {
          en: "Reading books, advanced courses, and hands-on practice",
          ar: "بقراءة الكتب والدورات المتقدمة والتجربة العملية",
        },
        B: {
          en: "Researching the best methods and theoretical models",
          ar: "بالبحث عن أفضل الطرق والنماذج النظرية",
        },
        C: {
          en: "Using ready-made tools first, then learning details later",
          ar: "باستخدام الأدوات الجاهزة أولاً ثم فهم التفاصيل لاحقاً",
        },
        D: {
          en: "Taking an introductory course to learn the basics",
          ar: "بأخذ دورة تمهيدية لمعرفة الأساسيات",
        },
      },
    },
    {
      id: 13,
      en: "How do you prefer to use AI?",
      ar: "كيف تفضل استخدام الذكاء الاصطناعي؟",
      options: {
        A: {
          en: "In building new and innovative solutions",
          ar: "في بناء حلول جديدة ومبتكرة",
        },
        B: {
          en: "In analyzing data and making smart decisions",
          ar: "في تحليل البيانات واتخاذ قرارات ذكية",
        },
        C: {
          en: "In simplifying daily tasks and boosting productivity",
          ar: "في تسهيل المهام اليومية وزيادة الإنتاجية",
        },
        D: {
          en: "In exploring and trying its various applications",
          ar: "في استكشاف تطبيقاته المختلفة وتجربتها",
        },
      },
    },
    {
      id: 14,
      en: "If you were part of a team developing an AI project, what would your ideal role be?",
      ar: "إذا كنت تعمل في فريق يطور مشروع ذكاء اصطناعي، ما هو دورك المثالي؟",
      options: {
        A: {
          en: "The programmer building smart models",
          ar: "المبرمج الذي يطور النماذج الذكية",
        },
        B: {
          en: "The analyst defining the best solutions based on data",
          ar: "المحلل الذي يحدد أفضل الحلول بناءً على البيانات",
        },
        C: {
          en: "The person spreading AI usage in real life",
          ar: "الشخص الذي ينشر استخدام الذكاء الاصطناعي في الحياة العملية",
        },
        D: {
          en: "The observer who learns how the project is built",
          ar: "الشخص الذي يراقب ويتعلم كيفية بناء المشروع",
        },
      },
    },
    {
      id: 15,
      en: "How do you expect the future of AI to be?",
      ar: "كيف تتوقع أن يكون مستقبل الذكاء الاصطناعي؟",
      options: {
        A: {
          en: "We’ll reach super-intelligent technologies and take part in developing them",
          ar: "سنصل إلى تقنيات فائقة الذكاء، وسنشارك في تطويرها",
        },
        B: {
          en: "We’ll face major challenges that need deep research and analysis",
          ar: "سنواجه تحديات كبيرة تحتاج إلى دراسة وتحليل عميق",
        },
        C: {
          en: "It’ll become part of our daily lives and make many tasks easier",
          ar: "سيكون جزءاً من حياتنا اليومية، وسيسهل الكثير من المهام",
        },
        D: {
          en: "It’ll be something exciting to follow, but I don’t know how it will evolve",
          ar: "سيكون شيئاً مثيراً نتابعه، ولكن لا أعرف كيف سيتطور",
        },
      },
    },
  ],
};

export default QuizData;