/* Text edited locally through Start Portfolio Editor.bat. */
window.WAGON_PHASES = [
  {
    "id": "0",
    "label": "Phase 0 · RC tank",
    "title": "Small-scale control prototype",
    "summary": "The gold RC tank was the early test platform for the throttle and turning functions that would go into the wagon.",
    "sections": [
      {
        "title": "Controls before the full-size build",
        "text": "I wanted to make a small-scale test of the throttle and turning function that would go into the wagon. I learned how to de-noise a signal with a low-pass filter, read an encoder on a stepper motor to gauge position, and work with an RC controller to wirelessly control the tank.",
        "media": [
          {
            "type": "image",
            "src": "assets/Wagon_assets/IMG_4485.jpg",
            "alt": "Gold RC tank with prototype control electronics",
            "caption": "Phase 0: the gold RC tank and control hardware.",
            "date": "",
            "title": "The RC prototype",
            "description": "The small-scale platform used to explore throttle and turning before building the full-size wagon."
          },
          {
            "type": "video",
            "src": "assets/Wagon_assets/IMG_3658.mp4",
            "poster": "assets/Wagon_assets/IMG_4485.jpg",
            "alt": "RC tank control demonstration",
            "caption": "Phase 0: wireless control demonstration.",
            "date": "",
            "title": "Wireless control on the prototype",
            "description": "This recording demonstrates the RC tank used to develop the throttle and turning functions. The small platform let me work with an RC controller, encoder feedback, and low-pass filtering before moving to the full-size wagon."
          }
        ]
      }
    ]
  },
  {
    "id": "1",
    "label": "Phase 1 · Original wagon",
    "title": "The first powered wagon",
    "summary": "The original wagon combined a spring-loaded handle, motor control, custom wheel mounts, and field testing.",
    "sections": [
      {
        "title": "Why I built it",
        "text": "I developed this wagon to make moving gardening supplies easier for a family member with limited mobility. Commercial powered wagons still required uncomfortable throttle and steering inputs, so I wanted to build a more intuitive assistive system that would move naturally with the person guiding it.",
        "extra": "The handle uses springs to vary a potentiometer for a PID controller that attempts to control wagon speed until the springs are no longer displaced. I also calculate the two motor speeds in software using the behavior of a car differential rather than adding a mechanical differential.",
        "media": []
      },
      {
        "title": "Mechanical design",
        "text": "One of the bigger constraints was only being able to use the tools available to me: a band saw, drill press, and welder. I planned the motor mount in CAD with those tools in mind. The mount needed to interface with the existing wagon body and provide structural support for the sensors.",
        "media": [
          {
            "type": "image",
            "src": "assets/Wagon_assets/Wheel CAD.jpg",
            "alt": "CAD model of the original wheel and mount assembly",
            "caption": "Fusion 360 CAD",
            "date": "",
            "title": "Planning the mount in CAD",
            "description": "The wheel and mount assembly was modeled before fabrication due to the wheel and axle geometry"
          },
          {
            "type": "image",
            "src": "assets/Wagon_assets/IMG_4419.jpeg",
            "alt": "Rear view of the first wagon's wheel mounts and fabricated frame",
            "caption": "Wheel-mount and frame fabrication.",
            "wide": true,
            "date": "",
            "title": "Wheel mounts and frame",
            "description": "The fabricated structure supports the powered wheels and connects them to the existing wagon body. The design was planned around the band saw, drill press, and welder available for the build."
          },
          {
            "type": "image",
            "src": "assets/Wagon_assets/IMG_4425.jpeg",
            "alt": "Original wagon underside and powered wheel assembly",
            "caption": "The wheel assembly fitted to the existing wagon body.",
            "date": "",
            "title": "Under the wagon",
            "description": "An underside view of the powered-wheel assembly, its mounting points, and the wiring"
          }
        ]
      },
      {
        "title": "Electrical system and controls",
        "text": "I used an Arduino Uno as the development board that stores the code and passes motor speed commands through a PWM-to-analog converter. The project taught me the basics of drawing schematics, sourcing components, and manufacturing the supporting electronics.",
        "media": [
          {
            "type": "image",
            "src": "assets/Wagon_assets/Scematic.jpg",
            "alt": "Schematic supplied with the original wagon documentation",
            "caption": "The supplied electrical schematic. Open the image to inspect the details.",
            "wide": true,
            "date": "",
            "title": "Electrical schematic",
            "description": "The electrical schematic supplied with the original build documentation. Open the full image to inspect the component labels and connections."
          },
          {
            "type": "image",
            "src": "assets/Wagon_assets/IMG_4427.jpeg",
            "alt": "Original wagon control electronics on the workbench",
            "caption": "Control electronics during development.",
            "date": "",
            "title": "Developing the electronics",
            "description": "The control hardware and wiring during development. The electronics connected the handle inputs, controller code, and motor-speed interface."
          },
          {
            "type": "image",
            "src": "assets/Wagon_assets/IMG_4428.jpeg",
            "alt": "Prototype board and wiring for the original wagon",
            "caption": "Prototype circuit wiring.",
            "date": "",
            "title": "Prototype wiring",
            "description": "A closer view of the prototype board and its connections during the original wagon electronics work. Showing the PWM to analog converter"
          }
        ]
      },
      {
        "title": "Field test",
        "text": "Once everything was assembled, I loaded the wagon with around 50 lb of cinder blocks and tested it on a hill. Some electrical contacts came loose, but after troubleshooting and making adjustments I was able to get the wagon to carry the load uphill.",
        "media": [
          {
            "type": "video",
            "src": "assets/Wagon_assets/New project1.mp4",
            "poster": "assets/Wagon_assets/IMG_4419.jpeg",
            "alt": "Original powered wagon field-test footage",
            "caption": "Phase 1: field-test footage.",
            "wide": true,
            "date": "",
            "title": "The loaded hill test",
            "description": "This test was to demonstrate the proof of concept of using a handle throttle and angle measurement on a full scale wagon in a real world off road environment."
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "label": "Phase 2 · Development & testing",
    "title": "The next wagon iteration",
    "summary": "The updated test setup, control electronics, and data-acquisition recordings for Phase 2.",
    "sections": [
      {
        "title": "Test hardware",
        "text": "The Phase 2 photographs document the fixtures and workbench setup used for the next iteration.",
        "media": [
          {
            "id": "fixture",
            "type": "image",
            "src": "assets/Wagon_assets/Phase_2/IMG_6152.jpg",
            "date": "",
            "title": "Revised Handle Design",
            "alt": "Upright metal fixture from Wagon Phase 2",
            "caption": "Phase 2 mechanical fixture.",
            "description": "Phase 1's handle didn't give good throttle measurements do to the rotational potentiometer setup. The second version used a linear potentiometer to produce a better signal.",
            "scheduleTask": "08 Test jig"
          },
          {
            "id": "bench",
            "type": "image",
            "src": "assets/Wagon_assets/Phase_2/IMG_6207.JPG",
            "date": "",
            "title": "The development workbench",
            "alt": "Wagon Phase 2 electronics and laptop on a workbench",
            "caption": "Electronics, wiring and development laptop.",
            "description": "The workbench brings the controller electronics, connections, and DAQ validation. Once the electronics were put in a proper housing and each components was validated I could move on to testing.",
            "scheduleTask": "07 Ground station"
          },
          {
            "id": "target",
            "type": "image",
            "src": "assets/Wagon_assets/Phase_2/IMG_6209.JPG",
            "date": "",
            "title": "LiDAR Test Mount",
            "alt": "A target panel on a wooden stand in the workshop",
            "caption": "Target and stand from the Phase 2 setup.",
            "description": "Due to the IMU noise as well as dead reckoning being required for the control a seaport sensor for sensor fusion and safety was required for autonomous testing.",
            "scheduleTask": "08 Test jig"
          }
        ]
      },
      {
        "title": "Controls and data acquisition",
        "text": "",
        "media": [
          {
            "id": "test-6197",
            "type": "video",
            "src": "assets/Wagon_assets/Phase_2/IMG_6197.mov",
            "date": "",
            "title": "LiDAR Measurements",
            "alt": "Laptop displaying live project plots during the Phase 2 bench recording",
            "caption": "Phase 2 bench recording · IMG_6197.mov.",
            "description": "The of board LiDAR sensor would send frame data of the position it measures to a Uno R3. The Uno then stores those measurements on a SD card and sends the data to the laptop back end server via UDP Bluetooth packets.",
            "scheduleTask": "08.1 Bring up LiDAR test instrumentation"
          },
          {
            "id": "test-6198",
            "type": "video",
            "src": "assets/Wagon_assets/Phase_2/IMG_6198.mov",
            "date": "",
            "title": "The DAQ interface",
            "alt": "Wagon DAQ interface with multiple plots and controls",
            "caption": "Phase 2 interface recording · IMG_6198.mov.",
            "description": "With both the onboard and of board nodes were connecting and sending UDP (R3 with Bluetooth, R4 with wifi) to the ground station back end server we could begin the first test.",
            "scheduleTask": "06.1 Build live DAQ display"
          },
          {
            "id": "test-6228",
            "type": "video",
            "src": "assets/Wagon_assets/Phase_2/IMG_6228.MOV",
            "date": "",
            "title": "First test",
            "alt": "Wagon Phase 2 setup and laptop shown together",
            "caption": "Phase 2 test recording · IMG_6228.MOV.",
            "description": "This was the first test that used guesed PID values. It didn't preform well however it showed the system could receive state signals from the ground station and conduct a test with little human oversight for rapid controller tuning. This also demonstrated the requirement of an analysis server to examine the DAQ data and adjust the controller configuration accordingly.",
            "scheduleTask": "09 Ground station test integration"
          }
        ]
      }
    ]
  }
];
