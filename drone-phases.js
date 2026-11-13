/* Helicopter Phase 1, Drone Phases 2–3. Editable in the local portfolio editor. */
window.DRONE_PHASES = [
  {
    "id": "1",
    "label": "Phase 1 · Helicopter GPS",
    "title": "Helicopter: autonomous GPS waypoints",
    "summary": "Phase 1 used the RC helicopter to demonstrate GPS waypoint following and an autonomous landing without manual intervention.",
    "sections": [
      {
        "title": "Magnum, P.I. RC helicopter",
        "text": "",
        "media": [
          {
            "id": "airframe",
            "type": "image",
            "src": "assets/Helicopter_assets/IMG_6260.JPG",
            "date": "",
            "title": "The RC helicopter",
            "alt": "Photograph of the RC helicopter used in the project",
            "caption": "The current project helicopter.",
            "description": "Phase 1 is mostly for a demonstration that the helicopter can run autonomously off of waypoints. Thankfully ArduPilot can interface with the helicopters controller to produce GPS waypoints and give an easy UI for users imputing GPS coordinates."
          },
          {
            "id": "outdoor",
            "type": "video",
            "src": "assets/Helicopter_assets/IMG_6262.mov",
            "date": "",
            "title": "Outdoor project footage",
            "alt": "Outdoor footage of the RC helicopter",
            "caption": "Helicopter project recording.",
            "description": "An outdoor recording of the helicopter using manual control, this thing is loud!"
          }
        ]
      },
      {
        "title": "Phase 1 result: autonomous waypoint flight",
        "text": "The closing Phase 1 flight demonstrates GPS waypoint following and autonomous landing.",
        "media": [
          {
            "type": "video",
            "src": "assets/updates/drone/waypoints.mp4",
            "title": "Autonomous GPS flight and landing",
            "description": "The aircraft flew to programmed GPS coordinates and landed itself with no manual intervention. This recording is the ending demonstration for Phase 1.",
            "alt": "Autonomous GPS flight and landing",
            "caption": "Autonomous GPS flight and landing.",
            "date": "",
            "id": "autonomous-waypoints",
            "poster": "assets/updates/drone/waypoints-poster.webp"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "label": "Phase 2 · Drone platform",
    "title": "Drone: increased payload capacity",
    "summary": "The switch from the helicopter to a larger drone kit provides greater payload capacity and a bigger mounting platform for the next stage.",
    "sections": [
      {
        "title": "Switching from helicopter to drone",
        "text": "The helicopter completed the Phase 1 waypoint demonstration. For Phase 2, the system needed more payload capacity and a larger mounting platform for additional hardware, so I assembled a larger drone kit.",
        "media": [
          {
            "id": "larger-drone-kit",
            "type": "image",
            "src": "assets/Helicopter_assets/IMG_6326.JPG",
            "date": "",
            "title": "The assembled Phase 2 drone",
            "alt": "Photo of the larger drone kit built for Phase 2",
            "caption": "Larger drone platform for greater payload and mounting space.",
            "description": "Phase 2 uses a larger drone kit because the next experiments require more payload capacity and more physical space for mounting hardware. This photograph documents the newly built platform, separate from the helicopter used in Phase 1."
          }
        ]
      }
    ]
  },
  {
    "id": "3",
    "label": "Phase 3 · Drone detection",
    "title": "Drone: real-time object detection",
    "summary": "The planned Phase 3 extends the drone platform to camera-based object detection.",
    "sections": [
      {
        "title": "Next stage: onboard perception",
        "text": "Phase 3 is planned around selecting the camera, model, and onboard compute hardware, then integrating and evaluating real-time object detection. The schedule tracks this work separately; results will be added as testing is completed.",
        "media": []
      }
    ]
  }
];
