import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Route, Routes } from "react-router";
import { ScrollToLocation } from "./ScrollToLocation";
import { ExperiencePage } from "./pages/ExperiencePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
