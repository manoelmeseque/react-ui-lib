# Configuração CI/CD - Deploy Storybook e NPM

Este documento explica como configurar o CI/CD para fazer deploy automático do Storybook no GitHub Pages e publicar no npm quando subir para a branch main.

## 🚀 Funcionalidades

- **Deploy automático do Storybook** no GitHub Pages quando push na branch `main`
- **Publicação automática no npm** quando push na branch `main`
- **Build e testes** em pull requests
- **Release manual** com versionamento automático
- **PR com versionamento automático** usando labels
- **Versionamento inteligente** baseado no tipo de mudança

## 📋 Pré-requisitos

### 1. Configurar GitHub Pages

1. Vá para **Settings** do seu repositório no GitHub
2. Na seção **Pages**, configure:
   - **Source**: GitHub Actions
   - **Branch**: Deixe vazio (será configurado automaticamente)

### 2. Configurar NPM Token

1. Acesse [npmjs.com](https://www.npmjs.com) e faça login
2. Vá para **Access Tokens** no seu perfil
3. Crie um novo token com permissão **Automation**
4. No GitHub, vá para **Settings** > **Secrets and variables** > **Actions**
5. Adicione um novo secret:
   - **Name**: `NPM_TOKEN`
   - **Value**: Seu token do npm

### 3. Configurar Permissões do Repositório

1. Vá para **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione:
   - **Read and write permissions**
   - **Allow GitHub Actions to create and approve pull requests**

### 4. Criar Labels para Versionamento

1. Vá para **Issues** > **Labels** no seu repositório
2. Crie as seguintes labels:
   - `version:patch` (Verde) - Para correções
   - `version:minor` (Azul) - Para novas funcionalidades  
   - `version:major` (Vermelho) - Para mudanças grandes
3. Ou execute o workflow **Setup Labels** para criar automaticamente

## 🔧 Workflows Configurados

### 1. CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

**Triggers:**
- Push na branch `main` → Deploy Storybook + Publica no npm
- Pull Request para `main` → Build e testes

**Jobs:**
- `build-and-test`: Instala dependências, build da lib e Storybook
- `deploy-storybook`: Deploy do Storybook no GitHub Pages
- `publish-npm`: Publicação no npm

### 2. Release Manual (`.github/workflows/release.yml`)

**Trigger:** Workflow dispatch manual

**Funcionalidades:**
- Versionamento automático (patch/minor/major)
- Build da biblioteca
- Publicação no npm
- Criação de tag e release no GitHub

### 3. PR com Versionamento (`.github/workflows/pr-version.yml`)

**Trigger:** Pull Request com labels específicas

**Funcionalidades:**
- Detecta labels `version:patch/minor/major`
- Incrementa versão automaticamente no PR
- Publica no NPM quando PR é merged
- Cria Release no GitHub automaticamente

### 4. Setup Labels (`.github/workflows/setup-labels.yml`)

**Trigger:** Workflow dispatch ou push do arquivo `create-labels.js`

**Funcionalidades:**
- Cria labels necessárias para versionamento
- Configuração automática do repositório

## 📝 Como Usar

### Deploy Automático

1. Faça push para a branch `main`
2. O Storybook será automaticamente deployado em: `https://[seu-usuario].github.io/[nome-do-repo]`
3. A biblioteca será automaticamente publicada no npm

### Release Manual

1. Vá para **Actions** no GitHub
2. Selecione **Release**
3. Clique em **Run workflow**
4. Escolha o tipo de versão (patch/minor/major)
5. Clique em **Run workflow**

### PR com Versionamento Automático

1. Desenvolva sua feature em uma branch
2. Crie um Pull Request
3. **Adicione uma label**:
   - `version:patch` - Para correções
   - `version:minor` - Para novas funcionalidades
   - `version:major` - Para mudanças grandes
4. O GitHub Actions incrementará a versão automaticamente
5. Quando fizer merge, a nova versão será publicada no NPM

### Setup Labels

1. Vá para **Actions** no GitHub
2. Selecione **Setup Labels**
3. Clique em **Run workflow**
4. As labels necessárias serão criadas automaticamente

## 🔍 Verificações

### GitHub Pages
- URL: `https://[seu-usuario].github.io/[nome-do-repo]`
- O deploy acontece automaticamente após push na main

### NPM
- Verifique em: `https://www.npmjs.com/package/@manoelmeseque/react-tw-ui`
- A versão será atualizada automaticamente

## 🛠️ Troubleshooting

### Erro de Permissão no GitHub Pages
- Verifique se o GitHub Pages está configurado para usar GitHub Actions
- Confirme se as permissões do workflow estão corretas

### Erro de Publicação no NPM
- Verifique se o `NPM_TOKEN` está configurado corretamente
- Confirme se o token tem permissão de **Automation**
- Verifique se o nome do pacote está disponível no npm

### Build Falha
- Verifique se todas as dependências estão no `package.json`
- Confirme se os scripts de build estão funcionando localmente

## 📚 Scripts Disponíveis

```bash
# Build da biblioteca
npm run build

# Build do Storybook
npm run build-storybook

# Executar Storybook localmente
npm run storybook

# Publicar no npm manualmente
npm run publish:npm

# Versionamento e release
npm run release:patch  # 1.0.0 → 1.0.1
npm run release:minor  # 1.0.0 → 1.1.0
npm run release:major  # 1.0.0 → 2.0.0
```

## 🔄 Fluxo de Trabalho Recomendado

1. **Desenvolvimento**: Trabalhe em branches feature
2. **Pull Request**: Crie PR para `main` (dispara build e testes)
3. **Merge**: Merge na `main` (dispara deploy automático)
4. **Release**: Use o workflow manual quando necessário

## 📞 Suporte

Se encontrar problemas:
1. Verifique os logs do GitHub Actions
2. Confirme se todos os secrets estão configurados
3. Teste os scripts localmente
4. Verifique as permissões do repositório
