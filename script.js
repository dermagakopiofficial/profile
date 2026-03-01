// 1. Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    once: true,
    mirror: false
});

// 2. Initialize Lucide Icons
lucide.createIcons();

// 3. Mobile Menu Logic
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const toggleIcon = document.getElementById('toggle-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    const isActive = mobileMenu.classList.toggle('active');
    toggleIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
    lucide.createIcons();
    
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
    
    const nav = document.getElementById('main-nav');
    if(isActive) {
        nav.classList.add('bg-black');
    } else if (window.scrollY <= 50) {
        nav.classList.remove('bg-black');
    }
}

if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) toggleMenu();
    });
});

// 4. Custom Cursor Logic
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768 && dot && outline) {
        const posX = e.clientX;
        const posY = e.clientY;
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;
        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    }
});

// 5. DATA MENU & SUB-KATEGORI
const subCategories = {
    'food': [
        { id: 'chicken', label: 'Chicken Series' },
        { id: 'beef', label: 'Beef Series' },
        { id: 'nusantara', label: 'Dermaga Nusantara' }
    ],
    'coffee': [
        { id: 'coffee-classic', label: 'Classic' },
        { id: 'coffee-mocktail', label: 'Mocktail' },
        { id: 'manual-brew', label: 'Manual Brew' },
        { id: 'flavour-latte', label: 'Flavour Latte' }
    ],
    'non-coffee': [
        { id: 'chocolate', label: 'Chocolate' },
        { id: 'milk-base', label: 'Milk Base' },
        { id: 'mocktail-non-coffee', label: 'Mocktails' },
        { id: 'tea', label: 'Tea Series' }
    ]
};

const menuData = {
    'chicken': [
        { name: "Chicken Teriyaki", price: "32K", desc: "Ayam saus teriyaki manis & meresap, telur, dan wijen.", img: "img/chicken-teriyaki.jpg" },
        { name: "Chicken Blackpepper", price: "32K", desc: "Ayam saus lada hitam pedas hangat & aroma kuat.", img: "img/chicken-blackpepper.jpg" },
        { name: "Chicken Barbeque", price: "32K", desc: "Ayam saus BBQ smoky, nasi, telur, dan sayuran segar.", img: "img/chicken-bbq.jpg" },
        { name: "Chicken Karage", price: "28K", desc: "Ayam goreng Jepang renyah & juicy, spicy mayo.", img: "img/chicken-karage.jpg" }
    ],
    'beef': [
        { name: "Beef Teriyaki", price: "49K", desc: "Daging sapi tumis saus teriyaki manis-gurih & tamagoyaki.", img: "img/beef-teriyaki.jpg" },
        { name: "Beef Blackpepper", price: "46K", desc: "Irisan daging sapi saus lada hitam & tamagoyaki.", img: "img/beef-blackpepper.jpg" },
        { name: "Beef Barbeque", price: "45K", desc: "Daging sapi saus BBQ smoky, nasi, telur.", img: "img/beef-bbq.jpg" }
    ],
    'nusantara': [
        { name: "Ayam Bakar Nusantara", price: "35K", desc: "Ayam bakar bumbu gurih-manis, nasi, dan sambal.", img: "img/ayam-bakar.jpg" },
        { name: "Nila Bakar Nusantara", price: "32K", desc: "Nila bakar bumbu rempah, nasi, sambal korek, lalapan.", img: "img/nila-bakar.jpg" },
        { name: "Nasi Goreng Dermaga", price: "35K", desc: "Nasi goreng topping telur, ayam, dan kerupuk.", img: "img/nasi-goreng.jpg" },
        { name: "Mie Goreng Dermaga", price: "35K", desc: "Mie goreng topping sosis, bakso, dan telur.", img: "img/mie-goreng.jpg" },
        { name: "Mie Kuah Waduk", price: "32K", desc: "Mie kuah kaldu gurih dengan telur dan sayuran.", img: "img/mie-kuah.jpg" }
    ],
    'coffee-classic': [
        { name: "Dermaga Kopi Frape", price: "38K", desc: "Signature blended coffee yang lembut & creamy.", img: "img/frape.jpg" },
        { name: "Cappuccino", price: "28K", desc: "Espresso dengan foam susu tebal.", img: "img/cappuccino.jpg" },
        { name: "Cafe Latte", price: "27K", desc: "Kopi susu lembut dengan foam tipis.", img: "img/latte.jpg" },
        { name: "Americano", price: "21K", desc: "Espresso klasik hitam.", img: "img/americano.jpg" },
        { name: "Affogato", price: "26K", desc: "Espresso dengan es krim vanilla lembut.", img: "img/affogato.jpg" }
    ],
    'coffee-mocktail': [
        { name: "Irish Coffee", price: "28K", desc: "Kopi dengan rasa Irish (non-alkohol).", img: "img/irish.jpg" },
        { name: "Kopi Sore", price: "27K", desc: "Mocktail kopi fruity dan sparkling.", img: "img/kopi-sore.jpg" },
        { name: "Sweet Sour Coffee", price: "26K", desc: "Perpaduan kopi yang manis dan asam segar.", img: "img/sweet-sour.jpg" }
    ],
    'manual-brew': [
        { name: "V60 / Japanese", price: "33K", desc: "Seduh manual clean taste.", img: "img/v60.jpg" },
        { name: "Vietnam Drip", price: "24K", desc: "Kopi susu khas Vietnam.", img: "img/vietnam.jpg" },
        { name: "Cold Brew", price: "23K", desc: "Kopi ekstraksi dingin 12 jam.", img: "img/cold-brew.jpg" }
    ],
    'flavour-latte': [
        { name: "Butterscotch Latte", price: "29K", desc: "Latte manis gurih butterscotch.", img: "img/butterscotch.jpg" },
        { name: "Vanilla / Hazelnut / Caramel", price: "28K", desc: "Pilihan rasa latte premium.", img: "img/latte-flavour.jpg" },
        { name: "Brown Sugar Latte", price: "26K", desc: "Kopi susu dengan gula aren asli.", img: "img/brown-sugar.jpg" }
    ],
    'chocolate': [
        { name: "Chocolatte Frape", price: "36K", desc: "Blended coklat premium kaya rasa.", img: "img/choco-frape.jpg" },
        { name: "Mocha", price: "32K", desc: "Perpaduan coklat dan espresso.", img: "img/mocha.jpg" },
        { name: "Chocolate Hazelnut", price: "33K", desc: "Coklat dengan aroma kacang.", img: "img/choco-hazelnut.jpg" },
        { name: "Chocolate Vanilla/Caramel", price: "32K", desc: "Coklat dengan pilihan rasa manis.", img: "img/choco-vanilla.jpg" }
    ],
    'milk-base': [
        { name: "Matcha Cheese Cream", price: "29K", desc: "Matcha dengan foam keju gurih.", img: "img/matcha-cheese.jpg" },
        { name: "Matcha Latte", price: "26K", desc: "Matcha creamy rasa earthy.", img: "img/matcha-latte.jpg" },
        { name: "Red Velvet", price: "24K", desc: "Rasa red velvet manis lembut.", img: "img/red-velvet.jpg" },
        { name: "Milkshake Chocolate", price: "25K", desc: "Susu kocok rasa coklat tebal.", img: "img/shake-choco.jpg" },
        { name: "Milkshake Vanilla", price: "23K", desc: "Susu kocok rasa vanilla segar.", img: "img/shake-vanilla.jpg" }
    ],
    'mocktail-non-coffee': [
        { name: "Dee Beer", price: "26K", desc: "Mocktail signature menyegarkan.", img: "img/dee-beer.jpg" },
        { name: "Lemon / Leci Squash", price: "24K", desc: "Buah asli dengan soda dingin.", img: "img/squash.jpg" },
        { name: "Virgin Mojito", price: "22K", desc: "Mint, lemon, dan soda.", img: "img/mojito.jpg" }
    ],
    'tea': [
        { name: "Leci Tea", price: "20K", desc: "Teh buah dengan topping buah asli.", img: "img/fruit-tea.jpg" },
		{ name: "Strawberry Tea", price: "20K", desc: "Teh buah dengan topping buah asli.", img: "img/fruit-tea.jpg" },
        { name: "Lemon Tea", price: "18K", desc: "Teh segar perasan lemon.", img: "img/lemon-tea.jpg" }
    ],
    'snacks': [
        { name: "Mix Platter", price: "33K", desc: "Sosis, kentang, dan nugget dalam satu piring.", img: "img/mix-platter.jpg" },
        { name: "Nugget", price: "28K", desc: "Gorengan gurih dengan isian keju lumer.", img: "img/snack-1.jpg" },
		{ name: "Sosis Keju", price: "28K", desc: "Gorengan gurih dengan isian keju lumer.", img: "img/snack-1.jpg" },
        { name: "Kentang Goreng", price: "25K", desc: "French fries renyah bumbu gurih.", img: "img/fries.jpg" },
        { name: "Pisang Stick", price: "25K", desc: "Pisang goreng renyah berbentuk stick.", img: "img/pisang.jpg" },
        { name: "Ropang", price: "22K", desc: "Roti panggang aneka topping.", img: "img/ropang.jpg" },
        { name: "Tempe Kemul", price: "22K", desc: "Camilan tradisional renyah favorit.", img: "img/snack-tradisional.jpg" },
		{ name: "Tape Goreng", price: "22K", desc: "Gorengan gurih dengan isian keju lumer.", img: "img/snack-1.jpg" },
		{ name: "Jamur Crispy", price: "28K", desc: "Gorengan gurih dengan isian keju lumer.", img: "img/snack-1.jpg" }
		
    ]
};

// 6. LOGIKA SUB-MENU & FILTER
function showSubMenu(mainCat) {
    const container = document.getElementById('sub-tabs-container');
    const mainBtns = document.querySelectorAll('.main-tab');
    
    if (!container) return;

    // 1. Normalisasi nama kategori (menghapus spasi dan huruf kecil semua)
    const selectedCat = mainCat.toLowerCase().trim();

    // 2. Update styling tombol utama
    mainBtns.forEach(btn => {
        btn.classList.remove('active', 'border-b-2', 'border-accent');
        // Cek apakah teks di tombol sama dengan kategori yang dipilih
        if(btn.innerText.toLowerCase().trim() === selectedCat) {
            btn.classList.add('active');
        }
    });

    // 3. KOSONGKAN container sub-menu setiap kali pindah kategori utama
    container.innerHTML = '';

    // 4. LOGIKA PENYEMBUNYIAN: 
    // Jika kategori adalah 'snacks' atau tidak ada di daftar subCategories
    if (subCategories[selectedCat] && selectedCat !== 'snacks') {
        container.style.display = 'flex'; // Tampilkan container
        
        subCategories[selectedCat].forEach((sub, index) => {
            const btn = document.createElement('button');
            btn.className = `sub-tab text-[10px] uppercase tracking-widest px-4 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-all cursor-pointer`;
            btn.innerText = sub.label;
            
            btn.onclick = () => {
                document.querySelectorAll('.sub-tab').forEach(s => s.classList.remove('bg-white', 'text-black'));
                btn.classList.add('bg-white', 'text-black');
                filterMenu(sub.id);
            };
            
            container.appendChild(btn);

            // Klik otomatis sub pertama
            if(index === 0) btn.click();
        });
    } else {
        // KHUSUS SNACK atau yang tidak punya sub:
        container.style.display = 'none'; // Sembunyikan total container
        filterMenu(selectedCat); // Langsung tampilkan menu snacks
    }
}

function filterMenu(category) {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    if (menuData[category]) {
        menuData[category].forEach((item) => {
            const card = document.createElement('div');
            card.className = 'menu-card p-3 md:p-4 rounded-sm cursor-pointer group';
            card.setAttribute('data-aos', 'fade-up');
            card.onclick = () => openModal(item);
            card.innerHTML = `
                <div class="overflow-hidden mb-4 aspect-square rounded-sm bg-zinc-900 shadow-xl">
                    <img src="${item.img}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" onerror="this.src='img/placeholder.jpg'">
                </div>
                <div class="flex justify-between items-start mb-2 gap-2">
                    <h4 class="font-bold text-sm text-white uppercase tracking-tight">${item.name}</h4>
                    <span class="text-gold font-bold text-sm text-[#D4AF37]">${item.price}</span>
                </div>
                <p class="text-[10px] text-zinc-500 line-clamp-2 leading-relaxed">${item.desc}</p>
            `;
            grid.appendChild(card);
        });
    }
    
    // Refresh AOS untuk elemen baru
    AOS.refresh();
}

// 7. MODAL LOGIC
function openModal(item) {
    const modal = document.getElementById('menu-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="flex flex-col md:flex-row bg-zinc-950">
            <div class="md:w-5/12 h-64 md:h-auto overflow-hidden">
                <img src="${item.img}" class="w-full h-full object-cover" onerror="this.src='img/placeholder.jpg'">
            </div>
            <div class="md:w-7/12 p-6 md:p-10">
                <h2 class="text-2xl font-bold mb-4 text-white uppercase tracking-wider">${item.name}</h2>
                <p class="text-gray-400 text-sm mb-8 leading-relaxed">${item.desc}</p>
                <div class="text-2xl font-bold text-[#D4AF37]">${item.price}</div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scroll
}

function closeModal() {
    const modal = document.getElementById('menu-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Unlock scroll
}

// 8. INISIALISASI SAAT HALAMAN DIMUAT
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan sub-menu default 'food' saat web dibuka pertama kali
    showSubMenu('food');
});