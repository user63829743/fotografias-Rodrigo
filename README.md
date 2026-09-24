# Helena Duarte — Fotografia de Casamento & Memórias Afetivas

Design de site autoral e acolhedor para fotografia documental de casamentos, inspirado na essência e atmosfera do site `alyssanicolephotographyy.com`.

---

## ✦ Filosofia e Atmosfera Visual
- **Tom & Sensação:** Romântico, acolhedor, íntimo e cinematográfico. O site funciona como um livro de memórias táteis e galeria de arte editorial.
- **Paleta de Cores Orgânicas:**
  - Base (Papel de Algodão): `#FBF9F5`
  - Superfície (Linho Quente): `#F2ECE4`
  - Linhas e Bordas: `#DFD7CB`
  - Texto Principal (Carvão Suave): `#242220`
  - Corpo de Texto (Sépia Pálido): `#5C5650`
  - Acentos Orgânicos: `#706E5B` (Verde Oliva Desbotado) & `#9E7B66` (Terracota Suave)
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
cd /home/pedro/fotografia-casamento
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
