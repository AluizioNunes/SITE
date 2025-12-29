import type { Metadata } from "next";
import AmbientBackground from "@/components/ambient-background";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a ITFACT - IT SOLUTIONS coleta, usa e protege dados pessoais conforme a LGPD.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <SiteHeader />
      <main className="relative w-full px-[clamp(1.25rem,4vw,4rem)] pb-24 pt-20">
        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-card-border bg-card p-8 backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="mt-8 grid gap-6 text-sm leading-6 text-muted">
            <p>
              Esta Política de Privacidade descreve como a ITFACT - IT SOLUTIONS
              (&quot;nós&quot;) trata dados pessoais quando você navega em nosso
              site e quando envia informações por meio dos nossos canais de
              contato, em conformidade com a Lei Geral de Proteção de Dados
              (Lei nº 13.709/2018 - LGPD).
            </p>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">1. Controlador e contato</h2>
              <p>
                Controlador: ITFACT - IT SOLUTIONS.
                <br />
                Canal para solicitações de privacidade:{" "}
                <a
                  className="text-foreground underline decoration-card-border underline-offset-4 hover:opacity-90"
                  href="mailto:contatos@itfact.com?subject=Privacidade%20-%20LGPD"
                >
                  contatos@itfact.com
                </a>
                .
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">
                2. Quais dados coletamos
              </h2>
              <ul className="grid gap-2">
                <li>
                  Dados fornecidos por você: nome, email, empresa e mensagem (quando você usa o
                  formulário de contato ou entra em contato por email).
                </li>
                <li>
                  Dados técnicos: informações de navegação e dispositivo (por exemplo, endereço IP,
                  tipo de navegador, páginas acessadas) que podem ser coletadas por mecanismos
                  padrão de servidor e ferramentas de segurança/monitoramento.
                </li>
                <li>
                  Cookies e tecnologias semelhantes: podem ser usados para funcionamento do site e,
                  quando aplicável, para medir desempenho e melhorar a experiência.
                </li>
              </ul>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">
                3. Para que usamos os dados
              </h2>
              <ul className="grid gap-2">
                <li>Responder solicitações, propostas e dúvidas enviadas por você.</li>
                <li>Prestar e aprimorar serviços, suporte e relacionamento comercial.</li>
                <li>Manter a segurança do site e prevenir fraudes/abusos.</li>
                <li>Cumprir obrigações legais e regulatórias, quando aplicável.</li>
              </ul>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">4. Bases legais</h2>
              <ul className="grid gap-2">
                <li>Execução de procedimentos preliminares a contrato e/ou contrato, quando aplicável.</li>
                <li>Legítimo interesse, para segurança, melhoria do site e relacionamento comercial.</li>
                <li>Consentimento, quando exigido (por exemplo, determinadas comunicações).</li>
                <li>Cumprimento de obrigação legal/regulatória, quando necessário.</li>
              </ul>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">5. Compartilhamento</h2>
              <p>
                Podemos compartilhar dados pessoais com fornecedores que nos ajudam a operar o site e
                a comunicação (por exemplo, hospedagem, email e infraestrutura), sempre com medidas
                compatíveis de segurança e somente na extensão necessária. Também poderemos
                compartilhar quando houver obrigação legal, ordem de autoridade competente ou para
                proteger direitos e segurança.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">
                6. Armazenamento e retenção
              </h2>
              <p>
                Mantemos os dados pelo tempo necessário para as finalidades descritas nesta política,
                para cumprir obrigações legais e para resguardar direitos. Quando não forem mais
                necessários, os dados podem ser excluídos ou anonimizados, conforme aplicável.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">7. Segurança</h2>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais
                contra acesso não autorizado, perda, alteração ou divulgação indevida. Ainda assim,
                nenhum sistema é totalmente seguro.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">8. Direitos do titular</h2>
              <p>
                Você pode solicitar confirmação de tratamento, acesso, correção, anonimização,
                portabilidade, eliminação, informação sobre compartilhamento e revogação de
                consentimento, conforme a LGPD. Para exercer seus direitos, envie um email para{" "}
                <a
                  className="text-foreground underline decoration-card-border underline-offset-4 hover:opacity-90"
                  href="mailto:contatos@itfact.com?subject=Solicita%C3%A7%C3%A3o%20LGPD"
                >
                  contatos@itfact.com
                </a>
                .
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">9. Alterações</h2>
              <p>
                Podemos atualizar esta política periodicamente. A data de última atualização indica
                quando o texto foi revisado.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

