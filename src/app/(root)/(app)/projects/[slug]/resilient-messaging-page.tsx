export default function ResilientMessagingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Distributed Systems · Fault Tolerance</div>
            <a
              href="https://github.com/hithaishisurendra/messaging-application-with-disaster-recovery-and-message-resiliency"
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
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Resilient Messaging System</h1>
          <p className="mb-4 text-2xl text-neutral-400">Kafka-backed messaging platform with disaster recovery</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            Traditional messaging applications lose data when clients disconnect or servers crash. This system uses Apache Kafka as an
            asynchronous message queue to ensure messages persist across network interruptions, client failures, and server crashes—enabling
            true disaster recovery.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Message Persistence</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">MERN</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Full-Stack</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Kafka</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Message Queue</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">Docker</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Containerized</div>
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
              Traditional messaging applications rely on synchronous communication: client sends message → server stores in database →
              server forwards to recipient. This architecture breaks down when network connections drop or components fail.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Messages disappear if the client crashes before receiving acknowledgment. Server crashes cause in-flight messages to be lost.
              Network interruptions result in message duplication or missing messages. No built-in disaster recovery mechanisms.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Message Loss</h3>
              </div>
              <p className="text-neutral-400">
                Synchronous systems lose messages when clients disconnect before acknowledgment or servers crash mid-transmission.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">No Disaster Recovery</h3>
              </div>
              <p className="text-neutral-400">
                Database-only storage provides no message replay capability. Failed deliveries cannot be retried without manual
                intervention.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Tight Coupling</h3>
              </div>
              <p className="text-neutral-400">
                Direct client-server communication creates dependencies. Server downtime blocks all messaging, with no buffer for
                asynchronous processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">Event-Driven MERN Stack with Kafka Message Backbone</p>

          <div className="mb-12 space-y-3 font-mono text-sm text-neutral-500">
            <div>
              <span className="text-white">User A sends message:</span> "Hello, how are you?"
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">React Frontend:</span> POST /api/messages (message payload)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Express Backend:</span> Validate message, generate ID, timestamp
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Kafka Producer:</span> Publish to "messages" topic (partition by conversation ID)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-white">Kafka Broker:</span> Persist to distributed log (durability guarantee)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Kafka Consumer:</span> Read from "messages" topic (async)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">MongoDB:</span> Store message + status (delivered/pending)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-neutral-400">Express Backend:</span> Notify User B via WebSocket (if online)
            </div>
            <div className="pl-4">↓</div>
            <div>
              <span className="text-white">User B receives:</span> "Hello, how are you?" (even if they were offline during send)
            </div>
          </div>

          <div className="mb-12 border-l-4 border-white bg-black p-6">
            <h4 className="mb-3 text-lg font-bold">Key Design Decision: Kafka as Message Backbone</h4>
            <p className="mb-3 leading-relaxed text-neutral-400">
              Why not use traditional message queues (RabbitMQ, SQS) or direct database writes?{' '}
              <span className="text-white">Kafka provides distributed durability + replay capability</span> that database-only approaches
              cannot match.
            </p>
            <div className="space-y-2 font-mono text-xs text-neutral-500">
              <div>Distributed log: Messages replicated across brokers → Survives single broker failures</div>
              <div>Replay capability: Consumers can re-read from any offset → Disaster recovery after crashes</div>
              <div>Decoupling: Producers and consumers operate independently → No blocking on client availability</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Frontend Layer</h3>
              <p className="mb-2 text-sm text-neutral-400">React.js + Chakra UI for responsive interface</p>
              <div className="font-mono text-xs text-neutral-600">Single/group chat · Real-time updates · Admin dashboard</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Backend Layer</h3>
              <p className="mb-2 text-sm text-neutral-400">Node.js + Express.js REST API</p>
              <div className="font-mono text-xs text-neutral-600">Message validation · User auth · Kafka integration</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Messaging Layer</h3>
              <p className="mb-2 text-sm text-neutral-400">Apache Kafka distributed message queue</p>
              <div className="font-mono text-xs text-neutral-600">Topic partitioning · Broker replication · Offset tracking</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Persistence Layer</h3>
              <p className="mb-2 text-sm text-neutral-400">MongoDB document store</p>
              <div className="font-mono text-xs text-neutral-600">User profiles · Conversations · Message history</div>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery Mechanisms */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Disaster Recovery Mechanisms</h2>

          <div className="space-y-8">
            {/* Kafka Durability */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">Kafka Distributed Log Persistence</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Problem:</span> Server crashes cause in-flight messages to be lost forever.
              </div>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Solution:</span> Kafka persists messages to distributed topic partitions with broker
                replication.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">How It Works</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">1.</span>
                      <span>Message arrives at Kafka producer (backend service)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">2.</span>
                      <span>Producer publishes to "messages" topic partition</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">3.</span>
                      <span>Kafka broker writes to append-only log (disk persistence)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">4.</span>
                      <span>Replication: Log copied to follower brokers (fault tolerance)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">5.</span>
                      <span>Acknowledgment sent after replication threshold met</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Recovery Guarantees</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Single broker failure:</span> Follower brokers promote to leader → Zero message loss
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Consumer crash:</span> Resume from last committed offset → No duplicate processing
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Message replay:</span> Consumers can re-read historical data → Disaster recovery
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Asynchronous Decoupling */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">Asynchronous Producer-Consumer Decoupling</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Problem:</span> Client unavailable → message delivery fails, blocking sender.
              </div>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Solution:</span> Messages queue in Kafka regardless of consumer availability.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Traditional Synchronous</h4>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="font-mono text-xs text-neutral-600">Client A → Server → Database → Server → Client B</div>
                    <div className="mt-4">
                      <span className="text-red-400">✗ Failure point:</span> If Client B is offline, message delivery fails
                    </div>
                    <div className="mt-2">
                      <span className="text-red-400">✗ Blocking:</span> Client A waits for Client B acknowledgment
                    </div>
                    <div className="mt-2">
                      <span className="text-red-400">✗ No retry:</span> Failed messages require manual intervention
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Kafka Asynchronous</h4>
                  <div className="space-y-2 text-sm text-neutral-400">
                    <div className="font-mono text-xs text-neutral-600">
                      Client A → Server → Kafka → (Client B offline) → Kafka → Client B (later)
                    </div>
                    <div className="mt-4">
                      <span className="text-green-400">✓ Non-blocking:</span> Message queued immediately, Client A continues
                    </div>
                    <div className="mt-2">
                      <span className="text-green-400">✓ Persistent queue:</span> Message waits in Kafka until Client B reconnects
                    </div>
                    <div className="mt-2">
                      <span className="text-green-400">✓ Automatic retry:</span> Consumer polls Kafka, processes when available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MongoDB Status Tracking */}
            <div className="border border-neutral-800 bg-neutral-950 p-8">
              <h3 className="mb-4 text-2xl font-bold">MongoDB Message Status Tracking</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Hybrid approach:</span> Kafka for durability + MongoDB for queryable message history.
              </div>
              <div className="font-mono text-xs bg-black p-4 border border-neutral-800">
                <div className="text-neutral-500">{'//'} Message schema with status tracking</div>
                <div className="mt-2">
                  <span className="text-blue-400">const</span> messageSchema = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">messageId</span>: String,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">conversationId</span>: String,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">sender</span>: ObjectId,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">content</span>: String,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">timestamp</span>: Date,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">status</span>: {'{'} <span className="text-green-400">type</span>: String,{' '}
                  <span className="text-green-400">enum</span>: [<span className="text-orange-400">'pending'</span>,{' '}
                  <span className="text-orange-400">'delivered'</span>, <span className="text-orange-400">'read'</span>] {'}'},
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">kafkaOffset</span>: Number{' '}
                  <span className="text-neutral-500">{'//'} For replay/reconciliation</span>
                </div>
                <div>{'}'}</div>
              </div>
              <div className="mt-4 text-sm text-neutral-400">
                <span className="font-semibold text-white">Recovery workflow:</span> Compare MongoDB status with Kafka offsets → Re-process
                "pending" messages after crash → Update status to "delivered" after successful processing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Why These Choices?</h2>

          <div className="space-y-8">
            {/* Kafka Decision */}
            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">Kafka over RabbitMQ or AWS SQS</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> Apache Kafka for message queue instead of RabbitMQ, AWS SQS, or direct
                database writes.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Kafka Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Distributed log:</span> Messages persist across broker failures via replication
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Replay capability:</span> Consumers re-read from any offset → Disaster recovery
                        after crashes
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Scalability:</span> Partition-based parallelism for high throughput messaging
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Durability:</span> Append-only log guarantees message ordering and immutability
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
                        <span className="font-semibold">RabbitMQ:</span> Messages deleted after consumption → No replay for disaster
                        recovery
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">AWS SQS:</span> Cloud vendor lock-in, higher latency, no offset-based replay
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span>
                        <span className="font-semibold">Direct DB writes:</span> No asynchronous decoupling, blocking operations, tight
                        coupling
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MERN Stack Decision */}
            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">MERN Stack for Full JavaScript Consistency</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> MongoDB + Express + React + Node.js (MERN) for unified JavaScript development.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why MERN Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Type consistency:</span> JavaScript across frontend, backend, and database queries
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Rapid development:</span> Share code (validation, schemas) between client and server
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">JSON native:</span> MongoDB documents match JavaScript objects → No ORM overhead
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Flexible schema:</span> MongoDB accommodates evolving message formats without
                        migrations
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Component Choices</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>
                        <span className="font-semibold">React:</span> Component-based UI, real-time state updates, Chakra UI integration
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>
                        <span className="font-semibold">Express:</span> Lightweight routing, middleware for Kafka producers/consumers
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>
                        <span className="font-semibold">Node.js:</span> Async I/O for Kafka integration, non-blocking event loop
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">•</span>
                      <span>
                        <span className="font-semibold">MongoDB:</span> Document store for users, conversations, message history
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Docker Decision */}
            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">Docker for Deployment Consistency</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> Containerize all services (Kafka, MongoDB, backend, frontend) with Docker
                Compose.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Docker Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Environment consistency:</span> Dev, staging, prod use identical containers → "Works
                        on my machine" eliminated
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Dependency isolation:</span> Kafka, MongoDB, Node.js versions locked per container
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Easy orchestration:</span> Docker Compose defines multi-service architecture in YAML
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span>
                        <span className="font-semibold">Scalability:</span> Horizontal scaling via container replication (Kubernetes-ready)
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Service Architecture</h4>
                  <div className="font-mono text-xs bg-neutral-950 p-3 border border-neutral-700">
                    <div className="text-neutral-500"># docker-compose.yml</div>
                    <div className="mt-2">services:</div>
                    <div className="pl-2">kafka:</div>
                    <div className="pl-4 text-neutral-400">image: kafka:latest</div>
                    <div className="pl-2">mongodb:</div>
                    <div className="pl-4 text-neutral-400">image: mongo:latest</div>
                    <div className="pl-2">backend:</div>
                    <div className="pl-4 text-neutral-400">build: ./backend</div>
                    <div className="pl-2">frontend:</div>
                    <div className="pl-4 text-neutral-400">build: ./frontend</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Tech Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Apache Kafka</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Distributed message queue with append-only log architecture. Topic partitioning for parallelism, broker replication for
                fault tolerance. Offset-based consumer tracking enables message replay.
              </p>
              <div className="font-mono text-xs text-neutral-600">Messaging Backbone · Disaster Recovery · Durability</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">React.js + Chakra UI</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Component-based frontend with Chakra UI for accessible, responsive design. Single/group chat interfaces, admin dashboard for
                user management. Real-time updates via WebSocket.
              </p>
              <div className="font-mono text-xs text-neutral-600">Frontend · UI Components · Real-time</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Node.js + Express.js</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Async backend with Express routing. Kafka producer publishes messages to topics, consumer processes from queue. RESTful API
                for CRUD operations, WebSocket for real-time delivery.
              </p>
              <div className="font-mono text-xs text-neutral-600">Backend · Kafka Integration · REST API</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">MongoDB</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Document store for user profiles, conversations, and message history. Flexible schema accommodates evolving message formats.
                Status fields track delivery state for reconciliation.
              </p>
              <div className="font-mono text-xs text-neutral-600">Persistence · Document DB · Message History</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Docker</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Containerization for all services (Kafka, MongoDB, backend, frontend). Docker Compose orchestrates multi-container
                deployment. Environment consistency across dev, staging, production.
              </p>
              <div className="font-mono text-xs text-neutral-600">Containerization · Orchestration · Deployment</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">JavaScript (96.9%)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Unified language across full stack. Type consistency from frontend React to backend Node.js to MongoDB queries. Shared
                validation logic and data schemas.
              </p>
              <div className="font-mono text-xs text-neutral-600">Full-Stack · Type Consistency · MERN</div>
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
              <h3 className="mb-3 text-xl font-bold">Kafka Provides True Disaster Recovery</h3>
              <p className="leading-relaxed text-neutral-400">
                Traditional messaging loses data on crashes. Kafka's distributed log persists messages across broker failures via
                replication. Offset-based consumer tracking enables message replay—critical for disaster recovery. Messages survive network
                interruptions, client crashes, and server failures.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Asynchronous Decoupling Eliminates Blocking</h3>
              <p className="leading-relaxed text-neutral-400">
                Synchronous systems block when recipients are offline. Kafka's producer-consumer decoupling queues messages regardless of
                consumer availability. Senders continue immediately, consumers process when ready. No failed deliveries—messages wait in
                queue until clients reconnect.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Hybrid Kafka + MongoDB Architecture</h3>
              <p className="leading-relaxed text-neutral-400">
                Kafka for durability and replay, MongoDB for queryable history. Messages flow through Kafka (durability), then stored in
                MongoDB (queries). Status fields enable reconciliation: compare MongoDB status with Kafka offsets to re-process "pending"
                messages after crashes.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">MERN Stack Accelerates Development</h3>
              <p className="leading-relaxed text-neutral-400">
                JavaScript across frontend (React), backend (Node.js/Express), and database (MongoDB) provides type consistency and code
                sharing. Validation logic and schemas shared between client and server. MongoDB's flexible schema accommodates evolving
                message formats without migrations. Docker ensures deployment consistency.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-white">Key Innovation:</span> Kafka-backed asynchronous messaging ensures zero message
              loss across network interruptions, client failures, and server crashes—enabling true disaster recovery for messaging
              applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
