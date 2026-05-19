import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showPolicy, setShowPolicy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMsg("Por favor, insira um email válido.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const url =
        `https://app.us5.list-manage.com/subscribe/post-json` +
        `?u=b736c548d80ce2b70538dbe56` +
        `&id=a7ca6ebf99` +
        `&f_id=0018cae1f0` +
        `&EMAIL=${encodeURIComponent(email)}` +
        `&b_b736c548d80ce2b70538dbe56_a7ca6ebf99=` +
        `&c=mailchimpCallback`;

      await new Promise<void>((resolve, reject) => {
        (window as any).mailchimpCallback = (data: { result: string; msg: string }) => {
          delete (window as any).mailchimpCallback;
          document.body.removeChild(script);
          if (data.result === "success") {
            resolve();
          } else {
            reject(new Error(data.msg));
          }
        };

        const script = document.createElement("script");
        script.src = url;
        script.onerror = () => {
          delete (window as any).mailchimpCallback;
          document.body.removeChild(script);
          reject(new Error("network error"));
        };
        document.body.appendChild(script);
      });

      setStatus("ok");
      setEmail("");
    } catch (err: any) {
      const msg: string = err?.message ?? "";
      if (msg.toLowerCase().includes("already subscribed")) {
        setStatus("ok"); // trata como sucesso
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg("Algo deu errado. Tente novamente.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Newsletter — MindTech Insights</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-background">
        <section className="w-full max-w-xl px-6 py-12">
          <div className="bg-card border border-border rounded-2xl shadow-sm p-10">

            {/* Logo */}
            <div
              className="flex items-center justify-center gap-3 cursor-pointer mb-8"
              onClick={() => (window.location.href = "/")}
            >
              <div className="flex flex-col font-sans items-center">
                <div className="flex items-baseline leading-none">
                  <span className="text-[26px] font-bold text-foreground tracking-tight">Mind</span>
                  <span className="text-[26px] font-bold text-[#7C6FEC] tracking-tight">Tech</span>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground tracking-[2px] uppercase leading-none mt-1">
                  Insights
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-xl font-semibold text-foreground text-center leading-snug mb-2">
              Receba o melhor de tecnologia<br />e inovação
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-7 leading-relaxed">
              Conteúdo selecionado direto na sua caixa de entrada,<br />toda semana.
            </p>

            {/* Benefits */}
            <div className="flex flex-col gap-2.5 bg-muted rounded-lg px-5 py-4 mb-7">
              {[
                { icon: "🧠", text: "Artigos sobre IA, produto e engenharia" },
                { icon: "📈", text: "Tendências e análises do mercado tech" },
                { icon: "⏱️", text: "Leitura de 5 minutos, sem enrolação" },
              ].map((item) => (
                <p key={item.text} className="text-sm text-muted-foreground flex items-center gap-2.5">
                  <span>{item.icon}</span>
                  {item.text}
                </p>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                aria-label="Email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                disabled={status === "loading"}
                className="w-full px-4 py-3 border border-border rounded-md bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#7C6FEC] disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#7C6FEC] hover:bg-[#6f60e6] text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>Inscrever-se grátis <span aria-hidden>→</span></>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Sem spam. Cancele quando quiser.
              </p>

              {status === "ok" && (
                <p className="text-sm text-green-600 bg-green-50 rounded-md px-4 py-2.5 text-center">
                  ✓ Obrigado! Verifique seu email para confirmar a inscrição.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 bg-red-50 rounded-md px-4 py-2.5 text-center">
                  {errorMsg}
                </p>
              )}
            </form>

            {/* Divider */}
            <hr className="border-border my-6" />

            {/* Privacy Policy */}
            <div>
              <button
                onClick={() => setShowPolicy(!showPolicy)}
                className="w-full flex items-center justify-between px-4 py-2.5 border border-border rounded-md hover:bg-muted transition-colors"
                aria-expanded={showPolicy}
              >
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  🔒 Políticas e privacidade
                </span>
                <span
                  className="text-muted-foreground text-sm"
                  style={{ transform: showPolicy ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", display: "inline-block" }}
                >
                  ↓
                </span>
              </button>

              {showPolicy && (
                <div className="mt-2 p-4 border border-border rounded-md text-xs text-muted-foreground bg-muted leading-relaxed">
                  Ao se inscrever, você concorda em receber emails com conteúdos e novidades da MindTech Insights. Seus dados não são compartilhados com terceiros. Você pode cancelar a inscrição a qualquer momento pelo link de descadastro presente em cada email.
                </div>
              )}
            </div>

          </div>
        </section>
      </main>
    </>
  );
}