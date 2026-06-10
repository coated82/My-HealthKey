"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push("/");
  };

  return (
    <div
      style={{
        backgroundColor: "#F8F9FA",
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 120px",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        onClick={handleLogoClick}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <img
          src="/Logo.png"
          alt="Logo"
          style={{ height: "80px", width: "auto" }}
        />
        <h1
          style={{
            margin: 0,
            fontSize: "16px",
            color: "#D32F2F",
            fontWeight: "bold",
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#F8F9FA",
            padding: "0 8px",
            whiteSpace: "nowrap",
          }}
        >
          My-HealthKey
        </h1>
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Input
          type="text"
          placeholder="Pesquisar medicamentos..."
          style={{
            width: "700px",
            borderColor: "#D32F2F",
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "12px", marginLeft: "auto" }}>
        
        <Link href="/login">
          <Button
            variant="outline"
            style={{
              borderColor: "#D32F2F",
              color: "#D32F2F",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            Entrar
          </Button>
        </Link>

        <Link href="/registro">
          <Button
            style={{
              backgroundColor: "#D32F2F",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
          >
            Cadastrar
          </Button>
        </Link>
      </div>
    </div>
  );
}