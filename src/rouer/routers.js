import { AdminPage } from "../components/AdminPage/AdminPage";
import { GamerPage } from "../components/GamerPage/GamerPage";
import { PresenterPage } from "../components/PresenterPage/PresenterPage";
import { RouterPage } from "../components/RouterPage";
import { ScoreboardPage } from "../components/ScoreboardPage/ScoreboardPage";

export const privateRoutes = [
    {path: '/admin', component:<AdminPage/>},
    {path: '/gamer', component:<GamerPage/>},
    {path: '/presenter', component:<PresenterPage/>},
    {path: '/scoreboard', component:<ScoreboardPage/>},
    {path: '/router-page', component:<RouterPage/>},
    
]