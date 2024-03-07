// import { GamerPage } from "./components/GamerPage";
import { BrowserRouter } from "react-router-dom";
import { RouterPage } from "./components/RouterPage";
import { AppRouter } from "./components/AppRouter";

// import { AdminPage } from "./components/AdminPage/AdminPage";

// import { PresenterPage } from "./components/PresenterPage/PresenterPage";

// import { ScoreboardPage } from "./components/ScoreboardPage";


function App() {
  return (
    <main className="App">
      <BrowserRouter>

        <AppRouter/>
      </BrowserRouter>
    </main>
  );
}

export default App;
