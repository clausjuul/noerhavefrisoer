
const TreatmentData = {
  klip: {
    title: "Klip",
    data: [
      {
        navn: "Herreklip (30 min)",
        pris: "275,-",
        tekst: ["Inkl. Vask med hovedbundsmassage og føn med let styling"]
      },
      {
        navn: "Børneklip (30 min)",
        pris: "260,-",
        tekst: ["0-12 år er uden vask"]
      },
      {
        navn: "Dameklip med hårkur (60 min)",
        pris: "580,-",
        tekst: [
          "Klip samt intensiv skræddersyet kur m. Hovedbundsmassage og føn med let styling"
        ]
      },
      {
        navn: "Dameklip med hårkur (60 min)",
        pris: "580,-",
        tekst: [
          "Klip samt intensiv skræddersyet kur m. Hovedbundsmassage og føn med let styling"
        ]
      }
    ]
  },

  kur: {
    title: "Hårkur",
    data: [
      {
        navn: "Intensiv skræddersyet hårkur efter farvebehandling (15 min)",
        pris: "200,-",
        tekst: [
          "Ultimativ forkælelse til dig og dit hår i forbindelse med en farvebehandling"
        ]
      }
    ]
  },

  reflekserUdenKlip: {
    title: "Reflekser/striber uden klip",
    subtitle: "(Spar penge ved at blive klippet samtidig)",
    // subtitle: "(Bliv klippet samtidig og spar penge)",
    // subtitle: "(Klip samtidig er forholdsmæssigt billigere)",

    data: [
      {
        navn: "Reflekser, langt, uden klip (120 min)",
        pris: "850,-",
        tekst: [
          "Langt hår er fra skuldrene og ned (tillæg for ekstra langt/kraftigt hår 100-150)",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Reflekser, kort, uden klip (105 min)",
        pris: "475,-",
        tekst: [
          "Kort hår",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Reflekser, mellem, uden klip (120 min)",
        pris: "695,-",
        tekst: [
          "Mellem længde er til skuldrene",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Rep. Reflekser, uden klip (120 min)",
        pris: "695,-",
        tekst: [
          "Behandling til dig der er lyshåret i længderne, og ønsker en opfriskning af de lyse reflekser i bunden",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      }
    ]
  },

  reflekserMedKlip: {
    title: "Reflekser/striber med klip",

    data: [
      {
        navn: "Reflekser, kort, med klip (120 min)",
        pris: "805,-",
        tekst: [
          "Kort hår",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Reflekser, mellem, med klip (135 min)",
        pris: "995,-",
        tekst: [
          "Mellem længde er til skuldrene",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Reflekser, langt, med klip (135 min)",
        pris: "1110,-",
        tekst: [
          "Langt hår er fra skuldrene og ned ( tillæg for ekstra langt/kraftigt hår 100-150)",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      },
      {
        navn: "Rep. Reflekser, med klip (135 min)",
        pris: "995,-",
        tekst: [
          "Behandling til dig der er lyshåret i længderne, og ønsker en opfriskning af de lyse reflekser i bunden",
          "Ønskes en eftertoning bedes du vælge behandlingen Specialfarve"
        ]
      }
    ]
  },

  helfarveUdenKlip: {
    title: "Helfarve/toning uden klip",
    subtitle: "(Spar penge ved at blive klippet samtidig)",
    // subtitle: "(Bliv klippet samtidig og spar penge)",
    // subtitle: "(Klip samtidig er forholdsmæssigt billigere)",

    data: [
      {
        navn: "Helfarve/toning i kort hår/bund uden klip (90 min)",
        pris: "470,-",
        tekst: [
          "Tiden til dig, der er korthåret eller ønsker en bundfarve (max 3 cm udvisning)"
        ]
      },
      {
        navn: "Helfarve/toning, mellem længde, uden klip (90 min)",
        pris: "600,-",
        tekst: ["Mellem længde er til skuldrene"]
      },
      {
        navn: "Helfarve/toning, langt hår, uden klip (105 min)",
        pris: "700,-",
        tekst: [
          "Langt hår er fra skuldrene og ned (tillæg 100-150 for ekstra langt eller kraftigt hår)"
        ]
      }
    ]
  },

  helfarveMedKlip: {
    title: "Helfarve/toning med klip",

    data: [
      {
        navn: "Helfarve/toning i kort hår/bund, med klip (105 min)",
        pris: "800,-",
        tekst: [
          "Tiden til dig der er korthåret eller ønsker en bundfarve (max 3 cm udvoksning)"
        ]
      },
      {
        navn: "Helfarve/toning, mellem længde, med klip (105 min)",
        pris: "900,-",
        tekst: ["Mellem længde er til skuldrene"]
      },
      {
        navn: "Helfarve/toning i langt hår, med klip (120 min)",
        pris: "980,-",
        tekst: [
          "Langt hår er fra skuldrene og ned (tillæg på 100-150 for ekstra langt eller kraftigt hår)"
        ]
      }
    ]
  },

  specialfarveUdenKlip: {
    title: "Specialfarve uden klip",
    subtitle: "(Spar penge ved at blive klippet samtidig)",
    // subtitle: "(Bliv klippet samtidig og spar penge)",
    // subtitle: "(Klip samtidig er forholdsmæssigt billigere)",

    data: [
      {
        navn: "Specialfarve, mellem længde, uden klip (135 min)",
        pris: "995,-",
        tekst: [
          "Er en behandling til dig der ønsker mere end én farvebehandling",
          "F.eks hvis der ønskes en eftertoning efter lysning/refleksbehandling i hår maks til skuldrene"
        ]
      },
      {
        navn: "Specialfarve, i langt hår, uden klip (135 min)",
        pris: "1200,-",
        tekst: [
          "Er en behandling til dig der ønsker mere en én farvebehandling",
          "F.eks hvis der ønskes en eftertoning efter lysning/refleksbehandling i langt hår"
        ]
      }
    ]
  },

  specialfarveMedKlip: {
    title: "Specialfarve med klip",

    data: [
      {
        navn: "Specialfarve, Mellem længde, med klip (150 min)",
        pris: "1250,-",
        tekst: [
          "Er en behandling til dig der ønsker mere en én farvebehandling",
          "F.eks hvis der ønskes en eftertoning efter lysning/refleksbehandling i hår maks til skuldrene"
        ]
      },
      {
        navn: "Specialfarve, i langt hår, med klip (150 min)",
        pris: "1450,-",
        tekst: [
          "Er en behandling til dig der ønsker mere en én farvebehandling",
          "F.eks hvis der ønskes en eftertoning efter lysning/refleksbehandling i langt hår"
        ]
      }
    ]
  },

  brynOgVipper: {
    title: "Bryn og vipper",

    data: [
      {
        navn: "Ret af bryn (15 min)",
        pris: "95,-"
      },
      {
        navn: "Farvning af bryn (15 min)",
        pris: "95,-"
      },
      {
        navn: "Farvning af vipper (15 min)",
        pris: "100,-"
      },
      {
        navn: "Bryn farves og rettes (15 min)",
        pris: "160,-"
      },
      {
        navn: "Bryn og vipper farves, med ret af bryn (15 min)",
        pris: "230,-"
      }
    ]
  },

  vaskOgFQn: {
    title: "Vask og føn",

    data: [
      {
        navn: "Vask med formtørring (30 min)",
        pris: "260,-"
      }
    ]
  },

  opsaetning: {
    title: "Opsætning af hår",

    data: [
      {
        navn: "Hår opsætning (45 min)",
        pris: "400,-"
      }
    ]
  }
};
export default TreatmentData;