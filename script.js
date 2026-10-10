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
        if (isActive) {
            nav.classList.add('bg-black');
        } else if (window.scrollY <= 50) {
            nav.classList.remove('bg-black');
        }
    }
}

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
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
        }, {
            duration: 500,
            fill: "forwards"
        });
    }
});

// ==========================================
// 4. KATEGORI MENU
// ==========================================
const subCategories = {
    'food': [
        { id: 'snacks', label: 'Snack & Dessert' },
        { id: 'signature-food', label: 'Signature' },
        { id: 'chicken', label: 'Chicken Base' },
        { id: 'beef', label: 'Beef Series' },
        { id: 'main-course', label: 'Main Course' }
    ],

    'coffee': [
        { id: 'classic', label: 'Classic Coffee' },
        { id: 'flavour', label: 'Flavour Coffee' },
        { id: 'coffee-signature', label: 'Signature' },
        { id: 'manual-brew', label: 'Manual Brew' }
    ],

    'non-coffee': [
        { id: 'milk-base', label: 'Milk Base' },
        { id: 'refresh', label: 'Refresh' },
        { id: 'mocktail', label: 'Mocktail' },
        { id: 'tea', label: 'Tea Base' }
    ],

    'snack': [
        { id: 'snacks', label: 'Snack & Dessert' }
    ]
};

// ==========================================
// 5. DATA MENU TERBARU
// Harga ditulis dalam ribuan rupiah (K)
// ==========================================
const menuData = {

    // --------------------------------------
    // CLASSIC COFFEE
    // --------------------------------------
    'classic': [
        {
            name: "Americano (H/C)",
            price: "25K",
            desc: "Kopi klasik berbasis espresso dengan karakter rasa kopi yang bersih. Tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Magic (H)",
            price: "27K",
            desc: "Minuman kopi berbasis espresso dengan perpaduan susu, disajikan panas.",
            img: "img/7.jpg"
        },
        {
            name: "Cafe Latte (H/C)",
            price: "28K",
            desc: "Espresso berpadu susu dengan tekstur lembut dan creamy. Tersedia panas atau dingin.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // FLAVOUR COFFEE
    // --------------------------------------
    'flavour': [
        {
            name: "Brown Sugar Latte (C)",
            price: "28K",
            desc: "Latte dengan perpaduan kopi, susu, dan rasa manis khas brown sugar.",
            img: "img/7.jpg"
        },
        {
            name: "Klepon Latte (C)",
            price: "28K",
            desc: "Latte dengan inspirasi rasa klepon khas Indonesia.",
            img: "img/7.jpg"
        },
        {
            name: "Tiramisu Latte (C)",
            price: "32K",
            desc: "Latte dengan sentuhan rasa tiramisu yang khas.",
            img: "img/7.jpg"
        },
        {
            name: "Pecan Praline Latte (C)",
            price: "30K",
            desc: "Latte dengan perpaduan kopi dan sentuhan pecan praline.",
            img: "img/7.jpg"
        },
        {
            name: "Butterscotch Latte (C)",
            price: "30K",
            desc: "Latte dengan rasa butterscotch manis dan creamy.",
            img: "img/7.jpg"
        },
        {
            name: "Salted Caramel Macchiato Latte (C)",
            price: "30K",
            desc: "Latte dengan perpaduan salted caramel dan karakter kopi.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // SIGNATURE COFFEE
    // --------------------------------------
    'coffee-signature': [
        {
            name: "Dermaga Kopi Frappe (C)",
            price: "40K",
            desc: "Minuman frappe khas Dermaga Kopi dengan tekstur dingin dan creamy.",
            img: "img/7.jpg"
        },
        {
            name: "DK Choco Frappe (C)",
            price: "39K",
            desc: "Frappe cokelat dengan tekstur lembut dan creamy.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // MILK BASE
    // --------------------------------------
    'milk-base': [
        {
            name: "Choco Peanut (C/H)",
            price: "33K",
            desc: "Perpaduan cokelat dan kacang yang nikmat, tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Choco Salted Caramel (C/H)",
            price: "33K",
            desc: "Cokelat dengan perpaduan rasa salted caramel, tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Matcha Latte (C/H)",
            price: "28K",
            desc: "Matcha berpadu susu dengan rasa khas yang lembut, tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Matcha Cheese Cream (C)",
            price: "30K",
            desc: "Matcha dingin dengan tambahan cheese cream.",
            img: "img/7.jpg"
        },
        {
            name: "Red Velvet (C/H)",
            price: "26K",
            desc: "Minuman red velvet creamy dengan sentuhan rasa manis, tersedia panas atau dingin.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // REFRESH
    // --------------------------------------
    'refresh': [
        {
            name: "Sunset Coffee (C)",
            price: "28K",
            desc: "Minuman khas Sunset Coffee untuk menemani waktu santai.",
            img: "img/7.jpg"
        },
        {
            name: "Strawberry Yakult (C)",
            price: "26K",
            desc: "Perpaduan stroberi dan Yakult dengan sensasi segar.",
            img: "img/7.jpg"
        },
        {
            name: "Lychee Yakult (C)",
            price: "27K",
            desc: "Perpaduan leci dan Yakult dengan rasa segar.",
            img: "img/7.jpg"
        },
        {
            name: "Grey Season (C)",
            price: "28K",
            desc: "Minuman segar khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Greeny Day (C)",
            price: "30K",
            desc: "Minuman segar khas Dermaga Kopi.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // MOCKTAIL
    // --------------------------------------
    'mocktail': [
        {
            name: "Mix Summer (C)",
            price: "27K",
            desc: "Mocktail segar dengan karakter rasa musim panas.",
            img: "img/7.jpg"
        },
        {
            name: "The Shirley (C)",
            price: "28K",
            desc: "Mocktail dengan perpaduan rasa menyegarkan.",
            img: "img/7.jpg"
        },
        {
            name: "Ruby Mint Fizz (C)",
            price: "26K",
            desc: "Mocktail dengan sentuhan mint dan sensasi fizz.",
            img: "img/7.jpg"
        },
        {
            name: "Lychee Squash (C)",
            price: "27K",
            desc: "Minuman squash leci yang segar.",
            img: "img/7.jpg"
        },
        {
            name: "Green Apple Lemonade (C)",
            price: "26K",
            desc: "Perpaduan apel hijau dan lemonade dengan rasa segar.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // TEA BASE
    // --------------------------------------
    'tea': [
        {
            name: "Strawberry Tea (C/H)",
            price: "20K",
            desc: "Teh stroberi dengan rasa manis dan segar, tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Lychee Tea (C/H)",
            price: "20K",
            desc: "Teh leci dengan aroma buah yang segar, tersedia panas atau dingin.",
            img: "img/7.jpg"
        },
        {
            name: "Lemon Tea (C/H)",
            price: "20K",
            desc: "Teh lemon dengan perpaduan rasa asam dan manis, tersedia panas atau dingin.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // MANUAL BREW
    // --------------------------------------
    'manual-brew': [
        {
            name: "Vietnam Drip",
            price: "24K",
            desc: "Kopi seduh menggunakan metode Vietnam drip.",
            img: "img/7.jpg"
        },
        {
            name: "Japanese",
            price: "33K",
            desc: "Kopi seduh metode Japanese dengan karakter rasa yang segar.",
            img: "img/7.jpg"
        },
        {
            name: "Pour V60",
            price: "33K",
            desc: "Kopi seduh manual menggunakan metode V60.",
            img: "img/7.jpg"
        },
        {
            name: "Cold Brew",
            price: "23K",
            desc: "Kopi yang diseduh menggunakan air dingin.",
            img: "img/7.jpg"
        }
    ],

    // ======================================
    // MAKANAN: SNACK & DESSERT
    // ======================================
    'snacks': [
        {
            name: "DKS Deluxe Platter",
            price: "45K",
            desc: "Platter camilan pilihan untuk dinikmati bersama.",
            img: "img/7.jpg"
        },
        {
            name: "French Fries",
            price: "28K",
            desc: "Kentang goreng renyah.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken Finger",
            price: "32K",
            desc: "Potongan ayam goreng renyah.",
            img: "img/7.jpg"
        },
        {
            name: "The Golden Tape",
            price: "25K",
            desc: "Olahan tape dengan sajian khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Melty Choco-Cheese",
            price: "25K",
            desc: "Camilan dengan perpaduan cokelat dan keju.",
            img: "img/7.jpg"
        },
        {
            name: "Banana Stick",
            price: "26K",
            desc: "Camilan pisang berbentuk stik.",
            img: "img/7.jpg"
        },
        {
            name: "The Origin Tempeh",
            price: "23K",
            desc: "Olahan tempe sebagai camilan.",
            img: "img/7.jpg"
        },
        {
            name: "Crunchy Prawn Bites",
            price: "33K",
            desc: "Camilan udang renyah.",
            img: "img/7.jpg"
        },
        {
            name: "Deluxe France Churros",
            price: "28K",
            desc: "Churros dengan tekstur renyah di luar.",
            img: "img/7.jpg"
        },
        {
            name: "Triplee S",
            price: "28K",
            desc: "Camilan khas Dermaga Kopi.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // SIGNATURE FOOD
    // --------------------------------------
    'signature-food': [
        {
            name: "DKS Breakfast",
            price: "37K",
            desc: "Menu sarapan khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Nasi Goreng Dermaga",
            price: "35K",
            desc: "Nasi goreng khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Vanilla Tape Golden Glazzed",
            price: "30K",
            desc: "Olahan tape dengan vanilla dan lapisan golden glaze.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken Cordon Blue",
            price: "42K",
            desc: "Olahan ayam bergaya cordon bleu.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // CHICKEN BASE
    // --------------------------------------
    'chicken': [
        {
            name: "Chicken Karage",
            price: "34K",
            desc: "Ayam goreng karaage.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken Blackpaper",
            price: "32K",
            desc: "Ayam dengan saus lada hitam.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken BBQ",
            price: "32K",
            desc: "Ayam dengan saus BBQ.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken Teriyaki",
            price: "32K",
            desc: "Ayam dengan saus teriyaki.",
            img: "img/7.jpg"
        },
        {
            name: "Chicken Popcorn",
            price: "36K",
            desc: "Potongan ayam goreng berukuran kecil.",
            img: "img/7.jpg"
        },
        {
            name: "Sei Ayam Sambal Matah",
            price: "32K",
            desc: "Sei ayam dengan sambal matah.",
            img: "img/7.jpg"
        },
        {
            name: "Ayam Cincane",
            price: "40K",
            desc: "Ayam dengan bumbu cincane.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // BEEF SERIES
    // --------------------------------------
    'beef': [
        {
            name: "Beef Blackpaper",
            price: "49K",
            desc: "Daging sapi dengan saus lada hitam.",
            img: "img/7.jpg"
        },
        {
            name: "Beef Teriyaki",
            price: "47K",
            desc: "Daging sapi dengan saus teriyaki.",
            img: "img/7.jpg"
        },
        {
            name: "Beef BBQ",
            price: "45K",
            desc: "Daging sapi dengan saus BBQ.",
            img: "img/7.jpg"
        }
    ],

    // --------------------------------------
    // MAIN COURSE
    // --------------------------------------
    'main-course': [
        {
            name: "Mie Goreng Dermaga",
            price: "32K",
            desc: "Mie goreng khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Mie Kuah Waduk",
            price: "32K",
            desc: "Mie kuah hangat khas Dermaga Kopi.",
            img: "img/7.jpg"
        },
        {
            name: "Nila Bakar Nusantara",
            price: "35K",
            desc: "Ikan nila bakar dengan bumbu Nusantara.",
            img: "img/7.jpg"
        },
        {
            name: "Nila Asam Manis",
            price: "42K",
            desc: "Ikan nila dengan saus asam manis.",
            img: "img/7.jpg"
        }
    ]
};

// ==========================================
// 6. MENU LOGIC (FILTER & RENDER)
// ==========================================
function showSubMenu(mainCat) {
    const container = document.getElementById('sub-tabs-container');
    const mainBtns = document.querySelectorAll('.main-tab');

    if (!container) return;

    const selectedCat = mainCat.toLowerCase().trim();

    mainBtns.forEach(btn => {
        btn.classList.toggle(
            'active',
            btn.innerText.toLowerCase().trim() === selectedCat
        );
    });

    container.innerHTML = '';

    if (subCategories[selectedCat]) {
        container.style.display = 'flex';

        subCategories[selectedCat].forEach((sub, index) => {
            const btn = document.createElement('button');

            btn.className =
                'sub-tab text-[10px] uppercase tracking-widest px-4 py-1 border border-white/20 rounded-full hover:bg-white/10 transition-all cursor-pointer text-white';

            btn.innerText = sub.label;

            btn.onclick = () => {
                document.querySelectorAll('.sub-tab').forEach(button => {
                    button.classList.remove('bg-white', 'text-black');
                });

                btn.classList.add('bg-white', 'text-black');
                filterMenu(sub.id);
            };

            container.appendChild(btn);

            if (index === 0) {
                btn.click();
            }
        });
    } else {
        container.style.display = 'none';
        filterMenu(selectedCat);
    }
}

// ==========================================
// 7. FILTER DAN TAMPILKAN MENU
// ==========================================
function filterMenu(category) {
    const grid = document.getElementById('menu-grid');

    if (!grid) return;

    grid.innerHTML = '';

    if (menuData[category]) {
        menuData[category].forEach(item => {
            const card = document.createElement('div');

            card.className =
                'menu-card p-3 md:p-4 rounded-sm cursor-pointer group';

            card.setAttribute('data-aos', 'fade-up');
            card.onclick = () => openModal(item);

            card.innerHTML = `
                <div class="overflow-hidden mb-4 aspect-square rounded-sm bg-zinc-900 shadow-xl">
                    <img
                        src="${item.img}"
                        alt="${item.name}"
                        class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                        onerror="this.onerror=null; this.src='https://via.placeholder.com/400x400?text=Dermaga+Kopi';"
                    >
                </div>

                <div class="flex justify-between items-start mb-2 gap-2">
                    <h4 class="font-bold text-sm text-white uppercase tracking-tight">
                        ${item.name}
                    </h4>

                    <span class="text-gold font-bold text-sm">
                        Rp ${item.price}
                    </span>
                </div>

                <p class="text-[10px] text-zinc-500 line-clamp-2 leading-relaxed">
                    ${item.desc}
                </p>
            `;

            grid.appendChild(card);
        });
    }

    AOS.refresh();
}

// ==========================================
// 8. MODAL DETAIL MENU
// ==========================================
function openModal(item) {
    const modal = document.getElementById('menu-modal');
    const content = document.getElementById('modal-content');

    if (!modal || !content) return;

    content.innerHTML = `
        <div class="flex flex-col md:flex-row bg-zinc-950">

            <div class="md:w-5/12 h-64 md:h-auto overflow-hidden">
                <img
                    src="${item.img}"
                    alt="${item.name}"
                    class="w-full h-full object-cover"
                    onerror="this.onerror=null; this.src='https://via.placeholder.com/600x600?text=Dermaga+Kopi';"
                >
            </div>

            <div class="md:w-7/12 p-6 md:p-10">
                <h2 class="text-2xl font-bold mb-4 text-white uppercase tracking-wider">
                    ${item.name}
                </h2>

                <p class="text-gray-400 text-sm mb-8 leading-relaxed">
                    ${item.desc}
                </p>

                <div class="text-2xl font-bold text-gold">
                    Rp ${item.price}
                </div>
            </div>

        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('menu-modal');

    if (modal) {
        modal.classList.remove('active');
    }

    document.body.style.overflow = 'auto';
}

// ==========================================
// 9. GALLERY LOGIC
// ==========================================
const galleryImages = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/0.jpg'
];

function initGallery() {
    const container = document.getElementById('gallery-container');

    if (!container) return;

    // Hindari gambar galeri terduplikasi jika fungsi dipanggil ulang
    container.innerHTML = '';

    galleryImages.forEach((src, index) => {
        const wrapper = document.createElement('div');

        wrapper.className = 'gallery-item';
        wrapper.setAttribute('data-aos', 'fade-up');
        wrapper.setAttribute('data-aos-delay', (index % 4) * 100);

        const img = document.createElement('img');

        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;

        img.onerror = () => {
            img.onerror = null;
            img.src = 'https://via.placeholder.com/600x600?text=Dermaga+Kopi';
        };

        wrapper.onclick = () => openGalleryModal(src);

        wrapper.appendChild(img);
        container.appendChild(wrapper);
    });

    const galleryModal = document.getElementById('gallery-modal');
