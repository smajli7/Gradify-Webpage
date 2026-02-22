/**
 * Demo-Zugänge für Gradify (aus demo-zugaenge.csv).
 * Passwort für alle: web00100113!
 */
export const DEMO_PASSWORD = 'web00100113!'

export interface DemoNutzer {
  benutzername: string
  rolle: string
  vorname: string
  nachname: string
  email: string
  studiengang: string
  semester: string
}

const rolleLabel: Record<string, string> = {
  ADMIN: 'Admin',
  HOCHSCHUL_VERWALTER: 'Hochschulverwalter',
  PRUEFUNGSAMT: 'Prüfungsamt',
  LEHRENDER: 'Lehrender',
  STUDENT: 'Student',
}

export function getRolleLabel(rolle: string): string {
  return rolleLabel[rolle] ?? rolle
}

export const demoNutzer: DemoNutzer[] = [
  { benutzername: 'admin', rolle: 'ADMIN', vorname: 'System', nachname: 'Administrator', email: 'admin@gradify.local', studiengang: '', semester: '' },
  { benutzername: 'hochschulverwalter', rolle: 'HOCHSCHUL_VERWALTER', vorname: 'Karl', nachname: 'Verwalter', email: 'verwalter@thm.de', studiengang: '', semester: '' },
  { benutzername: 's.cremm', rolle: 'HOCHSCHUL_VERWALTER', vorname: 'Senna', nachname: 'Cremm', email: 's.cremm@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'pruefungsamt', rolle: 'PRUEFUNGSAMT', vorname: 'Paula', nachname: 'Prüfung', email: 'pruefungsamt@thm.de', studiengang: '', semester: '' },
  { benutzername: 'pruefungsamt.gu', rolle: 'PRUEFUNGSAMT', vorname: 'Anna', nachname: 'Bürokratie', email: 'pruefungsamt@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'prof.mueller', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Max', nachname: 'Mueller', email: 'mueller@thm.de', studiengang: '', semester: '' },
  { benutzername: 'prof.schmidt', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Anna', nachname: 'Schmidt', email: 'schmidt@thm.de', studiengang: '', semester: '' },
  { benutzername: 'prof.weber', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Thomas', nachname: 'Weber', email: 'weber@thm.de', studiengang: '', semester: '' },
  { benutzername: 'prof.klein', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Lisa', nachname: 'Klein', email: 'klein@thm.de', studiengang: '', semester: '' },
  { benutzername: 'prof.richter', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Michael', nachname: 'Richter', email: 'richter@thm.de', studiengang: '', semester: '' },
  { benutzername: 'prof.meyer.gu', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Klaus', nachname: 'Meyer', email: 'meyer@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'prof.schulze.gu', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Petra', nachname: 'Schulze', email: 'schulze@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'prof.berger.gu', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Thomas', nachname: 'Berger', email: 'berger@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'prof.hoffmann.gu', rolle: 'LEHRENDER', vorname: 'Prof. Dr. Sandra', nachname: 'Hoffmann', email: 'hoffmann@uni-frankfurt.de', studiengang: '', semester: '' },
  { benutzername: 'max.mustermann', rolle: 'STUDENT', vorname: 'Max', nachname: 'Mustermann', email: 'max.mustermann@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '6' },
  { benutzername: 'anna.schmidt', rolle: 'STUDENT', vorname: 'Anna', nachname: 'Schmidt', email: 'anna.schmidt@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '6' },
  { benutzername: 'felix.bauer', rolle: 'STUDENT', vorname: 'Felix', nachname: 'Bauer', email: 'felix.bauer@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '6' },
  { benutzername: 'lisa.meyer', rolle: 'STUDENT', vorname: 'Lisa', nachname: 'Meyer', email: 'lisa.meyer@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '4' },
  { benutzername: 'jonas.wagner', rolle: 'STUDENT', vorname: 'Jonas', nachname: 'Wagner', email: 'jonas.wagner@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '4' },
  { benutzername: 'emma.fischer', rolle: 'STUDENT', vorname: 'Emma', nachname: 'Fischer', email: 'emma.fischer@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '4' },
  { benutzername: 'lukas.hoffmann', rolle: 'STUDENT', vorname: 'Lukas', nachname: 'Hoffmann', email: 'lukas.hoffmann@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '4' },
  { benutzername: 'mia.schulz', rolle: 'STUDENT', vorname: 'Mia', nachname: 'Schulz', email: 'mia.schulz@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '3' },
  { benutzername: 'leon.koch', rolle: 'STUDENT', vorname: 'Leon', nachname: 'Koch', email: 'leon.koch@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '3' },
  { benutzername: 'sophie.richter', rolle: 'STUDENT', vorname: 'Sophie', nachname: 'Richter', email: 'sophie.richter@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '3' },
  { benutzername: 'paul.klein', rolle: 'STUDENT', vorname: 'Paul', nachname: 'Klein', email: 'paul.klein@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '3' },
  { benutzername: 'lena.wolf', rolle: 'STUDENT', vorname: 'Lena', nachname: 'Wolf', email: 'lena.wolf@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '3' },
  { benutzername: 'tim.schroeder', rolle: 'STUDENT', vorname: 'Tim', nachname: 'Schröder', email: 'tim.schroeder@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '2' },
  { benutzername: 'laura.neumann', rolle: 'STUDENT', vorname: 'Laura', nachname: 'Neumann', email: 'laura.neumann@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '2' },
  { benutzername: 'niklas.schwarz', rolle: 'STUDENT', vorname: 'Niklas', nachname: 'Schwarz', email: 'niklas.schwarz@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '2' },
  { benutzername: 'julia.zimmermann', rolle: 'STUDENT', vorname: 'Julia', nachname: 'Zimmermann', email: 'julia.zimmermann@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '2' },
  { benutzername: 'leon.weber', rolle: 'STUDENT', vorname: 'Leon', nachname: 'Weber', email: 'leon.weber@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '1' },
  { benutzername: 'marie.braun', rolle: 'STUDENT', vorname: 'Marie', nachname: 'Braun', email: 'marie.braun@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '1' },
  { benutzername: 'david.hartmann', rolle: 'STUDENT', vorname: 'David', nachname: 'Hartmann', email: 'david.hartmann@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '1' },
  { benutzername: 'sarah.lange', rolle: 'STUDENT', vorname: 'Sarah', nachname: 'Lange', email: 'sarah.lange@student.thm.de', studiengang: 'Bioverfahrenstechnik (BVT)', semester: '1' },
  { benutzername: 'sophie.braun', rolle: 'STUDENT', vorname: 'Sophie', nachname: 'Braun', email: 'sophie.braun@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '4' },
  { benutzername: 'markus.jung', rolle: 'STUDENT', vorname: 'Markus', nachname: 'Jung', email: 'markus.jung@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '4' },
  { benutzername: 'nina.krause', rolle: 'STUDENT', vorname: 'Nina', nachname: 'Krause', email: 'nina.krause@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '3' },
  { benutzername: 'kevin.frank', rolle: 'STUDENT', vorname: 'Kevin', nachname: 'Frank', email: 'kevin.frank@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '3' },
  { benutzername: 'lisa.sommer', rolle: 'STUDENT', vorname: 'Lisa', nachname: 'Sommer', email: 'lisa.sommer@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '3' },
  { benutzername: 'jan.winter', rolle: 'STUDENT', vorname: 'Jan', nachname: 'Winter', email: 'jan.winter@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '3' },
  { benutzername: 'elena.vogt', rolle: 'STUDENT', vorname: 'Elena', nachname: 'Vogt', email: 'elena.vogt@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '2' },
  { benutzername: 'tobias.stein', rolle: 'STUDENT', vorname: 'Tobias', nachname: 'Stein', email: 'tobias.stein@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '2' },
  { benutzername: 'julia.berger', rolle: 'STUDENT', vorname: 'Julia', nachname: 'Berger', email: 'julia.berger@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '2' },
  { benutzername: 'alexander.horn', rolle: 'STUDENT', vorname: 'Alexander', nachname: 'Horn', email: 'alexander.horn@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '2' },
  { benutzername: 'tim.hoffmann', rolle: 'STUDENT', vorname: 'Tim', nachname: 'Hoffmann', email: 'tim.hoffmann@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '1' },
  { benutzername: 'carla.huber', rolle: 'STUDENT', vorname: 'Carla', nachname: 'Huber', email: 'carla.huber@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '1' },
  { benutzername: 'florian.keller', rolle: 'STUDENT', vorname: 'Florian', nachname: 'Keller', email: 'florian.keller@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '1' },
  { benutzername: 'hannah.beck', rolle: 'STUDENT', vorname: 'Hannah', nachname: 'Beck', email: 'hannah.beck@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '1' },
  { benutzername: 'simon.lorenz', rolle: 'STUDENT', vorname: 'Simon', nachname: 'Lorenz', email: 'simon.lorenz@student.thm.de', studiengang: 'Forschung Soziale Arbeit (FSA)', semester: '1' },
  { benutzername: 'lisa.bio', rolle: 'STUDENT', vorname: 'Lisa', nachname: 'Schmidt', email: 'lisa.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '3' },
  { benutzername: 'max.bio', rolle: 'STUDENT', vorname: 'Max', nachname: 'Fischer', email: 'max.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '3' },
  { benutzername: 'anna.bio', rolle: 'STUDENT', vorname: 'Anna', nachname: 'Weber', email: 'anna.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '2' },
  { benutzername: 'felix.bio', rolle: 'STUDENT', vorname: 'Felix', nachname: 'Becker', email: 'felix.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '2' },
  { benutzername: 'sophie.bio', rolle: 'STUDENT', vorname: 'Sophie', nachname: 'Zimmermann', email: 'sophie.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '1' },
  { benutzername: 'leon.bio', rolle: 'STUDENT', vorname: 'Leon', nachname: 'Koch', email: 'leon.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '1' },
  { benutzername: 'mia.bio', rolle: 'STUDENT', vorname: 'Mia', nachname: 'Wagner', email: 'mia.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '1' },
  { benutzername: 'paul.bio', rolle: 'STUDENT', vorname: 'Paul', nachname: 'Hoffmann', email: 'paul.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '2' },
  { benutzername: 'lena.bio', rolle: 'STUDENT', vorname: 'Lena', nachname: 'Schulz', email: 'lena.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '3' },
  { benutzername: 'jonas.bio', rolle: 'STUDENT', vorname: 'Jonas', nachname: 'Braun', email: 'jonas.bio@student.uni-frankfurt.de', studiengang: 'Bioinformatik (BIO)', semester: '1' },
]
