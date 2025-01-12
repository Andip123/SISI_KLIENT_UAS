import { Provider } from "react-redux";
import PemantauanComponentRedux from "../components/PemantuanReducer";
import store from "../components/store";
import PenyuluhanComponentRedux from "../components/PenyuluhanReducer";

const DataRedux = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#123332] space-x-56">
      <Provider store={store}>
        <PemantauanComponentRedux />
        <PenyuluhanComponentRedux />
      </Provider>
    </div>
  );
};

export default DataRedux;