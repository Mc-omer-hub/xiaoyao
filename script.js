/* =============================================
   逍遥PVP — 网站交互脚本
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {


    /* 使用 professions-data.js 中的共享数据 */
    function renderProfessions(filter = 'all') {
        const grid = document.getElementById('professionsGrid');
        if (!grid) return;

        const allProfessions = typeof professions !== 'undefined' ? professions : [];
        const filtered = filter === 'all'
            ? allProfessions
            : allProfessions.filter(p => p.tabs.includes(filter));

        grid.innerHTML = filtered.map(p => {
            const diffColor = {
                '低': '#55ff55',
                '中': '#55ffff',
                '高': '#ff55ff',
                '极高': '#ff4444'
            }[p.difficulty] || '#aaa';

            /* 提取物品名称列表用于标签展示 */
            const itemNames = (p.items || []).map(it => it.name);

            return `
                <a href="profession.html?id=${p.id}" class="prof-card">
                    <div class="prof-card-header">
                        <img class="prof-icon" src="${p.icon}" alt="${p.name}">
                        <div class="prof-card-title">
                            <span class="prof-difficulty" style="color:${diffColor}">难度：${p.difficulty}</span>
                            <h3>${p.name}</h3>
                        </div>
                    </div>
                    <p class="prof-tagline">${p.tagline}</p>
                    <p class="prof-desc">${p.desc}</p>
                    <div class="prof-items">
                        ${itemNames.slice(0, 6).map(item => `<span>${item}</span>`).join('')}
                        ${itemNames.length > 6 ? `<span>+${itemNames.length - 6}更多</span>` : ''}
                    </div>
                    <div class="prof-card-footer">
                        <span class="prof-card-hint">点击查看详情 →</span>
                    </div>
                </a>
            `;
        }).join('');
    }


    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProfessions(btn.dataset.tab);
            observeProfCards();
        });
    });


    renderProfessions('all');


    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        navbar.classList.toggle('scrolled', currentScroll > 50);
        lastScroll = currentScroll;


        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - 120;
            const bottom = top + section.offsetHeight;
            if (currentScroll >= top && currentScroll < bottom) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });


    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.scrollY > 400);
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }


    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
        });


        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('open');
            });
        });
    }


    const heroParticles = document.getElementById('heroParticles');
    if (heroParticles) {
        const count = window.innerWidth < 768 ? 20 : 40;
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = (Math.random() * 3 + 1) + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDuration = (Math.random() * 12 + 8) + 's';
            particle.style.animationDelay = (Math.random() * 10) + 's';
            particle.style.opacity = Math.random() * 0.4 + 0.1;
            heroParticles.appendChild(particle);
        }
    }


    const observerOptions = {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 40;
                entry.target.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    /* 首次渲染后观察职业卡片 */
    function observeProfCards() {
        document.querySelectorAll('.prof-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    }

    document.querySelectorAll('.about-card, .feature-item, .changelog-item, .gallery-item, .news-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });

    /* 初始渲染后观察卡片 */
    observeProfCards();


    console.log('%c 逍遥PVP ', 'background:#f0a030;color:#0a0a12;font-size:18px;font-weight:bold;padding:8px 16px;border-radius:4px;');
    console.log('%c 网易我的世界 · 多人职业战争 ', 'color:#8888a0;font-size:13px;');
    console.log('%c 由 Mc_comer 开发 ', 'color:#f0a030;font-size:13px;');

});
