import { QueryClient, QueryClientProvider } from "react-query";
import { Users } from "./Users";
import "./input.css";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}
