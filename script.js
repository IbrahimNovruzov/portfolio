const projects = [
    {
        id: 1,
        title: "Interior Common",
        description: "All my design solutions",
        type: "pdf",
        pdfUrl: "projects\\interior-common\\interior-common.pdf",
        thumbnail: "projects\\interior-common\\thumbnail.jpg",
        date: "2025"
    },
    {
        id: 2,
        title: "Classic Style",
        description: "Classic style design solutions for different rooms",
        type: "nested_folder",
        structure: {
            folders: {
                "Bedroom": {
                    images: [
                        { url: "projects\\classic-style\\bedroom\\front.jpg", name:"Front" },
                        { url: "projects\\classic-style\\bedroom\\side.jpg", name:"Side" },
                        { url: "projects\\classic-style\\bedroom\\footer.jpg", name:"Footer" }
                    ]
                },
                "Childroom": {
                    images: [
                        { url: "projects\\classic-style\\childroom\\front.jpg", name:"Front" },
                        { url: "projects\\classic-style\\childroom\\side.jpg", name:"Side" },
                        { url: "projects\\classic-style\\childroom\\mirror.jpg", name:"Mirror" }
                    ]
                },
                "Living Room": {
                    images: [
                        { url: "projects\\classic-style\\living-room\\front.jpg", name:"Front" },
                        { url: "projects\\classic-style\\living-room\\center.jpg", name:"Center" },
                        { url: "projects\\classic-style\\living-room\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room 2": {
                    images: [
                        { url: "projects\\classic-style\\living-room-2\\front.jpg", name:"Front" },
                        { url: "projects\\classic-style\\living-room-2\\center.jpg", name:"Center" },
                        { url: "projects\\classic-style\\living-room-2\\side.jpg", name:"Side" }
                    ]
                },
                "Kitchen": {
                    images: [
                        { url: "projects\\classic-style\\kitchen\\front.jpg", name:"Front" },
                        { url: "projects\\classic-style\\kitchen\\side.jpg", name:"Side" }
                    ]
                }
            }
        },
        thumbnail: "projects\\classic-style\\thumbnail.jpg",
        fileCount: 14,
        date: "2025"
    },
    {
        id: 3,
        title: "Minimalist Style",
        description: "Minimalist style design solutions for different rooms",
        type: "nested_folder",
        structure: {
            folders: {
                "Bedroom": {
                    images: [
                        { url: "projects\\minimalist-style\\bedroom\\front.jpg", name:"Front" },
                        { url: "projects\\minimalist-style\\bedroom\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room": {
                    images: [
                        { url: "projects\\minimalist-style\\living-room\\front.jpg", name:"Front" },
                        { url: "projects\\minimalist-style\\living-room\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room 2": {
                    images: [
                        { url: "projects\\minimalist-style\\living-room-2\\front.jpg", name:"Front" },
                        { url: "projects\\minimalist-style\\living-room-2\\dining-table.jpg", name:"Dining table" }
                    ]
                },
                "Kitchen": {
                    images: [
                        { url: "projects\\minimalist-style\\kitchen\\front.jpg", name:"Front" }
                    ]
                },
                "WC": {
                    images: [
                        { url: "projects\\minimalist-style\\wc\\front.jpg", name:"Front" },
                        { url: "projects\\minimalist-style\\wc\\mirror.jpg", name:"Mirror" }
                    ]
                }
            }
        },
        thumbnail: "projects\\minimalist-style\\thumbnail.jpg",
        fileCount: 9,
        date: "2025"
    },
    {
        id: 4,
        title: "Modern Style",
        description: "Modern style design solutions for different rooms",
        type: "nested_folder",
        structure: {
            folders: {
                "Bedroom": {
                    images: [
                        { url: "projects\\modern-style\\bedroom\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\bedroom\\center.jpg", name:"Center" },
                        { url: "projects\\modern-style\\bedroom\\side.jpg", name:"Side" }
                    ]
                },
                "Bedroom 2": {
                    images: [
                        { url: "projects\\modern-style\\bedroom-2\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\bedroom-2\\center.jpg", name:"Center" },
                        { url: "projects\\modern-style\\bedroom-2\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room": {
                    images: [
                        { url: "projects\\modern-style\\living-room\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\living-room\\center.jpg", name:"Center" },
                        { url: "projects\\modern-style\\living-room\\table-set.jpg", name:"Table set" },
                        { url: "projects\\modern-style\\living-room\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room 2": {
                    images: [
                        { url: "projects\\modern-style\\living-room-2\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\living-room-2\\center.jpg", name:"Center" },
                        { url: "projects\\modern-style\\living-room-2\\dining-table.jpg", name:"Dining table" }
                    ]
                },
                "Living Room 3": {
                    images: [
                        { url: "projects\\modern-style\\living-room-3\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\living-room-3\\side.jpg", name:"Side" }
                    ]
                },
                "Kitchen": {
                    images: [
                        { url: "projects\\modern-style\\kitchen\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\kitchen\\side.jpg", name:"Side" }
                    ]
                },
                "WC": {
                    images: [
                        { url: "projects\\modern-style\\wc\\front.jpg", name:"Front" },
                        { url: "projects\\modern-style\\wc\\center.jpg", name:"Center" },
                        { url: "projects\\modern-style\\wc\\side.jpg", name:"Side" }
                    ]
                }
            }
        },
        thumbnail: "projects\\modern-style\\thumbnail.jpg",
        fileCount: 20,
        date: "2025"
    },
    {
        id: 5,
        title: "Neoclassic Style",
        description: "Neoclassic style design solutions for different rooms",
        type: "nested_folder",
        structure: {
            folders: {
                "Bedroom": {
                    images: [
                        { url: "projects\\neoclassic-style\\bedroom\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\bedroom\\center.jpg", name:"Center" },
                        { url: "projects\\neoclassic-style\\bedroom\\door.jpg", name:"Door" }
                    ]
                },
                "Bedroom 2": {
                    images: [
                        { url: "projects\\neoclassic-style\\bedroom-2\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\bedroom-2\\center.jpg", name:"Center" },
                        { url: "projects\\neoclassic-style\\bedroom-2\\side.jpg", name:"Side" }
                    ]
                },
                "Living Room": {
                    images: [
                        { url: "projects\\neoclassic-style\\living-room\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\living-room\\tv.jpg", name:"TV" },
                        { url: "projects\\neoclassic-style\\living-room\\dining-table.jpg", name:"Dining table" }
                    ]
                },
                "Living Room 2": {
                    images: [
                        { url: "projects\\neoclassic-style\\living-room-2\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\living-room-2\\center.jpg", name:"Center" },
                        { url: "projects\\neoclassic-style\\living-room-2\\dining-table.jpg", name:"Dining table" }
                    ]
                },
                "Kitchen": {
                    images: [
                        { url: "projects\\neoclassic-style\\kitchen\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\kitchen\\side.jpg", name:"Side" }
                    ]
                },
                "Kitchen 2": {
                    images: [
                        { url: "projects\\neoclassic-style\\kitchen-2\\front.jpg", name:"Front" },
                        { url: "projects\\neoclassic-style\\kitchen-2\\door.jpg", name:"Door" },
                        { url: "projects\\neoclassic-style\\kitchen-2\\side.jpg", name:"Side" }
                    ]
                }
            }
        },
        thumbnail: "projects\\neoclassic-style\\thumbnail.jpg",
        fileCount: 17,
        date: "2025"
    }
];

let currentProject = null;
let currentPath = [];

document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupModals();
    setupNavigation();
    setupMobileMenu();
    setupContactForm();
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(l => l.classList.remove('active'));
            
            const currentSection = document.querySelector('.section.active');
            if (currentSection) {
                currentSection.style.opacity = '0';
                currentSection.style.transform = 'translateY(-30px)';
            }
            
            this.classList.add('active');
            const targetSectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(targetSectionId);
            
            setTimeout(() => {
                // Bütün section-ları gizlət
                sections.forEach(s => {
                    s.classList.remove('active', 'fade-in');
                    s.style.opacity = '0';
                    s.style.transform = 'translateY(30px)';
                });
                
                if (targetSection) {
                    targetSection.classList.add('active', 'fade-in');
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                }
            }, 250);
            
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
            }
        });
    }
}

function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
            const message = contactForm.querySelector('textarea').value;
            
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields!');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address!');
                return;
            }
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Hi ${name}! Your message has been received. A response will be sent shortly.`);
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = '';

    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

// Layihə kartı yaradır
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProject(project);

    const typeLabels = {
        'pdf': 'PDF',
        'folder': 'Gallery',
        'nested_folder': 'Complex'
    };

    const typeIcons = {
        'pdf': 'fas fa-file-pdf',
        'folder': 'fas fa-images',
        'nested_folder': 'fas fa-folder-tree'
    };

    card.innerHTML = `
        <div class="project-thumbnail">
            ${project.thumbnail ? 
                `<img src="${project.thumbnail}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                 <i class="${typeIcons[project.type]}" style="display:none;"></i>` :
                `<i class="${typeIcons[project.type]}"></i>`
            }
            <div class="project-type-badge">${typeLabels[project.type]}</div>
        </div>
        <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <span class="project-date">${project.date}</span>
                ${project.fileCount ? 
                    `<span class="file-count">
                        <i class="fas fa-images"></i>
                        ${project.fileCount} fayl
                    </span>` : ''
                }
            </div>
        </div>
    `;

    return card;
}

function openProject(project) {
    currentProject = project;
    
    if (project.type === 'pdf') {
        openPDF(project.pdfUrl);
    } else {
        currentPath = [];
        openGallery(project);
    }
}

function openPDF(pdfUrl) {
    const modal = document.getElementById('pdf-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    
    if (modal && pdfViewer) {
        pdfViewer.src = pdfUrl;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function openGallery(project) {
    const modal = document.getElementById('gallery-modal');
    const title = document.getElementById('gallery-title');
    
    if (modal && title) {
        title.textContent = project.title;
        updateBreadcrumb();
        renderGalleryContent();
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) return;
    
    let breadcrumbHTML = '<span class="breadcrumb-item" onclick="navigateToFolder([])">Main page</span>';
    
    let tempPath = [];
    currentPath.forEach((folder, index) => {
        tempPath.push(folder);
        const pathStr = tempPath.map(p => `'${p}'`).join(', ');
        breadcrumbHTML += `<span class="breadcrumb-item" onclick="navigateToFolder([${pathStr}])">${folder}</span>`;
    });
    
    breadcrumb.innerHTML = breadcrumbHTML;
}

function renderGalleryContent() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const currentFolder = getCurrentFolder();
    
    if (currentProject.type === 'nested_folder' && currentFolder.folders) {
        // Qovluqları göstər
        Object.keys(currentFolder.folders).forEach(folderName => {
            const folderItem = createGalleryItem(folderName, 'folder');
            grid.appendChild(folderItem);
        });
    }
    
    if (currentFolder.images) {
        currentFolder.images.forEach((imageData, index) => {
            const imageUrl = typeof imageData === 'string' ? imageData : imageData.url;
            const imageName = typeof imageData === 'string' ? imageUrl.split('/').pop() : imageData.name;
            const imageItem = createGalleryItem(imageName, 'image', imageUrl);
            grid.appendChild(imageItem);
        });
    }
}

function getCurrentFolder() {
    if (currentPath.length === 0) {
        return currentProject.structure;
    }
    
    let folder = currentProject.structure;
    currentPath.forEach(pathItem => {
        folder = folder.folders[pathItem];
    });
    
    return folder;
}

function createGalleryItem(name, type, url = null) {
    const item = document.createElement('div');
    item.className = `gallery-item ${type}`;
    
    if (type === 'folder') {
        item.onclick = () => navigateToFolder([...currentPath, name]);
        item.innerHTML = `
            <i class="fas fa-folder"></i>
            <div class="gallery-item-name">${name}</div>
        `;
    } else {
        item.onclick = () => openImageViewer(url);
        item.innerHTML = `
            <img src="${url}" alt="${name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <i class="fas fa-image" style="display:none;"></i>
            <div class="gallery-item-name">${name}</div>
        `;
    }
    
    return item;
}

function navigateToFolder(path) {
    currentPath = path;
    updateBreadcrumb();
    renderGalleryContent();
}

function openImageViewer(imageUrl) {
    window.open(imageUrl, '_blank');
}

function setupModals() {
    const pdfModal = document.getElementById('pdf-modal');
    const pdfClose = pdfModal ? pdfModal.querySelector('.close') : null;
    
    if (pdfClose) {
        pdfClose.onclick = function() {
            pdfModal.style.display = 'none';
            document.getElementById('pdf-viewer').src = '';
            document.body.style.overflow = 'auto';
        };
    }
    
    const galleryModal = document.getElementById('gallery-modal');
    const galleryClose = galleryModal ? galleryModal.querySelector('.close') : null;
    
    if (galleryClose) {
        galleryClose.onclick = function() {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        };
    }
    
    window.onclick = function(event) {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
            document.getElementById('pdf-viewer').src = '';
            document.body.style.overflow = 'auto';
        }
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (pdfModal && pdfModal.style.display === 'block') {
                pdfModal.style.display = 'none';
                document.getElementById('pdf-viewer').src = '';
                document.body.style.overflow = 'auto';
            }
            if (galleryModal && galleryModal.style.display === 'block') {
                galleryModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
}

function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'skillLoad 2s ease-in-out forwards';
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

function smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

setTimeout(() => {
    animateSkills();
}, 1000);