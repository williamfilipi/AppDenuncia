import React from "react";
import { NativeBaseProvider } from "native-base";
import { SignUp } from "./src/screens/signUp";

export default function App() {

  return (
    // NativeBaseProvider é um componente que disponibiliza o tema em todo o seu aplicativo.
    <NativeBaseProvider>

      <SignUp/>
      
    </NativeBaseProvider>
  );
} 
