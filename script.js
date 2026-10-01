/**
 * Danyil - Portfolio Web Application Engine
 * Creative Technologist, AI Developer & 3D Web Integrator
 * Three.js, WebGL Shaders, GSAP & Dynamic Category Orchestration
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- PROJECT DATA ARCHIVE ---
  const projectsData = {
    'ai-core-matrix': {
      title: 'NeuroMatrix AI Interface',
      category: 'AI Models',
      metrics: '250ms Latency • 99.8% Accuracy',
      desc: 'Autonomous multimodal neural dashboard enabling real-time neural network graph visualizer and prompt engineering orchestration. Features live streaming token inference, dynamic temperature sliders, and 3D latent space topological mapping.',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Three.js', 'WebSockets'],
      code: `async function streamLatentTokens(prompt) {
  const response = await fetch('/api/v2/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, temperature: 0.72 })
  });
  const reader = response.body.getReader();
  // Stream directly into 3D node visualizer
  return processStreamToNeuralGraph(reader);
}`,
      shape: 'torus',
      demoUrl: 'https://github.com'
    },
    'cyber-isometric-world': {
      title: 'Aetheris 3D Isometric Engine',
      category: 'JS/3D WebGL',
      metrics: '60 FPS Ultra Performance • Custom Shaders',
      desc: 'Real-time antigravity isometric playground with custom procedural GLSL shaders, bloom post-processing passes, and interactive zero-gravity floating modules. Highly optimized for mobile and desktop WebGL 2.0 runtimes.',
      tags: ['Three.js', 'WebGL 2.0', 'GLSL Shaders', 'GSAP', 'Cannon.js'],
      code: `const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5, 0.4, 0.85
);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.25;
composer.addPass(bloomPass);`,
      shape: 'icosahedron',
      demoUrl: 'https://github.com'
    },
    'valence-archive-labs': {
      title: 'VALENCE ARCHIVE LABS',
      category: 'E-commerce',
      metrics: '60 Products • Responsive Storefront',
      desc: 'Immersive streetwear e-commerce storefront for VALENCE ARCHIVE LABS. The experience combines a searchable product catalog, category and price filters, shopping bag interactions, lookbook storytelling, and an interactive 3D archive section.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'GitHub Pages'],
      code: `const visibleProducts = products.filter((product) => {
  const matchesCategory = activeCategory === 'all' ||
    product.category === activeCategory;
  const matchesPrice = product.price <= maxPrice;
  return matchesCategory && matchesPrice;
});

renderProductGrid(visibleProducts);`,
      shape: 'cube',
      demoUrl: 'https://danyilvel01.github.io/clothes-shop/'
    },
    'kivi-katko-03': {
      title: 'KIVI // KÄTKÖ 03',
      category: 'Interactive Experience',
      metrics: '5 Rooms • 60-Minute Mission',
      desc: 'A cinematic escape-room concept built as an interactive investigation. Explore five themed rooms, review CCTV feeds and evidence, identify the informant, solve a UV-lit code, and configure the experience with a live equipment budget simulator.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Interactive Storytelling', 'GitHub Pages'],
      code: `const mission = {
  duration: 60 * 60,
  rooms: ['Investigation', 'Maps', 'Interrogation', 'UV Chamber', 'Finale'],
  evidence: 8
};

function advanceMission(roomIndex, evidence) {
  return roomIndex < mission.rooms.length - 1 && evidence.isVerified;
}`,
      shape: 'dodecahedron',
      demoUrl: 'https://danyilvel01.github.io/huoneet/'
    },
    'aston-martin-3d': {
      title: 'Aston Martin Experience',
      category: '3D Showcase',
      metrics: 'Scroll-Driven • Interactive 3D',
      desc: 'Cinematic automotive presentation built around scroll-driven storytelling, immersive 3D visuals, and a premium Aston Martin-inspired interface designed to make the vehicle the focus of the experience.',
      tags: ['React', '3D Web', 'WebGL', 'Scroll Animation'],
      code: `function handleScrollProgress(progress) {
  const rotation = progress * Math.PI * 2;
  const cameraDistance = 5 - progress * 1.5;

  model.rotation.y = rotation;
  camera.position.z = cameraDistance;
  camera.lookAt(model.position);
}`,
      shape: 'icosahedron',
      demoUrl: 'https://astonmartin-3d-project.vercel.app/'
    },
    'holographic-agent-bot': {
      title: 'Synapse Autonomous Agent',
      category: 'AI Models',
      metrics: 'Multi-Agent Parallelism • Self-Reflection',
      desc: 'Self-reflecting multi-agent reasoning framework that dispatches background tasks, queries external APIs, and visualizes chain-of-thought node trees in real time. Features automated tool calling and vector memory retention.',
      tags: ['LLMs', 'LangChain', 'Python', 'WebSockets', 'ChromaDB'],
      code: `class SynapseCore:
    def __init__(self, memory_vector_store):
        self.memory = memory_vector_store
        self.orchestrator = PlanAndExecuteExecutor()
        
    async def execute_goal(self, goal: str):
        subtasks = await self.orchestrator.plan(goal)
        return await asyncio.gather(*[self.run_subtask(t) for t in subtasks])`,
      shape: 'octahedron',
      demoUrl: 'https://github.com'
    },
    'spatial-particle-galaxy': {
      title: 'Starlight Particle Physics',
      category: 'JS/3D WebGL',
      metrics: '100,000+ Particles • Audio Reactive',
      desc: 'Audio-reactive 100,000 particle simulation with dynamic gravity attractors and orbital mechanics rendered smoothly in browser using instanced buffer geometries and custom fragment shaders.',
      tags: ['Three.js', 'Compute Shaders', 'Audio Reactive', 'GLSL'],
      code: `const particleMaterial = new THREE.ShaderMaterial({
  vertexShader: particleVertexShader,
  fragmentShader: particleFragmentShader,
  uniforms: {
    uTime: { value: 0 },
    uFrequency: { value: 0.0 }
  },
  transparent: true,
  blending: THREE.AdditiveBlending
});`,
      shape: 'dodecahedron',
      demoUrl: 'https://github.com'
    },
    'cyber-auth-service': {
      title: 'Sentinel PHP Security Vault',
      category: 'Custom PHP',
      metrics: 'Argon2id Hashing • Leaky-Bucket Rate Limit',
      desc: 'Enterprise zero-trust authentication gateway featuring Argon2id password hashing, sliding JWT rotation, IP anomaly rate-limiting, and OWASP Top 10 mitigation middleware.',
      tags: ['PHP 8.3', 'JWT', 'Rate Limiting', 'Argon2id', 'OWASP'],
      code: `function verifySignature(string $payload, string $signature, string $secret): bool {
    $computed = hash_hmac('sha256', $payload, $secret, true);
    return hash_equals($computed, $signature);
}`,
      shape: 'cylinder',
      demoUrl: 'https://github.com'
    }
  };

  // --- 1. BACKGROUND PARTICLES & CODE DUST CANVAS ---
  function initBackgroundParticles() {
    const canvas = document.getElementById('bg-stars-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 75;

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.4 - 0.15,
        color: Math.random() > 0.4 ? 'rgba(0, 240, 255,' : 'rgba(255, 51, 75,',
        alpha: Math.random() * 0.7 + 0.2
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color === 'rgba(0, 240, 255,' ? '#00f0ff' : '#ff334b';
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  initBackgroundParticles();

  // --- 2. HERO 3D PORTAL SCENE (THREE.JS) ---
  function initHeroThreeScene() {
    const canvas = document.getElementById('hero-3d-canvas');
    const container = document.getElementById('hero-portal-frame');
    if (!canvas || !container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 4.8;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    resize();
    window.addEventListener('resize', resize);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x221133, 1.5);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xff334b, 3.5, 50);
    redLight.position.set(4, 3, 3);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x00f0ff, 3.5, 50);
    blueLight.position.set(-4, -3, 3);
    scene.add(blueLight);

    const centerGlow = new THREE.PointLight(0xffffff, 1.2, 10);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);

    // 3D Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner Glowing Pulsing Sphere
    const innerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x050410,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerSphere);

    // Stylized Torus Knot representing AI Core
    const knotGeo = new THREE.TorusKnotGeometry(1.05, 0.28, 140, 24, 2, 3);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x16132f,
      emissive: 0xff334b,
      emissiveIntensity: 0.5,
      roughness: 0.25,
      metalness: 0.85,
      wireframe: false
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    coreGroup.add(knotMesh);

    // Outer Wireframe Cage (Icosahedron)
    const cageGeo = new THREE.IcosahedronGeometry(1.9, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    coreGroup.add(cageMesh);

    // Orbiting Data Ring
    const ringGeo = new THREE.RingGeometry(2.1, 2.15, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff334b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5
    });
    const dataRing = new THREE.Mesh(ringGeo, ringMat);
    dataRing.rotation.x = Math.PI / 2.3;
    coreGroup.add(dataRing);

    // Orbiting Satellite Particles
    const satCount = 45;
    const satGeo = new THREE.BufferGeometry();
    const satPos = new Float32Array(satCount * 3);
    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const radius = 2.1 + (Math.random() - 0.5) * 0.4;
      satPos[i * 3] = Math.cos(angle) * radius;
      satPos[i * 3 + 1] = (Math.random() - 0.5) * 0.6;
      satPos[i * 3 + 2] = Math.sin(angle) * radius;
    }
    satGeo.setAttribute('position', new THREE.BufferAttribute(satPos, 3));
    const satMat = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.06,
      transparent: true,
      opacity: 0.9
    });
    const satellites = new THREE.Points(satGeo, satMat);
    coreGroup.add(satellites);

    // Parallax Tilt based on mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX = (e.clientX - centerX) / (window.innerWidth / 2);
      mouseY = (e.clientY - centerY) / (window.innerHeight / 2);
    });

    // Touch support for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        mouseX = (touch.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
        mouseY = (touch.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
      }
    });

    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Base rotations
      knotMesh.rotation.x = elapsed * 0.35;
      knotMesh.rotation.y = elapsed * 0.45;

      cageMesh.rotation.x = -elapsed * 0.15;
      cageMesh.rotation.y = -elapsed * 0.2;

      dataRing.rotation.z = elapsed * 0.3;
      satellites.rotation.y = -elapsed * 0.5;

      // Pulsing effect
      const scale = 1 + Math.sin(elapsed * 2.5) * 0.05;
      innerSphere.scale.set(scale, scale, scale);

      // Parallax application
      coreGroup.rotation.y = targetX * 0.75 + (elapsed * 0.1);
      coreGroup.rotation.x = targetY * 0.75;

      renderer.render(scene, camera);
    }
    animate();
  }
  initHeroThreeScene();

  // --- 3. MINI 3D CANVASES ON PROJECT CARDS ---
  function initCardCanvases() {
    const cardElements = document.querySelectorAll('.project-card');

    cardElements.forEach(card => {
      const canvas = card.querySelector('.mini-3d-canvas');
      if (!canvas) return;

      const shapeType = canvas.dataset.shape || 'torus';
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      camera.position.z = 3.6;

      const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

      function resize() {
        const w = canvas.parentElement.clientWidth;
        const h = canvas.parentElement.clientHeight;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
      resize();
      window.addEventListener('resize', resize);

      // Lighting
      const light1 = new THREE.PointLight(0xff334b, 2.5, 20);
      light1.position.set(3, 2, 2);
      scene.add(light1);

      const light2 = new THREE.PointLight(0x00f0ff, 2.5, 20);
      light2.position.set(-3, -2, 2);
      scene.add(light2);

      const amb = new THREE.AmbientLight(0x1a1533, 1.2);
      scene.add(amb);

      // Create unique geometry per card
      let geometry;
      switch (shapeType) {
        case 'torus':
          geometry = new THREE.TorusGeometry(0.9, 0.35, 16, 40);
          break;
        case 'icosahedron':
          geometry = new THREE.IcosahedronGeometry(1.1, 0);
          break;
        case 'cube':
          geometry = new THREE.BoxGeometry(1.3, 1.3, 1.3);
          break;
        case 'octahedron':
          geometry = new THREE.OctahedronGeometry(1.2, 0);
          break;
        case 'dodecahedron':
          geometry = new THREE.DodecahedronGeometry(1.1, 0);
          break;
        case 'cylinder':
          geometry = new THREE.CylinderGeometry(0.7, 0.7, 1.4, 16);
          break;
        default:
          geometry = new THREE.TorusKnotGeometry(0.8, 0.25, 64, 16);
      }

      const material = new THREE.MeshStandardMaterial({
        color: 0x121029,
        emissive: 0x1e1948,
        wireframe: true,
        roughness: 0.3,
        metalness: 0.8
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Add small inner core
      const innerMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff334b, wireframe: true })
      );
      scene.add(innerMesh);

      let speedMultiplier = 1;
      card.addEventListener('mouseenter', () => {
        speedMultiplier = 3.5;
        material.emissive.setHex(0xff334b);
      });
      card.addEventListener('mouseleave', () => {
        speedMultiplier = 1;
        material.emissive.setHex(0x1e1948);
      });

      let clock = new THREE.Clock();
      function renderMini() {
        requestAnimationFrame(renderMini);
        const delta = clock.getDelta();
        mesh.rotation.x += delta * 0.7 * speedMultiplier;
        mesh.rotation.y += delta * 0.9 * speedMultiplier;
        innerMesh.rotation.y -= delta * 1.5 * speedMultiplier;
        renderer.render(scene, camera);
      }
      renderMini();
    });
  }
  initCardCanvases();

  // --- 4. PORTFOLIO & CATEGORY FILTERING ---
  const expandBtn = document.getElementById('btn-expand-categories');
  const drawer = document.getElementById('category-drawer');
  const tabBtns = document.querySelectorAll('.portfolio-tabs .tab-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const categoryCounter = document.getElementById('active-category-count');

  if (expandBtn && drawer) {
    expandBtn.addEventListener('click', () => {
      const isExpanded = expandBtn.classList.toggle('expanded');
      expandBtn.setAttribute('aria-expanded', String(isExpanded));
      drawer.classList.toggle('collapsed', !isExpanded);
      drawer.classList.toggle('expanded', isExpanded);
    });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(tab => {
        tab.classList.remove('active');
        tab.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.dataset.filter;
      let visibleCount = 0;
      projectCards.forEach(card => {
        const isVisible = filterValue === 'all' || card.dataset.category === filterValue;
        card.classList.toggle('is-hidden', !isVisible);
        if (isVisible) visibleCount++;
      });

      if (categoryCounter) {
        categoryCounter.textContent = `Showing ${visibleCount} Project${visibleCount === 1 ? '' : 's'}`;
      }
    });
  });

  // --- 5. FULLSCREEN PROJECT CASE STUDY MODAL ---
  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalActionClose = document.getElementById('modal-action-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalMetrics = document.getElementById('modal-metrics');
  const modalDesc = document.getElementById('modal-desc');
  const modalTags = document.getElementById('modal-tags');
  const modalCode = document.getElementById('modal-code');
  const modalDemoLink = document.getElementById('modal-demo-link');

  // Modal 3D Inspector Scene
  const modalCanvas = document.getElementById('modal-canvas');
  let modalScene, modalCamera, modalRenderer, modalMesh, modalReqId;

  function initModalThreeScene() {
    if (!modalCanvas) return;
    modalScene = new THREE.Scene();
    modalCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    modalCamera.position.z = 4.2;

    modalRenderer = new THREE.WebGLRenderer({
      canvas: modalCanvas,
      alpha: true,
      antialias: true
    });
    modalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const pLight1 = new THREE.PointLight(0xff334b, 3, 20);
    pLight1.position.set(3, 3, 3);
    modalScene.add(pLight1);

    const pLight2 = new THREE.PointLight(0x00f0ff, 3, 20);
    pLight2.position.set(-3, -3, 3);
    modalScene.add(pLight2);

    const amb = new THREE.AmbientLight(0x221a3a, 1.5);
    modalScene.add(amb);

    // Interactive Drag to Rotate on Modal Canvas
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    modalCanvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging || !modalMesh) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      modalMesh.rotation.y += deltaX * 0.012;
      modalMesh.rotation.x += deltaY * 0.012;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    });
  }
  initModalThreeScene();

  function updateModal3DGeometry(shapeType) {
    if (!modalScene) return;
    if (modalMesh) {
      modalScene.remove(modalMesh);
      modalMesh.geometry.dispose();
      modalMesh.material.dispose();
    }

    let geom;
    switch (shapeType) {
      case 'torus':
        geom = new THREE.TorusKnotGeometry(1.0, 0.32, 100, 16);
        break;
      case 'icosahedron':
        geom = new THREE.IcosahedronGeometry(1.35, 1);
        break;
      case 'cube':
        geom = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        break;
      case 'octahedron':
        geom = new THREE.OctahedronGeometry(1.4, 0);
        break;
      case 'dodecahedron':
        geom = new THREE.DodecahedronGeometry(1.35, 0);
        break;
      default:
        geom = new THREE.CylinderGeometry(0.8, 0.8, 1.8, 24);
    }

    const mat = new THREE.MeshStandardMaterial({
      color: 0x151230,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.4,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.9
    });

    modalMesh = new THREE.Mesh(geom, mat);
    modalScene.add(modalMesh);

    // Resize
    const w = modalCanvas.parentElement.clientWidth;
    const h = modalCanvas.parentElement.clientHeight;
    modalCamera.aspect = w / h;
    modalCamera.updateProjectionMatrix();
    modalRenderer.setSize(w, h);
  }

  function startModalLoop() {
    function loop() {
      modalReqId = requestAnimationFrame(loop);
      if (modalMesh) {
        modalMesh.rotation.y += 0.008;
      }
      modalRenderer.render(modalScene, modalCamera);
    }
    loop();
  }

  function stopModalLoop() {
    if (modalReqId) {
      cancelAnimationFrame(modalReqId);
    }
  }

  // Open Modal Handler
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.id;
      const data = projectsData[projectId];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalCategory.textContent = data.category.toUpperCase();
      modalMetrics.textContent = data.metrics;
      modalDesc.textContent = data.desc;
      modalCode.textContent = data.code;
      modalDemoLink.href = data.demoUrl;

      // Render Tags
      modalTags.innerHTML = '';
      data.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        modalTags.appendChild(tagEl);
      });

      updateModal3DGeometry(data.shape);
      projectModal.classList.add('active');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      startModalLoop();
      modalCloseBtn.focus();
    });
  });

  function closeProjectModal() {
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopModalLoop();
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalActionClose) modalActionClose.addEventListener('click', closeProjectModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);

  // --- 6. 3D DEMO REEL MODAL & SHADER WARP SCENE ---
  const demoReelBtn = document.getElementById('btn-demo-reel');
  const demoReelModal = document.getElementById('demo-reel-modal');
  const reelCloseBtn = document.getElementById('reel-close-btn');
  const reelBackdrop = document.getElementById('demo-reel-backdrop');
  const reelCanvas = document.getElementById('demo-reel-canvas');

  let reelScene, reelCamera, reelRenderer, reelParticles, reelReqId;

  function initDemoReelScene() {
    if (!reelCanvas) return;
    reelScene = new THREE.Scene();
    reelCamera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    reelCamera.position.z = 400;

    reelRenderer = new THREE.WebGLRenderer({
      canvas: reelCanvas,
      alpha: false,
      antialias: true
    });
    reelRenderer.setClearColor(0x05040d, 1);
    reelRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Warp Tunnel
    const pCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pCount * 3);
    const colors = new Float32Array(pCount * 3);

    const c1 = new THREE.Color(0xff334b);
    const c2 = new THREE.Color(0x00f0ff);

    for (let i = 0; i < pCount; i++) {
      const radius = 60 + Math.random() * 220;
      const theta = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = Math.sin(theta) * radius;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1000;

      const mixed = c1.clone().lerp(c2, Math.random());
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    reelParticles = new THREE.Points(geometry, material);
    reelScene.add(reelParticles);
  }
  initDemoReelScene();

  function startDemoReelLoop() {
    const w = reelCanvas.parentElement.clientWidth;
    const h = reelCanvas.parentElement.clientHeight;
    reelCamera.aspect = w / h;
    reelCamera.updateProjectionMatrix();
    reelRenderer.setSize(w, h);

    function loop() {
      reelReqId = requestAnimationFrame(loop);
      const positions = reelParticles.geometry.attributes.position.array;
      for (let i = 2; i < positions.length; i += 3) {
        positions[i] += 4.5;
        if (positions[i] > 500) {
          positions[i] = -500;
        }
      }
      reelParticles.geometry.attributes.position.needsUpdate = true;
      reelParticles.rotation.z += 0.003;
      reelRenderer.render(reelScene, reelCamera);
    }
    loop();
  }

  function stopDemoReelLoop() {
    if (reelReqId) {
      cancelAnimationFrame(reelReqId);
    }
  }

  if (demoReelBtn && demoReelModal) {
    demoReelBtn.addEventListener('click', () => {
      demoReelModal.classList.add('active');
      demoReelModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      startDemoReelLoop();
    });
  }

  function closeDemoReel() {
    demoReelModal.classList.remove('active');
    demoReelModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    stopDemoReelLoop();
  }

  if (reelCloseBtn) reelCloseBtn.addEventListener('click', closeDemoReel);
  if (reelBackdrop) reelBackdrop.addEventListener('click', closeDemoReel);

  // Global ESC Key Listener for all modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal.classList.contains('active')) closeProjectModal();
      if (demoReelModal.classList.contains('active')) closeDemoReel();
    }
  });

  // --- 7. STATS COUNTER ANIMATION ---
  const statNumbers = document.querySelectorAll('.stat-counter');
  let statsTriggered = false;

  function runCounters() {
    statNumbers.forEach(counter => {
      const target = +counter.dataset.target;
      let current = 0;
      const duration = 1500;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target < 10 ? `0${target}` : target;
          clearInterval(timer);
        } else {
          const val = Math.floor(current);
          counter.textContent = val < 10 ? `0${val}` : val;
        }
      }, stepTime);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsTriggered) {
        statsTriggered = true;
        runCounters();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('about');
  if (statsSection) observer.observe(statsSection);

  // --- 9. MOBILE NAVIGATION DRAWER TOGGLE ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const active = mobileDrawer.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', active ? 'true' : 'false');
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 10. SMOOTH SCROLLING FOR ALL NAV LINKS ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
