import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    language: "Hindi",
    home: "Home",
    browse: "Browse",
    heroTitle: "Laughs. Tears. Thrills.",
    heroTitleAccent: "It is all here.",
    membershipPrompt: "Ready to watch? Enter your email to create or restart your membership.",
    email: "Email address",
    getStarted: "Get Started",
    picks: "WatchGPT picks",
    popularMovies: "Popular movies",
    scrollToExplore: "Scroll to explore",
    reasonsTitle: "More reasons to join",
    reasons: [
      { title: "Enjoy on your TV", description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more.", icon: "TV" },
      { title: "Download your shows to watch offline", description: "Save your favourites easily and always have something to watch.", icon: "↓" },
      { title: "Watch everywhere", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.", icon: "▶" },
      { title: "Create profiles for kids", description: "Send kids on adventures with their favourite characters in a space made just for them.", icon: "☺" },
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { question: "What is WatchGPT?", answer: "WatchGPT is a streaming experience for discovering and watching movies and TV shows." },
      { question: "How much does WatchGPT cost?", answer: "Plans start at ₹149. You can cancel your membership at any time." },
      { question: "Where can I watch?", answer: "Watch on your phone, tablet, laptop, smart TV and other supported devices." },
      { question: "How do I cancel?", answer: "You can cancel from your account settings whenever you choose." },
      { question: "What can I watch on WatchGPT?", answer: "Explore popular movies and discover something new through our catalogue." },
    ],
    footerQuestion: "Questions? Call",
    footerLinks: ["FAQ", "Help Centre", "Account", "Media Centre", "Investor Relations", "Jobs", "Ways to Watch", "Terms of Use", "Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
    country: "WatchGPT India",
    disclaimer: "This page is protected by reCAPTCHA to ensure you are not a bot.",
    signUp: "Sign Up",
    signIn: "Sign In",
    fullName: "Full name",
    createPassword: "Create a password",
    enterPassword: "Enter your password",
    confirmPassword: "Confirm your password",
    alreadyHaveAccount: "Already have an account?",
    newToWatchGPT: "New to WatchGPT?",
  },
  hi: {
    language: "English",
    home: "होम",
    browse: "ब्राउज़ करें",
    heroTitle: "हंसी। आंसू। रोमांच।",
    heroTitleAccent: "यह सब यहां है।",
    membershipPrompt: "देखने के लिए तैयार हैं? सदस्यता शुरू या फिर से शुरू करने के लिए अपना ईमेल डालें।",
    email: "ईमेल पता",
    getStarted: "शुरू करें",
    picks: "WatchGPT पसंद",
    popularMovies: "लोकप्रिय फ़िल्में",
    scrollToExplore: "देखने के लिए स्क्रॉल करें",
    reasonsTitle: "जुड़ने के और कारण",
    reasons: [
      { title: "अपने टीवी पर आनंद लें", description: "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV और अन्य डिवाइस पर देखें।", icon: "TV" },
      { title: "ऑफलाइन देखने के लिए डाउनलोड करें", description: "अपने पसंदीदा शो आसानी से सेव करें और हमेशा कुछ देखने के लिए रखें।", icon: "↓" },
      { title: "हर जगह देखें", description: "फोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और शो देखें।", icon: "▶" },
      { title: "बच्चों के लिए प्रोफ़ाइल बनाएं", description: "बच्चों को उनके पसंदीदा किरदारों के साथ सुरक्षित मनोरंजन दें।", icon: "☺" },
    ],
    faqTitle: "अक्सर पूछे जाने वाले सवाल",
    faq: [
      { question: "WatchGPT क्या है?", answer: "WatchGPT फ़िल्मों और टीवी शो को खोजने और देखने का स्ट्रीमिंग अनुभव है।" },
      { question: "WatchGPT की कीमत कितनी है?", answer: "प्लान ₹149 से शुरू होते हैं। आप अपनी सदस्यता कभी भी रद्द कर सकते हैं।" },
      { question: "मैं कहां देख सकता हूं?", answer: "फोन, टैबलेट, लैपटॉप, स्मार्ट टीवी और अन्य समर्थित डिवाइस पर देखें।" },
      { question: "मैं सदस्यता कैसे रद्द करूं?", answer: "आप जब चाहें अपनी अकाउंट सेटिंग्स से सदस्यता रद्द कर सकते हैं।" },
      { question: "WatchGPT पर क्या देख सकता हूं?", answer: "लोकप्रिय फ़िल्में देखें और हमारी कैटलॉग से कुछ नया खोजें।" },
    ],
    footerQuestion: "कोई सवाल है? कॉल करें",
    footerLinks: ["FAQ", "सहायता केंद्र", "अकाउंट", "मीडिया केंद्र", "निवेशक संबंध", "नौकरियां", "देखने के तरीके", "उपयोग की शर्तें", "गोपनीयता", "कुकी प्राथमिकताएं", "कॉर्पोरेट जानकारी", "संपर्क करें"],
    country: "WatchGPT इंडिया",
    disclaimer: "यह पेज यह सुनिश्चित करने के लिए reCAPTCHA से सुरक्षित है कि आप बॉट नहीं हैं।",
    signUp: "साइन अप करें",
    signIn: "साइन इन करें",
    fullName: "पूरा नाम",
    createPassword: "पासवर्ड बनाएं",
    enterPassword: "अपना पासवर्ड दर्ज करें",
    confirmPassword: "अपना पासवर्ड पुष्टि करें",
    alreadyHaveAccount: "क्या आपके पास पहले से ही एक खाता है?",
    newToWatchGPT: "WatchGPT में नया?",
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "hi" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        text: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
