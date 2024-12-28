import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./components/Users";
import "./input.css";
import "./App.css";
import { Hero } from "./components/Hero";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Hero />
      <Users />
    </QueryClientProvider>
  );
}
