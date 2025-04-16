import image1 from "../assets/images/Tech.png";
import image2 from "../assets/images/Logical.png";
import image3 from "../assets/images/Practical.png";
import image4 from "../assets/images/Curious.png";

export const charactersImages = {
  TechInnovator: image1,
  LogicalAnalyst: image2,
  PracticalUser: image3,
  CuriousExplorer: image4,
};

export const profileColors = {
  TechInnovator: {
    bg: "#3AB5AC",
    circle: "#57C0B8",
  },
  LogicalAnalyst: {
    bg: "#070A39",
    circle: "#25234A",
  },
  PracticalUser: {
    bg: "#BFBFF1",
    circle: "#B4B4EF",
  },
  CuriousExplorer: {
    bg: "#524FE1",
    circle: "#6C69E5",
  },
};

export const getProfiles = (isArabic) => ({
  TechInnovator: {
    title: isArabic ? "المستخدم التقني" : "Tech Innovator AI User",
    paragraphs: isArabic
      ? [
          "أنت شخص شغوف بالتكنولوجيا، وتحب بناء، وتطوير نماذج ذكاء اصطناعي بنفسك",
          "لديك معرفة تقنية عميقة في البرمجة، التعلم الآلي، وتحليل البيانات",
          "تستمتع بتجربة تقنيات جديدة وتطوير حلول مبتكرة للمشكلات",
        ]
      : [
          "You're a tech enthusiast who enjoys building and developing AI models independently.",
          "You have deep technical expertise in programming, machine learning, and data analysis.",
          "You thrive on experimenting with emerging technologies and crafting innovative solutions to complex problems.",
        ],
    alt: isArabic
      ? "روبوت مستخدم الذكاء الاصطناعي المبتكر التقني"
      : "Tech Innovator AI User Robot",
  },

  LogicalAnalyst: {
    title: isArabic ? "المحلل المنطقي" : "Logical Analyst AI User",
    paragraphs: isArabic
      ? [
          "لديك نهج تحليلي تجاه الذكاء الاصطناعي، وتهتم بفهم كيف تعمل النماذج واتخاذ قرارات مبنية على البيانات",
          "تهتم بتفسير نتائج الذكاء الاصطناعي أكثر من تطويره",
          "لديك معرفة بأساسيات الرياضيات، الإحصاء، وأدوات تحليل البيانات",
        ]
      : [
          "You have an analytical approach toward artificial intelligence and are interested in understanding how models operate and making data-driven decisions.",
          "You're more focused on interpreting AI outcomes than on developing AI systems.",
          "You possess foundational knowledge in mathematics, statistics, and data analysis tools.",
        ],
    alt: isArabic
      ? "روبوت مستخدم الذكاء الاصطناعي المنطقي"
      : "Logical Analyst AI User Robot",
  },

  PracticalUser: {
    title: isArabic ? "المحلل العملي" : "Practical AI User",
    paragraphs: isArabic
      ? [
          "لا تحتاج إلى معرفة تقنية عميقة، ولكن ترى الذكاء الاصطناعي كأداة مفيدة لتحسين الإنتاجية واتخاذ قرارات أذكى",
          "تستخدم الذكاء الاصطناعي في حياتك اليومية، مثل المساعدات الذكية، التحليلات التنبؤية، وأدوات الأتمتة",
          "تهتم بتطبيقات الذكاء الاصطناعي أكثر من فهم التفاصيل البرمجية",
        ]
      : [
          "You don't require deep technical expertise, but you view AI as a valuable tool for boosting productivity and making smarter decisions.",
          "You incorporate AI in your daily life—through smart assistants, predictive analytics, and automation tools.",
          "You're more interested in AI applications than in understanding the programming intricacies.",
        ],
    alt: isArabic
      ? "روبوت مستخدم الذكاء الاصطناعي المحلل العملي"
      : "Practical AI User Robot",
  },

  CuriousExplorer: {
    title: isArabic ? "المستكشف الفضولي" : "Curious Explorer AI User",
    paragraphs: isArabic
      ? [
          "أنت مهتم بالذكاء الاصطناعي ولكن لا تمتلك خبرة عملية كبيرة حتى الآن",
          "تحب قراءة الأخبار والمقالات حول الذكاء الاصطناعي ولكن لم تخض تجارب عملية فيه",
          "لديك فضول حول كيفية عمل الذكاء الاصطناعي وتأثيره على المستقبل",
        ]
      : [
          "You're interested in artificial intelligence, but you don't yet have extensive hands-on experience.",
          "You enjoy reading news and articles about AI, but haven't had much practical exposure.",
          "You're curious about how AI works and its potential impact on the future.",
        ],
    alt: isArabic
      ? "روبوت مستخدم الذكاء الاصطناعي المستكشف الفضولي"
      : "Curious Explorer AI User Robot",
  },
});
