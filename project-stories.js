/* Text edited locally through Start Portfolio Editor.bat. */
window.PROJECT_STORIES = {
  "swing-tracker": [
    {
      "title": "Capturing 60 FPS using two ESP32s",
      "text": "A LiDAR beam-break triggers and an ESP32 camera were used to capture batting clips without searching through a long recording of the parts you want to analyze.",
      "media": [
        {
          "id": "bench",
          "type": "video",
          "src": "assets/Swing_Tracker_assets/IMG_2722.mp4",
          "date": "",
          "title": "The hardware and bench setup",
          "alt": "Swing Tracker breadboard, wiring, electronics and laptop",
          "caption": "Swing Tracker workbench demonstration.",
          "description": "This was the proof of concept setup where a user can use a LiDAR as a beam break to trigger the first ESP32 to send a signal to the next ESP32 to trigger the camera at 60 FPS. This was a demonstration that the swing during contact could be captured quickly using relatively inexpensive equipment."
        },
        {
          "id": "capture",
          "type": "video",
          "src": "assets/Swing_Tracker_assets/Video.mp4",
          "date": "",
          "title": "Reviewing the camera output",
          "alt": "Camera output displayed on the development laptop",
          "caption": "Swing Tracker camera-output recording.",
          "description": "This second clip focuses on the camera output displayed on the laptop. When I broke the beam in the first video I was moving my other hand down to show the motion capture; this project can be revisited for improvement but was more of a passion project and learning experience more than anything."
        }
      ]
    }
  ],
  "helicopter": [
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
    }
  ]
};
