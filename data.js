var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.4606014427281995,
        "pitch": 0,
        "fov": 1.2996675116209502
      },
      "linkHotspots": [
        {
          "yaw": 1.2963580683750866,
          "pitch": 0.26622254404090384,
          "rotation": 25.918139392115812,
          "target": "1-ea-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5541273710408845,
          "pitch": -0.14333843530582513,
          "title": "Welcome to Engineering",
          "text": "Here is the premise of CDE"
        },
        {
          "yaw": -3.1232952706556354,
          "pitch": -0.04061104484966904,
          "title": "UCC",
          "text": "Text"
        },
        {
          "yaw": -1.90890251878157,
          "pitch": 0.08865962832227936,
          "title": "Road to NUS",
          "text": "Straight to UH, Kent ridge. Right to E7."
        },
        {
          "yaw": -0.8229109996643373,
          "pitch": -0.045375147921213,
          "title": "To E6,E7,E8, T-lab",
          "text": "Text"
        },
        {
          "yaw": 1.4707301027840591,
          "pitch": -0.008568377377050851,
          "title": "To EA",
          "text": "Go straight, and go up at the stairs leftside"
        }
      ]
    },
    {
      "id": "1-ea-outside",
      "name": "EA Outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.020556509700485393,
        "pitch": 0,
        "fov": 1.2996675116209502
      },
      "linkHotspots": [
        {
          "yaw": 0.17483740658042457,
          "pitch": -0.004995386714760741,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.7450391646190866,
          "pitch": 0.11651406298131306,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5209999512404373,
          "pitch": -0.14063350611895942,
          "title": "EA Outside&nbsp;",
          "text": "You will find some auditoriums in this building&nbsp;"
        },
        {
          "yaw": -1.7183954495024913,
          "pitch": -0.03293458717632447,
          "title": "To UCC",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.662247470789067,
          "pitch": 0.1392528097492658,
          "rotation": 5.497787143782138,
          "target": "1-ea-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3848802635960649,
          "pitch": -0.3175871458844277,
          "title": "Coffee shop",
          "text": "Text"
        },
        {
          "yaw": -2.600024272087744,
          "pitch": -0.02893755196529213,
          "title": "Exit to T-lab",
          "text": "Text"
        },
        {
          "yaw": 2.504147393532066,
          "pitch": -0.033421583583924885,
          "title": "Exit to Japanese Primary Schoool",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "NUS_Campus",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
