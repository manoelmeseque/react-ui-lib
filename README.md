# @manoelmeseque/react-tw-ui

Uma biblioteca de componentes React com TailwindCSS e prefixo `tw-` para evitar conflitos de estilos.

## 🚀 Instalação

```bash
npm install @manoelmeseque/react-tw-ui
```

## 📦 Uso dos Componentes

```tsx
import { Button, Card, Input } from '@manoelmeseque/react-tw-ui';

function App() {
  return (
    <div>
      <Button variant="default">Clique aqui</Button>
      <Card>
        <CardHeader>
          <CardTitle>Título</CardTitle>
          <CardDescription>Descrição</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Digite algo..." />
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🎨 Importando os Estilos

### Opção 1: Importar CSS completo (Recomendado)

```tsx
// No seu arquivo principal (App.tsx ou index.tsx)
import '@manoelmeseque/react-tw-ui/styles';
```

### Opção 2: Importar apenas as variáveis CSS

Se você quiser usar apenas as variáveis CSS no seu projeto:

```css
/* No seu arquivo CSS principal */
@import '@manoelmeseque/react-tw-ui/styles';
```

## 🎯 Configuração do TailwindCSS

Certifique-se de que seu projeto tem o prefixo `tw-` configurado:

```js
// tailwind.config.js
module.exports = {
  prefix: "tw-",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@manoelmeseque/react-tw-ui/dist/**/*.{js,ts}"
  ],
  // ... resto da configuração
}
```

## 🌙 Dark Mode

A biblioteca suporta dark mode automaticamente. Para ativar:

```tsx
// Adicione a classe 'dark' no elemento raiz
document.documentElement.classList.add('dark');
```

## 🎨 Customização de Cores

Você pode sobrescrever as variáveis CSS no seu projeto:

```css
:root {
  /* Sobrescrever cores primárias */
  --primary: #your-color;
  --primary-foreground: #your-text-color;
  
  /* Sobrescrever cores de fundo */
  --background: #your-background;
  --foreground: #your-text;
}
```

## 📋 Componentes Disponíveis

- **Button** - Botão com múltiplas variantes
- **Card** - Card com header, content e footer
- **Input** - Campo de entrada de texto

## 🔧 Variantes do Button

```tsx
<Button variant="default">Padrão</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

## 📏 Tamanhos do Button

```tsx
<Button size="sm">Pequeno</Button>
<Button size="default">Padrão</Button>
<Button size="lg">Grande</Button>
<Button size="icon">Ícone</Button>
```

## 🎨 Paleta de Cores

A biblioteca inclui uma paleta completa de cores:

- **Purple**: `tw-bg-purple-500`, `tw-text-purple-700`, etc.
- **Magenta**: `tw-bg-magenta-400`, `tw-text-magenta-600`, etc.
- **Gray**: `tw-bg-gray-100`, `tw-text-gray-800`, etc.
- **Green**: `tw-bg-green-500`, `tw-text-green-700`, etc.
- **Red**: `tw-bg-red-500`, `tw-text-red-700`, etc.
- **Orange**: `tw-bg-orange-500`, `tw-text-orange-700`, etc.

## 📝 Exemplo Completo

```tsx
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, Input } from '@manoelmeseque/react-tw-ui';
import '@manoelmeseque/react-tw-ui/styles';

function App() {
  return (
    <div className="tw-p-8 tw-bg-background tw-min-h-screen">
      <Card className="tw-max-w-md tw-mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre com suas credenciais
          </CardDescription>
        </CardHeader>
        <CardContent className="tw-space-y-4">
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button className="tw-w-full">
            Entrar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
```

## 📄 Licença

MIT
