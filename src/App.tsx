import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./components/Users";
import "./input.css";
import "./App.css";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Hero />
      <SearchBar />
      <Users />
    </QueryClientProvider>
  );
}
