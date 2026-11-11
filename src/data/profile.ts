export const education = [
 {school:'Columbia University',degree:'Master of Science in Mechanical Engineering',date:'Expected May 2027',detail:'Graduate studies',mark:'CU'},
 {school:'The George Washington University',degree:'Bachelor of Science in Mechanical Engineering',date:'May 2026',detail:'Concentration in Aerospace and Robotics · GPA: 3.5/4.0',mark:'GW'},
];
export const experience = [
 {company:'Apple',role:'Hardware Engineering Intern – Optics & Camera',date:'June 2026 – August 2026',location:'Japan',focus:'Optical metrology · Hardware validation',points:[
 'Evaluated and supported implementation of new precision optical metrology technology, developing measurement workflows and calibration procedures for 3D surface characterization of optical components.',
 'Conducted sensitivity studies and controlled experiments, applying MATLAB and 3D surface data analysis to identify systematic measurement errors, investigate root causes, and validate improvements in accuracy and repeatability.',
 'Collaborated with hardware engineers, manufacturing teams, and suppliers to communicate technical findings, document testing procedures, and support integration of new optical measurement capabilities.']},
 {company:'The George Washington University',role:'Undergraduate Research Assistant',date:'April 2023 – May 2026',location:'',focus:'Fluid dynamics · Experimental research',points:[
 'Conducted experimental fluid dynamics and rheometry research, characterizing heartbeat-like pulsatile flow and fluid behavior for potential biomedical device applications.',
 'Applied CFD, statistical methods, signal processing, and Python to analyze experimental datasets and visualize research findings.']},
 {company:'Deloitte Consulting LLP',role:'Cybersecurity Consulting Intern',date:'June 2025 – July 2025',location:'',focus:'Technical consulting · Process optimization',points:[
 'Supported Oracle ERP implementation and enterprise risk management, evaluating configurations, internal controls, and operational processes.',
 'Collaborated with cross-functional U.S. and Japanese teams on technical requirements, process optimization, and project execution.']},
 {company:'Medtronic',role:'Manufacturing Intern',date:'June 2024 – August 2024',location:'',focus:'Manufacturing · Traceability',points:[
 'Developed and implemented RFID-based inventory tracking technology to improve manufacturing traceability and address approximately $85K in annual inventory losses.',
 'Applied Lean Six Sigma and process optimization to improve manufacturing workflows, resolve production bottlenecks, and support recovery of backlogged orders, with estimated annual labor savings of $120K.']},
];
export const skills = [
 {name:'Programming',items:['Python','MATLAB','C++','SQL','Linux','Docker','ROS','Jupyter Notebook']},
 {name:'Engineering tools',items:['SolidWorks','ANSYS','Simulink','Raspberry Pi','Microcontrollers','Grafana']},
 {name:'Technical expertise',items:['Optical Metrology','Manufacturing','Process Optimization','DFM','Data Analysis','Data Visualization','CFD','FEA','Robotics','Embedded Systems','Controls','State Estimation','Kalman Filtering','Sensor Fusion']},
 {name:'Languages',items:['English','Japanese (Native)']},
];

export const expertiseGroups = [
 {number:'01',title:'Manufacturing & Quality Engineering',description:'Production systems, process development, and manufacturing optimization grounded in traceability and continuous improvement.',skills:['Lean Six Sigma','Process Optimization','Design for Manufacturing','CNC Machining','Manufacturing','RFID Traceability'],references:[{label:'Medtronic manufacturing internship',href:'/about/#experience'},{label:'Electrochemical Machining',href:'/projects/electrochemical-machining/'}]},
 {number:'02',title:'Robotics, Controls & Automation',description:'Sensing, computation, control development, and actuation brought together in intelligent physical systems.',skills:['Controls','State Estimation','Kalman Filtering','Sensor Fusion','MATLAB / Simulink','C++','Servo Actuation','System Integration'],references:[{label:'Rocket flight computer',href:'/projects/rocket-airbrake/'},{label:'Mini Pupper',href:'/projects/autonomous-mini-pupper/'},{label:'Face-tracking gimbal',href:'/projects/face-tracking-laser-gimbal/'}]},
 {number:'03',title:'Computer Vision, Cameras & Optics',description:'Optical metrology, camera-oriented hardware work, and computer-vision integration for measurement and tracking.',skills:['OpenCV','Computer Vision','Optical Metrology','3D Surface Characterization','Calibration','MATLAB','Experimental Validation'],references:[{label:'Apple optics & camera internship',href:'/about/#experience'},{label:'Face-tracking gimbal',href:'/projects/face-tracking-laser-gimbal/'}]},
 {number:'04',title:'Physics-Based Modeling & Simulation',description:'Simulation and analysis used to understand physical behavior and inform engineering design decisions.',skills:['CFD','FEA','MATLAB','Simulink','State Estimation','Aerodynamics','Fluid Mechanics','Python'],references:[{label:'Rocket simulation work',href:'/projects/rocket-airbrake/'},{label:'Fluid dynamics research',href:'/about/#experience'}]},
 {number:'05',title:'Data Analytics & Technical Computing',description:'Experimental, surface, and operational data analysis to support investigation, visualization, and engineering decisions.',skills:['Python','MATLAB','SQL','Jupyter Notebook','Statistical Analysis','Signal Processing','Data Visualization','Data Analysis'],references:[{label:'Apple optical metrology analysis',href:'/about/#experience'},{label:'Fluid dynamics research',href:'/about/#experience'}]},
 {number:'06',title:'Research & Experimental Engineering',description:'Hypothesis-driven experimentation, instrumentation, and validation across hardware and fluid-dynamics research.',skills:['Experimental Design','Rheometry','Controlled Experiments','Hardware Validation','Technical Documentation','Root-Cause Investigation','Measurement Workflows'],references:[{label:'Apple hardware engineering',href:'/about/#experience'},{label:'GW fluid dynamics research',href:'/about/#experience'},{label:'Rocket capstone',href:'/projects/rocket-airbrake/'}]},
 {number:'07',title:'Embedded Systems & IoT',description:'Connected sensing, data logging, and hardware integration for monitoring and physical-system prototypes.',skills:['Teensy 4.1','Raspberry Pi','Microcontrollers','RFID','Sensor Integration','Embedded Software','Data Logging','Docker','Grafana'],references:[{label:'Rocket flight computer',href:'/projects/rocket-airbrake/'},{label:'Environmental chamber',href:'/projects/embedded-iot/'},{label:'RFID manufacturing work',href:'/about/#experience'}]},
 {number:'08',title:'Engineering Management & Risk',description:'Technical execution supported by requirements, cross-functional collaboration, process improvement, and clear documentation.',skills:['Risk Management','Requirements Management','Cross-Functional Collaboration','Process Improvement','ERP Controls','Technical Communication','Project Execution'],references:[{label:'Deloitte consulting internship',href:'/about/#experience'},{label:'Medtronic manufacturing internship',href:'/about/#experience'},{label:'Rocket capstone',href:'/projects/rocket-airbrake/'}]},
];

export const toolkitCategories = [
 {name:'Programming',items:['Python','C++','MATLAB','SQL']},
 {name:'Data & technical computing',items:['Jupyter Notebook','OpenCV','Data Visualization','Statistical Analysis','Signal Processing']},
 {name:'CAD & simulation',items:['SolidWorks','ANSYS','CFD','FEA','Simulink']},
 {name:'Robotics & controls',items:['Controls','State Estimation','Kalman Filtering','Sensor Fusion','Servo Actuation']},
 {name:'Embedded & IoT',items:['Teensy 4.1','Raspberry Pi','Microcontrollers','RFID','Sensor Integration']},
 {name:'Infrastructure & monitoring',items:['Linux','Docker','Grafana','MQTT','InfluxDB']},
 {name:'Manufacturing & quality',items:['Lean Six Sigma','Process Optimization','Design for Manufacturing','CNC Machining']},
 {name:'Engineering execution',items:['Risk Management','Requirements Management','Cross-Functional Collaboration','Technical Documentation']},
 {name:'Languages',items:['English','Japanese']},
];

export const skillsForReview = ['AWS / cloud services','ROS','PID control','FMEA','Design of Experiments (DOE)','Machine learning','Pandas','NumPy','Interferometry','Formal quality-control methods'];

export const industries = [
 {kind:'Professional experience',title:'Consumer Electronics & Camera Hardware',detail:'Apple · optics and camera hardware',href:'/about/#experience'},
 {kind:'Professional experience',title:'Medical Devices & Manufacturing',detail:'Medtronic · manufacturing and traceability',href:'/about/#experience'},
 {kind:'Academic / project work',title:'Robotics & Automation',detail:'Mini Pupper and face-tracking gimbal',href:'/projects/autonomous-mini-pupper/'},
 {kind:'Academic / project work',title:'Aerospace & Rocketry',detail:'High-powered altitude-targeting rocket capstone',href:'/projects/rocket-airbrake/'},
 {kind:'Research',title:'Fluid Dynamics & Biomedical Research',detail:'GW experimental fluid-dynamics research',href:'/about/#experience'},
 {kind:'Academic / project work',title:'Advanced Manufacturing & IoT',detail:'Electrochemical machining and environmental chamber',href:'/projects/electrochemical-machining/'},
];
