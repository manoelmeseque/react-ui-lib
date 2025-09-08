# 🚀 Guia de Release - @manoelmeseque/react-tw-ui

## 📋 Scripts Disponíveis

### 🔢 Scripts de Versão

#### `npm run version:patch`
- Incrementa a versão patch (1.0.0 → 1.0.1)
- Usado para correções de bugs
- Executa build automaticamente

#### `npm run version:minor`
- Incrementa a versão minor (1.0.0 → 1.1.0)
- Usado para novas funcionalidades
- Executa build automaticamente

#### `npm run version:major`
- Incrementa a versão major (1.0.0 → 2.0.0)
- Usado para mudanças que quebram compatibilidade
- Executa build automaticamente

### 📦 Scripts de Publicação

#### `npm run publish:npm`
- Publica a versão atual no npm
- Usa `--access public` para pacotes públicos

### 🎯 Scripts de Release (Combinados)

#### `npm run release:patch`
- Incrementa versão patch + publica no npm
- **Comando mais usado para correções**

#### `npm run release:minor`
- Incrementa versão minor + publica no npm
- **Comando mais usado para novas funcionalidades**

#### `npm run release:major`
- Incrementa versão major + publica no npm
- **Comando para mudanças grandes**

## 🎯 Fluxo de Trabalho Recomendado

### 1. 🔧 Para Correções de Bugs
```bash
npm run release:patch
```

### 2. ✨ Para Novas Funcionalidades
```bash
npm run release:minor
```

### 3. 🔄 Para Mudanças Grandes
```bash
npm run release:major
```

## 📝 Exemplo Prático

### Cenário: Adicionar um novo componente

1. **Desenvolver o componente:**
   ```bash
   # Fazer suas alterações no código
   git add .
   git commit -m "feat: add new Modal component"
   ```

2. **Publicar nova versão:**
   ```bash
   npm run release:minor
   ```

3. **Resultado:**
   - Versão incrementada (ex: 1.0.1 → 1.1.0)
   - Build executado automaticamente
   - Publicado no npm
   - Tag git criada automaticamente

## 🔍 Verificações Antes do Release

### 1. ✅ Testar Localmente
```bash
npm run build
npm pack  # Cria um arquivo .tgz para testar
```

### 2. ✅ Verificar Arquivos
```bash
# Verificar se todos os arquivos estão incluídos
npm run build
ls -la dist/
```

### 3. ✅ Verificar package.json
```json
{
  "name": "@manoelmeseque/react-tw-ui",
  "version": "1.0.1",  // ← Versão correta
  "files": ["dist"],   // ← Arquivos incluídos
  "exports": {         // ← Exports configurados
    ".": { /* ... */ },
    "./styles": "./dist/styles.css"
  }
}
```

## 🚨 Troubleshooting

### Erro: "Package already exists"
```bash
# Verificar versão atual
npm view @manoelmeseque/react-tw-ui version

# Incrementar versão
npm run version:patch
```

### Erro: "Not authorized"
```bash
# Fazer login no npm
npm login

# Verificar usuário
npm whoami
```

### Erro: "Build failed"
```bash
# Verificar dependências
npm install

# Limpar cache
npm run build
```

## 📊 Histórico de Versões

### Versionamento Semântico (SemVer)

- **MAJOR** (1.0.0 → 2.0.0): Mudanças que quebram compatibilidade
- **MINOR** (1.0.0 → 1.1.0): Novas funcionalidades compatíveis
- **PATCH** (1.0.0 → 1.0.1): Correções de bugs

### Exemplos de Uso

| Mudança | Script | Exemplo |
|---------|--------|---------|
| Corrigir bug no Button | `release:patch` | 1.0.0 → 1.0.1 |
| Adicionar componente Modal | `release:minor` | 1.0.1 → 1.1.0 |
| Mudar API do Button | `release:major` | 1.1.0 → 2.0.0 |

## 🎯 Dicas Importantes

1. **Sempre teste localmente** antes de publicar
2. **Use commits semânticos** (feat:, fix:, docs:)
3. **Mantenha CHANGELOG.md** atualizado
4. **Verifique se está logado** no npm
5. **Use tags git** para marcar releases

## 🔗 Links Úteis

- [Semantic Versioning](https://semver.org/)
- [npm publish docs](https://docs.npmjs.com/cli/v8/commands/npm-publish)
- [Conventional Commits](https://www.conventionalcommits.org/)
