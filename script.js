// ==========================================
// 1. INISIALISASI PLUGIN (AOS & LUCIDE)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
        mirror: false
    });
    lucide.createIcons();
    
    // Jalankan fungsi awal
    showSubMenu('food');
    initGallery();
});

// ==========================================
// 2. MOBILE MENU LOGIC
// ==========================================
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const toggleIcon = document.getElementById('toggle-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    if (!mobileMenu || !toggleIcon) return;
    const isActive = mobileMenu.classList.toggle('active');
    toggleIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
    lucide.createIcons();
    
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
    
    const nav = document.getElementById('main-nav');
    if (nav) {
        if(isActive) {
            nav.classList.add('bg-black');
        } else if (window.scrollY <= 50) {
            nav.classList.remove('bg-black');
        }
    }
}

if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) toggleMenu();
    });
});

// ==========================================
// 3. CUSTOM CURSOR LOGIC
// ==========================================
const dot = document.getElementById('cursor-dot');
const outline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768 && dot && outline) {
        const posX = e.clientX;
        const posY = e.clientY;
        
        dot.style.transform = `translate(${posX}px, ${posY}px)`;
        
        outline.animate({
            transform: `translate(${posX - 16}px, ${posY - 16}px)`
        }, { duration: 500, fill: "forwards" });
    }
});

// ==========================================
// 4. DATA MENU
// ==========================================
const subCategories = {
    'food': [
        { id: 'chicken', label: 'Chicken Base' },
        { id: 'beef', label: 'Beef Series' },
        { id: 'dermaga', label: 'Main Coars' }, // Sesuai penamaan di tabel (Main Courses)
        { id: 'signature-food', label: 'Signature' },
        { id: 'snacks', label: 'Snack & Dessert' }
    ],
    'coffee': [
        { id: 'classic', label: 'Classic Coffee' },
        { id: 'flavour', label: 'Flavour Coffee' },
        { id: 'manual-brew', label: 'Manual Brew' },
        { id: 'signature-coffee', label: 'Signature' }
    ],
    'non-coffee': [
        { id: 'milk-base', label: 'Milk Base' },
        { id: 'refresh', label: 'Refresh' },
        { id: 'mocktail', label: 'Mocktail' },
        { id: 'tea', label: 'Tea Base' }
    ]
};

const menuData = {
    // --- MAKANAN (FOOD) ---
    'chicken': [
        { name: "Chicken Karage", price: "34K", desc: "Ayam goreng ala Jepang yang renyah & juicy.", img: "img/7.jpg" },
        { name: "Chicken Blackpepper", price: "32K", desc: "Potongan ayam dengan saus lada hitam.", img: "img/7.jpg" },
        { name: "Chicken BBQ", price: "32K", desc: "Ayam saus BBQ manis-gurih dengan aroma smoky.", img: "img/7.jpg" },
        { name: "Chicken Teriyaki", price: "32K", desc: "Ayam saus teriyaki yang manis dan meresap.", img: "img/7.jpg" },
        { name: "Chicken Popcorn", price: "36K", desc: "Cemilan/lauk gigitan ayam crispy yang gurih.", img: "img/7.jpg" },
        { name: "Sei Ayam Sambal Matah", price: "32K", desc: "Ayam sei dengan sambal matah segar khas.", img: "img/7.jpg" },
        { name: "Ayam Cincane", price: "40K", desc: "Olahan ayam bumbu khas Nusantara.", img: "img/7.jpg" }
    ],
    'beef': [
        { name: "Beef Blackpepper", price: "49K", desc: "Irisan daging sapi dengan saus lada hitam yang hangat.", img: "img/7.jpg" },
        { name: "Beef Teriyaki", price: "47K", desc: "Daging sapi yang ditumis dengan saus teriyaki manis-gurih.", img: "img/7.jpg" },
        { name: "Beef BBQ", price: "45K", desc: "Daging sapi dalam balutan saus BBQ dengan aroma smoky.", img: "img/7.jpg" }
    ],
    'dermaga': [
        { name: "Mie Goreng Dermaga", price: "32K", desc: "Mie goreng bumbu kaya rasa khas Dermaga.", img: "img/7.jpg" },
        { name: "Mie Kuah Waduk", price: "32K", desc: "Mie kuah kaldu hangat yang gurih.", img: "img/7.jpg" },
        { name: "Nila Bakar Nusantara", price: "35K", desc: "Nila bakar bumbu rempah spesial.", img: "img/7.jpg" },
        { name: "Nila Asam Manis", price: "42K", desc: "Ikan nila segar dengan saus asam manis.", img: "img/7.jpg" }
    ],
    'signature-food': [
        { name: "DKS Breakfast", price: "37K", desc: "Menu sarapan spesial ala DKS.", img: "img/7.jpg" },
        { name: "Nasi Goreng Dermaga", price: "35K", desc: "Nasi goreng khas Dermaga.", img: "img/7.jpg" },
        { name: "Vanilla Tape Golden Glazed", price: "30K", desc: "Olahan tape manis dengan glasir vanilla emas.", img: "img/7.jpg" },
        { name: "Chicken Cordon Blue", price: "42K", desc: "Daging ayam isi keju dan daging asap digoreng crispy.", img: "img/7.jpg" }
    ],
    'snacks': [
        { name: "DKS Deluxe Platter", price: "45K", desc: "Aneka gorengan dan cemilan dalam satu porsi.", img: "img/7.jpg" },
        { name: "Frenc Fries", price: "28K", desc: "Kentang goreng renyah.", img: "img/7.jpg" },
        { name: "Chicken Finger", price: "32K", desc: "Stik ayam crispy.", img: "img/7.jpg" },
        { name: "The Golden Tape", price: "25K", desc: "Tape pilihan digoreng keemasan.", img: "img/7.jpg" },
        { name: "Melty Choco-Cheese", price: "25K", desc: "Cemilan lumer rasa cokelat dan keju.", img: "img/7.jpg" },
        { name: "Banana Stick", price: "26K", desc: "Stik pisang manis renyah.", img: "img/7.jpg" },
        { name: "The Origin Tempeh", price: "23K", desc: "Tempe goreng otentik.", img: "img/7.jpg" },
        { name: "Cruncy Prawn Bites", price: "33K", desc: "Cemilan udang renyah ukuran gigit.", img: "img/7.jpg" },
        { name: "Deluxe France Churros", price: "28K", desc: "Churros gaya Prancis yang lezat.", img: "img/7.jpg" },
        { name: "Triplee S", price: "28K", desc: "Menu snack spesial.", img: "img/7.jpg" }
    ],

    // --- MINUMAN (MINUMAN / COFFEE & NON-COFFEE) ---
    'classic': [
        { name: "Americano", price: "25K", desc: "Espresso dengan air (Hot/Cold).", img: "img/7.jpg" },
        { name: "Magic", price: "27K", desc: "Double ristretto dengan susu (Hot).", img: "img/7.jpg" },
        { name: "Cafe Latte", price: "28K", desc: "Espresso dan susu lembut (Hot/Cold).", img: "img/7.jpg" }
    ],
    'flavour': [
        { name: "Brown Sugar Latte", price: "28K", desc: "Kopi susu dengan brown sugar (Cold).", img: "img/7.jpg" },
        { name: "Klepon Latte", price: "28K", desc: "Kopi susu dengan cita rasa klepon khas (Cold).", img: "img/7.jpg" },
        { name: "Tiramisu Latte", price: "32K", desc: "Kopi susu rasa tiramisu yang kaya (Cold).", img: "img/7.jpg" },
        { name: "Pecan Praline Latte", price: "30K", desc: "Kopi susu dengan aroma pecan praline (Cold).", img: "img/7.jpg" },
        { name: "Butterscotch Latte", price: "30K", desc: "Kopi susu dengan saus butterscotch manis (Cold).", img: "img/7.jpg" },
        { name: "Salted Caramel Macchiato Latte", price: "30K", desc: "Perpaduan karamel asin dan espresso (Cold).", img: "img/7.jpg" }
    ],
    'manual-brew': [
        { name: "Vietnam Drip", price: "24K", desc: "Kopi hitam tebal dengan krimer kental manis.", img: "img/7.jpg" },
        { name: "Japanese", price: "33K", desc: "V60 seduh panas langsung flash-ice.", img: "img/7.jpg" },
        { name: "Pour V60", price: "33K", desc: "Seduhan V60 dengan karakter clean.", img: "img/7.jpg" },
        { name: "Cold Brew", price: "23K", desc: "Kopi seduh dingin yang halus.", img: "img/7.jpg" }
    ],
    'signature-coffee': [
        { name: "Dermaga Kopi Frape", price: "40K", desc: "Blended coffee spesial khas Dermaga (Cold).", img: "img/7.jpg" },
        { name: "DK Choco Frape", price: "39K", desc: "Blended cokelat khas DK (Cold).", img: "img/7.jpg" }
    ],
    'milk-base': [
        { name: "Choco Peanut", price: "33K", desc: "Cokelat dengan sentuhan kacang (Cold/Hot).", img: "img/7.jpg" },
        { name: "Choco Salted Caramel", price: "33K", desc: "Cokelat dengan karamel asin (Cold/Hot).", img: "img/7.jpg" },
        { name: "Matcha Latte", price: "28K", desc: "Matcha creamy (Cold/Hot).", img: "img/7.jpg" },
        { name: "Matcha Cheese Cream", price: "30K", desc: "Matcha dengan lapisan cream keju (Cold).", img: "img/7.jpg" },
        { name: "Red Velvet", price: "26K", desc: "Minuman red velvet lembut (Cold/Hot).", img: "img/7.jpg" }
    ],
    'refresh': [
        { name: "Sunset Coffee", price: "28K", desc: "Minuman kopi dengan sensasi menyegarkan (Cold).", img: "img/7.jpg" },
        { name: "Strawberry Yakult", price: "26K", desc: "Perpaduan stroberi dan Yakult (Cold).", img: "img/7.jpg" },
        { name: "Lychee Yakult", price: "27K", desc: "Perpaduan leci dan Yakult (Cold).", img: "img/7.jpg" },
        { name: "Grey Season", price: "28K", desc: "Menu mocktail/refreshment spesial (Cold).", img: "img/7.jpg" },
        { name: "Greeny Day", price: "30K", desc: "Minuman segar bernuansa hijau (Cold).", img: "img/7.jpg" }
    ],
    'mocktail': [
        { name: "Mix Summer", price: "27K", desc: "Mocktail buah segar ala musim panas (Cold).", img: "img/7.jpg" },
        { name: "The Shirley", price: "28K", desc: "Minuman mocktail klasik menyegarkan (Cold).", img: "img/7.jpg" },
        { name: "Ruby Mint Fizz", price: "26K", desc: "Soda dengan sentuhan mint dan buah merah (Cold).", img: "img/7.jpg" },
        { name: "Lychee Squash", price: "27K", desc: "Mocktail buah leci dengan soda (Cold).", img: "img/7.jpg" },
        { name: "Green Apple Lemonade", price: "26K", desc: "Lemonade apel hijau yang asam manis (Cold).", img: "img/7.jpg" }
    ],
    'tea': [
        { name: "Strawberry Tea", price: "20K", desc: "Teh dengan rasa stroberi (Cold/Hot).", img: "img/7.jpg" },
        { name: "Lychee Tea", price: "20K", desc: "Teh buah leci segar (Cold/Hot).", img: "img/7.jpg" },
        { name: "Lemon Tea", price: "18K", desc: "Teh lemon segar (Cold/Hot).", img: "img/7.jpg" }
    ]
};

// ==========================================
// 5. MENU LOGIC (FILTER & RENDER)
// ==========================================
function showSubMenu(mainCat) {
    const container = document.getElementById('sub-tabs-container');
    const mainBtns = document.querySelectorAll('.main-tab');
    if (!container) return;

    const selectedCat = mainCat.toLowerCase().trim();

    mainBtns.forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase().trim() === selectedCat);
    });

    container.innerHTML = '';

    if (subCategories[selectedCat] && selectedCat !== 'snacks') {
        container.style.display = 'flex';
        subCategories[selectedCat].forEach((sub, index) => {
            const btn = document.createElement('button');
            btn.className = `sub-tab text-[10px] uppercase tracking-widest px-4 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-all cursor-pointer text-white`;
            btn.innerText = sub.label;
            btn.onclick = () => {
                document.querySelectorAll('.sub-tab').forEach(s => s.classList.remove('bg-white', 'text-black'));
                btn.classList.add('bg-white', 'text-black');
                filterMenu(sub.id);
            };
            container.appendChild(btn);
            if(index === 0) btn.click();
        });
    } else {
        container.style.display = 'none';
        filterMenu(selectedCat);
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
                    <img src="${item.img}" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" onerror="this.src='https://via.placeholder.com/400x400?text=Dermaga+Kopi'">
                </div>
                <div class="flex justify-between items-start mb-2 gap-2">
                    <h4 class="font-bold text-sm text-white uppercase tracking-tight">${item.name}</h4>
                    <span class="text-gold font-bold text-sm">RP ${item.price}</span>
                </div>
                <p class="text-[10px] text-zinc-500 line-clamp-2 leading-relaxed">${item.desc}</p>
            `;
            grid.appendChild(card);
        });
    }
    AOS.refresh();
}

// ==========================================
// 6. MODAL LOGIC (MENU & GALLERY)
// ==========================================
function openModal(item) {
    const modal = document.getElementById('menu-modal');
    const content = document.getElementById('modal-content');
    if (!modal || !content) return;

    content.innerHTML = `
        <div class="flex flex-col md:flex-row bg-zinc-950">
            <div class="md:w-5/12 h-64 md:h-auto overflow-hidden">
                <img src="${item.img}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/600x600?text=Dermaga+Kopi'">
            </div>
            <div class="md:w-7/12 p-6 md:p-10">
                <h2 class="text-2xl font-bold mb-4 text-white uppercase tracking-wider">${item.name}</h2>
                <p class="text-gray-400 text-sm mb-8 leading-relaxed">${item.desc}</p>
                <div class="text-2xl font-bold text-gold">RP ${item.price}</div>
            </div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('menu-modal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==========================================
// 7. GALLERY LOGIC
// ==========================================
const galleryImages = [
    'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg',
    'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/0.jpg'
];

function initGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    galleryImages.forEach((src, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'gallery-item';
        wrapper.setAttribute('data-aos', 'fade-up');
        wrapper.setAttribute('data-aos-delay', (index % 4) * 100);
        
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        img.onerror = () => { img.src = 'https://via.placeholder.com/600x600?text=Dermaga+Kopi'; };
        
        wrapper.onclick = () => openGalleryModal(src);
        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });

    // Inisialisasi event listener untuk menutup modal galeri (Luar Gambar & Esc)
    const galleryModal = document.getElementById('gallery-modal');
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            // Jika klik pada background (bukan pada gambar modal-img), maka tutup
            if (e.target.id === 'gallery-modal') {
                closeGalleryModal();
            }
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeGalleryModal();
    });
}

function openGalleryModal(src) {
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    if (!modal || !modalImg) return;
    
    modalImg.src = src;
    modal.classList.add('flex'); // Pastikan menggunakan flex untuk pemusatan
    modal.classList.remove('hidden');
    
    setTimeout(() => { 
        modal.style.opacity = "1"; 
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeGalleryModal() {
    const modal = document.getElementById('gallery-modal');
    if (!modal) return;
    
    modal.style.opacity = "0";
    setTimeout(() => { 
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 500);
    document.body.style.overflow = 'auto';
}
