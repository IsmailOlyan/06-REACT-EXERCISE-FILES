import { useState } from "react";

// 📂 Halkaan ku wada keydi dhammaan Imports-ka (Waa caadi hadday furan yihiin)
import UserCard from './components/Exercise-01/UserCard';
import Layout from './Layout';
import Blog from './components/Exercise-03/UserCard';
import ToggleButton from './Components/Exercise-04/ToggleButton';
import TodoList from './TodoList';
import UseEffectE from './Lessons/lesson-05/UseEffect';
import SimpleShoping from './Components/Exercise-05/SimpleShoping';
import DocumentTitle from './Components/Exercise-06/DocumentTitle';
import WindResize from './Lessons/lesson-06/WindResize';
import MouseTracker from './Components/Exercise-07/MouseTracker';
import StopWatch from './Lessons/lesson-07/StopWatch';
import Countdown from './Components/Exercise-08/Countdown';
import FetchData from './Lessons/Lesson-08/FetchData';
import RenderList from './Lessons/Lesson-09/RenderList';

function App() {
  // 🎯 KALIYA HALKAN KA BEDDEL MAGACA CASHARKA AAD RABTO INAAD ARAGTO!
  // Waxaad u beddeli kartaa: "usercard", "layout", "todo", "shopping", ama "document-title"
  const [currentLesson, setCurrentLesson] = useState("renderList");

  // Habkan wuxuu si toos ah u furayaa casharka aad magaciisa sarre ku qorto
  const renderLesson = () => {
    switch (currentLesson) {
       case "renderList":
        return <RenderList />
      case "usercard":
        return <UserCard name="Eng Ismail Olyan" email="ismaaciil1432@gmail.com" />;
      case "layout":
        return <Layout />;
      case "blog":
        return <Blog />;
      case "toggle":
        return <ToggleButton />;
      case "todo":
        return <TodoList />;
      case "useeffect":
        return <UseEffectE />;
      case "shopping":
        return <SimpleShoping />;
      case "document-title":
        return <DocumentTitle />;
      case "resize":
        return <WindResize />;
      case "mouseTracker":
        return <MouseTracker />;
        case "stopwatch":
        return <StopWatch />;
        case "countdown":
        return <Countdown />;
        case "fetchdata":
        return <FetchData />;
       
      default:
        return <div>Dooro Cashar Sax Ah</div>;
    }
  };

  return (
    <>
      {/* Koodhka halkan ku jira waa mid nadiif ah, wax dhib ahna kuuma keenayo */}
      {renderLesson()}
    </>
  );
}

export default App;