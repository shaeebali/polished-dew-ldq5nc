import { QueryClient, QueryClientProvider } from "react-query";
import "./input.css";
import "./App.css";
import { Hero } from "./components/Hero";
import UserManagement from "./components/UserManagement";
const queryClient = new QueryClient();


export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hero aria-label="Hero section displaying the application's introductory content"/>
      <UserManagement aria-label="User management section with search and table features"/>
    </QueryClientProvider>
  );
}
