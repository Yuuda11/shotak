---
title: "Environmental Chamber for 3D Printing Filaments"
subtitle: "An IoT-enabled prototype for filament drying, storage, and environmental monitoring."
highlightPhrase: "environmental monitoring"
highlightTone: "sage"
summary: "Built and initially presented an IoT-enabled environmental chamber prototype for filament drying, storage, and monitoring; further development is pending funding."
category: "Research / IoT / Data Systems"
filters: ["Research", "Hardware"]
role: "Undergraduate Research Fellow"
projectStatus: "Prototype built · Initial presentation complete · Further development pending funding"
cardStatus: "Prototype built · funding pending"
tools: ["Raspberry Pi", "Python", "Debian", "MQTT", "Mosquitto", "Node-RED", "InfluxDB", "Grafana", "Docker", "Portainer"]
previewTools: ["Python", "MQTT", "Docker", "Grafana", "Data Analysis"]
illustration:
  src: /images/projects/covers/chamber-spools.webp
  alt: Concept illustration of a transparent framed filament chamber with side-by-side spools, open hinged lid and front display
cover: "/images/projects/covers/chamber-spools.webp"
coverAlt: "Concept illustration of a framed transparent filament chamber with spools, an open lid and a front display"
mediaKind: "concept"
order: 2
featured: 2
cardNote: "Initial project presentation complete; further development needs funding."
status: "published"
documentation: "complete"
---

<p class="chamber-intro">The physical prototype has been built and its initial project presentation is complete. Further development is pending funding. The system brings chamber sensing, data logging, and dashboard visualization together so environmental conditions can be reviewed over time; this does not claim completed validation or deployment.</p>

<div class="chamber-bento">
<section class="chamber-card chamber-architecture" aria-labelledby="system-architecture">
<h2 id="system-architecture">System architecture</h2>
<p>From a chamber observation to a readable history.</p>
<ol class="horizontal-process-timeline chamber-flow" style="--timeline-count:5" aria-label="Sensor-to-dashboard data flow">
<li class="horizontal-process-step tone-blue"><span class="horizontal-process-dot" aria-hidden="true"></span><span class="horizontal-process-number">01</span><strong>Collect</strong><p>Raspberry Pi + sensors</p></li>
<li class="horizontal-process-step tone-sage"><span class="horizontal-process-dot" aria-hidden="true"></span><span class="horizontal-process-number">02</span><strong>Transmit</strong><p>MQTT / Mosquitto</p></li>
<li class="horizontal-process-step tone-lavender"><span class="horizontal-process-dot" aria-hidden="true"></span><span class="horizontal-process-number">03</span><strong>Process</strong><p>Node-RED</p></li>
<li class="horizontal-process-step tone-blue"><span class="horizontal-process-dot" aria-hidden="true"></span><span class="horizontal-process-number">04</span><strong>Store</strong><p>InfluxDB</p></li>
<li class="horizontal-process-step tone-sage"><span class="horizontal-process-dot" aria-hidden="true"></span><span class="horizontal-process-number">05</span><strong>Visualize</strong><p>Grafana</p></li>
</ol>
<ol class="chamber-architecture-notes" aria-label="Architecture details">
<li><span class="chamber-note-number">01</span><strong>Collect</strong><span>Python on a Debian-based Raspberry Pi reads chamber conditions such as temperature and humidity.</span></li>
<li><span class="chamber-note-number">02</span><strong>Transmit</strong><span>The device publishes readings through MQTT; Mosquitto acts as the message broker.</span></li>
<li><span class="chamber-note-number">03</span><strong>Process</strong><span>JSON messages are parsed in Node-RED and readings are prepared for storage.</span></li>
<li><span class="chamber-note-number">04</span><strong>Store</strong><span>InfluxDB keeps timestamped readings as time-series data.</span></li>
<li><span class="chamber-note-number">05</span><strong>Visualize</strong><span>Grafana charts show readings over time for review during storage and drying.</span></li>
</ol>
<p class="chamber-services">Docker runs services in separate containers; Portainer helps manage them.</p>
</section>
<section class="chamber-card" aria-labelledby="the-problem">
<h2 id="the-problem">The problem</h2>
<p>Filament can absorb moisture during storage, which can affect print quality. Tracking the chamber environment makes those storage and drying conditions easier to understand.</p>
</section>
<section class="chamber-card" aria-labelledby="hardware-sensing">
<h2 id="hardware-sensing">Hardware &amp; sensing</h2>
<p>A Raspberry Pi links the physical chamber to the monitoring system. Sensors turn conditions inside the enclosure into readings that the device can collect and publish.</p>
</section>
<section class="chamber-card" aria-labelledby="monitoring-analysis">
<h2 id="monitoring-analysis">Monitoring &amp; analysis</h2>
<p>A time-series history lets the team review temperature and humidity trends during a drying cycle. This is a use of the data, rather than evidence of improved drying or print quality.</p>
</section>
</div>
