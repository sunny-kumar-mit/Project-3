document.addEventListener('DOMContentLoaded', () => {
    fetch('ai_modules.json')
        .then(response => response.json())
        .then(data => populateAIGrid(data.modules));

    setInterval(createGlitchEffect, 3000);
    createBinaryParticles();
    addHoverEffects();
    
    setInterval(() => {
        const terminal = document.querySelector('.cyber-terminal');
        terminal.style.opacity = Math.random() * 0.2 + 0.8;
    }, 100);
});

function populateAIGrid(modules) {
    const grid = document.getElementById('ai-grid');
    grid.innerHTML = modules.map(module => `
        <div class="cyber-card">
            <h3 class="glitch" data-text="${module.name}">${module.name}</h3>
            <p>${module.description}</p>
            <div class="neon-progress" style="--progress: ${module.strength}%">
                <div class="progress-bar"></div>
            </div>
        </div>
    `).join('');
}

function simulateAI() {
    const input = document.getElementById('ai-input');
    const output = document.getElementById('chat-output');
    
    output.innerHTML += `<div class="terminal-line">> ${input.value}</div>`;
    
    setTimeout(() => {
        const responses = [
            "ANALYZING REQUEST...",
            "PROCESSING NEURAL NETWORKS...",
            "SYNTHESIZING RESPONSE...",
            "GENERATING OUTPUT..."
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        output.innerHTML += `<div class="terminal-line ai-response">${response}</div>`;
        output.scrollTop = output.scrollHeight;
    }, 1000);

    input.value = '';
}

function createGlitchEffect() {
    const elements = document.querySelectorAll('.glitch');
    elements.forEach(element => {
        element.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => element.style.transform = '', 50);
    });
}

function createBinaryParticles() {
    const characters = ['0', '1', '<>', '{}', '[]', '//'];
    const container = document.body;
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'binary-particle';
        particle.textContent = characters[Math.floor(Math.random() * characters.length)];
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.fontSize = `${Math.random() * 20 + 10}px`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 20000);
    }, 100);
}

function addHoverEffects() {
    document.querySelectorAll('.cyber-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });
}

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${e.clientX - 5}px`;
    trail.style.top = `${e.clientY - 5}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 500);
});