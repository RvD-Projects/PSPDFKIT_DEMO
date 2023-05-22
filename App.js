import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import RootNavigation from "./src/components/navigators/RootNavigation";
import AppScreenNotification from "./src/components/AppScreenNotification";

function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
      <AppScreenNotification />
    </Provider>
  );
}

export default App;
