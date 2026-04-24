import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-24T15:35:44.942Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Flowbase",
    "tagline": "Ekibinin akışını hızlandır.",
    "description": "Flowbase, görev takibi ve takım iletişimini tek platformda birleştiren modern ekipler için B2B SaaS çözümü. 14 gün ücretsiz dene.",
    "language": "tr",
    "navigation": [
      {
        "label": "Ana Sayfa",
        "href": "/"
      },
      {
        "label": "Hakkımızda",
        "href": "/about"
      },
      {
        "label": "Özellikler",
        "href": "/services"
      },
      {
        "label": "Blog",
        "href": "/blog"
      },
      {
        "label": "İletişim",
        "href": "/contact"
      }
    ],
    "footer": {
      "about": "Flowbase, modern ekiplerin iş akışını ve iletişimini tek platformda yönetmesini sağlar. Hafif, hızlı, güvenilir.",
      "columns": [
        {
          "title": "Ürün",
          "links": [
            {
              "label": "Özellikler",
              "href": "/services"
            },
            {
              "label": "Blog",
              "href": "/blog"
            }
          ]
        },
        {
          "title": "Şirket",
          "links": [
            {
              "label": "Hakkımızda",
              "href": "/about"
            },
            {
              "label": "İletişim",
              "href": "/contact"
            }
          ]
        },
        {
          "title": "Yasal",
          "links": [
            {
              "label": "Gizlilik Politikası",
              "href": "/gizlilik"
            },
            {
              "label": "KVKK",
              "href": "/kvkk"
            },
            {
              "label": "Çerez Politikası",
              "href": "/cerez"
            },
            {
              "label": "Kullanım Şartları",
              "href": "/kullanim-sartlari"
            }
          ]
        }
      ],
      "copyright": "© 2026 Flowbase. Tüm hakları saklıdır.",
      "social": [
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/flowbase"
        },
        {
          "platform": "twitter",
          "url": "https://twitter.com/flowbase"
        }
      ]
    }
  },
  "pages": [
    {
      "slug": "home",
      "title": "Ana Sayfa",
      "metaTitle": "Flowbase — Ekibinin İş Akışını Tek Yerde Yönet",
      "metaDescription": "Görev takibi, takım iletişimi ve proje yönetimi tek platformda. 14 gün ücretsiz dene, kart gerekmez.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibin odaklanır, iş kendiliğinden ilerler",
          "subheadline": "Görev takibi, takım sohbeti, proje akışı — tek platformda. Kurulum yok, öğrenme eğrisi yok.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Nasıl Çalışır?",
            "href": "/services"
          },
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.pexels.com/photos/5716007/pexels-photo-5716007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "alt": "Modern team collaboration in office with laptops and tablets focusing on charts and communication.",
            "credit": "Artem Podrez / pexels",
            "creditUrl": "https://www.pexels.com/@artempodrez",
            "color": "#8E847F",
            "width": 6144,
            "height": 3456
          }
        },
        {
          "type": "feature-grid",
          "headline": "Neden Flowbase?",
          "items": [
            {
              "icon": "CheckCircle",
              "title": "Görevler Kaybolmaz",
              "description": "Her görev atanır, takip edilir, teslim edilir. Hiçbir şey gözden kaçmaz."
            },
            {
              "icon": "MessageSquare",
              "title": "İletişim Görevle Birlikte",
              "description": "Tartışmalar doğrudan görev üzerinde — e-posta karmaşası biter."
            },
            {
              "icon": "Zap",
              "title": "Ekip Hızla Adapte Olur",
              "description": "Sezgisel arayüz sayesinde ekibin ilk günden verimli çalışmaya başlar."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "about",
          "headline": "Neden Flowbase'i Yaptık?",
          "body": [
            "Çoğu ekip birden fazla araç arasında kaybolur: biri görev için, biri sohbet için, biri dosya için. Flowbase bu dağınıklığı ortadan kaldırmak için kuruldu.",
            "10 ila 200 kişilik ekiplerin gerçek ihtiyaçlarından yola çıktık. Sonuç: hafif, odaklı ve ekibini yavaşlatmayan bir platform."
          ],
          "variant": "text-only"
        },
        {
          "type": "stats",
          "headline": "Rakamlarla",
          "items": [
            {
              "label": "Aktif kullanıcı",
              "value": "12.500+",
              "_isPlaceholder": true
            },
            {
              "label": "Ülke",
              "value": "34",
              "_isPlaceholder": true
            },
            {
              "label": "Uptime (son 12 ay)",
              "value": "%99.98",
              "_isPlaceholder": true
            },
            {
              "label": "Günlük API çağrısı",
              "value": "4M+",
              "_isPlaceholder": true
            }
          ]
        },
        {
          "type": "services",
          "headline": "Temel Özellikler",
          "items": [
            {
              "title": "Görev ve Proje Takibi",
              "description": "Kanban, liste veya takvim görünümüyle projeleri yönet. Öncelikleri belirle, son tarihleri takip et, ekibe dağıt."
            },
            {
              "title": "Takım İçi Mesajlaşma",
              "description": "Kanal bazlı sohbet ve doğrudan mesajlaşma. Konuşmalar görevlere bağlı kalır, kaybolmaz."
            },
            {
              "title": "Bildirim ve Hatırlatıcılar",
              "description": "Doğru kişiye, doğru zamanda bildirim. Gürültüsüz, odak bozmayan akıllı uyarılar."
            },
            {
              "title": "Raporlama ve Görünürlük",
              "description": "Ekip yükünü, ilerlemeyi ve tıkanan noktaları tek ekranda gör. Toplantı öncesi hazırlık biter."
            }
          ],
          "variant": "cards"
        },
        {
          "type": "testimonials",
          "headline": "Müşterilerimiz ne diyor",
          "items": [
            {
              "quote": "Entegrasyonu bir öğleden sonrada bitirdik; ertesi sabah ekip bize dönüp \"niye önceden kullanmıyorduk\" diye sordu.",
              "author": "Ceren B.",
              "role": "Büyüme lideri, orta ölçekli SaaS",
              "_isPlaceholder": true
            },
            {
              "quote": "Destek ekibi sadece soruyu cevaplamıyor, kullanımımızı iyileştirecek önerilerle geri dönüyor. Fark burada başlıyor.",
              "author": "Ege Ö.",
              "role": "Ürün yöneticisi",
              "_isPlaceholder": true
            },
            {
              "quote": "Veri tarafı şeffaf ve dışa aktarılabilir. Yıllardır lock-in endişesiyle baktığımız kategoride ilk rahat hissettiğimiz araç.",
              "author": "Serkan T.",
              "role": "CTO, fintech scale-up",
              "_isPlaceholder": true
            }
          ]
        },
        {
          "type": "cta",
          "headline": "Ekibinle daha hızlı ilerle",
          "subheadline": "14 gün ücretsiz dene. Kart istemiyoruz, sadece sonuç.",
          "primaryCta": {
            "label": "Ücretsiz Dene",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Özelliklere Bak",
            "href": "/services"
          },
          "variant": "split-action"
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda | Flowbase",
      "metaDescription": "Flowbase'in hikayesi: modern ekipler için iş yönetimini yeniden tasarlayan ekibi ve yaklaşımı tanıyın.",
      "sections": [
        {
          "type": "hero",
          "headline": "İş akışını tasarlayanlar",
          "subheadline": "Ekiplerin daha az araçla daha çok iş çıkarması için Flowbase'i kurduk.",
          "variant": "centered"
        },
        {
          "type": "about",
          "headline": "Hikayemiz",
          "body": [
            "Flowbase, dağınık araçlar arasında kaybolan ekiplerin sorununu çözmek için kuruldu. Kurucu ekip, operasyon ve ürün geliştirme deneyiminden yola çıkarak iş yönetimini sıfırdan tasarladı.",
            "Bugün onlarca startup ve scale-up ekibi Flowbase'i günlük iş akışının merkezine koyuyor. Hafif tutmak, odak bozmamak ve ekibin dilini konuşmak temel tasarım ilkemiz."
          ],
          "variant": "text-only"
        },
        {
          "type": "feature-grid",
          "headline": "Nasıl Çalışıyoruz?",
          "items": [
            {
              "icon": "Target",
              "title": "Odak Önce Gelir",
              "description": "Her özellik, ekibin dikkatini dağıtmadan işi ilerletmek için tasarlanır."
            },
            {
              "icon": "Users",
              "title": "Ekiple Birlikte Geliştiririz",
              "description": "Kullanıcı geri bildirimi ürün kararlarının merkezinde. Her sprint müşteri sesiyle şekillenir."
            },
            {
              "icon": "Layers",
              "title": "Basit Ama Güçlü",
              "description": "Karmaşık iş akışlarını sade bir arayüzde çözmek temel mühendislik prensiplerimizden biri."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Ekibine uygun mu? Dene ve gör.",
          "subheadline": "14 gün boyunca tüm özelliklere ücretsiz eriş.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Özellikleri İncele",
            "href": "/services"
          },
          "variant": "split-action"
        }
      ]
    },
    {
      "slug": "services",
      "title": "Özellikler",
      "metaTitle": "Özellikler | Flowbase",
      "metaDescription": "Flowbase'in görev takibi, takım iletişimi ve raporlama özelliklerini keşfet. Modern ekipler için tasarlandı.",
      "sections": [
        {
          "type": "hero",
          "headline": "Her şey tek platformda, fazlası yok",
          "subheadline": "Ekibinin ihtiyacı olan araçlar — fazlası değil, eksiği de değil.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Neler Yapabilirsin?",
          "items": [
            {
              "title": "Proje ve Görev Yönetimi",
              "description": "Kanban, liste ve takvim görünümleri arasında geçiş yap. Görevleri önceliklendir, atama yap, son tarihleri belirle."
            },
            {
              "title": "Takım İletişimi",
              "description": "Kanal bazlı mesajlaşma ve görev yorumları. Tartışmalar bağlamını kaybetmez; her sohbet ilgili görevin yanında durur."
            },
            {
              "title": "Akıllı Bildirimler",
              "description": "Sadece seni ilgilendiren bildirimler gelir. Gürültüyü sen kontrol edersin — platform seni değil, sen platformu yönetirsin."
            },
            {
              "title": "Ekip Raporları",
              "description": "Haftalık ilerleme, görev dağılımı ve tıkanan noktalar tek ekranda. Yöneticiler için net görünürlük, ekip için şeffaflık."
            }
          ],
          "variant": "cards"
        },
        {
          "type": "cta",
          "headline": "Kullanmadan karar vermek zor.",
          "subheadline": "14 gün boyunca tüm özellikleri ücretsiz dene.",
          "primaryCta": {
            "label": "Hemen Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Bize Ulaş",
            "href": "/contact"
          },
          "variant": "split-action"
        },
        {
          "type": "faq",
          "headline": "Sık Sorulan Sorular",
          "items": [
            {
              "question": "Ücretsiz deneme var mı?",
              "answer": "14 gün boyunca kredi kartı bilgisi istemeden deneyebilirsiniz. Süre sonunda ücretli bir plana geçmezseniz hesap sadece okunur moda düşer.",
              "_isPlaceholder": true
            },
            {
              "question": "Fiyatlandırma nasıl işliyor?",
              "answer": "Aktif kullanıcı başına aylık ücret. Yıllık ödemede %20 indirim; kurumsal planlarda özel fiyatlandırma mevcut.",
              "_isPlaceholder": true
            },
            {
              "question": "Hangi entegrasyonlarınız var?",
              "answer": "Slack, Notion, Linear, GitHub, Google Workspace ve Zapier doğrudan destekleniyor. REST API ve webhook altyapısı ile ek entegrasyonlar mümkün.",
              "_isPlaceholder": true
            },
            {
              "question": "Verilerim nerede tutuluyor?",
              "answer": "AB (Frankfurt) bölgesinde; istek halinde ABD bölgesine taşıma yapılabilir. Tüm veriler at-rest şifreli, yedekler 30 gün geçmişe kadar erişilebilir.",
              "_isPlaceholder": true
            },
            {
              "question": "Güvenlik sertifikalarınız neler?",
              "answer": "SOC 2 Type II, GDPR ve KVKK uyumlu; yıllık penetrasyon testi raporları istek üzerine paylaşılıyor.",
              "_isPlaceholder": true
            },
            {
              "question": "Vazgeçmek istersem verilerimi alabilir miyim?",
              "answer": "Evet. Hesap iptalinde verileriniz 30 gün boyunca CSV ve JSON formatında indirilebilir kalır; sonrasında güvenli şekilde silinir.",
              "_isPlaceholder": true
            }
          ]
        }
      ]
    },
    {
      "slug": "contact",
      "title": "İletişim",
      "metaTitle": "İletişim | Flowbase",
      "metaDescription": "Flowbase ekibiyle iletişime geç. Sorularını yanıtlayalım, demo ayarlayalım veya ücretsiz deneme başlatalım.",
      "sections": [
        {
          "type": "hero",
          "headline": "Konuşalım",
          "subheadline": "Soru, demo talebi veya geri bildirim — ekibimiz burada.",
          "variant": "centered"
        },
        {
          "type": "contact",
          "headline": "Bize Ulaş",
          "email": "hello@flowbase.io",
          "formEnabled": true
        }
      ]
    },
    {
      "slug": "blog",
      "title": "Blog",
      "metaTitle": "Blog | Flowbase",
      "metaDescription": "Ekip yönetimi, iş akışı ve üretkenlik üzerine Flowbase ekibinden içgörüler ve pratik rehberler.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekip yönetimi üzerine düşünceler",
          "subheadline": "İş akışı, iletişim ve üretkenlik hakkında kısa ve işe yarar yazılar.",
          "variant": "centered"
        },
        {
          "type": "blog",
          "headline": "Blog",
          "description": "Ürün ve mühendislik ekibimizden paylaşımlar.",
          "items": [
            {
              "title": "Kurumsal kullanıcılar için yeni denetim günlüğü",
              "summary": "Büyük organizasyonlardan gelen geri bildirimle, tüm kritik aksiyonları filtrelenebilir bir zaman çizelgesinde görüntüleyebileceğiniz yeni panel yayında.",
              "date": "2026-03-18",
              "category": "Ürün",
              "_isPlaceholder": true
            },
            {
              "title": "10 kat büyüyen ekipler için dokümantasyon stratejisi",
              "summary": "Hızlı büyüyen ekiplerde bilgi nasıl hızla kaybolur ve bu kaybı engellemek için üç basit kural.",
              "date": "2026-02-25",
              "category": "Pratik",
              "_isPlaceholder": true
            },
            {
              "title": "Postgres'i tercih etme nedenlerimiz",
              "summary": "Öncelik sırası değişmeyen bir veri katmanı için neden hâlâ Postgres seçiyoruz; ve ölçeklendirirken dikkat ettiğimiz üç şey.",
              "date": "2026-01-30",
              "category": "Mühendislik",
              "_isPlaceholder": true
            }
          ]
        },
        {
          "type": "cta",
          "headline": "Okudun, şimdi dene.",
          "subheadline": "Flowbase'i 14 gün boyunca ücretsiz kullan.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Özelliklere Bak",
            "href": "/services"
          },
          "variant": "split-action"
        }
      ]
    }
  ]
};
