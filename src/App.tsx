import { Route, Routes } from "react-router-dom";
import WtmuHome from "./pages/WtmuHome";
import WtmuCourse from "./pages/WtmuCourse";
import WtmuLayout from "./pages/admin/WtmuLayout";
import WtmuLogin from "./componentes/admin/WtmuLogin";
import WtmuDashboard from "./pages/admin/WtmuDashboard";
import WtmuAddCourse from "./pages/admin/WtmuAddCourse";
import WtmuCourseList from "./componentes/WtmuCourseList";
import WtmuTeachersList from "./pages/admin/WtmuTeachersList";
import WtmuComments from "./pages/admin/WtmuComments";
import WtmuStudentList from "./pages/admin/WtmuStudentList";
import WtmuAddQuestions from "./pages/admin/WtmuAddQuestions";
import WtmuQuestionList from "./pages/admin/WtmuQuestionList";
import WtmuQuestionForm from "./pages/admin/WtmuQuestionForm";
import WtmuCoursesList from "./pages/admin/WtmuCoursesList";
import WtmuNewuserList from "./pages/admin/WtmuNewuserList";
import RegistrationForm from "./componentes/admin/RegistrationForm";

const App = () => {
  const isAuthenticated = true;
  return (
    <Routes>
      <Route path="/" element={<WtmuHome />} />

      <Route path="/wtmucourse/:id" element={<WtmuCourse />} />

      <Route
        path="/admin"
        element={isAuthenticated ? <WtmuLayout /> : <WtmuLogin />}
      >
        <Route index element={<WtmuDashboard />} />
        <Route path="Wtmuaddcourse" element={<WtmuAddCourse />} />
        <Route path="Wtmuregister" element={<RegistrationForm />} />
        <Route path="Wtmunewuserlist" element={<WtmuNewuserList />} />
        <Route path="Wtmustudentlist" element={<WtmuStudentList />} />
        <Route path="listWtmu" element={<WtmuCourseList />} />
        <Route path="teacherlistWtmu" element={<WtmuTeachersList />} />
        <Route path="Wtmucomments" element={<WtmuComments />} />
        <Route path="addwtmucourse" element={<WtmuAddCourse />} />
        <Route path="addwtmuquestions" element={<WtmuAddQuestions />} />
        <Route path="/admin/questions/add" element={<WtmuQuestionForm />} />
        <Route path="Wtmuquestionslist" element={<WtmuQuestionList />} />
        <Route path="Wtmucourseslist" element={<WtmuCoursesList />} />
      </Route>
    </Routes>
  );
};

export default App;
