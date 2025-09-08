# 📚 Guia do Storybook - @manoelmeseque/react-tw-ui

## 🚀 Como Usar o Storybook

### **Executar o Storybook em Desenvolvimento**

```bash
npm run storybook
```

O Storybook será aberto em `http://localhost:6006`

### **Build do Storybook para Produção**

```bash
npm run build-storybook
```

Isso gera uma versão estática do Storybook na pasta `storybook-static/`

## 📖 Stories Disponíveis

### **1. Button Stories**
- **Default** - Botão padrão
- **Secondary** - Variante secundária
- **Outline** - Variante outline
- **Ghost** - Variante ghost
- **Link** - Variante link
- **Small** - Tamanho pequeno
- **Large** - Tamanho grande
- **Icon** - Tamanho ícone
- **Disabled** - Estado desabilitado
- **WithIcon** - Com ícone
- **AllVariants** - Todas as variantes
- **AllSizes** - Todos os tamanhos

### **2. Card Stories**
- **Default** - Card básico
- **WithFooter** - Card com footer
- **LoginForm** - Formulário de login
- **StatsCard** - Card de estatísticas
- **MultipleCards** - Múltiplos cards

### **3. Input Stories**
- **Default** - Input padrão
- **Email** - Input de email
- **Password** - Input de senha
- **Number** - Input numérico
- **Disabled** - Input desabilitado
- **WithValue** - Input com valor
- **FormExample** - Exemplo de formulário
- **AllTypes** - Todos os tipos
- **States** - Diferentes estados

## 🎨 Recursos do Storybook

### **Controles Interativos**
- **Controls** - Modificar props dos componentes em tempo real
- **Actions** - Ver eventos disparados pelos componentes
- **Viewport** - Testar em diferentes tamanhos de tela

### **Documentação Automática**
- **Docs** - Documentação gerada automaticamente
- **ArgTypes** - Tipos e descrições das props
- **Stories** - Exemplos de uso

### **Temas e Backgrounds**
- **Light Mode** - Fundo claro (padrão)
- **Dark Mode** - Fundo escuro
- **Transparent** - Fundo transparente

## 🔧 Configuração

### **Arquivo Principal: `.storybook/main.ts`**
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
export default config;
```

### **Preview: `.storybook/preview.ts`**
```typescript
import type { Preview } from '@storybook/react-vite'
import '../src/index.css'  // ← Importa os estilos TailwindCSS

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0f0f0f' },
      ],
    },
  },
};
```

## 📝 Como Criar Novas Stories

### **Estrutura Básica de uma Story**

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { MeuComponente } from '../components/ui/meu-componente';

const meta: Meta<typeof MeuComponente> = {
  title: 'Components/MeuComponente',
  component: MeuComponente,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // Configurar controles aqui
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props padrão
  },
};
```

### **Exemplo de Story com Controles**

```typescript
export const Interactive: Story = {
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
```

## 🎯 Dicas de Uso

### **1. Testar Componentes**
- Use o Storybook para testar componentes isoladamente
- Verifique diferentes estados e props
- Teste responsividade com diferentes viewports

### **2. Documentar Componentes**
- Adicione descrições nas stories
- Use `tags: ['autodocs']` para documentação automática
- Crie exemplos práticos de uso

### **3. Desenvolvimento**
- Use controles para testar props rapidamente
- Verifique acessibilidade com addons
- Teste em diferentes temas (light/dark)

### **4. Colaboração**
- Compartilhe o Storybook com a equipe
- Use para reviews de design
- Documente padrões de uso

## 🔗 Links Úteis

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook Addons](https://storybook.js.org/addons)
- [Storybook Best Practices](https://storybook.js.org/docs/writing-stories/introduction)

## 🚀 Próximos Passos

1. **Adicionar mais addons** (accessibility, viewport, etc.)
2. **Criar stories para novos componentes**
3. **Adicionar testes automatizados**
4. **Configurar deploy do Storybook**
5. **Integrar com design system**
