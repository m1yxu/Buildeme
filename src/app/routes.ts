import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { InterviewPage } from "./pages/InterviewPage";
import { ResultPage } from "./pages/ResultPage";
import { JobMatchPage } from "./pages/JobMatchPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { AnalyticsPage } from "./pages/AnalyticsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/dashboard",
    Component: DashboardPage,
  },
  {
    path: "/experience",
    Component: ExperiencePage,
  },
  {
    path: "/interview",
    Component: InterviewPage,
  },
  {
    path: "/result",
    Component: ResultPage,
  },
  {
    path: "/job-match",
    Component: JobMatchPage,
  },
  {
    path: "/portfolio",
    Component: PortfolioPage,
  },
  {
    path: "/analytics",
    Component: AnalyticsPage,
  },
]);
