import { useState } from "react";

// 📂 Halkaan ku wada keydi dhammaan Imports-ka (Waa caadi hadday furan yihiin)
import UserCard from './EXERCISES/Exercise-01/UserCard';
import Layout from './Layout';
import Blog from './EXERCISES/Exercise-03/UserCard';
import ToggleButton from './EXERCISES/Exercise-04/ToggleButton';
import TodoList from './TodoList';
import UseEffectE from './Lessons/lesson-05/UseEffect';
import SimpleShoping from './EXERCISES/Exercise-05/SimpleShoping';
import DocumentTitle from './EXERCISES/Exercise-06/DocumentTitle';
import WindResize from './Lessons/lesson-06/WindResize';
import MouseTracker from './EXERCISES/Exercise-07/MouseTracker';
import StopWatch from './Lessons/lesson-07/StopWatch';
import Countdown from './EXERCISES/Exercise-08/Countdown';
import FetchData from './Lessons/Lesson-08/FetchData';
import RenderList from './Lessons/Lesson-09/RenderList';
import GitHubUserSearch from './EXERCISES/Exercise-09/GitHubUserSearch';
import LoginForm from './EXERCISES/Exercise-11/LoginForm';
import Counter from './EXERCISES/Exercise-12/Counter';
import ShopingCart from './ShopingCart'
import CounterWithReducer from './CounterWithReducer'
import TodoApp from './TodoApp'


function App() {
  // 🎯 KALIYA HALKAN KA BEDDEL MAGACA CASHARKA AAD RABTO INAAD ARAGTO!
  // Waxaad u beddeli kartaa: "usercard", "layout", "todo", "shopping", ama "document-title"
  const [currentLesson, setCurrentLesson] = useState("countdown");

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
        return <Countdown />
      case "fetchdata":
        return <FetchData />;
      case "renderlist":
        return <RenderList />;
      case "gitHubUserSearch":
        return <GitHubUserSearch />
      case 'loginform':
        return <LoginForm />
      case 'Counter':
        return <Counter />
      case 'ShopingCart':
        return <ShopingCart />
      case 'CounterWithReducer':
        return <CounterWithReducer />
      case 'TodoApp':
        return <TodoApp />


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