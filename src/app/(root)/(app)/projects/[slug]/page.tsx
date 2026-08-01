import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import AdasPage from './adas-page'
import ArizonaMVDRedesignPage from './arizona-mvd-redesign-page'
import CS2AnalyticsPage from './cs2-analytics-page'
import EvolutionOfF1Page from './evolution-of-f1-page'
import EvaPage from './eva-page'
import ResilientMessagingPage from './resilient-messaging-page'
import SignedNetworkPredictionPage from './signed-network-prediction-page'
import StockMarketPredictionPage from './stock-market-prediction-page'
import SWEBenchPage from './swe-bench-page'
import TennisPredictionPage from './tennis-prediction-page'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'summarization' },
    { slug: 'swe-bench' },
    { slug: 'cs2-analytics' },
    { slug: 'evolution-of-f1' },
    { slug: 'stock-market-prediction' },
    { slug: 'adas' },
    { slug: 'eva' },
    { slug: 'resilient-messaging' },
    { slug: 'tennis-prediction' },
    { slug: 'signed-network-prediction' },
    { slug: 'arizona-mvd-redesign' },
  ]
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projectMeta: Record<string, any> = {
    summarization: {
      title: 'Multi-Agent Financial QA - Projects',
      description:
        'Multi-agent question-answering system for financial documents using RAG, TAPAS, and FLAN-T5. 94% token reduction, $0.000275 per query.',
    },
    'swe-bench': {
      title: 'Multi-Agent SWE-bench System - Projects',
      description:
        'Graph-augmented multi-agent pipeline for automated bug fixing. 12.6% localization rate, +340% vs. single-shot baselines.',
    },
    'cs2-analytics': {
      title: 'Distributed Counter-Strike 2 Analytics Platform - Projects',
      description:
        'Kafka-based ingestion pipeline with replicated CockroachDB cluster for fault-tolerant, scalable CS2 telemetry processing. 3-node cluster, 68/68 ranges replicated, 0 parser failures.',
    },
    'evolution-of-f1': {
      title: 'Evolution of Formula One - Projects',
      description:
        'Interactive scrollytelling data visualization exploring F1 safety trends and pit strategies. Built with D3.js, featuring 8+ custom visualizations and race track animations.',
    },
    'stock-market-prediction': {
      title: 'Stock Market Movement Prediction - Projects',
      description:
        'Binary classification of 60-second price movements using LSTM architectures. Achieved 84% accuracy and 0.833 F1 score on Optiver NASDAQ dataset with 5.2M samples across 200 stocks.',
    },
    adas: {
      title: 'Lane & Traffic Sign Detection for ADAS - Projects',
      description:
        'Deep learning-powered perception for autonomous vehicles. SegNet 94.80% lane detection, YOLO 95.56% traffic sign recognition. Tested in CARLA simulator.',
    },
    eva: {
      title: 'EVA — Campus Assistive Chatbot - Projects',
      description:
        'NLP-powered conversational agent for educational institutions. 89% intent accuracy, 100+ daily queries, deployed at R.V. College of Engineering.',
    },
    'resilient-messaging': {
      title: 'Resilient Messaging System - Projects',
      description:
        'Kafka-backed messaging platform with disaster recovery. MERN stack, 100% message persistence across crashes, asynchronous decoupling.',
    },
    'tennis-prediction': {
      title: 'Tennis Match Outcome Prediction - Projects',
      description:
        'Binary classification of ATP match outcomes using differential feature engineering. Achieved 95.3% accuracy and 0.99 AUC with Logistic Regression on 5 years of match data (11K+ instances).',
    },
    'signed-network-prediction': {
      title: 'Signed Network Link Prediction - Projects',
      description:
        'Signed link prediction on Epinions and Slashdot using Graph Attention Networks. Achieved 0.904 F1 and 0.984 AUC on Epinions with sign-aware attention mechanisms.',
    },
    'arizona-mvd-redesign': {
      title: 'Arizona MVD Usability Redesign - Projects',
      description:
        'A/B usability study (n=12) with Figma prototype. Reduced task completion time by 72%, achieved 100% task success, and increased satisfaction from 2.8 to 6.0 through unified dashboard and document checklists.',
    },
  }

  const meta = projectMeta[params.slug]
  if (!meta) {
    return { title: 'Project Not Found' }
  }

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/projects/${params.slug}`,
    },
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
  }
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  if (params.slug === 'swe-bench') {
    return <SWEBenchPage />
  }

  if (params.slug === 'cs2-analytics') {
    return <CS2AnalyticsPage />
  }

  if (params.slug === 'evolution-of-f1') {
    return <EvolutionOfF1Page />
  }

  if (params.slug === 'stock-market-prediction') {
    return <StockMarketPredictionPage />
  }

  if (params.slug === 'tennis-prediction') {
    return <TennisPredictionPage />
  }

  if (params.slug === 'signed-network-prediction') {
    return <SignedNetworkPredictionPage />
  }

  if (params.slug === 'arizona-mvd-redesign') {
    return <ArizonaMVDRedesignPage />
  }

  if (params.slug === 'adas') {
    return <AdasPage />
  }

  if (params.slug === 'eva') {
    return <EvaPage />
  }

  if (params.slug === 'resilient-messaging') {
    return <ResilientMessagingPage />
  }

  if (params.slug !== 'summarization') {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">NLP & AI · Multi-Agent Systems</div>
            <a
              href="https://github.com/hithaishisurendra/Multi-agent-summarization-pipeline"
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
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Multi-Agent Financial QA</h1>
          <p className="mb-4 text-2xl text-neutral-400">Question-answering system for hybrid table-and-text financial data</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            Users ask questions like "What was the percentage change in revenue from 2018 to 2019?" and the system answers by reasoning over
            both structured tables and unstructured paragraphs using a sequential multi-agent pipeline with RAG.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">16,552</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Questions</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">94%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Token Reduction</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">87%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">RAG Coverage</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">1.7s</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Latency</div>
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
              TAT-QA has 16,552 questions paired with 2,757 financial report contexts. Each context mixes structured tables with
              unstructured paragraphs explaining why numbers changed.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Single large language models fail at this consistently. I identified four critical failure modes:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">1</div>
                <h3 className="text-xl font-bold">Numerical Errors</h3>
              </div>
              <p className="text-neutral-400">
                Multi-step calculations break down. Models hallucinate numbers or lose track of intermediate steps in percentage changes.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">2</div>
                <h3 className="text-xl font-bold">Context Misalignment</h3>
              </div>
              <p className="text-neutral-400">
                Models hyper-focus on tables and miss the "why" in text, or latch onto narrative and ignore numbers. Financial analysis
                needs both.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">3</div>
                <h3 className="text-xl font-bold">Token Limits</h3>
              </div>
              <p className="text-neutral-400">
                47 paragraphs × 150 tokens = 7,050 tokens, plus 500 for tables. Feeding everything causes context overflow and attention
                dilution.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">4</div>
                <h3 className="text-xl font-bold">No Specialization</h3>
              </div>
              <p className="text-neutral-400">
                Arithmetic questions need different reasoning than logical questions, but single models treat them uniformly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Evolution */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Architecture Evolution</h2>

          {/* Pipeline 1 - Failed Approach */}
          <div className="mb-16 border border-neutral-800 bg-black p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded border border-neutral-700 bg-neutral-900 px-3 py-1 font-mono text-sm">Pipeline 1</div>
              <div className="text-sm text-neutral-500">Router-Based Delegation</div>
              <div className="ml-auto text-sm text-neutral-600">❌ FAILED</div>
            </div>

            <p className="mb-6 leading-relaxed text-neutral-400">
              Initial hypothesis: Dynamic router classifies questions as "financial" (arithmetic) or "logical" (comparison) and routes to
              specialized agents. Single-shot CoT improved accuracy (+5.1pp routing, +4.8pp logical reasoning).
            </p>

            <div className="border-l-2 border-neutral-800 bg-neutral-950 p-6">
              <h4 className="mb-3 text-lg font-bold text-white">The Fatal Flaw</h4>
              <p className="mb-3 leading-relaxed text-neutral-400">
                The router <span className="text-white">only passed the question</span> to downstream agents, not the full context. When it
                routed "What was the percentage change in revenue?" to the Financial Agent, that agent received the question but{' '}
                <span className="text-white">not the table</span> with revenue data or the <span className="text-white">paragraph</span>{' '}
                explaining revenue categories.
              </p>
              <p className="font-mono text-sm text-neutral-500">
                Result: Information silos. Agents made decisions with incomplete information.
              </p>
            </div>
          </div>

          {/* Pipeline 2 - Final Solution */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded border border-white bg-white px-3 py-1 font-mono text-sm text-black">Pipeline 2</div>
              <div className="text-sm text-neutral-400">Sequential Multi-Agent with Question-Driven RAG</div>
              <div className="ml-auto text-sm text-white">✓ SOLUTION</div>
            </div>

            <div className="mb-12 overflow-hidden border border-neutral-800 bg-black">
              <div className="relative h-[500px] w-full md:h-[600px]">
                <Image
                  src="/projects/summarization/pipeline2.png"
                  alt="Pipeline 2: Sequential Multi-Agent Architecture"
                  fill
                  className="object-contain p-8"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">The Key Insight</h3>
              <p className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">The user question must flow through every stage of the pipeline</span>, not just arrive at the
                end. The question drives RAG retrieval, guides table extraction, informs context enrichment, and enables persona inference.
              </p>
              <div className="space-y-3 font-mono text-sm text-neutral-500">
                <div>
                  <span className="text-white">USER QUESTION:</span> "What was the percentage change in revenue from 2018 to 2019?"
                </div>
                <div className="pl-4">↓</div>
                <div>
                  <span className="text-neutral-400">RAG LAYER:</span> Question embedding → FAISS search → Top-3 passages (450 tokens, 94%
                  reduction)
                </div>
                <div className="pl-4">↓</div>
                <div>
                  <span className="text-neutral-400">TABLE AGENT (TAPAS):</span> Table + Question → "2018: $1.2M, 2019: $1.5M"
                </div>
                <div className="pl-4">↓</div>
                <div>
                  <span className="text-neutral-400">CONTEXT AGENT (FLAN-T5-XL):</span> Retrieved passages + Question → "Growth driven by
                  defense contracts"
                </div>
                <div className="pl-4">↓</div>
                <div>
                  <span className="text-neutral-400">SELECTRA (FLAN-T5-Small):</span> Question phrasing → "financial analyst"
                </div>
                <div className="pl-4">↓</div>
                <div>
                  <span className="text-neutral-400">ORCHESTRATOR (Gemini 2.5 Flash):</span> All outputs + Question → Persona-adapted answer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Performance</h2>
          <p className="mb-12 text-lg text-neutral-400">Chain-of-Thought Improvements (Pipeline 1 Experiments)</p>

          <div className="mb-12 space-y-8">
            {/* Dynamic Routing */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Dynamic Routing</h3>
                <div className="font-mono text-2xl font-bold">+5.1pp</div>
              </div>
              <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Zero-Shot CoT → Single-Shot CoT</div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="mb-2 font-mono text-sm text-neutral-500">49.6%</div>
                  <div className="h-12 border border-neutral-800 bg-black">
                    <div className="h-full bg-neutral-700" style={{ width: '49.6%' }}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 font-mono text-sm text-neutral-400">54.7%</div>
                  <div className="h-12 border border-neutral-800 bg-black">
                    <div className="h-full bg-white" style={{ width: '54.7%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logical Reasoning */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold">Logical Reasoning</h3>
                <div className="font-mono text-2xl font-bold">+4.8pp</div>
              </div>
              <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Zero-Shot CoT → Single-Shot CoT</div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="mb-2 font-mono text-sm text-neutral-500">69.3%</div>
                  <div className="h-12 border border-neutral-800 bg-black">
                    <div className="h-full bg-neutral-700" style={{ width: '69.3%' }}></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 font-mono text-sm text-neutral-400">74.1%</div>
                  <div className="h-12 border border-neutral-800 bg-black">
                    <div className="h-full bg-white" style={{ width: '74.1%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 border-l-2 border-neutral-700 bg-neutral-950 p-6">
            <p className="text-neutral-400">
              <span className="font-semibold text-white">Pipeline 2 Component F1 Scores:</span> Table Agent 25.3%, Context Agent 29.4%. Low
              F1 reflects exact span extraction difficulty on complex financial data. The real value: transparent CoT traces for debugging
              and 94% token reduction while maintaining 87% context coverage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-black p-6">
              <div className="mb-2 font-mono text-3xl font-bold text-white">94%</div>
              <div className="mb-1 text-sm text-neutral-400">Token Reduction</div>
              <div className="font-mono text-xs text-neutral-600">7,550 → 450 tokens</div>
            </div>
            <div className="border border-neutral-800 bg-black p-6">
              <div className="mb-2 font-mono text-3xl font-bold text-white">87%</div>
              <div className="mb-1 text-sm text-neutral-400">RAG Coverage</div>
              <div className="font-mono text-xs text-neutral-600">Top-3 retrieval accuracy</div>
            </div>
            <div className="border border-neutral-800 bg-black p-6">
              <div className="mb-2 font-mono text-3xl font-bold text-white">1.7s</div>
              <div className="mb-1 text-sm text-neutral-400">End-to-End Latency</div>
              <div className="font-mono text-xs text-neutral-600">RAG → Agents → Orchestrator</div>
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
              <h3 className="mb-3 text-lg font-bold">BGE-large-en-v1.5</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                1024-dim embeddings for semantic retrieval. Trained on financial corpora. Beats BM25 by 12% on benchmarks.
              </p>
              <div className="font-mono text-xs text-neutral-600">Embedding Model · Local · Zero API Cost</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">FAISS IndexFlatL2</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Vector search with L2 distance. Sub-millisecond lookup over 2,757 indexed contexts. SIMD optimizations.
              </p>
              <div className="font-mono text-xs text-neutral-600">Vector Search · Local · ~5ms latency</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">TAPAS</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Pre-trained table QA. Understands SQL operations (SUM, COUNT, FILTER) and cell-level attention.
              </p>
              <div className="font-mono text-xs text-neutral-600">Table Agent · CPU · 300ms · F1 25.3%</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">FLAN-T5-XL (3B)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Instruction-tuned for text condensation. Processes retrieved passages into grounded context.
              </p>
              <div className="font-mono text-xs text-neutral-600">Context Agent · CPU · 800ms · F1 29.4%</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">FLAN-T5-Small (80M)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Lightweight persona classifier. Zero-shot prompting adapts to user types without retraining.
              </p>
              <div className="font-mono text-xs text-neutral-600">Persona Agent · CPU · 50ms</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Gemini 2.5 Flash</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Final orchestration. 1M token context. Synthesizes all agent outputs with single-shot CoT prompting.
              </p>
              <div className="font-mono text-xs text-neutral-600">Orchestrator · API · 500ms · $0.000275/query</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Cost Analysis</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Per-Query Breakdown</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">BGE + FAISS</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">TAPAS (CPU)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">FLAN-T5-XL (CPU)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">FLAN-T5-Small (CPU)</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-500">Gemini 2.5 Flash</span>
                  <span>$0.000275</span>
                </div>
                <div className="flex justify-between pt-2 text-lg font-bold">
                  <span>Total</span>
                  <span>$0.000275</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">Comparison</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">GPT-4 Single-Shot</div>
                  <div className="mb-1 font-mono text-3xl font-bold">$0.044</div>
                  <div className="text-sm text-neutral-500">per query</div>
                </div>
                <div className="border border-white bg-white p-6 text-black">
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-700">Pipeline 2</div>
                  <div className="mb-1 font-mono text-3xl font-bold">$0.000275</div>
                  <div className="text-sm text-neutral-700">160× cheaper</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-neutral-800 bg-neutral-950 p-6">
            <p className="text-neutral-400">
              <span className="font-semibold text-white">Production deployment at 1M queries/month:</span> Pipeline 2: $275/month · GPT-4:
              $44,000/month · <span className="text-white">Savings: 99.4%</span>
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Key Takeaways</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Question-Driven RAG: 94% Token Reduction</h3>
              <p className="leading-relaxed text-neutral-400">
                Instead of 7,550 tokens per document, RAG filters to 450 tokens (top-3 passages) while maintaining 87% coverage of
                gold-standard answer contexts. The user's question drives retrieval—semantic search beats keyword matching.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Context Preservation via Sequential Flow</h3>
              <p className="leading-relaxed text-neutral-400">
                Pipeline 1 failed catastrophically because the router discarded context. Pipeline 2 passes full agent outputs + CoT traces
                forward—no information gets siloed. The orchestrator receives the complete reasoning chain.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Transparent Failures via CoT Traces</h3>
              <p className="leading-relaxed text-neutral-400">
                Low F1 scores (25.3% table, 29.4% context) expose where models struggle—unlike black-box systems. CoT traces show exactly
                which cells TAPAS attended to and what entities FLAN-T5 identified. Debuggable failures.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Cost-Effective Architecture</h3>
              <p className="leading-relaxed text-neutral-400">
                Most agents run on CPU with local inference. Only Gemini orchestration uses API. Total latency: 1.7 seconds. Total cost:
                $0.000275 per query, 160× cheaper than GPT-4 single-shot approach.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
