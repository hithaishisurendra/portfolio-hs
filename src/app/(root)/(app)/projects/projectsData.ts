export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  date: string
  highlights: string[]
  link?: string
  category: string
  slug?: string // Optional: If present, links to internal detail page at /projects/[slug]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Multi-Agent Financial QA',
    description:
      'Sequential multi-agent pipeline with question-driven RAG for financial table-text reasoning. 94% token reduction, 74.1% peak accuracy on TAT-QA benchmark.',
    technologies: ['RAG', 'TAPAS', 'FLAN-T5', 'Gemini', 'FAISS', 'BGE Embeddings'],
    date: 'Feb 2025 – May 2025',
    category: 'NLP & AI',
    slug: 'summarization',
    link: 'https://github.com/hithaishisurendra/Multi-agent-summarization-pipeline',
    highlights: [
      'Question-driven RAG: 94% token reduction, 87% context coverage',
      'Sequential multi-agent architecture with CoT traces',
      '$0.000275 per query (160× cheaper than GPT-4)',
    ],
  },
  {
    id: 2,
    title: 'Multi-Agent SWE-bench System',
    description:
      'Graph-augmented multi-agent pipeline for automated bug fixing on SWE-bench-C. Tree-sitter dependency graphs + evidence-routed feedback loops for localization and patch generation.',
    technologies: ['Python', 'tree-sitter', 'Qwen3', 'GPT-4', 'Multi-Agent Systems', 'Graph Retrieval'],
    date: 'Sep 2025 – Dec 2025',
    category: 'Agentic AI',
    slug: 'swe-bench',
    link: 'https://github.com/hithaishisurendra/Multi-agent-swe-bench',
    highlights: [
      'Graph-augmented localization: 22/174 instances (12.6%), +340% vs. single-shot baselines',
      'Evidence-routed feedback: 60% token cost reduction per retry',
      'Only system to produce apply-clean patch on redis subset',
    ],
  },
  {
    id: 3,
    title: 'Distributed Counter Strike 2 Analytics Platform',
    description:
      'Built a Kafka-based ingestion pipeline backed by a replicated CockroachDB cluster, enabling fault-tolerant, scalable analytics with real-time monitoring via Grafana.',
    technologies: ['Kafka', 'CockroachDB', 'Distributed SQL', 'Grafana', 'Python'],
    date: 'Sep 2025 – Dec 2025',
    category: 'Distributed Systems',
    slug: 'cs2-analytics',
    link: 'https://github.com/hithaishisurendra/Counter-Strike-2-Distributed-System',
    highlights: [
      '3-node CockroachDB cluster with Raft consensus for fault tolerance',
      'Kafka message queue decouples ingestion from processing',
      'Real-time player analytics via Grafana dashboards',
    ],
  },
  {
    id: 4,
    title: 'Lane and Traffic Sign Detection for ADAS',
    description:
      'Semantic segmentation and object detection for autonomous driving, tested in the CARLA simulator across dynamic urban driving scenarios.',
    technologies: ['Python', 'SegNet', 'YOLO', 'CARLA', 'Computer Vision', 'Deep Learning'],
    date: 'Nov 2023',
    category: 'Computer Vision',
    slug: 'adas',
    link: 'https://github.com/hithaishisurendra/ML-algorithms-for-ADAS',
    highlights: [
      'SegNet for lane detection: 94.80% accuracy, 93.42% F-score',
      'YOLO for traffic sign detection: 95.56% accuracy, 93.16% F-score',
      'Simulated adverse and dynamic conditions using CARLA',
    ],
  },
  {
    id: 5,
    title: 'EVA — Campus Chatbot',
    description:
      'Web-integrated conversational agent for college campus navigation and FAQs, built using a Sequential Neural Network with bag-of-words text processing.',
    technologies: ['Python', 'Sequential NN', 'NLP', 'Tkinter', 'Google Maps API'],
    date: 'Dec 2021',
    category: 'NLP & AI',
    slug: 'eva',
    link: 'https://github.com/hithaishisurendra/deep-learning-based-chatbot',
    highlights: [
      'Sequential NN model achieving 89% response efficiency',
      'Google Maps integration for campus navigation',
      'Tkinter GUI with frequently-used links menu',
    ],
  },
  {
    id: 6,
    title: 'Resilient Messaging System',
    description:
      'Fault-tolerant messaging platform built on Kafka and the MERN stack, designed for message resiliency and disaster recovery across network interruptions and client/server failures.',
    technologies: ['Kafka', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Docker', 'Chakra UI'],
    date: '2023',
    category: 'Distributed Systems',
    slug: 'resilient-messaging',
    link: 'https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency',
    highlights: [
      'Kafka-backed async message queue with persistence across crashes',
      'Full-stack MERN implementation with Chakra UI frontend',
      'Containerized with Docker for consistent deployment',
    ],
  },
  {
    id: 7,
    title: 'Signed Network Link Prediction',
    description:
      'Comparative study of signed link prediction on Epinions and Slashdot using Logistic Regression, Decoupled GNN, and Signed Graph Attention Network to classify trust vs. distrust edges in imbalanced social graphs.',
    technologies: ['Python', 'PyTorch Geometric', 'Signed GCN', 'Graph Attention Networks', 'Epinions', 'Slashdot'],
    date: 'Jan 2025 – May 2025',
    category: 'Machine Learning',
    highlights: [
      'Designed Signed GAT with sign-specific attention kernels; achieved 0.904 F1 and 0.984 AUC on Epinions, outperforming Decoupled GNN and LR baselines',
      'Built 18-feature LR baseline from Structural Balance Theory (triad counts, PageRank, signed Jaccard) that matched GNN accuracy at 75x lower training cost',
      'Handled 14–23% negative edge imbalance via weighted binary cross-entropy; F1 over raw accuracy as primary eval metric',
    ],
  },
  {
    id: 8,
    title: 'Edge-to-Cloud Face Recognition Pipeline',
    description:
      'Distributed face recognition pipeline using AWS IoT Greengrass and Lambda. Edge device runs MTCNN face detection via MQTT; detected faces trigger cloud-side FaceNet recognition through SQS.',
    technologies: ['AWS IoT Greengrass', 'AWS Lambda', 'SQS', 'MTCNN', 'FaceNet', 'MQTT', 'Python'],
    date: 'Jan 2025 – May 2025',
    category: 'Cloud & IoT',
    highlights: [
      'Deployed face detection as a Greengrass component on EC2-emulated IoT core device',
      'MQTT pub/sub pipeline from client device → core device → SQS → Lambda',
      'Achieved sub-2.5s average latency across 100 concurrent requests',
    ],
  },
  {
    id: 9,
    title: 'Autoscaling Face Recognition Service',
    description:
      'Deployed ML inference service using FastAPI, PyTorch, AWS EC2 autoscaling, S3, and SQS task queues. Served 100+ concurrent users with sub-900ms latency under load.',
    technologies: ['FastAPI', 'PyTorch', 'AWS EC2', 'AWS S3', 'AWS SQS', 'Python'],
    date: 'Mar 2025 – May 2025',
    category: 'Cloud & ML',
    highlights: [
      'Scalable ML inference with autoscaling EC2 instances',
      'Sub-900ms latency for 100+ concurrent users',
      'Task queue management with AWS SQS',
    ],
  },
  {
    id: 10,
    title: 'Tennis Match Outcome Prediction',
    description:
      'End-to-end ML pipeline on 5 years of ATP match data (11K+ instances) for binary win/loss classification, with extensive feature engineering to convert absolute stats into relative player-vs-opponent differentials.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Seaborn'],
    date: 'Jan 2025 – May 2025',
    category: 'Machine Learning',
    highlights: [
      'Engineered differential features (rank_diff, ace_diff, 1stWon_diff) to create a linearly separable feature space',
      'Logistic Regression achieved 95.3% accuracy and AUC 0.99, outperforming Random Forest, XGBoost and SVM',
      'Dataset transformed from winner/loser format to player/opponent format, doubling training instances to 23K',
    ],
  },
  {
    id: 11,
    title: 'Stock Market Movement Prediction',
    description:
      'Built an end-to-end ML pipeline on the Optiver NASDAQ dataset (5.2M rows, 200 stocks) for binary classification of 60-second price movement direction.',
    technologies: ['Python', 'Bi-LSTM', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-learn'],
    date: 'Sep 2024 – Dec 2024',
    category: 'Machine Learning',
    highlights: [
      'Engineered features: lagged values, rolling stats, bid-ask spread',
      'Achieved 84% accuracy and 0.833 F1 score with Bi-LSTM',
      'Processed 5.2M rows across 200 stocks',
    ],
  },
  {
    id: 12,
    title: 'Arizona MVD Usability Redesign',
    description:
      'A/B usability study (n=12) evaluating and redesigning the Arizona MVD website across three core tasks, with a Figma prototype replacing the multi-homepage structure with a unified, task-oriented dashboard.',
    technologies: ['Figma', 'Usability Testing', 'A/B Study', 'Cognitive Load Theory', 'Nielsen Heuristics', 'Think-Aloud Protocol'],
    date: 'Jan 2025 – May 2025',
    category: 'UX Research',
    highlights: [
      'Prototype reduced license renewal completion time from 268s to 77s (t(10)=2.67, p<.05) and eliminated document clarity failures — 0% to 100% success across all tasks',
      'Identified 4 core failure modes on original site: overlapping homepages, buried document requirements in PDFs, ambiguous terminology, and broken cross-site redirects',
      'Applied Cognitive Load Theory, Nielsen heuristics, and Recognition over Recall to design task cards with upfront document checklists; overall satisfaction rose from 2.8 to 6.0 (t(10)=6.22, p<.001)',
    ],
  },
  {
    id: 13,
    title: 'Evolution of F1',
    description:
      'Built an interactive, race track-style data visualization to explore F1 safety trends and pit strategies using JavaScript, D3.js, and SVG, with custom animations and scrollytelling interactions.',
    technologies: ['JavaScript', 'D3.js', 'SVG', 'Data Visualization', 'Scrollytelling'],
    date: 'Mar 2025 – May 2025',
    category: 'Data Visualization',
    link: 'https://hithaishisurendra.github.io/evolution-of-f1/',
    highlights: [
      'Interactive scrollytelling experience',
      'Custom animations and transitions',
      'Responsive visual components with race track layouts',
    ],
  },
  {
    id: 14,
    title: 'Deep Learning-Based Lung Cancer Detection',
    description:
      'Clinical decision support system for early diagnosis of lung cancer from CT images using CNNs. Trained on LIDC-IDRI dataset with 1010 chest CT scans containing 2625 nodules.',
    technologies: ['Python', 'CNN', 'PyTorch', 'MONAI', 'Medical Imaging', 'Streamlit'],
    date: '2020',
    category: 'Computer Vision',
    link: 'https://github.com/hithaishisurendra/lung-cancer-detection-using-CNN',
    highlights: [
      'Random Forest classifier for malignancy prediction with 94.67% accuracy and 0.9895 AUC score',
      'Binary classification of lung nodules (benign vs malignant) from CT scan metadata',
      'Preprocessing pipeline for DICOM images from LIDC-IDRI dataset',
    ],
  },
]
