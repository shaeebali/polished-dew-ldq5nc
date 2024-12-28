import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./components/Users";
import "./input.css";
import "./App.css";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Hero />
      <Users />
    </QueryClientProvider>
  );
}
