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
    { id: 1, title: "Kur'an Yolu Turkce Meal ve Tefsiri", author: "Komisyon", pub: "DIB", year: "2019", category: "tefsir", url: "https://archive.org/details/diyanet-kuran-kitapligi" },
    { id: 2, title: "Tefsir Usulu", author: "Prof. Dr. Ismail Cerrahoglu", pub: "TDV", year: "2019", category: "tefsir", url: "https://archive.org/details/TDV_IslamAnsiklopedisi1-44" },
    { id: 3, title: "Ilmihal I. Cilt", author: "Komisyon", pub: "TDV", year: "2019", category: "fikih", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 4, title: "Ilmihal II. Cilt", author: "Komisyon", pub: "TDV", year: "2019", category: "fikih", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 5, title: "Hac Ilmihali", author: "Doc. Dr. Ismail Karagoz vd.", pub: "DIB", year: "2019", category: "fikih", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 6, title: "Fetvalar", author: "Din Isleri Yuksek Kurulu", pub: "DIB", year: "2019", category: "fikih", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 7, title: "Dini Kavramlar Sozlugu", author: "Komisyon", pub: "DIB", year: "2019", category: "diger", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 8, title: "Hz. Muhammed ve Evrensel Mesaji", author: "Prof. Dr. Ibrahim Saricam", pub: "DIB", year: "2019", category: "siyer", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 9, title: "Hadis Usulu", author: "Prof. Dr. Talat Kocyigit", pub: "TDV", year: "2019", category: "hadis", url: "https://archive.org/details/HadisKitapligi" },
    { id: 10, title: "Hadis Tarihi", author: "Prof. Dr. Talat Kocyigit", pub: "TDV", year: "2019", category: "hadis", url: "https://archive.org/details/HadisKitapligi" },
    { id: 11, title: "Riyazus-Salihin", author: "Imam Nevevi", pub: "DIB", year: "2019", category: "hadis", url: "https://archive.org/details/HadisKitapligi" },
    { id: 12, title: "Yasayan Dunya Dinleri", author: "Komisyon", pub: "DIB", year: "2019", category: "diger", url: "https://archive.org/details/diyanet-dib-yayinlari" },
    { id: 13, title: "Tecvidli Kur'an Okuma Rehberi", author: "Davut Kaya", pub: "DIB", year: "2019", category: "tecvit", url: "https://archive.org/details/diyanet-kuran-kitapligi" },
    { id: 14, title: "Kur'an-ı Kerim'in Tecvidi", author: "Demirhan Unlu", pub: "TDV", year: "2019", category: "tecvit", url: "https://archive.org/details/diyanet-kuran-kitapligi" },
    { id: 15, title: "Diyanet Islam Ansiklopedisi (44 Cilt)", author: "TDV", pub: "TDV", year: "2019", category: "diger", url: "https://archive.org/details/TDV_IslamAnsiklopedisi1-44" }
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
            const urls = ['questions-ek.json', 'questions-2024.json', 'questions-2023.json', 'questions-2022.json'];
            const responses = await Promise.all(urls.map(u => fetch(u).catch(() => null)));
            const existing = new Set(this.questions.map(q => q.id));
            const added = [];
            for (const res of responses) {
                if (!res || !res.ok) continue;
                const extra = await res.json();
                added.push(...extra.filter(q => !existing.has(q.id)));
            }
            if (added.length > 0) {
                this.questions = this.questions.concat(added);
                this.saveToStorage('mbsts_questions', this.questions);
                this.renderBank();
                this.renderStats();
            }
        } catch (e) {}
    }

    loadFromStorage(key, fallback) {
        try { return JSON.parse(localStorage.getItem(key)) || fallback; }
        catch { return fallback; }
    }

    saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
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

        document.getElementById('addQuestionForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addQuestion();
        });
    }

    navigate(page, opts) {
        this.currentPage = page;
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + page).classList.add('active');
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.toggle('active', l.dataset.page === page);
        });

        if (page === 'dashboard') this.renderDashboard();
        if (page === 'stats') this.renderStats();
        if (page === 'bank') this.renderBank();
        if (page === 'quiz' && opts) {
            if (opts.count) document.getElementById('qCount').value = opts.count;
            if (opts.timer) document.getElementById('qTimer').value = opts.timer;
        }
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

    renderBank(filter = 'all') {
        const f = filter === 'all' ? this.questions : this.questions.filter(q => q.subject === filter);
        document.getElementById('myQCount').textContent = this.questions.length;
        const list = document.getElementById('bankList');

        if (f.length === 0) {
            list.innerHTML = '<div class="empty-state"><div class="empty-icon">🗃️</div><p>Henuz soru yok</p></div>';
            return;
        }
        list.innerHTML = f.map(q => `
            <div class="bank-item">
                <div class="bi-head">
                    <span class="bi-badge">${SUBJECTS[q.subject]?.name || q.subject}</span>
                    ${q.year ? `<span class="bi-badge" style="background:var(--primary);color:#fff">${q.source || q.year}</span>` : ''}
                    <button class="btn btn-sm btn-danger" onclick="app.deleteQuestion(${q.id})">Sil</button>
                </div>
                <div class="bi-text">${q.text}</div>
                <div class="bi-opts">
                    ${q.options.map((o, i) => `<div class="bi-opt ${i === q.correct ? 'is-correct' : ''}">${'ABCDE'[i]}) ${o}</div>`).join('')}
                </div>
            </div>
        `).join('');
    }

    addQuestion() {
        const q = {
            id: Date.now(),
            subject: document.getElementById('aSubject').value,
            text: document.getElementById('aText').value,
            options: [
                document.getElementById('aA').value,
                document.getElementById('aB').value,
                document.getElementById('aC').value,
                document.getElementById('aD').value,
                document.getElementById('aE').value
            ],
            correct: 'ABCDE'.indexOf(document.getElementById('aCorrect').value),
            explanation: document.getElementById('aExpl').value
        };
        this.questions.push(q);
        this.saveToStorage('mbsts_questions', this.questions);
        document.getElementById('addQuestionForm').reset();
        this.renderBank();
        this.showToast('Soru eklendi!');
    }

    deleteQuestion(id) {
        this.questions = this.questions.filter(q => q.id !== id);
        this.saveToStorage('mbsts_questions', this.questions);
        this.renderBank();
        this.showToast('Soru silindi!');
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
        grid.innerHTML = filtered.map(s => `
            <div class="source-card">
                <h4>${s.title}</h4>
                <div class="s-author">${s.author}</div>
                <span class="s-pub">${s.pub} - ${s.year}</span>
                <div class="s-actions">
                    <a href="${s.url}" target="_blank" class="btn btn-primary btn-sm">📥 Indir</a>
                    <a href="${s.url}" target="_blank" class="btn btn-outline btn-sm">🔗 Kaynak</a>
                </div>
            </div>
        `).join('');
    }

    startQuiz() {
        const count = parseInt(document.getElementById('qCount').value);
        const subject = document.getElementById('qSubject').value;
        const timer = parseInt(document.getElementById('qTimer').value);
        const order = document.getElementById('qOrder').value;

        let pool = subject === 'all' ? [...this.questions] : this.questions.filter(q => q.subject === subject);
        if (pool.length === 0) {
            this.showToast('Bu konuda yeterli soru yok!', true);
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

const app = new MBSTSApp();
