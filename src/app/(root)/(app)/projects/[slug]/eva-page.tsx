export default function EvaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">NLP & AI · Conversational Agents</div>
            <a
              href="https://github.com/hithaishisurendra/deep-learning-based-chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-mono hover:border-neutral-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">EVA — Campus Assistive Chatbot</h1>
          <p className="mb-4 text-2xl text-neutral-400">NLP-powered conversational agent for educational institutions</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            College website visitors need instant answers to common queries about courses, events, facilities, and navigation. EVA uses a
            Sequential Neural Network with Bag-of-Words NLP to provide 24/7 automated assistance, deployed at R.V. College of Engineering
            during my Cisco internship.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">89%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Intent Accuracy</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">100+</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Daily Queries</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">&lt;1s</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Response Time</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">15+</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Intent Classes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">The Problem</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              College websites receive hundreds of repetitive queries daily: "Where is the CS department?", "What are the hostel fees?",
              "When do exams start?". Administrative staff spend hours answering the same questions, while students wait for responses
              during off-hours.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              During my Cisco internship at R.V. College of Engineering, I identified the need for 24/7 automated assistance that could
              handle common queries without human intervention, freeing staff for complex issues while improving user experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Administrative Overload</h3>
              </div>
              <p className="text-neutral-400">
                Staff repeatedly answer identical questions via email and phone, consuming time better spent on complex student needs.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">Limited Availability</h3>
              </div>
              <p className="text-neutral-400">
                Students need information outside office hours—evenings, weekends, holidays. No human support during these times.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Navigation Difficulty</h3>
              </div>
              <p className="text-neutral-400">
                New students and visitors struggle to find buildings, labs, and facilities on large campus grounds without directions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">Intent-Based Conversational Pipeline with Neural Network Classification</p>

          <div className="mb-12 space-y-3 font-mono text-sm text-neutral-500">
            <div>
              <span className="text-white">User Input:</span> "Where is the computer science department located?"
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Preprocessing:</span> Tokenization → lowercasing → stemming (NLTK)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Feature Extraction:</span> Bag of Words vectorization
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Intent Classification:</span> Sequential NN (Dense layers + ReLU)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Output:</span> Intent = "location_query" (89% confidence)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Response Generation:</span> Template lookup + Google Maps integration
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-white">Final Response:</span> "The CS department is in Building 7, 3rd floor. [Map Link]"
            </div>
          </div>

          <div className="mb-12 border-l-4 border-white bg-black p-6">
            <h4 className="mb-3 text-lg font-bold">Key Design Decision: Bag of Words + Sequential NN</h4>
            <p className="mb-3 leading-relaxed text-neutral-400">
              Why not use pre-trained transformers (BERT, GPT)? <span className="text-white">Simplicity and computational efficiency</span>{' '}
              for a constrained educational deployment.
            </p>
            <div className="space-y-2 font-mono text-xs text-neutral-500">
              <div>BoW: Lightweight, interpretable features → No GPU required for inference</div>
              <div>Sequential NN: 3-layer dense network → Sub-second inference on CPU</div>
              <div>Intent-based: 15 predefined classes → Deterministic, debuggable responses</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">NLP Pipeline</h3>
              <p className="mb-2 text-sm text-neutral-400">NLTK for preprocessing and stemming</p>
              <div className="font-mono text-xs text-neutral-600">Tokenization · Porter Stemmer · Bag of Words</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Neural Network</h3>
              <p className="mb-2 text-sm text-neutral-400">Sequential model with dense layers</p>
              <div className="font-mono text-xs text-neutral-600">Input layer · 2 hidden (ReLU) · Softmax output</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Intent System</h3>
              <p className="mb-2 text-sm text-neutral-400">JSON-based knowledge base with intents</p>
              <div className="font-mono text-xs text-neutral-600">15+ intent classes · Pattern matching · Template responses</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Integration</h3>
              <p className="mb-2 text-sm text-neutral-400">Google Maps API for campus navigation</p>
              <div className="font-mono text-xs text-neutral-600">Location queries · Map embeddings · Directions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Why These Choices?</h2>

          <div className="space-y-8">
            {/* Bag of Words Decision */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">Bag of Words over Word Embeddings</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> Bag of Words (BoW) vectorization instead of Word2Vec, GloVe, or BERT
                embeddings.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why BoW Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Computational efficiency:</span> No pre-trained embeddings to load → Instant
                        startup, minimal memory
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Interpretability:</span> Sparse vectors map directly to vocabulary → Easy debugging
                        of misclassifications
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Domain-specific vocabulary:</span> Campus-specific terms (building names, course
                        codes) don't exist in pre-trained embeddings
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">89% accuracy:</span> Sufficient for intent classification with 15 well-defined
                        classes
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Not Alternatives?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">Word2Vec/GloVe:</span> Dense embeddings increase model size → Slower inference, no
                        accuracy gain for intent classification
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">BERT:</span> 110M parameters → Requires GPU, overkill for 15-class classification
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">TF-IDF:</span> Weighting scheme adds complexity without benefit for short queries
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sequential NN Decision */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">Sequential NN over Complex Architectures</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> Simple Sequential Neural Network (Dense layers + ReLU + Softmax) instead of
                LSTMs, GRUs, or Transformers.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Sequential NN Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Fast training:</span> Converges in minutes on CPU with 100+ training examples per
                        intent
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Low latency:</span> Sub-second inference without GPU → Deployed on college web
                        server
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Sufficient capacity:</span> 89% accuracy on 15-class intent classification with
                        simple architecture
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Easy deployment:</span> Single .h5 model file → No complex serving infrastructure
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Not Alternatives?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">LSTM/GRU:</span> Recurrent layers model sequences, but BoW loses word order anyway →
                        Unnecessary complexity
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">Transformers:</span> Attention mechanisms for long contexts irrelevant for 5-10 word
                        queries
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">CNNs:</span> Spatial convolutions don't capture intent semantics as well as dense
                        layers for classification
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flask + Tkinter Decision */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">Flask Web + Tkinter Desktop Interface</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> Dual deployment with Flask for web integration and Tkinter for standalone
                desktop GUI.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Flask?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">College website integration:</span> Embed chatbot widget via iframe or AJAX
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Lightweight Python framework:</span> Minimal boilerplate, easy to maintain
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">RESTful API:</span> POST /query endpoint for programmatic access
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Tkinter?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Cross-platform GUI:</span> Runs on Windows, Mac, Linux without dependencies
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">No browser required:</span> Desktop app for administrative staff testing
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Built-in to Python:</span> Zero additional dependencies or installations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment & Impact */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Deployment & Impact</h2>
          <p className="mb-12 text-lg text-neutral-400">Production deployment at R.V. College of Engineering</p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-3 font-mono text-2xl font-bold">100+</div>
              <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Daily Queries</div>
              <div className="text-xs text-neutral-600">Automated responses without human intervention</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-3 font-mono text-2xl font-bold">24/7</div>
              <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Availability</div>
              <div className="text-xs text-neutral-600">Students get help anytime, including weekends</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-3 font-mono text-2xl font-bold">&lt;1s</div>
              <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Response Time</div>
              <div className="text-xs text-neutral-600">Instant answers vs. hours waiting for email</div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Use Case Categories</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <div className="mb-2 text-sm font-semibold text-neutral-400">Academic Information</div>
                  <ul className="space-y-1 text-xs text-neutral-500">
                    <li>• Course schedules and syllabi</li>
                    <li>• Faculty office hours</li>
                    <li>• Exam schedules and results</li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold text-neutral-400">Campus Navigation</div>
                  <ul className="space-y-1 text-xs text-neutral-500">
                    <li>• Building locations (Google Maps)</li>
                    <li>• Lab and facility information</li>
                    <li>• Event venues</li>
                  </ul>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold text-neutral-400">General Queries</div>
                  <ul className="space-y-1 text-xs text-neutral-500">
                    <li>• Admission procedures</li>
                    <li>• Campus events and activities</li>
                    <li>• Hostel and cafeteria info</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-neutral-700 bg-neutral-950 p-6">
              <p className="text-neutral-400">
                <span className="font-semibold text-white">Real-world Impact:</span> Reduced administrative load by handling repetitive
                queries automatically. Students reported improved user experience with instant responses. The chatbot handled increasing
                query volumes effectively, proving scalability of the intent-based architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Tech Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Python (99.7%)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Core language for NLP pipeline, neural network training, and web backend. NLTK for tokenization and stemming.
                TensorFlow/Keras for Sequential NN model.
              </p>
              <div className="font-mono text-xs text-neutral-600">NLP · Training · Inference · Backend</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">NLTK</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Natural Language Toolkit for text preprocessing. Porter Stemmer for word normalization. Tokenization and lowercasing for
                feature extraction pipeline.
              </p>
              <div className="font-mono text-xs text-neutral-600">Preprocessing · Stemming · Tokenization</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">TensorFlow/Keras</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Sequential model with Dense layers. ReLU activation for hidden layers, Softmax for multi-class output. Adam optimizer for
                training. Model saved as .h5 file.
              </p>
              <div className="font-mono text-xs text-neutral-600">Neural Network · Training · 89% accuracy</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Flask</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Lightweight Python web framework. RESTful API endpoints for chatbot queries. HTML templates for web interface. Integrated
                with college website.
              </p>
              <div className="font-mono text-xs text-neutral-600">Web Backend · REST API · Integration</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Tkinter</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Cross-platform GUI framework (built-in to Python). Desktop application for testing and administrative use. Frequently-used
                links menu for quick access.
              </p>
              <div className="font-mono text-xs text-neutral-600">Desktop GUI · Cross-platform · Zero dependencies</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Google Maps API</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Integration for campus navigation queries. Provides map embeddings and directions for building locations, labs, and
                facilities.
              </p>
              <div className="font-mono text-xs text-neutral-600">Navigation · Map embeddings · Directions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Key Takeaways</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Simplicity Over Complexity for Constrained Deployments</h3>
              <p className="leading-relaxed text-neutral-400">
                Bag of Words + Sequential NN achieved 89% accuracy with sub-second inference on CPU. No GPU required, no pre-trained
                embeddings to load. Transformers would be overkill for 15-class intent classification with 100+ daily queries. Simple
                architectures are easier to debug, deploy, and maintain.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Intent-Based Systems for Domain-Specific Queries</h3>
              <p className="leading-relaxed text-neutral-400">
                Predefined intent classes (location_query, course_info, exam_schedule) provide deterministic, debuggable responses.
                Template-based generation ensures factual accuracy—no hallucinations. Knowledge base stored in JSON makes updates easy
                without model retraining.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Real-World Deployment Validates Architecture</h3>
              <p className="leading-relaxed text-neutral-400">
                Handling 100+ daily queries at R.V. College of Engineering proved the system's robustness. 24/7 availability improved user
                experience while reducing administrative load. Scalability demonstrated as query volume increased over time without
                performance degradation.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">API Integration Extends Functionality</h3>
              <p className="leading-relaxed text-neutral-400">
                Google Maps API integration solved campus navigation challenges—a core pain point for new students and visitors.
                Demonstrates that chatbots benefit from external services for specialized tasks beyond pure NLP. Hybrid approach (NLP +
                APIs) beats pure conversational AI.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-white">Publication:</span> "Deep Learning-based Campus Assistive Chatbot" — IEEE CSITSS
              (Conference on Signal and Information Processing, Networking and Computers), December 2021
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              <span className="font-semibold text-white">Internship:</span> Cisco at R.V. College of Engineering, Bangalore, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
