export default function EvolutionOfF1Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Data Visualization · Scrollytelling</div>
            <div className="flex gap-3">
              <a
                href="https://github.com/hithaishisurendra/hithaishisurendra.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-mono hover:border-neutral-700"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
              <a
                href="https://hithaishisurendra.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-neutral-800 bg-neutral-950 px-4 py-2 text-sm font-mono hover:border-neutral-700"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                View Website
              </a>
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Evolution of Formula One</h1>
          <p className="mb-4 text-2xl text-neutral-400">
            Interactive scrollytelling experience exploring F1 safety trends and pit strategies
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            An interactive data visualization that explores how Formula One has evolved through safety improvements and strategic
            innovations. Built with D3.js and custom animations, the project uses race track-style layouts and scrollytelling to guide users
            through decades of F1 history.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">8+</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Interactive Visualizations</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">D3.js</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Powered Animations</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">70+ Years</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">F1 History Covered</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Custom SVG Graphics</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">The Challenge</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              Formula One has transformed dramatically over its 70+ year history, but understanding these changes requires navigating
              through dense statistics and historical records. Traditional static visualizations fail to capture the narrative arc of safety
              improvements and strategic evolution.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              The goal was to create an engaging, interactive experience that makes F1 data accessible to both enthusiasts and newcomers—
              combining storytelling with data visualization to reveal insights about safety trends, constructor performance, and pit stop
              evolution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Complex Historical Data</h3>
              <p className="text-neutral-400">
                Decades of race results, safety statistics, and performance metrics scattered across multiple sources requiring aggregation
                and normalization.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Engagement Challenge</h3>
              <p className="text-neutral-400">
                Static charts and tables fail to convey the dramatic evolution of F1—needed immersive storytelling to maintain user
                interest.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Technical Constraints</h3>
              <p className="text-neutral-400">
                Building smooth animations and transitions using vanilla JavaScript and D3.js without heavy frameworks or libraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Interactive Features</h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">Race Track Animation</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Custom SVG race track layout that animates as users scroll, guiding them through different sections of the story. Track
                segments transition smoothly between safety statistics, constructor performance, and pit strategy visualizations.
              </p>
              <div className="font-mono text-xs text-neutral-600">SVG Path Morphing · Scroll-Triggered Animations · D3.js Transitions</div>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">Car Anatomy Interactive Tool</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Detailed F1 car diagram with clickable components revealing how safety features evolved over time. Users can explore changes
                in cockpit design, halo protection, crash structures, and more through interactive overlays.
              </p>
              <div className="font-mono text-xs text-neutral-600">Interactive SVG · Tooltip System · Historical Annotations</div>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">Scrollytelling Framework</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Custom scroll-based narrative engine that synchronizes text content with visualization updates. As users scroll, charts
                animate, data points highlight, and contextual information appears to guide the story.
              </p>
              <div className="font-mono text-xs text-neutral-600">Scroll Events · State Management · Progressive Disclosure</div>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">Responsive Design System</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                All visualizations adapt seamlessly from desktop to mobile devices. Race track layouts, charts, and interactive elements
                reflow intelligently while maintaining visual hierarchy and readability.
              </p>
              <div className="font-mono text-xs text-neutral-600">CSS Media Queries · SVG viewBox · Adaptive Layouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Visualizations */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Data Visualizations</h2>
          <p className="mb-12 text-lg text-neutral-400">Eight unique visualization types exploring different aspects of F1 evolution</p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Viz 1 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Constructor Bump Chart</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Animated ranking visualization showing constructor championship standings from 1958 to present. Lines flow and cross as
                teams rise and fall, revealing dominance periods and competitive eras.
              </p>
              <div className="font-mono text-xs text-neutral-600">D3 Line Charts · Rank Transitions · Time Series Animation</div>
            </div>

            {/* Viz 2 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Bar Chart Race</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Dynamic bar chart showing total constructor wins racing through decades. Bars grow and reorder in real-time as historical
                dominance shifts from Ferrari to Mercedes to Red Bull.
              </p>
              <div className="font-mono text-xs text-neutral-600">Animated Bars · Sorting Transitions · Cumulative Metrics</div>
            </div>

            {/* Viz 3 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Driver Bubble Chart</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Interactive scatter plot mapping driver championships vs. race wins. Bubble size represents career longevity, colors
                represent eras, revealing patterns of consistency vs. dominance.
              </p>
              <div className="font-mono text-xs text-neutral-600">D3 Force Layout · Interactive Tooltips · Multi-Dimensional Encoding</div>
            </div>

            {/* Viz 4 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Safety Timeline</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Chronological visualization of major safety regulations and fatal accidents. Data points highlight correlation between
                incidents and subsequent rule changes that transformed the sport.
              </p>
              <div className="font-mono text-xs text-neutral-600">Timeline Layout · Event Markers · Causal Relationships</div>
            </div>

            {/* Viz 5 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Pit Stop Evolution</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Line chart showing dramatic reduction in pit stop times from 60+ seconds in the 1950s to under 2 seconds today. Annotations
                mark key innovations like wheel guns and synchronized teams.
              </p>
              <div className="font-mono text-xs text-neutral-600">Trend Analysis · Annotated Milestones · Duration Encoding</div>
            </div>

            {/* Viz 6 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Track Map Comparison</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                SVG overlays comparing classic circuit layouts vs. modern safety-enhanced versions. Interactive toggles reveal how chicanes,
                gravel traps, and run-off areas have changed track design.
              </p>
              <div className="font-mono text-xs text-neutral-600">Geographic Mapping · Layer Compositing · Before/After Views</div>
            </div>

            {/* Viz 7 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Regulation Impact Heatmap</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Matrix visualization showing correlation between specific regulations (halo, HANS device, cockpit dimensions) and injury
                reduction rates across different accident types.
              </p>
              <div className="font-mono text-xs text-neutral-600">Heatmap Encoding · Statistical Correlation · Color Gradients</div>
            </div>

            {/* Viz 8 */}
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Strategy Sankey Diagram</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Flow visualization showing distribution of race strategies (1-stop, 2-stop, 3-stop) across different eras. Width represents
                frequency, revealing how pit strategy has evolved with tire technology.
              </p>
              <div className="font-mono text-xs text-neutral-600">Sankey Layout · Flow Animation · Temporal Patterns</div>
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
              <h3 className="mb-3 text-lg font-bold">D3.js</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Core visualization library providing data-driven DOM manipulation, smooth transitions, and powerful layout algorithms. Used
                for all chart rendering, animations, and interactive elements.
              </p>
              <div className="font-mono text-xs text-neutral-600">Visualization · Data Binding · Transitions</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Vanilla JavaScript</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Custom scroll event handlers, state management, and animation controllers built without frameworks. Enables precise control
                over timing and performance optimization.
              </p>
              <div className="font-mono text-xs text-neutral-600">Event Handling · State Management · Performance</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">SVG Graphics</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                All visualizations rendered as scalable vector graphics ensuring crisp display at any resolution. Custom path morphing and
                transform animations for smooth transitions.
              </p>
              <div className="font-mono text-xs text-neutral-600">Vector Graphics · Scalability · Custom Paths</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">CSS3 Animations</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Hardware-accelerated CSS transforms and transitions for UI elements. Keyframe animations for race car movements and parallax
                effects synchronized with scroll position.
              </p>
              <div className="font-mono text-xs text-neutral-600">Transforms · Keyframes · GPU Acceleration</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Responsive Grid System</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Custom CSS Grid and Flexbox layouts ensuring content reflows intelligently across devices. Mobile-first approach with
                breakpoint-specific optimizations.
              </p>
              <div className="font-mono text-xs text-neutral-600">CSS Grid · Flexbox · Media Queries</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">GitHub Pages Deployment</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Static site hosted on GitHub Pages with custom domain support. Optimized asset loading and lazy rendering for fast initial
                page load.
              </p>
              <div className="font-mono text-xs text-neutral-600">Static Hosting · CI/CD · Asset Optimization</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Data Sources and Processing</h2>
          <p className="mb-8 text-lg text-neutral-400">Aggregating and normalizing historical F1 data from multiple sources</p>

          <div className="mb-12 border border-neutral-800 bg-neutral-950 p-8">
            <h3 className="mb-4 text-2xl font-bold">Data Collection</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Race results, constructor standings, and driver statistics from Ergast F1 API covering all championship seasons</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Safety incident data compiled from FIA reports, historical records, and racing archives</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Pit stop timing data extracted from official timing sheets and historical documentation</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Circuit layouts and technical regulations from FIA technical documents and track diagrams</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Data Normalization</h3>
              <p className="text-neutral-400">
                Historical data required extensive cleaning to handle team name changes, missing records, and format inconsistencies across
                different eras. Python scripts automated aggregation and validation.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Performance Optimization</h3>
              <p className="text-neutral-400">
                Preprocessed datasets into JSON format optimized for D3.js consumption. Implemented data sampling and aggregation strategies
                to maintain smooth animations without sacrificing accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Key Insights</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Safety Regulations Work</h3>
              <p className="leading-relaxed text-neutral-400">
                Data reveals direct correlation between major safety regulations and injury reduction. Fatal accidents declined from 5+ per
                decade in the 1950s-70s to zero since 1994 following implementation of HANS device, halo, and improved crash structures.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Pit Stop Innovation</h3>
              <p className="leading-relaxed text-neutral-400">
                Pit stop times decreased by 97% over F1 history—from 67 seconds in the 1950s to under 2 seconds today. This dramatic
                improvement reflects synchronized choreography, specialized tools, and decades of incremental optimization.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Constructor Dominance Cycles</h3>
              <p className="leading-relaxed text-neutral-400">
                Bump chart visualization reveals clear dominance periods: Ferrari (1950s, 2000s), McLaren (1980s-90s), Red Bull (2010s),
                Mercedes (2014-2020). Average dominance period is 3-6 years before regulation changes level the field.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Scrollytelling Engagement</h3>
              <p className="leading-relaxed text-neutral-400">
                Interactive scrollytelling format proved highly effective for data communication—users spent an average of 8+ minutes
                exploring the story compared to 30-60 seconds on traditional dashboards. Animation and narrative drove deeper engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
