import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import ThemeProvider from "./providers/ThemeProvider";
import { getAuthToken } from "./utils/cookie/auth";
import { fetchUserData } from "./stores/middlewares/authThunk";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/index";
import "./index.css";

const initializeApp = async (): Promise<void> => {
  const authToken = await getAuthToken();

  if (authToken) {
    await store.dispatch(fetchUserData());
  }

  const root = createRoot(document.getElementById("root") as Element);

  root.render(
    <StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
    </StrictMode>,
  );
};

initializeApp().catch((error: Error) => {
  console.error("Error while initialize App:", error);
});
