import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import '@/assets/styles/global.scss';
import { AppProvider, MultiStepFormProvider } from "./store";

export default function App() {
  return (
    <AppProvider>
      <MultiStepFormProvider>
        <RouterProvider router={router} />
      </MultiStepFormProvider>
    </AppProvider>
  );
}
