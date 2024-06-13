import Image from "next/image";
import { Button, Input } from "@/app/components/All"

export default function Home() {
  return (
    <main className="flex justidy-center items-center">
      <div>
        <h2>Olá, seja bem vindo!!</h2>
        <h4>Digite seu nome</h4>
        <Input></Input>
      </div>
    </main>
  );
}
