# Personal Website

## Environment Variables

Bu proje çalışmak için aşağıdaki environment değişkenlerine ihtiyaç duyar:

1. `.env.example` dosyasını `.env` olarak kopyalayın:
```bash
cp .env.example .env
```

2. `.env` dosyasındaki değişkenleri kendi değerlerinizle güncelleyin:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: EmailJS servis ID'niz
- `NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID`: Bildirim template ID'si
- `NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID`: Otomatik yanıt template ID'si
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: EmailJS public key'iniz

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Canlı Ortam

Bu proje Vercel üzerinde host edilmektedir. Environment değişkenleri Vercel Dashboard üzerinden yönetilmektedir. Yeni bir deploy yaparken:

1. Vercel Dashboard'a gidin
2. Proje ayarlarına girin
3. "Settings" > "Environment Variables" bölümünden gerekli değişkenleri ekleyin
4. Değişiklikleri kaydedip yeniden deploy edin

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
