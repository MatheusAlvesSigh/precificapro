export default function Dashboard() {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1100px",
        margin: "0 auto",
        color: "#111827",
      }}
    >
      <h1
        style={{
          color: "#111827",
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        📊 Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={card}>
          <h3 style={tituloCard}>📦 Produtos</h3>
          <p style={valorCard}>0</p>
        </div>

        <div style={card}>
          <h3 style={tituloCard}>💰 Lucro Médio</h3>
          <p style={valorCard}>R$ 0,00</p>
        </div>

        <div style={card}>
          <h3 style={tituloCard}>📈 Margem Média</h3>
          <p style={valorCard}>0%</p>
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          marginTop: "25px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#111827",
            marginBottom: "15px",
          }}
        >
          Bem-vindo ao PrecificaPro
        </h2>

        <p
          style={{
            color: "#111827",
            lineHeight: "1.6",
          }}
        >
          Utilize o menu lateral para cadastrar produtos e
          calcular preços de venda para Mercado Livre,
          Shopee e TikTok Shop.
        </p>
      </div>
    </div>
  );
}

const card = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  minWidth: "220px",
  flex: 1,
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
};

const tituloCard = {
  color: "#111827",
  marginBottom: "10px",
};

const valorCard = {
  color: "#2563eb",
  fontSize: "28px",
  fontWeight: "bold",
};