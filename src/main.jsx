import ReactDOM from "react-dom/client";
import Course from "../Component/Course";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App course={Course} />
);
