# Create Project

```bash
npx create-next-app@latest # select Typescript TailwindCSS ESLint AppRouter
cd myblog-web
npm install
npm run dev
```

## Packages

```bash
# react-icons:
# react-hook-form: A set toolkit to resolve form problem
# clsx:
npm install react-icons react-hook-form clsx
npm install @tailwindcss/forms
npm install -D prisma
npx prisma init
npm install next-auth@latest @prisma/client @next-auth/prisma-adapter bcrypt
npm install -D @types/bcrypt
npm install axios
```

### Prisma Push

```bash
npx prisma db push
```

# Project Path

```bash
.
├── README.md
├── app
│   ├── (site)            // nextjs的设置，默认使用app作为根页面路径，如果有文件夹名为(site)，则该文件夹也为根页面
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── images
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
└── tsconfig.json
```
