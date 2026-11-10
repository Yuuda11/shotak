---
title: "High-Powered Altitude-Targeting Rocket System"
subtitle: "A high-powered rocket built from the ground up, with a custom airbrake system for active altitude targeting."
summary: "Developed the electronics and software for a team-built high-powered rocket with a custom airbrake system."
category: "Rocketry / Controls / Hardware"
filters: ["Controls", "Hardware"]
tools: ["Python", "C++", "MATLAB", "GitHub", "Simulations", "State Estimation", "Controls", "Electronics", "PCB Design", "Rocketry", "Mechanical Design", "CFD"]
previewTools: ["Mechanical Design", "Controls", "State Estimation", "C++", "MATLAB"]
illustration:
  src: /images/projects/covers/rocket.webp
  alt: Generated concept illustration of a complete long, slender rocket with pointed nose and aft fins; representative, not project photography
cover: "/images/projects/rocket-airbrake/assembly.webp"
mediaKind: cad
gallery:
  - src: /images/projects/rocket-airbrake/rocket-and-team.webp
    alt: Rocket and team outdoors, from the existing project portfolio
    caption: The team and rocket. Flight-test evidence is documented in the final report.
  - src: /images/projects/rocket-airbrake/report-avionics.webp
    alt: Report page 28 showing the custom flight-computer PCB and avionics architecture
    caption: Final report, page 28 — custom PCB and avionics. Team project documentation.
  - src: /images/projects/rocket-airbrake/report-simulation.webp
    alt: Report page 41 showing the flight physics and controller simulation models
    caption: Final report, page 41 — MATLAB Simulink controller simulations, distinct from flight validation.
  - src: /images/projects/rocket-airbrake/report-flight-results.webp
    alt: Report page 50 comparing baseline and full-airbrake flight altitude histories
    caption: Final report, page 50 — baseline versus full-deployment flight comparison.
coverAlt: "Airbrake CAD assembly from the existing rocket project portfolio"
order: 1
featured: 1
cardNote: "Team flight result: 4.6% apogee reduction at full deployment; feedback control simulated."
role: "Electronics and Software"
year: "2026"
teamContext: "Four-person GW capstone team · advisor: Professor Amir Barakati"
projectStatus: "Flight demonstration completed; feedback control simulated"
documents: [rocket-final-report, rocket-poster]
status: "published"
documentation: "complete"
---

## Problem and constraints

The GW Rocket Team needed a way to reduce overshoot when targeting a prescribed apogee for the International Rocket Engineering Competition. Our four-person capstone team developed a dedicated high-powered rocket and an independently integrated airbrake subsystem to investigate that capability.

The system had to fit inside the rocket’s coupler, preserve flight stability, and increase drag during the coast phase without interfering with propulsion or recovery. The final report documents the package, mass, structural, and budget constraints in section 1.3.

## My contribution and team context

The report identifies my responsibility as **Electronics and Software**. My scope was the airbrake flight-computer electronics and control-software work: sensor acquisition, state estimation, logging, servo commands, and controller simulation.

This was a team-built rocket. Leonardo Borchert led the team and airframe/propulsion work; Tyler Jones handled mechanical design, manufacturing, and CFD; Lean Albeshri handled recovery avionics. Professor Amir Barakati advised the project. The mechanism, airframe, recovery system, and flight results are team accomplishments, not work attributed solely to me. See the report’s team roster on page 2.

## System architecture

The vehicle combined an airframe and propulsion system, a dedicated airbrake coupler, separate recovery avionics, and position tracking. The report specifies a **133.44-inch (11.12-foot) rocket** with a long fiberglass airframe, a pointed nose, and aft fins.

The airbrake electronics were organized around sensing, computation, actuation, and power distribution. A Teensy 4.1 processed redundant barometric and inertial measurements, logged flight data, and provided the servo command. A custom PCB reduced loose interconnects; separate regulated supplies served the computation/sensor electronics and the high-torque servo. Preflight integration exposed a servo-current-related risk of processor resets or interrupted readings, making the power separation an important design consideration.

## Airbrake mechanism and control approach

The team’s mechanism used servo-driven slot-and-pin linkages to extend the brake plates. Mechanical integration and CFD characterized the structure and the additional drag at different deployment states. These analyses supported the controller model; they were not direct measurements of drag in flight.

The intended software sequence covered preflight initialization, launch and burnout detection, state estimation, apogee prediction, deployment commands, and fail-safe logic. Barometric and inertial measurements supported sensor fusion and filtering; the poster identifies Kalman filtering as part of state estimation.

MATLAB Simulink models compared a velocity-delta method with predictive guidance. The predictive approach repeatedly compared predicted apogee with the target and adjusted deployment in simulation. It informed flight-software development, but the final report explicitly states that the **feedback control loop was not validated in flight**.

## Testing, results, and limitations

The test program had distinct stages, with different levels of evidence:

| Stage | Evidence and outcome |
| --- | --- |
| Analysis and simulation | FEA and CFD evaluated the mechanism and aerodynamic behavior; MATLAB Simulink compared control methods. These are computational results, not flight validation. |
| Ground integration | The report documents checks of sensor readings, logging, servo motion, and controller response, alongside the team’s recovery and propulsion ground tests. |
| February 28, 2026 flight | Airbrake deployment was disabled for data collection. Recovery failures damaged the rocket; the team revised recovery hardware and rebuilt it before later flights. |
| April 11 baseline flight | The rocket reached **5,867 ft**. Airbrakes did not actuate; the report traces this to an IMU configuration/range issue. |
| April 12 full-deployment flight | A follow-up flight demonstrated **100% airbrake deployment**, reaching **5,597 ft**. The report and poster summarize the comparison as a **4.6% reduction in apogee**. |

The flight result establishes measurable apogee-reduction capability under full deployment. It does **not** demonstrate closed-loop accuracy against a specified target altitude. The report also states that the aspirational 7.5% reduction was not achieved. Limited launch opportunities constrained controller tuning and validation. See report sections 3.7–3.9 and 6 for the test history and limitations.

## Lessons and next steps

The work reinforced the need to validate sensor configuration and power integrity under realistic operating conditions before relying on state estimates or actuator commands. The flight program also showed why simulation success, integrated hardware operation, and closed-loop target accuracy must be reported separately.

The report recommends further feedback-controller flight testing and iterative tuning. Those remain next steps, rather than completed results.
