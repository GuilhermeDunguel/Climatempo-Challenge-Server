import express from 'express'
// const cors = require('cors');

const app = express()

// const corsOptions = {
// 	origin: 'http://localhost:5173',
// 	optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions))

app.get("/locales", (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json([
      {
        "id": 3735,
        "name": "Osasco",
        "state": "SP",
        "latitude": -23.5320,
        "longitude": -46.7920
      },
      {
        "id": 3477,
        "name": "São Paulo",
        "state": "SP",
        "latitude": -23.5480,
        "longitude": -46.6360
      }
    ]);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error")
  }
})

app.get("/weather", (req, res) => {
  try {
    res.setHeader('Content-Type', 'text/html')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json([
      {
        "period": {
          "begin": "2017-02-01",
          "end": "2017-02-07"
        },
        "locale": {
          "id": 3735,
          "name": "Osasco",
          "state": "SP",
          "latitude": -23.5320,
          "longitude": -46.7920
        },
        "weather": [
          {
            "date": "2017-02-01",
            "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
            "temperature": {
              "min": 20,
              "max": 28
            },
            "rain": {
              "probability": 60,
              "precipitation": 20
            }
          },
          {
            "date": "2017-02-02",
            "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
            "temperature": {
              "min": 21,
              "max": 30
            },
            "rain": {
              "probability": 60,
              "precipitation": 10
            }
          },
          {
            "date": "2017-02-03",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 22,
              "max": 31
            },
            "rain": {
              "probability": 60,
              "precipitation": 15
            }
          },
          {
            "date": "2017-02-04",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 22,
              "max": 32
            },
            "rain": {
              "probability": 60,
              "precipitation": 16
            }
          },
          {
            "date": "2017-02-05",
            "text": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
            "temperature": {
              "min": 23,
              "max": 32
            },
            "rain": {
              "probability": 67,
              "precipitation": 19
            }
          },
          {
            "date": "2017-02-06",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 22,
              "max": 33
            },
            "rain": {
              "probability": 60,
              "precipitation": 8
            }
          },
          {
            "date": "2017-02-07",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 25,
              "max": 30
            },
            "rain": {
              "probability": 60,
              "precipitation": "11"
            }
          }
        ]
      },
      {
        "period": {
          "begin": "2017-02-01",
          "end": "2017-02-07"
        },
        "locale": {
          "id": 3477,
          "name": "São Paulo",
          "state": "SP",
          "latitude": -23.5480,
          "longitude": -46.6360
        },
        "weather": [
          {
            "date": "2017-02-01",
            "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
            "temperature": {
              "min": 19,
              "max": 27
            },
            "rain": {
              "probability": 60,
              "precipitation": 20
            }
          },
          {
            "date": "2017-02-02",
            "text": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
            "temperature": {
              "min": 20,
              "max": 29
            },
            "rain": {
              "probability": 60,
              "precipitation": 15
            }
          },
          {
            "date": "2017-02-03",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 21,
              "max": 30
            },
            "rain": {
              "probability": 60,
              "precipitation": 15
            }
          },
          {
            "date": "2017-02-04",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 21,
              "max": 31
            },
            "rain": {
              "probability": 60,
              "precipitation": 11
            }
          },
          {
            "date": "2017-02-05",
            "text": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
            "temperature": {
              "min": 22,
              "max": 31
            },
            "rain": {
              "probability": 67,
              "precipitation": 16
            }
          },
          {
            "date": "2017-02-06",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 21,
              "max": 32
            },
            "rain": {
              "probability": 60,
              "precipitation": "8"
            }
          },
          {
            "date": "2017-02-07",
            "text": "Sol com algumas nuvens. Chove rápido durante o dia e à noite.",
            "temperature": {
              "min": 22,
              "max": 33
            },
            "rain": {
              "probability": 60,
              "precipitation": 26
            }
          }
        ]
      }
    ] 
  )
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error")
  }
})

app.listen(3000, () => console.log(`Server is running in port 3000`))

