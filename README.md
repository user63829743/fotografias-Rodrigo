# Rodrigo Zago — Fotografia & Filme de Casamento

Design de site autoral e acolhedor para fotografia documental de casamentos.

---

## ✦ Filosofia e Atmosfera Visual
- **Tom & Sensação:** Romântico, acolhedor, íntimo e cinematográfico. O site funciona como um livro de memórias táteis e galeria de arte editorial.
- **Paleta da marca R.Zago:**
  - Oliva `#524F3D` · Grafite `#2F2D2E` · Creme `#EAE6DC` · Terracota `#865E45`
  - Base do site: `#F6F3EC` (creme claro derivado da marca)
- **Identidade:** kit de logos oficial em `assets/logos/` (SVG: horizontal, empilhado e monograma, nas 4 cores). O site usa um sprite no `index.html` que herda a cor do texto.
- **Tipografia:**
  - **Títulos & Citações:** `Cormorant Garamond` (Google Fonts)
  - **Subtítulos & Tags:** `Tenor Sans` (Google Fonts)
  - **Corpo & Formulários:** `Plus Jakarta Sans` (Google Fonts)

---

## ✦ Estrutura de Arquivos

```
fotografia-casamento/
├── index.html        # Estrutura HTML semântica com todas as seções, manifesto, galeria e formulário
├── style.css         # Folha de estilos completa, design system, responsividade e lightbox
├── script.js         # Interações: modal de lightbox nativo (<dialog>), filtros, slider e formulário
└── README.md         # Documentação e guia de personalização
```

---

## ✦ Como Visualizar Localmente

Você pode abrir o arquivo `index.html` diretamente em qualquer navegador moderno ou rodar um servidor HTTP local simples:

```bash
cd fotografias-Rodrigo-main
python3 -m http.server 8000
```
E acesse no navegador: `http://localhost:8000`

---

## ✦ Funcionalidades Principais Implementadas

1. **Hero Section com Manifesto:** Frase de posicionamento em escala editorial com imagem de alto impacto visual e indicador de rolagem.
2. **Boas-Vindas Pessoais ("Sobre Mim"):** Retrato fotográfico e narrativa humanizada, distanciando-se de termos corporativos.
3. **Galeria Editorial (Editorial Masonry):**
   - Grid dinâmico com fotos verticais, horizontais e de detalhes táteis.
   - Filtro de categorias por sensações (*Celebrações*, *Elopements*, *Detalhes*).
   - Efeito de hover suave com zoom cinematográfico e metadados.
4. **Lightbox Modal Acessível:**
   - Construído com a tag nativa `<dialog>` (conforme boas práticas modernas da Web).
   - Suporte a navegação por teclado (Setas Esquerda/Direita para navegar entre fotos, tecla `Esc` para fechar).
   - *Light dismiss* (clicar fora da imagem fecha o modal automaticamente).
5. **Ecos de Afeto (Depoimentos Autênticos):**
   - Seção em tom linho com citações em itálico e alternância fluida entre depoimentos.
6. **A Experiência em 3 Etapas:**
   - Descrição clara e acolhedora de como é o acompanhamento do casal (O Encontro, O Dia da Celebração, A Herança Imortal).
7. **Diário & Crônicas:**
   - Cartões com links para narrativas completas de casamentos reais.
8. **Formulário de Contato Humanizado:**
   - Perguntas que estimulam a conexão emocional e história do casal.
   - Validação suave com mensagem de agradecimento personalizada.
9. **Menu Responsivo para Mobile:**
   - Drawer em tela inteira com tipografia generosa e bloqueio inteligente de scroll.

---

## ✦ Como Personalizar

- **Substituir Imagens:** Altere as URLs das tags `<img>` no `index.html` pelas suas próprias fotos em alta resolução ou formato `.webp`.
- **Textos & Biografia:** Edite os parágrafos nas seções `#sobre`, `#depoimentos` e `#experiencia`.
- **Redes Sociais & Contato:** Atualize os links de WhatsApp, Instagram, Pinterest e E-mail no formulário e no rodapé.
