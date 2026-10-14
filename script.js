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
        { id: 'dermaga', label: 'Main Coars' },
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
        { name: "Chicken Karage", price: "34K", desc: "Ayam goreng ala Jepang yang renyah & juicy, disajikan dengan nasi, telur, saus spicy mayo.", img: "menus/karage.png" },
        { name: "Chicken Blackpaper", price: "32K", desc: "Potongan ayam dengan saus lada hitam, memberikan sensasi pedas hangat dan aroma yang kuat.", img: "menus/chickenbpp.png" },
        { name: "Chicken BBQ", price: "32K", desc: "Ayam dengan saus BBQ yang manis-gurih, lengkap dengan nasi, telur, dan sayur segar.", img: "menus/chickenbbq.png" },
        { name: "Chicken Teriyaki", price: "32K", desc: "Ayam saus teriyaki yang manis dan meresap, disajikan dengan telur dan taburan wijen.", img: "menus/chickenteriyaki.png" },
        { name: "Ayam Cincane", price: "40K", desc: "Ayam filet dengan bumbu rempah khas sulawesi yang kuat, wangi, dan unik.", img: "menus/cincane.png" }
    ],
    'beef': [
        { name: "Beef Blackpaper", price: "49K", desc: "Beef slice tumis dengan saus lada hitam yang nendang dan sensasi pedas dan hangat, disajikan lengkap dengan telur tamago khas jepang yang khas & unik.", img: "menus/beefbpp.png" },
        { name: "Beef Teriyaki", price: "47K", desc: "Beef slice tumis dengan saus teriyaki yang manis-gurih, disajikan lengkap dengan telur tamago khas jepang yang khas dan unik.", img: "menus/beefteriyaki.png" },
        { name: "Beef BBQ", price: "45K", desc: "Beef Slice tumis dengan saus BBQ yang manis-gurih yang smoky, lengkap dengan telur tamago khas jepang yang khas dan unik", img: "menus/beefbbq.png" }
    ],
    'dermaga': [
        { name: "Mie Goreng Dermaga", price: "32K", desc: "Mie telur pipih yang di goreng dengan bumbu kaya rasa khas Dermaga dengan toping sosis, bakso, ayam, dan telur yang pedasnya bisa disesuaikan dengan selera.", img: "menus/miegoreng.png" },
        { name: "Mie Kuah Waduk", price: "32K", desc: "Mie telur pipih dengan kuah kaldu kaya rasa khas Dermaga dengan toping sosis, bakso, ayam, dan telur yang pedasnya bisa disesuaikan dengan selera.", img: "menus/miekuah.png" },
        { name: "Nila Bakar Nusantara", price: "35K", desc: "Nila bakar dengan bumbu rempah spesial khas Dermaga, disajikan dengan nasi, sambal korek, & lalapan", img: "menus/ikanbakar.png" },
        { name: "Nila Asam Manis", price: "42K", desc: "Nila goreng dengan balutan saus asam manis yang kaya rasa dan toping melimpah.", img: "menus/asammanis.png" }
    ],
    'signature-food': [
        { name: "DKS Breakfast", price: "37K", desc: "Daging ayam panggang gurih yang juicy, disajikan dengan garlic toast renyah, salad segar, dan saus keju spesial yang soft dan gurih.", img: "menus/breakfast.png" },
        { name: "Nasi Goreng Dermaga", price: "35K", desc: "Nasi Goreng Khas Dermaga dengan topping irisan ayam, sosis, bakso dan telur yang pedasnya bisa disesuaikan sesuai selera", img: "menus/nasgor.png" },
        { name: "Vanilla Tape Golden Glazed", price: "30K", desc: "Dessert khas Dermaga yang unik, dengan citarasa manis, wangi vanilla, dan komplesitas Tape.", img: "menus/tapeeskrim.png" },
        { name: "Chicken Cordon Blue", price: "42K", desc: "Dada ayam filet empuk dibalut dengan tepung roti dan smoked chicken gurih dengan saus tartar.", img: "menus/cordon.png" }
    ],
    'snacks': [
        { name: "DKS Deluxe Platter", price: "45K", desc: "Kombinasi snack favorit dalam satu piring saji, cocok untuk sharing 3-4 orang.", img: "menus/mix.png" },
        { name: "Frenc Fries", price: "28K", desc: "Kentang goreng renyah diluar dan lembut didalam, ditaburi bumbu gurih dan keju mozarella diatasnya.", img: "menus/kentang.png" },
        { name: "Chicken Finger", price: "32K", desc: "Dada ayam filet yang dipotong memanjang seperti jari, digoreng dengan tepung renyah, disajikan dengan saus pedas dan tomat.", img: "menus/finger.png" },
        { name: "The Golden Tape", price: "25K", desc: "Tape goreng keemasan yang disajikan dengan topinh parutan keju dan saus coklat yang manis legit.", img: "menus/tape.png" },
        { name: "Melty Choco-Cheese", price: "25K", desc: "Roti panggang renyah dengan isian coklat crumble yang manis, gurih. disajikan dengan parutan keju dan saus coklat.", img: "menus/ropang.png" },
        { name: "Banana Stick", price: "26K", desc: "Pisang manis yang dipotong memanjang dan digoreng keemasan yang manis renyah, disajikan dengan parutan keju dan saus coklat.", img: "menus/pisang.png" },
        { name: "The Origin Tempeh", price: "23K", desc: "Tempe djawa yang digoreng dengan balutan tepung bumbu yang khas, gurih, dan renyah.", img: "menus/tempe.png" },
        { name: "Deluxe France Churros", price: "28K", desc: "Pastry goreng khas Prancis yang manis dan soft, disajikan dengan saus coklat, dan eskrim khas dermaga yang unik.", img: "menus/churos.png" },
        { name: "Triplee S", price: "28K", desc: "Sosis daging sapi goreng yang disajikan dengan parutan keju dan saus keju yang gurih dan unik.", img: "menus/3s.png" }
    ],

    // --- MINUMAN (MINUMAN / COFFEE & NON-COFFEE) ---
    'classic': [
        { name: "Americano (h/c)", price: "25K", desc: "Kopi hitam yang dicampur dengan air panas atau dingin sesuai selera.", img: "menus/americano.png" },
        { name: "Magic (h)", price: "27K", desc: "Perpaduan kopi hitam pekat dengan susu steam hangat dengan tekstur halus dan foam tipis.", img: "menus/magic.png" },
        { name: "Cafe Latte (h/c)", price: "28K", desc: "Perpaduan kopi hitam dan susu hangat atau dingin dan es batu sesuai selera.", img: "menus/cafe.png" }
    ],
    'flavour': [
        { name: "Brown Sugar Latte (c)", price: "28K", desc: "Latte dengan gula aren khas yang manis, smoky dan es batu sesuai selera.", img: "menus/brown.png" },
        { name: "Klepon Latte (c)", price: "28K", desc: "Latte dengan sentuhan flavour khas yang manis, gurih dan es batu sesuai selera.", img: "menus/klepon.png" },
        { name: "Tiramisu Latte (c)", price: "32K", desc: "Latte dengan sentuhan flavour khas dessert yang manis legit dan gurih.", img: "menus/tiramisu.png" },
        { name: "Pecan Praline Latte (c)", price: "30K", desc: "Latte dengan sentuhan flavour kacang yang unik.", img: "menus/pecan.png" },
        { name: "Butterscotch Latte (c)", price: "30K", desc: "Latte dengan sentuhan flavour candy khas Russia yang kaya rasa", img: "menus/butter.png" },
        { name: "Salted Caramel Macchiato Latte (c)", price: "30K", desc: "Latte dengan sentuhan manis dan gurih yang bold dan gurih.", img: "menus/salted.png" }
    ],
    'manual-brew': [
        { name: "Vietnam Drip", price: "24K", desc: "Kopi hitam tebal, dengan susu kental manis.", img: "menus/vietnam.png" },
        { name: "Japanese", price: "33K", desc: "coffee yang di seduh panas yang langsung diteteskan di atas es batu untuk mengunci aroma buah dari biji kopi.", img: "menus/japanese.png" },
        { name: "Pour V60", price: "33K", desc: "Menggunakan metode seduh kopi manual brew dengan teknik pour over. (Rasanya ringan dan lebih kompleks.)", img: "menus/pour.png" },
        { name: "Cold Brew", price: "23K", desc: "Kopi hitam yang di seduh dengan air dingin. (Rasa halus, fruity tipis dan gampang diminum)", img: "menus/coldbrew.png" }
    ],
    'signature-coffee': [
        { name: "Dermaga Kopi Frappe (c)", price: "40K", desc: "Kopi susu blend yang dipadukan dengan biscuit yang bold, creamy dan renyah.", img: "menus/dermagafrape.png" },
        { name: "DK Choco Frappe (c)", price: "39K", desc: "Coklat blend yang manis, creamy, dan wangi unik yang khas.", img: "menus/chocofrape.png" }
    ],
    'milk-base': [
        { name: "Choco Peanut (c/h)", price: "33K", desc: "Coklat susu dengan sentuhan flavour kacang yang unik", img: "menus/chocopeanut.png" },
        { name: "Choco Salted Caramel (c/h)", price: "33K", desc: "Coklat susu dengan sentuhan manis dan gurih yang kaya rasa.", img: "menus/chocosalted.png" },
        { name: "Matcha Latte (c/h)", price: "28K", desc: "Perpaduan Matcha dan susu yang creamy dan lembut, hot atau ice sesuai selera", img: "menus/mala.png" },
        { name: "Matcha Cheese Cream (c)", price: "30K", desc: "Matcha latte yang dipadukan dengan couldfoam keju yang gurih, manis, creamy.", img: "menus/mache.png" },
        { name: "Red Velvet (c/h)", price: "26K", desc: "Perpaduan susu segar dengan sensasi RedVelvet yang manis creamy dan sentuhan kakao yang khas.", img: "menus/red.png" }
    ],
    'refresh': [
        { name: "Sunset Coffee (c)", price: "28K", desc: "", img: "menus/sunset.png" },
        { name: "Grey Season (c)", price: "28K", desc: "Anggur hitam blend yang padukan dengan orange juice, dingin dan menyegarkan.", img: "menus/grey.png" },
        { name: "Ruby Mint Fizz (c)", price: "26K", desc: "Perpaduan buah berry dan lychee dengan soda", img: "menus/ruby.png" },
        { name: "Greeny Day (c)", price: "30K", desc: "Sayur chaism segar yang dipadukan dengan juice nanas yang fruity, manis, segar, unik.", img: "menus/greeny.png" }
    ],
    'mocktail': [
        { name: "Mix Summer (c)", price: "27K", desc: "Perpaduan berry, lychee, dan curacao dan mint, manis dan menyegarkan.", img: "menus/summer.png" },
        { name: "The Shirley (c)", price: "28K", desc: "Perpaduan soda yang menyegarkan, cream vanilla, dan flavour framz yang manis.", img: "menus/shirley.png" },
        { name: "Lychee Squash (c)", price: "27K", desc: "Perpaduan lychee dan soda dengan karakter rasa manis-asam yang seimbang. Segar, ringan dan aromatik.", img: "menus/lychee.png" },
        { name: "Green Apple Lemonade (c)", price: "26K", desc: "Perpaduan Green apple, mint, lime, dan soda. Menjadikan rasa yang Manis-asam, fresh & sparkling.", img: "menus/green.png" }
    ],
    'tea': [
        { name: "Strawberry Tea (c/h)", price: "20K", desc: "Teh seduh yang khas dengan fruity manis-asam, aromanya segar dan ringan.", img: "menus/strawberrytea.png" },
        { name: "Lychee Tea (c/h)", price: "20K", desc: "Teh seduh yang khas dengan buah leci segar dan manis tipis yang natural", img: "menus/lycheetea.png" },
        { name: "Lemon Tea (c/h)", price: "20K", desc: "Teh segar dengan perasan lemon, menghadirkan rasa asam manis yang ringan dan menyegarkan.", img: "menus/lemontea.png" }
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
    'img/5.jpg', 'img/6.jpg', 'menus/beefbpp.png', 'img/0.jpg'
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