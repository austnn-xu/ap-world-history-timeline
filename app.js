const iconPaths = {
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
  route: '<path d="M4 18c4-8 12-4 16-12"/><circle cx="5" cy="17" r="2"/><circle cx="19" cy="6" r="2"/>',
  crown: '<path d="m3 8 4 4 5-7 5 7 4-4-2 11H5L3 8Z"/><path d="M5 19h14"/>',
  ship: '<path d="M4 18h16"/><path d="M6 14h12l-2 4H8l-2-4Z"/><path d="M12 4v10"/><path d="m12 4 6 6h-6"/>',
  spark: '<path d="M12 2v5"/><path d="M12 17v5"/><path d="m4.93 4.93 3.54 3.54"/><path d="m15.53 15.53 3.54 3.54"/><path d="M2 12h5"/><path d="M17 12h5"/><path d="m4.93 19.07 3.54-3.54"/><path d="m15.53 8.47 3.54-3.54"/>',
  factory: '<path d="M3 21V9l6 4V9l6 4V5h6v16H3Z"/><path d="M7 17h1"/><path d="M12 17h1"/><path d="M17 17h1"/>',
  war: '<path d="m14 6 4 4"/><path d="m5 19 8-8"/><path d="M13 7 7 13"/><path d="m2 22 3-3"/><path d="M15 3h6v6"/>',
  atom: '<circle cx="12" cy="12" r="1.5"/><path d="M20.2 12c0 2-3.7 3.6-8.2 3.6S3.8 14 3.8 12 7.5 8.4 12 8.4s8.2 1.6 8.2 3.6Z"/><path d="M16.1 19.1c-1.7 1-4.9-1.5-7.1-5.4S6.3 5.9 8 4.9s4.9 1.5 7.1 5.4 2.7 7.8 1 8.8Z"/><path d="M7.9 19.1c-1.7-1-.9-4.9 1.4-8.8s5.4-6.4 7.1-5.4.9 4.9-1.4 8.8-5.4 6.4-7.1 5.4Z"/>',
  signal: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M8 12a4 4 0 0 1 8 0"/><circle cx="12" cy="12" r="1"/><path d="M12 13v7"/>'
};

const units = [
  {
    id: 1,
    title: "The Global Tapestry",
    years: "c. 1200-1450",
    accent: "#00d7ff",
    icon: "globe",
    summary:
      "Regional states and belief systems grew more complex across Afro-Eurasia and the Americas before the age of oceanic empires.",
    events: [
      ["Song China expands", "c. 960-1279", "China's Song dynasty used bureaucracy, Neo-Confucian education, Champa rice, paper money, gunpowder, and commercial cities to become one of the world's most sophisticated economies.", "State building"],
      ["Dar al-Islam connects regions", "c. 1200-1450", "Islamic caliphates, sultanates, scholars, merchants, and Sufi networks linked West Africa, the Middle East, South Asia, and Southeast Asia through religion and trade.", "Cultural diffusion"],
      ["Delhi Sultanate in South Asia", "1206-1526", "Turkic Muslim rulers established new states in northern India, creating political change while Hindu, Buddhist, and Islamic traditions interacted.", "Governance"],
      ["Mali and Mansa Musa", "c. 1235-1600", "Mali grew wealthy from gold and trans-Saharan trade; Mansa Musa's pilgrimage advertised West African wealth and Islamic learning to the wider world.", "Economic systems"],
      ["Swahili city-states flourish", "c. 1200-1500", "Kilwa, Mombasa, and other coastal cities blended African, Arab, Persian, and Indian Ocean influences through trade in gold, ivory, and textiles.", "Exchange"],
      ["Mesoamerican and Andean states", "c. 1200-1450", "The Mexica built tribute power in central Mexico, while Andean societies used mit'a labor, roads, and vertical farming to manage mountain environments.", "Humans and environment"]
    ]
  },
  {
    id: 2,
    title: "Networks of Exchange",
    years: "c. 1200-1450",
    accent: "#73ff9b",
    icon: "route",
    summary:
      "Trade routes intensified, moving goods, technologies, religions, diseases, and people across connected commercial zones.",
    events: [
      ["Silk Roads peak under Mongols", "13th-14th c.", "Mongol rule secured long-distance routes across Eurasia, increasing trade in silk, porcelain, horses, ideas, and technologies.", "Causation"],
      ["Mongol Empire transforms Eurasia", "1206-1368", "Chinggis Khan and successors built history's largest contiguous land empire, spreading military techniques while tolerating many local traditions.", "Comparison"],
      ["Indian Ocean trade expands", "c. 1200-1450", "Monsoon knowledge, dhows, junk ships, bills of exchange, and entrepots helped merchants connect East Africa, Arabia, India, Southeast Asia, and China.", "Networks"],
      ["Trans-Saharan trade grows", "c. 1200-1450", "Caravan routes moved gold, salt, enslaved people, textiles, and books while supporting cities such as Timbuktu and Gao.", "Economic systems"],
      ["Travelers record connected worlds", "13th-14th c.", "Marco Polo, Ibn Battuta, and Margery Kempe left accounts that reveal trade networks, religious travel, and cross-cultural curiosity.", "Sources"],
      ["Black Death spreads", "1340s-1350s", "Bubonic plague moved along trade routes, causing demographic collapse, labor shortages, social unrest, and long-term economic change.", "Continuity and change"]
    ]
  },
  {
    id: 3,
    title: "Land-Based Empires",
    years: "c. 1450-1750",
    accent: "#8d7cff",
    icon: "crown",
    summary:
      "Gunpowder, taxation, monumental art, and administrative systems helped large empires consolidate power across Eurasia.",
    events: [
      ["Ottoman conquest of Constantinople", "1453", "Mehmed II's conquest ended the Byzantine Empire and positioned the Ottomans as a major Mediterranean and Islamic power.", "State building"],
      ["Safavid Empire and Shi'a identity", "1501-1736", "Safavid rulers made Twelver Shi'ism central to Persian identity, creating rivalry with the Sunni Ottomans and shaping Iranian culture.", "Cultural developments"],
      ["Mughal Empire in India", "1526-1857", "Mughal rulers used gunpowder armies, mansabdars, zamindars, Persianate culture, and religious policies ranging from Akbar's tolerance to Aurangzeb's orthodoxy.", "Governance"],
      ["Qing conquest of China", "1644", "Manchu rulers expanded China's borders, preserved Confucian bureaucracy, and governed a multiethnic empire with careful legitimacy strategies.", "Imperial expansion"],
      ["Russian expansion across Siberia", "16th-18th c.", "Muscovy and later Romanov rulers expanded eastward, using fur tribute, Cossacks, and bureaucracy to build a Eurasian empire.", "Expansion"],
      ["Tokugawa shogunate stabilizes Japan", "1603-1868", "Japan's shoguns limited daimyo power, regulated foreign contact, and produced urban growth, commercial culture, and social hierarchy.", "Social organization"]
    ]
  },
  {
    id: 4,
    title: "Transoceanic Interconnections",
    years: "c. 1450-1750",
    accent: "#ff4fd8",
    icon: "ship",
    summary:
      "Oceanic exploration, colonization, mercantilism, coerced labor, and biological exchange reshaped the world.",
    events: [
      ["Portuguese maritime empire", "15th-16th c.", "Caravels, lateen sails, astrolabes, and armed trading posts helped Portugal build routes around Africa into the Indian Ocean.", "Technology"],
      ["Columbian Exchange", "after 1492", "Crops, animals, diseases, and people moved between hemispheres, producing population collapse in the Americas and new diets worldwide.", "Humans and environment"],
      ["Spanish conquest of Mexica and Inca", "1519-1533", "Cortes and Pizarro exploited disease, alliances, horses, steel, and imperial rivalries to overthrow powerful American empires.", "Causation"],
      ["Atlantic slave trade", "16th-19th c.", "European demand for plantation labor forcibly transported millions of Africans, transforming societies across Africa and the Americas.", "Labor systems"],
      ["Silver flows from Potosi and Mexico", "16th-18th c.", "American silver funded Spanish empire, crossed the Pacific to Manila, and entered China's tax economy, linking global markets.", "Economic systems"],
      ["Joint-stock companies and mercantilism", "17th c.", "The Dutch and British East India companies combined private capital with state power, while mercantilist policies sought colonial wealth.", "Commercial practices"]
    ]
  },
  {
    id: 5,
    title: "Revolutions",
    years: "c. 1750-1900",
    accent: "#ffb23f",
    icon: "spark",
    summary:
      "Enlightenment ideas, nationalism, liberalism, industrial technology, and Atlantic revolutions challenged older political and economic orders.",
    events: [
      ["Enlightenment political thought", "17th-18th c.", "Locke, Rousseau, Montesquieu, Wollstonecraft, and others argued about natural rights, popular sovereignty, separation of powers, and equality.", "Ideas"],
      ["American Revolution", "1775-1783", "Colonists used Enlightenment arguments to break from Britain, creating a republic that still protected slavery and limited full citizenship.", "Political change"],
      ["French Revolution", "1789-1799", "Fiscal crisis, inequality, Enlightenment language, and popular mobilization overturned monarchy and spread new ideas about citizenship.", "Causation"],
      ["Haitian Revolution", "1791-1804", "Enslaved and free people of color defeated French rule, creating the first Black republic and terrifying slaveholding societies.", "Social interactions"],
      ["Latin American independence", "1808-1826", "Creole elites, Indigenous and mixed-race rebels, Napoleon's invasion of Spain, and regional leaders broke Iberian colonial rule.", "Comparison"],
      ["Industrial Revolution begins", "c. 1750-1850", "Steam power, coal, textile machinery, factories, railroads, and capitalist investment transformed production first in Britain, then beyond.", "Technology"]
    ]
  },
  {
    id: 6,
    title: "Consequences of Industrialization",
    years: "c. 1750-1900",
    accent: "#00c2a8",
    icon: "factory",
    summary:
      "Industrial capitalism intensified imperialism, migration, environmental change, labor movements, and debates over reform.",
    events: [
      ["Second Industrial Revolution", "late 19th c.", "Steel, chemicals, electricity, oil, and precision machinery expanded industrial power in Germany, the United States, Russia, and Japan.", "Technology"],
      ["Meiji Restoration", "1868", "Japanese leaders ended shogunate rule, centralized the state, industrialized rapidly, and built a modern military to resist Western domination.", "State building"],
      ["New Imperialism in Africa and Asia", "c. 1870-1914", "Industrial powers used military technology, finance, racism, and resource demand to conquer or dominate large parts of Africa and Asia.", "Imperialism"],
      ["Opium Wars and unequal treaties", "1839-1842; 1856-1860", "British victory forced Qing China into treaty ports, indemnities, and foreign privileges, weakening Chinese sovereignty.", "Economic systems"],
      ["Indian Rebellion and British Raj", "1857-1858", "A major revolt against the East India Company led Britain to impose direct colonial rule over India.", "Resistance"],
      ["Global migration and labor reforms", "19th c.", "Industrial jobs, indentured servitude, abolition, settler colonialism, and urbanization moved millions and produced new labor politics.", "Social organization"]
    ]
  },
  {
    id: 7,
    title: "Global Conflict",
    years: "c. 1900-present",
    accent: "#ff5f57",
    icon: "war",
    summary:
      "Imperial rivalry, nationalism, economic crisis, fascism, communism, and total war remade global politics.",
    events: [
      ["World War I", "1914-1918", "Militarism, alliances, imperial rivalry, and nationalism produced total war, trench stalemate, mass death, and the collapse of empires.", "Causation"],
      ["Russian Revolution and USSR", "1917-1922", "War crisis and inequality helped Bolsheviks seize power, creating a communist state that pursued planned economics and one-party rule.", "Political change"],
      ["Treaty of Versailles and mandates", "1919", "Peace settlements punished Germany, redrew borders, created mandates, and fed future grievances while promising self-determination unevenly.", "Continuity and change"],
      ["Great Depression", "1929-1930s", "Global market collapse hurt trade, employment, and trust in liberal capitalism, encouraging state intervention and extremist politics.", "Economic systems"],
      ["World War II", "1939-1945", "Fascist expansion, appeasement, militarism, and unresolved tensions produced a global war ending with genocide, atomic bombs, and new superpowers.", "Global conflict"],
      ["Holocaust and mass atrocities", "1930s-1945", "Nazi racial ideology and modern state machinery murdered six million Jews and millions of other victims, reshaping human rights debates.", "Social interactions"]
    ]
  },
  {
    id: 8,
    title: "Cold War and Decolonization",
    years: "c. 1900-present",
    accent: "#00d7ff",
    icon: "atom",
    summary:
      "After World War II, superpower rivalry and anticolonial movements reshaped sovereignty, development, and identity.",
    events: [
      ["United Nations founded", "1945", "The UN aimed to prevent war, coordinate diplomacy, and promote human rights, though Cold War politics often limited action.", "Institutions"],
      ["Cold War blocs form", "1945-1991", "The United States and Soviet Union competed through alliances, nuclear arms, ideology, espionage, aid, and proxy wars.", "Comparison"],
      ["Chinese Communist Revolution", "1949", "Mao Zedong's victory created the People's Republic of China, followed by land reform, collectivization, and major social campaigns.", "Political change"],
      ["Indian independence and partition", "1947", "Mass movements, British weakness, and communal tensions produced independence, partition, migration, and violence in South Asia.", "Decolonization"],
      ["African decolonization", "1950s-1970s", "Ghana, Algeria, Kenya, Congo, and others pursued independence through diplomacy, protest, and armed struggle against European empires.", "Resistance"],
      ["Non-Aligned Movement", "1955-1961", "Leaders from newly independent states sought a third path outside formal U.S. or Soviet control, beginning with Bandung-era cooperation.", "Global politics"]
    ]
  },
  {
    id: 9,
    title: "Globalization",
    years: "c. 1900-present",
    accent: "#2f80ed",
    icon: "signal",
    summary:
      "Technology, trade, migration, climate pressures, rights movements, and global institutions made the late twentieth and early twenty-first centuries deeply interconnected.",
    events: [
      ["Postwar economic institutions", "1944-present", "The IMF, World Bank, GATT, and WTO encouraged trade, loans, development, and market integration with uneven effects.", "Economic systems"],
      ["Green Revolution", "mid-20th c.", "High-yield crops, fertilizers, irrigation, and mechanization increased food production while raising environmental and equity concerns.", "Humans and environment"],
      ["Digital and communications revolutions", "late 20th c.", "Satellites, computers, the internet, and mobile devices sped up finance, culture, activism, education, and surveillance.", "Technology"],
      ["Human rights and social movements", "20th-21st c.", "Feminist, civil rights, Indigenous, LGBTQ, anti-apartheid, and democracy movements challenged states and social hierarchies.", "Social organization"],
      ["Global environmental change", "20th-21st c.", "Industrial growth, population change, fossil fuels, deforestation, and climate change created shared environmental crises.", "Environment"],
      ["Global popular culture and migration", "late 20th-21st c.", "Media, sports, music, tourism, diasporas, and labor migration spread cultural forms while provoking debates over identity.", "Cultural diffusion"]
    ]
  }
];

const studyNotes = {
  1: {
    points: [
      "Major states used bureaucracy, tribute, religion, and elite education to stabilize rule.",
      "Song China shows how technology, agriculture, and markets can strengthen a state.",
      "Belief systems shaped legitimacy, social hierarchy, and cultural identity across regions."
    ],
    vocab: ["Neo-Confucianism", "Champa rice", "tribute", "Mansa Musa", "mit'a", "Swahili"],
    remember: "Unit 1 is mostly about regional comparison: how different societies organized power before global oceanic empires.",
    visuals: [
      { label: "Song city life", tone: "#00d7ff", src: "assets/unit1.jpg" },
      { label: "Imperial architecture", tone: "#73ff9b", src: "assets/unit3b.jpg" },
      { label: "Global tapestry", tone: "#ffb23f", src: "assets/unit3.jpg" }
    ]
  },
  2: {
    points: [
      "Trade networks carried goods, but also technology, religion, disease, and cultural ideas.",
      "Mongol rule increased Eurasian connection while also spreading violence and disruption.",
      "Commercial growth depended on environmental knowledge, credit, ports, and caravan systems."
    ],
    vocab: ["Silk Roads", "Pax Mongolica", "diaspora", "monsoon winds", "caravanserai", "Black Death"],
    remember: "For Unit 2, always connect exchange to consequences: trade rarely moves only products.",
    visuals: [
      { label: "Silk Roads", tone: "#73ff9b", src: "assets/unit1.jpg" },
      { label: "Indian Ocean exchange", tone: "#00d7ff", src: "assets/unit3b.jpg" },
      { label: "Travel and trade", tone: "#8d7cff", src: "assets/unit6b.jpg" }
    ]
  },
  3: {
    points: [
      "Land empires used gunpowder armies, tax systems, and administrative elites to expand.",
      "Rulers blended religious legitimacy, monumental art, and bureaucracy to project authority.",
      "Multiethnic empires had to balance central control with local traditions and resistance."
    ],
    vocab: ["gunpowder empire", "devshirme", "zamindar", "janissaries", "Twelver Shi'ism", "Manchu"],
    remember: "Unit 3 loves comparison: Ottoman, Safavid, Mughal, Qing, Russian, and Tokugawa methods of rule.",
    visuals: [
      { label: "Ottoman rule", tone: "#8d7cff", src: "assets/unit3.jpg" },
      { label: "Mughal architecture", tone: "#ffb23f", src: "assets/unit3b.jpg" },
      { label: "Imperial power", tone: "#ff5f57", src: "assets/unit5.jpg" }
    ]
  },
  4: {
    points: [
      "Maritime technology and state-backed exploration created sustained transoceanic links.",
      "The Columbian Exchange changed diets, disease environments, labor needs, and populations.",
      "Plantation slavery, silver mining, and mercantilism tied colonies to global capitalism."
    ],
    vocab: ["Columbian Exchange", "mercantilism", "joint-stock company", "encomienda", "Middle Passage", "Manila galleons"],
    remember: "Unit 4 is the major turn toward a truly global economy, but it came with conquest and coerced labor.",
    visuals: [
      { label: "Ocean crossings", tone: "#00d7ff", src: "assets/unit6b.jpg" },
      { label: "Silver circuits", tone: "#ff4fd8", src: "assets/unit3b.jpg" },
      { label: "Atlantic systems", tone: "#ff5f57", src: "assets/unit7.jpg" }
    ]
  },
  5: {
    points: [
      "Enlightenment ideals challenged monarchy, hierarchy, and inherited privilege.",
      "Revolutions often promised rights while still excluding women, enslaved people, and colonized groups.",
      "Industrialization changed production, class relations, urban life, and the global balance of power."
    ],
    vocab: ["natural rights", "popular sovereignty", "nationalism", "liberalism", "factory system", "socialism"],
    remember: "For Unit 5, track both political revolutions and industrial revolution; AP asks how ideas and machines changed power.",
    visuals: [
      { label: "Atlantic revolutions", tone: "#ffb23f", src: "assets/unit5.jpg" },
      { label: "Factory systems", tone: "#00c2a8", src: "assets/unit5b.jpg" },
      { label: "Rights debates", tone: "#ff4fd8", src: "assets/unit6.jpg" }
    ]
  },
  6: {
    points: [
      "Industrial states wanted raw materials, markets, investment outlets, and strategic territory.",
      "Imperialism relied on technology and racial ideology, but colonized peoples resisted in many ways.",
      "Migration expanded because of labor demand, abolition, poverty, and empire."
    ],
    vocab: ["New Imperialism", "Social Darwinism", "spheres of influence", "indentured labor", "settler colony", "Raj"],
    remember: "Unit 6 asks what industrialization did to the rest of the world: empire, migration, reform, and resistance.",
    visuals: [
      { label: "Industrial cities", tone: "#00c2a8", src: "assets/unit6.jpg" },
      { label: "Imperial conflict", tone: "#8d7cff", src: "assets/unit6b.jpg" },
      { label: "Labor and migration", tone: "#73ff9b", src: "assets/unit5b.jpg" }
    ]
  },
  7: {
    points: [
      "Total war mobilized economies, civilians, propaganda, science, and state power.",
      "Economic crisis and unresolved grievances helped fascism and militarism grow.",
      "Genocide and mass violence forced new global conversations about human rights."
    ],
    vocab: ["total war", "fascism", "appeasement", "self-determination", "genocide", "mandate system"],
    remember: "In Unit 7, connect causes, conduct, and consequences of war instead of memorizing battles alone.",
    visuals: [
      { label: "World war fronts", tone: "#ff5f57", src: "assets/unit7.jpg" },
      { label: "Revolutionary crisis", tone: "#ffb23f", src: "assets/unit5.jpg" },
      { label: "Urban war", tone: "#8d7cff", src: "assets/unit8.jpg" }
    ]
  },
  8: {
    points: [
      "The Cold War was ideological, military, economic, and cultural, even when superpowers avoided direct war.",
      "Decolonization came through negotiation, mass protest, civil disobedience, and armed struggle.",
      "New states faced border conflicts, development pressures, and Cold War intervention."
    ],
    vocab: ["containment", "proxy war", "nonalignment", "partition", "decolonization", "nuclear deterrence"],
    remember: "Unit 8 is about two overlapping stories: superpower rivalry and the end of European empires.",
    visuals: [
      { label: "Cold War blocs", tone: "#00d7ff", src: "assets/unit8.jpg" },
      { label: "Independence movements", tone: "#73ff9b", src: "assets/unit3b.jpg" },
      { label: "New nations", tone: "#ffb23f", src: "assets/unit6b.jpg" }
    ]
  },
  9: {
    points: [
      "Globalization accelerated through trade institutions, container shipping, aviation, and digital networks.",
      "New technologies improved life for many while also expanding surveillance, inequality, and environmental pressure.",
      "Rights movements and cultural exchange challenged older borders and identities."
    ],
    vocab: ["globalization", "Green Revolution", "IMF", "World Bank", "WTO", "climate change"],
    remember: "Unit 9 is the modern synthesis: technology links the world, but the benefits and costs are uneven.",
    visuals: [
      { label: "Global networks", tone: "#2f80ed", src: "assets/unit8.jpg" },
      { label: "Container trade", tone: "#00c2a8", src: "assets/unit6.jpg" },
      { label: "Global exchange", tone: "#73ff9b", src: "assets/unit1.jpg" }
    ]
  }
};

const floatingLayouts = [
  [
    { x: "2%", y: "6%", r: "-5deg" },
    { x: "34%", y: "30%", r: "4deg" },
    { x: "8%", y: "58%", r: "-2deg" }
  ],
  [
    { x: "30%", y: "2%", r: "5deg" },
    { x: "0%", y: "34%", r: "-4deg" },
    { x: "48%", y: "60%", r: "3deg" }
  ],
  [
    { x: "6%", y: "18%", r: "3deg" },
    { x: "42%", y: "6%", r: "-5deg" },
    { x: "24%", y: "62%", r: "5deg" }
  ]
];

const imageAssets = {
  songCity: { src: "assets/apw/song-china-city.jpg", label: "Song China city life", tone: "#00d7ff", focus: "50% 45%" },
  songMap: { src: "assets/wiki/song-dynasty.png", label: "Song dynasty", tone: "#00d7ff", focus: "50% 45%" },
  djenne: { src: "assets/wiki/great-mosque-djenne.jpg", label: "Great Mosque of Djenne", tone: "#73ff9b", focus: "50% 48%" },
  mansaMusa: { src: "assets/wiki/mansa-musa.jpg", label: "Mansa Musa", tone: "#ffb23f", focus: "50% 42%" },
  inca: { src: "assets/wiki/inca-empire.png", label: "Inca Empire", tone: "#8d7cff", focus: "50% 50%" },
  silkRoad: { src: "assets/wiki/silk-road.png", label: "Silk Road", tone: "#73ff9b", focus: "50% 50%" },
  caravan: { src: "assets/apw/silk-road-caravan.jpg", label: "Silk Road caravan", tone: "#ffb23f", focus: "50% 45%" },
  blackDeath: { src: "assets/wiki/black-death.png", label: "Black Death", tone: "#8d7cff", focus: "50% 42%" },
  blackDeathManuscript: { src: "assets/apw/black-death.jpg", label: "Plague manuscript", tone: "#ff5f57", focus: "50% 40%" },
  ottoman: { src: "assets/apw/ottoman-sultan.jpg", label: "Ottoman sultan", tone: "#8d7cff", focus: "45% 35%" },
  safavid: { src: "assets/wiki/safavid-iran.png", label: "Safavid Iran", tone: "#00d7ff", focus: "50% 50%" },
  tajMahal: { src: "assets/unit3b.jpg", label: "Taj Mahal", tone: "#ffb23f", focus: "50% 46%" },
  qing: { src: "assets/wiki/qing-dynasty.png", label: "Qing dynasty", tone: "#73ff9b", focus: "50% 50%" },
  oceanEmpire: { src: "assets/unit6b.jpg", label: "Imperial maritime conflict", tone: "#00d7ff", focus: "52% 40%" },
  silverEmpire: { src: "assets/unit3b.jpg", label: "Silver and empire", tone: "#ff4fd8", focus: "50% 46%" },
  coercedLabor: { src: "assets/unit7.jpg", label: "Coerced labor and empire", tone: "#ff5f57", focus: "50% 42%" },
  frenchRevolution: { src: "assets/unit5.jpg", label: "French Revolution", tone: "#ffb23f", focus: "48% 42%" },
  haitian: { src: "assets/wiki/haitian-revolution.jpg", label: "Haitian Revolution", tone: "#ff5f57", focus: "50% 42%" },
  spinningJenny: { src: "assets/unit5b.jpg", label: "Spinning jenny", tone: "#00c2a8", focus: "52% 50%" },
  crystalPalace: { src: "assets/unit6.jpg", label: "Industrial exhibition", tone: "#73ff9b", focus: "50% 48%" },
  meiji: { src: "assets/wiki/meiji-restoration.jpg", label: "Meiji Restoration", tone: "#ffb23f", focus: "50% 42%" },
  opiumWar: { src: "assets/unit6b.jpg", label: "Opium War", tone: "#8d7cff", focus: "52% 40%" },
  industrialMachine: { src: "assets/unit5b.jpg", label: "Industrial machinery", tone: "#00c2a8", focus: "35% 50%" },
  wwi: { src: "assets/unit7.jpg", label: "World War I front", tone: "#ff5f57", focus: "50% 42%" },
  depression: { src: "assets/wiki/great-depression.jpg", label: "Great Depression", tone: "#8d7cff", focus: "50% 40%" },
  holocaust: { src: "assets/wiki/the-holocaust.jpg", label: "Holocaust memorial context", tone: "#ff5f57", focus: "50% 44%" },
  berlinWall: { src: "assets/unit8.jpg", label: "Berlin Wall", tone: "#00d7ff", focus: "50% 42%" },
  coldWar: { src: "assets/wiki/cold-war.png", label: "Cold War", tone: "#2f80ed", focus: "50% 50%" },
  partition: { src: "assets/wiki/partition-india.jpg", label: "Partition of India", tone: "#ffb23f", focus: "50% 40%" },
  nonAligned: { src: "assets/wiki/non-aligned.png", label: "Non-Aligned Movement", tone: "#73ff9b", focus: "50% 50%" },
  globalization: { src: "assets/wiki/globalization.png", label: "Globalization", tone: "#2f80ed", focus: "50% 50%" },
  greenRevolution: { src: "assets/wiki/green-revolution.png", label: "Green Revolution", tone: "#73ff9b", focus: "50% 50%" },
  sputnik: { src: "assets/wiki/sputnik.jpg", label: "Satellite technology", tone: "#00d7ff", focus: "50% 50%" },
  containerShip: { src: "assets/wiki/container-ship.jpg", label: "Container shipping", tone: "#00c2a8", focus: "50% 45%" },
  climate: { src: "assets/wiki/climate-change.png", label: "Climate change", tone: "#73ff9b", focus: "50% 50%" }
};

const assetPool = Object.values(imageAssets);

const unitVisualSets = {
  1: [imageAssets.songCity, imageAssets.songMap, imageAssets.djenne, imageAssets.mansaMusa, imageAssets.inca],
  2: [imageAssets.silkRoad, imageAssets.caravan, imageAssets.blackDeath, imageAssets.blackDeathManuscript, imageAssets.songCity],
  3: [imageAssets.ottoman, imageAssets.safavid, imageAssets.tajMahal, imageAssets.qing, imageAssets.songMap],
  4: [imageAssets.oceanEmpire, imageAssets.silverEmpire, imageAssets.coercedLabor, imageAssets.containerShip, imageAssets.djenne],
  5: [imageAssets.frenchRevolution, imageAssets.haitian, imageAssets.spinningJenny, imageAssets.crystalPalace, imageAssets.mansaMusa],
  6: [imageAssets.crystalPalace, imageAssets.meiji, imageAssets.opiumWar, imageAssets.industrialMachine, imageAssets.qing],
  7: [imageAssets.wwi, imageAssets.depression, imageAssets.holocaust, imageAssets.berlinWall, imageAssets.frenchRevolution],
  8: [imageAssets.coldWar, imageAssets.partition, imageAssets.nonAligned, imageAssets.berlinWall, imageAssets.haitian],
  9: [imageAssets.globalization, imageAssets.greenRevolution, imageAssets.sputnik, imageAssets.containerShip, imageAssets.climate]
};

const topicImageRules = [
  { terms: ["song"], image: imageAssets.songCity },
  { terms: ["dar al-islam", "islamic", "swahili"], image: imageAssets.djenne },
  { terms: ["mali", "mansa"], image: imageAssets.mansaMusa },
  { terms: ["mesoamerican", "andean", "inca"], image: imageAssets.inca },
  { terms: ["silk"], image: imageAssets.silkRoad },
  { terms: ["mongol"], image: imageAssets.caravan },
  { terms: ["indian ocean", "trans-saharan", "travelers"], image: imageAssets.caravan },
  { terms: ["black death"], image: imageAssets.blackDeath },
  { terms: ["ottoman", "constantinople"], image: imageAssets.ottoman },
  { terms: ["safavid"], image: imageAssets.safavid },
  { terms: ["mughal"], image: imageAssets.tajMahal },
  { terms: ["qing"], image: imageAssets.qing },
  { terms: ["tokugawa", "russian"], image: imageAssets.qing },
  { terms: ["portuguese", "columbian", "spanish conquest"], image: imageAssets.oceanEmpire },
  { terms: ["slave", "plantation"], image: imageAssets.coercedLabor },
  { terms: ["silver", "joint-stock", "mercantilism"], image: imageAssets.silverEmpire },
  { terms: ["enlightenment", "american revolution", "french revolution"], image: imageAssets.frenchRevolution },
  { terms: ["haitian"], image: imageAssets.haitian },
  { terms: ["latin american"], image: imageAssets.frenchRevolution },
  { terms: ["industrial revolution"], image: imageAssets.spinningJenny },
  { terms: ["second industrial", "labor reforms"], image: imageAssets.crystalPalace },
  { terms: ["meiji"], image: imageAssets.meiji },
  { terms: ["imperialism"], image: imageAssets.oceanEmpire },
  { terms: ["opium"], image: imageAssets.opiumWar },
  { terms: ["indian rebellion"], image: imageAssets.partition },
  { terms: ["world war i"], image: imageAssets.wwi },
  { terms: ["russian revolution", "treaty"], image: imageAssets.wwi },
  { terms: ["great depression"], image: imageAssets.depression },
  { terms: ["world war ii"], image: imageAssets.wwi },
  { terms: ["holocaust"], image: imageAssets.holocaust },
  { terms: ["united nations", "cold war blocs"], image: imageAssets.coldWar },
  { terms: ["chinese communist"], image: imageAssets.coldWar },
  { terms: ["indian independence", "partition"], image: imageAssets.partition },
  { terms: ["african decolonization", "non-aligned"], image: imageAssets.nonAligned },
  { terms: ["postwar economic", "global popular", "globalization"], image: imageAssets.globalization },
  { terms: ["green revolution"], image: imageAssets.greenRevolution },
  { terms: ["digital", "communications"], image: imageAssets.sputnik },
  { terms: ["human rights"], image: imageAssets.nonAligned },
  { terms: ["environmental"], image: imageAssets.climate }
];

const searchHints = [
  { terms: ["lenin", "bolshevik", "russian revolution", "stalin", "ussr", "communism", "versailles", "fascism", "hitler", "holocaust", "world war", "depression"], unit: 7 },
  { terms: ["cold war", "mao", "gandhi", "partition", "decolonization", "nonaligned", "non-aligned", "proxy", "nuclear", "berlin"], unit: 8 },
  { terms: ["internet", "climate", "globalization", "wto", "imf", "world bank", "green revolution", "digital", "container"], unit: 9 },
  { terms: ["industrial", "imperialism", "meiji", "opium", "raj", "indentured", "migration", "social darwinism"], unit: 6 },
  { terms: ["enlightenment", "robespierre", "haiti", "haitian", "american revolution", "french revolution", "nationalism", "liberalism", "socialism"], unit: 5 },
  { terms: ["columbus", "columbian", "silver", "potosi", "middle passage", "slave trade", "mercantilism", "joint-stock", "plantation"], unit: 4 },
  { terms: ["ottoman", "safavid", "mughal", "qing", "russia", "tokugawa", "gunpowder", "janissary", "zamindar"], unit: 3 },
  { terms: ["mongol", "silk road", "ibn battuta", "marco polo", "black death", "indian ocean", "trans-saharan", "caravan"], unit: 2 },
  { terms: ["song", "china", "mali", "mansa musa", "swahili", "islam", "buddhism", "hinduism", "aztec", "mexica", "inca"], unit: 1 }
];

const timelineList = document.querySelector("#timelineList");
const unitNav = document.querySelector("#unitNav");
const panelUnit = document.querySelector("#panelUnit");
const panelTitle = document.querySelector("#panelTitle");
const panelText = document.querySelector("#panelText");
const panelRange = document.querySelector("#panelRange");
const panelSkill = document.querySelector("#panelSkill");
const panelPoints = document.querySelector("#panelPoints");
const panelVocab = document.querySelector("#panelVocab");
const panelRemember = document.querySelector("#panelRemember");
const panelImages = document.querySelector("#panelImages");
const imageCloud = document.querySelector("#imageCloud");
const lineProgress = document.querySelector("#lineProgress");
const expandAllButton = document.querySelector("#expandAll");
const themeToggle = document.querySelector("#themeToggle");
const searchForm = document.querySelector("#searchForm");
const timelineSearch = document.querySelector("#timelineSearch");
const searchResult = document.querySelector("#searchResult");
const readingPanel = document.querySelector(".reading-panel");
let pinnedCard = null;

function iconSvg(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.globe}</svg>`;
}

function topicVisuals(unit, topicTitle, topicIndex) {
  const loweredTitle = topicTitle.toLowerCase();
  const set = unitVisualSets[unit.id] || assetPool;
  const primary =
    topicImageRules.find((rule) => rule.terms.some((term) => loweredTitle.includes(term)))?.image ||
    set[topicIndex % set.length];

  const context = set.filter((image) => image.src !== primary.src);
  const second = context[topicIndex % context.length] || set[(topicIndex + 1) % set.length] || primary;
  const third = context[(topicIndex + 1) % context.length] || set[(topicIndex + 2) % set.length] || primary;

  return [primary, second, third];
}

function visualMarkup(visuals, layout) {
  return visuals
    .map(
      (visual, index) => `
      <figure
        class="floating-image"
        data-label="${visual.label}"
        style="--tone:${visual.tone};--x:${layout[index].x};--y:${layout[index].y};--r:${layout[index].r};--focus:${visual.focus}"
      >
        <img src="${visual.src}" alt="${visual.label}" loading="lazy" />
        <figcaption>${visual.label}</figcaption>
      </figure>
    `
    )
    .join("");
}

function render() {
  unitNav.innerHTML = units
    .map((unit) => `<a href="#unit-${unit.id}" title="${unit.title}" data-unit-link="${unit.id}">Unit ${unit.id}</a>`)
    .join("");

  timelineList.innerHTML = units
    .map(
      (unit) => `
      <section class="unit-block" id="unit-${unit.id}" data-unit="${unit.id}" style="--accent:${unit.accent}">
        <div class="unit-heading">
          <p class="eyebrow">Unit ${unit.id} - ${unit.years}</p>
          <h2>${unit.title}</h2>
          <p>${unit.summary}</p>
        </div>
        ${unit.events
          .map(
            ([title, date, summary, skill], index) => `
              <article
                class="event-card"
                tabindex="0"
                data-unit="${unit.id}"
                data-index="${index}"
                style="--accent:${unit.accent}"
                aria-label="${title}, ${date}"
              >
                <span class="timeline-dot" aria-hidden="true"></span>
                <span class="event-icon">${iconSvg(unit.icon)}</span>
                <div class="event-body">
                  <p class="event-date">${date}</p>
                  <h3 class="event-title">${title}</h3>
                  <p class="event-summary">${summary}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `
    )
    .join("");
}

function setActive(card) {
  if (!card) return;
  document.querySelectorAll(".event-card.active").forEach((item) => item.classList.remove("active"));
  card.classList.add("active");

  const unit = units.find((candidate) => candidate.id === Number(card.dataset.unit));
  const [title, date, summary, skill] = unit.events[Number(card.dataset.index)];
  const notes = studyNotes[unit.id];

  panelUnit.textContent = `Unit ${unit.id} - ${unit.title}`;
  panelTitle.textContent = title;
  panelText.textContent = summary;
  panelRange.textContent = date;
  panelSkill.textContent = skill;
  panelUnit.style.color = unit.accent;
  readingPanel.style.setProperty("--accent", unit.accent);
  panelPoints.innerHTML = notes.points.map((point) => `<li>${point}</li>`).join("");
  panelVocab.innerHTML = notes.vocab.map((word) => `<span>${word}</span>`).join("");
  panelRemember.textContent = notes.remember;

  const layout = floatingLayouts[Number(card.dataset.index) % floatingLayouts.length];
  const visuals = topicVisuals(unit, title, Number(card.dataset.index));
  const markup = visualMarkup(visuals, layout);
  imageCloud.style.setProperty("--accent", unit.accent);
  imageCloud.innerHTML = markup;
  panelImages.innerHTML = markup;
  positionImageCloud(card);
  positionReadingPanel(card);
  imageCloud.classList.add("show");
}

function positionReadingPanel(card) {
  if (window.matchMedia("(max-width: 1300px), (pointer: coarse), (hover: none)").matches) {
    readingPanel.style.setProperty("--panel-offset", "0px");
    return;
  }
  const panelRect = readingPanel.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const desiredCenter = cardRect.top + cardRect.height / 2;
  const currentCenter = panelRect.top + panelRect.height / 2;
  const offset = Math.min(Math.max(desiredCenter - currentCenter, -72), 180);
  readingPanel.style.setProperty("--panel-offset", `${offset}px`);
}

function positionImageCloud(card) {
  if (window.matchMedia("(max-width: 1300px), (pointer: coarse), (hover: none)").matches) {
    imageCloud.style.left = "";
    imageCloud.style.top = "";
    return;
  }
  const rect = card.getBoundingClientRect();
  const cloudWidth = Math.min(window.innerWidth * 0.44, 560);
  const rightSpace = window.innerWidth - rect.right;
  const left = rightSpace > cloudWidth + 28 ? rect.right + 24 : Math.max(18, rect.left - cloudWidth - 24);
  const maxTop = Math.max(92, window.innerHeight - 455);
  const top = Math.min(Math.max(rect.top - 42, 92), maxTop);
  imageCloud.style.left = `${left}px`;
  imageCloud.style.top = `${top}px`;
}

function updateProgress() {
  const line = document.querySelector(".timeline-line");
  if (!line || line.offsetHeight <= 0) return;
  const lineTop = line.getBoundingClientRect().top + window.scrollY;
  const lineHeight = line.offsetHeight;
  const viewportAnchor = window.innerHeight * 0.55;
  const progress = Math.min(Math.max((window.scrollY + viewportAnchor - lineTop) / lineHeight, 0), 1);
  lineProgress.style.height = `${progress * 100}%`;
}

function updateActiveNav(unitId) {
  document.querySelectorAll("[data-unit-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.unitLink === String(unitId));
  });
}

function setPinned(card) {
  if (pinnedCard === card) {
    card.classList.remove("locked");
    pinnedCard = null;
    return;
  }
  pinnedCard = card;
  document.querySelectorAll(".event-card.locked").forEach((item) => item.classList.remove("locked"));
  card.classList.add("locked");
  setActive(card);
}

function scoreUnit(query, unit) {
  const text = [
    unit.title,
    unit.summary,
    ...unit.events.flatMap(([title, date, summary, skill]) => [title, date, summary, skill]),
    ...studyNotes[unit.id].vocab,
    ...studyNotes[unit.id].points
  ]
    .join(" ")
    .toLowerCase();
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  return words.reduce((score, word) => score + (text.includes(word) ? 1 : 0), 0);
}

function inferSearchTarget(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return null;

  const hinted = searchHints.find((hint) => hint.terms.some((term) => normalized.includes(term)));
  if (hinted) {
    return { unit: units.find((unit) => unit.id === hinted.unit), reason: "keyword match" };
  }

  const ranked = units
    .map((unit) => ({ unit, score: scoreUnit(normalized, unit) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0].score > 0 ? { unit: ranked[0].unit, reason: "timeline text match" } : { unit: units[0], reason: "best guess" };
}

function applyTheme(theme) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = nextTheme;
  themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
  themeToggle.querySelector("span").textContent = nextTheme === "dark" ? "Light" : "Dark";
  try {
    localStorage.setItem("apWorldTheme", nextTheme);
  } catch (error) {
    // Local files can be opened with storage disabled in some browsers.
  }
}

function initialTheme() {
  try {
    return localStorage.getItem("apWorldTheme") || "light";
  } catch (error) {
    return "light";
  }
}

applyTheme(initialTheme());
render();

timelineList.addEventListener("pointerover", (event) => {
  if (pinnedCard) return;
  const card = event.target.closest(".event-card");
  if (card) setActive(card);
});

timelineList.addEventListener("focusin", (event) => {
  if (pinnedCard) return;
  const card = event.target.closest(".event-card");
  if (card) setActive(card);
});

timelineList.addEventListener("click", (event) => {
  const card = event.target.closest(".event-card");
  if (card) setPinned(card);
  requestAnimationFrame(updateProgress);
});

imageCloud.addEventListener(
  "error",
  (event) => {
    const image = event.target.closest("img");
    const frame = event.target.closest(".floating-image");
    if (image && frame) frame.classList.add("image-error");
  },
  true
);

panelImages.addEventListener(
  "error",
  (event) => {
    const image = event.target.closest("img");
    const frame = event.target.closest(".floating-image");
    if (image && frame) frame.classList.add("image-error");
  },
  true
);

expandAllButton.addEventListener("click", () => {
  timelineList.classList.toggle("expanded");
  const expanded = timelineList.classList.contains("expanded");
  expandAllButton.textContent = expanded ? "Collapse all" : "Expand all";
});

themeToggle.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const target = inferSearchTarget(timelineSearch.value);
  if (!target) return;

  const firstCard = document.querySelector(`#unit-${target.unit.id} .event-card`);
  pinnedCard?.classList.remove("locked");
  pinnedCard = null;
  setActive(firstCard);
  searchResult.textContent = `Best match: Unit ${target.unit.id}, ${target.unit.title}.`;
  document.querySelector(`#unit-${target.unit.id}`).scrollIntoView({ behavior: "smooth", block: "start" });
  requestAnimationFrame(updateProgress);
});

const unitObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) updateActiveNav(visible.target.dataset.unit);
  },
  { rootMargin: "-15% 0px -55% 0px", threshold: [0.08, 0.18, 0.35] }
);

document.querySelectorAll(".unit-block").forEach((unit) => unitObserver.observe(unit));
document.querySelector(".event-card")?.classList.add("active");
setActive(document.querySelector(".event-card"));
updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener(
  "scroll",
  () => {
    const active = document.querySelector(".event-card.active");
    if (active) {
      positionImageCloud(active);
      positionReadingPanel(active);
    }
  },
  { passive: true }
);
window.addEventListener("resize", () => {
  updateProgress();
  const active = document.querySelector(".event-card.active");
  if (active) {
    positionImageCloud(active);
    positionReadingPanel(active);
  }
});
