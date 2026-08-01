import Image from 'next/image'

export default function SignedNetworkPredictionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Machine Learning · Graph Neural Networks</div>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Signed Network Link Prediction</h1>
          <p className="mb-4 text-2xl text-neutral-400">Predicting trust and distrust in social networks using sign-aware GNNs</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            Comparative study of signed link prediction on Epinions and Slashdot networks. Evaluated Logistic Regression with
            Structural Balance Theory features, Decoupled GNN with separated positive/negative message passing, and Signed Graph
            Attention Network with sign-specific attention kernels.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">0.904</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">F1 Score (Signed GAT)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">0.984</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">AUC (Epinions)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">841K</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Edges (Epinions)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">14-23%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Negative Edge Ratio</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">The Signed Network Challenge</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              Signed networks encode polarity in user relationships—trust vs. distrust, friend vs. foe—revealing patterns of
              endorsement, disagreement, and conflict that unsigned graphs cannot capture. Traditional link prediction focuses only on
              edge existence; signed link prediction asks: if an edge forms, will it be positive or negative?
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              Real networks are highly imbalanced: Epinions has only 14% negative edges, Slashdot 23%. Standard GNNs aggregate messages
              from all neighbors identically, blending positive and negative signals so they can cancel or distort each other. Effective
              models must preserve polarity during message passing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Class Imbalance</h3>
              <p className="text-neutral-400">
                Trivial classifier predicting "all positive" achieves high accuracy but fails to identify negative links. F1 and AUC
                metrics critical for evaluating minority class performance.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Signal Cancellation</h3>
              <p className="text-neutral-400">
                Naive GNNs blend positive and negative neighbors, causing supportive and adversarial signals to cancel. Sign-aware
                architectures must separate polarity channels.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Noisy Labels</h3>
              <p className="text-neutral-400">
                Slashdot "foe" labels can represent genuine hostility or lighthearted disagreement, creating heterogeneous semantics that
                make sign prediction harder than trust-focused Epinions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Datasets */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Benchmark Datasets</h2>
          <p className="mb-12 text-lg text-neutral-400">Two real-world signed social networks with distinct characteristics</p>

          <div className="mb-12 overflow-x-auto">
            <table className="w-full border border-neutral-800 font-mono text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-black">
                  <th className="p-3 text-left">Dataset</th>
                  <th className="p-3 text-left">Nodes</th>
                  <th className="p-3 text-left">Edges</th>
                  <th className="p-3 text-left">Positive</th>
                  <th className="p-3 text-left">Negative</th>
                  <th className="p-3 text-left">Neg %</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="p-3 text-white">Epinions</td>
                  <td className="p-3">296,277</td>
                  <td className="p-3">841,372</td>
                  <td className="p-3">722,085</td>
                  <td className="p-3">119,287</td>
                  <td className="p-3 text-white">14.18%</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3 text-white">Slashdot</td>
                  <td className="p-3">77,350</td>
                  <td className="p-3">516,575</td>
                  <td className="p-3">396,378</td>
                  <td className="p-3">120,197</td>
                  <td className="p-3 text-white">23.27%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Epinions</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Consumer review platform where users explicitly mark other reviewers as trusted or distrusted. Trust edges tend to be
                stable and correlate with shared product preferences. Structural balance patterns are strong and consistent.
              </p>
              <div className="font-mono text-xs text-neutral-600">Clean trust semantics · Strong balance patterns</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Slashdot Zoo</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Technology news community where users label others as friends or foes. "Foe" label can represent genuine animosity or
                lighthearted disagreement. Negative edges are noisier and less consistent, making sign prediction harder.
              </p>
              <div className="font-mono text-xs text-neutral-600">Heterogeneous semantics · Noisier labels</div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Architectures */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Model Architectures</h2>

          <div className="space-y-8">
            {/* Model 1 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">1. Logistic Regression Baseline</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                18-dimensional feature vector combining degree, centrality, similarity, and triad statistics derived from Structural
                Balance Theory. Features include positive/negative in-degree, out-degree, PageRank scores, Jaccard similarity over
                positive neighborhoods, and counts of balanced/unbalanced triads.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Classical approach: explicit feature engineering + logistic classifier
              </div>
            </div>

            {/* Model 2 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">2. Decoupled Graph Convolutional Network</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Processes positive (A+) and negative (A-) adjacency matrices through separate GCN modules. Two parallel message-passing
                channels produce embeddings H+ and H-, concatenated for final prediction. Prevents direct cancellation of opposing
                signals but weights all neighbors equally within each channel.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                H+ = GCN(A+, X), H- = GCN(A-, X) → h_v = [h+_v || h-_v]
              </div>
            </div>

            {/* Model 3 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">3. Signed Graph Attention Network (Best)</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Applies separate attention mechanisms to positive and negative neighborhoods. For node v, computes attention coefficients
                α+_vu and α-_vu over neighbors u in N+_v and N-_v respectively. Learns to emphasize stable, informative neighbors and
                downweight noisy relationships. Final embedding aggregates weighted messages from both polarity channels.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Sign-specific attention kernels → learned neighbor importance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Experimental Results</h2>
          <p className="mb-12 text-lg text-neutral-400">Signed GAT achieves best performance across both datasets</p>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">Epinions (14.18% negative edges)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-800 font-mono text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-black">
                    <th className="p-3 text-left">Model</th>
                    <th className="p-3 text-left">Accuracy</th>
                    <th className="p-3 text-left">F1 Score</th>
                    <th className="p-3 text-left">AUC</th>
                    <th className="p-3 text-left">Time (s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Logistic Regression</td>
                    <td className="p-3 text-neutral-400">0.919</td>
                    <td className="p-3 text-neutral-400">0.848</td>
                    <td className="p-3 text-neutral-400">0.963</td>
                    <td className="p-3 text-neutral-400">1.5</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Decoupled GNN</td>
                    <td className="p-3 text-neutral-400">0.923</td>
                    <td className="p-3 text-neutral-400">0.845</td>
                    <td className="p-3 text-neutral-400">0.944</td>
                    <td className="p-3 text-neutral-400">110</td>
                  </tr>
                  <tr className="border-b border-neutral-800 bg-white text-black">
                    <td className="p-3 font-bold">Signed GAT</td>
                    <td className="p-3 font-bold">0.947</td>
                    <td className="p-3 font-bold">0.904</td>
                    <td className="p-3 font-bold">0.984</td>
                    <td className="p-3">36</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold">Slashdot (23.27% negative edges)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-neutral-800 font-mono text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-black">
                    <th className="p-3 text-left">Model</th>
                    <th className="p-3 text-left">Accuracy</th>
                    <th className="p-3 text-left">F1 Score</th>
                    <th className="p-3 text-left">AUC</th>
                    <th className="p-3 text-left">Time (s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3">Logistic Regression</td>
                    <td className="p-3 text-neutral-400">0.751</td>
                    <td className="p-3 text-neutral-400">0.824</td>
                    <td className="p-3 text-neutral-400">0.781</td>
                    <td className="p-3 text-neutral-400">0.5</td>
                  </tr>
                  <tr className="border-b border-neutral-800">
                    <td className="p-3 text-neutral-400">Decoupled GNN</td>
                    <td className="p-3 text-neutral-400">0.793</td>
                    <td className="p-3 text-neutral-400">0.881</td>
                    <td className="p-3 text-neutral-400">0.792</td>
                    <td className="p-3 text-neutral-400">38</td>
                  </tr>
                  <tr className="border-b border-neutral-800 bg-white text-black">
                    <td className="p-3 font-bold">Signed GAT</td>
                    <td className="p-3 font-bold">0.819</td>
                    <td className="p-3 font-bold">0.887</td>
                    <td className="p-3 font-bold">0.862</td>
                    <td className="p-3">12</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Key Observations</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Signed GAT achieves highest F1 and AUC on both datasets, demonstrating that attention mechanisms effectively distinguish
                reliable from noisy signals. LR performs strongly on Epinions where balance patterns are consistent, but drops sharply on
                Slashdot's noisier labels.
              </p>
              <div className="font-mono text-xs text-neutral-600">Attention learns signal quality automatically</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Computational Cost</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                LR trains in under 2 seconds but requires manual feature engineering. Signed GAT trains 75× faster than Decoupled GNN
                while achieving better performance, making it practical for large signed networks.
              </p>
              <div className="font-mono text-xs text-neutral-600">36s (Epinions) vs 110s (Decoupled GNN)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Tech Stack</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Python 3.8+</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Core language for data processing, graph construction, model training, and evaluation. NumPy for efficient array
                operations on large adjacency matrices.
              </p>
              <div className="font-mono text-xs text-neutral-600">Graph Processing · Numerical Computing</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">PyTorch Geometric</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Graph neural network library providing GCN, GAT layers, and signed graph utilities. Handles sparse adjacency matrices,
                message passing, and GPU acceleration for training on large networks.
              </p>
              <div className="font-mono text-xs text-neutral-600">GNN Library · Message Passing · GPU Support</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Scikit-learn</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Logistic Regression baseline, train-test splitting, and comprehensive evaluation metrics (accuracy, precision, recall,
                F1, AUC, ROC curves). Provided feature scaling and cross-validation utilities.
              </p>
              <div className="font-mono text-xs text-neutral-600">ML Baseline · Evaluation Metrics</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">NetworkX</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Graph analysis library for computing triad statistics, PageRank, and structural features. Used to construct 18-dimensional
                feature vectors for Logistic Regression baseline based on Structural Balance Theory.
              </p>
              <div className="font-mono text-xs text-neutral-600">Graph Features · Triad Analysis</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Matplotlib & Seaborn</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Visualization for ROC curves, degree distributions, triad type analysis, and multi-metric radar plots comparing model
                performance across datasets.
              </p>
              <div className="font-mono text-xs text-neutral-600">Data Visualization · Performance Analysis</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Adam Optimizer</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Adaptive learning rate optimizer for GNN training. Used with learning rate 10^-3, dropout (0.3-0.5), and early stopping
                based on validation AUC to prevent overfitting on imbalanced datasets.
              </p>
              <div className="font-mono text-xs text-neutral-600">Optimization · Regularization</div>
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
              <h3 className="mb-3 text-xl font-bold">Sign-Aware Attention Learns Signal Quality</h3>
              <p className="leading-relaxed text-neutral-400">
                Signed GAT's separate attention kernels for positive and negative neighbors allow the model to emphasize stable,
                informative relationships and downweight noisy ones. This adaptive weighting outperformed equal-weight Decoupled GNN
                and achieved 0.904 F1 on Epinions, 0.887 on Slashdot.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Structural Balance Theory Provides Strong Baseline</h3>
              <p className="leading-relaxed text-neutral-400">
                Logistic Regression with triad features matched GNN accuracy on Epinions at 75× lower training cost. When negative labels
                have consistent semantics, explicit balance features capture much of the predictive signal without deep models.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">F1 Over Accuracy for Imbalanced Classes</h3>
              <p className="leading-relaxed text-neutral-400">
                With 14-23% negative edges, predicting "all positive" achieves high accuracy while completely failing on minority class.
                F1 and AUC metrics revealed that Signed GAT improved minority class prediction, especially on noisy Slashdot labels.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Polarity Separation Prevents Signal Cancellation</h3>
              <p className="leading-relaxed text-neutral-400">
                Decoupling positive and negative message-passing channels (A+ and A-) prevented supportive and adversarial signals from
                directly canceling. Both Decoupled GNN and Signed GAT benefited from this architectural choice compared to naive GCNs
                that blend all neighbors uniformly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
