import Image from 'next/image'

export default function AdasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="border-b border-neutral-800 bg-black py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-500">
              Computer Vision · Autonomous Driving
            </div>
            <a
              href="https://github.com/hithaishisurendra/ML-algorithms-for-ADAS"
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
            Lane & Traffic Sign Detection for ADAS
          </h1>
          <p className="mb-4 text-2xl text-neutral-400">
            Deep learning-powered perception for autonomous vehicles
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-neutral-500">
            Advanced Driver Assistance Systems need real-time perception in dynamic urban environments. This system combines semantic segmentation for lane detection with object detection for traffic sign recognition, tested across diverse weather and lighting conditions in the CARLA simulator.
          </p>

          {/* Key Metrics */}
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">94.80%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Lane Accuracy</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">95.56%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Sign Accuracy</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">1,476</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">Total Images</div>
            </div>
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-2 font-mono text-3xl font-bold">93.33%</div>
              <div className="text-sm uppercase tracking-wide text-neutral-500">mAP (SegNet)</div>
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
              Autonomous vehicles and ADAS require robust real-time perception to navigate safely through complex urban environments. Two critical perception tasks are lane boundary detection (for lane keeping assistance) and traffic sign recognition (for regulatory compliance and driver warnings).
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              These systems must operate reliably across varying environmental conditions: different weather (clear, rainy, foggy), lighting (dawn, noon, dusk, night), and road types (urban, suburban, highway).
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Environmental Variability</h3>
              </div>
              <p className="text-neutral-400">
                Weather conditions (fog, rain) and lighting changes (night, glare) drastically affect visibility and feature extraction.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Real-Time Requirements</h3>
              </div>
              <p className="text-neutral-400">
                Safety-critical applications demand fast inference times. Frames must be processed at 30+ FPS for effective driver assistance.
              </p>
            </div>

            <div className="border border-neutral-800 bg-neutral-950 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-neutral-700 font-mono text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Pixel-Level Precision</h3>
              </div>
              <p className="text-neutral-400">
                Lane detection requires dense pixel-wise segmentation. Bounding boxes are insufficient—we need exact lane boundary delineation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Dual-Model Architecture</h2>
          <p className="mb-12 text-lg text-neutral-400">
            Semantic Segmentation (SegNet) + Object Detection (YOLO)
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Lane Detection Pipeline</h3>
              <div className="space-y-3 font-mono text-xs text-neutral-500">
                <div><span className="text-white">Input:</span> RGB image from camera (1920×1080)</div>
                <div className="pl-4">↓</div>
                <div><span className="text-neutral-400">Encoder (VGG-16):</span> Feature extraction with max-pooling</div>
                <div className="pl-4">↓</div>
                <div><span className="text-neutral-400">Decoder:</span> Upsampling using pooling indices</div>
                <div className="pl-4">↓</div>
                <div><span className="text-white">Output:</span> Pixel-wise lane segmentation mask</div>
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">Traffic Sign Detection Pipeline</h3>
              <div className="space-y-3 font-mono text-xs text-neutral-500">
                <div><span className="text-white">Input:</span> RGB image from camera (1920×1080)</div>
                <div className="pl-4">↓</div>
                <div><span className="text-neutral-400">YOLO Backbone:</span> Darknet feature extraction</div>
                <div className="pl-4">↓</div>
                <div><span className="text-neutral-400">Detection Heads:</span> Grid-based bounding box prediction</div>
                <div className="pl-4">↓</div>
                <div><span className="text-white">Output:</span> Bounding boxes + class labels + confidence</div>
              </div>
            </div>
          </div>

          <div className="mb-12 border-l-4 border-white bg-black p-6">
            <h4 className="mb-3 text-lg font-bold">Key Design Decision: Dual-Model Approach</h4>
            <p className="mb-3 leading-relaxed text-neutral-400">
              Why not use a single multi-task network? <span className="text-white">Task-specific architectures outperform unified models</span> when tasks have fundamentally different output structures. Lane detection needs dense pixel predictions (semantic segmentation), while traffic sign detection needs sparse bounding boxes (object detection).
            </p>
            <div className="space-y-2 font-mono text-xs text-neutral-500">
              <div>SegNet: Encoder-decoder with pooling indices → Memory-efficient upsampling</div>
              <div>YOLO: Single-stage detector with grid cells → Real-time inference (45+ FPS)</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">SegNet Architecture</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Encoder-decoder with symmetric structure
              </p>
              <div className="font-mono text-xs text-neutral-600">
                VGG-16 backbone · Max-pooling indices · Pixel-wise classification
              </div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">YOLO Architecture</h3>
              <p className="mb-2 text-sm text-neutral-400">
                Single-stage detector for real-time inference
              </p>
              <div className="font-mono text-xs text-neutral-600">
                Darknet-19 · Grid-based prediction · Anchor boxes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dataset Creation */}
      <section className="border-b border-neutral-800 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-4xl font-bold">Custom Dataset Creation</h2>
          <p className="mb-8 text-lg text-neutral-400">
            CARLA Simulator: Controlled Testing Across Environmental Variations
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Why CARLA?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400"><span className="text-white">Controlled variability:</span> Programmatically generate diverse scenarios</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400"><span className="text-white">Automatic ground truth:</span> Perfect pixel-level annotations without manual labeling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400"><span className="text-white">Safety:</span> Test edge cases (heavy fog, night, rain) without real-world risk</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-neutral-600">•</span>
                  <span className="text-neutral-400"><span className="text-white">Rapid iteration:</span> Generate 1,476 images across 8 towns faster than real-world collection</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-bold">Dataset Statistics</h3>
              <div className="space-y-4">
                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-3 font-mono text-2xl font-bold">864</div>
                  <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Lane Detection Images</div>
                  <div className="text-xs text-neutral-600">Multiple towns, weather, and lighting conditions</div>
                </div>
                <div className="border border-neutral-800 bg-neutral-950 p-6">
                  <div className="mb-3 font-mono text-2xl font-bold">612</div>
                  <div className="mb-2 text-sm uppercase tracking-wide text-neutral-500">Traffic Sign Images</div>
                  <div className="text-xs text-neutral-600">Diverse sign types across urban scenarios</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <div className="border border-neutral-800 bg-black p-4">
              <div className="mb-2 text-sm text-neutral-500">Weather</div>
              <div className="font-mono text-sm">Clear · Cloudy · Rain · Fog</div>
            </div>
            <div className="border border-neutral-800 bg-black p-4">
              <div className="mb-2 text-sm text-neutral-500">Time of Day</div>
              <div className="font-mono text-sm">Dawn · Noon · Dusk · Night</div>
            </div>
            <div className="border border-neutral-800 bg-black p-4">
              <div className="mb-2 text-sm text-neutral-500">Environment</div>
              <div className="font-mono text-sm">Urban · Suburban · Highway</div>
            </div>
            <div className="border border-neutral-800 bg-black p-4">
              <div className="mb-2 text-sm text-neutral-500">Annotations</div>
              <div className="font-mono text-sm">Pixel-perfect ground truth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="border-b border-neutral-800 bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-4xl font-bold">Why These Models?</h2>

          <div className="space-y-8">
            {/* SegNet Decision */}
            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">SegNet for Lane Detection</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> SegNet over FCN, U-Net, or DeepLab for semantic segmentation.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why SegNet Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Memory efficiency:</span> Stores max-pooling indices instead of full feature maps → 10× less memory than U-Net</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Boundary preservation:</span> Pooling indices enable precise upsampling, critical for thin lane boundaries</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Inference speed:</span> Lighter decoder than U-Net → 94.80% accuracy with faster forward pass</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Not Alternatives?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">U-Net:</span> Skip connections store full feature maps → excessive memory for real-time systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">DeepLab:</span> Atrous convolutions increase computation → slower inference, lower FPS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">FCN:</span> Bilinear upsampling loses spatial detail → blurry lane boundaries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* YOLO Decision */}
            <div className="border border-neutral-800 bg-black p-8">
              <h3 className="mb-4 text-2xl font-bold">YOLO for Traffic Sign Detection</h3>
              <div className="mb-6 text-lg leading-relaxed text-neutral-400">
                <span className="text-white">Decision:</span> YOLO over Faster R-CNN, R-FCN, or SSD for object detection.
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why YOLO Won</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Real-time inference:</span> Single-stage detector → 45+ FPS, meeting ADAS latency requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Grid-based prediction:</span> Unified architecture predicts bounding boxes + classes in one forward pass</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-white">✓</span>
                      <span><span className="font-semibold">Accuracy-speed trade-off:</span> 95.56% accuracy with 93.67% mAP, faster than two-stage detectors</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-bold text-white">Why Not Alternatives?</h4>
                  <ul className="space-y-2 text-sm text-neutral-400">
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">Faster R-CNN:</span> Two-stage (RPN + detector) → 5-10 FPS, too slow for real-time ADAS</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">R-FCN:</span> Position-sensitive score maps → computational overhead, slower than YOLO</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-neutral-600">✗</span>
                      <span><span className="font-semibold">SSD:</span> Comparable speed but lower accuracy on small traffic signs at distance</span>
                    </li>
                  </ul>
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
            Outperforming traditional baselines across both tasks
          </p>

          <div className="mb-12 space-y-8">
            {/* Lane Detection Results */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Lane Detection (SegNet)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-neutral-800 font-mono text-sm">
                  <thead>
                    <tr className="border-b border-neutral-800 bg-neutral-950">
                      <th className="p-3 text-left">Metric</th>
                      <th className="p-3 text-right">Value</th>
                      <th className="p-3 text-left">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">Accuracy</td>
                      <td className="p-3 text-right text-white font-bold">94.80%</td>
                      <td className="p-3 text-neutral-500">Pixel-wise classification</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">mAP</td>
                      <td className="p-3 text-right text-white font-bold">93.33%</td>
                      <td className="p-3 text-neutral-500">Mean average precision</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">F-score</td>
                      <td className="p-3 text-right text-white font-bold">93.42%</td>
                      <td className="p-3 text-neutral-500">Precision-recall balance</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">Error Rate</td>
                      <td className="p-3 text-right">5.20%</td>
                      <td className="p-3 text-neutral-500">False positives + negatives</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Traffic Sign Detection Results */}
            <div>
              <h3 className="mb-6 text-2xl font-bold">Traffic Sign Detection (YOLO)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-neutral-800 font-mono text-sm">
                  <thead>
                    <tr className="border-b border-neutral-800 bg-neutral-950">
                      <th className="p-3 text-left">Metric</th>
                      <th className="p-3 text-right">Value</th>
                      <th className="p-3 text-left">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">Accuracy</td>
                      <td className="p-3 text-right text-white font-bold">95.56%</td>
                      <td className="p-3 text-neutral-500">Detection + classification</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">mAP</td>
                      <td className="p-3 text-right text-white font-bold">93.67%</td>
                      <td className="p-3 text-neutral-500">Mean average precision</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">F-score</td>
                      <td className="p-3 text-right text-white font-bold">93.16%</td>
                      <td className="p-3 text-neutral-500">Precision-recall balance</td>
                    </tr>
                    <tr className="border-b border-neutral-800">
                      <td className="p-3 text-neutral-400">Error Rate</td>
                      <td className="p-3 text-right">4.44%</td>
                      <td className="p-3 text-neutral-500">Missed + false detections</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-neutral-700 bg-neutral-950 p-6">
            <p className="text-neutral-400">
              <span className="font-semibold text-white">Published in IJRITCC 2023:</span> This work demonstrates that task-specific architectures (SegNet for segmentation, YOLO for detection) outperform unified multi-task networks. Both models achieved 93%+ metrics across accuracy, mAP, and F-score while maintaining real-time inference speeds.
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
              <h3 className="mb-3 text-lg font-bold">CARLA Simulator</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Open-source autonomous driving simulator. Generates photorealistic scenes with programmable weather, lighting, and traffic. Provides pixel-perfect ground truth for semantic segmentation.
              </p>
              <div className="font-mono text-xs text-neutral-600">Dataset Generation · 1,476 images · 8 towns</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">SegNet (VGG-16)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Encoder-decoder CNN with max-pooling indices for memory-efficient upsampling. VGG-16 backbone pre-trained on ImageNet, fine-tuned on lane detection.
              </p>
              <div className="font-mono text-xs text-neutral-600">Lane Detection · 94.80% accuracy · Pixel-wise segmentation</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">YOLO (Darknet)</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Single-stage object detector with Darknet-19 backbone. Grid-based bounding box prediction with anchor boxes for multi-scale detection. Real-time inference at 45+ FPS.
              </p>
              <div className="font-mono text-xs text-neutral-600">Traffic Signs · 95.56% accuracy · Real-time detection</div>
            </div>

            <div className="border border-neutral-800 bg-black p-6">
              <h3 className="mb-3 text-lg font-bold">PyTorch / TensorFlow</h3>
              <p className="mb-3 text-sm leading-relaxed text-neutral-400">
                Deep learning frameworks for model training and inference. Adam optimizer with learning rate scheduling. Data augmentation: rotation, brightness, noise.
              </p>
              <div className="font-mono text-xs text-neutral-600">Training · GPU acceleration · Batch size 16</div>
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
              <h3 className="mb-3 text-xl font-bold">Task-Specific Architectures Beat Multi-Task Networks</h3>
              <p className="leading-relaxed text-neutral-400">
                Separating lane detection (SegNet) and traffic sign detection (YOLO) achieved 94.80% and 95.56% accuracy respectively. Multi-task networks sacrifice task-specific optimizations for shared representations, resulting in lower performance on both tasks.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Simulation Enables Systematic Evaluation</h3>
              <p className="leading-relaxed text-neutral-400">
                CARLA's controlled environment allowed testing across 4 weather conditions × 4 times of day × 3 environment types = 48 scenario combinations. Real-world data collection would require months of driving and manual annotation. Simulation provided 1,476 pixel-perfect annotations instantly.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Memory-Efficient Segmentation for Real-Time ADAS</h3>
              <p className="leading-relaxed text-neutral-400">
                SegNet's pooling indices reduce memory footprint by 10× compared to U-Net's skip connections while maintaining 94.80% accuracy. Critical for embedded automotive systems with limited GPU memory. YOLO's single-stage design achieves 45+ FPS, meeting real-time requirements.
              </p>
            </div>

            <div className="border-l-4 border-white bg-neutral-950 p-6">
              <h3 className="mb-3 text-xl font-bold">Robust to Environmental Variations</h3>
              <p className="leading-relaxed text-neutral-400">
                Both models maintained high accuracy across fog, rain, and night conditions. Data augmentation and diverse training scenarios prevented overfitting to ideal conditions. 5.20% error rate for lanes and 4.44% for signs demonstrate production-ready robustness.
              </p>
            </div>
          </div>

          <div className="mt-12 border border-neutral-800 bg-black p-6">
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-white">Publication:</span> "Lane and Traffic Sign Detection for ADAS using Deep Learning" — International Journal on Recent and Innovation Trends in Computing and Communication (IJRITCC), November 2023
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              <span className="font-semibold text-white">Institution:</span> R.V. College of Engineering, Bangalore, India
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
