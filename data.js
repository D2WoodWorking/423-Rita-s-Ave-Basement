var APP_DATA = {
  "scenes": [
    {
      "id": "0-stair",
      "name": "Stair",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 1.513957339886554,
        "pitch": 0.2821791339011597,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.3205293445023827,
          "pitch": 0.3240385732468649,
          "rotation": 0.7853981633974483,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 3.095869436244884,
        "pitch": 0.46558693235696147,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.8305695238147859,
          "pitch": 0.5186021662613669,
          "rotation": 5.497787143782138,
          "target": "0-stair"
        },
        {
          "yaw": -1.404515679647126,
          "pitch": 0.8218510296663339,
          "rotation": 14.922565104551524,
          "target": "2-sofa-with-bar-table"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sofa-with-bar-table",
      "name": "Sofa with Bar table",
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
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.8994464781366602,
        "pitch": 0.3471972764087248,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.0044507561275218,
          "pitch": 0.14064951220036193,
          "rotation": 0,
          "target": "0-stair"
        },
        {
          "yaw": 0.8876127347009266,
          "pitch": 0.35383677883636544,
          "rotation": 5.497787143782138,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "423 Rita's Ave Basement",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
