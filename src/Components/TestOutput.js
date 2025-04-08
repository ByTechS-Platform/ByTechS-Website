import "../Styles/TestOutput.scss";
import image1 from "../assets/images/Group.png";
import image2 from "../assets/images/Group1.png";
import image3 from "../assets/images/Group2.png";
import image4 from "../assets/images/Group3.png";
import { ReactComponent as Xicon } from "../assets/images/TwitterXLogo.svg";

const charactersImages = {
  m1: image1,
  m2: image2,
  m3: image3,
  m4: image4,
  iconX: Xicon,
};

const TestOutput = () => {
  return (
    <div className="practical-ai-user-card">
      <div className="content">
        <div className="top-content">
          <h2>المستخدم العملي</h2>
          <h3>Practical AI User</h3>
        </div>

        <p>
          لا تحتاج إلى معرفة تقنية عميقة، لكنك ترى الذكاء الاصطناعي كأداة مفيدة
          لتحسين الإنتاجية واتخاذ قرارات أذكى.
        </p>
        <p>
          تستخدم الذكاء الاصطناعي في حياتك اليومية، مثل المساعدات الذكية،
          التحليلات التنبؤية، وأدوات الأتمتة.
        </p>
        <p>تهتم بتطبيقات الذكاء الاصطناعي أكثر من فهم التفاصيل البرمجية.</p>
        <button className="share-button">
          <span className="share-text">شارك النتيجة عبر</span>

          <Xicon className="x-icon" />
        </button>
      </div>
      <div className="robot-image">
        <img src={charactersImages.m2} alt="Practical AI User Robot" />
      </div>
    </div>
  );
};

export default TestOutput;
