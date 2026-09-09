# MBSTS Prep - Diyanet Sinavi Hazirlik

Mesleki Bilgiler Seviye Tespit Sinavi (MBSTS) icin hazirlik uygulamasi.

## Ozellikleri

- **Web + Mobil (PWA)** - Telefon, tablet ve bilgisayarda calisir
- **Cevrimdisi Calisma** - Internet olmadan test cozun
- **Ana Ekrana Kurulum** - App store'a gerek olmadan uygulama gibi kurun
- **Soru Bankasi** - Kendi sorularinizi ekleyin, silin, ice/dis aktarin
- **Test Cozme** - Konuya gore, sureli/suresiz, rastgele/sirali
- **Kaynaklar** - 15+ DIB/TDV yayini, tek tikla indirme
- **Istatistikler** - Basari takibi, konu bazli analiz
- **Karanlik/Acik Tema** - Goz yorgunlugunu onler
- **Responsive** - Tum ekran boyutlarina uyumlu

## Mobil Kurulum

### Android (Chrome)
1. Uygulamayi tarayicida acin
2. Menu (⋮) → "Ana ekrana ekle" veya "Uygulamayi yukle"
3. Kurulumu onaylayin

### iPhone/iPad (Safari)
1. Uygulamayi Safari'de acin
2. Paylas (⬆️) → "Ana Ekrana Ekle"
3. "Ekle" butonuna basin

### Windows (Edge/Chrome)
1. Menu (⋯) → "Uygulamalar" → "Bu siteyi uygulama olarak yukle"

## 2026 Sinav Takvimi

| Tarih | Etkinlik |
|-------|----------|
| 11-19 Subat | Basvuru |
| 29 Mart | Sinav |
| 16 Nisan | Sonuc |

## Soru Dagilimi (60 Soru)

| Konu | Soru |
|------|------|
| Kur'an Bilgisi | 7 |
| Tefsir | 7 |
| Akaid ve Kelam | 7 |
| Fikih ve Ilmihal | 20 |
| Hadis | 7 |
| Siyer ve Islam Tarihi | 7 |
| Dinler ve Mezhepler | 5 |

## Kaynaklar

Tum kaynak kitaplar asagidaki linklerden ucretsiz indirilebilir:

- [Tum DIB Yayinlari](https://archive.org/details/diyanet-dib-yayinlari) (3.8 GB)
- [Kur'an Kutuphanesi](https://archive.org/details/diyanet-kuran-kitapligi) (40+ Kitap)
- [Hadis Kutuphanesi](https://archive.org/details/HadisKitapligi) (143+ Kitap)
- [Islam Ansiklopedisi](https://archive.org/details/TDV_IslamAnsiklopedisi1-44) (44 Cilt)

## Kurulum

```bash
git clone https://github.com/KULLANICI_ADI/mbsts-app.git
cd mbsts-app
# index.html dosyasini tarayicida acin
```

## Teknoloji

- Vanilla HTML/CSS/JavaScript
- PWA (Progressive Web App) - manifest.json + service worker
- localStorage ile veri saklama
- Cevrimdisi destegi (service worker cache)
