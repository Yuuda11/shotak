---
title: "Environmental Chamber for 3D Printing Filaments"
subtitle: "An IoT-enabled prototype for filament drying, storage, and environmental monitoring."
highlightPhrase: "environmental monitoring"
highlightTone: "sage"
summary: "Developing a prototype environmental chamber for 3D printing filaments, integrating IoT monitoring, data pipelines, and analysis to support performance optimization."
category: "Research / IoT / Data Systems"
filters: ["Research", "Hardware"]
role: "Undergraduate Research Fellow"
projectStatus: "In development"
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
cardNote: "Undergraduate Research Fellow · prototype in development."
status: "published"
documentation: "complete"
---

<p class="chamber-intro">The project brings chamber sensing, data logging, and dashboard visualization into one system so environmental conditions can be tracked over time. The prototype is in development; the flow below describes its monitoring architecture, without claiming completed validation.</p>

<div class="chamber-bento">
<section class="chamber-card chamber-architecture" aria-labelledby="system-architecture">
<h2 id="system-architecture">System architecture</h2>
<p>From a chamber observation to a readable history.</p>
<ol class="chamber-flow" aria-label="Sensor-to-dashboard data flow">
<li><span class="flow-step">01 · Collect</span><h3>Raspberry Pi + sensors</h3><p>Python on a Debian-based Raspberry Pi reads chamber conditions such as temperature and humidity.</p></li>
<li><span class="flow-step">02 · Transmit</span><h3>MQTT / Mosquitto</h3><p>The device publishes readings through MQTT; Mosquitto acts as the message broker.</p></li>
<li><span class="flow-step">03 · Process</span><h3>Node-RED</h3><p>JSON messages are parsed and readings are prepared for storage.</p></li>
<li><span class="flow-step">04 · Store</span><h3>InfluxDB</h3><p>Timestamped readings are kept as time-series data.</p></li>
<li><span class="flow-step">05 · Visualize</span><h3>Grafana</h3><p>Charts show readings over time so the team can review conditions during storage and drying.</p></li>
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
