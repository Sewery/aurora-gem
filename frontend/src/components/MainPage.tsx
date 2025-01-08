import Content from "./Content";
import TopBar from "./topbar/TopBar";

const MainPage = () => {
  return (
    <div>
      <div>
        <TopBar />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default MainPage;
