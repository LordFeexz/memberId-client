import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { router } from "./routes/router";

export default function App() {
  return (
    <section>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </section>
  );
}
