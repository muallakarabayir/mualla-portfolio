// Portföydeki tüm içerik burada. Metni güncellemek için sadece bu dosyayı düzenle.

export const profile = {
  name: 'Mualla Karabayır',
  title: 'Geliştirici',
  titleAccent: 'Full-Stack',
  status: 'Yeni fırsatlara açık · İstanbul',
  lead:
    'React, React Native, FastAPI ve PostgreSQL ile uçtan uca, üretime alınmış sistemler geliştiriyorum. RAG tabanlı yapay zekâ ürünleri, gerçek zamanlı uygulamalar ve bulut dağıtımı üzerine çalışıyorum.',
  email: 'muallakrbyr@gmail.com',
  github: 'https://github.com/muallakarabayir',
  linkedin: 'https://www.linkedin.com/in/mualla-karabay%C4%B1r-565a82219/',',
}

export const stack = [
  ['frontend', 'React, React Native, TypeScript'],
  ['backend', 'Python, FastAPI, WebSocket'],
  ['veri', 'PostgreSQL, Redis, Qdrant'],
  ['ai', 'RAG, OpenAI, Gemini'],
  ['altyapı', 'AWS, Docker, Railway'],
]

export const metrics = [
  { value: '80', unit: '%', label: 'veri erişim hızında artış · KPSS Platform' },
  { value: '35', unit: '%', label: 'daha az token kullanımı · RAG sohbet botu' },
  { value: '2', unit: ' mağaza', label: "Play Store ve App Store'da beta yayın" },
]

// Metin içinde [[...]] ile işaretlenen kısımlar yeşil metrik vurgusu olarak gösterilir.
export const projects = [
  {
    name: 'KPSS Yardımcı Platform',
    role: 'Kurucu Geliştirici',
    date: 'Oca 2026 – Günümüz',
    badge: 'Canlı · Beta',
    featured: true,
    problem: 'Adayların sınava etkileşimli ve motive edici biçimde hazırlanabileceği bir mobil platform yoktu.',
    solution:
      "WebSocket tabanlı düşük gecikmeli çok oyunculu yarışma motoru ve yapay zekâ destekli soru üretme modülü. Docker ile Railway'e alındı, EAS Build ile Android/iOS dağıtımı.",
    result:
      "joinedload yerine COUNT() kullanan optimize bir /dashboard endpoint'i ve iki katmanlı cache ile veri erişim hızında [[+%80]].",
    tags: ['React Native', 'FastAPI', 'WebSocket', 'PostgreSQL', 'Docker', 'Railway', 'EAS Build'],
  },
  {
    name: 'OfficeMind · Kurumsal Bilgi Ajanı',
    role: 'Kişisel Proje',
    date: 'Eyl 2026 – Devam ediyor',
    problem: 'Şirket içi dokümanlara erişim ve rutin destek talepleri (ticket, bilgilendirme maili) elle yürüdüğü için yavaştı.',
    solution:
      'Slack üzerinden çalışan, hibrit RAG (semantik + BM25) ve niyet tespiti yapan bir ajan. Jira ve Gmail entegrasyonuyla onaylı otomatik eylemler.',
    result: 'Kaynak referanslı yanıt zorunluluğu ve her eylemden önce kullanıcı onayı ile halüsinasyonu azaltan güvenli bir akış.',
    tags: ['Python', 'Qdrant', 'Gemini API', 'Slack Bolt', 'Jira REST', 'SMTP'],
  },
  {
    name: 'Yapay Zekâ Destekli Sohbet Botu Platformu',
    role: 'Aris888 Metaverse Company',
    date: '2025',
    problem: 'PDF ve belgelerden hızlı, yüksek doğrulukla bilgi çeken kurumsal bir sohbet botu gerekiyordu.',
    solution:
      'RAG mimarisi ve vektör veritabanı ile çok botlu web platformu. JWT kimlik doğrulama, WebSocket ile gerçek zamanlı iletişim, AWS EC2/S3 üzerinde production.',
    result: "Modele yalnızca ilgili chunk'lar gönderilerek token kullanımı [[−%35]]; async endpoint'lerle performans [[+%20]].",
    tags: ['FastAPI', 'OpenAI API', 'React', 'JWT', 'AWS EC2/S3'],
  },
  {
    name: 'ROS · Rezervasyon Bazlı Otobüs Sistemi',
    role: 'Bitirme Projesi · Sakarya Üniversitesi',
    date: '2025',
    problem: 'Gerçek zamanlı konum ve zaman verisine göre koltuk rezervasyonu yapılabilecek bir sistem eksikti.',
    solution:
      'React Native ile çapraz platform uygulama, Python ve PostgreSQL backend, Clerk ile kimlik doğrulama, Zustand ile durum yönetimi.',
    result: 'Rezervasyon çakışmaları önlenerek hızlı ve öngörülebilir bir kullanıcı deneyimi.',
    tags: ['React Native', 'Python', 'PostgreSQL', 'Clerk', 'Zustand'],
  },
  {
    name: 'Türkçe Sahte Haber Tespiti',
    role: 'Kişisel Proje · NLP',
    date: '2025',
    problem: 'Türkçe haber metinlerinde sahte içeriğin otomatik olarak tespit edilmesi.',
    solution: "Teyit.org verileriyle metin temizleme pipeline'ı, TF-IDF + Logistic Regression modeli.",
    resultLabel: 'Deney',
    result: 'DistilBERT ile transformer tabanlı bir model karşılaştırma için denendi.',
    tags: ['scikit-learn', 'HuggingFace', 'pandas', 'NLTK'],
  },
]

export const experience = [
  {
    when: 'Oca – Şub 2026',
    title: 'Proje Yönetimi Stajyeri',
    company: 'SCA Kariyer Merkezi',
    points: [
      'PID ve Gantt şemalarıyla zamanlama ve kaynak planlaması yapıldı, proje yaşam döngüleri uçtan uca yönetildi.',
      'Yapay zekâ odaklı girişimlerde Bilişim Hukuku ve KVKK/GDPR uyumluluğu denetlendi.',
    ],
  },
  {
    when: 'May – Eki 2025',
    title: 'Yazılım Geliştirme Stajyeri',
    company: 'Aris888 Metaverse Company',
    points: [
      'Vektör veritabanı ve semantik arama ile bir hukuk botu platformu geliştirilip canlıya alındı.',
      'API tasarımı, yapay zekâ servis entegrasyonları ve arayüz iyileştirmelerinde backend ve frontend tarafında çalışıldı.',
      'Python, FastAPI, PostgreSQL, OpenAI API ve React ile doküman erişim hızı optimize edildi.',
    ],
  },
  {
    when: 'Haz – Eki 2024',
    title: 'Work and Travel Katılımcısı',
    company: 'ABD',
    points: [
      'Barista, resepsiyon ve komi pozisyonlarında, yüksek tempolu ve çok kültürlü ortamlarda İngilizce iletişim deneyimi.',
    ],
  },
]

// primary: dolu vurgulu etiketler, other: çerçeveli etiketler
export const skills = [
  { group: 'Diller', primary: ['Python', 'TypeScript', 'JavaScript'], other: ['C++', 'Java', 'C#'] },
  { group: 'Bulut ve Altyapı', primary: ['AWS EC2/S3', 'Docker', 'Railway'], other: ['CI/CD', 'Cloudflare'] },
  { group: 'Veritabanları', primary: ['PostgreSQL', 'Redis', 'Qdrant'], other: ['Firebase', 'Firestore'] },
  { group: 'Network', primary: [], other: ['TCP/IP', 'DNS', 'DHCP', 'Sorun giderme'] },
  { group: 'Araçlar', primary: [], other: ['Git / GitHub', 'Postman', 'JWT', 'Node.js'] },
  { group: 'Süreç ve Uyumluluk', primary: [], other: ['Agile', 'Gantt / PID', 'KVKK / GDPR', 'İngilizce B2'] },
]

export const education = {
  degree: 'Bilgisayar Mühendisliği Lisans',
  school: 'Sakarya Üniversitesi',
  years: '2021 – 2025',
  certs: [
    ['Networking Basics · Cisco Networking Academy', '2026'],
    ['LLM ile Sesli Asistan Atölyesi · BTK', '2026'],
    ['Derin Öğrenme ile Görüntü İşleme · BTK', '2026'],
    ['DevOps Çözümleri (Jenkins) · BTK', '2026'],
    ['Çevik Proje Yönetimi · BTK', '2026'],
    ['Proje Yönetim Stajı · SCA Social', '2026'],
    ['Google Cloud ile Bulut Bilişim · BTK', '—'],
    ['SAP ERP Eğitim Seti · Udemy', '—'],
    ['English Path Dil Okulu, Dubai · B2', '—'],
  ],
}
