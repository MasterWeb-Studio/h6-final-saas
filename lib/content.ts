import type { ContentPlan } from './content-types';

// Bu dosya frontend-builder tarafından güncellendi (polish sonrası).
// Son güncelleme: 2026-04-27T14:21:18.334Z
export const content: ContentPlan = {
  "meta": {
    "companyName": "Nexus",
    "tagline": "Ekibinizin iş akışını tek platformda toplayın",
    "description": "Nexus ile görev takibi, ekip iletişimi ve iş yönetimini tek platformda birleştirin. 14 gün ücretsiz deneyin.",
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
      "about": "Nexus, dağınık iş süreçlerini tek akıcı platformda toplayan modern B2B SaaS çözümüdür. Ekipler daha hızlı düşünür, planlar ve üretir.",
      "columns": [
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
      "copyright": "© 2026 Nexus. Tüm hakları saklıdır.",
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
      "metaTitle": "İş Yönetimi ve Ekip İletişimi — Tek Platform",
      "metaDescription": "Nexus ile görev takibi, ekip iletişimi ve iş yönetimini tek platformda birleştirin. 14 gün ücretsiz deneyin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibiniz her gün biraz daha hızlı çalışır",
          "subheadline": "Görev takibi, iletişim ve iş akışları tek yerde. Kurulum yok, öğrenme eğrisi yok — sadece iş.",
          "primaryCta": {
            "label": "14 Gün Ücretsiz Başla",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Özellikleri Keşfet",
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
          "headline": "Neden Nexus?",
          "items": [
            {
              "icon": "CheckCircle",
              "title": "Görevleri Takip Edin",
              "description": "Kimin ne yaptığını anlık görün. Öncelikleri belirleyin, teslim tarihlerini kaçırmayın."
            },
            {
              "icon": "MessageSquare",
              "title": "Ekiple İletişim Kurun",
              "description": "Dağınık e-postalar yerine bağlama dayalı mesajlaşma — doğru konuşma, doğru yerde."
            },
            {
              "icon": "Zap",
              "title": "İş Akışını Hızlandırın",
              "description": "Tekrarlayan süreçleri otomatikleştirin, ekibinizin enerjisini asıl işe yönlendirin."
            },
            {
              "icon": "Layers",
              "title": "Her Şey Bir Arada",
              "description": "Proje yönetimi, görev listesi ve ekip takvimi — tek ekranda, dağınıklık yok."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "about",
          "headline": "Neden Nexus'u Bulduk",
          "body": [
            "Hızlı büyüyen ekipler farklı araçlar arasında kaybolur — bir yerde görev, başka yerde mesaj, başka yerde takvim. Nexus bu dağınıklığı ortadan kaldırmak için tasarlandı.",
            "Startup ve KOBİ ekiplerine odaklanıyoruz: kurulum karmaşası yok, öğrenme eğrisi minimal, fayda anında hissedilir."
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
          "type": "module-home",
          "module": "newsletter",
          "variant": "newsletter-card",
          "headline": "Ürün güncellemelerini ilk siz öğrenin",
          "description": "Ayda bir, yalnızca önemli değişiklikler. Gereksiz e-posta yok."
        },
        {
          "type": "cta",
          "headline": "Ekibiniz hazır, platform da öyle",
          "subheadline": "14 gün ücretsiz kullanın — kurulum dakikalar içinde, kredi kartı gerekmez.",
          "primaryCta": {
            "label": "Ücretsiz Başlayın",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Demo Talep Edin",
            "href": "/contact"
          },
          "variant": "split-action"
        }
      ]
    },
    {
      "slug": "about",
      "title": "Hakkımızda",
      "metaTitle": "Hakkımızda — Nexus'un Hikayesi",
      "metaDescription": "Nexus'un neden kurulduğunu, ekiplere nasıl değer kattığını ve ürün felsefemizi öğrenin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Dağınık araçlara son",
          "subheadline": "Ekiplerin gerçekten ihtiyaç duyduğu platformu inşa ediyoruz — sade, hızlı, güçlü.",
          "variant": "centered",
          "image": {
            "type": "remote",
            "url": "https://images.unsplash.com/photo-1758873269117-d5845126928a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MzA1NTV8MHwxfHNlYXJjaHw4fHxzdGFydHVwJTIwdGVhbSUyMHdoaXRlYm9hcmQlMjBwbGFubmluZyUyMHNlc3Npb258ZW58MXwwfHx8MTc3NzI5OTY2OHww&ixlib=rb-4.1.0&q=80&w=1080",
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
          "headline": "Birlikte Daha Hızlı",
          "body": [
            "Nexus, ekiplerin birlikte düşünmesini, planlamasını ve üretmesini kolaylaştırmak için kuruldu. Karmaşık kurumsal yazılımların yerine geçen, gerçekten kullanılan bir platform olmayı hedefliyoruz.",
            "Ürünümüzü startup ve KOBİ ekiplerinin geri bildirimleriyle şekillendiriyoruz. Her özellik bir gerçek problemi çözer — dolgu değil, fayda."
          ],
          "variant": "text-only"
        },
        {
          "type": "feature-grid",
          "headline": "Çalışma Biçimimiz",
          "items": [
            {
              "icon": "Target",
              "title": "Kullanıcı Odaklı",
              "description": "Her karar gerçek ekip geri bildirimiyle alınır. Varsayım değil, gözlem."
            },
            {
              "icon": "Rocket",
              "title": "Hızlı Teslimat",
              "description": "Küçük ve sık güncellemeler — ekibiniz her zaman en iyi versiyonu kullanır."
            },
            {
              "icon": "Shield",
              "title": "Güvenilir Altyapı",
              "description": "Verileriniz güvende, platform kesintisiz çalışır. Altyapı endişesi yok."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Nexus'u ekibinizle deneyin",
          "subheadline": "14 gün boyunca tüm özelliklere ücretsiz erişin.",
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
      "metaTitle": "Özellikler — İş Yönetimi ve Ekip İletişimi",
      "metaDescription": "Nexus'un görev takibi, ekip iletişimi, iş akışı otomasyonu ve raporlama özelliklerini keşfedin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibinizin ihtiyacı olan her şey",
          "subheadline": "Görev yönetiminden ekip iletişimine, otomasyon araçlarından raporlamaya kadar tek çatı altında.",
          "variant": "centered"
        },
        {
          "type": "services",
          "headline": "Temel Özellikler",
          "items": [
            {
              "title": "Görev ve Proje Yönetimi",
              "description": "Görevleri oluşturun, atayın ve önceliklendirin. Proje ilerlemesini anlık takip edin, teslim tarihlerini kaçırmayın."
            },
            {
              "title": "Bağlama Dayalı İletişim",
              "description": "Mesajlaşmayı görev ve projelere bağlayın. Hangi konuşmanın nereye ait olduğunu her zaman bilin."
            },
            {
              "title": "İş Akışı Otomasyonu",
              "description": "Tekrarlayan adımları otomatikleştirin. Ekibinizin zamanını manuel işlemler yerine asıl işe harcamasını sağlayın."
            },
            {
              "title": "Raporlama ve Görünürlük",
              "description": "Ekip performansını ve proje ilerlemesini net raporlarla takip edin. Yöneticiler için anlık özet görünümü."
            }
          ],
          "variant": "cards"
        },
        {
          "type": "cta",
          "headline": "Tüm özellikleri 14 gün deneyin",
          "subheadline": "Kredi kartı gerekmez. Kurulum dakikalar içinde tamamlanır.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
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
      "metaTitle": "İletişim — Nexus ile Görüşün",
      "metaDescription": "Nexus ekibiyle iletişime geçin. Demo talep edin veya sorularınızı iletin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Konuşalım",
          "subheadline": "Demo talep edin ya da aklınızdaki soruları sorun — size dönelim.",
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
      "metaDescription": "Nexus fiyatlandırma planlarını inceleyin. Ücretsiz deneme ile başlayın, büyüdükçe ölçeklendirin.",
      "sections": [
        {
          "type": "hero",
          "headline": "Ekibinize uygun planı seçin",
          "subheadline": "Küçük ekipten büyüyen yapılara esnek fiyatlandırma. 14 gün ücretsiz deneyin.",
          "primaryCta": {
            "label": "Ücretsiz Başla",
            "href": "/contact"
          },
          "variant": "centered"
        },
        {
          "type": "feature-grid",
          "headline": "Her Planda Neler Var?",
          "items": [
            {
              "icon": "CheckCircle",
              "title": "Sınırsız Görev",
              "description": "Tüm planlarda görev ve proje sayısında sınır yok. Ekibiniz büyüdükçe platform büyür."
            },
            {
              "icon": "Shield",
              "title": "Güvenli Veri Depolama",
              "description": "Verileriniz şifreli ve güvende. Tüm planlarda standart güvenlik altyapısı dahil."
            },
            {
              "icon": "Users",
              "title": "Ekip Yönetimi",
              "description": "Rol bazlı erişim, davet yönetimi ve ekip görünürlüğü her planda mevcut."
            }
          ],
          "variant": "three-col"
        },
        {
          "type": "cta",
          "headline": "Hemen başlayın, sonra karar verin",
          "subheadline": "14 günlük ücretsiz deneme süresinde tüm özelliklere erişin.",
          "primaryCta": {
            "label": "Ücretsiz Dene",
            "href": "/contact"
          },
          "secondaryCta": {
            "label": "Planları İncele",
            "href": "/pricing"
          },
          "variant": "split-action"
        }
      ]
    }
  ]
};
