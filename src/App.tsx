import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import '@/assets/styles/global.scss';
import { AppProvider, FormProvider } from "./store";

export default function App() {
  return (
    <AppProvider>
      <FormProvider>
        <RouterProvider router={router} />
      </FormProvider>
    </AppProvider>
  );
}
