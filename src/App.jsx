import { useDispatch } from "react-redux";
import Button from "./components/Button";
import LanguageSelect from "./components/language-select";
import TextContainer from "./components/text-container";
import { useEffect } from "react";
import { getLanguages } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLanguages());
  }, []);

  return (
    <div className="bg-zinc-900 min-h-screen text-white grid place-items-center">
      <div className="w-[80vw] max-w-[1100px] flex flex-col justify-center py-5">
        <div className="logo">
          <img
            src="/logo.png"
            alt="LinguaBridge Logo"
            className="w-36 h-auto mx-auto mb-5"
          />
        </div>

        <h1 className="text-center text-4xl font-extrabold mb-7 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
          LinguaBridge
        </h1>

        <LanguageSelect />

        <TextContainer />

        <Button />
      </div>
    </div>
  );
};

export default App;
