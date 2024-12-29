import { QueryClient, QueryClientProvider } from "react-query";
import "./input.css";
import "./App.css";
import { Hero } from "./components/Hero";
import UserManagement from "./components/UserManagement";
const queryClient = new QueryClient();


export default function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
      <UserManagement />
    </QueryClientProvider>
  );
}
