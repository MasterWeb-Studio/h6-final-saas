import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-21T21:47:52.526Z
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
        "label": "Özellikler",
        "href": "/services"
      },
      {
        "label": "Hakkımızda",
        "href": "/about"
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
      "about": "Flowbase, modern ekiplerin daha hızlı çalışması için görev yönetimi ve iletişimi tek çatı altında toplar. Kurulum yok, karmaşıklık yok.",
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
      "metaTitle": "Flowbase — Ekip İş Yönetimi ve İletişim Platformu",
      "metaDescription": "Görev takibi ve takım iletişimini tek yerde yönet. Flowbase ile ekibini hızlandır. 14 gün ücretsiz, kart gerekmez.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibinin odağı, dağılmadan kalır.",
          "subheadline": "Görevler, sohbetler, güncellemeler — tek platformda akar. Sabah açarsın, ekip nerede bilirsin.",
          "primaryCta": {
            "label": "14 Gün Ücretsiz Dene",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Nasıl Çalışır?",
            "href": "/services"
          },
          "variant": "centered",
          "image": {
            "type": "placeholder",
            "alt": "modern office workspace laptop team collaboration"
          }
        },
        {
          "type": "feature-grid",
          "headline": "Neden Flowbase?",
          "items": [
            {
              "icon": "CheckCircle",
              "title": "Görevler, net ve izlenebilir",
              "description": "Her görevi atayın, önceliklendirin ve takip edin. Kimin ne yaptığını her zaman bilin."
            },
            {
              "icon": "MessageSquare",
              "title": "İletişim, bağlamında kal",
              "description": "Sohbetler doğrudan görevlerin yanında. E-posta zincirlerine son."
            },
            {
              "icon": "Zap",
              "title": "Kurulum değil, kullanım",
              "description": "Dakikalar içinde ekibini davet et, hemen çalışmaya başla."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "about",
          "headline": "Neden bunu yaptık?",
          "body": [
            "Flowbase, ekiplerin gereksiz toplantılar ve dağınık araçlar arasında kaybolduğunu gördükten sonra kuruldu. Görev yönetimi ve iletişim birbirinden kopuk olunca iş de kopuyor.",
            "Tek bir akıcı deneyimde her şeyi bir araya getirdik — çünkü iyi iş, iyi araçlarla başlar."
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
              "title": "Görev ve Proje Yönetimi",
              "description": "Projeler oluştur, görevleri atayın, son tarihleri belirle. Ekibin ilerleyişini tek ekranda gör."
            },
            {
              "title": "Takım İçi Mesajlaşma",
              "description": "Kanal bazlı sohbetler ve doğrudan mesajlar. Konuşmalar her zaman doğru bağlamda."
            },
            {
              "title": "Bildirim ve Öncelik Yönetimi",
              "description": "Önemli olanı öne çıkar, gürültüyü filtrele. Ekibin odaklanmasını sağla."
            },
            {
              "title": "Raporlama ve Ekip Görünürlüğü",
              "description": "Kim ne üzerinde çalışıyor? Haftalık ilerlemeyi otomatik özetle takip et."
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
          "headline": "Ekibinle hemen başla, sonucu gör.",
          "subheadline": "14 gün ücretsiz, kart gerekmez. Kurulum dakikalar alır, farkı ilk günden hissedersin.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
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
      "metaTitle": "Hakkımızda | Flowbase",
      "metaDescription": "Flowbase'in hikayesini ve vizyonunu öğren. Modern ekipler için iş yönetimini yeniden düşündük.",
      "sections": [
        {
          "type": "hero",
          "headline": "İşi kolaylaştırmak için buradayız.",
          "subheadline": "Dağınık araçlara değil, ekibine odaklanman için Flowbase'i inşa ettik.",
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.unsplash.com/photo-1758873269117-d5845126928a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzA1NTV8MHwxfHNlYXJjaHw0fHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdoaXRlYm9hcmQlMjBzdGFydHVwJTIwb2ZmaWNlfGVufDF8MHx8fDE3NzY4MDgwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            "alt": "Team collaborating around a whiteboard in an office.",
            "credit": "Vitaly Gariev / unsplash",
            "creditUrl": "https://unsplash.com/@silverkblack",
            "color": "#a6a6a6",
            "width": 3840,
            "height": 2160
          }
        },
        {
          "type": "about",
          "headline": "Bir sorundan doğdu.",
          "body": [
            "Flowbase, farklı araçlar arasında geçen zaman kaybını ve kopuk iletişimi çözmek için kuruldu. Modern ekipler daha az sürtünme, daha fazla netlik hak ediyor.",
            "Bugün, 10'dan 200'e kadar büyüyen startup ve scale-up ekipleri Flowbase ile işlerini yönetiyor — daha az toplantı, daha çok iş."
          ],
          "variant": "text-only"
        },
        {
          "type": "feature-grid",
          "headline": "Çalışma biçimimiz",
          "items": [
            {
              "icon": "Target",
              "title": "Odak önce gelir",
              "description": "Her özelliği ekiplerin gerçek iş akışından öğrenerek tasarlıyoruz."
            },
            {
              "icon": "Users",
              "title": "Ekip önce gelir",
              "description": "Bireysel araç değil, takım deneyimi. Her karar bu perspektiften çıkıyor."
            },
            {
              "icon": "Layers",
              "title": "Sadelik şart",
              "description": "Karmaşıklık eklemek kolay. Gereksizi çıkarmak — bunu seçiyoruz."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Ekibini Flowbase'e taşı.",
          "subheadline": "14 gün ücretsiz dene, farkı ekibinle birlikte gör.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Özellikler",
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
      "metaDescription": "Flowbase'in görev yönetimi, takım iletişimi, raporlama ve entegrasyon özelliklerini keşfet. Ekibine uygun araçlar.",
      "sections": [
        {
          "type": "hero",
          "headline": "Her ekip için doğru araçlar.",
          "subheadline": "Görev takibinden raporlamaya, iletişimden entegrasyonlara — ihtiyacın olan her şey burada.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Neler Yapabilirsin?",
          "items": [
            {
              "title": "Proje ve Görev Yönetimi",
              "description": "Kanban, liste veya takvim görünümüyle projelerini yönet. Görevleri atayın, önceliklendir, teslim tarihlerini belirle."
            },
            {
              "title": "Takım İletişimi",
              "description": "Kanal bazlı mesajlaşma ve görev yorumları. Konuşmalar her zaman doğru bağlamda — e-posta karmaşasına son."
            },
            {
              "title": "Raporlama ve Analizler",
              "description": "Ekibin haftalık ve aylık ilerleyişini otomatik raporlarla takip et. Hangi projenin nerede durduğunu tek bakışta gör."
            },
            {
              "title": "Entegrasyonlar",
              "description": "Slack, Google Drive ve daha fazlasıyla bağlan. Mevcut iş akışını bozmadan Flowbase'i ekibine entegre et."
            }
          ],
          "variant": "cards"
        },
        {
          "type": "cta",
          "headline": "Görmek mi istiyorsun?",
          "subheadline": "14 gün ücretsiz başla ya da bize bir demo talebi bırak.",
          "primaryCta": {
            "label": "Ücretsiz Dene",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Demo İste",
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
      "metaDescription": "Flowbase ekibiyle iletişime geç. Demo talebi, sorular veya destek için bize ulaş — 24 saat içinde dönüş yapıyoruz.",
      "sections": [
        {
          "type": "hero",
          "headline": "Konuşalım.",
          "subheadline": "Demo, soru veya sadece merhaba — 24 saat içinde dönüş yapıyoruz.",
          "variant": "centered"
        },
        {
          "type": "contact",
          "headline": "Bize Ulaşın",
          "email": "merhaba@flowbase.io",
          "formEnabled": true
        }
      ]
    },
    {
      "slug": "blog",
      "title": "Blog",
      "metaTitle": "Blog | Flowbase",
      "metaDescription": "Ekip yönetimi, iş akışı ve modern çalışma kültürü üzerine Flowbase'den içgörüler, rehberler ve güncellemeler.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekip yönetiminde ne işe yarıyor?",
          "subheadline": "Rehberler, ürün güncellemeleri ve modern çalışma kültürü üzerine içgörüler.",
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
          "headline": "Okurken de deneyebilirsin.",
          "subheadline": "14 gün ücretsiz başla, ekibinle birlikte farkı gör.",
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
    }
  ]
};
