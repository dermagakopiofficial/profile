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
        { id: 'chicken', label: 'Chicken Series' },
        { id: 'beef', label: 'Beef Series' },
        { id: 'dermaga', label: 'Dermaga Series' }
    ],
    'coffee': [
        { id: 'classic', label: 'Classic' },
        { id: 'flavour', label: 'Flavour Series' },
        { id: 'manual-brew', label: 'Manual Brew' },
        { id: 'coffee-mocktail', label: 'Coffee Mocktail' },
        { id: 'signature', label: 'Signature' }
    ],
    'non-coffee': [
        { id: 'mocktail', label: 'Mocktail' },
        { id: 'milk-base', label: 'Milk Base' },
        { id: 'chocolate', label: 'Chocolate' },
        { id: 'tea', label: 'Tea Series' }
    ],
    'snack': [
        { id: 'snacks', label: 'Snack Series' }
    ]
};

const menuData = {
    'chicken': [
        { name: "Chicken Barbeque", price: "30K", desc: "Ayam saus BBQ manis-gurih dengan aroma smoky, lengkap dengan nasi, telur, dan sayuran segar.", img: "img/7.jpg" },
        { name: "Chicken Blackpepper", price: "30K", desc: "Potongan ayam dengan saus lada hitam, memberikan sensasi pedas hangat dan aroma kuat." , img: "img/7.jpg"},
        { name: "Chicken Karage", price: "32K", desc: "Ayam goreng ala Jepang yang renyah & juicy, disajikan dengan nasi, telur, dan saus spicy mayo.", img: "img/7.jpg" },
        { name: "Chicken Teriyaki", price: "28K", desc: "Ayam saus teriyaki yang manis dan meresap, disajikan dengan telur dan taburan wijen.", img: "img/7.jpg" }
    ],
    'beef': [
        { name: "Beef Barbeque", price: "46K", desc: "Daging sapi dalam balutan saus BBQ dengan aroma smoky, disajikan bersama nasi, telur, & irisan tomat segar." , img: "img/7.jpg"},
        { name: "Beef Teriyaki", price: "49K", desc: "Daging sapi yang ditumis dengan saus teriyaki manis-gurih, lengkap dengan nasi hangat & tamagoyaki.", img: "img/7.jpg" },
        { name: "Beef Blackpepper", price: "45K", desc: "Irisan daging sapi dengan saus lada hitam yang hangat. Disajikan dengan nasi putih & tamagoyaki." , img: "img/7.jpg"}
    ],
    'dermaga': [
        { name: "Nila Bakar Nusantara", price: "35K", desc: "Nila bakar bumbu rempah spesial, disajikan dengan nasi, sambal korek, & lalapan segar." , img: "img/7.jpg"},
        { name: "Ayam Bakar Nusantara", price: "35K", desc: "Ayam bakar bumbu gurih-manis, lengkap dengan nasi hangat & sambal pedas." , img: "img/7.jpg"},
        { name: "Nasi Goreng Dermaga", price: "35K", desc: "Nasi goreng khas Dermaga dengan topping telur mata sapi, irisan ayam, dan kerupuk." , img: "img/7.jpg"},
        { name: "Mie Goreng Dermaga", price: "32K", desc: "Mie goreng bumbu kaya rasa dengan topping sosis & bakso, ditemani telur mata sapi." , img: "img/7.jpg"},
        { name: "Mie Kuah Waduk", price: "32K", desc: "Mie kuah kaldu hangat yang gurih, disajikan dengan telur, ayam, dan sayuran hijau segar.", img: "img/7.jpg" }
    ],
    'snacks': [
        { name: "Nugget", desc: "Teman istirahatmu" , price: "28K" , img: "img/7.jpg"},
        { name: "Mix Platter", desc: "Teman istirahatmu", price: "33K" , img: "img/7.jpg"},
        { name: "Kentang Goreng", desc: "Teman istirahatmu", price: "25K", img: "img/7.jpg"},
        { name: "Pisang Stick", desc: "Teman istirahatmu", price: "23K" , img: "img/7.jpg"},
        { name: "Ropang", desc: "Teman istirahatmu", price: "22K", img: "img/7.jpg" },
        { name: "Tape Goreng", desc: "Teman istirahatmu", price: "22K", img: "img/7.jpg" },
        { name: "Jamur Crispy", desc: "Teman istirahatmu", price: "28K", img: "img/7.jpg" },
        { name: "Sosis Keju", desc: "Teman istirahatmu", price: "22K" , img: "img/7.jpg"},
        { name: "Tempe Kemul", desc: "Teman istirahatmu", price: "25K", img: "img/7.jpg" }
    ],
    'classic': [
        { name: "Espresso", price: "18K", desc: "Sari kopi hitam pekat dengan rasa yang kuat dan intens. (Hot)" , img: "img/7.jpg"},
        { name: "Americano", price: "21K", desc: "Espresso yang disajikan dengan air panas/dingin. Clean, ringan, karakter kopi tetap kuat. (Hot/Ice)" , img: "img/7.jpg"},
        { name: "Caramel Macchiato", price: "23K", desc: "Espresso dengan saus caramel dan sedikit foam. Tajam namun lebih halus di ujung. (Hot)", img: "img/7.jpg" },
        { name: "Caffe Latte", price: "27K", desc: "Espresso dan susu yang lebih creamy. Lembut dan nyaman diminum. (Hot/Ice)" , img: "img/7.jpg"},
        { name: "Cappuccino", price: "28K", desc: "Espresso dengan susu dan foam tebal. Creamy, ringan, dan seimbang. (Hot)" , img: "img/7.jpg"},
        { name: "Affogato", price: "26K", desc: "Es krim vanilla disiram espresso panas. Manis, creamy, dan nendang. (Ice)" , img: "img/7.jpg"}
    ],
    'flavour': [
        { name: "Butterscotch Latte", price: "29K", desc: "Kopi susu dingin dengan rasa butterscotch yang manis, lembut, dan creamy. (Ice)" , img: "img/7.jpg"},
        { name: "Vanilla Latte", price: "28K", desc: "Kopi susu yang lembut, manis tipis, dan aroma vanilla. (Ice)", img: "img/7.jpg" },
        { name: "Hazelnut Latte", price: "28K", desc: "Kopi susu yang nutty, wangi, dan creamy. (Ice)" , img: "img/7.jpg"},
        { name: "Caramel Latte", price: "28K", desc: "Manis-legit karamel yang nempel di susu, kopi tetap terasa. (Ice)" , img: "img/7.jpg"},
        { name: "Brown Sugar", price: "26K", desc: "Kopi susu yang manis legit natural. (Ice)" , img: "img/7.jpg"}
    ],
    'manual-brew': [
        { name: "Vietnam Drip", price: "24K", desc: "Kopi hitam tebal dengan krimer kental manis." , img: "img/7.jpg"},
        { name: "Japanese", price: "33K", desc: "V60 yang seduh panas langsung flash-ice. Ringan, segar, aroma tajam.", img: "img/7.jpg" },
        { name: "Pour V60", price: "33K", desc: "Seduhan V60 dengan karakter clean dan aromatik." , img: "img/7.jpg"},
        { name: "Cold Brew", price: "23K", desc: "Kopi hitam yang diseduh dengan air dingin. Halus, fruity tipis, mudah diminum.", img: "img/7.jpg" }
    ],
    'coffee-mocktail': [
        { name: "Irish Coffee", price: "28K", desc: "Kopi hangat dengan karakter bold dan creamy, gaya klasik Irish coffee.", img: "img/7.jpg" },
        { name: "Kopi Sore", price: "27K", desc: "Americano dengan sentuhan manis dan segar. Lebih smooth.", img: "img/7.jpg" },
        { name: "Sweet Sour Coffee", price: "26K", desc: "Mocktail kopi dengan rasa fruity dan sparkling. Unik dan seimbang.", img: "img/7.jpg" }
    ],
    'signature': [
        { name: "Chocolatte Frape", price: "36K", desc: "Coklat blended pekat yang creamy, kental, dan aroma wangi khas.", img: "img/7.jpg" },
        { name: "Dermaga Kopi Frape", price: "38K", desc: "Blended coffee dengan tekstur lembut dan creamy, disajikan dingin.", img: "img/7.jpg" }
    ],
    'mocktail': [
        { name: "Lemon Squash", price: "24K", desc: "Lemon dan soda dengan rasa asam segar yang ringan." , img: "img/7.jpg"},
        { name: "Leci Squash", price: "24K", desc: "Perpaduan lychee dan soda manis-asam seimbang.", img: "img/7.jpg" },
        { name: "Dee Beer", price: "26K", desc: "Perpaduan salted caramel dan soda dengan cream lembut." , img: "img/7.jpg"},
        { name: "Virgin Mojito", price: "22K", desc: "Jeruk nipis, mint, dan soda. Segar dan menyenangkan.", img: "img/7.jpg" }
    ],
    'milk-base': [
        { name: "Matcha Cheese Cream", price: "29K", desc: "Matcha dingin dengan cream keju lembut di atasnya.", img: "img/7.jpg" },
        { name: "Vanilla Milk Shake", price: "23K", desc: "Vanilla wangi, creamy, dan ringan.", img: "img/7.jpg" },
        { name: "Matcha Latte", price: "26K", desc: "Matcha creamy dengan rasa earthy halus. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Chocolatte Milk Shake", price: "25K", desc: "Coklat tebal, dingin, dan super creamy." , img: "img/7.jpg"},
        { name: "Red Velvet", price: "24K", desc: "Creamy, sedikit coklat dengan aroma vanilla lembut. (Hot/Ice)", img: "img/7.jpg" }
    ],
    'chocolate': [
        { name: "Mocha", price: "32K", desc: "Perpaduan espresso dan cokelat dengan susu creamy. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Chocolate Vanilla", price: "32K", desc: "Coklat creamy dengan sentuhan vanilla lembut. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Chocolate Caramel", price: "32K", desc: "Coklat gurih manis dengan caramel depth kaya. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Chocolate Hazelnut", price: "33K", desc: "Cokelat lembut dengan aroma hazelnut kaya. (Hot/Ice)" , img: "img/7.jpg"}
    ],
    'tea': [
        { name: "Lychee Tea", price: "20K", desc: "Teh seduh dengan buah leci segar dan manis tipis natural. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Strawberry Tea", price: "20K", desc: "Teh fruity manis-asam, aroma segar dan ringan. (Hot/Ice)", img: "img/7.jpg" },
        { name: "Lemon Tea", price: "18K", desc: "Teh segar dengan perasan lemon, asam manis ringan. (Hot/Ice)" , img: "img/7.jpg"}
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