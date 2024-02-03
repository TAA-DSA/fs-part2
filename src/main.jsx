import ReactDOM from "react-dom/client";
import Course from "../Data/Course";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App course={Course} />
);
