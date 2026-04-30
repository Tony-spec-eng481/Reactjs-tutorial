/**
 * ReactJS Tutorial - Main Interactivity Script
 * Handles: Active link highlighting, Code copying, Demos, and Hover effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Active Sidebar Link
    const setActiveLink = () => {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
        sidebarLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    // 2. Setup Code Copy Buttons
    const setupCodeCopy = () => {
        const preBlocks = document.querySelectorAll('pre');
        
        preBlocks.forEach(block => {
            const container = document.createElement('div');
            container.style.position = 'relative';
            block.parentNode.insertBefore(container, block);
            container.appendChild(block);

            const copyButton = document.createElement('button');
            copyButton.innerHTML = 'Copy';
            copyButton.className = 'demo-button';
            copyButton.style.cssText = `
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                padding: 0.25rem 0.75rem;
                font-size: 0.75rem;
                opacity: 0.7;
            `;
            
            copyButton.onclick = () => {
                const code = block.querySelector('code').innerText;
                navigator.clipboard.writeText(code).then(() => {
                    copyButton.innerHTML = 'Copied!';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                    }, 2000);
                });
            };
            
            container.appendChild(copyButton);
        });
    };

    // 3. Demo Button Interactivity
    const setupDemos = () => {
        const demoButtons = document.querySelectorAll('.demo-button[data-demo]');
        demoButtons.forEach(button => {
            button.addEventListener('click', () => {
                const demoType = button.getAttribute('data-demo');
                const outputDiv = document.getElementById(`demo-output-${demoType}`);
                if (outputDiv) {
                    outputDiv.innerHTML = `
                        <div class="info-box" style="background-color: #f0fdf4; border-color: #bbf7d0; color: #166534; margin-top: 1rem;">
                            <strong>🚀 Demo Active!</strong>
                            <p>This is a simulated React component demo for <strong>${demoType}</strong>.</p>
                            <button class="demo-button" style="background-color: #166534; margin-top: 0.5rem; padding: 0.5rem 1rem;" onclick="this.parentElement.parentElement.innerHTML=''">Close Demo</button>
                        </div>
                    `;
                }
            });
        });
    };

    // 4. Smooth Hover Effects for Feature Cards
    const setupHoverEffects = () => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = 'var(--primary)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = 'var(--border)';
            });
        });
    };

    // Initialize all
    setActiveLink();
    setupCodeCopy();
    setupDemos();
    setupHoverEffects();
});