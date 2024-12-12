import { createContext } from "react";
import { LoadingContextType } from "@/types";

const LoadingContext = createContext({} as LoadingContextType);

export default LoadingContext;