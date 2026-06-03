import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <div
      style={{
        backgroundColor: "#F8F9FA",
        height: "100px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 120px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
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
        <Button 
          variant="outline"
          style={{
            borderColor: "#D32F2F",
            color: "#D32F2F",
            backgroundColor: "transparent",
          }}
        >
          Entrar
        </Button>
        <Button 
          style={{
            backgroundColor: "#D32F2F",
            color: "#FFFFFF",
          }}
        >
          Cadastrar
        </Button>
      </div>
    </div>
  );
}