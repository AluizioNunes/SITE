import type { Metadata } from "next";
import AmbientBackground from "@/components/ambient-background";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description:
    "Termos e condições de uso do site da ITFACT - IT SOLUTIONS.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AmbientBackground />
      <SiteHeader />
      <main className="relative w-full px-[clamp(1.25rem,4vw,4rem)] pb-24 pt-20">
        <section className="mx-auto w-full max-w-3xl rounded-3xl border border-card-border bg-card p-8 backdrop-blur">
          <h1 className="text-3xl font-semibold tracking-tight">Termos de Serviço</h1>
          <p className="mt-3 text-sm text-muted">
            Última atualização: {new Date().toLocaleDateString("pt-BR")}
          </p>

          <div className="mt-8 grid gap-6 text-sm leading-6 text-muted">
            <p>
              Ao acessar e usar este site, você concorda com estes Termos de Serviço. Se você não
              concordar, não utilize o site.
            </p>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">1. Sobre o site</h2>
              <p>
                O site da ITFACT - IT SOLUTIONS tem finalidade informativa e de contato comercial,
                apresentando serviços e soluções, além de oferecer um formulário para envio de
                mensagens.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">2. Uso permitido</h2>
              <ul className="grid gap-2">
                <li>Usar o site de forma lícita e de acordo com estes termos.</li>
                <li>Não tentar violar a segurança, disponibilidade ou integridade do site.</li>
                <li>Não enviar conteúdo ilícito, ofensivo, fraudulento ou que infrinja direitos de terceiros.</li>
              </ul>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">3. Conteúdo e propriedade intelectual</h2>
              <p>
                Textos, marcas, logotipos, imagens e demais conteúdos do site são protegidos por
                direitos de propriedade intelectual e pertencem à ITFACT - IT SOLUTIONS ou a seus
                licenciadores. Você não pode copiar, reproduzir, distribuir ou criar obras derivadas
                sem autorização, exceto quando permitido por lei.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">4. Links de terceiros</h2>
              <p>
                O site pode conter links para sites de terceiros. Não nos responsabilizamos por
                conteúdo, políticas ou práticas de privacidade desses sites.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">5. Formulário de contato</h2>
              <p>
                Ao enviar informações pelo formulário, você declara que os dados fornecidos são
                verdadeiros e que possui autorização para compartilhá-los. O tratamento desses dados
                ocorre conforme nossa{" "}
                <a
                  className="text-foreground underline decoration-card-border underline-offset-4 hover:opacity-90"
                  href="/politica-de-privacidade"
                >
                  Política de Privacidade
                </a>
                .
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">6. Isenção e limitação de responsabilidade</h2>
              <p>
                O site é fornecido &quot;como está&quot; e pode sofrer interrupções, atualizações ou
                mudanças. Na máxima extensão permitida pela legislação aplicável, não garantimos que
                o site estará sempre disponível, livre de erros ou adequado a um propósito específico.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">7. Alterações</h2>
              <p>
                Podemos alterar estes termos a qualquer momento. A versão atualizada passa a valer
                a partir da publicação nesta página.
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">8. Contato</h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato em{" "}
                <a
                  className="text-foreground underline decoration-card-border underline-offset-4 hover:opacity-90"
                  href="mailto:contatos@itfact.com?subject=Termos%20de%20Servi%C3%A7o"
                >
                  contatos@itfact.com
                </a>
                .
              </p>
            </div>

            <div className="grid gap-2">
              <h2 className="text-base font-semibold text-foreground">9. Lei aplicável</h2>
              <p>
                Estes termos são regidos pelas leis da República Federativa do Brasil.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

