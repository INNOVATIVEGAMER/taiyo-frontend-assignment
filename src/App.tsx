import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import ContactsPage from "./pages/ContactsPage";
import ChartsAndMapsPage from "./pages/ChartsAndMapsPage";
import Sidebar from "./components/Sidebar";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {location.pathname !== "/" && <Sidebar />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/charts-and-maps" element={<ChartsAndMapsPage />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppContent />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
