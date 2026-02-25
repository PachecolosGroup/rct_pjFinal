import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";

const App: React.FC = () => {
  return (
    <Providers>
      <div className="mt-5 mb-5 w-9/12 mx-auto">
        <AppRoutes />
      </div>
    </Providers>
  );
};

export default App;

// Esto es con Bash papi toca tirar en la termina 1. cd rct_pjFinal 2. npm start 3. copiar la url del host juera.
