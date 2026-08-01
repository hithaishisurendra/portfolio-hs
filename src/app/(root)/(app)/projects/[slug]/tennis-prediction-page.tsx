export default function TennisPredictionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Machine Learning · Sports Analytics</div>
            <a
              href="https://colab.research.google.com/drive/1h_XkO8mg3P6OfLnshjhB962S8RAbz9Fi?authuser=1"
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
              View Colab Notebook
            </a>
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Tennis Match Outcome Prediction</h1>
          <p className="mb-4 text-2xl text-neutral-400">
            Binary classification of ATP match outcomes using differential feature engineering
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            End-to-end ML pipeline built on 5 years of ATP match data covering 11,000+ instances. By transforming absolute winner/loser
            statistics into relative player-vs-opponent differentials, the dataset became linearly separable, enabling Logistic Regression
            to achieve 95.3% accuracy and 0.99 AUC.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">95.3%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Peak Accuracy (LR)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">0.99</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">AUC Score</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">23K</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Training Instances</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">5 Years</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">ATP Data (2020-2024)</div>
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
              Tennis match outcome prediction is inherently challenging because raw winner and loser statistics exhibit high correlation but
              provide limited predictive signal. Traditional approaches that treat winner_ace and loser_ace as independent features fail to
              capture the relative performance gap that actually determines match outcomes.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              The dataset consists of ATP matches from 2020-2024 with 11,515 instances and 49 features including player rankings, ages,
              heights, serve statistics, break points, and match context. The central insight: performance is relative, not absolute.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">High Feature Correlation</h3>
              <p className="text-neutral-400">
                Winner and loser stats showed 0.7+ correlation across serve metrics, ages, and heights—indicating that absolute values alone
                don't distinguish outcomes effectively.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Missing Contextual Signal</h3>
              <p className="text-neutral-400">
                A 30-year-old facing a 19-year-old opponent is fundamentally different from a 30-year-old facing a 32-year-old, yet raw age
                features don't encode this comparative dynamic.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Class Balance</h3>
              <p className="text-neutral-400">
                Original format had one winner and one loser per match. Transformation doubled the dataset by creating player/opponent
                pairs, maintaining 50-50 class balance naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Transformation */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Dataset Transformation Strategy</h2>
          <p className="mb-12 text-lg text-neutral-400">Converting winner/loser format to player/opponent differential features</p>

          <div className="mb-12 border border-neutral-800 bg-black p-8">
            <h3 className="mb-4 text-2xl font-bold">Original Format Problem</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Each match stored as single row: winner_age, winner_rank, winner_ace vs loser_age, loser_rank, loser_ace</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Target variable implicitly encoded—winner features always correlate with win=1</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>Models couldn't learn what makes a player win, only what distinguishes winners from losers in aggregate</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Transformation Process</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                For each match, created two rows: one where Player A faces Opponent B (win=1 or 0), and one where Player B faces Opponent A
                (opposite label). All features renamed to player_* and opponent_* to reflect comparative nature.
              </p>
              <div className="font-mono text-xs text-neutral-600">11,515 matches → 23,030 player-opponent instances</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Resulting Dataset Properties</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Perfectly balanced classes (50% win, 50% loss)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Feature symmetry: player and opponent stats mirrored</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Ready for differential feature engineering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Engineering */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Feature Engineering Pipeline</h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">1. Differential Features</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Computed player_stat - opponent_stat for all key metrics: rank_diff, ace_diff, df_diff, 1stWon_diff, 2ndWon_diff,
                bpSaved_diff, age_diff. These relative comparisons encode performance gaps directly—positive values favor the player,
                negative favor the opponent.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Example: rank_diff = 10 - 2 = 8 indicates player is ranked 8 positions lower (worse) than opponent
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">2. Aggregate Match-Level Features</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Created total_serve_points, total_aces, total_double_faults, total_1stWon, total_2ndWon to capture overall match quality.
                High total serve points indicate competitive, extended rallies; high total aces suggest aggressive serve-dominant play.
              </p>
              <div className="font-mono text-xs text-neutral-600">Match context features reflecting competitiveness</div>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">3. Break Point Statistics</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Break points saved and faced are critical momentum indicators. Calculated total_bpSaved, total_bpFaced, and differentials.
                High bpSaved_diff shows player's resilience under pressure compared to opponent.
              </p>
              <div className="font-mono text-xs text-neutral-600">Pressure performance metrics</div>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">4. Standardization</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Applied StandardScaler to all numerical features ensuring zero mean and unit variance. Critical for Logistic Regression
                convergence and fair feature weighting. Prevents features with large ranges (like rank values) from dominating smaller-scale
                features (like age differences).
              </p>
              <div className="font-mono text-xs text-neutral-600">Standardized feature space for linear separability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Model Comparison</h2>
          <p className="mb-12 text-lg text-neutral-400">Logistic Regression outperformed tree-based and kernel methods</p>

          <div className="mb-12 overflow-x-auto">
            <table className="w-full border border-neutral-800 font-mono text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-black">
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Precision</th>
                  <th className="p-3 text-left">Recall</th>
                  <th className="p-3 text-left">F1 Score</th>
                  <th className="p-3 text-left">AUC</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800 bg-white text-black">
                  <td className="p-3 font-bold">Logistic Regression</td>
                  <td className="p-3 font-bold">95.3%</td>
                  <td className="p-3 font-bold">96.0%</td>
                  <td className="p-3 font-bold">95.0%</td>
                  <td className="p-3 font-bold">95.5%</td>
                  <td className="p-3 font-bold">0.990</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">Random Forest</td>
                  <td className="p-3 text-neutral-400">93.0%</td>
                  <td className="p-3 text-neutral-400">93.0%</td>
                  <td className="p-3 text-neutral-400">93.0%</td>
                  <td className="p-3 text-neutral-400">93.0%</td>
                  <td className="p-3 text-neutral-400">0.982</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">XGBoost</td>
                  <td className="p-3 text-neutral-400">93.5%</td>
                  <td className="p-3 text-neutral-400">93.8%</td>
                  <td className="p-3 text-neutral-400">93.2%</td>
                  <td className="p-3 text-neutral-400">93.5%</td>
                  <td className="p-3 text-neutral-400">0.985</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">SVM</td>
                  <td className="p-3 text-neutral-400">91.8%</td>
                  <td className="p-3 text-neutral-400">92.1%</td>
                  <td className="p-3 text-neutral-400">91.5%</td>
                  <td className="p-3 text-neutral-400">91.8%</td>
                  <td className="p-3 text-neutral-400">0.975</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Why Logistic Regression Won</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Differential feature engineering created a linearly separable decision boundary. Logistic Regression directly models P(win |
                features) through a linear combination of differential stats, perfectly suited for this transformed feature space.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Linear separability + proper feature engineering = optimal performance
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Cross-Validation Results</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                5-fold CV accuracy: 95.44% (Logistic Regression), 92.76% (Random Forest). Logistic Regression showed lower variance across
                folds, indicating better generalization and stability—no overfitting despite high accuracy.
              </p>
              <div className="font-mono text-xs text-neutral-600">Consistent performance across all validation splits</div>
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
                Core language for data processing, EDA, and model training. NumPy and Pandas enabled efficient vectorized operations on 23K
                instances with 45+ features.
              </p>
              <div className="font-mono text-xs text-neutral-600">Data Processing · Numerical Computing</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Pandas</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                DataFrame operations for data transformation, missing value imputation, feature engineering, and train-test splitting.
                Critical for converting winner/loser format to player/opponent format.
              </p>
              <div className="font-mono text-xs text-neutral-600">Data Transformation · Feature Engineering</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Scikit-learn</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Logistic Regression, Random Forest, SVM implementations. Also provided StandardScaler, train_test_split, GridSearchCV, and
                comprehensive evaluation metrics (accuracy, precision, recall, F1, AUC, ROC curves).
              </p>
              <div className="font-mono text-xs text-neutral-600">ML Models · Evaluation · Preprocessing</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">XGBoost</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Gradient boosting library for comparison baseline. While it performed well (93.5% accuracy), it couldn't surpass the
                simplicity and performance of Logistic Regression on this linearly separable dataset.
              </p>
              <div className="font-mono text-xs text-neutral-600">Gradient Boosting · Tree Ensembles</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Seaborn & Matplotlib</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Visualization libraries for EDA: distribution plots, correlation heatmaps, boxplots, violin plots, ROC curves, and feature
                importance analysis. Essential for understanding data structure and model behavior.
              </p>
              <div className="font-mono text-xs text-neutral-600">Data Visualization · EDA</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-lg font-bold">Google Colab</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Cloud-based Jupyter notebook environment providing free GPU/TPU access and easy sharing. Entire pipeline from data loading
                to final model evaluation documented in interactive notebook format.
              </p>
              <div className="font-mono text-xs text-neutral-600">Cloud Notebooks · Reproducibility</div>
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
              <h3 className="mb-3 text-xl font-bold">Feature Engineering Drives Performance</h3>
              <p className="leading-relaxed text-neutral-400">
                Transforming absolute winner/loser statistics into relative player-opponent differentials (rank_diff, ace_diff, 1stWon_diff)
                created a linearly separable feature space. This enabled Logistic Regression to achieve 95.3% accuracy—higher than complex
                tree-based and kernel methods.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Dataset Transformation for Better Signal</h3>
              <p className="leading-relaxed text-neutral-400">
                Converting from winner/loser format to player/opponent format doubled training instances (11K → 23K) while maintaining
                perfect class balance. This structural change allowed models to learn what makes a player win relative to their opponent,
                not just aggregate winner vs loser patterns.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Simpler Models Can Win</h3>
              <p className="leading-relaxed text-neutral-400">
                When the feature space is properly engineered, simple linear models outperform complex ensembles. Logistic Regression beat
                Random Forest (+2.3%), XGBoost (+1.8%), and SVM (+3.5%) while offering better interpretability and 75x faster training.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Context Matters More Than Absolutes</h3>
              <p className="leading-relaxed text-neutral-400">
                Raw statistics like age, rank, and aces showed high correlation but weak predictive power. Differential features encoding
                comparative advantages (player vs opponent) captured the true dynamics of match outcomes. A 30-year-old vs 19-year-old is
                fundamentally different from 30 vs 32, but only differential features encode this.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
