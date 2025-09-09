# Exemplos de Uso - @manoelmeseque/react-tw-ui

## 🚀 Instalação e Configuração

### 1. Instalar a biblioteca
```bash
npm install @manoelmeseque/react-tw-ui
```

### 2. Configurar TailwindCSS
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

### 3. Importar estilos
```tsx
// App.tsx ou index.tsx
import '@manoelmeseque/react-tw-ui/styles';
```

## 📋 Exemplos de Componentes

### Button - Todas as Variantes
```tsx
import { Button } from '@manoelmeseque/react-tw-ui';

function ButtonExamples() {
  return (
    <div className="tw-space-y-4">
      <Button variant="default">Padrão</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}
```

### Button - Todos os Tamanhos
```tsx
import { Button } from '@manoelmeseque/react-tw-ui';

function ButtonSizes() {
  return (
    <div className="tw-flex tw-items-center tw-gap-4">
      <Button size="sm">Pequeno</Button>
      <Button size="default">Padrão</Button>
      <Button size="lg">Grande</Button>
      <Button size="icon">🔍</Button>
    </div>
  );
}
```

### Card - Estrutura Completa
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@manoelmeseque/react-tw-ui';

function CardExample() {
  return (
    <Card className="tw-max-w-sm">
      <CardHeader>
        <CardTitle>Produto</CardTitle>
        <CardDescription>
          Descrição do produto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="tw-text-sm tw-text-muted-foreground">
          Conteúdo do card aqui...
        </p>
      </CardContent>
      <CardFooter>
        <Button className="tw-w-full">Comprar</Button>
      </CardFooter>
    </Card>
  );
}
```

### Input - Diferentes Tipos
```tsx
import { Input } from '@manoelmeseque/react-tw-ui';

function InputExamples() {
  return (
    <div className="tw-space-y-4">
      <Input placeholder="Texto normal" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Input type="number" placeholder="Número" />
      <Input disabled placeholder="Desabilitado" />
    </div>
  );
}
```

## 🎨 Exemplo de Página Completa

```tsx
import React from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  Input 
} from '@manoelmeseque/react-tw-ui';
import '@manoelmeseque/react-tw-ui/styles';

function LoginPage() {
  return (
    <div className="tw-min-h-screen tw-bg-background tw-flex tw-items-center tw-justify-center tw-p-4">
      <Card className="tw-w-full tw-max-w-md">
        <CardHeader className="tw-text-center">
          <CardTitle className="tw-text-2xl">Bem-vindo</CardTitle>
          <CardDescription>
            Faça login em sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="tw-space-y-4">
          <div className="tw-space-y-2">
            <label className="tw-text-sm tw-font-medium">Email</label>
            <Input 
              type="email" 
              placeholder="seu@email.com" 
              className="tw-w-full"
            />
          </div>
          <div className="tw-space-y-2">
            <label className="tw-text-sm tw-font-medium">Senha</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              className="tw-w-full"
            />
          </div>
          <Button className="tw-w-full tw-mt-6">
            Entrar
          </Button>
          <div className="tw-text-center">
            <Button variant="link" className="tw-text-sm">
              Esqueceu a senha?
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
```

## 🌙 Dark Mode

Para ativar o dark mode, adicione a classe `dark` no elemento raiz:

```tsx
// Para ativar dark mode
useEffect(() => {
  document.documentElement.classList.add('dark');
}, []);

// Para desativar dark mode
useEffect(() => {
  document.documentElement.classList.remove('dark');
}, []);
```

## 🎨 Customização de Cores

Você pode sobrescrever as variáveis CSS no seu projeto:

```css
/* No seu arquivo CSS global */
:root {
  /* Cores primárias personalizadas */
  --primary: #your-color;
  --primary-foreground: #your-text-color;
  
  /* Cores de fundo personalizadas */
  --background: #your-background;
  --foreground: #your-text;
  
  /* Cores de card personalizadas */
  --card: #your-card-bg;
  --card-foreground: #your-card-text;
}
```

## 📱 Responsividade

Todos os componentes são responsivos por padrão:

```tsx
<Card className="tw-w-full md:tw-w-1/2 lg:tw-w-1/3">
  <CardContent>
    <p className="tw-text-sm md:tw-text-base">
      Texto responsivo
    </p>
  </CardContent>
</Card>
```

## 🔧 Estados dos Componentes

### Button com Estados
```tsx
<Button disabled>Desabilitado</Button>
<Button className="tw-loading">Carregando...</Button>
```

### Input com Estados
```tsx
<Input placeholder="Normal" />
<Input placeholder="Desabilitado" disabled />
<Input placeholder="Com erro" className="tw-border-red-500" />
```

## 🎯 Dicas Importantes

1. **Sempre use o prefixo `tw-`** nas suas classes CSS
2. **Importe os estilos** no arquivo principal
3. **Configure o TailwindCSS** com o prefixo correto
4. **Use as variáveis CSS** para customização
5. **Teste o dark mode** adicionando a classe `dark`
