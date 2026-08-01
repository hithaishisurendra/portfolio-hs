import Image from 'next/image'

export default function ArizonaMVDRedesignPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">UX Research · A/B Testing</div>
            <a
              href="https://www.figma.com/proto/675JOdl9FxHbjZhvn1o4eE/CSE463UsabilityTestPrototype?node-id=3-103&p=f&t=rwzD2nbPZ7LkNriV-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A103"
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
              View Figma Prototype
            </a>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Arizona MVD Usability Redesign</h1>
          <p className="mb-4 text-2xl text-neutral-400">Evidence-based redesign reducing task completion time by 72%</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            A/B usability study (n=12) evaluating the Arizona Motor Vehicle Division website. Original site testing revealed multiple
            overlapping homepages, buried document requirements, and unclear navigation. Redesigned Figma prototype introduced unified
            dashboard with task-oriented cards and upfront document checklists, achieving 100% task success and 3.2-point satisfaction
            increase.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">72%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Time Reduction (Task 1)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">100%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Task Success (Prototype)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">+3.2</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Satisfaction Increase</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">12</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Participants Tested</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Original Website Problems</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              The Arizona MVD website serves thousands of residents daily for critical motor vehicle tasks. Initial analysis revealed
              severe usability issues: multiple conflicting homepages (MVD Home, AZDOT, AZMVDNow), inconsistent menu labels hiding
              important actions, and critical document requirements buried inside PDFs or dense paragraphs.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Participants testing the original site reported high cognitive load, low confidence, and frequent phrases like "I'm
              assuming..." and "I'm not sure." Average task completion times ranged from 123 to 269 seconds, with only 17% achieving
              full success (task complete + documents clear).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Multiple Homepages</h3>
              <p className="text-neutral-400">
                Clicking the logo redirected to a different homepage than MVD Home. Users became disoriented navigating between ADOT,
                MVD, and AZMVDNow pages.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Buried Documents</h3>
              <p className="text-neutral-400">
                Required documents hidden inside long PDFs that users didn't want to download. No scannable checklists at task start
                points—document clarity success rate: 0%.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Ambiguous Labels</h3>
              <p className="text-neutral-400">
                "Services vs Online Services," "Renewal vs Replacement," "Registration vs Title and Registration" created confusion and
                wrong-path navigation.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Cross-Site Redirects</h3>
              <p className="text-neutral-400">
                Broken flow between ADOT and AZMVDNow sites. First-time users couldn't understand why they were redirected or whether
                they were still on the official MVD website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Research Methodology</h2>
          <p className="mb-12 text-lg text-neutral-400">Between-subjects A/B study with think-aloud protocol</p>

          <div className="mb-12 border border-neutral-800 bg-black p-8">
            <h3 className="mb-4 text-2xl font-bold">Study Design</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">n=12 Arizona residents</strong>: 6 tested original website, 6 tested redesigned prototype
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">3 tasks</strong>: Renew driver's license, renew vehicle registration, schedule road test
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">Remote moderated sessions</strong>: 10-20 minutes via video call with screen sharing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">Think-aloud protocol</strong>: Participants verbalized thoughts while navigating
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Metric 1: Task Time</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Start timestamp to end timestamp for each task. Participants stopped at login/payment pages to focus on navigation and
                information finding rather than account creation.
              </p>
              <div className="font-mono text-xs text-neutral-600">Quantitative efficiency measure</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Metric 2: Task Success</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                3-level coding: 0 (fail + documents unclear), 1 (success + documents unclear), 2 (success + documents clear). Captured
                both navigation performance and critical document clarity.
              </p>
              <div className="font-mono text-xs text-neutral-600">Navigation + information clarity</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Metric 3: Usability Survey</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                7-point Likert scale post-session survey covering ease of finding tasks, navigation clarity, document visibility,
                confidence, satisfaction, and future-use intent.
              </p>
              <div className="font-mono text-xs text-neutral-600">Subjective experience ratings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Comparison */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Results: Original vs Prototype</h2>
          <p className="mb-12 text-lg text-neutral-400">Dramatic improvements across all metrics</p>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">Task Completion Time (seconds)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-800 font-mono text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-950">
                    <th className="p-3 text-left">Task</th>
                    <th className="p-3 text-left">Original Mean</th>
                    <th className="p-3 text-left">Original Std</th>
                    <th className="p-3 text-left">Prototype Mean</th>
                    <th className="p-3 text-left">Prototype Std</th>
                    <th className="p-3 text-left">Improvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">License Renewal</td>
                    <td className="p-3 text-neutral-400">268.8s</td>
                    <td className="p-3 text-neutral-400">175.5</td>
                    <td className="p-3 text-white">76.8s</td>
                    <td className="p-3 text-white">39.8</td>
                    <td className="p-3 text-white">-71.4%</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Registration Renewal</td>
                    <td className="p-3 text-neutral-400">123.2s</td>
                    <td className="p-3 text-neutral-400">52.3</td>
                    <td className="p-3 text-white">43.2s</td>
                    <td className="p-3 text-white">30.7</td>
                    <td className="p-3 text-white">-64.9%</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Road Test Requirements</td>
                    <td className="p-3 text-neutral-400">235.8s</td>
                    <td className="p-3 text-neutral-400">68.3</td>
                    <td className="p-3 text-white">170.7s</td>
                    <td className="p-3 text-white">98.9</td>
                    <td className="p-3 text-white">-27.6%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Statistical significance: Task 1 (t(10)=2.67, p{'{<}'}.05), Task 2 (t(10)=3.12, p{'{<}'}.01)
            </p>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">Task Success Distribution</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-neutral-800 bg-neutral-950 p-6">
                <h4 className="mb-3 text-lg font-bold text-white">Original Website</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Perfect Success (2):</span>
                    <span className="text-white">16.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Partial Success (1):</span>
                    <span className="text-white">72.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-400">Failure (0):</span>
                    <span className="text-white">11.1%</span>
                  </div>
                  <p className="pt-2 text-xs text-neutral-600">Document clarity was primary failure mode</p>
                </div>
              </div>

              <div className="border border-neutral-800 bg-white p-6 text-black">
                <h4 className="mb-3 text-lg font-bold">Redesigned Prototype</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Perfect Success (2):</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Partial Success (1):</span>
                    <span className="font-bold">0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-700">Failure (0):</span>
                    <span className="font-bold">0%</span>
                  </div>
                  <p className="pt-2 text-xs text-neutral-700">All participants succeeded with document clarity</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">Usability Survey Results (7-point scale)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-800 font-mono text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-950">
                    <th className="p-3 text-left">Survey Item</th>
                    <th className="p-3 text-left">Original</th>
                    <th className="p-3 text-left">Prototype</th>
                    <th className="p-3 text-left">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Easy to find where to start tasks</td>
                    <td className="p-3 text-neutral-400">3.7</td>
                    <td className="p-3 text-white">5.0</td>
                    <td className="p-3 text-white">+1.3</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Navigation made sense</td>
                    <td className="p-3 text-neutral-400">3.7</td>
                    <td className="p-3 text-white">5.8</td>
                    <td className="p-3 text-white">+2.1</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Labels & wording were clear</td>
                    <td className="p-3 text-neutral-400">3.5</td>
                    <td className="p-3 text-white">5.8</td>
                    <td className="p-3 text-white">+2.3</td>
                  </tr>
                  <tr className="border-b border-neutral-800 bg-white text-black">
                    <td className="p-3 font-bold">Easy to find required documents</td>
                    <td className="p-3 font-bold">1.5</td>
                    <td className="p-3 font-bold">6.3</td>
                    <td className="p-3 font-bold">+4.8</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Confident completing tasks</td>
                    <td className="p-3 text-neutral-400">3.7</td>
                    <td className="p-3 text-white">6.2</td>
                    <td className="p-3 text-white">+2.5</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Overall satisfaction</td>
                    <td className="p-3 text-neutral-400">2.8</td>
                    <td className="p-3 text-white">6.0</td>
                    <td className="p-3 text-white">+3.2</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Would use this site in future</td>
                    <td className="p-3 text-neutral-400">2.2</td>
                    <td className="p-3 text-white">5.8</td>
                    <td className="p-3 text-white">+3.6</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-neutral-500">
              Overall satisfaction: t(10)=6.22, p{'{<}'}.001 — highly significant improvement
            </p>
          </div>
        </div>
      </section>

      {/* Redesign Solutions */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Redesign Solutions</h2>

          <div className="space-y-8">
            {/* Solution 1 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">1. Unified Task-Oriented Homepage</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Replaced multiple conflicting homepages (MVD Home, AZDOT, AZMVDNow) with single dashboard featuring clear "Complete These
                Common Tasks" cards. Each card shows "How it Works" section and required documents checklist—addressing confusion and
                hidden information from original site.
              </p>
              <div className="font-mono text-xs text-neutral-600">Cognitive Load Theory: Reduced working memory demands</div>
            </div>

            {/* Solution 2 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">2. Online Services Hub with Filtering</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Created dedicated Online Services page listing all MVD tasks with Sort (A-Z/Z-A) and Filter by Category controls (Driver,
                Vehicle, Business, Other). Reduces search space and supports recognition over recall—users visually browse labeled tasks
                instead of remembering exact terminology.
              </p>
              <div className="font-mono text-xs text-neutral-600">Nielsen Heuristics: Recognition over recall, visibility of system status</div>
            </div>

            {/* Solution 3 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">3. Prominent Document Checklists</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Added required documents list at top of every task page, visible before any form fields or login prompts. Eliminated
                guessing and PDF-hunting—document clarity success rose from 0% to 100%, and "easy to find documents" rating increased
                from 1.5 to 6.3.
              </p>
              <div className="font-mono text-xs text-neutral-600">Information architecture: Front-load critical information</div>
            </div>

            {/* Solution 4 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">4. Clear Step-by-Step Flows</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Broke tasks into short numbered steps with explicit instructions for online vs offline processes. Separated learner's permit
                (online test) from road test (in-person appointment), resolving recurring confusion from original site's mixed messaging.
              </p>
              <div className="font-mono text-xs text-neutral-600">Cognitive Load Theory: Chunking complex procedures</div>
            </div>

            {/* Solution 5 */}
            <div className="border-l-4 border-white bg-black p-6">
              <h3 className="mb-3 text-2xl font-bold">5. Consistent Global Navigation</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                All prototype screens share consistent top navigation bar with Arizona branding, MVD Locations, FAQ, Contact Us, and orange
                Online Services button. Addresses original inconsistencies between ADOT, MVD, and AZMVDNow pages—participants reported
                navigation "made sense" (5.8 vs 3.7).
              </p>
              <div className="font-mono text-xs text-neutral-600">Jakob's Law: Users expect familiar patterns across platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Research & Design Tools</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Figma</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                High-fidelity interactive prototype with clickable task flows, search functionality, and responsive layouts. Allowed
                realistic testing without backend implementation—participants navigated as if using live website.
              </p>
              <div className="font-mono text-xs text-neutral-600">Prototyping · UI Design · Interactive Testing</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Think-Aloud Protocol</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Participants verbalized thoughts while navigating, revealing confusion points, expectations, and mental models. Captured
                phrases like "I'm assuming..." indicating low confidence and unclear information scent.
              </p>
              <div className="font-mono text-xs text-neutral-600">Qualitative Research · User Insights</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Video Call + Screen Recording</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Remote moderated sessions via Zoom with screen sharing. Recorded navigation paths, timestamps, and verbal feedback for
                later analysis. Enabled recruitment of geographically distributed Arizona residents.
              </p>
              <div className="font-mono text-xs text-neutral-600">Remote Testing · Session Recording</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Usability Metrics Framework</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Quantitative metrics (time-on-task, success coding) combined with qualitative survey (7-point Likert). Mixed-methods
                approach validated findings through triangulation—behavioral and self-reported data aligned.
              </p>
              <div className="font-mono text-xs text-neutral-600">Mixed Methods · Triangulation</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">HCI Theory Application</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Cognitive Load Theory (chunking, reduced working memory), Nielsen's 10 Usability Heuristics (consistency, recognition over
                recall), Fitts' Law (prominent placement), and Jakob's Law (familiar patterns) guided redesign decisions.
              </p>
              <div className="font-mono text-xs text-neutral-600">Theory-Driven Design · Evidence-Based</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Statistical Analysis</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Independent samples t-tests for time comparisons, descriptive statistics for success rates and survey responses. Small
                sample (n=6 per condition) but effect sizes large enough to detect significant improvements.
              </p>
              <div className="font-mono text-xs text-neutral-600">Hypothesis Testing · Effect Sizes</div>
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
              <h3 className="mb-3 text-xl font-bold">Document Visibility Solved Primary Failure Mode</h3>
              <p className="leading-relaxed text-neutral-400">
                Original website's biggest problem was buried requirements—0% document clarity success across all tasks. Redesign's
                upfront checklists achieved 100% success and +4.8 rating increase (1.5 → 6.3), eliminating guessing and PDF-hunting.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Multiple Homepages Created Cognitive Overload</h3>
              <p className="leading-relaxed text-neutral-400">
                Unified dashboard replacing MVD Home, AZDOT, and AZMVDNow reduced navigation confusion. Task 1 time dropped 72%
                (268s → 77s), and participants reported the flow "felt straightforward" vs original's disorienting cross-site redirects.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Consistency Builds Confidence</h3>
              <p className="leading-relaxed text-neutral-400">
                Global navigation bar, standardized task cards, and plain-language labels (no "Renewal vs Replacement" confusion) produced
                consistent success. User confidence rating rose from 3.7 to 6.2—participants knew exactly what to do at each step.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">HCI Theory Validates Design Choices</h3>
              <p className="leading-relaxed text-neutral-400">
                Applying Cognitive Load Theory (chunking), Recognition over Recall (visible options), and Jakob's Law (familiar patterns)
                resulted in statistically significant improvements. Theory-driven design isn't just academic—it measurably improves UX.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
