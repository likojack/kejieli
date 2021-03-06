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
  public paper1: IPublicationCardsConfig = {
    paperId: 'paper1',
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

  public paper2: IPublicationCardsConfig = {
    paperId: 'paper2',
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

  public paper4: IPublicationCardsConfig = {
    paperId: 'paper4',
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
  public paper5: IPublicationCardsConfig = {
    paperId: 'paper5',
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

  public papers = [this.paper1, this.paper2, this.paper3, this.paper4, this.paper5];
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
