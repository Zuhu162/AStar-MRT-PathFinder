import { Node } from "../types/types";

//Coordinates * 100 for scaling purposes
export const nodesData: Node[] = [
  {
    id: "batuCaves",
    type: "station",
    data: {
      label: "Batu Caves",
      lines: [{ color: "blue", stationNumber: 1 }],
      connectedStations: [{ id: "tamanWahyu", time: 4 }],
    },
    position: { x: 6100, y: 800 },
  },
  {
    id: "tamanWahyu",
    type: "station",
    data: {
      label: "Taman Wahyu",
      lines: [{ color: "blue", stationNumber: 2 }],
      connectedStations: [
        { id: "batuCaves", time: 4 },
        { id: "kampungBatu", time: 3 },
      ],
    },
    position: { x: 6100, y: 1400 },
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
        { id: "tamanWahyu", time: 3 },
        { id: "sriDelima", time: 2 },
        { id: "kentonmen", time: 2 },
        { id: "batuKentonmen", time: 2 },
      ],
    },
    position: { x: 6100, y: 2000 },
  },
  {
    id: "batuKentonmen",
    type: "station",
    data: {
      label: "Batu Kentonmen",
      lines: [{ color: "blue", stationNumber: 4 }],
      connectedStations: [
        { id: "kampungBatu", time: 2 },
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
        { id: "batuKentonmen", time: 2 },
        { id: "putra", time: 6 },
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
        { id: "sentul", time: 6 },
        { id: "bankNegara", time: 3 },
        { id: "segambut", time: 4 },
      ],
    },
    position: { x: 6100, y: 3300 },
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
        { id: "putra", time: 3 },
        { id: "kualaLumpur", time: 4 },
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
        { id: "bankNegara", time: 4 },
        { id: "klSentral", time: 5 },
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
        { color: "magenta", stationNumber: 15 },
        { color: "purple", stationNumber: 1 },
        { color: "aqua", stationNumber: 0 },
        { color: "gold", stationNumber: 3 },
      ],
      connectedStations: [
        { id: "kualaLumpur", time: 6 },
        { id: "midValley", time: 3 },
        { id: "bangsar", time: 2 },
        { id: "pasarSeni", time: 4 },
        { id: "abdullahHukum", time: 4 },
        { id: "bandarTasikSelatan", time: 20 },
        { id: "KLIA1", time: 30 },
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
        { color: "brown", stationNumber: 16 },
      ],
      connectedStations: [
        { id: "salakSelatan", time: 4 },
        { id: "serdang", time: 5 },
        { id: "putrajayaSentral", time: 12 },
        { id: "klSentral", time: 20 },
        { id: "sungaiBesi", time: 3 },
        { id: "bandarTunRazak", time: 1 },
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
        { color: "green", stationNumber: 32 },
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
  //Green Line
  {
    id: "stadiumKajang",
    type: "station",
    data: {
      label: "Sungai Kajang",
      lines: [{ color: "green", stationNumber: 31 }],
      connectedStations: [
        { id: "sungaiJernih", time: 3 },
        { id: "kajang", time: 2 },
      ],
    },
    position: { x: 10900, y: 6900 },
  },
  {
    id: "sungaiJernih",
    type: "station",
    data: {
      label: "Sungai Jernih",
      lines: [{ color: "green", stationNumber: 30 }],
      connectedStations: [
        { id: "bukitDukung", time: 4 },
        { id: "stadiumKajang", time: 3 },
      ],
    },
    position: { x: 10900, y: 6600 },
  },
  {
    id: "bukitDukung",
    type: "station",
    data: {
      label: "Bukit Dukung",
      lines: [{ color: "green", stationNumber: 29 }],
      connectedStations: [
        { id: "batu11Cheras", time: 3 },
        { id: "sungaiJernih", time: 4 },
      ],
    },
    position: { x: 10900, y: 6300 },
  },
  {
    id: "batu11Cheras",
    type: "station",
    data: {
      label: "Batu 11 Cheras",
      lines: [{ color: "green", stationNumber: 28 }],
      connectedStations: [
        { id: "bandarTunHosseinOnn", time: 3 },
        { id: "bukitDukung", time: 3 },
      ],
    },
    position: { x: 10900, y: 6000 },
  },
  {
    id: "bandarTunHosseinOnn",
    type: "station",
    data: {
      label: "Bandar Tun Hussein Onn",
      lines: [{ color: "green", stationNumber: 27 }],
      connectedStations: [
        { id: "sriRaya", time: 3 },
        { id: "batu11Cheras", time: 3 },
      ],
    },
    position: { x: 10900, y: 5700 },
  },
  {
    id: "sriRaya",
    type: "station",
    data: {
      label: "Sri Raya",
      lines: [{ color: "green", stationNumber: 26 }],
      connectedStations: [
        { id: "tamanSuntex", time: 4 },
        { id: "bandarTunHosseinOnn", time: 3 },
      ],
    },
    position: { x: 10900, y: 5500 },
  },
  {
    id: "tamanSuntex",
    type: "station",
    data: {
      label: "Taman Suntex",
      lines: [{ color: "green", stationNumber: 25 }],
      connectedStations: [
        { id: "tamanConnaught", time: 4 },
        { id: "sriRaya", time: 2 },
      ],
    },
    position: { x: 10900, y: 5200 },
  },
  {
    id: "tamanConnaught",
    type: "station",
    data: {
      label: "Taman Connaught",
      lines: [{ color: "green", stationNumber: 24 }],
      connectedStations: [
        { id: "tamanMutiara", time: 3 },
        { id: "tamanSuntex", time: 4 },
      ],
    },
    position: { x: 10900, y: 4900 },
  },
  {
    id: "tamanMutiara",
    type: "station",
    data: {
      label: "Taman Mutiara",
      lines: [{ color: "green", stationNumber: 23 }],
      connectedStations: [
        { id: "tamanMidah", time: 3 },
        { id: "tamanConnaught", time: 3 },
      ],
    },
    position: { x: 10900, y: 4600 },
  },
  {
    id: "tamanMidah",
    type: "station",
    data: {
      label: "Taman Midah",
      lines: [{ color: "green", stationNumber: 22 }],
      connectedStations: [
        { id: "tamanPertama", time: 3 },
        { id: "tamanMutiara", time: 3 },
      ],
    },
    position: { x: 10900, y: 4300 },
  },
  {
    id: "tamanPertama",
    type: "station",
    data: {
      label: "Taman Pertama",
      lines: [{ color: "green", stationNumber: 21 }],
      connectedStations: [
        { id: "tamanMidah", time: 3 },
        { id: "maluri", time: 1 },
      ],
    },
    position: { x: 10900, y: 4000 },
  },
  {
    id: "maluri",
    type: "station",
    data: {
      label: "Maluri",
      lines: [
        { color: "green", stationNumber: 20 },
        { color: "orange", stationNumber: 13 },
      ],
      connectedStations: [
        { id: "pandanJaya", time: 2 },
        { id: "cochrane", time: 2 },
        { id: "miharja", time: 3 },
        { id: "tamanPertama", time: 3 },
      ],
    },
    position: { x: 10500, y: 3800 },
  },
  {
    id: "cochrane",
    type: "station",
    data: {
      label: "Cochrane",
      lines: [{ color: "green", stationNumber: 19 }],
      connectedStations: [
        { id: "trx", time: 3 },
        { id: "maluri", time: 2 },
      ],
    },
    position: { x: 10200, y: 3800 },
  },
  {
    id: "bukitBintang",
    type: "station",
    data: {
      label: "Bukit Bintang",
      lines: [{ color: "green", stationNumber: 17 }],
      connectedStations: [
        { id: "merdeka", time: 3 },
        { id: "trx", time: 3 },
      ],
    },
    position: { x: 8600, y: 4000 },
  },
  {
    id: "merdeka",
    type: "station",
    data: {
      label: "Merdeka",
      lines: [{ color: "green", stationNumber: 16 }],
      connectedStations: [
        { id: "pasarSeni", time: 3 },
        { id: "bukitBintang", time: 3 },
      ],
    },
    position: { x: 8100, y: 4800 },
  },
  {
    id: "muziumNegara",
    type: "station",
    data: {
      label: "Muzium Negara",
      lines: [{ color: "green", stationNumber: 14 }],
      connectedStations: [
        { id: "semantan", time: 4 },
        { id: "pasarSeni", time: 3 },
      ],
    },
    position: { x: 5200, y: 5400 },
  },
  {
    id: "semantan",
    type: "station",
    data: {
      label: "Semantan",
      lines: [{ color: "green", stationNumber: 13 }],
      connectedStations: [
        { id: "pusatBandarDamansara", time: 4 },
        { id: "muziumNegara", time: 4 },
      ],
    },
    position: { x: 4600, y: 5400 },
  },
  {
    id: "pusatBandarDamansara",
    type: "station",
    data: {
      label: "Pusat Bandar Damansara",
      lines: [{ color: "green", stationNumber: 12 }],
      connectedStations: [
        { id: "phileoDamansara", time: 4 },
        { id: "semantan", time: 4 },
      ],
    },
    position: { x: 3700, y: 5400 },
  },
  {
    id: "phileoDamansara",
    type: "station",
    data: {
      label: "Phileo Damansara",
      lines: [{ color: "green", stationNumber: 11 }],
      connectedStations: [
        { id: "tamanTunDrIslam", time: 2 },
        { id: "pusatBandarDamansara", time: 4 },
      ],
    },
    position: { x: 3200, y: 5100 },
  },
  {
    id: "tamanTunDrIslam",
    type: "station",
    data: {
      label: "Taman Tun Dr. Ismail",
      lines: [{ color: "green", stationNumber: 10 }],
      connectedStations: [
        { id: "bandarUtama", time: 3 },
        { id: "phileoDamansara", time: 2 },
      ],
    },
    position: { x: 3200, y: 4800 },
  },
  {
    id: "bandarUtama",
    type: "station",
    data: {
      label: "Bandar Utama",
      lines: [{ color: "green", stationNumber: 9 }],
      connectedStations: [
        { id: "mutiaraDamansara", time: 3 },
        { id: "tamanTunDrIslam", time: 3 },
        { id: "kayuAra", time: 3 },
      ],
    },
    position: { x: 3200, y: 4600 },
  },
  {
    id: "mutiaraDamansara",
    type: "station",
    data: {
      label: "Mutiara Damansara",
      lines: [{ color: "green", stationNumber: 8 }],
      connectedStations: [
        { id: "surian", time: 2 },
        { id: "bandarUtama", time: 3 },
      ],
    },
    position: { x: 3200, y: 4300 },
  },
  {
    id: "surian",
    type: "station",
    data: {
      label: "Surian",
      lines: [{ color: "green", stationNumber: 7 }],
      connectedStations: [
        { id: "kotaDamansara", time: 3 },
        { id: "mutiaraDamansara", time: 2 },
      ],
    },
    position: { x: 3200, y: 4000 },
  },
  {
    id: "kotaDamansara",
    type: "station",
    data: {
      label: "Kota Damansara",
      lines: [{ color: "green", stationNumber: 6 }],
      connectedStations: [
        { id: "kwasaSentral", time: 2 },
        { id: "surian", time: 3 },
      ],
    },
    position: { x: 3200, y: 3700 },
  },
  {
    id: "kwasaSentral",
    type: "station",
    data: {
      label: "Kwasa Sentral",
      lines: [{ color: "green", stationNumber: 5 }],
      connectedStations: [
        { id: "kwasaDamansara", time: 2 },
        { id: "kotaDamansara", time: 3 },
      ],
    },
    position: { x: 3200, y: 3500 },
  },
  {
    id: "kwasaDamansara",
    type: "station",
    data: {
      label: "Kwasa Damansara",
      lines: [
        { color: "yellow", stationNumber: 2 },
        { color: "green", stationNumber: 4 },
      ],
      connectedStations: [
        { id: "kampungSelamat", time: 3 },
        { id: "kwasaSentral", time: 2 },
      ],
    },
    position: { x: 3200, y: 3100 },
  },
  //Yellow Line
  {
    id: "kampungSelamat",
    type: "station",
    data: {
      label: "Kampung Selamat",
      lines: [{ color: "yellow", stationNumber: 3 }],
      connectedStations: [
        { id: "sungaiBuloh", time: 3 },
        { id: "kwasaDamansara", time: 3 },
      ],
    },
    position: { x: 3200, y: 2800 },
  },
  {
    id: "damansaraDamai",
    type: "station",
    data: {
      label: "Damansara Damai",
      lines: [{ color: "yellow", stationNumber: 5 }],
      connectedStations: [
        { id: "sriDamansaraBarat", time: 2 },
        { id: "sungaiBuloh", time: 2 },
      ],
    },
    position: { x: 3200, y: 1300 },
  },
  {
    id: "sriDamansaraBarat",
    type: "station",
    data: {
      label: "Sri Damansara Barat",
      lines: [{ color: "yellow", stationNumber: 6 }],
      connectedStations: [
        { id: "sriDamansaraSentral", time: 2 },
        { id: "damansaraDamai", time: 2 },
      ],
    },
    position: { x: 3200, y: 1000 },
  },
  {
    id: "sriDamansaraSentral",
    type: "station",
    data: {
      label: "Sri Damansara Sentral",
      lines: [{ color: "yellow", stationNumber: 7 }],
      connectedStations: [
        { id: "sriDamansaraTimur", time: 2 },
        { id: "sriDamansaraBarat", time: 2 },
      ],
    },
    position: { x: 3700, y: 700 },
  },
  {
    id: "sriDamansaraTimur",
    type: "station",
    data: {
      label: "Sri Damansara Timur",
      lines: [{ color: "yellow", stationNumber: 8 }],
      connectedStations: [
        { id: "metroPrima", time: 2 },
        { id: "sriDamansaraSentral", time: 2 },
      ],
    },
    position: { x: 4300, y: 700 },
  },
  {
    id: "metroPrima",
    type: "station",
    data: {
      label: "Metro Prima",
      lines: [{ color: "yellow", stationNumber: 9 }],
      connectedStations: [
        { id: "kepongBaru", time: 2 },
        { id: "sriDamansaraTimur", time: 2 },
      ],
    },
    position: { x: 4900, y: 700 },
  },
  {
    id: "kepongBaru",
    type: "station",
    data: {
      label: "Kepong Baru",
      lines: [{ color: "yellow", stationNumber: 10 }],
      connectedStations: [
        { id: "jinjang", time: 2 },
        { id: "metroPrima", time: 2 },
      ],
    },
    position: { x: 5200, y: 700 },
  },
  {
    id: "jinjang",
    type: "station",
    data: {
      label: "Jinjang",
      lines: [{ color: "yellow", stationNumber: 11 }],
      connectedStations: [
        { id: "sriDelima", time: 1 },
        { id: "kepongBaru", time: 2 },
      ],
    },
    position: { x: 5500, y: 700 },
  },
  {
    id: "sriDelima",
    type: "station",
    data: {
      label: "Sri Delima",
      lines: [{ color: "yellow", stationNumber: 12 }],
      connectedStations: [
        { id: "kampungBatu", time: 2 },
        { id: "jinjang", time: 1 },
      ],
    },
    position: { x: 5700, y: 1100 },
  },
  {
    id: "kentonmen",
    type: "station",
    data: {
      label: "Kentonmen",
      lines: [{ color: "yellow", stationNumber: 14 }],
      connectedStations: [
        { id: "kampungBatu", time: 2 },
        { id: "jalanIpoh", time: 2 },
      ],
    },
    position: { x: 5900, y: 2300 },
  },
  {
    id: "jalanIpoh",
    type: "station",
    data: {
      label: "Jalan Ipoh",
      lines: [{ color: "yellow", stationNumber: 15 }],
      connectedStations: [
        { id: "kentonmen", time: 2 },
        { id: "sentulBarat", time: 3 },
      ],
    },
    position: { x: 5900, y: 2600 },
  },
  {
    id: "sentulBarat",
    type: "station",
    data: {
      label: "Sentul Barat",
      lines: [{ color: "yellow", stationNumber: 16 }],
      connectedStations: [
        { id: "jalanIpoh", time: 3 },
        { id: "titiwangsa", time: 2 },
      ],
    },
    position: { x: 5900, y: 2900 },
  },
  {
    id: "titiwangsa",
    type: "station",
    data: {
      label: "Titiwangsa",
      lines: [
        { color: "yellow", stationNumber: 17 },
        { color: "brown", stationNumber: 4 },
        { color: "orange", stationNumber: 3 },
        { color: "chartreuse", stationNumber: 11 },
      ],
      connectedStations: [
        { id: "sentulBarat", time: 2 },
        { id: "hospitalKualaLumpur", time: 2 },
        { id: "sentul-SentulTimur", time: 2 },
        { id: "pwtc", time: 2 },
        { id: "chowKit", time: 3 },
      ],
    },
    position: { x: 6900, y: 3000 },
  },
  {
    id: "hospitalKualaLumpur",
    type: "station",
    data: {
      label: "Hospital Kuala Lumpur",
      lines: [{ color: "yellow", stationNumber: 18 }],
      connectedStations: [
        { id: "titiwangsa", time: 2 },
        { id: "rajaUda", time: 2 },
      ],
    },
    position: { x: 8100, y: 3000 },
  },
  {
    id: "rajaUda",
    type: "station",
    data: {
      label: "Raja Uda",
      lines: [{ color: "yellow", stationNumber: 19 }],
      connectedStations: [
        { id: "hospitalKualaLumpur", time: 2 },
        { id: "ampangPark", time: 2 },
      ],
    },
    position: { x: 8500, y: 3000 },
  },
  {
    id: "ampangPark",
    type: "station",
    data: {
      label: "Ampang Park",
      lines: [
        { color: "yellow", stationNumber: 20 },
        { color: "magenta", stationNumber: 9 },
      ],
      connectedStations: [
        { id: "rajaUda", time: 2 },
        { id: "persianKLCC", time: 2 },
        { id: "KLCC", time: 2 },
        { id: "damai", time: 3 },
      ],
    },
    position: { x: 8800, y: 3000 },
  },
  {
    id: "persianKLCC",
    type: "station",
    data: {
      label: "Persian KLCC",
      lines: [{ color: "yellow", stationNumber: 21 }],
      connectedStations: [
        { id: "ampangPark", time: 2 },
        { id: "conlay", time: 1 },
      ],
    },
    position: { x: 9800, y: 3400 },
  },
  {
    id: "conlay",
    type: "station",
    data: {
      label: "Conlay",
      lines: [{ color: "yellow", stationNumber: 22 }],
      connectedStations: [
        { id: "persianKLCC", time: 1 },
        { id: "trx", time: 2 },
      ],
    },
    position: { x: 9800, y: 3800 },
  },
  {
    id: "trx",
    type: "station",
    data: {
      label: "Tun Razak Exchange",
      lines: [
        { color: "yellow", stationNumber: 23 },
        { color: "green", stationNumber: 18 },
      ],
      connectedStations: [
        { id: "conlay", time: 2 },
        { id: "chanSowLin", time: 2 },
        { id: "cochrane", time: 3 },
        { id: "bukitBintang", time: 3 },
      ],
    },
    position: { x: 9800, y: 3800 },
  },
  {
    id: "chanSowLin",
    type: "station",
    data: {
      label: "Chan Sow Lin",
      lines: [
        { color: "yellow", stationNumber: 24 },
        { color: "brown", stationNumber: 12 },
        { color: "orange", stationNumber: 11 },
      ],
      connectedStations: [
        { id: "trx", time: 2 },
        { id: "kuchai", time: 6 },
        { id: "cheras", time: 2 },
        { id: "miharja", time: 1 },
        { id: "pudu", time: 2 },
      ],
    },
    position: { x: 9800, y: 4500 },
  },
  {
    id: "kuchai",
    type: "station",
    data: {
      label: "Kuchai",
      lines: [{ color: "yellow", stationNumber: 25 }],
      connectedStations: [
        { id: "chanSowLin", time: 6 },
        { id: "tamanNagaEmas", time: 2 },
      ],
    },
    position: { x: 8400, y: 7300 },
  },
  {
    id: "tamanNagaEmas",
    type: "station",
    data: {
      label: "Taman Naga Emas",
      lines: [{ color: "yellow", stationNumber: 26 }],
      connectedStations: [
        { id: "kuchai", time: 2 },
        { id: "sungaiBesi", time: 3 },
      ],
    },
    position: { x: 8600, y: 7700 },
  },
  {
    id: "sungaiBesi",
    type: "station",
    data: {
      label: "Sungai Besi",
      lines: [
        { color: "yellow", stationNumber: 27 },
        { color: "brown", stationNumber: 17 },
      ],
      connectedStations: [
        { id: "tamanNagaEmas", time: 3 },
        { id: "serdangRayaUtara", time: 3 },
        { id: "bukitJalil", time: 2 },
        { id: "bandarTasikSelatan", time: 2 },
      ],
    },
    position: { x: 8900, y: 7900 },
  },
  {
    id: "serdangRayaUtara",
    type: "station",
    data: {
      label: "Serdang Raya Utara",
      lines: [{ color: "yellow", stationNumber: 28 }],
      connectedStations: [
        { id: "sungaiBesi", time: 3 },
        { id: "serdangRayaSelatan", time: 2 },
      ],
    },
    position: { x: 8900, y: 8100 },
  },
  {
    id: "serdangRayaSelatan",
    type: "station",
    data: {
      label: "Serdang Raya Selatan",
      lines: [{ color: "yellow", stationNumber: 29 }],
      connectedStations: [
        { id: "serdangRayaUtara", time: 2 },
        { id: "serdangjaya", time: 2 },
      ],
    },
    position: { x: 8900, y: 8300 },
  },
  {
    id: "serdangjaya",
    type: "station",
    data: {
      label: "Serdang Jaya",
      lines: [{ color: "yellow", stationNumber: 30 }],
      connectedStations: [
        { id: "serdangRayaSelatan", time: 2 },
        { id: "UPM", time: 2 },
      ],
    },
    position: { x: 8900, y: 8600 },
  },
  {
    id: "UPM",
    type: "station",
    data: {
      label: "UPM",
      lines: [{ color: "yellow", stationNumber: 31 }],
      connectedStations: [
        { id: "serdangjaya", time: 2 },
        { id: "tamanEquine", time: 5 },
      ],
    },
    position: { x: 8900, y: 8900 },
  },
  {
    id: "tamanEquine",
    type: "station",
    data: {
      label: "Taman Equine",
      lines: [{ color: "yellow", stationNumber: 32 }],
      connectedStations: [
        { id: "UPM", time: 5 },
        { id: "16Sierra", time: 2 },
      ],
    },
    position: { x: 8900, y: 9100 },
  },
  {
    id: "16Sierra",
    type: "station",
    data: {
      label: "16 Sierra",
      lines: [{ color: "yellow", stationNumber: 33 }],
      connectedStations: [
        { id: "tamanEquine", time: 2 },
        { id: "cyberjayaUtara", time: 3 },
      ],
    },
    position: { x: 8900, y: 9300 },
  },
  {
    id: "cyberjayaUtara",
    type: "station",
    data: {
      label: "Cyberjaya Utara",
      lines: [{ color: "yellow", stationNumber: 34 }],
      connectedStations: [
        { id: "16Sierra", time: 3 },
        { id: "cyberjayaCityCentre", time: 3 },
      ],
    },
    position: { x: 8900, y: 9500 },
  },
  {
    id: "cyberjayaCityCentre",
    type: "station",
    data: {
      label: "Cyberjaya City Centre",
      lines: [{ color: "yellow", stationNumber: 35 }],
      connectedStations: [
        { id: "cyberjayaUtara", time: 3 },
        { id: "putrajayaSentral", time: 1 },
      ],
    },
    position: { x: 8900, y: 9700 },
  },
  {
    id: "putrajayaSentral",
    type: "station",
    data: {
      label: "Putrajaya Sentral",
      lines: [
        { color: "yellow", stationNumber: 36 },
        { color: "aqua", stationNumber: 2 },
      ],
      connectedStations: [
        { id: "cyberjayaCityCentre", time: 1 },
        { id: "salakTinggi", time: 10 },
        { id: "bandarTasikSelatan", time: 12 },
      ],
    },
    position: { x: 8900, y: 9900 },
  },
  {
    id: "salakTinggi",
    type: "station",
    data: {
      label: "Salak Tinggi",
      lines: [{ color: "aqua", stationNumber: 3 }],
      connectedStations: [
        { id: "putrajayaSentral", time: 10 },
        { id: "KLIAT1", time: 7 },
      ],
    },
    position: { x: 8900, y: 10300 },
  },
  {
    id: "KLIAT1",
    type: "station",
    data: {
      label: "KLIAT1",
      lines: [
        { color: "aqua", stationNumber: 4 },
        { color: "purple", stationNumber: 2 },
      ],
      connectedStations: [
        { id: "salakTinggi", time: 7 },
        { id: "KLIAT2", time: 3 },
        { id: "KLIAT2", time: 10 },
        { id: "klSentral", time: 30 },
      ],
    },
    position: { x: 8900, y: 10500 },
  },
  {
    id: "KLIAT2",
    type: "station",
    data: {
      label: "KLIAT2",
      lines: [
        { color: "aqua", stationNumber: 5 },
        { color: "purple", stationNumber: 3 },
      ],
      connectedStations: [
        { id: "KLIAT1", time: 3 },
        { id: "KLIAT1", time: 2 },
      ],
    },
    position: { x: 8000, y: 10800 },
  },
  {
    id: "segambut",
    type: "station",
    data: {
      label: "Segambut",
      lines: [{ color: "red", stationNumber: 11 }],
      connectedStations: [
        { id: "putra", time: 4 },
        { id: "kepong", time: 5 },
      ],
    },
    position: { x: 4800, y: 2600 },
  },
  {
    id: "kepong",
    type: "station",
    data: {
      label: "Kepong",
      lines: [{ color: "red", stationNumber: 10 }],
      connectedStations: [
        { id: "segambut", time: 5 },
        { id: "kepongSentral", time: 3 },
      ],
    },
    position: { x: 4800, y: 2100 },
  },
  {
    id: "kepongSentral",
    type: "station",
    data: {
      label: "Kepong Sentral",
      lines: [{ color: "red", stationNumber: 9 }],
      connectedStations: [
        { id: "kepong", time: 3 },
        { id: "sungaiBuloh", time: 7 },
      ],
    },
    position: { x: 4500, y: 1000 },
  },
  {
    id: "sungaiBuloh",
    type: "station",
    data: {
      label: "Sungai Buloh",
      lines: [
        { color: "red", stationNumber: 8 },
        { color: "yellow", stationNumber: 4 },
      ],
      connectedStations: [
        { id: "kepongSentral", time: 7 },
        { id: "kuang", time: 8 },
        { id: "damansaraDamai", time: 2 },
        { id: "kampungSelamat", time: 3 },
      ],
    },
    position: { x: 3000, y: 2400 },
  },
  {
    id: "kuang",
    type: "station",
    data: {
      label: "Kuang",
      lines: [{ color: "red", stationNumber: 7 }],
      connectedStations: [
        { id: "sungaiBuloh", time: 8 },
        { id: "rawang", time: 8 },
      ],
    },
    position: { x: 2100, y: 2400 },
  },
  {
    id: "rawang",
    type: "station",
    data: {
      label: "Rawang",
      lines: [{ color: "red", stationNumber: 6 }],
      connectedStations: [
        { id: "kuang", time: 8 },
        { id: "serendah", time: 8 },
      ],
    },
    position: { x: 1400, y: 2100 },
  },
  {
    id: "serendah",
    type: "station",
    data: {
      label: "Serendah",
      lines: [{ color: "red", stationNumber: 5 }],
      connectedStations: [
        { id: "rawang", time: 8 },
        { id: "batangKali", time: 8 },
      ],
    },
    position: { x: 1400, y: 1800 },
  },
  {
    id: "batangKali",
    type: "station",
    data: {
      label: "Batang Kali",
      lines: [{ color: "red", stationNumber: 4 }],
      connectedStations: [
        { id: "serendah", time: 8 },
        { id: "rasa", time: 4 },
      ],
    },
    position: { x: 1400, y: 1500 },
  },
  {
    id: "rasa",
    type: "station",
    data: {
      label: "Rasa",
      lines: [{ color: "red", stationNumber: 3 }],
      connectedStations: [
        { id: "batangKali", time: 4 },
        { id: "kualaKubuBharu", time: 5 },
      ],
    },
    position: { x: 1400, y: 1200 },
  },
  {
    id: "kualaKubuBharu",
    type: "station",
    data: {
      label: "Kuala Kubu Bharu",
      lines: [{ color: "red", stationNumber: 2 }],
      connectedStations: [
        { id: "rasa", time: 5 },
        { id: "tanjungMalim", time: 13 },
      ],
    },
    position: { x: 1400, y: 800 },
  },
  {
    id: "tanjungMalim",
    type: "station",
    data: {
      label: "Tanjung Malim",
      lines: [{ color: "red", stationNumber: 1 }],
      connectedStations: [{ id: "kualaKubuBharu", time: 13 }],
    },
    position: { x: 1900, y: 400 },
  },
  {
    id: "abdullahHukum",
    type: "station",
    data: {
      label: "Abdullah Hukum",
      lines: [
        { color: "red", stationNumber: 16 },
        { color: "magenta", stationNumber: 17 },
      ],
      connectedStations: [
        { id: "klSentral", time: 6 },
        { id: "angkasapuri", time: 3 },
        { id: "kerinchi", time: 2 },
        { id: "bangsar", time: 3 },
      ],
    },
    position: { x: 5900, y: 7400 },
  },
  {
    id: "angkasapuri",
    type: "station",
    data: {
      label: "Angkasapuri",
      lines: [{ color: "red", stationNumber: 17 }],
      connectedStations: [
        { id: "abdullahHukum", time: 3 },
        { id: "pantaiDalam", time: 2 },
      ],
    },
    position: { x: 5900, y: 7700 },
  },
  {
    id: "pantaiDalam",
    type: "station",
    data: {
      label: "Pantai Dalam",
      lines: [{ color: "red", stationNumber: 18 }],
      connectedStations: [
        { id: "angkasapuri", time: 2 },
        { id: "petaling", time: 3 },
      ],
    },
    position: { x: 5800, y: 7900 },
  },
  {
    id: "petaling",
    type: "station",
    data: {
      label: "Petaling",
      lines: [{ color: "red", stationNumber: 19 }],
      connectedStations: [
        { id: "pantaiDalam", time: 3 },
        { id: "jalanTempler", time: 2 },
      ],
    },
    position: { x: 5000, y: 8200 },
  },
  {
    id: "jalanTempler",
    type: "station",
    data: {
      label: "Jalan Templer",
      lines: [{ color: "red", stationNumber: 20 }],
      connectedStations: [
        { id: "petaling", time: 2 },
        { id: "kampungDatoHarun", time: 6 },
      ],
    },
    position: { x: 4400, y: 8200 },
  },
  {
    id: "kampungDatoHarun",
    type: "station",
    data: {
      label: "Kampung Dato Harun",
      lines: [{ color: "red", stationNumber: 21 }],
      connectedStations: [
        { id: "jalanTempler", time: 6 },
        { id: "seriSetia", time: 2 },
      ],
    },
    position: { x: 3900, y: 8200 },
  },
  {
    id: "seriSetia",
    type: "station",
    data: {
      label: "Seri Setia",
      lines: [{ color: "red", stationNumber: 22 }],
      connectedStations: [
        { id: "kampungDatoHarun", time: 2 },
        { id: "setiaJaya", time: 8 },
      ],
    },
    position: { x: 3400, y: 8200 },
  },
  {
    id: "setiaJaya",
    type: "station",
    data: {
      label: "Setia Jaya",
      lines: [{ color: "red", stationNumber: 23 }],
      connectedStations: [
        { id: "seriSetia", time: 8 },
        { id: "subangJaya", time: 8 },
      ],
    },
    position: { x: 3100, y: 8400 },
  },
  {
    id: "subangJaya",
    type: "station",
    data: {
      label: "Subang Jaya",
      lines: [
        { color: "red", stationNumber: 24 },
        { color: "magenta", stationNumber: 28 },
      ],
      connectedStations: [
        { id: "setiaJaya", time: 8 },
        { id: "batuTiga", time: 8 },
        { id: "glenmarie", time: 4 },
        { id: "SS15", time: 3 },
      ],
    },
    position: { x: 2300, y: 8400 },
  },
  {
    id: "batuTiga",
    type: "station",
    data: {
      label: "Batu Tiga",
      lines: [{ color: "red", stationNumber: 25 }],
      connectedStations: [
        { id: "subangJaya", time: 8 },
        { id: "shahAlam", time: 15 },
      ],
    },
    position: { x: 1900, y: 8600 },
  },
  {
    id: "shahAlam",
    type: "station",
    data: {
      label: "Shah Alam",
      lines: [{ color: "red", stationNumber: 26 }],
      connectedStations: [
        { id: "batuTiga", time: 15 },
        { id: "padangJawa", time: 6 },
      ],
    },
    position: { x: 1900, y: 8900 },
  },
  {
    id: "padangJawa",
    type: "station",
    data: {
      label: "Padang Jawa",
      lines: [{ color: "red", stationNumber: 27 }],
      connectedStations: [
        { id: "shahAlam", time: 6 },
        { id: "bukitBadak", time: 6 },
      ],
    },
    position: { x: 1900, y: 9100 },
  },
  {
    id: "bukitBadak",
    type: "station",
    data: {
      label: "Bukit Badak",
      lines: [{ color: "red", stationNumber: 28 }],
      connectedStations: [
        { id: "padangJawa", time: 6 },
        { id: "klang", time: 4 },
      ],
    },
    position: { x: 1700, y: 9400 },
  },
  {
    id: "klang",
    type: "station",
    data: {
      label: "Klang",
      lines: [{ color: "red", stationNumber: 29 }],
      connectedStations: [
        { id: "bukitBadak", time: 4 },
        { id: "telukPulai", time: 3 },
      ],
    },
    position: { x: 1500, y: 9600 },
  },
  {
    id: "telukPulai",
    type: "station",
    data: {
      label: "Teluk Pulai",
      lines: [{ color: "red", stationNumber: 30 }],
      connectedStations: [
        { id: "klang", time: 3 },
        { id: "telukGadong", time: 3 },
      ],
    },
    position: { x: 1300, y: 10000 },
  },
  {
    id: "telukGadong",
    type: "station",
    data: {
      label: "Teluk Gadong",
      lines: [{ color: "red", stationNumber: 31 }],
      connectedStations: [
        { id: "telukPulai", time: 3 },
        { id: "kampungRajaUda", time: 2 },
      ],
    },
    position: { x: 1300, y: 10300 },
  },
  {
    id: "kampungRajaUda",
    type: "station",
    data: {
      label: "Kampung Raja Uda",
      lines: [{ color: "red", stationNumber: 32 }],
      connectedStations: [
        { id: "telukGadong", time: 2 },
        { id: "jalanKastam", time: 7 },
      ],
    },
    position: { x: 1300, y: 10500 },
  },
  {
    id: "jalanKastam",
    type: "station",
    data: {
      label: "Jalan Kastam",
      lines: [{ color: "red", stationNumber: 33 }],
      connectedStations: [
        { id: "kampungRajaUda", time: 7 },
        { id: "pelabuhanKlang", time: 6 },
      ],
    },
    position: { x: 1300, y: 10700 },
  },
  {
    id: "pelabuhanKlang",
    type: "station",
    data: {
      label: "Pelabuhan Klang",
      lines: [{ color: "red", stationNumber: 34 }],
      connectedStations: [{ id: "jalanKastam", time: 6 }],
    },
    position: { x: 1300, y: 10900 },
  },
  {
    id: "glenmarie",
    type: "station",
    data: {
      label: "Glenmarie",
      lines: [{ color: "magenta", stationNumber: 27 }],
      connectedStations: [
        { id: "subangJaya", time: 4 },
        { id: "araDamansara", time: 3 },
      ],
    },
    position: { x: 2300, y: 7500 },
  },
  {
    id: "araDamansara",
    type: "station",
    data: {
      label: "Ara Damansara",
      lines: [{ color: "magenta", stationNumber: 26 }],
      connectedStations: [
        { id: "glenmarie", time: 3 },
        { id: "lembahSubang", time: 2 },
      ],
    },
    position: { x: 2300, y: 7200 },
  },
  {
    id: "lembahSubang",
    type: "station",
    data: {
      label: "Lembah Subang",
      lines: [{ color: "magenta", stationNumber: 25 }],
      connectedStations: [
        { id: "araDamansara", time: 2 },
        { id: "kelanaJaya", time: 3 },
      ],
    },
    position: { x: 2300, y: 6900 },
  },
  {
    id: "kelanaJaya",
    type: "station",
    data: {
      label: "Kelana Jaya",
      lines: [{ color: "magenta", stationNumber: 24 }],
      connectedStations: [
        { id: "lembahSubang", time: 3 },
        { id: "tamanBahagia", time: 2 },
      ],
    },
    position: { x: 2800, y: 6700 },
  },
  {
    id: "tamanBahagia",
    type: "station",
    data: {
      label: "Taman Bahagia",
      lines: [{ color: "magenta", stationNumber: 23 }],
      connectedStations: [
        { id: "kelanaJaya", time: 2 },
        { id: "tamanParamount", time: 3 },
      ],
    },
    position: { x: 3200, y: 6700 },
  },
  {
    id: "tamanParamount",
    type: "station",
    data: {
      label: "Taman Paramount",
      lines: [{ color: "magenta", stationNumber: 22 }],
      connectedStations: [
        { id: "tamanBahagia", time: 3 },
        { id: "asiaJaya", time: 3 },
      ],
    },
    position: { x: 3500, y: 6700 },
  },
  {
    id: "asiaJaya",
    type: "station",
    data: {
      label: "Asia Jaya",
      lines: [{ color: "magenta", stationNumber: 21 }],
      connectedStations: [
        { id: "tamanParamount", time: 3 },
        { id: "tamanJaya", time: 2 },
      ],
    },
    position: { x: 4000, y: 6700 },
  },
  {
    id: "tamanJaya",
    type: "station",
    data: {
      label: "Taman Jaya",
      lines: [{ color: "magenta", stationNumber: 20 }],
      connectedStations: [
        { id: "asiaJaya", time: 2 },
        { id: "unversiti", time: 3 },
      ],
    },
    position: { x: 4300, y: 6700 },
  },
  {
    id: "unversiti",
    type: "station",
    data: {
      label: "Universiti",
      lines: [{ color: "magenta", stationNumber: 19 }],
      connectedStations: [
        { id: "tamanJaya", time: 3 },
        { id: "kerinchi", time: 3 },
      ],
    },
    position: { x: 4600, y: 6700 },
  },
  {
    id: "kerinchi",
    type: "station",
    data: {
      label: "Kerinchi",
      lines: [{ color: "magenta", stationNumber: 18 }],
      connectedStations: [
        { id: "unversiti", time: 3 },
        { id: "abdullahHukum", time: 2 },
      ],
    },
    position: { x: 4900, y: 7000 },
  },
  {
    id: "bangsar",
    type: "station",
    data: {
      label: "Bangsar",
      lines: [{ color: "magenta", stationNumber: 16 }],
      connectedStations: [
        { id: "abdullahHukum", time: 3 },
        { id: "klSentral", time: 2 },
      ],
    },
    position: { x: 5900, y: 6600 },
  },
  {
    id: "pasarSeni",
    type: "station",
    data: {
      label: "Pasar Seni",
      lines: [
        { color: "magenta", stationNumber: 14 },
        { color: "green", stationNumber: 15 },
      ],
      connectedStations: [
        { id: "klSentral", time: 4 },
        { id: "masjidJamek", time: 2 },
        { id: "muziumNegara", time: 3 },
        { id: "merdeka", time: 3 },
      ],
    },
    position: { x: 6900, y: 5200 },
  },
  {
    id: "masjidJamek",
    type: "station",
    data: {
      label: "Masjid Jamek",
      lines: [
        { color: "magenta", stationNumber: 13 },
        { color: "brown", stationNumber: 8 },
        { color: "orange", stationNumber: 7 },
      ],
      connectedStations: [
        { id: "pasarSeni", time: 2 },
        { id: "dangWangi", time: 3 },
        { id: "bandaraya", time: 2 },
      ],
    },
    position: { x: 7100, y: 4200 },
  },
  {
    id: "dangWangi",
    type: "station",
    data: {
      label: "Dang Wangi",
      lines: [{ color: "magenta", stationNumber: 12 }],
      connectedStations: [
        { id: "masjidJamek", time: 3 },
        { id: "kampungBaru", time: 2 },
      ],
    },
    position: { x: 8800, y: 3700 },
  },
  {
    id: "kampungBaru",
    type: "station",
    data: {
      label: "Kampung Baru",
      lines: [{ color: "magenta", stationNumber: 11 }],
      connectedStations: [
        { id: "dangWangi", time: 2 },
        { id: "KLCC", time: 2 },
      ],
    },
    position: { x: 8800, y: 3400 },
  },
  {
    id: "KLCC",
    type: "station",
    data: {
      label: "KLCC",
      lines: [{ color: "magenta", stationNumber: 10 }],
      connectedStations: [
        { id: "kampungBaru", time: 2 },
        { id: "ampangPark", time: 2 },
      ],
    },
    position: { x: 8800, y: 3200 },
  },
  {
    id: "damai",
    type: "station",
    data: {
      label: "Damai",
      lines: [{ color: "magenta", stationNumber: 8 }],
      connectedStations: [
        { id: "ampangPark", time: 3 },
        { id: "datoKeramat", time: 2 },
      ],
    },
    position: { x: 8800, y: 2800 },
  },
  {
    id: "datoKeramat",
    type: "station",
    data: {
      label: "Dato' Keramat",
      lines: [{ color: "magenta", stationNumber: 7 }],
      connectedStations: [
        { id: "damai", time: 2 },
        { id: "jelatek", time: 2 },
      ],
    },
    position: { x: 8800, y: 2500 },
  },
  {
    id: "jelatek",
    type: "station",
    data: {
      label: "Jelatek",
      lines: [{ color: "magenta", stationNumber: 6 }],
      connectedStations: [
        { id: "datoKeramat", time: 2 },
        { id: "setiawangsa", time: 2 },
      ],
    },
    position: { x: 8800, y: 2300 },
  },
  {
    id: "setiawangsa",
    type: "station",
    data: {
      label: "Setiawangsa",
      lines: [{ color: "magenta", stationNumber: 5 }],
      connectedStations: [
        { id: "jelatek", time: 2 },
        { id: "sriRampai", time: 4 },
      ],
    },
    position: { x: 8800, y: 2100 },
  },
  {
    id: "sriRampai",
    type: "station",
    data: {
      label: "Sri Rampai",
      lines: [{ color: "magenta", stationNumber: 4 }],
      connectedStations: [
        { id: "setiawangsa", time: 4 },
        { id: "wangsaMaju", time: 3 },
      ],
    },
    position: { x: 8800, y: 1900 },
  },
  {
    id: "wangsaMaju",
    type: "station",
    data: {
      label: "Wangsa Maju",
      lines: [{ color: "magenta", stationNumber: 3 }],
      connectedStations: [
        { id: "sriRampai", time: 3 },
        { id: "tamanMelati", time: 3 },
      ],
    },
    position: { x: 8800, y: 1700 },
  },
  {
    id: "tamanMelati",
    type: "station",
    data: {
      label: "Taman Melati",
      lines: [{ color: "magenta", stationNumber: 2 }],
      connectedStations: [
        { id: "wangsaMaju", time: 3 },
        { id: "gombak", time: 2 },
      ],
    },
    position: { x: 8800, y: 1500 },
  },
  {
    id: "gombak",
    type: "station",
    data: {
      label: "Gombak",
      lines: [{ color: "magenta", stationNumber: 1 }],
      connectedStations: [{ id: "tamanMelati", time: 2 }],
    },
    position: { x: 8800, y: 1200 },
  },
  {
    id: "SS15",
    type: "station",
    data: {
      label: "SS15",
      lines: [{ color: "magenta", stationNumber: 29 }],
      connectedStations: [
        { id: "subangJaya", time: 3 },
        { id: "SS18", time: 2 },
      ],
    },
    position: { x: 2300, y: 8800 },
  },
  {
    id: "SS18",
    type: "station",
    data: {
      label: "SS18",
      lines: [{ color: "magenta", stationNumber: 30 }],
      connectedStations: [
        { id: "SS15", time: 2 },
        { id: "USJ7", time: 5 },
      ],
    },
    position: { x: 2300, y: 9000 },
  },
  {
    id: "USJ7",
    type: "station",
    data: {
      label: "USJ7",
      lines: [{ color: "magenta", stationNumber: 31 }],
      connectedStations: [
        { id: "SS18", time: 5 },
        { id: "taipan", time: 2 },
      ],
    },
    position: { x: 2600, y: 9400 },
  },
  {
    id: "taipan",
    type: "station",
    data: {
      label: "Taipan",
      lines: [{ color: "magenta", stationNumber: 32 }],
      connectedStations: [
        { id: "USJ7", time: 2 },
        { id: "wawasan", time: 3 },
      ],
    },
    position: { x: 2600, y: 10100 },
  },
  {
    id: "wawasan",
    type: "station",
    data: {
      label: "Wawasan",
      lines: [{ color: "magenta", stationNumber: 33 }],
      connectedStations: [
        { id: "taipan", time: 3 },
        { id: "USJ21", time: 3 },
      ],
    },
    position: { x: 2600, y: 10400 },
  },
  {
    id: "USJ21",
    type: "station",
    data: {
      label: "USJ21",
      lines: [{ color: "magenta", stationNumber: 34 }],
      connectedStations: [
        { id: "wawasan", time: 3 },
        { id: "alamMegah", time: 4 },
      ],
    },
    position: { x: 2600, y: 10700 },
  },
  {
    id: "alamMegah",
    type: "station",
    data: {
      label: "Alam Megah",
      lines: [{ color: "magenta", stationNumber: 35 }],
      connectedStations: [
        { id: "USJ21", time: 4 },
        { id: "subangAlam", time: 2 },
      ],
    },
    position: { x: 3000, y: 11000 },
  },
  {
    id: "subangAlam",
    type: "station",
    data: {
      label: "Subang Alam",
      lines: [{ color: "magenta", stationNumber: 36 }],
      connectedStations: [
        { id: "alamMegah", time: 2 },
        { id: "putraHeights", time: 3 },
      ],
    },
    position: { x: 3400, y: 11000 },
  },
  {
    id: "putraHeights",
    type: "station",
    data: {
      label: "Putra Heights",
      lines: [
        { color: "magenta", stationNumber: 37 },
        { color: "brown", stationNumber: 30 },
      ],
      connectedStations: [
        { id: "subangAlam", time: 3 },
        { id: "puchongPrima", time: 3 },
      ],
    },
    position: { x: 3900, y: 11000 },
  },
  {
    id: "puchongPrima",
    type: "station",
    data: {
      label: "Puchong Prima",
      lines: [{ color: "brown", stationNumber: 29 }],
      connectedStations: [
        { id: "putraHeights", time: 3 },
        { id: "puchongPerdana", time: 3 },
      ],
    },
    position: { x: 4300, y: 11000 },
  },
  {
    id: "puchongPerdana",
    type: "station",
    data: {
      label: "Puchong Perdana",
      lines: [{ color: "brown", stationNumber: 28 }],
      connectedStations: [
        { id: "puchongPrima", time: 3 },
        { id: "bandarPuteri", time: 2 },
      ],
    },
    position: { x: 4800, y: 11000 },
  },
  {
    id: "bandarPuteri",
    type: "station",
    data: {
      label: "Bandar Puteri",
      lines: [{ color: "brown", stationNumber: 27 }],
      connectedStations: [
        { id: "puchongPerdana", time: 2 },
        { id: "tamanPerindustrianPuchong", time: 2 },
      ],
    },
    position: { x: 5400, y: 10600 },
  },
  {
    id: "tamanPerindustrianPuchong",
    type: "station",
    data: {
      label: "Taman Perindustrian Puchong",
      lines: [{ color: "brown", stationNumber: 26 }],
      connectedStations: [
        { id: "bandarPuteri", time: 2 },
        { id: "pusatBandarPuchong", time: 2 },
      ],
    },
    position: { x: 5400, y: 10300 },
  },
  {
    id: "pusatBandarPuchong",
    type: "station",
    data: {
      label: "Pusat Bandar Puchong",
      lines: [{ color: "brown", stationNumber: 25 }],
      connectedStations: [
        { id: "tamanPerindustrianPuchong", time: 2 },
        { id: "ioiPuchongJaya", time: 1 },
      ],
    },
    position: { x: 5400, y: 9900 },
  },
  {
    id: "ioiPuchongJaya",
    type: "station",
    data: {
      label: "IOI Puchong Jaya",
      lines: [{ color: "brown", stationNumber: 24 }],
      connectedStations: [
        { id: "pusatBandarPuchong", time: 1 },
        { id: "kinraraBK5", time: 4 },
      ],
    },
    position: { x: 5400, y: 9600 },
  },
  {
    id: "kinraraBK5",
    type: "station",
    data: {
      label: "Kinrara BK 5",
      lines: [{ color: "brown", stationNumber: 23 }],
      connectedStations: [
        { id: "ioiPuchongJaya", time: 4 },
        { id: "alamSutera", time: 4 },
      ],
    },
    position: { x: 5400, y: 9300 },
  },
  {
    id: "alamSutera",
    type: "station",
    data: {
      label: "Alam Sutera",
      lines: [{ color: "brown", stationNumber: 22 }],
      connectedStations: [
        { id: "kinraraBK5", time: 4 },
        { id: "muhibbah", time: 2 },
      ],
    },
    position: { x: 5400, y: 9000 },
  },
  {
    id: "muhibbah",
    type: "station",
    data: {
      label: "Muhibbah",
      lines: [{ color: "brown", stationNumber: 21 }],
      connectedStations: [
        { id: "alamSutera", time: 2 },
        { id: "awanBesar", time: 2 },
      ],
    },
    position: { x: 5400, y: 8800 },
  },
  {
    id: "awanBesar",
    type: "station",
    data: {
      label: "Awan Besar",
      lines: [{ color: "brown", stationNumber: 20 }],
      connectedStations: [
        { id: "muhibbah", time: 3 },
        { id: "sriPetaling", time: 2 },
      ],
    },
    position: { x: 6000, y: 8200 },
  },
  {
    id: "sriPetaling",
    type: "station",
    data: {
      label: "Sri Petaling",
      lines: [{ color: "brown", stationNumber: 19 }],
      connectedStations: [
        { id: "awanBesar", time: 2 },
        { id: "bukitJalil", time: 2 },
      ],
    },
    position: { x: 6500, y: 8200 },
  },
  {
    id: "bukitJalil",
    type: "station",
    data: {
      label: "Bukit Jalil",
      lines: [{ color: "brown", stationNumber: 18 }],
      connectedStations: [
        { id: "sriPetaling", time: 2 },
        { id: "sungaiBesi", time: 2 },
      ],
    },
    position: { x: 6900, y: 8200 },
  },

  {
    id: "bandarTunRazak",
    type: "station",
    data: {
      label: "Bandar Tun Razak",
      lines: [{ color: "brown", stationNumber: 15 }],
      connectedStations: [
        { id: "bandarTasikSelatan", time: 3 },
        { id: "salakSelatan2", time: 3 },
      ],
    },
    position: { x: 9500, y: 6000 },
  },
  {
    id: "salakSelatan2",
    type: "station",
    data: {
      label: "Salak Selatan (Sri Petaling Line)",
      lines: [{ color: "brown", stationNumber: 14 }],
      connectedStations: [
        { id: "bandarTunRazak", time: 3 },
        { id: "cheras", time: 3 },
      ],
    },
    position: { x: 9500, y: 5800 },
  },
  {
    id: "cheras",
    type: "station",
    data: {
      label: "Cheras",
      lines: [{ color: "brown", stationNumber: 13 }],
      connectedStations: [
        { id: "salakSelatan2", time: 3 },
        { id: "chanSowLin", time: 2 },
      ],
    },
    position: { x: 9900, y: 5200 },
  },
  {
    id: "pudu",
    type: "station",
    data: {
      label: "Pudu",
      lines: [
        { color: "brown", stationNumber: 11 },
        { color: "orange", stationNumber: 10 },
      ],
      connectedStations: [
        { id: "chanSowLin", time: 2 },
        { id: "hangTuah", time: 1 },
      ],
    },
    position: { x: 9600, y: 4500 },
  },
  {
    id: "hangTuah",
    type: "station",
    data: {
      label: "Hang Tuah",
      lines: [
        { color: "brown", stationNumber: 10 },
        { color: "orange", stationNumber: 9 },
        { color: "chartreuse", stationNumber: 4 },
      ],
      connectedStations: [
        { id: "pudu", time: 1 },
        { id: "plazaRakyat", time: 2 },
        { id: "imbi", time: 2 },
        { id: "maharajalela", time: 2 },
      ],
    },
    position: { x: 9000, y: 4500 },
  },
  {
    id: "plazaRakyat",
    type: "station",
    data: {
      label: "Plaza Rakyat",
      lines: [
        { color: "brown", stationNumber: 9 },
        { color: "orange", stationNumber: 8 },
      ],
      connectedStations: [
        { id: "hangTuah", time: 2 },
        { id: "masjidJamek", time: 2 },
      ],
    },
    position: { x: 8100, y: 4500 },
  },
  {
    id: "bandaraya",
    type: "station",
    data: {
      label: "Bandaraya",
      lines: [
        { color: "brown", stationNumber: 7 },
        { color: "orange", stationNumber: 6 },
      ],
      connectedStations: [
        { id: "masjidJamek", time: 2 },
        { id: "sultanIsmail", time: 1 },
      ],
    },
    position: { x: 6900, y: 3800 },
  },
  {
    id: "sultanIsmail",
    type: "station",
    data: {
      label: "Sultan Ismail",
      lines: [
        { color: "brown", stationNumber: 6 },
        { color: "orange", stationNumber: 5 },
      ],
      connectedStations: [
        { id: "bandaraya", time: 1 },
        { id: "pwtc", time: 1 },
      ],
    },
    position: { x: 6900, y: 3650 },
  },
  {
    id: "pwtc",
    type: "station",
    data: {
      label: "PWTC",
      lines: [
        { color: "brown", stationNumber: 5 },
        { color: "orange", stationNumber: 4 },
      ],
      connectedStations: [
        { id: "sultanIsmail", time: 1 },
        { id: "titiwangsa", time: 2 },
      ],
    },
    position: { x: 6900, y: 3300 },
  },
  {
    id: "sentul-SentulTimur",
    type: "station",
    data: {
      label: "Sentul (Sentul Timur)",
      lines: [
        { color: "brown", stationNumber: 3 },
        { color: "orange", stationNumber: 2 },
      ],
      connectedStations: [
        { id: "titiwangsa", time: 2 },
        { id: "sentulTimur", time: 1 },
      ],
    },
    position: { x: 6900, y: 2300 },
  },
  {
    id: "sentulTimur",
    type: "station",
    data: {
      label: "Sentul Timur",
      lines: [
        { color: "brown", stationNumber: 2 },
        { color: "orange", stationNumber: 1 },
      ],
      connectedStations: [{ id: "sentul-SentulTimur", time: 1 }],
    },
    position: { x: 6900, y: 2000 },
  },

  //orange
  {
    id: "miharja",
    type: "station",
    data: {
      label: "Miharja",
      lines: [{ color: "orange", stationNumber: 12 }],
      connectedStations: [
        { id: "maluri", time: 2 },
        { id: "chanSowLin", time: 1 },
      ],
    },
    position: { x: 10500, y: 4300 },
  },
  {
    id: "pandanJaya",
    type: "station",
    data: {
      label: "Pandan Jaya",
      lines: [{ color: "orange", stationNumber: 14 }],
      connectedStations: [
        { id: "maluri", time: 2 },
        { id: "pandanIndah", time: 2 },
      ],
    },
    position: { x: 10500, y: 3500 },
  },
  {
    id: "pandanIndah",
    type: "station",
    data: {
      label: "Pandan Indah",
      lines: [{ color: "orange", stationNumber: 15 }],
      connectedStations: [
        { id: "pandanJaya", time: 2 },
        { id: "cempaka", time: 2 },
      ],
    },
    position: { x: 10500, y: 2800 },
  },
  {
    id: "cempaka",
    type: "station",
    data: {
      label: "Cempaka",
      lines: [{ color: "orange", stationNumber: 16 }],
      connectedStations: [
        { id: "pandanIndah", time: 2 },
        { id: "cahaya", time: 1 },
      ],
    },
    position: { x: 10500, y: 2200 },
  },
  {
    id: "cahaya",
    type: "station",
    data: {
      label: "Cahaya",
      lines: [{ color: "orange", stationNumber: 17 }],
      connectedStations: [
        { id: "cempaka", time: 1 },
        { id: "ampang", time: 2 },
      ],
    },
    position: { x: 10500, y: 1700 },
  },
  {
    id: "ampang",
    type: "station",
    data: {
      label: "Ampang",
      lines: [{ color: "orange", stationNumber: 18 }],
      connectedStations: [{ id: "cahaya", time: 2 }],
    },
    position: { x: 10500, y: 1200 },
  },

  //KL Monorail
  {
    id: "klSentralMonorail",
    type: "station",
    data: {
      label: "KL Sentral (KL Monorail)",
      lines: [{ color: "chartreuse", stationNumber: 1 }],
      connectedStations: [{ id: "tunSambanthan", time: 2 }],
    },
    position: { x: 6600, y: 5600 },
  },
  {
    id: "tunSambanthan",
    type: "station",
    data: {
      label: "Tun Sambanthan",
      lines: [{ color: "chartreuse", stationNumber: 2 }],
      connectedStations: [
        { id: "klSentralMonorail", time: 2 },
        { id: "maharajalela", time: 3 },
      ],
    },
    position: { x: 7500, y: 5400 },
  },
  {
    id: "maharajalela",
    type: "station",
    data: {
      label: "Maharajalela",
      lines: [{ color: "chartreuse", stationNumber: 3 }],
      connectedStations: [
        { id: "tunSambanthan", time: 4 },
        { id: "hangTuah", time: 3 },
      ],
    },
    position: { x: 7900, y: 5000 },
  },
  {
    id: "imbi",
    type: "station",
    data: {
      label: "Imbi",
      lines: [{ color: "chartreuse", stationNumber: 5 }],
      connectedStations: [
        { id: "hangTuah", time: 2 },
        { id: "bukitBintangMonorail", time: 2 },
      ],
    },
    position: { x: 9000, y: 4200 },
  },
  {
    id: "bukitBintangMonorail",
    type: "station",
    data: {
      label: "Bukit Bintang Monorail",
      lines: [{ color: "chartreuse", stationNumber: 6 }],
      connectedStations: [
        { id: "imbi", time: 2 },
        { id: "rajaChulan", time: 3 },
      ],
    },
    position: { x: 9000, y: 3800 },
  },
  {
    id: "rajaChulan",
    type: "station",
    data: {
      label: "Raja Chulan",
      lines: [{ color: "chartreuse", stationNumber: 7 }],
      connectedStations: [
        { id: "bukitBintangMonorail", time: 3 },
        { id: "bukitNanas", time: 2 },
      ],
    },
    position: { x: 9000, y: 3500 },
  },
  {
    id: "bukitNanas",
    type: "station",
    data: {
      label: "Bukit Nanas",
      lines: [{ color: "chartreuse", stationNumber: 8 }],
      connectedStations: [
        { id: "rajaChulan", time: 2 },
        { id: "medanTuanku", time: 2 },
      ],
    },
    position: { x: 9000, y: 3300 },
  },
  {
    id: "medanTuanku",
    type: "station",
    data: {
      label: "Medan Tuanku",
      lines: [{ color: "chartreuse", stationNumber: 9 }],
      connectedStations: [
        { id: "bukitNanas", time: 2 },
        { id: "chowKit", time: 3 },
      ],
    },
    position: { x: 8300, y: 3200 },
  },
  {
    id: "chowKit",
    type: "station",
    data: {
      label: "Chow Kit",
      lines: [{ color: "chartreuse", stationNumber: 10 }],
      connectedStations: [
        { id: "medanTuanku", time: 2 },
        { id: "titiwangsa", time: 3 },
      ],
    },
    position: { x: 7800, y: 3200 },
  },
];

//
