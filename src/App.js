import Body from "./components/Body";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Body />
    </LanguageProvider>
  );
}
export default App;
