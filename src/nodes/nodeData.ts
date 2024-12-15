import { Node } from "../types/types";

//Coordinates * 100 for scaling purposes
export const nodesData: Node[] = [
  {
    id: "batuCaves",
    type: "station",
    data: {
      label: "Batu Caves",
      lines: [{ color: "blue", stationNumber: 1 }],
      connectedStations: [{ id: "tamanWahyu", time: 5 }],
    },
    position: { x: 6100, y: 600 },
  },
  {
    id: "tamanWahyu",
    type: "station",
    data: {
      label: "Taman Wahyu",
      lines: [{ color: "blue", stationNumber: 2 }],
      connectedStations: [
        { id: "batuCaves", time: 5 },
        { id: "kampungBatu", time: 3 },
      ],
    },
    position: { x: 6100, y: 1200 },
  },
  {
    id: "kampungBatu",
    type: "station",
    data: {
      label: "Kampung Batu",
      lines: [
        { color: "blue", stationNumber: 3 },
        { color: "yellow", stationNumber: 13 },
      ],
      connectedStations: [
        { id: "batuCaves", time: 8 },
        { id: "tamanWahyu", time: 3 },
        { id: "sriDelima", time: 4 },
        { id: "kentonmen", time: 4 },
        { id: "batuKentonmen", time: 5 },
      ],
    },
    position: { x: 6100, y: 1800 },
  },
  {
    id: "batuKentonmen",
    type: "station",
    data: {
      label: "Batu Kentonmen",
      lines: [{ color: "blue", stationNumber: 4 }],
      connectedStations: [
        { id: "kampungBatu", time: 5 },
        { id: "sentul", time: 4 },
      ],
    },
    position: { x: 6100, y: 2300 },
  },
  {
    id: "sentul",
    type: "station",
    data: {
      label: "Sentul",
      lines: [{ color: "blue", stationNumber: 5 }],
      connectedStations: [
        { id: "batuKentonmen", time: 4 },
        { id: "putra", time: 5 },
      ],
    },
    position: { x: 6100, y: 2700 },
  },
  {
    id: "putra",
    type: "station",
    data: {
      label: "Putra",
      lines: [
        { color: "blue", stationNumber: 6 },
        { color: "red", stationNumber: 12 },
      ],
      connectedStations: [
        { id: "sentul", time: 5 },
        { id: "bankNegara", time: 4 },
        { id: "segambut", time: 3 },
      ],
    },
    position: { x: 6100, y: 3400 },
  },
  {
    id: "bankNegara",
    type: "station",
    data: {
      label: "Bank Negara",
      lines: [
        { color: "blue", stationNumber: 7 },
        { color: "red", stationNumber: 13 },
      ],
      connectedStations: [
        { id: "putra", time: 4 },
        { id: "kualaLumpur", time: 5 },
      ],
    },
    position: { x: 6100, y: 3900 },
  },
  {
    id: "kualaLumpur",
    type: "station",
    data: {
      label: "Kuala Lumpur",
      lines: [
        { color: "blue", stationNumber: 8 },
        { color: "red", stationNumber: 14 },
      ],
      connectedStations: [
        { id: "bankNegara", time: 5 },
        { id: "klSentral", time: 6 },
      ],
    },
    position: { x: 6100, y: 5300 },
  },
  {
    id: "klSentral",
    type: "station",
    data: {
      label: "KL Sentral",
      lines: [
        { color: "blue", stationNumber: 9 },
        { color: "red", stationNumber: 15 },
        { color: "pink", stationNumber: 15 },
        { color: "purple", stationNumber: 6 },
        { color: "aqua", stationNumber: 0 },
        { color: "gold", stationNumber: 3 },
      ],
      connectedStations: [
        { id: "kualaLumpur", time: 6 },
        { id: "midValley", time: 3 },
        { id: "bangsar", time: 4 },
        { id: "pasarSeni", time: 5 },
        { id: "abdullahHukum", time: 4 },
        { id: "bandarTasikSelatan", time: 5 },
        { id: "putrajayaSentral", time: 6 },
      ],
    },
    position: { x: 6100, y: 5800 },
  },
  {
    id: "midValley",
    type: "station",
    data: {
      label: "Mid Valley",
      lines: [{ color: "blue", stationNumber: 10 }],
      connectedStations: [
        { id: "klSentral", time: 3 },
        { id: "seputeh", time: 4 },
      ],
    },
    position: { x: 6600, y: 6000 },
  },
  {
    id: "seputeh",
    type: "station",
    data: {
      label: "Seputeh",
      lines: [{ color: "blue", stationNumber: 11 }],
      connectedStations: [
        { id: "midValley", time: 4 },
        { id: "salakSelatan", time: 5 },
      ],
    },
    position: { x: 7100, y: 6000 },
  },
  {
    id: "salakSelatan",
    type: "station",
    data: {
      label: "Salak Selatan",
      lines: [{ color: "blue", stationNumber: 12 }],
      connectedStations: [
        { id: "seputeh", time: 5 },
        { id: "bandarTasikSelatan", time: 4 },
      ],
    },
    position: { x: 9100, y: 6000 },
  },
  {
    id: "bandarTasikSelatan",
    type: "station",
    data: {
      label: "Bandar Tasilk Selatan",
      lines: [
        { color: "blue", stationNumber: 13 },
        { color: "aqua", stationNumber: 1 },
      ],
      connectedStations: [
        { id: "salakSelatan", time: 4 },
        { id: "serdang", time: 5 },
        { id: "klSentral", time: 5 },
      ],
    },
    position: { x: 9500, y: 6400 },
  },
  {
    id: "serdang",
    type: "station",
    data: {
      label: "Serdang",
      lines: [{ color: "blue", stationNumber: 14 }],
      connectedStations: [
        { id: "bandarTasikSelatan", time: 5 },
        { id: "kajang", time: 4 },
      ],
    },
    position: { x: 10100, y: 7100 },
  },
  {
    id: "kajang",
    type: "station",
    data: {
      label: "Kajang",
      lines: [
        { color: "blue", stationNumber: 15 },
        { color: "green", stationNumber: 35 },
      ],
      connectedStations: [
        { id: "serdang", time: 4 },
        { id: "kajang2", time: 3 },
        { id: "stadiumKajang", time: 4 },
      ],
    },
    position: { x: 10100, y: 7300 },
  },
  {
    id: "kajang2",
    type: "station",
    data: {
      label: "Kajang 2",
      lines: [{ color: "blue", stationNumber: 16 }],
      connectedStations: [
        { id: "kajang", time: 3 },
        { id: "ukm", time: 4 },
      ],
    },
    position: { x: 10100, y: 7500 },
  },
  {
    id: "ukm",
    type: "station",
    data: {
      label: "UKM",
      lines: [{ color: "blue", stationNumber: 17 }],
      connectedStations: [
        { id: "kajang2", time: 4 },
        { id: "bangi", time: 3 },
      ],
    },
    position: { x: 10100, y: 7700 },
  },
  {
    id: "bangi",
    type: "station",
    data: {
      label: "Bangi",
      lines: [{ color: "blue", stationNumber: 18 }],
      connectedStations: [
        { id: "ukm", time: 3 },
        { id: "batangBenar", time: 4 },
      ],
    },
    position: { x: 10100, y: 7900 },
  },
  {
    id: "batangBenar",
    type: "station",
    data: {
      label: "Batang Benar",
      lines: [{ color: "blue", stationNumber: 19 }],
      connectedStations: [
        { id: "bangi", time: 4 },
        { id: "nilai", time: 3 },
      ],
    },
    position: { x: 10100, y: 8100 },
  },
  {
    id: "nilai",
    type: "station",
    data: {
      label: "Nilai",
      lines: [{ color: "blue", stationNumber: 20 }],
      connectedStations: [
        { id: "batangBenar", time: 3 },
        { id: "labu", time: 4 },
      ],
    },
    position: { x: 10100, y: 8300 },
  },
  {
    id: "labu",
    type: "station",
    data: {
      label: "Labu",
      lines: [{ color: "blue", stationNumber: 21 }],
      connectedStations: [
        { id: "nilai", time: 4 },
        { id: "tiroi", time: 3 },
      ],
    },
    position: { x: 10100, y: 8500 },
  },
  {
    id: "tiroi",
    type: "station",
    data: {
      label: "Tiroi",
      lines: [{ color: "blue", stationNumber: 22 }],
      connectedStations: [
        { id: "labu", time: 3 },
        { id: "seremban", time: 4 },
      ],
    },
    position: { x: 10100, y: 8700 },
  },
  {
    id: "seremban",
    type: "station",
    data: {
      label: "Seremban",
      lines: [{ color: "blue", stationNumber: 23 }],
      connectedStations: [
        { id: "tiroi", time: 4 },
        { id: "senawang", time: 3 },
      ],
    },
    position: { x: 10100, y: 8900 },
  },
  {
    id: "senawang",
    type: "station",
    data: {
      label: "Senawang",
      lines: [{ color: "blue", stationNumber: 24 }],
      connectedStations: [
        { id: "seremban", time: 3 },
        { id: "sungaiGadut", time: 4 },
      ],
    },
    position: { x: 10100, y: 9100 },
  },
  {
    id: "sungaiGadut",
    type: "station",
    data: {
      label: "Sungai Gadut",
      lines: [{ color: "blue", stationNumber: 25 }],
      connectedStations: [
        { id: "senawang", time: 4 },
        { id: "rembau", time: 3 },
      ],
    },
    position: { x: 10100, y: 9300 },
  },
  {
    id: "rembau",
    type: "station",
    data: {
      label: "Rembau",
      lines: [{ color: "blue", stationNumber: 26 }],
      connectedStations: [
        { id: "sungaiGadut", time: 3 },
        { id: "pulauSebang", time: 4 },
      ],
    },
    position: { x: 10100, y: 9500 },
  },
  {
    id: "pulauSebang",
    type: "station",
    data: {
      label: "Pulau Sebang",
      lines: [{ color: "blue", stationNumber: 27 }],
      connectedStations: [{ id: "rembau", time: 4 }],
    },
    position: { x: 10600, y: 9500 },
  },
  // Additional color-specific stations
  {
    id: "sriDelima",
    type: "station",
    data: {
      label: "Sri Delima",
      lines: [{ color: "yellow", stationNumber: 12 }],
      connectedStations: [{ id: "kampungBatu", time: 4 }],
    },
    position: { x: 5900, y: 1500 },
  },
  {
    id: "kentonmen",
    type: "station",
    data: {
      label: "Kentonmen",
      lines: [{ color: "yellow", stationNumber: 12 }],
      connectedStations: [{ id: "kampungBatu", time: 4 }],
    },
    position: { x: 5900, y: 2300 },
  },
];
