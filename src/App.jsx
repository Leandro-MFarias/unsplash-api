import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./pages/Routes";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
