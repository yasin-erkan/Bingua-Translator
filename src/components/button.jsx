import { useDispatch, useSelector } from "react-redux";
import { translateText } from "../redux/actions";

const Button = () => {
  const { textToTranslate } = useSelector((store) => store.translate);
  const dispatch = useDispatch();
  return (
    <button
      disabled={!textToTranslate.trim()}
      onClick={() => dispatch(translateText())}
      className="bg-blue-600 text-center px-5 py-3 rounded-md font-semibold hover:ring-2 hover:bg-blue-800 cursor-pointer transition mt-3 disabled:brightness-50"
    >
      Translate
    </button>
  );
};

export default Button;
