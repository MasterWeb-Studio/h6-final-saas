import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-28T15:08:23.816Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Flowbase",
    "tagline": "Ekibinizin ihtiyacı olan her şey, tek platformda.",
    "description": "Flowbase ile görev takibi, takım iletişimi ve iş akışı yönetimini tek platformda birleştirin. 14 gün ücretsiz deneyin.",
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
        "label": "Fiyatlandırma",
        "href": "/pricing"
      },
      {
        "label": "İletişim",
        "href": "/contact"
      }
    ],
    "footer": {
      "about": "Flowbase, büyüyen ekiplerin daha akıllı çalışmasını sağlayan B2B SaaS platformudur. Görev takibinden takım iletişimine her şey tek yerde.",
      "columns": [
        {
          "title": "Ürün",
          "links": [
            {
              "label": "Özellikler",
              "href": "/services"
            },
            {
              "label": "Fiyatlandırma",
              "href": "/pricing"
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
            }
          ]
        }
      ],
      "copyright": "© 2026 Flowbase. Tüm hakları saklıdır.",
      "social": [
        {
          "platform": "linkedin",
          "url": "https://linkedin.com/company/nexus"
        },
        {
          "platform": "twitter",
          "url": "https://twitter.com/nexusapp"
        }
      ]
    }
  },
  "pages": [
    {
      "slug": "home",
      "title": "Ana Sayfa",
      "metaTitle": "Ekip Yönetimi ve Görev Takip Platformu",
      "metaDescription": "Flowbase ile görev takibi, takım iletişimi ve iş akışı yönetimini tek platformda birleştirin. 14 gün ücretsiz deneyin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibiniz en iyi işini Nexus'ta yapar",
          "subheadline": "Görev takibinden ekip iletişimine, tüm iş akışınız tek yerde. Kurulumu dakikalar alır.",
          "primaryCta": {
            "label": "14 Gün Ücretsiz Başla",
            "href": "/pricing"
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
              "title": "Görev Takibi Kolaylaşır",
              "description": "Projeleri, görevleri ve son tarihleri tek panelden yönetin. Hiçbir şey gözden kaçmaz."
            },
            {
              "icon": "MessageSquare",
              "title": "Takım İletişimi Güçlenir",
              "description": "Kanal bazlı mesajlaşma ve anlık bildirimlerle ekibiniz her zaman senkronda kalır."
            },
            {
              "icon": "Zap",
              "title": "İş Akışı Hızlanır",
              "description": "Yapay zeka destekli önerilerle tekrarlayan adımları otomatikleştirin, odağınızı koruyun."
            },
            {
              "icon": "BarChart",
              "title": "İlerlemeyi Anlık Görün",
              "description": "Gerçek zamanlı raporlar ve ekip performans özetleriyle kararlarınızı veriye dayandırın."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "about",
          "headline": "Ekipler için tasarlandı",
          "body": [
            "Flowbase, 10 ila 200 kişilik teknoloji ekiplerinin günlük operasyon yükünü azaltmak için geliştirildi. Farklı araçlar arasında geçiş yapmak yerine tek bir platformda odaklanın.",
            "Görev yönetiminden takım iletişimine, iş akışı otomasyonundan raporlamaya kadar ihtiyacınız olan her şey burada."
          ],
          "variant": "stats-side"
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
          "type": "module-home",
          "module": "products",
          "variant": "product-grid-3col",
          "headline": "Planlar",
          "description": "Ekibinizin büyüklüğüne göre en uygun planı seçin."
        },
        {
          "type": "module-home",
          "module": "references",
          "variant": "reference-logo-bar",
          "headline": "Güvendikleri Markalar"
        },
        {
          "type": "module-home",
          "module": "newsletter",
          "variant": "newsletter-card",
          "headline": "Ürün güncellemelerini ilk siz öğrenin",
          "description": "Ayda bir, yalnızca önemli değişiklikler. Gereksiz e-posta yok."
        },
        {
          "type": "cta",
          "headline": "Ekibiniz için daha akıllı bir başlangıç",
          "subheadline": "14 gün boyunca tüm özellikleri ücretsiz keşfedin. Kredi kartı istemiyoruz.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/pricing"
          },
          "secondaryCta": {
            "label": "Demo Talep Et",
            "href": "/contact"
          },
          "variant": "split-action"
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda — Flowbase'u Neden Yaptık",
      "metaDescription": "Flowbase'un hikayesini, misyonunu ve ekip verimliliğine bakış açısını keşfedin. Modern ekipler için modern araçlar.",
      "sections": [
        {
          "type": "hero",
          "headline": "Daha iyi çalışmak için bir neden vardı",
          "subheadline": "Dağınık araçlar, kopuk iletişim ve kaybolan görevler — Flowbase bunları çözmek için doğdu.",
          "variant": "centered"
        },
        {
          "type": "about",
          "headline": "Neden Yaptık?",
          "body": [
            "Flowbase, ekiplerin farklı uygulamalar arasında kaybolduğunu gözlemleyen bir grup yazılım geliştirici tarafından kuruldu. Amaç basitti: iş yönetimini karmaşıklaştırmak değil, sadeleştirmek.",
            "Bugün Flowbase; görev takibi, iletişim ve iş akışı otomasyonunu tek çatı altında sunan, büyüyen ekiplerin tercih ettiği bir platform."
          ],
          "variant": "stats-side"
        },
        {
          "type": "feature-grid",
          "headline": "Nasıl Çalışıyoruz?",
          "items": [
            {
              "icon": "Target",
              "title": "Odak Önce Gelir",
              "description": "Her özellik, ekiplerin odağını dağıtmadan üretken kalmasını sağlamak için tasarlandı."
            },
            {
              "icon": "Users",
              "title": "Birlikte Daha Güçlü",
              "description": "Takım dinamiklerini destekleyen araçlar; şeffaflık, hesap verebilirlik ve iş birliği için."
            },
            {
              "icon": "Rocket",
              "title": "Sürekli Gelişiyoruz",
              "description": "Kullanıcı geri bildirimleriyle şekillenen ürün yol haritası; her güncellemede yeni değer."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Flowbase'u ekibinizle deneyin",
          "subheadline": "14 günlük deneme süresinde tüm özellikler açık, kurulum gerektirmez.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/pricing"
          },
          "secondaryCta": {
            "label": "Bize Ulaşın",
            "href": "/contact"
          },
          "variant": "split-action"
        }
      ]
    },
    {
      "slug": "services",
      "title": "Özellikler",
      "metaTitle": "Özellikler — Görev Takibi ve Takım İletişimi",
      "metaDescription": "Flowbase'un görev yönetimi, takım iletişimi, otomasyon ve raporlama özelliklerini keşfedin. Ekibiniz için tek platform.",
      "sections": [
        {
          "type": "hero",
          "headline": "Her ekibin ihtiyacı, tek platformda",
          "subheadline": "Görev takibinden iş akışı otomasyonuna, Flowbase ekibinizin tüm operasyonunu kapsar.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Temel Özellikler",
          "items": [
            {
              "title": "Görev ve Proje Yönetimi",
              "description": "Kanban, liste veya takvim görünümüyle görevleri atayın, önceliklendirin ve son tarihleri takip edin. Ekibinizin ne üzerinde çalıştığını her zaman bilin."
            },
            {
              "title": "Takım İçi Mesajlaşma",
              "description": "Proje bazlı kanallar, bire bir mesajlar ve dosya paylaşımıyla tüm iletişiminizi Flowbase'ta tutun."
            },
            {
              "title": "İş Akışı Otomasyonu",
              "description": "Tekrarlayan adımları otomatikleştirin. Görev atama, bildirim ve durum güncellemelerini kurallara bağlayın."
            },
            {
              "title": "Raporlama ve Analitik",
              "description": "Ekip performansını, proje ilerlemesini ve teslim sürelerini gerçek zamanlı panellerle izleyin."
            }
          ],
          "variant": "cards"
        },
        {
          "type": "cta",
          "headline": "Tüm özellikleri ücretsiz keşfedin",
          "subheadline": "14 günlük deneme süresinde tüm özellikler açık, kredi kartı gerekmez.",
          "primaryCta": {
            "label": "Ücretsiz Dene",
            "href": "/pricing"
          },
          "secondaryCta": {
            "label": "Demo Talep Et",
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
      "metaTitle": "İletişim — Flowbase ile Konuşalım",
      "metaDescription": "Flowbase ekibiyle iletişime geçin. Demo talebi, teknik destek veya satış sorularınız için buradayız.",
      "sections": [
        {
          "type": "hero",
          "headline": "Konuşalım",
          "subheadline": "Demo talebi, teknik soru veya iş birliği — size en kısa sürede dönüyoruz.",
          "variant": "centered"
        },
        {
          "type": "contact",
          "headline": "Bize Ulaşın",
          "email": "hello@nexus.app",
          "formEnabled": true
        }
      ]
    },
    {
      "slug": "pricing",
      "title": "Fiyatlandırma",
      "metaTitle": "Fiyatlandırma — Ekibinize Uygun Plan",
      "metaDescription": "Flowbase'un Starter, Pro ve Enterprise planlarını karşılaştırın. 14 gün ücretsiz deneyin, kredi kartı gerekmez.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibinizin büyüklüğüne göre plan seçin",
          "subheadline": "Her plan 14 günlük ücretsiz denemeyle başlar. İstediğiniz zaman yükseltebilirsiniz.",
          "variant": "centered"
        },
        {
          "type": "feature-grid",
          "headline": "Her Planda Neler Var?",
          "items": [
            {
              "icon": "Shield",
              "title": "Güvenli Altyapı",
              "description": "Verileriniz şifreli ve güvende. Tüm planlarda standart güvenlik altyapısı."
            },
            {
              "icon": "Layers",
              "title": "Sınırsız Entegrasyon",
              "description": "Slack, Google Workspace ve daha fazlasıyla bağlantı kurun. Tüm planlarda açık."
            },
            {
              "icon": "Clock",
              "title": "Öncelikli Destek",
              "description": "Pro ve Enterprise planlarında iş günü içi yanıt garantisi ve canlı destek erişimi."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Hangi plan size uygun?",
          "subheadline": "Karar vermekte zorlanıyorsanız ekibimiz doğru planı bulmada yardımcı olur.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/pricing"
          },
          "secondaryCta": {
            "label": "Satış Ekibiyle Konuş",
            "href": "/contact"
          },
          "variant": "split-action"
        }
      ]
    }
  ]
};
