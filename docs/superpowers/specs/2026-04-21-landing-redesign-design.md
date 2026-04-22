# Landing Page Redesign — GabayCo (Gabriele. | Comunicacao e Marketing)

**Data:** 2026-04-21
**Status:** Aprovado

---

## Resumo

Redesign completo da landing page da Gabriele (GabayCo) com nova estrutura de seções, novo formato de logo, grid de serviços, carrosseis individuais, seção de pilares de conteúdo, seção "Quem sou eu" e CTA final.

---

## Ordem das Seções na Página

1. **01 — Hero / Logo** (editar existente)
2. **02 — Nossos Serviços** (NOVO — grid de serviços clicáveis)
3. **03 — Resumo de Cada Serviço** (NOVO — carrosseis individuais)
4. **04 — Como Pensamos o Conteúdo** (NOVO — pilares dinâmicos)
5. **05 — Quem Sou Eu** (NOVO — substituir AboutMe existente)
6. **06 — CTA Final** (editar existente)
7. **Footer** (manter existente)

**Seções existentes não mencionadas:** Manter como estão (PainPoints, Marquee). Reposicionar conforme necessário para o fluxo fazer sentido.

---

## 01. Hero / Logo

### Logo — Formato Oficial

**Design escolhido:** Opção B — Clean

- Nome: `Gabriele.` em Playfair Display Bold, 36px, cor #311d16
- Pipe `|` em Inter Light, 56px, cor #977c71, divisor visual forte
- Subtítulo em duas linhas:
  - `COMUNICAÇÃO` — Inter Light, 10px, uppercase, letter-spacing 0.2em, cor #755f54
  - `E MARKETING` — mesma estilização
- O pipe fica entre o nome e as duas linhas do subtítulo
- Layout: flex horizontal, alinhamento centralizado verticalmente

### Frase do Hero

> "Estratégia e direção para negócios que precisam de comunicação além das redes sociais. Aqui pensamos na sua empresa antes de pensar em conteúdo."

---

## 02. Nossos Serviços

**Design escolhido:** Opção A — Fiel à referência

- Foto da Gabriele como fundo full-width
- Overlay escuro com gradiente (mais escuro à esquerda)
- Título: "MEUS" em Inter 14px uppercase + "SERVIÇOS" em Inter 28px bold uppercase, cor #edebe6
- Mini logo Gabriele abaixo do título
- Grid 2x3 de cards de serviços:
  1. Planejamento Estratégico
  2. Gestão de Redes Sociais
  3. Método Direcione
  4. Suporte Criativo
  5. Transforme sua Rotina em Conteúdo
  6. Perfil do Zero: Estrutura Completa
- Cards: fundo branco sólido (#fff), texto #311d16, Inter 12px uppercase bold, border-radius 4px, padding 14px 20px
- Cards clicáveis — scroll suave até o carrossel do respectivo serviço
- Animação: entrada com stagger

---

## 03. Resumo de Cada Serviço — Carrosseis

**Design escolhido:** Híbrido B+A — Peek cards + número grande Playfair + dots/setas, cores alternadas

### Layout do Carrossel

- **Header:**
  - Número em Playfair Display 44px, peso 400, semi-transparente (decorativo)
  - Nome em Inter 14px uppercase bold, letter-spacing 0.1em
  - Subtítulo em Inter 10px
- **Cards:** Peek — ativo ocupa ~70% da largura, próximo visível com opacidade 0.35
  - Border-radius 14px, padding 22px 18px
  - Tags: Inter 8px uppercase, letter-spacing 0.12em, border-radius 4px
  - Título: Playfair Display 15px
  - Texto: Inter 10px, line-height 1.6
- **Navegação:** Setas "← Anterior" / "Próximo →" + dots (ativo = bar 22px sage)
- **Interação:** Swipe horizontal (touch) + setas + dots

### Cores Alternadas

| Serviço | Tema |
|---------|------|
| Planejamento Estratégico | Dark Brown (#311d16) |
| Gestão de Redes Sociais | Cream (#edebe6) |
| Método Direcione | Dark Brown (#311d16) |
| Perfil do Zero | Cream (#edebe6) |
| Transforme sua Rotina | Dark Brown (#311d16) |

**Tema Dark Brown:**
- Fundo: #311d16
- Número: rgba(186,184,177,0.4)
- Nome: #edebe6 | Subtítulo: #977c71
- Cards: fundo rgba(255,255,255,0.06), borda rgba(255,255,255,0.1)
- Tags: cor #edebe6, fundo rgba(84,100,98,0.35)
- Textos: título #edebe6, corpo #bab8b1
- Nav: setas #bab8b1, dots inativos rgba(186,184,177,0.3)

**Tema Cream:**
- Fundo: #edebe6
- Número: rgba(49,29,22,0.15)
- Nome: #311d16 | Subtítulo: #755f54
- Cards: fundo #fff, borda rgba(0,0,0,0.06), shadow 0 2px 8px rgba(0,0,0,0.04)
- Tags: cor #546462, fundo rgba(84,100,98,0.1)
- Textos: título #311d16, corpo #755f54
- Nav: setas #755f54, dots inativos rgba(49,29,22,0.15)

### Estrutura de Cards (4 por serviço)

1. **Destaque** (tag: "DESTAQUE") — Frase de impacto + descrição principal
2. **O que você recebe** (tag: "O QUE VOCÊ RECEBE") — Entregáveis em caixinhas/pills. **PENDENTE:** Lâminas Canva — mockar por enquanto
3. **Como funciona** (tag: "COMO FUNCIONA") — Processo/etapas
4. **Resultado / CTA** (tag: "RESULTADO") — Fechamento + botão WhatsApp

### Conteúdo — Planejamento Estratégico

- **Subtítulo:** Estratégia + roteiros + calendário editorial mensal
- **Destaque:** "Você não precisa de mais ideias, precisa de direção."
- **Descrição:** O planejamento estratégico foi pensado para auxiliar na criação de conteúdo, com o objetivo de atrair, conectar e gerar venda, garantindo a clareza do que fazer e por quê. É focado no seu posicionamento, conhecimento de mercado e a venda direta e indireta do seu serviço, gerando identificação com o público e reforçando o seu devido valor.
- **O que recebe:** Lâmina Canva — mock por enquanto
- **Fechamento:** "Não é uma consultoria cheia de teoria, aqui você sai com um plano mensal de conteúdos pronto para executar com consistência, conteúdos estruturados, comunicação alinhada ao posicionamento e menos improviso."

### Conteúdo — Gestão de Redes Sociais

- **Subtítulo:** Tudo do Planejamento + edição + design + agendamento
- **Destaque:** Gestão estratégica completa da comunicação digital
- **Descrição:** Uma gestão estratégica completa da sua comunicação digital, que une planejamento, criação e execução, cuidando de todo o processo, do direcionamento à publicação, com foco no seu posicionamento, no entendimento do seu mercado e na geração de vendas diretas e indiretas, fortalecendo sua marca, criando conexão com o público e aumentando o valor percebido do seu serviço.
- **Descrição complementar:** Aqui, você não precisa mais se preocupar em produzir, editar ou agendar seus conteúdos, além da direção estratégica, você conta com a execução completa da sua comunicação. É um serviço pensado para o seu posicionamento e permanência constante nas redes sociais com entendimento do seu mercado e na geração de vendas diretas ou indiretas com ações que fortaleçam a sua marca, criando conexão com o público e aumentando o valor percebido do seu serviço.
- **O que recebe:** Lâmina Canva — mock por enquanto
- **Fechamento:** "A ideia é facilitar sua rotina: você foca no seu negócio, enquanto a comunicação é executada com estratégia. O objetivo não é volume ou viralização, é construir percepção, coerência e valor ao longo do tempo."

### Conteúdo — Método Direcione

- **Subtítulo:** Clareza estratégica para alinhar sua marca, sua comunicação e o real nível do seu negócio
- **Destaque:** "O Direcione não começa no Instagram. Ele começa no seu negócio."
- **Descrição:** Processo estratégico criado para organizar a base da sua empresa, identificar o problema real e te dar direção clara para crescer com consistência.
- **4 camadas fundamentais:** Lâmina Canva — mock por enquanto
- **Como funciona:** 30 dias, 4 fases (manter timeline existente no código)
- **O que recebe:** Lâmina Canva — mock por enquanto
- **Confiança:** "Ao longo de mais de 13 anos atuando com empresas de diferentes segmentos, existe um padrão claro: empresas que não crescem não têm, necessariamente, um problema de marketing. Elas têm um problema de clareza, posicionamento e estrutura."
- **Fechamento:** "Tem empresa que continua tentando ajustar o marketing, sem perceber que o problema nunca foi só o marketing e tem empresa que decide entender, alinhar e organizar a base e, a partir disso, cresce com consistência. Qual você quer ser? Se você sente que sua empresa está travada, mas sabe que entrega mais do que consegue mostrar, o Direcione é o próximo passo."

### Conteúdo — Perfil do Zero: Estrutura Completa

- **Subtítulo:** Ajuste de perfil e alinhamento de conteúdos iniciais
- **Destaque:** "A maioria das pessoas..." (lâmina Canva do problema — mock)
- **Descrição:** Aqui você encontra a base da sua presença digital, com um plano personalizado que organiza seu perfil, define seu conteúdo e ajusta o necessário, garantindo que qualquer pessoa que entre no seu perfil entenda: o que você faz, para quem você faz e por que escolher você.
- **Como funciona:** O processo começa com uma leitura estratégica do seu negócio, momento e objetivo. A partir disso, organizamos sua presença digital para que seu perfil tenha estrutura, comunique com clareza e esteja pronto para crescer com consistência.
- **O que recebe:** Encontro online + documento de construção inicial personalizado + suporte no WhatsApp por 07 dias (lâmina Canva — mock)
- **Fechamento:** "Você constrói um perfil estratégico, com conteúdos alinhados ao seu posicionamento através de uma comunicação com intenção desde o início e isso muda completamente a forma como você cresce e se posiciona."

### Conteúdo — Transforme sua Rotina em Conteúdo

- **Subtítulo:** Workshop de 1h + GPT personalizado
- **Destaque:** "O problema não é falta de conteúdo."
- **Descrição:** É um encontro estratégico e prático para te ensinar a transformar sua rotina, suas experiências e as dúvidas dos seus clientes em conteúdo para as redes sociais. Aqui você não recebe um planejamento complexo, você aprende a pensar conteúdo no dia a dia, sem travar.
- **Plus:** Além do encontro, você recebe um sistema prático (GPT personalizado) que te ajuda a transformar sua rotina em conteúdo sempre que precisar.
- **O que você aprende:**
  - Como identificar conteúdo no dia a dia — através de dúvidas de clientes, erros e aprendizados, bastidores e situações reais
  - Como transformar situações em conteúdo — lógica simples: o que aconteceu, o que isso revela e o que o público aprende
  - Como pensar conteúdo sem travar — raciocínio claro para criar conteúdo sem depender de tendência ou inspiração
  - Criação de ideias na prática — construímos juntos ideias de posts, temas e possíveis conteúdos para você já começar
- **O que recebe:** GPT personalizado (lâmina Canva — mock)
- **Fechamento:** "Essa não é uma aula sobre redes sociais. É um encontro para mudar a forma como você pensa conteúdo. Quem documenta, nunca fica sem conteúdo e quem observa o dia a dia, sempre tem o que comunicar. Se você quer parar de travar e começar a criar com consistência, isso é o que você precisa."

---

## 04. Como Pensamos o Conteúdo

**Design escolhido:** Opção C — Numerado + cream pills

- Foto da Gabriele como fundo full-width
- Overlay escuro com gradiente
- Título: "COMO PENSAMOS" em Inter 14px uppercase + "CONTEÚDO" em Inter 24px bold uppercase, cor #edebe6
- Mini logo Gabriele abaixo do título
- 3 pilares numerados em layout horizontal:
  - **01 — Estratégia:** "Nada é por acaso: cada conteúdo tem um objetivo claro e direcionado para posicionar, engajar e gerar resultado."
  - **02 — Posicionamento:** "Construímos conteúdos que revelam suas maiores forças, traduzem o que você acredita e posicionam sua marca com clareza, consistência e autoridade."
  - **03 — Diferenciação:** "Não é sobre atrair qualquer pessoa, é sobre atrair as pessoas certas, aquelas que se conectam com o que você acredita e reconhecem o seu valor."
- Cada pilar: número grande Playfair 28px transparente + pill cream com título + descrição
- Cards dinâmicos com animação staggered

---

## 05. Quem Sou Eu

**Conteúdo novo (substitui AboutMe existente):**

> Há mais de 13 anos, eu ajudo empresas e profissionais a construírem uma comunicação com direção, clareza e estratégia.
>
> Meu trabalho não começa no Instagram, começa no entendimento do seu negócio, do seu momento e do que faz sentido para o seu crescimento.
>
> Já atendi dezenas de empresas de diferentes segmentos e percebi um padrão: quem cresce com consistência não é quem posta mais, é quem comunica com intenção.
>
> É isso que eu construo com cada cliente.

**Design:** Manter o estilo do AboutMe existente (foto circular, texto ao lado) com o novo conteúdo. Usar fotos existentes em `/public/photos/`.

---

## 06. CTA Final

**Conteúdo novo:**

> Pronta para transformar a sua comunicação em uma ferramenta de vendas?
> Fale comigo e descubra qual solução faz sentido pro seu momento.

- Botão WhatsApp com link existente
- Manter estilo do CTASection existente com o novo copy

---

## Pendências

- [ ] Lâminas do Canva ("o que você recebe" de cada serviço) — mockar por enquanto, atualizar quando disponíveis
- [ ] Fotos da Gabriele para fundo das seções novas — usar fotos existentes em `/public/photos/`
- [ ] Conteúdo do serviço "Suporte Criativo" — aparece na grid mas sem carrossel por enquanto (sem conteúdo fornecido)

---

## Tecnologia

- **Carrossel:** Framer Motion (drag gestures + AnimatePresence) — sem biblioteca externa
- **Responsivo:** Mobile-first, cards full-width em mobile, grid 2x3 → 1 coluna em mobile
- **Dados:** Centralizar todo conteúdo em `src/lib/constants.ts`
- **Componentes novos:**
  - `ServicesGrid.tsx` — seção "Nossos Serviços"
  - `ContentPillars.tsx` — seção "Como Pensamos o Conteúdo"
  - `ServiceCarousel.tsx` — componente reutilizável de carrossel por serviço
- **Componentes editados:**
  - `Hero.tsx` — novo logo + nova frase
  - `AboutMe.tsx` → renomear para `QuemSouEu.tsx` com novo conteúdo
  - `CTASection.tsx` — novo copy
  - `page.tsx` — nova ordem das seções
  - `constants.ts` — novo conteúdo dos serviços + pilares + bio + CTA
