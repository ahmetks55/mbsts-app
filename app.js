const SUBJECTS = {
    'kur-an-bilgisi': { name: "Kur'an Bilgisi", count: 7, color: '#1abc9c', icon: '📖' },
    'tefsir': { name: 'Tefsir', count: 7, color: '#3498db', icon: '📝' },
    'akaid-kelam': { name: 'Akaid ve Kelam', count: 7, color: '#9b59b6', icon: '💭' },
    'fikih-ilmihal': { name: 'Fikih ve Ilmihal', count: 20, color: '#e67e22', icon: '⚖️' },
    'hadis': { name: 'Hadis', count: 7, color: '#27ae60', icon: '📜' },
    'siyer': { name: 'Siyer ve Islam Tarihi', count: 7, color: '#e74c3c', icon: '🕌' },
    'dinler-tarihi': { name: 'Dinler ve Mezhepler', count: 5, color: '#34495e', icon: '🌍' }
};

const SOURCES = [
    { id: 1, title: "Kur'an Yolu Türkçe Meal ve Tefsiri", author: "Komisyon (Hayreddin Karaman vd.)", pub: "DİB", year: "2005", category: "tefsir", scrollTo: "kurAnYoluGrid", fileSize: "PDF" },
    { id: 2, title: "İlmihal (I. ve II. Cilt)", author: "Komisyon", pub: "TDV", year: "2003", category: "fikih", scrollTo: "ilmihalGrid", fileSize: "2 Cilt PDF" },
    { id: 3, title: "Tefsir Usulü", author: "Prof. Dr. İsmail Cerrahoğlu", pub: "TDV", year: "1988", category: "tefsir", url: "https://archive.org/download/ismail-cerrahoglu-tefsir-usulu/Ismail-Cerrahoglu-Tefsir-Usulu.pdf", fileSize: "PDF" },
    { id: 5, title: "Hadis Tarihi", author: "Prof. Dr. Talat Koçyiğit", pub: "TDV", year: "1994", category: "hadis", url: "https://archive.org/download/kurani-hakimve-meali-kerim-01/Hadis%20Tarihi%20tkocy%C4%B1y%C4%B1t.pdf", fileSize: "PDF" },
    { id: 6, title: "Riyazü's-Sâlihîn", author: "Ebû Zekeriyya en-Nevevî", pub: "DİB", year: "2010", category: "hadis", url: "https://archive.org/download/riyazus_salihin_202009/Riyazus_Salihin_tam_2_yerimli.pdf", fileSize: "PDF" },
    { id: 7, title: "Hz. Muhammed ve Evrensel Mesajı", author: "Prof. Dr. İbrahim Sarıçam", pub: "DİB", year: "1992", category: "siyer", url: "https://archive.org/download/hazreti-muhammed-ve-evrensel-mesaji/Hazreti%20Muhammed%20ve%20Evrensel%20Mesaj%C4%B1.pdf", fileSize: "PDF" },
    { id: 8, title: "Dini Kavramlar Sözlüğü", author: "Komisyon (Fikret Karaman vd.)", pub: "DİB", year: "1992", category: "diger", url: "https://archive.org/download/serhul-ahlakil-adudiyye-taskopruzade/D%C3%AEn%C3%AE%20Kavramlar%20S%C3%B6zl%C3%BC%C4%9F%C3%BC%20Diyanet.pdf", fileSize: "PDF" },
    { id: 9, title: "Hac İlmihali", author: "DİB Yayınları", pub: "DİB", year: "2007", category: "fikih", url: "https://archive.org/download/diyanet-ilmihal-kitaplari/Hac_ilmihali_2007_yerimli.pdf", fileSize: "PDF" },
    { id: 10, title: "Fetvalar", author: "Din İşleri Yüksek Kurulu", pub: "DİB", year: "2015", category: "fikih", url: "https://archive.org/download/diyanet-ilmihal-kitaplari/Fetvalar_Diyanet-yerimli.pdf", fileSize: "PDF" }
];

const SAMPLE_QUESTIONS = [
    { id: 1, subject: 'kur-an-bilgisi', text: "Kur'an-ı Kerim'de toplam kac sure bulunmaktadir?", options: ["114", "110", "112", "116", "120"], correct: 0, explanation: "Kur'an-ı Kerim 114 sureden olusmaktadir." },
    { id: 2, subject: 'kur-an-bilgisi', text: "En uzun sure hangisidir?", options: ["Ali Imran", "Bakara", "Nisa", "Maide", "Yasin"], correct: 1, explanation: "Bakara Suresi 286 ayet ile en uzun suredir." },
    { id: 3, subject: 'tefsir', text: "Tefsir'in kelime anlami nedir?", options: ["Aciklama, yorumlama", "Okuma, tilavet", "Yazma, kayit", "Ogretme, vaaz", "Anlama, kavrama"], correct: 0, explanation: "Tefsir, Kur'an ayetlerini aciklama ve yorumlama demektir." },
    { id: 4, subject: 'akaid-kelam', text: "Islam'da imanin sartlari kac tanedir?", options: ["5", "6", "7", "4", "8"], correct: 1, explanation: "Imanin 6 sarti: Allah'a, Meleklere, Kitaplara, Peygamberlere, Ahiret gunune, Kadere iman." },
    { id: 5, subject: 'fikih-ilmihal', text: "Namazin farz olan vaciplerinden hangisi degildir?", options: ["Kibleye donmek", "Kiyam", "Kapali yerde kilmak", "Son oturus", "Kunut dualari"], correct: 2, explanation: "Namazin vaciplerinden biri kapali yerde kilmak degildir." },
    { id: 6, subject: 'hadis', text: "Hadis kitaplarinin en sahih olani hangisidir?", options: ["Buhtari", "Müslim", "Tirmizi", "Ibn Mace", "Ebu Davud"], correct: 0, explanation: "Buhtari, hadislerin sahihligi acisindan en ustun kabul edilen kitaptir." },
    { id: 7, subject: 'siyer', text: "Hz. Muhammed (sav) kac yasinda peygamber olmustur?", options: ["25", "30", "35", "40", "45"], correct: 3, explanation: "Hz. Muhammed (sav) 40 yasinda peygamber olmustur." },
    { id: 8, subject: 'dinler-tarihi', text: "Islam disindaki uc semavi din hangileridir?", options: ["Hristiyanlik, Yahudilik, Hinduizm", "Hristiyanlik, Yahudilik, Musevilik", "Budizm, Hristiyanlik, Yahudilik", "Zerdustluk, Hristiyanlik, Yahudilik", "Sihizm, Hristiyanlik, Yahudilik"], correct: 1, explanation: "Islam, Hristiyanlik ve Yahudilik (Musevilik) uc semavi dindir." },
    { id: 9, subject: 'kur-an-bilgisi', text: "Kur'an-ı Kerim'de en kisa sure hangisidir?", options: ["Kevser", "Nas", "Felak", "Kafirun", "Ihlas"], correct: 0, explanation: "Kevser Suresi 3 ayet ile en kisa suredir." },
    { id: 10, subject: 'tefsir', text: "Mutezilite mezhebinin tefsir yontemi nedir?", options: ["Kelam", "Rey", "Kelam ve Rey", "Tecdid", "Tevil"], correct: 2, explanation: "Mutezililer akla onem veren kelam ve rey yontemiyle tefsir yapmislaridir." },
    { id: 11, subject: 'akaid-kelam', text: "Kader imaninin sart olmasi hakkinda hangi gorus dogrudur?", options: ["Sart degildir", "Sarttir", "Farzdır", "Vaciptir", "Mekruhtur"], correct: 1, explanation: "Kader imanina inanmak imanin sartlarindan biridir." },
    { id: 12, subject: 'fikih-ilmihal', text: "Orucun farz sartlarindan biri nedir?", options: ["Niyet", "Sahur", "Iftar", "Teravih", "Vitir"], correct: 0, explanation: "Orucun farz sartlarindan biri niyet etmektir." },
    { id: 13, subject: 'hadis', text: "Kuds-i hadis ne demektir?", options: ["Hz. Peygamber'in sozleri", "Hz. Allah'in sozleri", "Meleklerin sozleri", "Sahabilerin sozleri", "Tabiin'in sozleri"], correct: 1, explanation: "Kuds-i hadis, Allah'in hadis kitaplarina alinan sozleridir." },
    { id: 14, subject: 'siyer', text: "Hijret'in yili hangi yildir?", options: ["610", "620", "622", "630", "632"], correct: 2, explanation: "Hijret 622 yilinda gerceklesmistir." },
    { id: 15, subject: 'dinler-tarihi', text: "Budizm'in kurucusu kimdir?", options: ["Konfucyus", "Buddha (Siddhartha Gautama)", "Lao Tzu", "Zerdust", "Krishna"], correct: 1, explanation: "Budizm Siddhartha Gautama tarafindan kurulmustur." },
    { id: 16, subject: 'kur-an-bilgisi', text: "Sure isimlerinin buyuk cogunlugunu neler olusturur?", options: ["Ayet isimleri", "Konu isimleri", "Harf isimleri", "Sahis isimleri", "Yer isimleri"], correct: 2, explanation: "Sure isimlerinin buyuk cogunlugunu harf isimleri olusturur." },
    { id: 17, subject: 'tefsir', text: "Zemahseri'nin tefsir eserinin adi nedir?", options: ["Tevkifat", "Kebir", "Kashshaf", "Ruhulmeani", "Esraruttevil"], correct: 2, explanation: "Zemahseri'nin meshur tefsir eseri Kashshaf'tir." },
    { id: 18, subject: 'fikih-ilmihal', text: "Zekatin nisab miqdari kac altindir?", options: ["60 gram", "72 gram", "80 gram", "90 gram", "100 gram"], correct: 2, explanation: "Zekatin nisab miqdari 80 gram (20 miskal) altindir." },
    { id: 19, subject: 'hadis', text: "Hadislerin senedinde zincir halindeki kisilere ne denir?", options: ["Metin", "Matn", "Isnad", "Derce", "Harf"], correct: 2, explanation: "Hadislerin kaynak kisiler zincirine isnad denir." },
    { id: 20, subject: 'siyer', text: "Bedir Savasi hangi yilda olmustur?", options: ["624", "625", "626", "627", "628"], correct: 0, explanation: "Bedir Savasi 624 yilinda olmustur." },
    { id: 21, subject: 'akaid-kelam', text: "Ehl-i Sünnet'in itikatta referans kaynagi nedir?", options: ["Kur'an", "Sünnet", "Kur'an ve Sünnet", "Icma", "Kiyas"], correct: 2, explanation: "Ehl-i Sünnet'in itikatta iki temel referansi Kur'an ve Sünnet'tir." },
    { id: 22, subject: 'fikih-ilmihal', text: "Teyemmum hangi durumlarda gecerlidir?", options: ["Su bulamayan", "Hasta olan", "Seferi olan", "Hepsi", "Sadece hasta"], correct: 3, explanation: "Teyemmum su bulamama, hastalik ve seferilik durumlarinda gecerlidir." },
    { id: 23, subject: 'dinler-tarihi', text: "Hristiyanlikta uc ilke hangileridir?", options: ["Ata, Ogul, Kutsal Ruh", "Allah, Melek, Kitap", "Baba, Ogul, Ruh", "Yaratici, Koruyucu, Bagislayici", "Güç, Bilgelik, Sevgi"], correct: 0, explanation: "Hristiyanlikta ucluluk inanci: Baba, Ogul ve Kutsal Ruh." },
    { id: 24, subject: 'kur-an-bilgisi', text: "Kur'an'da bir복rapper'den bahseden sure hangisidir?", options: ["Yasin", "Rahman", "Vakia", "Haqq", "Mülk"], correct: 2, explanation: "Vakia Suresi ahiret gunu ve cennet/cehennem hakkinda bilgi verir." },
    { id: 25, subject: 'tefsir', text: "Taberi tefsirinin tam adi nedir?", options: ["Camiul Beyan", "Tecmilul Beyan", "Jamiul Bayan an Ta'vil Ayil Kur'an", "Tefsirul Kebir", "Ruhul Meani"], correct: 2, explanation: "Taberi'nin tefsir eserinin tam adi Jamiul Bayan an Ta'vil Ayil Kur'an'dir." },
    { id: 26, subject: 'hadis', text: "Kütub-i Sitte hangi hadis kitaplarini kapsar?", options: ["4 kitap", "5 kitap", "6 kitap", "7 kitap", "9 kitap"], correct: 2, explanation: "Kütub-i Sitte 6 hadis kitabini kapsar." },
    { id: 27, subject: 'siyer', text: "Huneyn Savasi hangi yilda olmustur?", options: ["628", "629", "630", "631", "632"], correct: 2, explanation: "Huneyn Savasi 630 yilinda olmustur." },
    { id: 28, subject: 'fikih-ilmihal', text: "Haccin farzlarindan biri hangisidir?", options: ["Seyi", "Tavaf", "Safa-Marva", "Hilal", "Ihram"], correct: 3, explanation: "Haccin bes farzindan biri ihram giymektir." },
    { id: 29, subject: 'dinler-tarihi', text: "Yahudilikte Tevrat'in kitap sayisi kactir?", options: ["3", "4", "5", "6", "7"], correct: 2, explanation: "Tevrat 5 kitaptan olusmaktadir (Pentateuch)." },
    { id: 30, subject: 'kur-an-bilgisi', text: "Kur'an'da 'elif lam mim' ile baslayan sureler kac tanedir?", options: ["3", "4", "5", "6", "7"], correct: 2, explanation: "elif lam mim harfleri 5 surede gecer." },
    { id: 31, subject: 'tefsir', text: "Razi'nin tefsirinin meshur adi nedir?", options: ["Tefsirul Kebir", "Camiul Beyan", "Kebir", "Tebiyan", "Kebir"], correct: 0, explanation: "Razi'nin buyuk tefsiri Tefsirul Kebir olarak bilinir." },
    { id: 32, subject: 'akaid-kelam', text: "Ehl-i Beyt kimdir?", options: ["Hz. Muhammed'in ailesi", "Hz. Ali'nin cocuklari", "Hz. Peygamber'in kizi ve damadi", "Hz. Peygamber'in ailesi", "Hepsi"], correct: 4, explanation: "Ehl-i Beyt Hz. Peygamber'in ailesidir, hem Hz. Ali hem de Hz. Fatima ve cocuklarini kapsar." },
    { id: 33, subject: 'fikih-ilmihal', text: "Namazin farz hucreleri kac tanedir?", options: ["4", "5", "6", "7", "8"], correct: 2, explanation: "Namazin farz hucreleri 6 tanedir." },
    { id: 34, subject: 'hadis', text: "Müslim'in hadis kitabinin ozelligi nedir?", options: ["En uzun", "En sahih", "En kisa", "En eski", "En yakin"], correct: 1, explanation: "Müslim hadis kitabi sahihligi acisindan en ustun kitaplardan biridir." },
    { id: 35, subject: 'siyer', text: "Osmanli Devleti hangi tarihte kurulmustur?", options: ["1299", "1300", "1301", "1302", "1303"], correct: 0, explanation: "Osmanli Devleti 1299 yilinda kurulmustur." }
];

class MBSTSApp {
    constructor() {
        this.questions = this.loadFromStorage('mbsts_questions', SAMPLE_QUESTIONS);
        this.history = this.loadFromStorage('mbsts_history', []);
        this.quizState = null;
        this.timerInterval = null;
        this.theme = localStorage.getItem('mbsts_theme') || 'light';
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        this.applyTheme();
        this.setupEventListeners();
        this.renderSources();
        this.renderBank();
        this.renderStats();
        this.renderDashboard();
        this.loadExtraQuestions();
    }

    async loadExtraQuestions() {
        try {
            const urls = ['questions-2025.json', 'questions-ek.json', 'questions-2024.json', 'questions-2023.json', 'questions-2022.json', 'questions-2021.json', 'questions-2020.json', 'questions-2019.json', 'questions-2018.json', 'questions-2017.json', 'questions-2015.json', 'questions-2014.json', 'questions-2013.json', 'questions-2012.json', 'questions-2011.json', 'questions-2010.json'];
            const responses = await Promise.all(urls.map(u => fetch(u).catch(() => null)));
            const added = [];
            let replaced = false;
            const idMap = new Map(this.questions.map(q => [q.id, q]));
            for (const res of responses) {
                if (!res || !res.ok) continue;
                const extra = await res.json();
                for (const q of extra.map(qu => this.normalizeQuestion(qu))) {
                    if (idMap.has(q.id)) replaced = true; else added.push(q);
                    idMap.set(q.id, q);
                }
            }
            if (added.length > 0 || replaced) {
                this.questions = Array.from(idMap.values());
                this.saveToStorage('mbsts_questions', this.questions);
                console.log('[MBSTS] Extra questions loaded:', added.length, 'Total:', this.questions.length);
                this.renderBank();
                this.renderStats();
            } else {
                console.log('[MBSTS] No new extra questions found');
            }
        } catch (e) {
            console.error('[MBSTS] loadExtraQuestions error:', e);
        }
    }

    normalizeQuestion(q) {
        if (q.options && !Array.isArray(q.options)) {
            const optsObj = q.options;
            const order = ['A','B','C','D','E'];
            q.options = order.map(k => optsObj[k]).filter(v => v !== undefined);
        }
        if (typeof q.correct === 'string' && /^[A-E]$/.test(q.correct)) {
            q.correct = 'ABCDE'.indexOf(q.correct.toUpperCase());
        }
        q.id = q.id || Date.now() + Math.random();
        q.subject = q.subject || 'genel';
        q.text = q.text || '';
        q.options = q.options || [];
        q.correct = Number.isInteger(q.correct) ? q.correct : 0;
        q.explanation = q.explanation || '';
        q.year = q.year || new Date().getFullYear();
        q.source = q.source || `${q.year} MBSTS`;
        return q;
    }

    loadFromStorage(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) throw new Error('Not an array');
            const normalized = parsed.map(q => this.normalizeQuestion(q));
            console.log('[MBSTS] Loaded from storage:', key, normalized.length);
            return normalized;
        } catch (e) {
            console.warn('[MBSTS] loadFromStorage failed for', key, e);
            return fallback;
        }
    }

    saveToStorage(key, data) {
        try {
            const normalized = (Array.isArray(data) ? data : []).map(q => this.normalizeQuestion(q));
            localStorage.setItem(key, JSON.stringify(normalized));
            console.log('[MBSTS] Saved to storage:', key, normalized.length);
        } catch (e) {
            console.error('[MBSTS] saveToStorage failed for', key, e);
        }
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        document.getElementById('themeToggle').textContent = this.theme === 'dark' ? '☀️' : '🌙';
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('mbsts_theme', this.theme);
        this.applyTheme();
    }

    setupEventListeners() {
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
            document.getElementById('mobileOverlay').classList.toggle('show');
        });
        document.getElementById('mobileOverlay').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('mobileOverlay').classList.remove('show');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigate(link.dataset.page);
                document.getElementById('sidebar').classList.remove('open');
                document.getElementById('mobileOverlay').classList.remove('show');
            });
        });

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.renderSources(btn.dataset.filter);
            });
        });

        document.getElementById('importBtnLabel').addEventListener('click', (e) => {
            e.preventDefault();
            showImportModal();
        });
        document.getElementById('importFileInput').addEventListener('change', (e) => this.importQuestions(e));

    }

    navigate(page, opts) {
        this.currentPage = page;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + page).classList.add('active');
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.toggle('active', l.dataset.page === page);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (page === 'dashboard') this.renderDashboard();
        if (page === 'stats') this.renderStats();
        if (page === 'bank') this.renderBank();
        if (page === 'past') this.renderPastPage();
        if (page === 'quiz') {
            this._populateQuizYearFilter();
            if (opts) {
                if (opts.count) document.getElementById('qCount').value = opts.count;
                if (opts.timer) document.getElementById('qTimer').value = opts.timer;
            }
        }
    }

    _populateQuizYearFilter() {
        const yearSelect = document.getElementById('qYear');
        if (!yearSelect) return;
        const years = [...new Set(this.questions.filter(q => q.year).map(q => q.year))].sort();
        yearSelect.innerHTML = '<option value="all">Tüm Yıllar</option>' + years.map(y => '<option value="' + y + '">' + y + '</option>').join('');
    }

    renderDashboard() {
        document.getElementById('statQuestions').textContent = this.questions.length;
        document.getElementById('statSolved').textContent = this.history.reduce((a, h) => a + h.total, 0);
        const total = this.history.reduce((a, h) => a + h.correct, 0);
        const totalQ = this.history.reduce((a, h) => a + h.total, 0);
        document.getElementById('statRate').textContent = totalQ > 0 ? '%' + Math.round(total / totalQ * 100) : '%0';

        const bars = document.getElementById('dashboardBars');
        bars.innerHTML = '';
        Object.entries(SUBJECTS).forEach(([key, subj]) => {
            const qCount = this.questions.filter(q => q.subject === key).length;
            const pct = Math.min(100, Math.round(qCount / subj.count * 100));
            bars.innerHTML += `
                <div class="sbar">
                    <span class="sbar-label">${subj.icon} ${subj.name}</span>
                    <div class="sbar-track">
                        <div class="sbar-fill" style="width:${pct}%;background:${subj.color}">${qCount}/${subj.count}</div>
                    </div>
                </div>`;
        });
    }

    renderStats() {
        const h = this.history;
        document.getElementById('totalQuizCount').textContent = h.length;
        const totalQ = h.reduce((a, x) => a + x.total, 0);
        const totalC = h.reduce((a, x) => a + x.correct, 0);
        document.getElementById('totalQAnswered').textContent = totalQ;
        document.getElementById('avgPercent').textContent = totalQ > 0 ? '%' + Math.round(totalC / totalQ * 100) : '0%';
        document.getElementById('bestPercent').textContent = h.length > 0 ? '%' + Math.max(...h.map(x => Math.round(x.correct / x.total * 100))) : '0%';

        const bars = document.getElementById('statsBars');
        bars.innerHTML = '';
        Object.entries(SUBJECTS).forEach(([key, subj]) => {
            const qCount = this.questions.filter(q => q.subject === key).length;
            const pct = Math.min(100, Math.round(qCount / subj.count * 100));
            bars.innerHTML += `
                <div class="sbar">
                    <span class="sbar-label">${subj.icon} ${subj.name}</span>
                    <div class="sbar-track">
                        <div class="sbar-fill" style="width:${pct}%;background:${subj.color}">${qCount}/${subj.count}</div>
                    </div>
                </div>`;
        });

        const list = document.getElementById('historyList');
        if (h.length === 0) {
            list.innerHTML = '<div class="empty-state"><div class="empty-icon">📝</div><p>Henüz test cozmediniz</p></div>';
            return;
        }
        list.innerHTML = h.slice().reverse().map(x => `
            <div class="bank-item">
                <div class="bi-head">
                    <span class="bi-badge">${x.date}</span>
                    <span style="font-size:0.85rem;font-weight:600;color:${Math.round(x.correct/x.total*100)>=70?'var(--success)':'var(--danger)'}">${Math.round(x.correct/x.total*100)}%</span>
                </div>
                <div class="bi-text">${x.total} soru - ${x.correct} dogru, ${x.wrong} yanlis</div>
            </div>
        `).join('');
    }

    renderBank() {
        this._populateBankFilters();
        this._filterBankQuestions();
    }

    _populateBankFilters() {
        const yearSelect = document.getElementById('bankYearFilter');
        const subjectSelect = document.getElementById('bankSubjectFilter');
        if (!yearSelect || !subjectSelect) return;

        const currentYear = yearSelect.value;
        const currentSubject = subjectSelect.value;

        const years = [...new Set(this.questions.filter(q => q.year).map(q => q.year))].sort();
        yearSelect.innerHTML = '<option value="all">Tüm Yıllar</option>' + years.map(y => '<option value="' + y + '">' + y + '</option>').join('');
        yearSelect.value = currentYear || 'all';

        subjectSelect.innerHTML = '<option value="all">Tüm Konular</option>' + Object.entries(SUBJECTS).map(([k, v]) => '<option value="' + k + '">' + v.icon + ' ' + v.name + '</option>').join('');
        subjectSelect.value = currentSubject || 'all';
    }

    _filterBankQuestions() {
        const year = document.getElementById('bankYearFilter')?.value || 'all';
        const subject = document.getElementById('bankSubjectFilter')?.value || 'all';
        let filtered = this.questions;
        if (year !== 'all') filtered = filtered.filter(q => String(q.year) === year);
        if (subject !== 'all') filtered = filtered.filter(q => q.subject === subject);
        this._bankData = filtered;
        this._bankPage = 0;
        document.getElementById('myQCount').textContent = this._bankData.length;
        this._renderBankPage();
    }

    _renderBankPage() {
        const list = document.getElementById('bankList');
        const PAGE_SIZE = 50;
        const start = this._bankPage * PAGE_SIZE;
        const slice = this._bankData.slice(start, start + PAGE_SIZE);
        if (start === 0) list.innerHTML = '';
        if (this._bankData.length === 0) {
            list.innerHTML = '<div class="empty-state"><div class="empty-icon">📦</div><p>Henuz soru yok</p></div>';
            return;
        }
        const fragment = document.createDocumentFragment();
        slice.forEach(q => {
            const div = document.createElement('div');
            div.className = 'bank-item';
            div.innerHTML = '<div class="bi-head"><span class="bi-badge">' + (SUBJECTS[q.subject]?.name || q.subject) + '</span>' + (q.year ? '<span class="bi-badge" style="background:var(--primary);color:#fff">' + (q.source || q.year) + '</span>' : '') + '<button class="btn btn-sm btn-danger" onclick="app.deleteQuestion(' + q.id + ')">Sil</button></div><div class="bi-text">' + q.text + '</div><div class="bi-opts">' + q.options.map((o, i) => '<div class="bi-opt ' + (i === q.correct ? 'is-correct' : '') + '">' + 'ABCDE'[i] + ') ' + o + '</div>').join('') + '</div>';
            fragment.appendChild(div);
        });
        const oldBtn = document.getElementById('bankLoadMore');
        if (oldBtn) oldBtn.remove();
        list.appendChild(fragment);
        if (start + PAGE_SIZE < this._bankData.length) {
            const btn = document.createElement('button');
            btn.id = 'bankLoadMore';
            btn.className = 'btn btn-primary btn-full';
            btn.style.marginTop = '12px';
            btn.textContent = 'Daha Fazla Göster (' + (start + slice.length) + ' / ' + this._bankData.length + ')';
            btn.onclick = () => { this._bankPage++; this._renderBankPage(); };
            list.parentNode.insertBefore(btn, list.nextSibling);
        }
    }

    deleteQuestion(id) {
        this.questions = this.questions.filter(q => q.id !== id);
        this.saveToStorage('mbsts_questions', this.questions);
        this.renderBank();
        this.showToast('Soru silindi!');
    }

    renderPastPage() {
        this._populatePastFilters();
        this._filterPastQuestions();
    }

    _populatePastFilters() {
        const yearSelect = document.getElementById('pastYearFilter');
        const subjectSelect = document.getElementById('pastSubjectFilter');
        if (!yearSelect || !subjectSelect) return;

        const currentYear = yearSelect.value;
        const currentSubject = subjectSelect.value;

        const years = [...new Set(this.questions.filter(q => q.year).map(q => q.year))].sort();
        yearSelect.innerHTML = '<option value="all">Tüm Yıllar</option>' + years.map(y => '<option value="' + y + '">' + y + '</option>').join('');
        yearSelect.value = currentYear || 'all';

        subjectSelect.innerHTML = '<option value="all">Tüm Konular</option>' + Object.entries(SUBJECTS).map(([k, v]) => '<option value="' + k + '">' + v.icon + ' ' + v.name + '</option>').join('');
        subjectSelect.value = currentSubject || 'all';

        document.getElementById('pastStartQuiz').addEventListener('click', () => this._startPastQuiz());
    }

    _filterPastQuestions() {
        const year = document.getElementById('pastYearFilter')?.value || 'all';
        const subject = document.getElementById('pastSubjectFilter')?.value || 'all';
        let filtered = this.questions;
        if (year !== 'all') filtered = filtered.filter(q => String(q.year) === year);
        if (subject !== 'all') filtered = filtered.filter(q => q.subject === subject);
        this._pastFiltered = filtered;
        document.getElementById('pastResultCount').textContent = filtered.length + ' soru bulundu';
        this._renderPastPreview(filtered);
    }

    _renderPastPreview(data) {
        const preview = document.getElementById('pastPreview');
        const show = data.slice(0, 100);
        preview.innerHTML = show.map(q => '<div class="bank-item"><div class="bi-head"><span class="bi-badge">' + (SUBJECTS[q.subject]?.name || q.subject) + '</span>' + (q.year ? '<span class="bi-badge" style="background:var(--purple);color:#fff">' + q.year + '</span>' : '') + '</div><div class="bi-text">' + q.text + '</div></div>').join('');
        if (data.length > 100) {
            preview.innerHTML += '<div style="grid-column:1/-1;text-align:center;color:var(--text-secondary);font-size:0.85rem;padding:12px;">... ve ' + (data.length - 100) + ' soru daha</div>';
        }
    }

    _startPastQuiz() {
        const count = parseInt(document.getElementById('pastQuizCount').value);
        const timer = parseInt(document.getElementById('pastQuizTimer').value);
        let pool = [...this._pastFiltered];
        if (pool.length === 0) { this.showToast('Filtreye uygun soru yok!', true); return; }
        pool = this.shuffle(pool);
        if (count > 0) pool = pool.slice(0, Math.min(count, pool.length));
        this.quizState = {
            questions: pool,
            currentIndex: 0,
            answers: {},
            timer: timer * 60,
            timerMax: timer * 60
        };
        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizQTotal').textContent = pool.length;
        this.navigate('quiz');
        if (timer > 0) this.startTimer();
        this.renderQuestion();
    }

    exportQuestions() {
        const blob = new Blob([JSON.stringify(this.questions, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'mbsts-sorular.json';
        a.click();
        URL.revokeObjectURL(url);
    }

    importQuestions(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const imported = JSON.parse(e.target.result);
                if (Array.isArray(imported)) {
                    this.questions = [...this.questions, ...imported.map(q => ({...q, id: Date.now() + Math.random()}))];
                    this.saveToStorage('mbsts_questions', this.questions);
                    this.renderBank();
                    this.showToast(imported.length + ' soru ice aktarildi!');
                }
            } catch {
                this.showToast('Gecersiz dosya formati!', true);
            }
        };
        reader.readAsText(file);
    }

    renderSources(filter = 'all') {
        const grid = document.getElementById('sourcesGrid');
        const filtered = filter === 'all' ? SOURCES : SOURCES.filter(s => s.category === filter);
        grid.innerHTML = filtered.map(s => {
            if (s.scrollTo) {
                return `
                <div class="source-card">
                    <h4>${s.title}</h4>
                    <div class="s-author">${s.author}</div>
                    <span class="s-pub">${s.pub} - ${s.year}</span>
                    <div class="s-actions">
                        <button class="btn btn-primary btn-sm source-dl-btn" data-scroll="${s.scrollTo}">📥 İndir</button>
                    </div>
                </div>`;
            }
            if (s.fileSize) {
                return `
                <div class="source-card">
                    <h4>${s.title}</h4>
                    <div class="s-author">${s.author}</div>
                    <span class="s-pub">${s.pub} - ${s.year}</span>
                    <div class="s-actions">
                        <button class="btn btn-primary btn-sm source-dl-btn" data-url="${s.url}" data-title="${s.title}" data-size="${s.fileSize}">📥 İndir</button>
                    </div>
                </div>`;
            }
            return `
            <div class="source-card">
                <h4>${s.title}</h4>
                <div class="s-author">${s.author}</div>
                <span class="s-pub">${s.pub} - ${s.year}</span>
                <div class="s-actions">
                    <a href="${s.url}" target="_blank" class="btn btn-primary btn-sm">📥 Collection'ı Aç</a>
                </div>
            </div>`;
        }).join('');
        grid.querySelectorAll('.source-dl-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.dataset.scroll) {
                    const el = document.getElementById(btn.dataset.scroll);
                    if (el) { el.classList.remove('hidden-section'); el.scrollIntoView({behavior:'smooth',block:'start'}); }
                } else if (btn.dataset.url) {
                    showDownloadModal(btn.dataset.title, btn.dataset.url, btn.dataset.size);
                }
            });
        });
    }

    startQuiz() {
        const count = parseInt(document.getElementById('qCount').value);
        const subject = document.getElementById('qSubject').value;
        const year = document.getElementById('qYear').value;
        const timer = parseInt(document.getElementById('qTimer').value);
        const order = document.getElementById('qOrder').value;

        let pool = [...this.questions];
        if (subject !== 'all') pool = pool.filter(q => q.subject === subject);
        if (year !== 'all') pool = pool.filter(q => String(q.year) === year);
        if (pool.length === 0) {
            this.showToast('Bu filtrelere uygun soru yok!', true);
            return;
        }
        pool = this.shuffle(pool).slice(0, Math.min(count, pool.length));

        this.quizState = {
            questions: pool,
            currentIndex: 0,
            answers: {},
            timer: timer * 60,
            timerMax: timer * 60
        };

        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizActive').style.display = 'block';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizQTotal').textContent = pool.length;

        if (timer > 0) this.startTimer();
        this.renderQuestion();
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.quizState.timer--;
            const min = Math.floor(this.quizState.timer / 60);
            const sec = this.quizState.timer % 60;
            const display = document.getElementById('quizTimerDisplay');
            display.textContent = String(min).padStart(2, '0') + ':' + String(sec).padStart(2, '0');
            display.classList.toggle('warning', this.quizState.timer < 300);
            if (this.quizState.timer <= 0) this.finishQuiz();
        }, 1000);
    }

    renderQuestion() {
        const qs = this.quizState;
        const q = qs.questions[qs.currentIndex];
        document.getElementById('quizQNum').textContent = qs.currentIndex + 1;
        document.getElementById('quizProgressFill').style.width = ((qs.currentIndex + 1) / qs.questions.length * 100) + '%';

        const card = document.getElementById('quizQuestionCard');
        card.innerHTML = `
            <div class="q-number">Soru ${qs.currentIndex + 1}</div>
            <div class="q-subject-badge">${SUBJECTS[q.subject]?.name || q.subject}${q.year ? ` · ${q.source || q.year}` : ''}</div>
            <div class="q-text">${q.text}</div>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <div class="quiz-opt ${qs.answers[q.id] === i ? 'selected' : ''}" onclick="app.selectAnswer(${q.id}, ${i})">
                        <div class="opt-letter">${'ABCDE'[i]}</div>
                        <div class="opt-text">${opt}</div>
                    </div>
                `).join('')}
            </div>
        `;

        document.getElementById('prevQBtn').disabled = qs.currentIndex === 0;
        document.getElementById('nextQBtn').textContent = qs.currentIndex === qs.questions.length - 1 ? 'Bitir ✓' : 'Sonraki ▶';

        const dots = document.getElementById('quizDots');
        dots.innerHTML = qs.questions.map((_, i) => `
            <div class="q-dot ${qs.answers[qs.questions[i].id] !== undefined ? 'answered' : ''} ${i === qs.currentIndex ? 'current' : ''}" onclick="app.goToQuestion(${i})"></div>
        `).join('');
    }

    selectAnswer(qid, idx) {
        this.quizState.answers[qid] = idx;
        this.renderQuestion();
    }

    nextQuestion() {
        const qs = this.quizState;
        if (qs.currentIndex === qs.questions.length - 1) {
            this.finishQuiz();
            return;
        }
        qs.currentIndex++;
        this.renderQuestion();
    }

    prevQuestion() {
        if (this.quizState.currentIndex > 0) {
            this.quizState.currentIndex--;
            this.renderQuestion();
        }
    }

    goToQuestion(i) {
        this.quizState.currentIndex = i;
        this.renderQuestion();
    }

    finishQuiz() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        const qs = this.quizState;
        let correct = 0, wrong = 0;
        qs.questions.forEach(q => {
            const ans = qs.answers[q.id];
            if (ans === q.correct) correct++;
            else if (ans !== undefined) wrong++;
        });

        const result = {
            date: new Date().toLocaleDateString('tr-TR'),
            total: qs.questions.length,
            correct,
            wrong,
            unanswered: qs.questions.length - correct - wrong,
            subjectResults: {}
        };

        qs.questions.forEach(q => {
            if (!result.subjectResults[q.subject]) result.subjectResults[q.subject] = { correct: 0, total: 0 };
            result.subjectResults[q.subject].total++;
            if (qs.answers[q.id] === q.correct) result.subjectResults[q.subject].correct++;
        });

        this.history.push(result);
        this.saveToStorage('mbsts_history', this.history);

        const pct = Math.round(correct / qs.questions.length * 100);
        let msg = pct >= 90 ? 'Mukemmel! Harika bir performans!' : pct >= 70 ? 'Cok iyi! Devam edin!' : pct >= 50 ? 'Iyi, ama gelistirilebilir!' : 'Daha cok calismalisiniz!';

        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';
        document.getElementById('quizResults').innerHTML = `
            <div class="results-hero">
                <div class="results-score">%${pct}</div>
                <div class="results-msg">${msg}</div>
                <div class="results-grid">
                    <div class="result-item"><span>Toplam Soru</span><strong>${qs.questions.length}</strong></div>
                    <div class="result-item"><span>Dogru</span><strong style="color:var(--success)">${correct}</strong></div>
                    <div class="result-item"><span>Yanlis</span><strong style="color:var(--danger)">${wrong}</strong></div>
                    <div class="result-item"><span>Bos</span><strong style="color:var(--text-secondary)">${qs.questions.length - correct - wrong}</strong></div>
                </div>
                <div class="results-actions">
                    <button class="btn btn-primary btn-lg" onclick="app.resetQuiz()">📝 Yeni Test</button>
                    <button class="btn btn-outline btn-lg" onclick="app.showReview()">📋 Incele</button>
                </div>
            </div>
            <div id="reviewSection"></div>
        `;
    }

    showReview() {
        const qs = this.quizState;
        const section = document.getElementById('reviewSection');
        section.innerHTML = qs.questions.map((q, i) => {
            const ans = qs.answers[q.id];
            const isCorrect = ans === q.correct;
            return `
                <div class="quiz-question-card" style="border-left:4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}">
                    <div class="q-number">Soru ${i + 1} - ${isCorrect ? '✅ Dogru' : '❌ Yanlis'}</div>
                    <div class="q-subject-badge">${SUBJECTS[q.subject]?.name || q.subject}</div>
                    <div class="q-text">${q.text}</div>
                    <div class="quiz-options">
                        ${q.options.map((opt, j) => `
                            <div class="quiz-opt ${j === q.correct ? 'correct' : ''} ${j === ans && j !== q.correct ? 'wrong' : ''}">
                                <div class="opt-letter">${'ABCDE'[j]}</div>
                                <div class="opt-text">${opt}</div>
                            </div>
                        `).join('')}
                    </div>
                    ${q.explanation ? `<div style="margin-top:14px;padding:12px;background:var(--primary-bg);border-radius:8px;font-size:0.9rem"><strong>Aciklama:</strong> ${q.explanation}</div>` : ''}
                </div>`;
        }).join('');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    resetQuiz() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        this.quizState = null;
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizActive').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
    }

    clearHistory() {
        if (confirm('Tum gecmis silinecek. Emin misiniz?')) {
            this.history = [];
            this.saveToStorage('mbsts_history', []);
            this.renderStats();
            this.showToast('Gecmis temizlendi!');
        }
    }

    shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    showToast(msg, isError = false) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.className = 'toast' + (isError ? ' error' : '');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

function showDownloadModal(title, url, size) {
    const existing = document.getElementById('downloadModal');
    if (existing) existing.remove();
    const modal = document.createElement('div');
    modal.id = 'downloadModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <div class="modal-header">
                <h3>📥 İndirme Onayı</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div class="modal-info-row"><span>Dosya:</span><strong>${title}</strong></div>
                <div class="modal-info-row"><span>Boyut:</span><strong>${size}</strong></div>
                <div class="modal-info-row"><span>Kaynak:</span><strong>archive.org</strong></div>
                <p class="modal-warn">Bu dosya archive.org sunucusundan indirilecek. İndirme işlemi cihazınızın bağlantı hızına göre uzun sürebilir.</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">İptal</button>
                <a href="${url}" download class="btn btn-primary" id="modalDownloadBtn">İndir</a>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
}

function showImportModal() {
    const existing = document.getElementById('importModal');
    if (existing) existing.remove();
    const modal = document.createElement('div');
    modal.id = 'importModal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-box">
            <div class="modal-header">
                <h3>📤 Dosya İçe Aktarma</h3>
                <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">✕</button>
            </div>
            <div class="modal-body">
                <p>Sadece <strong>.json</strong> formatında dosya yükleyebilirsiniz.</p>
                <p class="modal-warn">Dosya, mevcut sorularla aynı formatta olmalıdır (id, subject, text, options, correct, explanation alanları).</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" onclick="this.closest('.modal-overlay').remove()">İptal</button>
                <button class="btn btn-primary" id="importModalContinue">Devam</button>
            </div>
        </div>`;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
    document.getElementById('importModalContinue').addEventListener('click', function() {
        modal.remove();
        document.getElementById('importFileInput').click();
    });
}

// ===== THEME CUSTOMIZER =====
const THEME_PRESETS = {
    blue: { primary: '#1a5276', primaryLight: '#2980b9', accent: '#1abc9c', bg: '#f0f2f5', surface: '#ffffff' },
    green: { primary: '#1e8449', primaryLight: '#27ae60', accent: '#1abc9c', bg: '#f0f2f5', surface: '#ffffff' },
    purple: { primary: '#6c3483', primaryLight: '#9b59b6', accent: '#8e44ad', bg: '#f0f2f5', surface: '#ffffff' },
    red: { primary: '#922b21', primaryLight: '#e74c3c', accent: '#e74c3c', bg: '#f0f2f5', surface: '#ffffff' },
    orange: { primary: '#d35400', primaryLight: '#e67e22', accent: '#e67e22', bg: '#f0f2f5', surface: '#ffffff' },
    teal: { primary: '#117a65', primaryLight: '#1abc9c', accent: '#1abc9c', bg: '#f0f2f5', surface: '#ffffff' },
    pink: { primary: '#c2185b', primaryLight: '#e91e63', accent: '#e91e63', bg: '#f0f2f5', surface: '#ffffff' },
    dark: { primary: '#5dade2', primaryLight: '#85c1e9', accent: '#1abc9c', bg: '#0f0f1a', surface: '#1a1a2e' }
};

function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255;
    let g = parseInt(hex.slice(3, 5), 16) / 255;
    let b = parseInt(hex.slice(5, 7), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) { h = s = 0; }
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function adjustColor(hex, amount) {
    let hsl = hexToHSL(hex);
    hsl.l = Math.min(100, Math.max(0, hsl.l + amount));
    return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}

function applyCustomTheme(settings) {
    const root = document.documentElement;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    let primary = settings.primary || '#1a5276';
    let accent = settings.accent || '#1abc9c';
    let bg = settings.bg || '#f0f2f5';
    let surface = settings.surface || '#ffffff';
    let radius = settings.radius || 14;
    let sidebarStyle = settings.sidebarStyle || 'gradient';

    // Generate sidebar colors from primary
    let hsl = hexToHSL(primary);
    let sidebarStart = `hsl(${hsl.h}, ${Math.min(80, hsl.s + 10)}%, ${Math.max(5, hsl.l - 35)}%)`;
    let sidebarEnd = `hsl(${hsl.h}, ${Math.min(80, hsl.s + 10)}%, ${Math.max(10, hsl.l - 25)}%)`;

    // Auto-adjust for dark mode
    if (isDark && !settings.darkMode) {
        primary = `hsl(${hsl.h}, ${Math.min(80, hsl.s + 20)}%, ${Math.min(70, hsl.l + 30)}%)`;
        bg = '#0f0f1a';
        surface = '#1a1a2e';
        sidebarStart = `hsl(${hsl.h}, ${Math.min(80, hsl.s + 10)}%, ${Math.max(5, hsl.l - 35)}%)`;
        sidebarEnd = `hsl(${hsl.h}, ${Math.min(80, hsl.s + 10)}%, ${Math.max(10, hsl.l - 25)}%)`;
    }

    root.style.setProperty('--primary', primary);
    root.style.setProperty('--primary-light', adjustColor(primary, 10));
    root.style.setProperty('--primary-bg', adjustColor(primary, 40));
    root.style.setProperty('--accent', accent);
    root.style.setProperty('--bg', bg);
    root.style.setProperty('--surface', surface);
    root.style.setProperty('--radius', radius + 'px');
    root.style.setProperty('--sidebar-start', sidebarStart);
    root.style.setProperty('--sidebar-end', sidebarEnd);

    // Sidebar style
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.remove('sidebar-gradient', 'sidebar-solid', 'sidebar-glass');
        sidebar.classList.add('sidebar-' + sidebarStyle);
    }
}

class ThemeCustomizer {
    constructor() {
        this.settings = this.loadSettings();
        this.panel = document.getElementById('themePanel');
        this.init();
    }

    loadSettings() {
        try {
            return JSON.parse(localStorage.getItem('mbsts_theme_settings')) || {};
        } catch { return {}; }
    }

    saveSettings(settings) {
        this.settings = settings;
        localStorage.setItem('mbsts_theme_settings', JSON.stringify(settings));
    }

    init() {
        // Apply saved settings
        if (Object.keys(this.settings).length > 0) {
            applyCustomTheme(this.settings);
        }

        // Panel toggle
        document.getElementById('themeSettingsBtn').addEventListener('click', () => {
            this.panel.classList.toggle('open');
        });
        document.getElementById('themePanelClose').addEventListener('click', () => {
            this.panel.classList.remove('open');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!this.panel.contains(e.target) && !e.target.closest('#themeSettingsBtn')) {
                this.panel.classList.remove('open');
            }
            // Close color dropdowns
            if (!e.target.closest('.custom-color-picker')) {
                document.querySelectorAll('.color-dropdown').forEach(d => d.classList.remove('open'));
                document.querySelectorAll('.color-selected').forEach(s => s.classList.remove('open'));
            }
        });

        // Color pickers
        this.setupColorPicker('primaryColor', 'primaryColorText');
        this.setupColorPicker('accentColor', 'accentColorText');
        this.setupColorPicker('bgColor', 'bgColorText');
        this.setupColorPicker('surfaceColor', 'surfaceColorText');

        // Preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const preset = THEME_PRESETS[btn.dataset.preset];
                if (preset) {
                    this.setColor('primaryColor', 'primaryColorText', preset.primary);
                    this.setColor('accentColor', 'accentColorText', preset.accent);
                    this.setColor('bgColor', 'bgColorText', preset.bg);
                    this.setColor('surfaceColor', 'surfaceColorText', preset.surface);
                    applyCustomTheme({ ...this.settings, ...preset });
                    this.livePreview();
                }
            });
        });

        // Sidebar style buttons
        document.querySelectorAll('.sidebar-style-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.sidebar-style-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Custom Color Pickers
        this.setupCustomColorPicker('primary', 'primaryColor', 'primaryColorText', 'primaryPreview', 'primarySelected', 'primaryDropdown', 'primaryColorCustom');
        this.setupCustomColorPicker('accent', 'accentColor', 'accentColorText', 'accentPreview', 'accentSelected', 'accentDropdown', 'accentColorCustom');
        this.setupCustomColorPicker('bg', 'bgColor', 'bgColorText', 'bgPreview', 'bgSelected', 'bgDropdown', 'bgColorCustom');
        this.setupCustomColorPicker('surface', 'surfaceColor', 'surfaceColorText', 'surfacePreview', 'surfaceSelected', 'surfaceDropdown', 'surfaceColorCustom');

        // Radius slider
        const radiusSlider = document.getElementById('radiusSlider');
        const radiusValue = document.getElementById('radiusValue');
        radiusSlider.addEventListener('input', () => {
            radiusValue.textContent = radiusSlider.value + 'px';
            document.documentElement.style.setProperty('--radius', radiusSlider.value + 'px');
        });

        // Reset button
        document.getElementById('themeReset').addEventListener('click', () => {
            localStorage.removeItem('mbsts_theme_settings');
            this.settings = {};
            document.documentElement.removeAttribute('style');
            document.querySelector('.sidebar').classList.remove('sidebar-gradient', 'sidebar-solid', 'sidebar-glass');
            this.panel.classList.remove('open');
            this.showToast('Tema varsayılana döndü');
        });

        // Save button
        document.getElementById('themeSave').addEventListener('click', () => {
            const settings = {
                primary: document.getElementById('primaryColor').value,
                accent: document.getElementById('accentColor').value,
                bg: document.getElementById('bgColor').value,
                surface: document.getElementById('surfaceColor').value,
                radius: parseInt(document.getElementById('radiusSlider').value),
                sidebarStyle: document.querySelector('.sidebar-style-btn.active')?.dataset.style || 'gradient'
            };
            this.saveSettings(settings);
            applyCustomTheme(settings);
            this.panel.classList.remove('open');
            this.showToast('Tema kaydedildi!');
        });
    }

    setupCustomColorPicker(prefix, colorId, textId, previewId, selectedId, dropdownId, customId) {
        const colorInput = document.getElementById(colorId);
        const textInput = document.getElementById(textId);
        const preview = document.getElementById(previewId);
        const selected = document.getElementById(selectedId);
        const dropdown = document.getElementById(dropdownId);
        const customInput = document.getElementById(customId);

        if (!selected || !dropdown) return;

        // Toggle dropdown
        selected.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other dropdowns
            document.querySelectorAll('.color-dropdown').forEach(d => d.classList.remove('open'));
            document.querySelectorAll('.color-selected').forEach(s => s.classList.remove('open'));
            dropdown.classList.toggle('open');
            selected.classList.toggle('open');
        });

        // Palette buttons
        dropdown.querySelectorAll('.pal-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.querySelectorAll('.pal-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const color = btn.dataset.color;
                this.setPickerColor(prefix, colorId, textId, previewId, color);
                this.livePreview();
            });
        });

        // Custom native color input
        customInput.addEventListener('input', () => {
            this.setPickerColor(prefix, colorId, textId, previewId, customInput.value);
            this.livePreview();
        });

        // Text input
        textInput.addEventListener('input', () => {
            if (/^#[0-9A-Fa-f]{6}$/.test(textInput.value)) {
                colorInput.value = textInput.value;
                preview.style.background = textInput.value;
                this.livePreview();
            }
        });

        textInput.addEventListener('blur', () => {
            if (!/^#[0-9A-Fa-f]{6}$/.test(textInput.value)) {
                textInput.value = colorInput.value;
            }
        });
    }

    setPickerColor(prefix, colorId, textId, previewId, color) {
        document.getElementById(colorId).value = color;
        document.getElementById(textId).value = color;
        document.getElementById(previewId).style.background = color;
    }

    setupColorPicker(colorId, textId) {
        const colorInput = document.getElementById(colorId);
        const textInput = document.getElementById(textId);

        colorInput.addEventListener('input', () => {
            textInput.value = colorInput.value;
            this.livePreview();
        });

        textInput.addEventListener('input', () => {
            if (/^#[0-9A-Fa-f]{6}$/.test(textInput.value)) {
                colorInput.value = textInput.value;
                this.livePreview();
            }
        });

        textInput.addEventListener('blur', () => {
            if (!/^#[0-9A-Fa-f]{6}$/.test(textInput.value)) {
                textInput.value = colorInput.value;
            }
        });
    }

    setColor(colorId, textId, value) {
        document.getElementById(colorId).value = value;
        document.getElementById(textId).value = value;
        // Also update preview if exists
        const previewId = colorId.replace('Color', 'Preview');
        const preview = document.getElementById(previewId);
        if (preview) preview.style.background = value;
    }

    livePreview() {
        const primary = document.getElementById('primaryColor').value;
        const accent = document.getElementById('accentColor').value;
        const bg = document.getElementById('bgColor').value;
        const surface = document.getElementById('surfaceColor').value;
        const radius = parseInt(document.getElementById('radiusSlider').value);

        applyCustomTheme({ primary, accent, bg, surface, radius });

        // Update preview color dots and hex codes
        const previewPrimaryDot = document.getElementById('previewPrimaryDot');
        const previewAccentDot = document.getElementById('previewAccentDot');
        const previewBgDot = document.getElementById('previewBgDot');
        const previewSurfaceDot = document.getElementById('previewSurfaceDot');

        if (previewPrimaryDot) {
            previewPrimaryDot.style.background = primary;
            document.getElementById('previewPrimaryHex').textContent = primary;
        }
        if (previewAccentDot) {
            previewAccentDot.style.background = accent;
            document.getElementById('previewAccentHex').textContent = accent;
        }
        if (previewBgDot) {
            previewBgDot.style.background = bg;
            document.getElementById('previewBgHex').textContent = bg;
        }
        if (previewSurfaceDot) {
            previewSurfaceDot.style.background = surface;
            document.getElementById('previewSurfaceHex').textContent = surface;
        }
    }

    showToast(msg) {
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.className = 'toast show';
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

const app = new MBSTSApp();
const themeCustomizer = new ThemeCustomizer();
