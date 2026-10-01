<?php
/**
 * Danyil - Portfolio Backend API & Form Handler
 * Security & Sanitization Implementation
 * Supports Contact Form Processing & Dynamic Project Listing
 */

// Set secure headers
header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// Allow local testing / CORS if required
$allowed_origins = [
    'http://localhost',
    'http://127.0.0.1',
    'http://localhost:3000',
    'http://localhost:5500',
    'http://localhost:8000'
];

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed_origins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
}

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Helper response function
function jsonResponse($success, $message, $data = [], $statusCode = 200) {
    http_response_code($statusCode);
    echo json_encode([
        'success'   => $success,
        'message'   => $message,
        'data'      => $data,
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    exit;
}

// Dynamic Projects Data Store
function getDynamicProjects() {
    return [
        [
            'id' => 'ai-core-matrix',
            'title' => 'NeuroMatrix AI Interface',
            'category' => 'ai-models',
            'categoryLabel' => 'AI Models',
            'tags' => ['Python', 'TensorFlow', 'FastAPI', 'Three.js'],
            'shortDesc' => 'Autonomous multimodal neural dashboard enabling real-time neural network graph visualizer and prompt engineering orchestration.',
            'fullDesc' => 'NeuroMatrix is an enterprise-grade AI analytics interface featuring live token streaming, latent space vector clustering in 3D WebGL, and custom fine-tuned transformer inference controls.',
            'metrics' => '250ms Average Latency • 99.8% Inference Accuracy • 150k+ Daily Calls',
            'codeSnippet' => "async function streamLatentTokens(prompt) {\n  const response = await fetch('/api/v2/generate', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ prompt, temperature: 0.72 })\n  });\n  const reader = response.body.getReader();\n  // Stream directly into 3D node visualizer\n  return processStreamToNeuralGraph(reader);\n}",
            'demoUrl' => 'https://github.com',
            'badge' => 'Featured AI'
        ],
        [
            'id' => 'cyber-isometric-world',
            'title' => 'Aetheris 3D Isometric Engine',
            'category' => 'webgl',
            'categoryLabel' => 'JS/3D WebGL',
            'tags' => ['Three.js', 'WebGL 2.0', 'GLSL Shaders', 'GSAP'],
            'shortDesc' => 'Real-time antigravity isometric playground with custom procedural shaders, bloom post-processing, and interactive physics.',
            'fullDesc' => 'Built with custom Three.js render pipelines and GLSL noise shaders to simulate atmospheric depth-of-field, volumetric cyber light shafts, and interactive zero-gravity floating modules.',
            'metrics' => '60 FPS Ultra Performance • Custom GLSL Pipeline • 100% Client-Side Physics',
            'codeSnippet' => "const bloomPass = new UnrealBloomPass(\n  new THREE.Vector2(window.innerWidth, window.innerHeight),\n  1.5, 0.4, 0.85\n);\nrenderer.toneMapping = THREE.ACESFilmicToneMapping;\nrenderer.toneMappingExposure = 1.25;\ncomposer.addPass(bloomPass);",
            'demoUrl' => 'https://github.com',
            'badge' => 'Interactive 3D'
        ],
        [
            'id' => 'valence-archive-labs',
            'title' => 'VALENCE ARCHIVE LABS',
            'category' => 'ecommerce',
            'categoryLabel' => 'E-commerce',
            'tags' => ['HTML', 'CSS', 'JavaScript', 'Responsive UI', 'GitHub Pages'],
            'shortDesc' => 'Immersive streetwear e-commerce storefront with product filtering, responsive catalog browsing, shopping bag interactions, and an interactive 3D archive.',
            'fullDesc' => 'VALENCE ARCHIVE LABS presents a technical streetwear catalog with 60 products, category and price filters, product discovery flows, lookbook storytelling, worldwide shipping information, and a responsive shopping bag experience.',
            'metrics' => '60 Products • Responsive Storefront • GitHub Pages',
            'codeSnippet' => "const visibleProducts = products.filter((product) => {\n  const matchesCategory = activeCategory === 'all' ||\n    product.category === activeCategory;\n  const matchesPrice = product.price <= maxPrice;\n  return matchesCategory && matchesPrice;\n});\n\nrenderProductGrid(visibleProducts);",
            'demoUrl' => 'https://danyilvel01.github.io/clothes-shop/',
            'badge' => 'Live Storefront'
        ],
        [
            'id' => 'aston-martin-3d',
            'title' => 'Aston Martin Experience',
            'category' => '3d-showcase',
            'categoryLabel' => '3D Showcase',
            'tags' => ['React', '3D Web', 'WebGL', 'Scroll Animation'],
            'shortDesc' => 'Cinematic automotive presentation built around scroll-driven storytelling, immersive 3D visuals, and a premium Aston Martin-inspired interface.',
            'fullDesc' => 'An interactive automotive showcase that uses scroll progression to guide the visual story, bringing together a cinematic composition, premium typography, and an immersive 3D presentation.',
            'metrics' => 'Scroll-Driven • Interactive 3D • Premium UI',
            'codeSnippet' => "function handleScrollProgress(progress) {\n  const rotation = progress * Math.PI * 2;\n  const cameraDistance = 5 - progress * 1.5;\n\n  model.rotation.y = rotation;\n  camera.position.z = cameraDistance;\n  camera.lookAt(model.position);\n}",
            'demoUrl' => 'https://astonmartin-3d-project.vercel.app/',
            'badge' => 'Interactive 3D'
        ],
        [
            'id' => 'holographic-agent-bot',
            'title' => 'Synapse Autonomous Agent',
            'category' => 'ai-models',
            'categoryLabel' => 'AI Models',
            'tags' => ['LLMs', 'LangChain', 'Python', 'WebSockets'],
            'shortDesc' => 'Self-reflecting multi-agent reasoning framework that dispatches background tasks and visualizes thoughts in real-time.',
            'fullDesc' => 'A production agent framework capable of executing complex web searches, code generation, and automated verification loops, rendering real-time reasoning trees in visual node graphs.',
            'metrics' => 'Multi-Agent Parallelism • Self-Correcting Execution • Realtime WebSockets',
            'codeSnippet' => "class SynapseCore:\n    def __init__(self, memory_vector_store):\n        self.memory = memory_vector_store\n        self.orchestrator = PlanAndExecuteExecutor()\n        \n    async def execute_goal(self, goal: str):\n        subtasks = await self.orchestrator.plan(goal)\n        return await asyncio.gather(*[self.run_subtask(t) for t in subtasks])",
            'demoUrl' => 'https://github.com',
            'badge' => 'Agentic AI'
        ],
        [
            'id' => 'spatial-particle-galaxy',
            'title' => 'Starlight Particle Physics',
            'category' => 'webgl',
            'categoryLabel' => 'JS/3D WebGL',
            'tags' => ['Three.js', 'Compute Shaders', 'Audio Reactive'],
            'shortDesc' => 'Audio-reactive 100,000 particle simulation with gravity attractors and orbital mechanics rendered smoothly in browser.',
            'fullDesc' => 'Pushes WebGL particle attributes using instanced buffer geometries and custom fragment shaders reacting dynamically to audio frequency inputs with zero frame drops.',
            'metrics' => '100,000+ Particles • 60 FPS on Mobile • Web Audio API Integration',
            'codeSnippet' => "const particleMaterial = new THREE.ShaderMaterial({\n  vertexShader: particleVertexShader,\n  fragmentShader: particleFragmentShader,\n  uniforms: {\n    uTime: { value: 0 },\n    uFrequency: { value: 0.0 }\n  },\n  transparent: true,\n  blending: THREE.AdditiveBlending\n});",
            'demoUrl' => 'https://github.com',
            'badge' => 'WebGL Sim'
        ],
        [
            'id' => 'cyber-auth-service',
            'title' => 'Sentinel PHP Security Vault',
            'category' => 'php',
            'categoryLabel' => 'Custom PHP',
            'tags' => ['PHP 8.3', 'JWT', 'Rate Limiting', 'Argon2id'],
            'shortDesc' => 'Zero-trust authentication gateway with Argon2id password hashing, sliding JWT rotation, and IP anomaly firewall.',
            'fullDesc' => 'Enterprise middleware defending against brute-force attacks, credential stuffing, and session hijacking with Redis-based leaky-bucket rate limiting and cryptographically signed session tokens.',
            'metrics' => 'Argon2id Hashing • Leaky-Bucket Rate Limit • OWASP Top 10 Compliant',
            'codeSnippet' => "function verifySignature(string \$payload, string \$signature, string \$secret): bool {\n    \$computed = hash_hmac('sha256', \$payload, \$secret, true);\n    return hash_equals(\$computed, \$signature);\n}",
            'demoUrl' => 'https://github.com',
            'badge' => 'SecOps'
        ]
    ];
}

// 1. GET Request Handler (Dynamic Project Loader)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $action = isset($_GET['action']) ? trim($_GET['action']) : 'get_projects';

    if ($action === 'get_projects') {
        $category = isset($_GET['category']) ? trim($_GET['category']) : null;
        $projects = getDynamicProjects();

        if ($category && $category !== 'all') {
            $projects = array_values(array_filter($projects, function ($p) use ($category) {
                return $p['category'] === $category;
            }));
        }

        jsonResponse(true, 'Projects fetched successfully', [
            'count' => count($projects),
            'projects' => $projects
        ]);
    }

    jsonResponse(false, 'Invalid GET action parameter', [], 400);
}

// 2. POST Request Handler (Contact Form Submission)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read raw JSON input or standard POST payload
    $rawInput = file_get_contents('php://input');
    $data = [];

    if (!empty($rawInput)) {
        $decoded = json_decode($rawInput, true);
        if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
            $data = $decoded;
        }
    }

    if (empty($data)) {
        $data = $_POST;
    }

    // Extract fields
    $name    = isset($data['name']) ? trim($data['name']) : '';
    $email   = isset($data['email']) ? trim($data['email']) : '';
    $subject = isset($data['subject']) ? trim($data['subject']) : 'Portfolio Inquiry';
    $message = isset($data['message']) ? trim($data['message']) : '';
    $honeypot = isset($data['website_url']) ? trim($data['website_url']) : ''; // Bot trap

    // Anti-bot Honeypot check
    if (!empty($honeypot)) {
        // Silently discard bot submission
        jsonResponse(true, 'Your transmission has been logged into the neural network.');
    }

    // Sanitization
    $name    = htmlspecialchars(strip_tags($name), ENT_QUOTES, 'UTF-8');
    $subject = htmlspecialchars(strip_tags($subject), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(strip_tags($message), ENT_QUOTES, 'UTF-8');
    $email   = filter_var($email, FILTER_SANITIZE_EMAIL);

    // Validation helper
    $strLenSafe = function($str) {
        return function_exists('mb_strlen') ? mb_strlen($str, 'UTF-8') : strlen($str);
    };

    // Validation
    $errors = [];

    if (empty($name) || $strLenSafe($name) < 2) {
        $errors['name'] = 'Full Name is required (minimum 2 characters).';
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'A valid corporate or personal email address is required.';
    }

    if (empty($message) || $strLenSafe($message) < 10) {
        $errors['message'] = 'Transmission message is required (minimum 10 characters).';
    }

    if (!empty($errors)) {
        jsonResponse(false, 'Validation failed. Please verify your inputs.', ['errors' => $errors], 422);
    }

    // Simulated Secure Storage / Email Notification
    // In production, mail($to, $subject, $body, $headers) or PDO statement with prepared queries:
    /*
      $stmt = $pdo->prepare("INSERT INTO messages (name, email, subject, message, ip, created_at) VALUES (:name, :email, :subject, :msg, :ip, NOW())");
      $stmt->execute([...]);
    */

    $submissionData = [
        'sender_name' => $name,
        'sender_email' => $email,
        'subject' => $subject,
        'transmission_id' => 'TX-' . strtoupper(bin2hex(random_bytes(4))),
        'processed_at' => date('c')
    ];

    jsonResponse(
        true,
        'Transmission received successfully! Danyil will review your inquiry within 24 hours.',
        $submissionData,
        200
    );
}

// Fallback for unsupported methods
jsonResponse(false, 'HTTP Method Not Allowed', [], 405);
