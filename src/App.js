import './App.css';
import { Routes, Route } from 'react-router-dom';
import ParentNavigation from './ParentNavigation';
import Home from './Pages/Home';
import FindTwoIndices from './Pages/Answers/FindTwoIndices';
import AddTwoNumbers from './Pages/Answers/AddTwoNumbers';
import Showcase from './Pages/Answers/Showcase';
import Docs from './Pages/Answers/Docs';
import Blog from './Pages/Answers/Blog';
import Analytics from './Pages/Answers/Analytics';
import Templates from './Pages/Answers/Templates';
import Enterprise from './Pages/Answers/Enterprise';
import NavBar from './Pages/Answers/NavBar';

function App() {
  return (
    <div>
      <ParentNavigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='add-two-numbers' element={<AddTwoNumbers />}></Route>
        <Route path='create-navbar/' element={<NavBar />}>
          <Route index element={<Showcase />}></Route>
          <Route path='showcase' element={<Showcase />}></Route>
          <Route path='docs' element={<Docs />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='analytics' element={<Analytics />}></Route>
          <Route path='templates' element={<Templates />}></Route>
          <Route path='enterprise' element={<Enterprise />}></Route>
        </Route>
        <Route path='find-two-indices' element={<FindTwoIndices />}></Route>
      </Routes>
    </div>
  );
}

export default App;
