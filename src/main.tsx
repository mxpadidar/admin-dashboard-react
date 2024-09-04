import "@/assets/styles/index.css";
import AuthProvider from "@/providers/auth-provider";
import QueryProvider from "@/providers/query-provider";
import router from "@/routes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryProvider>
  </StrictMode>
);
