import { Node } from "../types/types";

//Coordinates * 100 for scaling purposes
export const nodesData: Node[] = [
  {
    id: "batuCaves",
    type: "station",
    data: {
      label: "Batu Caves",
      lines: [{ color: "blue", stationNumber: 1 }],
      connectedStations: ["tamanWahyu"],
    },
    position: { x: 6100, y: 600 },
  },
  {
    id: "tamanWahyu",
    type: "station",
    data: {
      label: "Taman Wahyu",
      lines: [{ color: "blue", stationNumber: 2 }],
      connectedStations: ["batuCaves"],
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
      connectedStations: ["batuCaves", "tamanWahyu", "sriDelima", "kentonmen"],
    },
    position: { x: 6100, y: 1800 },
  },
  {
    id: "batuKentonmen",
    type: "station",
    data: {
      label: "Batu Kentonmen",
      lines: [{ color: "blue", stationNumber: 4 }],
      connectedStations: ["kampungBatu", "sentul"],
    },
    position: { x: 6100, y: 2300 },
  },
  {
    id: "sentul",
    type: "station",
    data: {
      label: "Sentul",
      lines: [{ color: "blue", stationNumber: 5 }],
      connectedStations: ["batuKentonmen", "putra"],
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
      connectedStations: ["sentul", "bankNegara", "segambut"],
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
      connectedStations: ["putra", "kualaLumpur"],
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
      connectedStations: ["bankNegara", "kualaLumpur"],
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
        { color: "aqua", stationNumber: 7 },
        { color: "gold", stationNumber: 3 },
      ],
      connectedStations: [
        "kualaLumpur",
        "midValley",
        "bangsar",
        "pasarSeni",
        "abdullahHukum",
        "bandarTasikSelatan",
        "putrajayaSentral",
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
      connectedStations: ["klSentral", "seputeh"],
    },
    position: { x: 6600, y: 6000 },
  },
  {
    id: "seputeh",
    type: "station",
    data: {
      label: "Seputeh",
      lines: [{ color: "blue", stationNumber: 11 }],
      connectedStations: ["midValley", "salakSelatan"],
    },
    position: { x: 7100, y: 6000 },
  },
  //yellow
  {
    id: "sriDelima",
    type: "station",
    data: {
      label: "Sri Delima",
      lines: [{ color: "yellow", stationNumber: 12 }],
      connectedStations: ["kampungBatu"],
    },
    position: { x: 5900, y: 1500 },
  },
  {
    id: "kentonmen",
    type: "station",
    data: {
      label: "Kentonmen",
      lines: [{ color: "yellow", stationNumber: 12 }],
      connectedStations: ["kampungBatu"],
    },
    position: { x: 5900, y: 2300 },
  },
  //red
  {
    id: "segambut",
    type: "station",
    data: {
      label: "Segambut",
      lines: [{ color: "red", stationNumber: 11 }],
      connectedStations: ["putra", "kepong"],
    },
    position: { x: 4700, y: 2200 },
  },
  {
    id: "bangsar",
    type: "station",
    data: {
      label: "Bangsar",
      lines: [{ color: "red", stationNumber: 11 }],
      connectedStations: ["klSentral", "abdullahHukum"],
    },
    position: { x: 6000, y: 6700 },
  },
];
