export default function StockMarketPredictionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">Machine Learning · Time Series</div>
            <a
              href="https://colab.research.google.com/drive/1h_XkO8mg3P6OfLnshjhB962S8RAbz9Fi?usp=sharing"
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
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">Stock Market Movement Prediction</h1>
          <p className="mb-4 text-2xl text-neutral-400">Binary classification of 60-second price movements using LSTM architectures</p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            End-to-end ML pipeline built on the Optiver NASDAQ dataset (5.2M rows, 200 stocks) for binary classification of 60-second price
            movement direction. Combines temporal feature engineering with deep learning to achieve 84% accuracy and 0.833 F1 score.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">84%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Peak Accuracy</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">0.833</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">F1 Score (Bi-LSTM)</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">5.2M</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Training Samples</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">200</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">NASDAQ Stocks</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Statement */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">The Prediction Challenge</h2>

          <div className="mb-12 space-y-4">
            <p className="text-lg leading-relaxed text-neutral-400">
              High-frequency trading requires predicting short-term price movements with high accuracy. The Optiver NASDAQ dataset presents
              a challenging binary classification task: given current market conditions, will the stock price move up or down in the next 60
              seconds?
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              The dataset contains 5.2 million rows spanning 200 NASDAQ stocks with features including bid-ask spreads, order book data, and
              historical price movements. The challenge lies in extracting temporal patterns while handling noisy market data and class
              imbalance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Temporal Dependencies</h3>
              <p className="text-neutral-400">
                Stock prices exhibit strong temporal autocorrelation—recent movements influence future direction. Capturing these sequential
                patterns requires specialized architectures.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">High Dimensionality</h3>
              <p className="text-neutral-400">
                Raw features include bid prices, ask prices, sizes at multiple levels, plus derived metrics. Effective feature engineering
                critical for model performance.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Market Noise</h3>
              <p className="text-neutral-400">
                60-second movements contain significant randomness. Models must distinguish signal from noise to avoid overfitting on
                spurious patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Dataset Overview</h2>
          <p className="mb-12 text-lg text-neutral-400">Optiver NASDAQ dataset spanning 200 stocks with high-frequency order book data</p>

          <div className="mb-12 border border-neutral-800 bg-black p-8">
            <h3 className="mb-4 text-2xl font-bold">Data Characteristics</h3>
            <div className="space-y-3 text-neutral-400">
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">5.2 million rows</strong> of time-stamped market data across 200 NASDAQ-listed stocks
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">Order book snapshots</strong> including bid/ask prices and sizes at multiple depth levels
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">Binary target</strong>: Price movement direction in next 60 seconds (up vs. down)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-neutral-600">•</span>
                <span>
                  <strong className="text-white">High-frequency sampling</strong> capturing intraday volatility and microstructure effects
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Raw Features</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Bid prices and ask prices at multiple levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Bid sizes and ask sizes (order book depth)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Weighted average price (WAP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Time elapsed since market open</span>
                </li>
              </ul>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Target Variable</h3>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Binary classification: price up (1) or down (0)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>60-second prediction horizon</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Calculated from weighted average price changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-600">•</span>
                  <span>Reflects actual tradeable price movements</span>
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
              <h3 className="mb-3 text-2xl font-bold">1. Temporal Features</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Created lagged price features at multiple time steps (t-1, t-2, t-3) to capture momentum and mean reversion patterns. Lagged
                bid-ask spreads and volume metrics provide context about recent market microstructure.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                price_lag_1, price_lag_2, spread_lag_1 → Temporal autocorrelation signals
              </div>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">2. Rolling Statistics</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Computed rolling mean, standard deviation, min, and max over 5, 10, and 20-period windows. Rolling volatility captures
                regime changes while rolling means identify trend direction. Z-score normalization ensures scale invariance across stocks.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                rolling_mean_5, rolling_std_10, rolling_zscore → Trend and volatility indicators
              </div>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">3. Bid-Ask Spread Features</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Bid-ask spread serves as proxy for liquidity and information asymmetry. Calculated absolute spread, relative spread (as
                percentage of mid-price), and spread velocity (rate of spread change). Wider spreads often precede directional moves.
              </p>
              <div className="font-mono text-xs text-neutral-600">
                bid_ask_spread, spread_pct, spread_velocity → Liquidity and information flow
              </div>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">4. Order Book Imbalance</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Computed imbalance between bid and ask volumes at each level of order book. High bid volume relative to ask volume suggests
                upward pressure. Aggregated across multiple depth levels to capture full order book state.
              </p>
              <div className="font-mono text-xs text-neutral-600">volume_imbalance, weighted_imbalance → Supply-demand dynamics</div>
            </div>

            {/* Feature 5 */}
            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-2xl font-bold">5. Rate of Change Features</h3>
              <p className="mb-3 leading-relaxed text-neutral-400">
                Calculated percentage price change over multiple horizons (1-period, 3-period, 5-period). Acceleration features (second
                derivative of price) capture momentum shifts. These features help distinguish trending from mean-reverting regimes.
              </p>
              <div className="font-mono text-xs text-neutral-600">price_change_pct, price_acceleration → Momentum and regime detection</div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Model Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">Comparing LSTM, Bi-LSTM, and XGBoost approaches for time series classification</p>

          <div className="grid gap-8 md:grid-cols-2">
            {/* LSTM */}
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">LSTM Network</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                Unidirectional LSTM with 2 hidden layers (128 units each), dropout regularization (0.3), and sigmoid output. Processes
                sequences forward in time to capture temporal dependencies in order book dynamics.
              </p>
              <div className="mb-3 font-mono text-xs text-neutral-600">Architecture Details</div>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li>Input: (batch_size, sequence_length, n_features)</li>
                <li>LSTM Layer 1: 128 units, return sequences</li>
                <li>Dropout: 0.3</li>
                <li>LSTM Layer 2: 128 units</li>
                <li>Dense: 64 units, ReLU activation</li>
                <li>Output: 1 unit, sigmoid activation</li>
              </ul>
            </div>

            {/* Bi-LSTM */}
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Bi-LSTM Network (Best)</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                Bidirectional LSTM processes sequences both forward and backward, capturing future context in addition to past. Achieved 84%
                accuracy and 0.833 F1 score, outperforming unidirectional LSTM by leveraging full temporal context.
              </p>
              <div className="mb-3 font-mono text-xs text-neutral-600">Architecture Details</div>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li>Input: (batch_size, sequence_length, n_features)</li>
                <li>Bidirectional LSTM Layer 1: 128 units each direction</li>
                <li>Dropout: 0.3</li>
                <li>Bidirectional LSTM Layer 2: 128 units each direction</li>
                <li>Dense: 64 units, ReLU activation</li>
                <li>Output: 1 unit, sigmoid activation</li>
              </ul>
            </div>

            {/* XGBoost */}
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">XGBoost Baseline</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                Gradient boosting baseline trained on flattened feature sequences. Serves as comparison point for deep learning approaches.
                Faster training but lacks ability to model long-range temporal dependencies.
              </p>
              <div className="mb-3 font-mono text-xs text-neutral-600">Hyperparameters</div>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li>n_estimators: 100</li>
                <li>max_depth: 6</li>
                <li>learning_rate: 0.1</li>
                <li>subsample: 0.8</li>
                <li>colsample_bytree: 0.8</li>
                <li>objective: binary:logistic</li>
              </ul>
            </div>

            {/* Training */}
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-xl font-bold">Training Configuration</h3>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                Adam optimizer with learning rate 0.001, binary cross-entropy loss. Trained for 50 epochs with early stopping (patience=5)
                on validation F1 score. Batch size 512 to leverage GPU parallelism.
              </p>
              <div className="mb-3 font-mono text-xs text-neutral-600">Training Details</div>
              <ul className="space-y-1 text-xs text-neutral-400">
                <li>Optimizer: Adam (lr=0.001)</li>
                <li>Loss: Binary Cross-Entropy</li>
                <li>Batch size: 512</li>
                <li>Epochs: 50 (early stopping)</li>
                <li>Train/Val/Test split: 70/15/15</li>
                <li>Metric: F1 Score</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Evaluation Results</h2>
          <p className="mb-12 text-lg text-neutral-400">Bi-LSTM achieves best performance across all metrics</p>

          {/* Results Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full border border-neutral-800 font-mono text-sm">
              <thead>
                <tr className="border-b border-neutral-800 bg-neutral-950">
                  <th className="p-3 text-left">Model</th>
                  <th className="p-3 text-left">Accuracy</th>
                  <th className="p-3 text-left">Precision</th>
                  <th className="p-3 text-left">Recall</th>
                  <th className="p-3 text-left">F1 Score</th>
                  <th className="p-3 text-left">Training Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">XGBoost</td>
                  <td className="p-3 text-neutral-400">0.76</td>
                  <td className="p-3 text-neutral-400">0.74</td>
                  <td className="p-3 text-neutral-400">0.72</td>
                  <td className="p-3 text-neutral-400">0.730</td>
                  <td className="p-3 text-neutral-400">~15 min</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="p-3">LSTM</td>
                  <td className="p-3 text-neutral-400">0.81</td>
                  <td className="p-3 text-neutral-400">0.79</td>
                  <td className="p-3 text-neutral-400">0.78</td>
                  <td className="p-3 text-neutral-400">0.785</td>
                  <td className="p-3 text-neutral-400">~45 min</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-950">
                  <td className="p-3 font-bold text-white">Bi-LSTM</td>
                  <td className="p-3 font-bold text-white">0.84</td>
                  <td className="p-3 font-bold text-white">0.82</td>
                  <td className="p-3 font-bold text-white">0.85</td>
                  <td className="p-3 font-bold text-white">0.833</td>
                  <td className="p-3 text-neutral-400">~60 min</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Best Model: Bi-LSTM</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Bidirectional architecture captures both past and future context within 60-second windows, enabling better modeling of
                mean-reversion and momentum patterns. 84% accuracy indicates strong signal extraction despite noisy market data.
              </p>
              <div className="font-mono text-xs text-neutral-600">+8% accuracy vs. XGBoost, +3% vs. unidirectional LSTM</div>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Balanced Performance</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                0.833 F1 score reflects balanced precision (0.82) and recall (0.85), crucial for trading applications where both false
                positives (bad trades) and false negatives (missed opportunities) carry cost.
              </p>
              <div className="font-mono text-xs text-neutral-600">High recall: captures true price movements</div>
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
              <h3 className="mb-3 text-lg font-bold">Python 3.8+</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Core language for data processing, feature engineering, and model training. NumPy and Pandas for efficient vectorized
                operations on 5.2M row dataset.
              </p>
              <div className="font-mono text-xs text-neutral-600">Data Processing · Numerical Computing</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">TensorFlow / Keras</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Deep learning framework for LSTM and Bi-LSTM implementations. Keras Sequential API for rapid prototyping, TensorFlow backend
                for GPU acceleration during training.
              </p>
              <div className="font-mono text-xs text-neutral-600">Deep Learning · GPU Training</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">XGBoost</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Gradient boosting library for baseline model. Efficient handling of structured data with built-in regularization and
                parallel tree construction.
              </p>
              <div className="font-mono text-xs text-neutral-600">Gradient Boosting · Tree Ensembles</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Scikit-learn</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Model evaluation metrics (accuracy, precision, recall, F1), train-test splitting, and preprocessing utilities like
                StandardScaler for feature normalization.
              </p>
              <div className="font-mono text-xs text-neutral-600">ML Utilities · Evaluation Metrics</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Pandas</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                DataFrame operations for time series manipulation, rolling window calculations, lagged feature generation, and
                train-val-test splitting by time.
              </p>
              <div className="font-mono text-xs text-neutral-600">Time Series · Feature Engineering</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">NumPy</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Array operations for sequence reshaping, normalization, and vectorized calculations. Critical for efficient processing of
                5.2M samples.
              </p>
              <div className="font-mono text-xs text-neutral-600">Numerical Arrays · Vectorization</div>
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
              <h3 className="mb-3 text-xl font-bold">Bidirectional Context Matters</h3>
              <p className="leading-relaxed text-neutral-400">
                Bi-LSTM outperformed unidirectional LSTM by 3% accuracy, demonstrating value of both forward and backward temporal context.
                For 60-second predictions, future information within the sequence window helps distinguish momentum from noise.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Feature Engineering Drives Performance</h3>
              <p className="leading-relaxed text-neutral-400">
                Engineered features (lagged values, rolling statistics, bid-ask spreads, order book imbalance) provided stronger signal than
                raw price data alone. Temporal aggregations at multiple scales (5, 10, 20 periods) captured both short-term momentum and
                longer-term trends.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Deep Learning Beats Traditional ML</h3>
              <p className="leading-relaxed text-neutral-400">
                LSTM-based models achieved 5-8% higher accuracy than XGBoost, validating the importance of modeling temporal dependencies
                explicitly. Sequential architecture naturally captures autocorrelation and regime changes that gradient boosting struggles
                to represent.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Balanced Metrics for Trading</h3>
              <p className="leading-relaxed text-neutral-400">
                0.833 F1 score reflects balanced precision-recall tradeoff essential for trading applications. High recall (0.85) ensures
                most profitable moves are captured, while reasonable precision (0.82) limits false signals that would incur transaction
                costs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
