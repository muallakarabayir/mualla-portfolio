# Mualla Karabayır · Portföy

React + Vite ile yazılmış kişisel portföy sitesi. Üç tema içerir: **Sakura** (varsayılan), **Beyaz Pembe** ve **Siyah Pembe**. Seçilen tema tarayıcıda hatırlanır.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # yayın için dist/ klasörü oluşturur
npm run preview  # build edilmiş hâli yerelde gösterir
```

Node.js 18 veya üzeri gerekir.

## İçeriği güncelleme

Tüm metinler `src/data.js` dosyasında. Yeni proje, deneyim veya sertifika eklemek için sadece bu dosyayı düzenlemen yeterli. Proje sonuçlarında `[[+%80]]` şeklinde yazılan kısımlar vurgulu metrik olarak görünür.

## Yapı

```
src/
  data.js            içerik
  styles.css         renk temaları, yazı tipleri, responsive kurallar
  App.jsx            sayfa düzeni
  hooks/             tema seçimi ve e-posta kopyalama
  components/        Nav, Hero, Metrics, Projects, Experience, Skills, Education, Footer, Petals, Branch
```

Temaların renkleri `styles.css` dosyasının başındaki CSS değişkenlerinde tanımlı.

## Yayınlama

**Vercel:** Projeyi GitHub'a yükle, vercel.com'da "New Project" ile depoyu seç. Vite otomatik algılanır.

**Netlify:** Build komutu `npm run build`, yayın klasörü `dist`.

**GitHub Pages:** `vite.config.js` içine `base: '/depo-adi/'` ekleyip `dist` klasörünü yayınla.
