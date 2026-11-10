---
title: "Face Tracking Laser Gimbal"
subtitle: "Computer vision, mechanical design, and servo actuation integrated into a tracking demonstration."
summary: "Developed a face-tracking gimbal combining OpenCV, Raspberry Pi, servo actuation, and Flask controls for real-time tracking."
category: "Computer Vision / Mechatronics"
filters: ["Hardware", "Controls"]
tools: ["Python", "Raspberry Pi", "OpenCV", "Servo Actuation", "Flask", "IoT", "Mechanical Design", "Manufacturing"]
previewTools: ["Python", "OpenCV", "Raspberry Pi", "Flask", "Mechanical Design"]
illustration:
  src: /images/projects/covers/face-tracking-laser-gimbal-concept.png
  alt: Concept illustration of a red camera gimbal with a Raspberry Pi, ribbon cable, and multicolored wiring; representative artwork, not project photography
cover: "/images/projects/face-tracking-laser-gimbal/prototype.webp"
gallery:
  - src: /images/projects/gimbal.svg
    alt: Camera to OpenCV detection to servo actuation, with a Flask controls interface
    caption: High-level functional diagram.
coverAlt: "Face-tracking gimbal prototype with Raspberry Pi, camera, wiring, and servo assembly"
mediaKind: "photo"
order: 3
cardNote: "Integrated vision, servo actuation, and Flask controls."
status: "published"
documentation: "complete"
---

## Problem and constraints

The project brings computer vision into a physical tracking system: a gimbal responds to face position using camera input and servo actuation.

## My contribution

I developed the face-tracking gimbal, combining OpenCV, Raspberry Pi, servo actuation, and Flask controls. The work includes mechanical design, manufacturing, and system integration.

## System design and implementation

Camera input is processed with OpenCV, and detected face position informs servo actuation. Raspberry Pi provides the computing platform, while Flask provides the controls interface. These elements connect the camera-to-detection-to-servo flow with the mechanical assembly.

The laser is a demonstration pointer. Portfolio demonstrations should use a face-position overlay or a non-person target rather than directing the pointer at a person.
