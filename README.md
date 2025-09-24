# Portfolio Personal - Lucas Gorordo

Sitio web de portfolio personal desarrollado con Next.js

## 🚀 Tecnologías

- **Framework:** Next.js 15.3.3 con TypeScript
- **Styling:** Tailwind CSS con animaciones personalizadas
- **UI Components:** Radix UI primitives con shadcn/ui
- **Formularios:** React Hook Form con validación Zod
- **Iconos:** Lucide React
- **Markdown:** React Markdown con soporte GFM
- **Gráficos:** Recharts para visualizaciones
- **Carruseles:** Embla Carousel

## 🏗️ Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Experience, Education, Courses
│   └── ui/             # Componentes reutilizables (shadcn/ui)
├── lib/
│   ├── portfolio-data.ts  # Datos del portfolio
│   ├── types.ts          # Definiciones TypeScript
│   └── utils.ts          # Utilidades
└── hooks/              # Custom React hooks
```

## 🛠️ Desarrollo

### Requisitos previos
- Node.js (versión especificada en `.nvmrc`)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone <repository-url>

# Seter version de node adecuada
nvm use

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

El proyecto estará disponible en `http://localhost:9002`

### Scripts disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo (puerto 9002)
npm run dev:turbo        # Desarrollo con Turbopack

# Producción
npm run build            # Build para producción
npm run start            # Servidor de producción

# Calidad de código
npm run lint             # Linting con ESLint
npm run typecheck        # Verificación de tipos TypeScript
```

## 🚀 Deploy

### Deploy en GitHub Pages

El proyecto está configurado para generar un sitio estático y desplegarlo en GitHub Pages:

#### Pasos para el despliegue:

1. **Compilar la versión estática:**
   ```bash
   npm run build
   ```

2. **Crear y cambiar a la rama gh-pages:**
   ```bash
   git checkout -b gh-pages
   ```

3. **Copiar archivos compilados al directorio raíz:**
   ```bash
   cp -r out/* .
   ```

4. **Añadir archivo .nojekyll (importante para GitHub Pages):**
   ```bash
   touch .nojekyll
   ```

5. **Commit y push de los archivos estáticos:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

6. **Configurar GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages / (root)

#### Script de despliegue automatizado:
```bash
#!/bin/bash
# deploy-gh-pages.sh
npm run build && \
git checkout -b gh-pages || git checkout gh-pages && \
cp -r out/* . && \
touch .nojekyll && \
git add . && \
git commit -m "Deploy to GitHub Pages $(date)" && \
git push origin gh-pages && \
git checkout main
```

**Tu sitio estará disponible en:** `https://gorordo96.github.io/website`

## 📄 Licencia

Ver archivo `LICENSE` para más detalles.