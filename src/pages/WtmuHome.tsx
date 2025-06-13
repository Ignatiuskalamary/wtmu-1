import WtmuCourseList from "../componentes/WtmuCourseList";
import WtmuFooter from "../componentes/WtmuFooter";
import WtmuHeader from "../componentes/WtmuHeader";
import WtmuNavbar from "../componentes/WtmuNavbar";
import WtmuNewsLetter from "../componentes/WtmuNewsLetter";
import WtmuRegisterSuccess from "../componentes/WtmuRegisterSuccess";
const WtmuHome = () => {
  return (
    <>
      <WtmuNavbar />
      <WtmuHeader />
      <WtmuCourseList />
      <WtmuNewsLetter />
      <WtmuFooter />
      <WtmuRegisterSuccess
        title="World Tamil Music University Registration Complete!"
        message="Welcome to World Tamil Music University."
        redirectUrl="/admin"
        redirectText="Go to login"
      />
    </>
  );
};

export default WtmuHome;
