---
title: "Autonomous Robot Dog — Mini Pupper"
subtitle: "An autonomous navigation mission—detect, navigate, retrieve, and return—built on the Mini Pupper platform."
highlightPhrase: "autonomous navigation"
highlightTone: "sage"
summary: "Developed an autonomous Mini Pupper robot that detects a target, navigates to it, retrieves it, and returns to base."
category: "Robotics / Autonomy"
filters: ["Hardware", "Controls"]
tools: ["OpenCV"]
previewTools: ["Robotics", "Autonomy", "OpenCV", "System Integration"]
illustration:
  src: /images/projects/covers/autonomous-mini-pupper-cover-v2.png
  alt: Concept illustration of a yellow quadruped robot dog with a top-mounted sensor; representative artwork, not project photography
cover: "/images/projects/autonomous-mini-pupper/platform.webp"
gallery:
  - src: /images/projects/mini-pupper.svg
    alt: Detect, navigate, retrieve, and return mission stages
    caption: High-level mission sequence; not an implementation schematic.
coverAlt: "Mini Pupper robot platform pictured in the existing project portfolio"
mediaKind: "platform"
order: 4
featured: 3
cardNote: "Autonomous mission development on the Mini Pupper platform."
status: "published"
documentation: "complete"
---

## Problem and constraints

The mission combines four tasks in sequence: detect a target, navigate to it, retrieve it, and return to base. The project uses the existing Mini Pupper robot platform.

## My contribution

I developed an autonomous Mini Pupper robot to carry out the target-retrieval mission. Mini Pupper is the underlying platform; the project focuses on developing and integrating the autonomous mission on that platform.

## System design and implementation

The functional sequence is **detect → navigate → retrieve → return**. Target detection establishes the mission objective, navigation brings the robot to the target, retrieval acquires it, and the return stage brings the robot back to base.

OpenCV is used for target detection, as documented in my existing project portfolio. The mission diagram communicates the functional sequence without specifying the retrieval mechanism or a particular navigation algorithm.
