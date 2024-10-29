import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Home } from "./components/Home";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

{
  /* <div className="hidden">
<img src={duna} className="h-[840px] w-full m-auto" />
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
</div>

<div className="hidden">
<img src={duna} className="h-[840px] w-full m-auto" />
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
</div>

<div className="hidden">
<img src={duna} className="h-[840px] w-full m-auto" />
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
</div>

<div className="hidden">
<img src={duna} className="h-[840px] w-full m-auto" />
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
</div> */
}
