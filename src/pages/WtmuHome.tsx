import WtmuCourseList from "../componentes/WtmuCourseList";
import WtmuFooter from "../componentes/WtmuFooter";
import WtmuHeader from "../componentes/WtmuHeader";
import WtmuNavbar from "../componentes/WtmuNavbar";
import WtmuNewsLetter from "../componentes/WtmuNewsLetter";
const WtmuHome = () => {
  return (
    <>
      <WtmuNavbar />
      <WtmuHeader />
      <WtmuCourseList />
      <WtmuNewsLetter />
      <WtmuFooter />
    </>
  );
};

export default WtmuHome;
