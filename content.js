/* Portfolio wording; use the local browser editor or edit this file. */
window.PORTFOLIO_CONTENT = {
  "name": "Benjamin Nocera",
  "hero": {
    "kicker": "MECHANICAL ENGINEER",
    "status": "Available for engineering opportunities."
  },
  "links": {
    "email": "benjamin.e.nocera@gmail.com",
    "linkedin": "https://www.linkedin.com/in/benjamin-nocera-6600062b2/",
    "resume": "resume.html"
  },
  "facts": [
    {
      "title": "UC San Diego",
      "text": "Bachelor’s in Mechanical Engineering."
    },
    {
      "title": "Aerospace Manufacturing",
      "text": "Production documentation, machined components, and ERP migration."
    },
    {
      "title": "Projects",
      "text": "Hands-on experience with control theory, electrical components, and software"
    }
  ],
  "about": {
    "heading": "From first principals to final products.",
    "paragraphs": [
      "My experience includes a year of aerospace manufacturing working at Weldmac where I was apart of projects ranging from inspection jigs, ERP integration, and production documentation",
      "I also led drivetrain team for UCSD SAE Baja for UCSD's first ever Baja car which taught me valuable leadership skills. In addition, my personal projects combine mechanical design, fabrication, embedded controls, and software development"
    ]
  },
  "capabilities": [
    {
      "eyebrow": "DESIGN",
      "title": "CAD & manufacturing",
      "text": "Fusion 360 · SolidWorks · Design for Manufacturing, Maintenance, and Assembly"
    },
    {
      "eyebrow": "CONTROLS",
      "title": "Embedded systems",
      "text": "C++ · Arduino · Testing"
    },
    {
      "eyebrow": "PRODUCTION",
      "title": "Engineering documentation",
      "text": "Production blueprints · Controlled documentation · Sheet-metal assemblies · Machined components"
    },
    {
      "eyebrow": "TEAMWORK",
      "title": "Projects & Systems Management",
      "text": "Team lead · JobBOSS2 · Epicor · Controlled CUI Documentation"
    }
  ],
  "projects": [
    {
      "type": "EMBEDDED SYSTEMS",
      "title": "Swing Tracker",
      "description": "A LiDAR beam-break sensor detects the swing near contact, triggering an ESP32 camera for automatic video capture.",
      "tags": [
        "LiDAR",
        "Embedded Systems",
        "C++"
      ],
      "href": "projects/swing-tracker.html",
      "thumbnail": "assets/generated/swing-tracker/bench-poster.webp",
      "thumbnailVideo": "assets/generated/swing-tracker/bench.mp4",
      "thumbnailAlt": "Swing Tracker breadboard, electronics and laptop from IMG_2722.mp4"
    },
    {
      "type": "TESTING IN PROGRESS",
      "title": "Powered Wagon",
      "description": "From a small RC control prototype to a powered garden wagon: custom fabrication, dual-motor drive, and a spring-loaded handle sensor.",
      "tags": [
        "CAD",
        "Electrical",
        "Fabrication",
        "Control"
      ],
      "href": "projects/wagon.html#schedule",
      "thumbnail": "assets/Wagon_assets/IMG_4419.jpeg",
      "thumbnailAlt": "Powered wagon wheel and motor-mount assembly"
    },
    {
      "type": "IN PROGRESS",
      "title": "Helicopter",
      "description": "An RC helicopter project planned in three phases: GPS waypoint following, obstacle avoidance and SLAM, and real-time object detection using AI native model.",
      "tags": [
        "Flight planning",
        "SLAM",
        "Computer vision"
      ],
      "href": "projects/helicopter.html#schedule",
      "thumbnail": "assets/Helicopter_assets/IMG_6260.JPG",
      "thumbnailAlt": "Photograph supplied for the Helicopter project"
    }
  ],
  "experience": [
    {
      "date": "JUN 2025 – May 2026",
      "role": "Aerospace Manufacturing Engineering Intern",
      "organization": "Weldmac · El Cajon, CA",
      "description": "Delivered cross-disciplinary projects involving production documentation and ERP migration. Prepared and reviewed production documents for machined components, sheet-metal air ducts, bellows components, and Black Hawk FRIES kits. Assisted with migration from JobBOSS2 to Epicor."
    },
    {
      "date": "JUN 2025 – JUN 2026",
      "role": "Drivetrain Team Lead",
      "organization": "UCSD SAE Baja · Member October 2024 – June 2025",
      "description": "Designed and led a team for UCSD’s first competition-ready Baja car. Led drivetrain development for a 2WD off-road vehicle and applied testing and engineering standards to deliver a low-cost drivetrain."
    },
    {
      "date": "September 2025 - March 2026",
      "role": "Pericardiocentesis Training Model",
      "organization": "UC San Diego · Capstone",
      "description": "Collaborated with an engineering team on an ultrasound-compatible beating-heart training model. Contributed to a needle-contact detection system using conductive silicone paint. UCSD inventor; patent pending."
    }
  ],
  "contact": {
    "heading": "Let’s build something useful.",
    "body": "For engineering roles, project collaboration, or a conversation about my work, send me a message."
  },
  "projectText": {
    "swingOverview": "This was the first project I ever did and is what got me into engineering back in 2020. I made it because I didn’t want to take a large video of my batting and have to scroll through it to get to the parts I wanted. I used a LiDAR as a beam break to trigger a small camera on an ESP32. This got me started learning how to program in C++ and work with embedded systems.",
    "wagonPrototype": "In this project I wanted to make a small-scale test of the throttle and turning function that would go into the wagon. I learned how to denoise a signal with a low-pass filter and read from an encoder on a stepper motor to gauge position. I also learned to work with an RC controller to wirelessly control the tank."
  }
};
