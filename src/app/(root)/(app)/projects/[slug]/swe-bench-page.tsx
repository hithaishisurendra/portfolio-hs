import Image from 'next/image'

export default function SWEBenchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">
              Agentic AI · Automated Bug Fixing
            </div>
            <a
              href="https://github.com/hithaishisurendra/Multi-agent-swe-bench"
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
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Multi-Agent SWE-bench System
          </h1>
          <p className="mb-4 text-2xl text-neutral-400">
            Graph-augmented automated bug fixing for real GitHub issues
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            Single-shot LLMs generate syntactically valid patches with correct diff headers, but context lines don't match actual repository state. This system fixes that through tree-sitter dependency graphs and evidence-routed feedback loops.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">174</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Real GitHub Issues</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">12.6%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Localization Rate</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">+340%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">vs. Single-Shot</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">60%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Cost Reduction</div>
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
              Evaluated on SWE-bench-C: 174 real GitHub issues across jqlang/jq (45), redis/redis (89), facebook/zstd (44).
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Phase 1 baseline: 0% resolution across all single-shot models, even with gold-patch metadata in prompts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Localization Blindness</h3>
              </div>
              <p className="text-neutral-400">
                Can't identify bug-containing files without repository access. 0.6-5% accuracy on SWE-bench-C.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Context Hallucination</h3>
              </div>
              <p className="text-neutral-400">
                Generate plausible-looking context lines that don't match base commit → git apply fails.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">No Recovery Path</h3>
              </div>
              <p className="text-neutral-400">
                Terminal failures with no feedback loop to retry or refine approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">
            4 Specialized Agents + Evidence-Routed Feedback
          </p>

          {/* Architecture Diagram */}
          <div className="mb-12 overflow-hidden border border-neutral-800 bg-white">
            <div className="relative h-[500px] w-full md:h-[700px]">
              <Image
                src="/projects/swe-bench/swe architecture.png"
                alt="Multi-Agent SWE-bench-C Architecture Overview"
                fill
                className="object-contain p-8"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>

          <div className="mb-12 font-mono text-sm text-neutral-500">
            <div>Issue + Code Graph (tree-sitter) → Planner → Localizer → Diagnostician → Patcher → Validator</div>
            <div className="mt-2 pl-20">↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↑</div>
            <div className="mt-2 pl-20">└───────────┴────────────┴────────────┘</div>
            <div className="mt-2 pl-20 text-neutral-400">Evidence-Routed Feedback</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Planner</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Extract keywords, classify issue type
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Input: Issue text → Output: Search strategy
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Localizer</h3>
              <p className="mb-2 text-sm text-neutral-400">
                3-pass retrieval (keyword + grep + graph)
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Input: Keywords → Output: Ranked files + snippets
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Diagnostician</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Root cause analysis
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Input: Localized code + tests → Output: Fix plan
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Patcher</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Generate unified diff from real source
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Input: Fix plan + source → Output: git-ready patch
              </div>
            </div>
          </div>

          <div className="mt-8 border-l-4 border-white bg-black p-6">
            <h4 className="mb-3 text-lg font-bold">Key Innovation: Evidence Routing</h4>
            <p className="mb-3 leading-relaxed text-neutral-400">
              Sends failures to the **one agent** that can fix them, not the full pipeline. Max 2 retries each.
            </p>
            <div className="space-y-2 font-mono text-xs text-neutral-500">
              <div>apply_failed → Localizer (wrong file or context)</div>
              <div>compile_failed → Patcher (syntax/type error)</div>
              <div>test_failed → Diagnostician (wrong fix logic)</div>
              <div>low_confidence → Planner (weak retrieval)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tree-Sitter Graph */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Why Tree-Sitter Dependency Graph?</h2>
          <p className="mb-8 text-lg text-neutral-400">
            Issue text rarely mentions exact files. "Segfault in compression" might require compress.c + zstd_internal.h + compress_impl.c—none contain "segfault" in names.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Why Tree-Sitter?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400">Parses C without compilation (critical for broken builds)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400">Captures #include, function calls, struct usage, test mappings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400">Function-level granularity with line ranges</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">Performance</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 bg-neutral-950 p-4">
                  <div className="mb-1 text-sm text-neutral-500">facebook/zstd (44K lines)</div>
                  <div className="font-mono text-2xl font-bold">3.2s</div>
                  <div className="mt-2 text-xs text-neutral-600">1,847 functions · 127 files · 4,521 edges</div>
                </div>
                <div className="border border-neutral-800 bg-neutral-950 p-4">
                  <div className="mb-1 text-sm text-neutral-500">redis (150K lines)</div>
                  <div className="font-mono text-2xl font-bold">8s</div>
                  <div className="mt-2 text-xs text-neutral-600">One-time offline cost · Linear scaling</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Results</h2>
          <p className="mb-12 text-lg text-neutral-400">
            Evaluated on 174 instances across 3 repositories
          </p>

          <div className="mb-12 space-y-8">
            {/* Localization */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Localization: 22/174 (12.6%)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-neutral-800 font-mono text-sm">
                  <thead>
                    <tr className="border-b border-neutral-800 bg-neutral-950">
                      <th className="p-3 text-left">System</th>
                      <th className="p-3 text-right">Rate</th>
                      <th className="p-3 text-center">Metadata?</th>
                      <th className="p-3 text-right">vs. Baseline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-500">V1: Qwen3 Blind</td>
                      <td className="p-3 text-right">2.9%</td>
                      <td className="p-3 text-center text-neutral-600">❌</td>
                      <td className="p-3 text-right">—</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-500">V2: Qwen3 Enhanced</td>
                      <td className="p-3 text-right">9.8%</td>
                      <td className="p-3 text-center">✓</td>
                      <td className="p-3 text-right">—</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-500">V3: GPT-4.1-mini</td>
                      <td className="p-3 text-right">0.6%</td>
                      <td className="p-3 text-center text-neutral-600">❌</td>
                      <td className="p-3 text-right">—</td>
                    </tr>
                    <tr className="bg-white text-black">
                      <td className="p-3 font-bold">SWE-bench-AGENT</td>
                      <td className="p-3 text-right font-bold">12.6%</td>
                      <td className="p-3 text-center font-bold">❌</td>
                      <td className="p-3 text-right font-bold">+340%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Beat even the metadata-augmented baseline (22 vs. 17) through graph-based retrieval
              </p>
            </div>

            {/* Per-Repository */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Per-Repository Breakdown</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-3 font-mono text-2xl font-bold">jq</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Localized</span>
                      <span className="font-mono">15/45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Compiled</span>
                      <span className="font-mono text-white">9/45</span>
                    </div>
                    <div className="mt-3 text-xs text-neutral-600">Higher than all baselines</div>
                  </div>
                </div>

                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-3 font-mono text-2xl font-bold">redis</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Applied</span>
                      <span className="font-mono text-white">1/89</span>
                    </div>
                    <div className="mt-3 text-xs text-neutral-600">Only system to apply redis patch</div>
                  </div>
                </div>

                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-3 font-mono text-2xl font-bold">zstd</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Localized</span>
                      <span className="font-mono">3/44</span>
                    </div>
                    <div className="mt-3 text-xs text-neutral-600">Correct file, hunk context mismatch</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-neutral-700 bg-neutral-950 p-6">
            <p className="text-neutral-400">
              <span className="font-semibold text-white">0% Resolution Across All Systems:</span> Every system (single-shot and agentic) achieved 0% resolution. The apply-to-resolve gap is SWE-bench-C's central unsolved challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Tech Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">tree-sitter</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Parser generator for building dependency graphs. Parses C without compilation—critical for broken builds.
              </p>
              <div className="font-mono text-xs text-neutral-600">Graph Construction · Offline · 3-8s per repo</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Qwen3-30B</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Primary model for Planner, Localizer, Diagnostician, and Patcher agents. Instruction-tuned for code.
              </p>
              <div className="font-mono text-xs text-neutral-600">LLM · Voyager API · Multi-Agent Backbone</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">GPT-4.1-mini</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Baseline comparison. Achieved 0.6% localization without tree-sitter graphs.
              </p>
              <div className="font-mono text-xs text-neutral-600">Baseline · Single-Shot · 0.6% localization</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Git + Make + Test</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Validator agent uses git apply → make → test pipeline for verification. Typed failure routing.
              </p>
              <div className="font-mono text-xs text-neutral-600">Validation · Evidence Routing · Max 2 retries</div>
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
              <h3 className="mb-3 text-xl font-bold">Localization is Solvable</h3>
              <p className="leading-relaxed text-neutral-400">
                12.6% vs. 0.6-2.9%: Tree-sitter dependency graphs + 3-pass ranking (keyword + grep + graph neighborhood) beats single-shot prompting by +340%. Graph-augmented retrieval > prompt engineering for file localization.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Evidence Routing Cuts Costs</h3>
              <p className="leading-relaxed text-neutral-400">
                60% token reduction per retry. Routes failures to specific agents (apply → Localizer, compile → Patcher, test → Diagnostician) instead of full pipeline re-runs. Max 2 retries per slot prevents infinite loops.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Hunk Context Matching is the Wall</h3>
              <p className="leading-relaxed text-neutral-400">
                60% apply failures even with real source access. Byte-for-byte hunk context generation remains hard—trailing whitespace and line endings cause git apply to fail. The apply-to-resolve gap is SWE-bench-C's frontier challenge.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">0% Resolution ≠ Failure</h3>
              <p className="leading-relaxed text-neutral-400">
                SWE-bench-C measures repository-level reasoning, not code generation. Progressive metrics show localization bottleneck solved (+340%), partial compilation progress (+80%), but resolution frontier remains unsolved for all systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
