import { useLanguage } from "../utils/LanguageContext";
import TestCard from "./TestCard";
import {
  charactersImages,
  profileColors,
  getProfiles,
} from "../utils/profiles";

const TestOutput = ({ score }) => {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const dir = isArabic ? "rtl" : "ltr";

  const getProfileKey = () => {
    if (score >= 50) return "TechInnovator";
    if (score >= 40) return "LogicalAnalyst";
    if (score >= 25) return "PracticalUser";
    return "CuriousExplorer";
  };

  const profileKey = getProfileKey();
  const profiles = getProfiles(isArabic);
  const { title, paragraphs, alt } = profiles[profileKey];
  const { bg, circle } = profileColors[profileKey];
  const image = charactersImages[profileKey];

  return (
    <TestCard
      title={title}
      paragraphs={paragraphs}
      image={image}
      alt={alt}
      dir={dir}
      isArabic={isArabic}
      bg={bg}
      circle={circle}
      score={score}
    />
  );
};

export default TestOutput;
