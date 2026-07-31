import Image from 'next/image'

export default function CS2AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Distributed Systems · Real-Time Analytics</div>
            <a
              href="https://github.com/hithaishisurendra/Counter-Strike-2-Distributed-System"
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
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Distributed Counter-Strike 2 Analytics Platform</h1>
          <p className="mb-4 text-2xl text-neutral-400">Fault-tolerant telemetry processing at scale</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            CS2 generates millions of data points per match, but players lack tools to convert this telemetry into actionable feedback. This
            platform bridges that gap through Kafka-based ingestion, CockroachDB distributed storage, and real-time Grafana dashboards.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">3</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">CockroachDB Nodes</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">1.5-4.6M</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Data Points/Match</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">68/68</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Ranges Replicated</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">0</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Parser Failures</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">The Analytical Gap</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              Counter-Strike 2 produces extensive match and player telemetry, but players have no dependable way to convert this information
              into practical feedback. Important performance indicators—reaction timing, crosshair behavior, round-by-round analysis—are
              embedded in raw logs but not accessible through the game's default interfaces.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Existing tools rely on manual replay review or third-party services that are unreliable for everyday players. The central
              problem: absence of a fault-tolerant distributed system capable of processing CS2 demo files at scale, ensuring consistency
              across a cluster, and delivering advanced analytics in real time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">No Advanced Metrics</h3>
              <p className="text-neutral-400">
                K/D ratio, headshot percentage, round-by-round breakdown, per-match stats—none accessible through in-game summaries.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Unreliable Collection</h3>
              <p className="text-neutral-400">
                Initial experiments with Steam Game Coordinator failed due to dropped connections and inconsistent responses.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Scalability Challenge</h3>
              <p className="text-neutral-400">
                30-50 minute matches on 64-128 Hz servers generate 1.5-4.6M player-state snapshots requiring distributed processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">System Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">Four-layer architecture: Ingestion → Processing → Storage → Analytics</p>

          {/* Architecture Diagram */}
          <div className="mb-12 overflow-hidden border border-neutral-800 bg-white">
            <div className="relative h-[500px] w-full md:h-[700px]">
              <Image
                src="/projects/cs2-analytics/architecture.png"
                alt="Distributed CS2 Analytics Platform Architecture"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Layer 1: Data Ingestion</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Upload API receives demo files via REST, stores them in shared Docker volume, publishes file path to Kafka topic
              </p>
              <div className="font-mono text-xs text-neutral-600">REST → Volume → Kafka</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Layer 2: Gameplay Processing</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Parser service consumes from Kafka, uses demoparser2 to extract telemetry, writes to database
              </p>
              <div className="font-mono text-xs text-neutral-600">Kafka → Parser → DB Writer</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Layer 3: Distributed Storage</h3>
              <p className="mb-2 text-sm text-neutral-400">
                3-node CockroachDB cluster with Raft consensus, automatic range partitioning, strong consistency
              </p>
              <div className="font-mono text-xs text-neutral-600">Raft → Replication → Failover</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Layer 4: Performance Analytics</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Read API + Grafana dashboards query distributed SQL for player stats, match trends, ML predictions
              </p>
              <div className="font-mono text-xs text-neutral-600">SQL → Aggregations → Dashboards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Overview */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Methodology: Five Distributed Systems Pillars</h2>
          <p className="mb-12 text-lg text-neutral-400">
            Fault-tolerant platform combining partitioning, replication, horizontal scaling, strong consistency, and optimized query
            processing
          </p>

          {/* Methodology Infographic */}
          <div className="mb-12 overflow-hidden border border-neutral-800 bg-white">
            <div className="relative h-[500px] w-full md:h-[700px]">
              <Image
                src="/projects/cs2-analytics/methodology.png"
                alt="Methodology Overview for Distributed CS2 Analytics Pipeline"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Five Features */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Key Distributed Systems Features</h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">1. Data Partitioning and Distributed Storage</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                CockroachDB automatically divides indexed key ranges into distributed segments (ranges) and places them across nodes. Schema
                uses match_id (UUID) as primary key with foreign keys in player_stats, rounds, kills tables. Secondary indexes on player_id,
                round_number, and composite (match_id, round_number) enable efficient range-based queries.
              </p>
              <div className="font-mono text-xs text-neutral-600">Automatic range partitioning → No manual sharding required</div>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">2. Replication and Fault Tolerance</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Each range replicated across three nodes using Raft protocol for leader election and commit writes. Parser continues
                submitting transactions as long as Raft leader is available. Kafka's persistent log ensures upload messages survive parser
                failures—if worker restarts mid-processing, message is re-delivered without loss.
              </p>
              <div className="font-mono text-xs text-neutral-600">Raft consensus + Kafka retry semantics = zero data loss</div>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">3. Scalability and Performance Handling</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                All services containerized in Docker: Upload API, Parser, Kafka, 3× CockroachDB nodes, Prometheus, Grafana. Each scales
                independently—additional parser containers can be launched to increase throughput, all listening to same Kafka topic.
                CockroachDB redistributes ranges when new nodes added, increasing storage capacity and query throughput.
              </p>
              <div className="font-mono text-xs text-neutral-600">Horizontal scaling via containerization + range redistribution</div>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">4. Consistency and Transaction Processing</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Serializable isolation level ensures match insertion, round rows, kill rows, and player statistics occur within same
                transactional context. DatabaseWriter calls commit() only after batch completes; exceptions trigger rollback and retry.
                Kafka's log structure guarantees ordered message delivery within single topic-partition.
              </p>
              <div className="font-mono text-xs text-neutral-600">Atomic transactions + ordered delivery = complete match records</div>
            </div>

            {/* Feature 5 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">5. Query Processing and Analytical Techniques</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Parser precomputes aggregates (kill counts, death counts, headshot rates, ADR, damage totals, round winners, equipment
                value) during ingestion, written directly to player_stats and rounds tables. Grafana issues SQL queries with filters on
                indexed fields (player_id, round_number, map_name, timestamps), avoiding full table scans even with millions of rows.
              </p>
              <div className="font-mono text-xs text-neutral-600">Precomputed stats + indexed queries = low-latency analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Evaluation and Results</h2>
          <p className="mb-12 text-lg text-neutral-400">Evaluated during live session with continuous demo uploads</p>

          {/* Monitoring Dashboard */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-bold">System Performance Monitoring</h3>
            <div className="overflow-hidden border border-neutral-800">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/projects/cs2-analytics/monitoring-dashboard.png"
                  alt="Grafana Monitoring Dashboard: API Response Time and Upload Throughput"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Figure 4.1: Grafana monitoring dashboard showing API response time, request throughput, upload counts, and ingestion
              stability. System processed 13 uploads with 0 parser failures. Average response time increased from near-zero to 30-55s under
              continuous load.
            </p>
          </div>

          {/* Cluster Status */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-bold">CockroachDB Cluster Health</h3>
            <div className="overflow-hidden border border-neutral-800">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/projects/cs2-analytics/cluster-status.png"
                  alt="CockroachDB Cluster Status: 3/3 Nodes Live, 68/68 Ranges Fully Replicated"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Figure 4.2: CockroachDB administrative console showing 3 live nodes, 68 fully replicated ranges, and 0 under-replicated or
              unavailable ranges—confirming replication guarantees maintained throughout workload.
            </p>
          </div>

          {/* Player Dashboard */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-bold">Player Performance Analytics</h3>
            <div className="overflow-hidden border border-neutral-800">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/projects/cs2-analytics/player-dashboard.png"
                  alt="Player Performance Dashboard: K/D Ratio, Headshot %, Opening Duels"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Figure 4.3: Grafana dashboard displaying player-level statistics including K/D ratio (1.28), headshot percentage (41.8%),
              opening duel win rate (54.8%), clutch win rate (50.0%), and total matches (7). Time-series panels reflect match activity over
              selected period.
            </p>
          </div>

          {/* Player Feedback API */}
          <div className="mb-12">
            <h3 className="mb-4 text-2xl font-bold">Player Feedback API Output</h3>
            <div className="overflow-hidden border border-neutral-800">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/projects/cs2-analytics/feedback-api.png"
                  alt="Player Feedback API: Metric-Level Comparisons with Averages"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Figure 4.4: Player Feedback API returned structured JSON with metric-level comparisons including K/D ratio (1.14 vs avg 1.01),
              ADR (0.0 vs avg 0.0), and headshot percentage (47.81% vs avg 46.32%), confirming service correctly queries and aggregates
              telemetry.
            </p>
          </div>

          {/* Results Table */}
          <div className="overflow-x-auto">
            <table className="w-full border border-neutral-800 font-mono text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950">
                  <th className="p-3 text-left">Metric</th>
                  <th className="p-3 text-left">Observed Value</th>
                  <th className="p-3 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Total Uploads Processed</td>
                  <td className="p-3 text-white">13</td>
                  <td className="p-3 text-neutral-500">All successfully parsed</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">API Response Time (avg)</td>
                  <td className="p-3 text-white">0s → 30-55s</td>
                  <td className="p-3 text-neutral-500">Rising latency during continuous ingestion</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Request Throughput</td>
                  <td className="p-3 text-white">≈0.06 req/s</td>
                  <td className="p-3 text-neutral-500">Manual but steady upload activity</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Parser Failures</td>
                  <td className="p-3 text-white">0</td>
                  <td className="p-3 text-neutral-500">No ingestion interruptions</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Cluster Node Status</td>
                  <td className="p-3 text-white">3/3 live</td>
                  <td className="p-3 text-neutral-500">No restarts or instability</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Range Replication</td>
                  <td className="p-3 text-white">68/68 fully replicated</td>
                  <td className="p-3 text-neutral-500">No under-replicated ranges</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Ingestion Stability</td>
                  <td className="p-3 text-white">Stable throughout</td>
                  <td className="p-3 text-neutral-500">Kafka ensured durable message delivery</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Player Feedback API</td>
                  <td className="p-3 text-white">Structured metrics returned</td>
                  <td className="p-3 text-neutral-500">Correct K/D, ADR, headshot rate values</td>
                </tr>
                <tr>
                  <td className="p-3">Player Dashboard (Grafana)</td>
                  <td className="p-3 text-white">All panels rendered</td>
                  <td className="p-3 text-neutral-500">Displayed match statistics and trends</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Tech Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">CockroachDB</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Distributed SQL database with automatic range partitioning, Raft consensus for replication, and strong consistency. Deployed
                as 3-node cluster in insecure mode on shared Docker bridge network.
              </p>
              <div className="font-mono text-xs text-neutral-600">Database · 3-Node Cluster · Raft Protocol</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Apache Kafka</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Message queue for async processing. Upload API publishes file paths to match_queue topic; parser subscribes and consumes.
                Kafka's persistent log ensures messages survive worker failures.
              </p>
              <div className="font-mono text-xs text-neutral-600">Message Queue · Durable Log · Retry Semantics</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">demoparser2 (LaihoE)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Python library for parsing CS2 demo files at tick level. Extracts player coordinates, view angles, combat events (shots,
                kills, assists, damage), grenade usage, and round transitions.
              </p>
              <div className="font-mono text-xs text-neutral-600">Parser · Tick-Level Telemetry · Python Library</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Flask (Python)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Upload API and Read API both implemented in Flask. Upload API receives multipart/form-data demo files, stores to shared
                volume, publishes to Kafka. Read API queries CockroachDB for match data.
              </p>
              <div className="font-mono text-xs text-neutral-600">REST API · Python · File Upload</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Docker Compose</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Orchestrates entire stack: 3× CockroachDB nodes, Kafka + Zookeeper, Upload API, Parser, Read API, Prometheus, Grafana. All
                communicate on isolated cs2-network bridge network.
              </p>
              <div className="font-mono text-xs text-neutral-600">Containerization · Orchestration · Networking</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Grafana + Prometheus</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Prometheus scrapes service metrics (API latency, parser throughput, Kafka lag, DB performance). Grafana visualizes metrics
                and connects directly to CockroachDB for player analytics dashboards.
              </p>
              <div className="font-mono text-xs text-neutral-600">Monitoring · Visualization · Real-Time Dashboards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Footprint */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">The Data Challenge</h2>
          <p className="mb-8 text-lg text-neutral-400">Why distributed storage is essential for CS2 telemetry</p>

          <div className="mb-12 border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold">Scale of Data Generation</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>30-50 minute match on 64-128 Hz server with 10 active players</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>One record per player per tick → 1.5 to 4.6 million player-state snapshots per game</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Each tick carries: positions, view angles, velocity, weapon state, utility usage, combat events</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Single .dem file: several hundred megabytes → expands substantially when parsed into structured rows</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Ingestion Strategy</h3>
              <p className="text-neutral-400">
                Raw demos stay in internal shared Docker volume, never exposed outside deployment. Parser extracts telemetry and writes to
                normalized CockroachDB schema with precomputed aggregates.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Query Optimization</h3>
              <p className="text-neutral-400">
                Precomputed views (round summaries, heatmap buckets, kill statistics) reduce need to scan millions of base rows. Read API
                and dashboards respond with low latency even under load.
              </p>
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
              <h3 className="mb-3 text-xl font-bold">Distributed SQL Scales for Gaming Telemetry</h3>
              <p className="leading-relaxed text-neutral-400">
                CockroachDB's automatic range partitioning and Raft-based replication eliminated manual sharding while maintaining strong
                consistency. System processed 13 uploads with 3/3 nodes live and 68/68 ranges fully replicated—zero data loss, zero
                under-replicated ranges.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Kafka Decouples Ingestion from Processing</h3>
              <p className="leading-relaxed text-neutral-400">
                Upload API publishes file paths to Kafka topic; parser consumes at its own pace. If parser fails mid-processing, Kafka's
                persistent log ensures message is re-delivered without loss. This separation prevents upstream failures from stalling the
                system.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Precomputed Aggregates Enable Real-Time Analytics</h3>
              <p className="leading-relaxed text-neutral-400">
                Parser calculates kill counts, death counts, headshot rates, ADR, round winners during ingestion—written directly to
                player_stats and rounds tables. Grafana queries indexed fields (player_id, round_number, timestamps) without full table
                scans, keeping latency low even with millions of rows.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Containerization Ensures Modularity and Fault Isolation</h3>
              <p className="leading-relaxed text-neutral-400">
                All services run in isolated Docker containers on shared bridge network. Parser failure never brings down database or API
                services. Each component scales independently—additional parser containers can be launched to increase throughput without
                redeploying entire stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
