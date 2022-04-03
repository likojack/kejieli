import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import Constants from '../Constants';
import { IPublicationCardsConfig } from './publication-cards/publication-cards.component';
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateY(-5%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 1, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class PublicationsComponent implements OnInit, OnDestroy, AfterViewInit {
  public paper9: IPublicationCardsConfig = {
    paperId: 'paper9',
    imgUrl: '/kejieli/assets/images/CVPR2022.png',
    title: 'BNV-Fusion: Dense 3D Reconstruction using Bi-level Neural Volume Fusion',
    subtitle: 'Computer Vision and Pattern Recognition (CVPR), 2022',
    authors: [
      { self: true, name: 'Kejie Li *' }, Constants.YANSONG_TANG, Constants.VICTOR, Constants.TORR
    ],
    content: `Dense 3D reconstruction from a stream of depth images is the key to many mixed reality and robotic applications.
    Although methods based on Truncated Signed Distance Function (TSDF) Fusion have advanced the field over the years,
    the TSDF volume representation is confronted with striking a balance between the robustness to noisy measurements and maintaining the level of detail.
    We present Bi-level Neural Volume Fusion (BNV-Fusion), which leverages recent advances in neural implicit representations and neural rendering for dense 3D reconstruction.
    In order to incrementally integrate new depth maps into a global neural implicit representation, we propose a novel bi-level fusion strategy that considers both efficiency and reconstruction quality by design.
    We evaluate the proposed method on multiple datasets quantitatively and qualitatively, demonstrating a significant improvement over existing methods.`,
    learnMoreLink: 'TODO',
    downloadLink: 'TODO'
  };
  public paper8: IPublicationCardsConfig = {
    paperId: 'paper8',
    imgUrl: '/kejieli/assets/images/BMVC2021.png',
    title: 'Ray-ONet: Efficient 3D Reconstruction From A Single RGB Image',
    subtitle: 'British Machine Vision Conference (BMVC), 2021',
    authors: [
      Constants.WENJING_BIAN, Constants.ZIRUI_WANG, { self: true, name: 'Kejie Li *' }, Constants.VICTOR
    ],
    content: `We propose Ray-ONet to reconstruct detailed 3D models from monocular images efficiently.
    By predicting a series of occupancy probabilities along a ray that is back-projected from a pixel in the camera coordinate,
    our method Ray-ONet improves the reconstruction accuracy in comparison with Occupancy Networks (ONet),
    while reducing the network inference complexity to O(N2).
    As a result, Ray-ONet achieves state-of-the-art performance on the ShapeNet benchmark with more than 20× speed-up
    at 128 resolution and maintains a similar memory footprint during inference.`,
    learnMoreLink: 'https://arxiv.org/abs/2107.01899',
    downloadLink: 'https://arxiv.org/pdf/2107.01899.pdf'
  };
  public paper7: IPublicationCardsConfig = {
    paperId: 'paper7',
    imgUrl: '/kejieli/assets/images/ICCV2021.png',
    title: 'ODAM: Object Detection, Association, and Mapping using Posed RGB Video',
    subtitle: 'International Conference on Computer Vision (ICCV) , 2021',
    authors: [
      { self: true, name: 'Kejie Li *' }, Constants.DANIEL_DETONE, Constants.STEVEN_CHEN, Constants.MINH_VO,
      Constants.IAN_REID, Constants.HAMID, Constants.CHRIS_SWEENEY, Constants.JULIAN_STRAUB, Constants.RICHARD_NEWCOMBE
    ],
    content: `Localizing objects and estimating their extent in 3D is an important step towards high-level 3D scene understanding,
              which has many applications in Augmented Reality and Robotics. We present ODAM, a system for 3D Object Detection, Association,
              and Mapping using posed RGB videos. The proposed system relies on a deep learning front-end to detect 3D objects
              from a given RGB frame and associate them to a global object-based map using a graph neural network (GNN).
              Based on these frame-to-model associations, our back-end optimizes object bounding volumes, represented as super-quadrics,
              under multi-view geometry constraints and the object scale prior. We validate the proposed system on ScanNet where we show a significant
              improvement over existing RGB-only methods.`,
    projectWebsiteLink: '/publications/odam',
    downloadLink: 'https://arxiv.org/pdf/2108.10165.pdf'
  };
  public paper6: IPublicationCardsConfig = {
    paperId: 'paper6',
    imgUrl: '/kejieli/assets/images/ICRA2021.png',
    title: 'MOLTR: Multiple Object Localisation, Tracking and Reconstruction from Monocular RGB Videos',
    subtitle: 'International Conference on Robotics and Automation (ICRA) , 2021',
    authors: [
      { self: true, name: 'Kejie Li *' }, Constants.HAMID, Constants.IAN_REID
    ],
    content: `Semantic aware reconstruction is more advantageous than geometric-only reconstruction for future robotic
    and AR/VR applications because it represents not only where things are, but also what things are. Object-centric mapping
    is a task to build an object-level reconstruction where objects are separate and meaningful entities that convey both geometry
    and semantic information. In this paper, we present MOLTR, a solution to object-centric mapping using only
    monocular image sequences and camera poses. It is able to localise, track, and reconstruct multiple objects
    in an online fashion when an RGB camera captures a video of the surrounding. Given a new RGB frame, MOLTR firstly applies
    a monocular 3D detector to localise objects of interest and extract their shape codes that represent the object shapes in a
    learned embedding space. Detections are then merged to existing objects in the map after data association. Motion state
    (i.e. kinematics and the motion status) of each object is tracked by a multiple model Bayesian filter and object shape is
    progressively refined by fusing multiple shape code. We evaluate localisation, tracking, and reconstruction on benchmarking datasets
    for indoor and outdoor scenes, and show superior performance over previous approaches.`,
    learnMoreLink: 'https://arxiv.org/abs/2012.05360',
    downloadLink: 'https://arxiv.org/pdf/2012.05360.pdf'
  };
  public paper5: IPublicationCardsConfig = {
    paperId: 'paper5',
    imgUrl: '/kejieli/assets/images/CVPR2020.png',
    title: 'FroDO: From Detections to 3D Objects',
    subtitle: 'Computer Vision and Pattern Recognition (CVPR), 2020',
    authors: [
      { self: true, name: 'Kejie Li *' }, Constants.MARTIN_RUNZ,
      Constants.MENG_TANT, Constants.LINGNI_MA, Constants.CHEN_KONG, Constants.TANNER_SCHMIDT,
      Constants.IAN_REID, Constants.LOURDES_AGAPITO, Constants.JULIAN_STRAUB, Constants.STEVEN_LOVEGROVE, Constants.RICHARD_NEWCOMBE
    ],
    content: `Object-oriented maps are important for scene understanding since they jointly capture geometry and
              semantics, allow
              individual instantiation and meaningful reasoning about objects. We introduce FroDO, a method for
              accurate 3D
              reconstruction of object instances from RGB video that infers object location, pose and shape in a
              coarse-to-fine
              manner. Key to FroDO is to embed object shapes in a novel learnt space that allows seamless switching
              between sparse
              point cloud and dense DeepSDF decoding. Given an input sequence of localized RGB frames, FroDO first
              aggregates 2D
              detections to instantiate a category-aware 3D bounding box per object. A shape code is regressed using
              an encoder
              network before optimizing shape and pose further under the learnt shape priors using sparse and dense
              shape
              representations. The optimization uses multi-view geometric, photometric and silhouette losses. We
              evaluate on
              real-world datasets, including Pix3D, Redwood-OS, and ScanNet, for single-view, multi-view, and
              multi-object
              reconstruction.`,
    learnMoreLink: 'https://research.fb.com/publications/frodo-from-detections-to-3d-objects/',
    downloadLink: 'https://arxiv.org/pdf/2005.05125.pdf'
  };

  public paper4: IPublicationCardsConfig = {
    paperId: 'paper4',
    imgUrl: '/kejieli/assets/images/BMVC2019.png',
    title: 'Single-view Object Shape Reconstruction Using Deep Shape Prior and Silhouette',
    subtitle: 'British Machine Vision Conference (BMVC), 2019 ',
    authors: [{ self: true, name: 'Kejie Li' }, Constants.RAVI_GARG, Constants.MING_CAI, Constants.IAN_REID ],
    content: `3D shape reconstruction from a single image is a highly ill-posed problem. Modern deep learning based
              systems try to solve this problem by learning an end-to-end mapping from image to shape via a deep network. In this
              paper, we aim to solve this problem via an online optimization framework inspired by traditional methods. Our framework
              employs a deep autoencoder to learn a set of latent codes of 3D object shapes, which are fitted by a probabilistic
              shape prior using Gaussian Mixture Model (GMM). At inference, the shape and pose are jointly optimized guided by both
              image cues and deep shape prior without relying on an initialization from any trained deep nets. Surprisingly, our method
              achieves comparable performance to state-of-the-art methods even without training an end-to-end network, which
              shows a promising step in this direction.`,
    learnMoreLink: 'https://arxiv.org/abs/1811.11921',
    downloadLink: 'https://arxiv.org/pdf/1811.11921.pdf'
  };

  public paper3: IPublicationCardsConfig = {
    paperId: 'paper3',
    imgUrl: '/kejieli/assets/images/ICRA2019.png',
    title: 'Real-Time Monocular Object-Model Aware Sparse SLAM',
    subtitle: 'International Conference on Robotics and Automation (ICRA) , 2019',
    authors: [ Constants.MEHDI_HOSSEINZADEH, { self: true, name: 'Kejie Li' }, Constants.YASIR_LATIF, Constants.IAN_REID ],
    content: `Simultaneous Localization And Mapping (SLAM) is a fundamental problem in mobile robotics. While sparse point-based SLAM
              methods provide accurate camera localization, the generated maps lack semantic information. On the other hand, state of
              the art object detection methods provide rich information about entities present in the scene from a single image. This
              work incorporates a real-time deep-learned object detector to the monocular SLAM framework for representing generic
              objects as quadrics that permit detections to be seamlessly integrated while allowing the real-time performance. Finer
              reconstruction of an object, learned by a CNN network, is also incorporated and provides a shape prior for the quadric
              leading further refinement. To capture the dominant structure of the scene, additional planar landmarks are detected by
              a CNN-based plane detector and modeled as independent landmarks in the map. Extensive experiments support our proposed
              inclusion of semantic objects and planar structures directly in the bundle-adjustment of SLAM - Semantic SLAM - that
              enriches the reconstructed map semantically, while significantly improving the camera localization.`,
    learnMoreLink: 'https://arxiv.org/abs/1809.09149',
    downloadLink: 'https://arxiv.org/pdf/1809.09149.pdf'
  };

  public paper2: IPublicationCardsConfig = {
    paperId: 'paper2',
    imgUrl: '/kejieli/assets/images/ECCV2018.png',
    title: 'Efficient Dense Point Cloud Object Reconstruction using Deformation Vector Fields',
    subtitle: 'European Conference on Computer Vision (ECCV) , 2018',
    authors: [{ self: true, name: 'Kejie Li' }, Constants.TRUNG_PHAM, Constants.HUANGYING_ZHAN, Constants.IAN_REID],
    content: `Some existing CNN-based methods for single-view 3D object reconstruction represent a 3D object as either a 3D voxel
              occupancy grid or multiple depth-mask image pairs. However, these representations are inefficient since empty voxels or
              background pixels are wasteful. We propose a novel approach that addresses this limitation by replacing masks with
              "deformation-fields". Given a single image at an arbitrary viewpoint, a CNN predicts multiple surfaces, each in a
              canonical location relative to the object. Each surface comprises a depth-map and corresponding deformation-field that
              ensures every pixel-depth pair in the depth-map lies on the object surface. These surfaces are then fused to form the
              full 3D shape. During training, we use a combination of per-view and multi-view losses. The novel multi-view loss
              encourages the 3D points back-projected from a particular view to be consistent across views. Extensive experiments
              demonstrate the efficiency and efficacy of our method on single-view 3D object reconstruction.`,
    learnMoreLink: 'https://openaccess.thecvf.com/content_ECCV_2018/html/Kejie_Li_Efficient_Dense_Point_ECCV_2018_paper.html',
    downloadLink: 'https://openaccess.thecvf.com/content_ECCV_2018/papers/Kejie_Li_Efficient_Dense_Point_ECCV_2018_paper.pdf'
  };
  public paper1: IPublicationCardsConfig = {
    paperId: 'paper1',
    imgUrl: '/kejieli/assets/images/CVPR2018.png',
    title: 'Unsupervised Learning of Monocular Depth Estimation and Visual Odometry with Deep Feature Reconstruction',
    subtitle: 'Computer Vision and Pattern Recognition (CVPR), 2018',
    authors: [
      Constants.HUANGYING_ZHAN, Constants.RAVI_GARG, Constants.SAROJ,
      { self: true, name: 'Kejie Li' }, Constants.HARSH_AGARWAL, Constants.IAN_REID,
    ],
    content: `Despite learning based methods showing promising results in single view depth estimation and visual odometry, most
              existing approaches treat the tasks in a supervised manner. Recent approaches to single view depth estimation explore
              the possibility of learning without full supervision via minimizing photometric error. In this paper, we explore the use
              of stereo sequences for learning depth and visual odometry. The use of stereo sequences enables the use of both spatial
              (between left-right pairs) and temporal (forward backward) photometric warp error, and constrains the scene depth and
              camera motion to be in a common, real-world scale. At test time our framework is able to estimate single view depth and
              two-view odometry from a monocular sequence. We also show how we can improve on a standard photometric warp loss by
              considering a warp of deep features. We show through extensive experiments that: (i) jointly training for single view
              depth and visual odometry improves depth prediction because of the additional constraint imposed on depths and achieves
              competitive results for visual odometry; (ii) deep feature-based warping loss improves upon simple photometric warp loss
              for both single view depth estimation and visual odometry. Our method outperforms existing learning based methods on the
              KITTI driving dataset in both tasks.`,
    learnMoreLink: 'https://arxiv.org/abs/1803.03893',
    downloadLink: 'https://arxiv.org/pdf/1803.03893.pdf'
  };

  public papers = [this.paper9, this.paper8, this.paper7, this.paper6, this.paper5, this.paper4, this.paper3, this.paper2, this.paper1];
  public observer: IntersectionObserver;
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.observeIndex();
  }

  ngOnDestroy(): void {
    this.stopObserve();
  }

  observeIndex(): void {
    if (this.observer) { this.stopObserve(); }
    this.observer = new IntersectionObserver(entries => {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        const id = entry.target?.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          this.papers.forEach(paper => document.querySelector(`a[id="${paper.paperId}-link"]`)?.classList?.remove('active'));
          document.querySelector(`a[id="${id}-link"]`)?.classList?.add('active');
          return;
        }
      }
    });

    document.querySelectorAll('app-publication-list-cards[id] mat-card mat-card-header').forEach((section) => {
      this.observer.observe(section);
    });
  }

  stopObserve(): void {
    this.observer.disconnect();
  }

}
