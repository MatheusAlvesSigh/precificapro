import { useState, useEffect } from "react";
import logoShopee from "../assets/Shopee.png";

export default function Shopee() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState("");
  const [custo, setCusto] = useState(0);
  const [precoVenda, setPrecoVenda] = useState(0);
  const [ads, setAds] = useState(5);

  useEffect(() => {
    const dados = localStorage.getItem("produtos");

    if (dados) {
      setProdutos(JSON.parse(dados));
    }
  }, []);

  const selecionarProduto = (sku) => {
    setProdutoSelecionado(sku);

    const produto = produtos.find(
      (p) => p.sku === sku
    );

    if (produto) {
      setCusto(Number(produto.custo));
    }
  };

  const comissao = precoVenda * 0.14;
  const taxaServico = precoVenda * 0.02;
  const taxaPagamento = precoVenda * 0.02;
  const icms = precoVenda * 0.18;
  const federal = precoVenda * 0.0365;
  const investimentoAds = precoVenda * (ads / 100);

  const totalCustos =
    Number(custo) +
    comissao +
    taxaServico +
    taxaPagamento +
    icms +
    federal +
    investimentoAds;

  const lucro = precoVenda - totalCustos;

  const margem =
    precoVenda > 0
      ? ((lucro / precoVenda) * 100).toFixed(2)
      : 0;

  const roi =
    custo > 0
      ? ((lucro / custo) * 100).toFixed(2)
      : 0;

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1000px",
        margin: "0 auto",
        color: "#111827"
      }}
    >
<h1
  style={{
    display: "flex",
    alignItems: "center",
    gap: "15px",
    color: "#111827",
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px"
  }}
>
  <img
    src={logoShopee}
    alt="Shopee"
    style={{
      width: "60px",
      height: "60px",
      objectFit: "contain"
    }}
  />

  Shopee
</h1>

      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            color: "#111827",
            marginBottom: "20px"
          }}
        >
          Dados do Produto
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#111827",
              fontWeight: "bold"
            }}
          >
            Produto
          </label>

          <select
            value={produtoSelecionado}
            onChange={(e) =>
              selecionarProduto(e.target.value)
            }
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              color: "#111827",
              background: "#ffffff"
            }}
          >
            <option value="">
              Selecione um produto
            </option>

            {produtos.map((produto) => (
              <option
                key={produto.id}
                value={produto.sku}
              >
                {produto.sku} - {produto.descricao}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#111827",
              fontWeight: "bold"
            }}
          >
            Custo do Produto
          </label>

          <input
            type="number"
            value={custo}
            readOnly
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              color: "#111827",
              background: "#ffffff"
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#111827",
              fontWeight: "bold"
            }}
          >
            Preço de Venda
          </label>

          <input
            type="number"
            value={precoVenda}
            onChange={(e) =>
              setPrecoVenda(Number(e.target.value))
            }
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              color: "#111827",
              background: "#ffffff"
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              color: "#111827",
              fontWeight: "bold"
            }}
          >
            ADS (%)
          </label>

          <input
            type="number"
            value={ads}
            onChange={(e) =>
              setAds(Number(e.target.value))
            }
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              color: "#111827",
              background: "#ffffff"
            }}
          />
        </div>
      </div>

      <div
        style={{
          background: "#ffffff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2
          style={{
            color: "#111827",
            marginBottom: "20px"
          }}
        >
          Resultado da Precificação
        </h2>

        <p style={{ color: "#111827" }}>
          🟠 Comissão Shopee (14%): R$ {comissao.toFixed(2)}
        </p>

        <p style={{ color: "#111827" }}>
          ⚙️ Taxa de Serviço (2%): R$ {taxaServico.toFixed(2)}
        </p>

        <p style={{ color: "#111827" }}>
          💳 Taxa de Pagamento (2%): R$ {taxaPagamento.toFixed(2)}
        </p>

        <p style={{ color: "#111827" }}>
          🏛️ ICMS (18%): R$ {icms.toFixed(2)}
        </p>

        <p style={{ color: "#111827" }}>
          📄 Federal (3,65%): R$ {federal.toFixed(2)}
        </p>

        <p style={{ color: "#111827" }}>
          📢 ADS ({ads}%): R$ {investimentoAds.toFixed(2)}
        </p>

        <hr />

        <h2 style={{ color: "#16a34a" }}>
          💵 Lucro Líquido: R$ {lucro.toFixed(2)}
        </h2>

        <h2 style={{ color: "#2563eb" }}>
          📈 Margem: {margem}%
        </h2>

        <h2 style={{ color: "#9333ea" }}>
          🚀 ROI: {roi}%
        </h2>
      </div>
    </div>
  );
}