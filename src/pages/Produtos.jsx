import { useState, useEffect } from "react";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    sku: "",
    descricao: "",
    categoria: "",
    custo: "",
  });

  useEffect(() => {
    const dados = localStorage.getItem("produtos");

    if (dados) {
      setProdutos(JSON.parse(dados));
    }
  }, []);

  const salvarProduto = () => {
    if (!form.sku || !form.descricao || !form.custo) {
      alert("Preencha SKU, Descrição e Custo");
      return;
    }

    const novoProduto = {
      ...form,
      id: Date.now(),
      custo: Number(form.custo),
    };

    const novaLista = [...produtos, novoProduto];

    setProdutos(novaLista);

    localStorage.setItem(
      "produtos",
      JSON.stringify(novaLista)
    );

    setForm({
      sku: "",
      descricao: "",
      categoria: "",
      custo: "",
    });
  };

  const excluirProduto = (id) => {
    const novaLista = produtos.filter(
      (produto) => produto.id !== id
    );

    setProdutos(novaLista);

    localStorage.setItem(
      "produtos",
      JSON.stringify(novaLista)
    );
  };

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
        📦 Cadastro de Produtos
      </h1>

      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Novo Produto
        </h2>

        <input
          placeholder="SKU"
          value={form.sku}
          onChange={(e) =>
            setForm({
              ...form,
              sku: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Descrição"
          value={form.descricao}
          onChange={(e) =>
            setForm({
              ...form,
              descricao: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="Categoria"
          value={form.categoria}
          onChange={(e) =>
            setForm({
              ...form,
              categoria: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Custo"
          value={form.custo}
          onChange={(e) =>
            setForm({
              ...form,
              custo: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button
          onClick={salvarProduto}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Salvar Produto
        </button>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          Produtos Cadastrados
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            color: "#111827",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#f3f4f6",
              }}
            >
              <th style={thStyle}>SKU</th>
              <th style={thStyle}>Descrição</th>
              <th style={thStyle}>Categoria</th>
              <th style={thStyle}>Custo</th>
              <th style={thStyle}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td style={tdStyle}>{produto.sku}</td>

                <td style={tdStyle}>
                  {produto.descricao}
                </td>

                <td style={tdStyle}>
                  {produto.categoria}
                </td>

                <td style={tdStyle}>
                  R$ {produto.custo.toFixed(2)}
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() =>
                      excluirProduto(produto.id)
                    }
                    style={{
                      background: "#dc2626",
                      color: "#fff",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  color: "#111827",
  background: "#ffffff",
  boxSizing: "border-box",
};

const thStyle = {
  padding: "12px",
  textAlign: "left",
  color: "#111827",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
  color: "#111827",
};