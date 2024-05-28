import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLatout";
import WelcomePage from "./pages/WelcomePage";
import Instuctions from "./pages/Instuctions";
import Quiz from "./pages/Quiz";
import { Toaster } from "react-hot-toast";
import Result from "./pages/Result";
import ProtectedRoute from "./components/ProtectedRoute";
import PageNotFound from "./components/PageNotFound";
import { QuestionsProvider } from "./context/QuestionsContext";

function App() {
  return (
    <QuestionsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="instructions" />} />
            <Route path="instructions" element={<Instuctions />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Route>
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        containerClassName="text-[8px] md:text-[12.5px]  "
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 1500,
          },
          error: {
            duration: 1500,
          },
          // style: {
          //   fontSize: "15px",
          //   maxWidth: "30px0",
          //   padding: "15px 19px",
          //   backgroundColor: "white",
          //   color: "var(--color-grey-700)",
          // },
        }}
      />
    </QuestionsProvider>
  );
}

export default App;
