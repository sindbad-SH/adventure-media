import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import StoryTest from "./pages/StoryTest";
import FieldNotes from "./pages/FieldNotes";
import Arsenal from "./pages/Arsenal";
import MapPage from "./pages/MapPage";
import Connect from "./pages/Connect";
import Layout from "./components/Layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/story-test" component={StoryTest} />
      <Route path="/field-notes" component={FieldNotes} />
      <Route path="/arsenal" component={Arsenal} />
      <Route path="/map" component={MapPage} />
      <Route path="/connect" component={Connect} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Layout>
            <Router />
          </Layout>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
