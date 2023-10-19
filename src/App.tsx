import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import '@/assets/styles/global.scss';
import { AppProvider } from "./store";

export default function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}
