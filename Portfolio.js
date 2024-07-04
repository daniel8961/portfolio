document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const template = document.getElementById('content-template');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    function loadContent(data, containerId) {
        const container = document.getElementById(containerId);

        data.forEach(item => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('h3').textContent = item.title;
            const contentDiv = clone.querySelector('.document');
            item.document.forEach(paragraph => {
                const p = document.createElement('p');
                // p.textContent = paragraph;
                p.innerHTML = paragraph.replace(/\n/g, '<br>');
                contentDiv.appendChild(p);
            });

            const pictureDiv = clone.querySelector('.picture');
            item.pictures.forEach(pic => {
                const img = document.createElement('img');
                img.src = pic.src;
                img.alt = pic.alt;
                pictureDiv.appendChild(img);
            });

            container.appendChild(clone);
        });
    }

    loadContent(models, '3d-models-content');
    loadContent(html_website, 'html-website-content');
    loadContent(rcCarMilestones, 'rc-car-content');

    // The rest of your image enlarging and zooming functionality
    const images = document.querySelectorAll('.party .picture img');
    let enlargedImg = null;
    let isDragging = false;
    let startX, startY, initialX, initialY;
    let initialScale = 1.25; // Set the initial scale to a smaller value

    images.forEach(img => {
        img.addEventListener('click', function(event) {
            if (enlargedImg !== img) {
                images.forEach(image => {
                    image.classList.remove('enlarged');
                    image.style.transform = '';
                });
                img.classList.add('enlarged');
                img.style.transform = `translate(-50%, -50%) scale(${initialScale})`;
                showControls();
                enlargedImg = img;
                event.stopPropagation(); // Prevent event from bubbling up to the document
            }
        });

        img.addEventListener('mousedown', function(event) {
            if (enlargedImg === img) {
                isDragging = true;
                startX = event.clientX;
                startY = event.clientY;
                const transform = window.getComputedStyle(img).transform;
                if (transform !== 'none') {
                    const matrix = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
                    initialX = parseFloat(matrix[4]);
                    initialY = parseFloat(matrix[5]);
                } else {
                    initialX = 0;
                    initialY = 0;
                }
                event.preventDefault();
            }
        });

        img.addEventListener('mousemove', function(event) {
            if (isDragging) {
                const deltaX = event.clientX - startX;
                const deltaY = event.clientY - startY;
                img.style.transform = `translate(${initialX + deltaX}px, ${initialY + deltaY}px) scale(${getCurrentScale(img)})`;
            }
        });

        img.addEventListener('mouseup', function() {
            isDragging = false;
        });

        img.addEventListener('mouseleave', function() {
            isDragging = false;
        });
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && enlargedImg) {
            resetImage();
        }
    });

    function showControls() {
        const controls = document.createElement('div');
        controls.className = 'enlarged-controls';
        controls.innerHTML = `
            <button id="zoom-in">+</button>
            <button id="zoom-out">-</button>
            <button id="close-enlarged">X</button>
        `;
        document.body.appendChild(controls);

        document.getElementById('zoom-in').addEventListener('click', function(event) {
            event.stopPropagation();
            if (enlargedImg) {
                const currentScale = getCurrentScale(enlargedImg);
                enlargedImg.style.transform = `translate(${initialX}px, ${initialY}px) scale(${currentScale + 0.1})`;
            }
        });

        document.getElementById('zoom-out').addEventListener('click', function(event) {
            event.stopPropagation();
            if (enlargedImg) {
                const currentScale = getCurrentScale(enlargedImg);
                const newScale = Math.max(initialScale, currentScale - 0.1);
                const transform = window.getComputedStyle(enlargedImg).transform;
                if (transform !== 'none') {
                    const matrix = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
                    initialX = parseFloat(matrix[4]);
                    initialY = parseFloat(matrix[5]);
                } else {
                    initialX = 0;
                    initialY = 0;
                }
                enlargedImg.style.transform = `translate(${initialX}px, ${initialY}px) scale(${newScale})`;
            }
        });

        document.getElementById('close-enlarged').addEventListener('click', function(event) {
            event.stopPropagation();
            resetImage();
        });
    }

    function resetImage() {
        if (enlargedImg) {
            enlargedImg.classList.remove('enlarged');
            enlargedImg.style.transform = '';
            hideControls();
            enlargedImg = null;
        }
    }

    function hideControls() {
        const controls = document.querySelector('.enlarged-controls');
        if (controls) {
            controls.remove();
        }
    }

    function getCurrentScale(element) {
        const transform = window.getComputedStyle(element).transform;
        if (transform !== 'none') {
            const matrix = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
            return parseFloat(matrix[0]);
        }
        return initialScale;
    }
});
