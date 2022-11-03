import Homepage from "./Layout/Homepage";
import LoginPage from "./Layout/loginPage";
import NewsFeedPage from "./Layout/NewsFeedPage";
import SignupPage from "./Layout/signupPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CategoryPage from "./Layout/CategoryPage";
import Query from "./Components/Query/Query";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ArticleOpen from "./Layout/ArticleOpen";
import OurTeam from "./Components/Our-Team/OurTeam";
import Profile from "./Components/Profile/Profile";
import ProfileEdit from "./Components/Profile/ProfileEdit";
import EditArticle from "./Components/Editor/EditArticle";
import EditorArticle from "./Components/Editor/EditorArticle";
import EditorLogin from "./Components/Login/EditorLogin";
import EditorSignup from "./Components/Login/EditorSignup";

function App() {
  return (
    <>
      {/* <BounceLoader loading size={34} color="red" /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/editor/login" element={<EditorLogin />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/editor/signup" element={<EditorSignup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/newsfeed" element={<NewsFeedPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/query/:queryName" element={<Query />} />
          <Route exact path="/edit/:id" element={<ProfileEdit />} />
          <Route exact path="/article" element={<EditArticle />} />
          <Route exact path="/news/:id" element={<EditorArticle />} />
          
          <Route
            path="/article/:categoryName/:index"
            element={<ArticleOpen />}
          />
          <Route exact path="/edit" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;