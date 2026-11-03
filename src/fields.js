// Added goldfields: Calliope, Peak Downs, Crocodile Creek, Cape River, Ravenswood, Gilbert and Etheridge, Hodgkinson,
// Mount Morgan and Croydon. Loaded after info.js, sources.js and folklore.js (see build.js).
// Every fact has a source key. Nothing here is invented. Where sources disagree, the entry says so.
// "discuss" and "folkTeach" are removed from the student build by build.js.
(function () {
var I = window.INFO;

// ---------- title, subtitle and description ----------
I.title = 'The Queensland Gold Rush, 1858 to 1886';
I.subtitle = 'An information bank about Canoona, Calliope, Gympie, Charters Towers, the Palmer River and other Queensland goldfields';
I.description = 'A non-fiction information bank about the Queensland gold rush from Canoona in 1858 to Croydon in 1886: Calliope, Peak Downs, Crocodile Creek, Gympie, Cape River, Ravenswood, the Gilbert and Etheridge, Charters Towers, the Palmer River, the Hodgkinson and Mount Morgan. Overview, map, timeline, places, people, real lives and sources. Includes Chinese miners and Aboriginal people.';
I.dateLeft = 'Queensland · 1858 to 1886';

// ---------- images ----------
I.images.manypeaks = { file: 'images/many-peaks-ca1910.jpg', w: 1000, h: 661, alt: 'A hand-coloured postcard. A dirt street runs between wooden buildings and gum trees inside a frame shaped like an artist’s palette. A sign on one building says Newsagent. There are flowers and paint brushes around the frame.', caption: 'The town of Many Peaks, about 1910, on a postcard. The State Library of Queensland describes Many Peaks as once a prosperous gold mining centre in the Calliope area. Queensland Places says copper ore was found at Many Peaks in 1896 and that a railway reached the mine in 1910.', credit: 'Unknown author, H & B postcard series, State Library of Queensland (public domain)', url: 'https://commons.wikimedia.org/wiki/File:StateLibQld_2_67598_Town_of_Many_Peaks,_featured_on_an_artist%27s_palette_with_flowers_decorating_the_corners,_ca._1910.jpg' };
I.images.morgan = { file: 'images/mount-morgan-1897.jpg', w: 720, h: 531, alt: 'A brown-toned photograph looking down on a mine with tall brick chimneys, large iron-roofed sheds and smoke. A town can be seen in the distance at the top left.', caption: 'General view of Mount Morgan, about 1897. The photograph shows the mine works with the town in the distance.', credit: 'Lands Department, Survey of Lands Branch, Photographic Branch. Queensland State Archives, Digital Image ID 5132 (public domain)', url: 'https://commons.wikimedia.org/wiki/File:Queensland_State_Archives_5132_General_view_of_Mount_Morgan_c_1897.png' };
I.imageNote = 'All images are old photographs or postcards that are in the public domain, and each is credited. No images in this resource were made by artificial intelligence. There are no images of Aboriginal people. The map is a simple outline drawn for this resource from published coordinates. It uses no map service.';

// ---------- sources ----------
var T = 'https://trove.nla.gov.au/newspaper/article/';
Object.assign(I.sources, {
  trCal1862Aug: { short: 'The Courier, 2 Aug 1862', t: '“Gladstone: The Calliope Gold Fields”. The Courier (Brisbane), 2 August 1862, p. 3 (from its own correspondent, Gladstone, 28 July).', u: T + '4607171', note: 'Read in the archived Trove copy. The earliest newspaper report of the diggings found for this resource.' },
  trCal1862Apr: { short: 'The Courier, 14 Apr 1862', t: '“The Northern Mails”. The Courier (Brisbane), 14 April 1862, p. 2 (Gladstone section).', u: T + '4605012', note: 'Read in the archived Trove copy. Calls the find an “alleged” discovery.' },
  trMait1862: { short: 'Maitland Mercury, 28 Oct 1862', t: 'Maitland Mercury and Hunter River General Advertiser, 28 October 1862, p. 2 (news of the Governor’s voyage home).', u: T + '18691516', note: 'Read in the archived Trove copy. The text is machine-read and partly garbled, but the sentence about the Gladstone gold-fields is clear.' },
  trCour1909: { short: 'Brisbane Courier, 8 Dec 1909', t: '“Queensland’s Half Century, 1859 to 1909: Notable Events”. The Brisbane Courier, 8 December 1909, p. 23.', u: T + '19579953', note: 'A year-by-year list written in 1909, so it is a later summary and not a report made at the time. Used for dates of finds and events.' },
  qpCalliope: { short: 'Queensland Places, Calliope', t: 'Centre for the Government of Queensland. “Calliope”. Queensland Places.', u: 'https://www.queenslandplaces.com.au/calliope', note: 'Read in an archived copy because the live page did not load. Gives 400 miners, four stores and three hotels by 1864, the 1868 private school, the 1871 survey, the 1872 school, the 1885 figure of 20 miners, the 1896 copper find at Many Peaks and the 1910 railway.' },
  wikiCalliope: { short: 'Wikipedia, Calliope', t: 'Wikipedia. “Calliope, Queensland”.', u: 'https://en.wikipedia.org/wiki/Calliope,_Queensland', note: 'Post office 1 March 1864; school 2 September 1872. Says Queensland’s first goldfield was proclaimed in 1863. That sentence has no reference of its own.' },
  wikiAGR: { short: 'Wikipedia, Australian gold rushes', t: 'Wikipedia. “Australian gold rushes”.', u: 'https://en.wikipedia.org/wiki/Australian_gold_rushes', note: 'A general article that cites newspapers. Used for dates and numbers that are then checked against other sources. Some of its claims differ from other sources, and each of those is flagged where it is used.' },
  smhCal: { short: 'Sydney Morning Herald, Calliope (2004)', t: '“Calliope”. Sydney Morning Herald, Travel, 8 February 2004.', u: 'https://www.smh.com.au/lifestyle/calliope-20040208-gdkqcq.html', note: 'A travel article. Says Calliope was Queensland’s first officially proclaimed goldfield in 1863, that the population reached 800 by 1864 and that the Diggers Arms was built during the gold boom. It gives no source for these claims.' },
  calChase: { short: 'Calliope Chase, history', t: 'Calliope Chase (housing development). “History: Calliope”.', u: 'https://calliopechase.com.au/history/', note: 'A property developer’s web page. Seen only in a search summary because the page did not load. It names the Bailai (Byellee) and Gooreng Gooreng peoples and repeats the 1863 and 800 claims.' },
  glaCouncil: { short: 'Gladstone Regional Council, Acknowledgement of Country', t: 'Gladstone Regional Council. “Acknowledgement of Country”.', u: 'https://www.gladstone.qld.gov.au/Site-Footer/Footer-Widgets/Acknowledgement-of-Country', note: 'Names the Bailai, Gurang, Gooreng Gooreng and Taribelang Bunda peoples as the traditional custodians of the council region. Seen in a search summary.' },
  gpcBook: { short: 'Gladstone Ports Corporation history book', t: 'Gladstone Ports Corporation. A history of the port and the region (history book, PDF).', u: 'https://gpcl.com.au/wp-content/uploads/2022/08/GPC_History_Book_1.pdf', note: 'Written with Gooreng Gooreng elders. The PDF text is partly scrambled, so only passages that read clearly were used.' },
  tlcCal: { short: 'TLCMap, Mount Coliseum record', t: 'TLCMap Gazetteer of Historical Australian Places. Layer record for the Mount Coliseum killings, December 1872 (Goreng Goreng).', u: 'https://tlcmap.org/layers/2503', note: 'Records an inquiry held at the Prospect Hotel, Calliope, on 17 February 1873. Used with care. It describes a killing by Native Police and this resource does not give the details.' },
  cqdGladstone: { short: 'CQ Diggings, Gladstone investigation', t: 'CQ Diggings. “Gladstone Region High-Grade Gold Investigation”.', u: 'https://cqdiggings.com.au/gladstone-gold-investigation.html', note: 'A hobbyist research site that summarises Trove articles. It was used as a pointer and the dates were checked where Trove could be opened. It reports a six-pound nugget found by Chinese miners in May 1867.' },
  cqdChron: { short: 'CQ Diggings, Gladstone chronology', t: 'CQ Diggings. “Gladstone gold chronology”.', u: 'https://cqdiggings.com.au/gladstone-gold-chronology.html', note: 'A hobbyist research site. Used for Raglan (from 1867), Norton on the Milton run (1871, proclaimed 1879), the 1885 geological survey and a folklore item.' },
  trCour1861: { short: 'The Courier, 11 Nov 1861', t: '“Rockhampton” (from its own correspondent, 4 November 1861). The Courier (Brisbane), 11 November 1861, p. 2.', u: T + '4602097', note: 'Read in the archived Trove copy. The earliest report of Peak Downs gold found. The same page reports an attack on a station on the Nogoa River. Its headline uses insulting words that are not copied here.' },
  trCour1863a: { short: 'The Courier, 5 Jan 1863', t: '“Notes of a Journey in the Leichhardt District”. The Courier (Brisbane), 5 January 1863, p. 2.', u: T + '3160677', note: 'Read in the archived Trove copy. A correspondent’s visit to Canoona and Peak Downs, written on 20 December 1862.' },
  trCour1863b: { short: 'The Courier, 15 Jul 1863', t: '“Rockhampton” (from the Northern Argus). The Courier (Brisbane), 15 July 1863, p. 3.', u: T + '3164466', note: 'Read in the archived Trove copy. Reports about 200 diggers at Peak Downs.' },
  trQldr1866: { short: 'The Queenslander, 11 Aug 1866', t: '“Rockhampton”. The Queenslander (Brisbane), 11 August 1866, p. 6.', u: T + '20308961', note: 'Read in the archived Trove copy. Reports two nuggets from Peak Downs and 800 to 1,000 men at Crocodile Creek.' },
  trQldr1867: { short: 'The Queenslander, 30 Mar 1867', t: '“Rockhampton”. The Queenslander (Brisbane), 30 March 1867, p. 5.', u: T + '20312534', note: 'Read in the archived Trove copy. A short report of a new rush at the Crocodile.' },
  wikiClermont: { short: 'Wikipedia, Clermont', t: 'Wikipedia. “Clermont, Queensland”.', u: 'https://en.wikipedia.org/wiki/Clermont,_Queensland', note: 'Says gold was found in 1861, that a gold field was declared in 1862, and that the town reserve was proclaimed on 25 March 1864. Names Gangulu as the language of the area and Babbinburra clan land. Its figure of up to 4,000 Chinese people in the 1880s was not checked against a second source.' },
  bird1904: { short: 'Bird, Crocodile Creek (1904)', t: 'J. T. S. Bird. The Early History of Rockhampton (1904), “Crocodile Creek”, as reproduced on the Capricornia Family History Association website.', u: 'https://sites.rootsweb.com/~auscqfha/district_crocodileck.htm', note: 'A European account written about 40 years after the events. It uses insulting words about Chinese people that are not copied here. CQ Diggings attributes the text to Bird.' },
  mbmRiot: { short: 'Moreton Bay and More, 7 Jan 1867 riot', t: 'Moreton Bay and More. “The Goldfields Riot, January 7, 1867” (2023).', u: 'https://moretonbayandmore.com/2023/01/07/the-goldfields-riot-january-7-1867/', note: 'A history blog that quotes newspapers of the time. Seen in a search summary. Gives the numbers of Europeans involved and the court outcome.' },
  wikiBoulder: { short: 'Wikipedia, Bouldercombe', t: 'Wikipedia. “Bouldercombe”.', u: 'https://en.wikipedia.org/wiki/Bouldercombe', note: 'Says gold was found at Crocodile Creek in 1865, that over 2,000 miners lived there within a year and that the rush was over by 1876.' },
  cqdRock: { short: 'CQ Diggings, Bouldercombe and Crocodile', t: 'CQ Diggings. “Rockhampton, Bouldercombe and Crocodile Gold Research”.', u: 'https://cqdiggings.com.au/rockhampton-bouldercombe-crocodile.html', note: 'A hobbyist research site. Quotes Bird (1904) and a Geological Survey of Queensland report that gives about 2,000 people a year after the discovery.' },
  wikiPentland: { short: 'Wikipedia, Pentland', t: 'Wikipedia. “Pentland, Queensland”.', u: 'https://en.wikipedia.org/wiki/Pentland,_Queensland', note: 'Says the Cape River goldfields opened in July 1867 on the advice of Richard Daintree. Its figure of over 20,000 men by 1870 looks far too high and is flagged where it is used.' },
  aboutPentland: { short: 'About the North, Pentland', t: 'About the North. “Pentland”.', u: 'https://www.aboutthenorth.au/styled-6/styled-5/styled-13/styled-14/styled-24/styled-88/', note: 'Seen in a search summary. Says Pentland is on Gudjal country, that the field had more than 2,500 miners by 1868, and that Capeville became a post office in 1884 and Pentland in 1885.' },
  trCour1868: { short: 'Brisbane Courier, 12 Sep 1868', t: '“Cape River Gold-field”. The Brisbane Courier, 12 September 1868, p. 5.', u: T + '1297578', note: 'Read in the archived Trove copy. Reports the alluvial ground nearly at a standstill and quartz reefs being tested.' },
  edgar: { short: 'Edgar, Cape River gold field (2014)', t: 'Edgar. “A place not very much better then Hades”: archaeological landscapes of the Cape River gold field, North Queensland. PhD thesis, James Cook University, 2014 (volume 2).', u: 'https://researchonline.jcu.edu.au/43169/2/43169-edgar-2014-thesis-volume-2.pdf', note: 'To read more. Not read in full for this resource.' },
  qhrRav: { short: 'Queensland Heritage Register, Ravenswood', t: 'Queensland Heritage Register. “Ravenswood Mining Landscape and Chinese Settlement Area” (entered 14 October 2016), as summarised in the Wikipedia article of the same name.', u: 'https://en.wikipedia.org/wiki/Ravenswood_Mining_Landscape_and_Chinese_Settlement_Area', note: 'A long, referenced history. It names the discoverers, the proclamation dates, the numbers of Chinese people and the gold totals.' },
  qpRav: { short: 'Queensland Places, Ravenswood', t: 'Centre for the Government of Queensland. “Ravenswood”. Queensland Places.', u: 'https://www.queenslandplaces.com.au/ravenswood', note: 'Read in an archived copy. Gives the 1869 gold find, the 1870 battery, the 1884 railway and gold totals.' },
  buhrich: { short: 'Buhrich and others, Gilberton (2023)', t: 'Buhrich and others. “The Second Frontier War: Gilberton and the Native Mounted Police 1867–80s”. Aboriginal History, volume 47 (ANU Press, 2023).', u: 'https://press-files.anu.edu.au/downloads/press/n12954/html/05_buhrich_et_al.xhtml', note: 'A peer-reviewed article. Read in the section on Gilberton. It describes events from the point of view of the Ewamian people as well as the diggers.' },
  qpEth: { short: 'Queensland Places, Etheridge Shire', t: 'Centre for the Government of Queensland. “Etheridge Shire”. Queensland Places.', u: 'https://www.queenslandplaces.com.au/etheridge-shire', note: 'Read in an archived copy. Gives Daintree’s 1868 report, the 1869 population estimate of 3,000, the 1870 reef, the 1872 renaming and gold totals.' },
  aboutGilbert: { short: 'About the North, Gilbert River', t: 'About the North. “Gilbert River”.', u: 'https://www.aboutthenorth.au/styled-6/styled-5/styled-13/styled-142/styled-607/', note: 'Seen in a search summary. Says the Gilbert River flows through Agwamin/Ewamian, Tagalaka and Kurtjar country and that Gilberton was established in 1869 and collapsed in December 1873.' },
  chinNA: { short: 'Chinese in North Australia, Gilbert River', t: 'Chinese in North Australia. “History of the Gilbert River goldfield, 1869–74”.', u: 'https://chinesenorthaustralia.yolasite.com/history-of-the-gilbert-river-goldfield-1869-74.php', note: 'A web page that appears to draw on a university thesis. Seen in a search summary. Gives the make-up of the population.' },
  ramsay1873: { short: 'Gilberton residents’ letter, 16 Oct 1873', t: 'Letter from Ralph Ramsay and other residents of Gilberton to the Colonial Secretary, 16 October 1873. Queensland State Archives item QSA846933, transcribed on FromThePage.', u: 'https://fromthepage.com/qldfrontierconflict/correspondence-1879/qsa846933-1873-letter-from-ralph-ramsay-to-colonial-secretary-16-october-in-letter-73-1959-colonial-secretarys-office-in-letters-part-3-dr63869', note: 'A European petition for police. It uses insulting words about Aboriginal people that are not copied here.' },
  aiatsisGilb: { short: 'AIATSIS, history of the Gilbert River Goldfield', t: 'A history of the Gilbert River Goldfield, 1869–1874 (typescript, 1974). AIATSIS Collection item M0017850.', u: 'https://aiatsis.gov.au/collections/item/M0017850', note: 'To read more. Only the catalogue summary was read.' },
  wikiGilb: { short: 'Wikipedia, Gilberton', t: 'Wikipedia. “Gilberton, Queensland (Etheridge Shire)”.', u: 'https://en.wikipedia.org/wiki/Gilberton,_Queensland_(Etheridge_Shire)', note: 'Says the old town lies on a cattle station that was set up on Ewamian Aboriginal land in 1869.' },
  kirk82: { short: 'Kirkman, “Mining on the Hodgkinson” (1982)', t: 'Noreen Kirkman. “Mining on the Hodgkinson”. In K. H. Kennedy (ed.), Readings in North Queensland Mining History (James Cook University, 1982), pp. 171–194.', u: 'https://researchonline.jcu.edu.au/24927/1/24927_Kirkman_1982_chapter.pdf', note: 'A scholarly account. The sections on the discovery, the proclamation, the output, the Native Police and the Chinese miners were read. It gives Mulligan’s diary date, the proclamation date, the output and the Chinese population.' },
  qpHodg: { short: 'Queensland Places, Hodgkinson', t: 'Centre for the Government of Queensland. “Hodgkinson Minerals Area”. Queensland Places.', u: 'https://www.queenslandplaces.com.au/hodgkinson-minerals-area', note: 'Read in an archived copy.' },
  saKuku: { short: 'South Australian Museum, Kuku Djungan', t: 'South Australian Museum. “Kuku Djungan” (provenance note, Suzette Coates collection).', u: 'https://www.samuseum.sa.gov.au/collection/archives/provenances/series/sama-1217-6', note: 'Names the Kuku Djungan as the Traditional Owners of the Hodgkinson Basin and Ngarrabullgan. Written by a lawyer who acted for the Kuku Djungan. Seen in a search summary.' },
  nntac: { short: 'Nguddaboolgan Native Title Aboriginal Corporation, timeline', t: 'Nguddaboolgan Native Title Aboriginal Corporation. “Historic Timeline”.', u: 'https://www.nguddaboolgan.com/historic-timeline', note: 'The Djungan people’s own organisation. Seen in a search summary.' },
  histTowns: { short: 'Historical Australian Towns, Kingsborough and Thornborough', t: 'Historical Australian Towns (blog). “Kingsborough and Thornborough, QLD: Brief Days of Gold” (2021).', u: 'https://historicalaustraliantowns.blogspot.com/2021/02/kingsborough-and-thornborough-qld-brief.html', note: 'A hobby blog. Seen in a search summary. It names other Aboriginal groups of the region and the Native Police camp. It repeats a nickname for an officer that this resource does not use.' },
  qualla: { short: 'Qualla, Ngarrabullgan', t: 'Qualla. “Ngarrabullgan”.', u: 'https://qualla.com/ngarrabullgan/', note: 'A cultural tourism site. Seen in a search summary. It says the Djungan remember the effects of the rush.' },
  qpMM: { short: 'Queensland Places, Mount Morgan', t: 'Centre for the Government of Queensland. “Mount Morgan”. Queensland Places.', u: 'https://www.queenslandplaces.com.au/mount-morgan', note: 'Read in an archived copy. Gives the 1882 find, the 1884 sale, the 1884 school, the 1890 population, the 1898 railway and the 1981 end of ore production.' },
  mmDisc: { short: 'Mount Morgan Promotions and Development, The Discovery of Mount Morgan', t: 'Mount Morgan Promotions and Development Inc. “The Discovery of Mount Morgan”.', u: 'https://www.mountmorgan.org.au/History/The-Discovery-of-Mount-Morgan', note: 'A local volunteer association. The page blocks direct access, so it was read in an archived copy. It argues that William Mackinlay found the gold about 1870. It names its sources, including Bird (1904) and Sykes (1893).' },
  mmBros: { short: 'Mount Morgan Promotions and Development, The Morgan Brothers', t: 'Mount Morgan Promotions and Development Inc. “The Morgan Brothers”.', u: 'https://www.mountmorgan.org.au/History/The-Morgan-Brothers', note: 'Read in an archived copy. Gives 22 July 1882 for the Morgans’ claim and 1884 for the sale of their shares.' },
  wikiMM: { short: 'Wikipedia, Mount Morgan Mine', t: 'Wikipedia. “Mount Morgan Mine”.', u: 'https://en.wikipedia.org/wiki/Mount_Morgan_Mine', note: 'Gives the company dates, the 1928 open-cut change and total output.' },
  qldMM: { short: 'Queensland Government, Mount Morgan remediation', t: 'Queensland Government. “Mount Morgan remediation project”.', u: 'https://www.qld.gov.au/environment/land/management/abandoned-mines/remediation-projects/mount-morgan', note: 'Seen in a search summary. Says Mount Morgan is in Gaangalu (Gangulu) traditional country and that the mine ran from 1882 to 1990.' },
  slqCroy: { short: 'State Library of Queensland, Croydon', t: 'State Library of Queensland. “Queensland Places: Croydon” (blog).', u: 'https://www.slq.qld.gov.au/blog/queensland-places-croydon', note: 'Seen in a search summary. Names James and Walter Aldridge, gives 7,000 people by 1887 and the 1891 railway.' },
  qhrCroy: { short: 'Queensland Heritage Register, Croydon Court House', t: 'Queensland Heritage Register entry 600437. “Court House (former), Croydon”.', u: 'https://apps.des.qld.gov.au/heritage-register/detail/?id=600437', note: 'Gives October 1885 for the find, 18 January 1886 for the proclamation and 2,000 people by the end of 1886.' },
  qhrTabletop: { short: 'Queensland Heritage Register, Tabletop Cemetery', t: 'Queensland Heritage Register entry 602371. “Tabletop Cemetery”.', u: 'https://apps.des.qld.gov.au/heritage-register/detail/?id=602371', note: 'Gives late 1883 for the first quartz, 1885 for the Alldridges’ 20 payable reefs, 7,000 people in 1887 and 772,374 ounces to 1947.' },
  qhrCroyHosp: { short: 'Queensland Heritage Register, Croydon emergency services building', t: 'Queensland Heritage Register entry 600438. “Croydon State Emergency Services Building”.', u: 'https://apps.des.qld.gov.au/heritage-register/detail/?id=600438', note: 'Says Croydon had a peak population of 25,000. That figure is far higher than the other sources and is flagged.' },
  wikiGolden: { short: 'Wikipedia, Golden Gate Mining and Town Complex', t: 'Wikipedia. “Golden Gate Mining and Town Complex” (Queensland Heritage Register, 14 August 2009).', u: 'https://en.wikipedia.org/wiki/Golden_Gate_Mining_and_Town_Complex', note: 'Says William Brown and two station hands found a reef in mid-1883.' },
  wikiCroy: { short: 'Wikipedia, Croydon', t: 'Wikipedia. “Croydon, Queensland”.', u: 'https://en.wikipedia.org/wiki/Croydon,_Queensland', note: 'Says mining in the area quickly drove out the Tagalaka people, and describes the Chinese settlement.' },
  visitCroy: { short: 'Visit Croydon, History', t: 'Croydon Shire tourism. “History”.', u: 'https://www.visitcroydonqld.com.au/Explore-Heritage/History', note: 'A tourism page. Seen in a search summary. Tells the “Posthole Tom” story and says accounts differ.' },
  tagalaka: { short: 'Tagalaka Aboriginal Corporation, native title', t: 'Tagalaka Aboriginal Corporation. “Native Title”.', u: 'https://www.tagalaka.com/native-title', note: 'The Tagalaka people’s own corporation. Gives the Federal Court native title determinations of 10 December 2012.' },
  gulfSav: { short: 'Gulf Savannah Development, Croydon', t: 'Gulf Savannah Development. “Croydon”.', u: 'https://www.gulfsavannahdevelopment.com.au/?region=croydon', note: 'Seen in a search summary. Says the Tagalaka people are the traditional owners of the Croydon area.' },
  wegner: { short: 'Wegner and Kahabka, Croydon machinery (2018)', t: 'Wegner and Kahabka. “Croydon’s historic machinery collection: a case study in the uses and needs of outback heritage machinery collections” (James Cook University, 2018).', u: 'https://researchonline.jcu.edu.au/58702/1/58702_Wegner%20and%20Kahabka_2018.pdf', note: 'A museum study. Says Tagalaka traditional owners and Chinese people are barely represented in the collection, and that some Aboriginal people worked as miners and prospectors at Croydon after the frontier period.' }
});

// ---------- timeline ----------
function addAfter(list, anchor, items) {
  var i = list.findIndex(function (x) { return x.title === anchor; });
  if (i < 0) throw new Error('timeline anchor not found: ' + anchor);
  list.splice.apply(list, [i + 1, 0].concat(items));
}
var TL = I.timeline;

// a note on an existing entry
TL.forEach(function (e) {
  if (e.title === 'Recession and a reward' && !e.flag) e.flag = 'The Wikipedia article on the Australian gold rushes gives 8 January 1867 for the offer of the £3,000 reward. The date was not settled here.';
});

addAfter(TL, 'Queensland becomes a separate colony', [
  { date: 'November 1861', title: 'Gold reported at Peak Downs', text: 'A Rockhampton correspondent, writing on 4 November 1861, said a rumour of a gold field at Peak Downs had been confirmed when some gold arrived in town. The owners said they would claim the reward if the field proved payable. He warned that it might turn out like Canoona. The same page reported an attack on Mr Wills’s station on the Nogoa River, in which 19 settlers were said to have been killed.', flag: 'Wikipedia’s Clermont article says gold was found in 1861 and that a gold field was declared in 1862. Its article on the gold rushes says the field was declared in August 1863. See the entry for 1862 or August 1863.', src: ['trCour1861', 'wikiClermont', 'wikiAGR'] },
  { date: '29 March 1862', title: 'News of gold on the Calliope River', text: 'A list of notable events written in 1909 says that on 29 March 1862 news was received of a gold discovery on the Calliope River, 20 miles from Gladstone. Heavy floods hit the Calliope and Boyne rivers on 5 April 1862.', flag: 'No source read says who found the gold. CQ Diggings gives 1861 to 1863 for the first rush and does not name a finder either. The 1909 list was written decades later.', src: ['trCour1909', 'cqdChron'] },
  { date: '14 April 1862', title: 'A small party returns from Calliope', text: 'The Courier’s Gladstone correspondent called the find an “alleged” gold discovery. A small party had gone out after the first one returned, but heavy rain forced it back with only a small amount of gold. A party was said to have been fitted out by a Captain O’Connell, and a group of Chinese miners was expected from Sydney.', src: ['trCal1862Apr'] },
  { date: '28 July 1862', title: 'The Gladstone correspondent describes the diggings', text: 'The correspondent said he did not want to raise false hopes, but he would like to see a few more diggers. Only a small number were working there. One digger told him his party had washed out two ounces the day before, using a long-tom (a sluicing box), and the party next to his had washed out five ounces on the Friday. The steamer Eagle had recently taken between 80 and 90 ounces from Gladstone.', src: ['trCal1862Aug'] },
  { date: 'October 1862', title: 'The Governor visits the Gladstone gold-fields', text: 'On his voyage home the Governor called at Rockhampton and Maryborough. The Maitland Mercury reported that he also visited the Gladstone gold-fields, of which there were favourable reports.', src: ['trMait1862'] },
  { date: 'December 1862 to January 1863', title: 'About 40 miners at Peak Downs', text: 'A correspondent who wrote on 20 December 1862 said there were about 40 miners at Peak Downs, 240 miles from Yaamba, and that the number was increasing. Canoona was deserted, and mining tools bought for Canoona were being sent to Peak Downs. There was a store and a public house on the diggings.', src: ['trCour1863a'] },
  { date: 'July 1863', title: 'About 200 diggers at Peak Downs', text: 'The Northern Argus said about 200 diggers were at Peak Downs and that over 800 ounces of gold were in their hands. Wikipedia’s article on the gold rushes says a newspaper reported about 300 men at work in October 1863, and that this was a small rush.', src: ['trCour1863b', 'wikiAGR'] },
  { date: '1862 or August 1863', title: 'Peak Downs goldfield declared', text: 'Wikipedia’s article on Clermont says a gold field was declared in the area in 1862. Its article on the gold rushes says the field, of over 1,600 square miles, was officially declared in August 1863.', flag: 'These two Wikipedia articles disagree by a year. The Queensland Government Gazette was not available to check.', src: ['wikiClermont', 'wikiAGR'] },
  { date: '1863', title: 'Claim: Calliope was Queensland’s first proclaimed goldfield', text: 'Several modern sources say a Calliope goldfield was officially proclaimed in 1863 and that it was Queensland’s first. CQ Diggings says only that Calliope was proclaimed “during this early period”, 1861 to 1863.', flag: 'This claim is not verified. None of the sources that make it give a gazette date or a reference. The Wikipedia sentence has no reference. Other sources show that Queensland had earlier gold fields with officials: an official wrote to the Colonial Secretary about Canoona in 1858 (see the 1858 entries), and Peak Downs is said to have been declared in 1862 or 1863. The Gazette was not available to check.', src: ['smhCal', 'wikiCalliope', 'calChase', 'cqdChron', 'wikiAGR'] },
  { date: '1 March 1864', title: 'Calliope post office opens', text: 'Wikipedia says the Calliope Post Office opened on 1 March 1864.', src: ['wikiCalliope'] },
  { date: '1864', title: 'How many people were at Calliope?', text: 'Queensland Places says that by 1864 there were 400 miners, four stores and three hotels in the settlement. Other sources say the population had reached 800 by 1864.', flag: 'The numbers may count different things, because 400 is a count of miners and 800 is a count of people. None of the sources says how it was counted. By the 1881 census the town had only 59 people.', src: ['qpCalliope', 'smhCal', 'wikiCalliope', 'wikiAGR'] },
  { date: '25 March 1864', title: 'Clermont town reserve proclaimed', text: 'The town reserve at Clermont was proclaimed on 25 March 1864. The first newspaper, the Peak Downs Telegram and Mining Record, was started that year, and its first issue was dated Tuesday 4 October 1864.', src: ['wikiClermont'] },
  { date: '30 September 1865', title: 'A rush to Walsh’s Flat near Gladstone', text: 'The 1909 list of notable events records a rush to Walsh’s Flat, near Gladstone, on 30 September 1865. It does not say whether this was on the Calliope field.', src: ['trCour1909'] },
  { date: '1865 or June 1866', title: 'Gold found at Crocodile Creek', text: 'Bird’s account says that in early June 1866 a party of miners bottomed a shaft in the bed of Crocodile Creek and found payable gold. Several miners, including William Brady and Thomas Feely, were among the first, but Bird says it is not clear who got gold first. The creek is near Bouldercombe, about 20 kilometres from Rockhampton.', flag: 'Wikipedia’s articles on Bouldercombe and on the gold rushes say gold was found in 1865. CQ Diggings says it was found in 1865 and that the main rush began in June 1866.', src: ['bird1904', 'wikiBoulder', 'wikiAGR', 'cqdRock'] }
]);

addAfter(TL, 'Recession and a reward', [
  { date: 'August 1866', title: 'Crocodile Creek has 800 to 1,000 men', text: 'The Queenslander reported on 6 August 1866 that 600 men had been let go from the northern railway works and that most had found work at Crocodile Creek, where the population was 800 to 1,000. In the same report two nuggets of 13 ounces and 4½ ounces arrived in Rockhampton from Peak Downs.', src: ['trQldr1866'] },
  { date: 'December 1866', title: 'More than 3,000 people at Crocodile Creek', text: 'Bird says that by Christmas 1866 the number at Crocodile Creek was estimated at over 3,000, including women, children and about 1,000 Chinese people. John Jardine had been appointed Gold Commissioner and decided to protect the Chinese miners.', flag: 'The numbers vary. The Queenslander gave 800 to 1,000 in August 1866. Wikipedia’s Bouldercombe article says over 2,000 miners within a year of the find. A history blog says 3,000 to 5,000 by 1867. A Geological Survey report quoted by CQ Diggings says about 2,000.', src: ['bird1904', 'trQldr1866', 'wikiBoulder', 'mbmRiot', 'cqdRock'] },
  { date: '7 January 1867', title: 'Chinese miners driven from Crocodile Creek', text: 'After a dispute over claims, a crowd of European diggers drove Chinese miners from the field, burned about 30 tents and huts and broke up their goods. A blog quoting newspapers says the crowd was between 200 and 500 people. Police from Rockhampton arrested nine Europeans, and four were later found guilty of affray and sentenced to nine months in prison. The judge said the men had caused the destruction of the Chinese diggers’ property and the expulsion of many harmless people.', flag: 'Bird says about 200 white men took part. The blog says 200 to 500.', src: ['bird1904', 'mbmRiot', 'trCour1909'] },
  { date: '30 March 1867', title: 'A new rush at Crocodile Creek', text: 'The Queenslander reported a new rush at the Crocodile, to ground near the Church of England. Wikipedia says the best of the alluvial gold had run out by 1868, but that Chinese miners who arrived there were still able to make their mining pay.', src: ['trQldr1867', 'wikiAGR'] },
  { date: '8 May 1867', title: 'A large nugget found at Calliope', text: 'The 1909 list records the find of a 16-pound nugget by a Chinese man in an abandoned claim at Calliope. CQ Diggings reports that a Gladstone correspondent said Chinese miners found a six-pound nugget beside the hole where a seven-pound nugget had been found earlier.', flag: 'The weight is given as 16 pounds in one source and 6 pounds in the other. The 1909 list was written 42 years later. The Gladstone correspondent’s report was not opened on Trove.', src: ['trCour1909', 'cqdGladstone'] },
  { date: 'July to September 1867', title: 'The Cape River field opens', text: 'Wikipedia’s Pentland article says the Cape River goldfield opened in July 1867 on the advice of the government geologist Richard Daintree. Its article on the gold rushes says Daintree found the field in 1865 and that it was proclaimed on 4 September 1867 over an area of more than 300 square miles. Queensland Places says the government geologist confirmed gold at the Cape River in 1866. The 1909 list says a dispute between Townsville and Bowen over who held the field was under way on 20 August 1867.', flag: 'The year of the find is given as 1865, 1866 and 1867 by different sources. The proclamation date of 4 September 1867 comes from Wikipedia only.', src: ['wikiPentland', 'wikiAGR', 'qpRav', 'trCour1909'] }
]);

addAfter(TL, 'Miners go underground at Gympie', [
  { date: 'August 1868', title: 'Cape River alluvial ground nearly at a standstill', text: 'A report in the Brisbane Courier of 12 September 1868 said the alluvial diggings were almost at a standstill, many claims being worked out. Quartz reefs at Davenport and Specimen were being tested, and the Commissioner had granted protection to the prospectors. Provisions were plentiful and there were many storekeepers.', src: ['trCour1868'] },
  { date: 'Late 1868 or 1869', title: 'Alluvial gold found near Ravenswood', text: 'The Queensland Heritage Register entry says alluvial gold was found in late 1868 on tributaries of Connolly Creek on Merri Merriwa Station. Queensland Places says payable gold was found in gullies on the Ravenswood run in 1869 and that a rush began.', flag: 'The year of the find is 1868 in one source and 1869 in the other. The discoverers are also disputed. One source says Jessop, Buchanan and party. Another says W. Crane and party, who were sent to Connolly Creek by a Mr Curr of Merri Merriwa Station. The Brisbane Courier later said Jessop and party were rewarded £400 for finding Upper Camp, while Crane and party, the “original discoverers”, received £100.', src: ['qhrRav', 'qpRav'] },
  { date: 'April 1869', title: 'Rich gullies at Ravenswood, then miners leave for the Gilbert', text: 'In April 1869 the richest alluvial finds were made in three dry creek beds close to the site of Ravenswood: Nolan’s, Jessop’s and Buchanan’s gullies. About 700 miners were on the field by early 1869. Many soon left for the rush to the Gilbert River, more than 300 kilometres to the west. The first reefs, the General Grant and the Sunset, were found at about the same time.', src: ['qhrRav'] },
  { date: '10 May 1869', title: 'Rush to the Gilbert diggings', text: 'The 1909 list records a rush to the Gilbert diggings on 10 May 1869. The government geologist Richard Daintree had reported gold at the head of the Gilbert River, and Gilberton was established as the main settlement in 1869. By mid-1869 the Gold Commissioner estimated the population of the Etheridge area at 3,000.', flag: 'Daintree’s report is dated 1867 by Buhrich and others and 1868 by Queensland Places. The 1909 list says Chinese people were “excluded” from the Gilbert rush, but a source on the Gilbert says that by 1870 official estimates showed more than half of the local population was Chinese.', src: ['trCour1909', 'buhrich', 'qpEth', 'aboutGilbert', 'chinNA'] },
  { date: '18 April 1870', title: 'First crushing battery at Ravenswood', text: 'W. O. Hodkinson’s five-stamp battery, the Lady Marion Mill, began crushing at Burnt Point on 18 April 1870. The first month’s results caused an even greater rush than the alluvial gold had. Queensland Places also dates the first five-head battery to 1870.', src: ['qhrRav', 'qpRav'] },
  { date: '1870', title: 'A major reef at Etheridge', text: 'Queensland Places says a major gold reef was found at Etheridge in 1870 and that by 1872 the town was renamed Georgetown, after the local gold commissioner.', src: ['qpEth'] },
  { date: '3 November 1870', title: 'Ravenswood goldfield proclaimed', text: 'The Ravenswood goldfield, of about 300 square miles, was proclaimed on 3 November 1870. The Heritage Register entry says the field then had about 2,000 people and that Upper Camp had 10 public houses. The town was proclaimed on 19 May 1871.', flag: 'The same entry says the goldfield’s population was 900 in 1871. It does not explain why the figure is lower than the one for November 1870.', src: ['qhrRav'] },
  { date: 'Mid-1871', title: 'Chinese miners forced out of Western Creek', text: 'Chinese miners who had been forcibly evicted from the Western Creek diggings near Gilberton came to Ravenswood in mid-1871. There were about 200 Chinese people looking for alluvial gold there in 1871 and at least three of the hotels had Chinese licensees. The Heritage Register entry says the first Chinese people had arrived in north Queensland in 1867, during the Cape River rush.', flag: 'Wikipedia’s article on the gold rushes says the Cape River rush attracted Chinese diggers to Queensland “for the first time”. That cannot be right for Queensland as a whole. The 1909 list records Chinese shepherds arriving in the late 1840s and an affray between white and Chinese people at Ipswich in 1851, and Chinese miners were at Crocodile Creek in 1866 and 1867.', src: ['qhrRav', 'wikiAGR', 'trCour1909'] },
  { date: 'June 1871', title: 'A traveller killed near Gilberton; Native Police respond', text: 'In June 1871 a lone traveller from Gilberton, John Corbett, was speared. Buhrich and others write that in response to his death the Native Mounted Police killed 17 Aboriginal people. A Native Police detachment was posted to nearby Oak Park in 1872.', src: ['buhrich'] },
  { date: '1871', title: 'Gold on the Milton run; Calliope town surveyed', text: 'CQ Diggings says reef discoveries on the Milton pastoral run in 1871 opened what became the Norton goldfield, which was proclaimed in 1879. Queensland Places says the Calliope township was surveyed in 1871, three years after the district had a private school.', flag: 'Wikipedia gives 1871 as the year Calliope was established, which matches the survey.', src: ['cqdChron', 'qpCalliope', 'wikiCalliope'] }
]);

addAfter(TL, 'Claim made at Charters Towers', [
  { date: 'January 1872', title: 'Ravenswood has about 1,500 Chinese people; Gilbert field made smaller', text: 'In January 1872 it was estimated that about 1,500 Chinese people and a matching number of Europeans were on the Ravenswood goldfield. In the same month the boundaries of the Gilbert field were reduced, and the new Etheridge field became its main field.', src: ['qhrRav', 'chinNA'] },
  { date: '2 September 1872', title: 'Calliope State School opens', text: 'Calliope State School opened on 2 September 1872. Queensland Places says a state primary school opened in 1872.', src: ['wikiCalliope', 'qpCalliope'] }
]);

addAfter(TL, 'The Hann expedition reports gold on the Palmer', [
  { date: 'November 1872', title: 'Chinese miners attacked near Gilberton', text: 'Buhrich and others write that in November 1872 hundreds of Aboriginal warriors attacked a group of 30 Chinese miners working about six miles downstream of Gilberton and killed three. They say Chinese people were targeted because they did not have rifles.', src: ['buhrich'] },
  { date: 'December 1872 and 17 February 1873', title: 'Native Police killings near Miriam Vale; an inquiry at Calliope', text: 'The TLCMap record says Native Police killed a family of 12 Goreng Goreng people (the record’s spelling) camped at Mount Coliseum, on Miriam Vale station, in December 1872. An inquiry led by police magistrate C. W. Rich was held at the Prospect Hotel at Calliope on 17 February 1873. Mount Coliseum is not on the diggings. This entry is here because the inquiry was held at Calliope.', flag: 'The record is a summary on a gazetteer. The inquiry papers were not read. This resource does not give details of the killings.', src: ['tlcCal'] },
  { date: '1873', title: 'Peak year for alluvial gold at Etheridge', text: 'Queensland Places says mining records show 1873 as the peak year at Etheridge, with 121,000 ounces of alluvial gold. A further 227,000 ounces came from stone crushed in batteries between 1877 and 1890.', src: ['qpEth'] }
]);

addAfter(TL, 'Aboriginal people removed from a camp on the Palmer', [
  { date: '21 November 1873', title: 'Gilberton attacked and left', text: 'Buhrich and others write that on 21 November 1873 hundreds of Aboriginal people attacked the township of Gilberton, where 110 people lived, and that two people were killed. After this the residents left the town in haste and abandoned valuable machinery. In October 1873 residents had written to the Colonial Secretary to ask for police protection, saying the population had fallen and the police had been withdrawn. About 80 Chinese miners and gardeners were living near the river at that time.', flag: 'The 1909 list gives 22 November for a raid on a Chinese camp near Gilberton, with two killed, two wounded and three missing, and it lists the raid under 1873. Buhrich and others give 21 November for an attack on the township, with two killed. These may be one event or two. Sources about the Gilbert give the collapse of the town as November or December 1873.', src: ['buhrich', 'ramsay1873', 'trCour1909', 'chinNA', 'aboutGilbert'] }
]);

addAfter(TL, 'Thousands of Chinese miners; gold sent to Hong Kong', [
  { date: '7 February 1876', title: 'Mulligan notes gold on the Hodgkinson', text: 'James Mulligan wrote in his diary that he found gold on 7 February 1876, and that when he met MacLeod’s camp on 21 February they were getting payable gold in different gullies. The Brisbane press was excited by his reported find on 21 March 1876.', flag: 'Queensland Places says Mulligan first met the Hodgkinson River in 1874. The 1876 date is the date of the gold. Wikipedia’s article on the gold rushes dates the Hodgkinson from 1875.', src: ['kirk82', 'qpHodg', 'trCour1909', 'wikiAGR'] }
]);

addAfter(TL, 'The Hodgkinson rush begins', [
  { date: 'April to June 1876', title: 'About 2,000 men; the Hodgkinson goldfield proclaimed', text: 'By 19 April 1876 there were already about 2,000 men on the Hodgkinson. The 1909 list says the rush set in on 4 April and that every ship took a full load of passengers. The goldfield, of about 2,000 square miles, was proclaimed on 15 June 1876. Returns were small, but hopes stayed high. By 22 April bad news had reached Brisbane, and Mulligan’s life was said to be threatened.', src: ['kirk82', 'qpHodg', 'trCour1909'] },
  { date: 'July and September 1876', title: 'Native Police camp and a track to Trinity Bay', text: 'A hobby blog says Alexander Douglas arrived in July 1876 with a Native Mounted Police detachment and set up a camp about four miles down the river from Thornborough. In September 1876 Douglas and another Native Police officer, Robert Johnstone, joined tracks from the goldfield and from Trinity Bay. The path became known as the Douglas Track. It linked the goldfield to the coast, and Port Douglas grew as its port.', flag: 'The blog is not a scholarly source, and the dates were not checked against a second source.', src: ['histTowns', 'kirk82'] }
]);

addAfter(TL, '7,708 Chinese miners arrive', [
  { date: 'Mid-1877', title: 'Kingsborough and Thornborough', text: 'By mid-1877 the mining warden said the two towns, about 5 kilometres apart, each had more than 1,000 people. Together they had 20 hotels, 13 general stores and four butchers, and Thornborough had two banks.', src: ['qpHodg'] }
]);

addAfter(TL, 'Fewer Native Police', [
  { date: '1878 and 1879', title: 'The Lukinville rush and Chinese miners on the Hodgkinson', text: 'After the Lukinville rush of 1878 failed, the Chinese population of the Hodgkinson rose for a time to 2,000. An 1878 law that stopped miner’s rights being issued to Asian and African people in the first three years of a field cut the number to 220 by the end of 1879. Chinese market gardens became a large business, and by 1885 they grew 137 tons of maize and many tons of potatoes and sweet potatoes in a year.', src: ['kirk82'] }
]);

addAfter(TL, 'Later laws on Chinese immigration', [
  { date: '22 July 1882', title: 'The Morgan brothers register a claim at Mount Morgan', text: 'After a long inspection of the district in 1882, the Morgan brothers took ore specimens from a rocky hill and got spectacular assay results. They registered a claim on the mountain on 22 July 1882. With three Rockhampton businessmen they formed a syndicate. The hill was partly on the Calliungal pastoral run.', flag: 'A local volunteer association says a stockman, William Mackinlay, found the gold about 1870 and kept it secret, and that the Morgans did not discover it. Sources also disagree about what the Morgans were looking for in 1882: copper, silver or gold. See the folklore page.', src: ['qpMM', 'mmBros', 'mmDisc'] },
  { date: '1883', title: 'Mount Morgan placed inside a goldfield; first gold at Croydon', text: 'The local association says Ironstone Mountain was not on a proclaimed goldfield until 1883, when the Crocodile goldfield was extended to take it in. Separately, two sources say William Brown of Croydon Downs Station and two station hands found a gold-bearing reef at Croydon in 1883.', flag: 'For Croydon, the Heritage Register says “two of his employees” found quartz carrying gold in late 1883, and the Golden Gate entry says mid-1883. The same Register entry says the Alldridge brothers, working for Brown, found 20 payable reefs in 1885. Other sources give 1885 as the year of discovery.', src: ['mmDisc', 'qhrTabletop', 'wikiGolden', 'slqCroy'] },
  { date: '1884', title: 'The Morgans sell; school and railway', text: 'The Morgan brothers sold all their shares in Mount Morgan in 1884. A government school opened at Mount Morgan that year. At Ravenswood the railway branch line opened in 1884, after silver mining nearby had led to approval of the line in 1882.', src: ['mmBros', 'qpMM', 'qpRav'] },
  { date: '1885', title: 'Calliope down to about 20 miners; first geological survey', text: 'By 1885 it was reported that as few as 20 miners were left in Calliope town itself. The Geological Survey of Queensland mapped the Calliope, Raglan and Milton fields in 1885.', flag: 'The 20 miners are those in the town itself. Miners may have been working elsewhere on the field. The survey reports were not read.', src: ['qpCalliope', 'cqdChron'] },
  { date: 'October 1885', title: 'Gold reported at Croydon', text: 'The Queensland Heritage Register says that in October 1885 a major find was reported about 145 kilometres east of Normanton, and that Richard and Walter Alldridge, acting under instructions from W. C. Brown, found 20 payable reefs.', flag: 'The Queensland Heritage Register, a university study and a tourism page all say the brothers were Richard and Walter Alldridge. The State Library of Queensland says they were James and Walter Aldridge. The tourism page also tells a story about a worker, “Posthole Tom”. See the folklore page.', src: ['qhrCroy', 'qhrTabletop', 'wegner', 'slqCroy', 'visitCroy'] },
  { date: '18 January 1886', title: 'Croydon proclaimed a goldfield', text: 'Croydon was proclaimed a goldfield on 18 January 1886, under the Queensland Mines Department. The town site was surveyed. By the end of 1886 the population of the field was about 2,000.', src: ['qhrCroy', 'qhrTabletop', 'wikiGolden'] },
  { date: 'October 1886', title: 'Mount Morgan Gold Mining Company formed', text: 'In October 1886 the syndicate became the Mount Morgan Gold Mining Company Limited. By 1890 the town was a municipal borough with a population near 3,500.', src: ['wikiMM', 'qpMM'] },
  { date: '1887', title: 'Croydon grows to thousands', text: 'By 1887 the population of the Croydon district had reached about 7,000, according to the State Library of Queensland and the Heritage Register. Croydon had four general stores, a bakery, hotels, banks, two newspapers and a school. The Croydon Court House was built in 1887.', flag: 'The peak population is given as 7,000 (1887), over 8,000 (by 1890, a tourism page) and 25,000 (a Heritage Register entry about the hospital). The 25,000 figure is much higher than all the others and was not explained. By 1897 Croydon had the third highest population in north Queensland, after Townsville and Charters Towers. The State Library of Queensland says that about 1900 it was the fourth largest town in Queensland.', src: ['slqCroy', 'qhrTabletop', 'qhrCroy', 'visitCroy', 'qhrCroyHosp'] },
  { date: '1888', title: 'Chinese people removed from the Clermont area', text: 'Wikipedia’s Clermont article says that in the 1880s up to 4,000 Chinese people lived at Clermont, mining for gold and copper, that this led to race riots, and that the Chinese were removed from the region in 1888.', flag: 'This comes from one Wikipedia article. The number was not checked against a second source. Wikipedia’s article on the gold rushes describes Peak Downs as a small rush.', src: ['wikiClermont', 'wikiAGR'] },
  { date: '1891', title: 'Railway from Normanton to Croydon', text: 'The railway from the port of Normanton to Croydon opened in 1891. It is now the Gulflander tourist railway.', src: ['slqCroy', 'wikiCroy'] },
  { date: '1893', title: 'Cairns to Mareeba railway', text: 'The opening of the Cairns–Mareeba rail line in 1893 made the Hodgkinson area easier to reach.', src: ['qpHodg'] }
]);

addAfter(TL, 'Measles, then removal of Aboriginal people from Gympie', [
  { date: '1896', title: 'Copper at Many Peaks', text: 'Queensland Places says copper ore was discovered at Many Peaks, 60 kilometres south of Calliope, in 1896.', flag: 'Queensland Places also says Many Peaks iron ore was mined as a smelting flux for Mount Morgan and was linked to Mount Morgan by rail in 1910. The sources do not say whether this is one mine worked for different ores or more than one site.', src: ['qpCalliope', 'qpMM'] }
]);

addAfter(TL, 'A law controlling Aboriginal workers', [
  { date: '1898', title: 'Railway reaches Mount Morgan', text: 'The railway was extended from Kabra to Mount Morgan in 1898. It ended on the far side of the Dee River from the town and the mine.', src: ['qpMM'] }
]);

addAfter(TL, 'Highest production at Gympie; Charters Towers slows', [
  { date: '1909 and 1910', title: 'The Hodgkinson joins the Chillagoe field; Calliope railway', text: 'In 1909 the Hodgkinson was added to the Chillagoe Gold and Mineral Field because its small output no longer justified its own administration. In 1910 a railway was built through Calliope to the Many Peaks mine. As well as ore, it carried dairy produce from farms along the line.', src: ['kirk82', 'qpCalliope'] }
]);

// ---------- places ----------
function placeAfter(anchor, items) {
  var i = I.places.findIndex(function (x) { return x.name === anchor; });
  if (i < 0) throw new Error('place anchor not found: ' + anchor);
  I.places.splice.apply(I.places, [i + 1, 0].concat(items));
}
var NOSACRED = 'This resource gives no sacred or restricted material.';

placeAfter('Rockhampton', [
  { name: 'Calliope', where: 'About 20 kilometres south-west of Gladstone · Bailai (Byellee) and Gooreng Gooreng Country', image: 'manypeaks', text: [
    'Calliope is on the Calliope River. Governor FitzRoy inspected the Port Curtis area in 1854 and named the river after the ship Calliope, in which he travelled. News of gold on the Calliope River, 20 miles from Gladstone, reached the press at the end of March 1862.',
    'The first newspaper report found for this resource is in The Courier of 2 August 1862. Its Gladstone correspondent said he did not want to raise false hopes. Only a small number of diggers were working, and a digger told him his party had washed out two ounces the day before with a long-tom. By 1864 Queensland Places counts 400 miners, four stores and three hotels in the settlement. Other sources say the population was 800. Nobody says how the numbers were counted.',
    'The diggings. CQ Diggings names Pancake Gully, Nuggety Gully and New Zealand Gully among the first workings. One more gully name on its list uses a word for Aboriginal people that this resource does not repeat. Later fields nearby were Raglan, from 1867, and Norton on the Milton run, from 1871. Norton was proclaimed in 1879. No source read describes diggings called Cania or Upper Calliope, or a separate Boyne field, so none are described here.',
    'Stores, hotels and officials. Queensland Places counts four stores and three hotels in 1864. The Prospect Hotel at Calliope was the place of an inquiry in February 1873. A travel article says the Diggers Arms, in Bell Street, was built during the gold boom, but no building date was found. No source read names a gold commissioner or a police officer at Calliope in the 1860s, so none are named here.',
    'Chinese miners. In April 1862 the Courier reported that a group of Chinese miners was expected from Sydney. In May 1867 Chinese miners were reported to have found a large nugget (the weight is disputed, see the timeline). No source read says how many Chinese people were at Calliope.',
    'Decline. By 1868 there was a private school, and the township was surveyed in 1871. A state school opened in 1872. The Calliope local government division was formed in 1879. The 1881 census counted 59 people in the town, and by 1885 it was reported that as few as 20 miners were left in the town itself. Closer settlement along the Boyne River in the 1880s helped to keep the town going. Copper ore was found at Many Peaks in 1896, and a railway was built through the town to the mine in 1910. The photograph above shows Many Peaks about 1910. The census counted 302 people in 1901 and 516 in 1911.',
    'Whose Country. Calliope Chase says the area is Bailai (Byellee) and Gooreng Gooreng Country. Gladstone Regional Council acknowledges the Bailai, Gurang, Gooreng Gooreng and Taribelang Bunda peoples as the traditional custodians of its region. The Gladstone Ports Corporation history book, written with Gooreng Gooreng elders, says the arrival of Europeans brought a clash of cultures with a devastating impact on the Gooreng Gooreng and Bailai nations. No source read describes what the diggings meant for Aboriginal people at Calliope itself. The one documented event found is the Native Police killing of a Goreng Goreng family at Mount Coliseum in December 1872, and the inquiry held at the Prospect Hotel at Calliope on 17 February 1873. Mount Coliseum is not on the diggings. ' + NOSACRED
  ], src: ['qpCalliope', 'trCour1909', 'trCal1862Aug', 'trCal1862Apr', 'cqdGladstone', 'cqdChron', 'smhCal', 'wikiCalliope', 'calChase', 'glaCouncil', 'gpcBook', 'tlcCal'] },
  { name: 'Peak Downs and Clermont', where: 'Central Queensland, about 240 miles from Yaamba · Gangulu Country', text: [
    'Gold was reported at Peak Downs in November 1861. Wikipedia says the discovery of gold in 1861 led to the founding of the town of Clermont. Clermont’s town reserve was proclaimed on 25 March 1864. Copper was found soon after, and the old towns of North and South Copperfield are about 4 kilometres from Clermont.',
    'It was a small rush. A correspondent in December 1862 counted about 40 miners. The Northern Argus in July 1863 counted about 200 diggers and over 800 ounces of gold in their hands. In August 1866 two nuggets of 13 ounces and 4½ ounces reached Rockhampton.',
    'Chinese miners. Wikipedia’s Clermont article says up to 4,000 Chinese people lived at Clermont in the 1880s and that they were removed from the region in 1888 after riots. The figure comes from one source.',
    'Whose Country. Wikipedia says the Gangalu (Gangulu) language region includes Clermont and Springsure, and that the town was founded close to what was Babbinburra clan land. In the same weeks as the first gold reports in 1861 there was an attack on Mr Wills’s station on the Nogoa River, in which settlers were killed. See the Grass Rush information bank for more. This resource has not found a source that describes what the Peak Downs goldfield meant for Gangulu people. ' + NOSACRED
  ], src: ['trCour1861', 'trCour1863a', 'trCour1863b', 'trQldr1866', 'wikiClermont', 'wikiAGR'] },
  { name: 'Crocodile Creek (Bouldercombe)', where: 'About 20 kilometres from Rockhampton · Traditional Owners not named in the sources read', text: [
    'Gold was found at Crocodile Creek in 1865 or 1866, and the main rush began in June 1866. By August 1866 the population was 800 to 1,000, and Bird says it was over 3,000 by Christmas, including about 1,000 Chinese people. Stores and hotels were built by people from Rockhampton, and coaches ran from the town. Gold buyers went out to the field. The town was first called Crocodile and is now Bouldercombe. Wikipedia says the rush was over by 1876, when the population had dropped to 149, and that a find at Mount Usher in 1897 brought it back above 1,000 for a short time.',
    'On 7 January 1867 a crowd of European diggers drove Chinese miners from the field after a dispute over claims. About 30 tents and huts were burned. Nine Europeans were arrested and four were sentenced to nine months in prison. The Gold Commissioner, John Jardine, had decided to protect the Chinese miners, and Bird says this increased their number. The Courier’s 1909 list records riots at the Crocodile and Mount Morinish diggings that day. Wikipedia says another field at Morinish was opened in 1866, with about 600 people by February 1867.',
    'Whose Country. No source read names the Traditional Owners of Crocodile Creek. Sources about nearby places name the Darumbal people for the Rockhampton area and the Gaangalu people for Mount Morgan. This resource does not say which applies at Crocodile Creek.'
  ], flag: 'Bird wrote about 40 years after the events and used insulting words about Chinese people, which are not copied here. The numbers differ between sources. See the timeline.', src: ['bird1904', 'mbmRiot', 'wikiBoulder', 'cqdRock', 'trQldr1866', 'trQldr1867', 'wikiAGR', 'trCour1909', 'darumbal', 'qldMM'] }
]);

placeAfter('Gympie', [
  { name: 'Cape River and Capeville', where: 'Near Pentland, south-west of Charters Towers · Gudjal Country', text: [
    'The Cape River field was one of the first rushes in north Queensland. The Heritage Register says the first rush near Townsville was at the Star River in 1866, followed by the Cape River in 1867. The founders of Townsville had offered a reward for a payable goldfield in 1865. Sources disagree on the year of the find (1865, 1866 or 1867), and Wikipedia says the field of over 300 square miles was proclaimed on 4 September 1867. The centre was Capeville, about 10 kilometres north-west of Pentland. In August 1867 Townsville and Bowen were disputing which of them held the field.',
    'By September 1868 a report said the alluvial diggings were almost at a standstill. About Chinese people, the Queensland Heritage Register says the first Chinese people to reach north Queensland arrived during the Cape River rush in 1867. The About the North site says the field had more than 2,500 miners by 1868. Wikipedia says more than 20,000 men worked the field by 1870 and that Capeville had about 30 people by 1873. The 20,000 figure is probably wrong, because Wikipedia’s own gold rushes article calls the field small. Capeville became a post office in 1884 and the town was renamed Pentland in 1885.',
    'Whose Country. About the North says Pentland is on Gudjal country. A university thesis on the archaeology of the Cape River field (Edgar, 2014) exists but was not read for this resource. No source read describes what the rush meant for Gudjal people. ' + NOSACRED
  ], src: ['wikiPentland', 'wikiAGR', 'aboutPentland', 'trCour1868', 'qhrRav', 'trCour1909', 'edgar'] },
  { name: 'Ravenswood', where: 'South-east of Charters Towers, near the Burdekin River · Traditional Owners not confirmed in the sources read', text: [
    'Alluvial gold was found in late 1868 or 1869 on creeks in the Ravenswood and Merri Merriwa runs. Camps called Upper, Middle and Lower Camp grew up. Reefs followed, and the General Grant and the Sunset became the main mines. The goldfield was proclaimed on 3 November 1870 and the town on 19 May 1871. By 1871 the town had 30 licensed hotels, which the Register says were called shanties and had no rooms for guests. The Bank of New South Wales opened, a newspaper started, and a court house opened in 1871 and a school in 1873.',
    'The ore was hard to treat, because the gold was mixed with iron sulphide. The field slumped from 1872 as miners left for Charters Towers and the Palmer River. A railway branch line opened in 1884. After 1899 the New Ravenswood Company used cyanide to treat the ore, and 1905 was the year of highest production. By 1917 the field had produced over 850,000 ounces of gold, which made it the fifth largest gold producer in Queensland.',
    'Chinese miners. About 200 Chinese people were looking for alluvial gold at Ravenswood in 1871, and in January 1872 an estimate gave about 1,500. The Chinese settlement area on Deighton Street was the centre of Chinese life in the town. Between 1880 and 1910 the Chinese made up between 22.7 per cent and 3.9 per cent of the goldfield’s population. In 1912 and 1913 their vegetables and loans helped the town through a miners’ strike. The Chinese settlement area was added to the Queensland Heritage Register on 14 October 2016.',
    'Whose Country. No source read for this resource names the Traditional Owners of the Ravenswood area, and the Queensland Heritage Register entry and Queensland Places entry read do not mention Aboriginal people. Local Traditional Owner groups should be asked. ' + NOSACRED
  ], flag: 'The two main sources differ on some numbers. The Heritage Register gives 154,094 ounces to the end of 1877. Queensland Places gives 214,652 ounces for 1868 to 1878. The periods differ by a year, but the totals are not close.', src: ['qhrRav', 'qpRav'] },
  { name: 'Gilberton and Etheridge (Georgetown)', where: 'Gilbert and Etheridge rivers, far north Queensland · Ewamian (Agwamin) Country', text: [
    'Richard Daintree, the government geologist, reported gold at the head of the Gilbert River in 1867 or 1868. Prospectors came in 1869. Gilberton was the main settlement on the Gilbert and was established in 1869. At its peak it had 13 hotels serving 300 to 700 people, with about 1,000 when travellers were counted. The Etheridge field to the east had a major reef from 1870 and was renamed Georgetown by 1872. Alluvial gold peaked in 1873 at 121,000 ounces.',
    'A study of 155 residents of the Gilbert field between 1869 and 1874 found that 14.8 per cent were born in Australia, 44.5 per cent came from European countries and 38.6 per cent came from China and Hong Kong. A source says that by 1870 more than half of the local population was Chinese. Chinese people were forced from Western Creek in 1871, and the Chinese community at Gilberton had its own cemetery, where 39 people were buried.',
    'Of the 155 deaths recorded at Gilberton between 1869 and 1873, only 69 people received any medical care. The diggers built their own hospital. Gilberton collapsed at the end of 1873.',
    'Whose Country. Buhrich and others write that the Ewamian people practised extensive funeral preparations, and that the diggers’ rough burials may have seemed shocking to them. They describe Aboriginal resistance as a major problem on the field, and the response of the Native Mounted Police, who had posts at Oak Park, Western Creek and elsewhere. About the North says the Gilbert River flows through Agwamin/Ewamian, Tagalaka and Kurtjar country. Wikipedia says the old town lay on a cattle station set up in 1869 on Ewamian land. Queensland Places says the Ewamian people surrendered native title over the townships of Einasleigh, Forsayth, Mount Surprise and Georgetown in 2004 and received access to their country through three reserves. It also says that Aboriginal resistance was stopped by disease, opium and weight of numbers. That is a European view, and the Ewamian people may see it differently. ' + NOSACRED
  ], flag: 'Dates for the find differ. See the timeline. Buhrich and others warn that newspapers swung between calling the field a great hope and calling it patchy.', src: ['buhrich', 'qpEth', 'aboutGilbert', 'chinNA', 'wikiGilb', 'aiatsisGilb', 'trCour1909'] }
]);

I.places.push(
  { name: 'The Hodgkinson (Kingsborough and Thornborough)', where: 'About 80 kilometres west of Cairns · Kuku Djungan Country', text: [
    'James Mulligan, who had found the Palmer River gold in 1873, wrote in his diary that he found gold on the Hodgkinson on 7 February 1876. Miners from the Palmer followed, and the goldfield, of about 2,000 square miles, was proclaimed on 15 June 1876. It was mainly a field of reefs, not creek gold. Output was much less than the Palmer’s: Kirkman says it was less than one-sixth in the first ten years. The total to 1886 was 173,603 ounces.',
    'Two towns grew up about 5 kilometres apart, Kingsborough and Thornborough. By mid-1877 they had more than 1,000 people each. By 1913 three hotels were left in Kingsborough and two in Thornborough. Kirkman mentions Wah Lee’s Canton Hotel at Thornborough as one of the businesses Chinese people ran. In 1909 the field was joined to the Chillagoe field. Kirkman says the Hodgkinson led to the growth of Cairns and Port Douglas as ports and to settlement of the Cairns hinterland. The Cairns–Mareeba railway opened in 1893. A track from the goldfield to the coast, made in 1876, became known as the Douglas Track.',
    'Chinese miners. Kirkman says Chinese people did not do much alluvial mining on the Hodgkinson. In 1878 the Chinese population rose to 2,000 for a time after the Lukinville rush and then fell to 220 by the end of 1879. They worked as carriers and market gardeners and, in the mid-1880s, as many as 43 worked in quartz mines.',
    'Whose Country. The South Australian Museum says the Traditional Owners of the Hodgkinson Basin are the Kuku Djungan, and that their most significant site is Ngarrabullgan (Mount Mulligan). Their own organisation, the Nguddaboolgan Native Title Aboriginal Corporation, lists 1876 as the year of the Hodgkinson goldfield and Thornborough, and says many Djungan people were later forcibly removed to missions at Yarrabah, Palm Island and Kowanyama. A cultural tourism site says miners and police caused the Djungan population to be greatly reduced, and the Djungan remember their grandparents fleeing on foot. A hobby blog says other groups in the region include the Muluridji, Yirrganydji and Kuku Yalanji. ' + NOSACRED
  ], flag: 'Some of the Aboriginal history here comes from a tourism site and a hobby blog, which were seen only in search summaries. They should be checked with Kuku Djungan people.', src: ['kirk82', 'qpHodg', 'saKuku', 'nntac', 'qualla', 'histTowns'] },
  { name: 'Mount Morgan', where: 'About 40 kilometres south-west of Rockhampton · Gaangalu (Gangulu) Country', image: 'morgan', text: [
    'Mount Morgan was a mine in a hill of ironstone. The Morgan brothers registered a claim on 22 July 1882. The mine ran from 1882 to 1981, and the Queensland Government says a plant on the tailings kept going until 1990. Queensland Places calls Mount Morgan a former gold and copper mining town. The mine was a gold mine at first and later mostly a copper mine, and it also produced silver. The Morgans sold their shares in 1884 and the Mount Morgan Gold Mining Company was formed in October 1886. A government school opened in 1884, the town became a municipal borough in 1890 with nearly 3,500 people, and the railway reached the town in 1898. The population was 3,514 in 1891, 6,280 in 1901 and 9,772 in 1911.',
    'The mining was underground until a fire in 1927. The company went into liquidation, and a new company, Mount Morgan Limited, began open-cut mining in 1928. The last truck of ore left the pit in 1981. The pit is about 360 metres deep.',
    'Output. The local volunteer association says the mine gave a total of 225,000 kg of gold, 50,000 kg of silver and 360,000 tonnes of copper over 99 years. Wikipedia says about 262 tonnes of gold, 37 tonnes of silver and 387,000 tonnes of copper.',
    'Whose Country. The Queensland Government says Mount Morgan is in Gaangalu (Gangulu) traditional country. Darumbal Enterprises says Darumbal Country extends west to the foot of the Mount Morgan range. No source read describes what the mine meant for Gaangalu people in the 1880s. ' + NOSACRED
  ], flag: 'Production totals differ between sources. The local association’s page also disagrees with the standard story about who found the gold. See the folklore page.', src: ['qpMM', 'mmBros', 'mmDisc', 'wikiMM', 'qldMM', 'darumbal'] },
  { name: 'Croydon', where: 'Gulf Savannah, about 560 kilometres west of Cairns · Tagalaka Country', text: [
    'Croydon began as a pastoral run, Croydon Downs, taken up by William Brown. Station hands found a gold-bearing reef in 1883. In 1885 Richard and Walter Alldridge, working for Brown, found 20 payable reefs, and a major find was reported in October 1885. The field was proclaimed on 18 January 1886. Ore-crushing mills were working by the end of 1886 and the population was about 2,000. The Heritage Register calls it one of the last of the north Queensland gold rushes of the nineteenth century.',
    'The population reached about 7,000 by 1887. The field produced 772,374 ounces of gold to 1947. From 1890 to 1910 its output was second only to Charters Towers. Production peaked in 1900 and began to decline by 1909. By 1914 the population had halved from its level at the turn of the century. The railway from Normanton opened in 1891. In 1897 Croydon had the third highest population in north Queensland.',
    'Chinese miners. Wikipedia says Chinese people moved in soon after the 1885 find and supplied fresh vegetables and fruit, and worked as cooks and carriers and on tribute. The Chinese settlement on the north-west edge of town had a temple. A museum study says there were also Chinese hard-rock miners at Croydon.',
    'Whose Country. The Tagalaka people are the Traditional Owners of the Croydon area, according to Gulf Savannah Development and the Tagalaka Aboriginal Corporation. On 10 December 2012 the Federal Court recognised their native title over more than 20,000 square kilometres, including reserves in the Croydon township. Wikipedia says that mining in the area quickly drove out the Tagalaka people. A museum study says that Tagalaka people and Chinese people are barely represented in Croydon’s machinery collection, and that some Aboriginal people worked as miners and prospectors there after the frontier period, including Mrs Marshall, a Tagalaka woman who mined with her husband. ' + NOSACRED
  ], flag: 'The finder, the year and the peak population are disputed. See the timeline.', src: ['qhrCroy', 'qhrTabletop', 'qhrCroyHosp', 'wikiGolden', 'slqCroy', 'wikiCroy', 'gulfSav', 'tagalaka', 'wegner'] }
);

// ---------- overview ----------
var O = I.overview;
O.lead = 'Gold was found in Queensland many times between 1858 and 1886. Each time, thousands of people travelled to the new field. Each field was on Country where Aboriginal people already lived. Many of the diggers were British or Irish. Many were Chinese.';
O.glance.push(
  { n: '173,603 ounces', label: 'of gold from the Hodgkinson field to 1886', src: ['kirk82'] },
  { n: 'Over 850,000 ounces', label: 'of gold from Ravenswood by 1917', src: ['qhrRav'] },
  { n: '772,374 ounces', label: 'of gold from Croydon, 1886 to 1947', src: ['qhrTabletop'] }
);
O.sections.forEach(function (s) {
  if (s.h === 'Queensland and the gold rushes') {
    s.p[s.p.length - 1] += ' This resource also covers nine smaller fields that were found between 1861 and 1886: Calliope, Peak Downs, Crocodile Creek, Cape River, Ravenswood, the Gilbert and Etheridge, the Hodgkinson, Mount Morgan and Croydon.';
  }
});
var ri = O.sections.findIndex(function (s) { return s.h === 'The rushes in turn'; });
O.sections.splice(ri + 1, 0,
  { h: 'More goldfields, 1861 to 1886', p: [
    'Peak Downs, 1861. Gold was reported in November 1861 near what became Clermont. It was a small rush. The newspaper that reported it warned that it might turn out like Canoona. About 200 diggers were there in July 1863.',
    'Calliope, 1862. News of gold on the Calliope River, near Gladstone, came at the end of March 1862. Queensland Places counts 400 miners, four stores and three hotels by 1864, and other sources say 800 people. A claim that Calliope was Queensland’s first proclaimed goldfield, in 1863, has not been verified. By 1885 as few as 20 miners were left in the town. Copper at Many Peaks in 1896 and a railway in 1910 helped it later.',
    'Crocodile Creek, 1865 to 1867. The main rush at Crocodile Creek, near Rockhampton, began in June 1866. By Christmas there may have been over 3,000 people, including about 1,000 Chinese. On 7 January 1867 a crowd of European diggers drove Chinese miners from the field.',
    'Cape River, 1865 to 1868. This was one of the first rushes in north Queensland. The field was proclaimed in 1867, according to Wikipedia, and the alluvial gold was nearly worked out by 1868.',
    'Ravenswood, 1868 to 1917. Alluvial gold was found in 1868 or 1869. Reefs followed, and Ravenswood became the fifth largest gold producer in Queensland. It had a large Chinese community.',
    'The Gilbert and Etheridge, 1867 to 1873. Gold was reported on the Gilbert River by the government geologist. Gilberton grew from 1869 and collapsed in late 1873 after attacks by Aboriginal people, whose Country it was. The Etheridge field, later Georgetown, took over.',
    'The Hodgkinson, 1876. James Mulligan found gold in February 1876 and the field was proclaimed on 15 June 1876. Output was small. It helped Cairns and Port Douglas to grow as ports.',
    'Mount Morgan, 1882. The Morgan brothers registered a claim on 22 July 1882. The mine ran for about 100 years and produced gold, silver and copper. Who found the gold first is disputed.',
    'Croydon, 1885 and 1886. A major find was reported in October 1885 and the field was proclaimed on 18 January 1886. About 7,000 people were there by 1887. It was one of the last of the nineteenth-century rushes in north Queensland.'
  ], src: ['trCour1861', 'qpCalliope', 'smhCal', 'bird1904', 'mbmRiot', 'wikiAGR', 'qhrRav', 'buhrich', 'kirk82', 'mmBros', 'qhrCroy', 'qhrTabletop', 'slqCroy'] },
  { h: 'New towns, roads, ports and railways', p: [
    'Each rush brought new towns, roads, ports and railways, and each one took more Country from its Traditional Owners.',
    'Some examples from the sources. Cooktown was settled in October 1873 as the port for the Palmer River. Kirkman says the Hodgkinson field led to the growth of Cairns and Port Douglas as ports, and a track was cut from the goldfield to the coast in 1876. The Cairns–Mareeba railway opened in 1893. A railway branch line reached Ravenswood in 1884. A railway reached Mount Morgan in 1898. The railway from the port of Normanton to Croydon opened in 1891. A railway was built through Calliope to the Many Peaks mine in 1910.',
    'The Traditional Owners of each field are named in the map and on the Places page, with the source for each name. In many places the sources do not say what the rush meant for the people whose Country it was. The map does not show the boundaries of any people’s Country.'
  ], src: ['kirk84', 'kirk82', 'qpHodg', 'qpRav', 'qpMM', 'slqCroy', 'qpCalliope', 'histTowns'] }
);
O.sections.forEach(function (s) {
  if (s.h === 'Aboriginal people and the goldfields') {
    s.p.push('On the other fields in this resource, the sources name these Traditional Owners: the Gangulu at Peak Downs, the Bailai (Byellee) and Gooreng Gooreng at Calliope, the Gudjal at Cape River, the Ewamian at the Gilbert and Etheridge, the Kuku Djungan on the Hodgkinson, the Gaangalu at Mount Morgan and the Tagalaka at Croydon. No source read names the Traditional Owners of Crocodile Creek or Ravenswood. On the Gilbert, the Hodgkinson and Croydon the sources describe violence, removal and loss, and the people concerned or their organisations are quoted where possible. Many records are European accounts.');
    s.src = (s.src || []).concat(['wikiClermont', 'calChase', 'gpcBook', 'aboutPentland', 'buhrich', 'saKuku', 'nntac', 'qldMM', 'tagalaka']);
  }
});
O.words.push(
  ['Long-tom', 'A long wooden box used to wash gravel for gold.'],
  ['Battery', 'A machine with heavy stamps that crush rock so the gold can be taken out.'],
  ['Proclaimed', 'Officially declared by the government. A goldfield or a town could be proclaimed.'],
  ['Tribute', 'A way of working a mine in which a party of miners works it and gives the owner a share of the gold.'],
  ['Native title', 'Rights to land that the Federal Court has recognised for Traditional Owners.']
);

// ---------- people ----------
function ppl(kind, name, dates, text, src, flag) { var o = { kind: kind, name: name, text: text, src: src }; if (dates) o.dates = dates; if (flag) o.flag = flag; return o; }
I.people.forEach(function (x) {
  if (x.name === 'James Venture Mulligan') { x.text += ' In 1876 he wrote in his diary that he found gold on the Hodgkinson River on 7 February.'; x.src = x.src.concat(['kirk82']); }
  if (x.name === 'The Gudjal people and others') { x.text += ' About the North also says Pentland, near the Cape River field, is on Gudjal country.'; x.src = x.src.concat(['aboutPentland']); }
  if (x.name === 'Chinese miners and merchants') { x.text += ' They were also at Calliope, Crocodile Creek, Cape River, Ravenswood, the Gilbert, the Hodgkinson and Croydon.'; }
});
Array.prototype.push.apply(I.people, [
  ppl('person', 'Governor FitzRoy', 'Calliope, 1854', 'Inspected the Port Curtis area in 1854 and named the Calliope River after the ship Calliope, in which he travelled.', ['qpCalliope']),
  ppl('person', 'Captain O’Connell', 'Calliope, 1862', 'The Courier’s Gladstone correspondent said in April 1862 that a Captain O’Connell was reported to have fitted out a party for the Calliope diggings. Only the name appears in the source.', ['trCal1862Apr']),
  ppl('person', 'C. W. Rich', 'Calliope, 1873', 'The police magistrate who led the inquiry at the Prospect Hotel, Calliope, on 17 February 1873.', ['tlcCal']),
  ppl('person', 'John Jardine', 'Crocodile Creek, 1866 and 1867', 'Appointed Gold Commissioner at Crocodile Creek. Bird says he decided to protect the Chinese miners and give them the same rights as the white population.', ['bird1904', 'trCour1861'], 'The Courier of 11 November 1861 names a J. Jardine, Esq., as holding the first Peak Downs gold. The sources read do not say whether he is the same man.'),
  ppl('person', 'William Brady and Thomas Feely', 'Crocodile Creek, 1866', 'Named by Bird as among the first to get payable gold in Crocodile Creek, although Bird says it is not clear who was first.', ['bird1904']),
  ppl('person', 'Richard Daintree', 'Cape River and Gilbert River, 1865 to 1868', 'Government geologist. He is credited with finding the Cape River goldfield and reported gold at the head of the Gilbert River. The year of each is given differently by different sources.', ['wikiAGR', 'wikiPentland', 'buhrich', 'qpEth']),
  ppl('person', 'Jessop, Buchanan and Crane', 'Ravenswood, 1868 and 1869', 'Prospectors credited with the first Ravenswood gold. Sources give different credit. The Brisbane Courier later said Jessop and party got a reward of £400 and Crane and party, the “original discoverers”, got £100.', ['qhrRav']),
  ppl('person', 'John Corbett', 'Gilberton, June 1871', 'A lone traveller from Gilberton who was speared in June 1871. Buhrich and others say the Native Mounted Police killed 17 Aboriginal people in response.', ['buhrich']),
  ppl('person', 'Alexander Douglas', 'Calliope district, 1872, and the Hodgkinson, 1876', 'The TLCMap record names an Acting Sub-Inspector Alexander Douglas in the Native Police party at Mount Coliseum in December 1872. A hobby blog says an Alexander Douglas arrived on the Hodgkinson in July 1876 with a Native Mounted Police detachment and, with Robert Johnstone, helped to make the track to Trinity Bay.', ['tlcCal', 'histTowns'], 'The sources do not say whether these are the same man. The blog also gives him a nickname that this resource does not repeat.'),
  ppl('person', 'Frederick, Thomas and Edwin Morgan', 'Mount Morgan, 1882 to 1884', 'Brothers who registered a claim on Ironstone Mountain on 22 July 1882 and sold their shares in 1884. The mountain was renamed after them. They went into business with three Rockhampton men, including the solicitor William Knox D’Arcy.', ['mmBros', 'mmDisc', 'qpMM']),
  ppl('person', 'William Mackinlay', 'Mount Morgan, about 1870', 'A stockman on Calliungal Station. A local volunteer association says he found that Ironstone Mountain carried gold about 1870. See the folklore page.', ['mmDisc'], 'This is one local association’s view, and it is disputed.'),
  ppl('person', 'William Chalmers Brown', 'Croydon, 1883 to 1885', 'The pastoralist of Croydon Downs Station, who gave the Alldridge brothers instructions to prospect.', ['qhrTabletop', 'wikiGolden']),
  ppl('person', 'Richard and Walter Alldridge', 'Croydon, 1885', 'Pastoral workers credited by the Queensland Heritage Register with finding 20 payable reefs at Croydon in 1885. The State Library of Queensland calls them James and Walter Aldridge.', ['qhrTabletop', 'wegner', 'slqCroy']),
  ppl('person', 'Mrs Marshall', 'Croydon', 'A Tagalaka woman who mined alongside her husband at Croydon, according to a museum study. Her first name and dates were not found.', ['wegner']),
  ppl('group', 'The Bailai (Byellee) and Gooreng Gooreng peoples', 'Calliope and Gladstone', 'Named by Calliope Chase as the people of the Calliope area. Gladstone Regional Council also acknowledges the Gurang and Taribelang Bunda peoples as custodians of its region. The Gladstone Ports Corporation history book, written with Gooreng Gooreng elders, says the arrival of Europeans had a devastating impact on the Gooreng Gooreng and Bailai nations. The name is spelled many ways in different records.', ['calChase', 'glaCouncil', 'gpcBook']),
  ppl('group', 'The Gangulu (Gaangalu) people', 'Peak Downs, Clermont and Mount Morgan', 'Wikipedia says the Gangalu (Gangulu) language region includes Clermont and Springsure, and that Clermont was founded close to Babbinburra clan land. The Queensland Government names the Gaangalu (Gangulu) as the traditional owners of the Mount Morgan area.', ['wikiClermont', 'qldMM']),
  ppl('group', 'The Ewamian (Agwamin) people', 'Gilbert and Etheridge', 'The traditional people of the Gilbert and Etheridge country. Buhrich and others describe Ewamian resistance to the goldfield and the Native Mounted Police response. In 2004 the Ewamian people surrendered native title over the townships of Einasleigh, Forsayth, Mount Surprise and Georgetown, and in return received access to their country through three reserves.', ['buhrich', 'qpEth', 'aboutGilbert']),
  ppl('group', 'The Kuku Djungan (Djungan) people', 'The Hodgkinson', 'The South Australian Museum names them as the Traditional Owners of the Hodgkinson Basin and Ngarrabullgan (Mount Mulligan). Their native title corporation is the Nguddaboolgan Native Title Aboriginal Corporation.', ['saKuku', 'nntac']),
  ppl('group', 'The Tagalaka people', 'Croydon', 'The Traditional Owners of the Croydon area. The Federal Court recognised their native title on 10 December 2012. Wikipedia says mining quickly drove them out of the Croydon area.', ['tagalaka', 'gulfSav', 'wikiCroy']),
  ppl('org', 'The Mount Morgan Gold Mining Company', '1886 to 1927', 'Formed in October 1886 from the syndicate that held the mine. It mined underground until a fire in 1927, after which it went into liquidation. Open-cut mining began in 1928 under Mount Morgan Limited.', ['wikiMM', 'qpMM']),
  ppl('org', 'The New Ravenswood Company', 'Ravenswood, 1899 to 1917', 'Floated in 1899 and, until 1917, the largest mining operation at Ravenswood. Its cyanide treatment of ore led to a period of high gold production from 1900 to 1908.', ['qhrRav'])
]);

// ---------- real lives ----------
I.lives.forEach(function (l) {
  if (l.name === 'James Venture Mulligan') {
    l.text.push('In 1874 Mulligan came to the Hodgkinson River and named it after the mining warden William Hodgkinson. On 7 February 1876 he noted gold there in his diary. Kirkman says the true nature of an incident of 26 January 1876 is not clear, but taken at face value it shows what contact between Aboriginal people and Europeans in the district was like. By April 1876 about 2,000 men were on the field and Mulligan was blamed when the gold was less than hoped.');
    l.src = l.src.concat(['kirk82', 'qpHodg', 'saKuku', 'histTowns']);
  }
});
Array.prototype.push.apply(I.lives, [
  { name: 'The Chinese miners of Calliope', dates: '1862 and 1867', text: [
    'The Courier reported in April 1862 that a group of Chinese miners was expected at Calliope from Sydney. In May 1867 two sources report that a Chinese miner or miners found a large nugget in an old claim. The weight is given as 16 pounds in one and six pounds in the other.',
    'The names of these miners are not given in the sources read. No source read says how many Chinese people were at Calliope or where they lived.'
  ], flag: 'This entry is about people whose names are not recorded in the sources read. A family history or Chinese-language source may hold more.', src: ['trCal1862Apr', 'trCour1909', 'cqdGladstone'] },
  { name: 'John Jardine, Gold Commissioner at Crocodile Creek', dates: '1866 and 1867', text: [
    'Bird says that John Jardine was appointed Gold Commissioner at Crocodile Creek and decided to protect the Chinese miners and give them all the privileges of the white population. Bird says this increased the number of Chinese people on the field.',
    'On 7 January 1867 a crowd of European diggers drove Chinese miners from the field. Police came from Rockhampton, and the judge at the trial said the men had destroyed Chinese diggers’ property and expelled harmless people.'
  ], flag: 'Bird wrote about 40 years later. The Chinese miners’ own account of the day was not found.', src: ['bird1904', 'mbmRiot'] },
  { name: 'William Mackinlay and the Gordons, Mount Morgan', dates: 'About 1870 to 1882', text: [
    'A local volunteer association tells this account of Mount Morgan. William Mackinlay was a stockman on Calliungal Station. About 1870 he found that the ironstone outcrop of Ironstone Mountain carried gold, and he and his family carried bags of stone to the creek to wash for gold. He kept the find secret. His daughter told Sandy Gordon, the son of John Gordon, who in 1870 had bought the block of land beside the mountain.',
    'The association says Sandy Gordon’s wife persuaded the Morgan brothers in 1882 to take Sandy back to work, saying he would show them where her father had found something, and that the Morgans then pegged claims on the mountain. It says Sandy and his family later claimed that he was cheated of his share. The Morgans’ own account, by Edwin Morgan, says he found the gold by chance.'
  ], flag: 'This account comes from one local association and is disputed by the Morgans’ own account. It is not proven.', src: ['mmDisc', 'mmBros'] },
  { name: 'Richard and Walter Alldridge, Croydon', dates: '1885', text: [
    'The Queensland Heritage Register says that in 1885 Richard and Walter Alldridge, acting under instructions from W. C. Brown, prospected the Croydon Downs area and found 20 payable reefs. The finds were reported in October 1885, and the area was proclaimed a goldfield on 18 January 1886.',
    'The State Library of Queensland calls the brothers James and Walter Aldridge and says they had worked on the Etheridge field before moving to Croydon.'
  ], flag: 'The first names differ between sources. Nothing was found about the brothers’ later lives.', src: ['qhrTabletop', 'slqCroy', 'wegner'] },
  { name: 'Mrs Marshall, a Tagalaka woman at Croydon', dates: 'Croydon, date not given', text: [
    'A study of Croydon’s machinery collection says that a Tagalaka woman, Mrs Marshall, mined alongside her husband. It says that Aboriginal people after the frontier period took a larger part in the mining industry than historians have understood, as miners and prospectors.',
    'No other facts about her were found.'
  ], flag: 'This is one sentence in one source.', src: ['wegner'] }
]);

// ---------- did you know ----------
Array.prototype.push.apply(I.know, [
  { t: 'Calliope had 400 miners, four stores and three hotels in 1864 according to Queensland Places, but the 1881 census counted only 59 people in the town.', src: ['qpCalliope'] },
  { t: 'The Calliope River is named after the ship Calliope, in which Governor FitzRoy travelled in 1854.', src: ['qpCalliope'] },
  { t: 'In July 1862 the Gladstone correspondent of The Courier said he was anxious not to raise false hopes about the Calliope diggings.', src: ['trCal1862Aug'] },
  { t: 'The newspaper that first reported gold at Peak Downs in 1861 warned that it might turn out like Canoona.', src: ['trCour1861'] },
  { t: 'About 1,000 of the more than 3,000 people at Crocodile Creek by Christmas 1866 were Chinese, according to Bird.', src: ['bird1904'] },
  { t: 'In 1871 Ravenswood had 30 licensed hotels, which were called shanties and did not offer rooms.', src: ['qhrRav'] },
  { t: 'Ravenswood produced 865,054 ounces of gold to 1917 and was the fifth largest gold producer in Queensland.', src: ['qhrRav'] },
  { t: 'Of the 155 deaths recorded at Gilberton between 1869 and 1873, only 69 people had any medical care before they died.', src: ['buhrich'] },
  { t: 'The Hodgkinson produced less than one-sixth of the gold of the Palmer in its first ten years, but it helped Cairns and Port Douglas to grow as ports.', src: ['kirk82'] },
  { t: 'The gold in the Mount Morgan ironstone was so fine and tarnished that people mistook it for iron pyrites, called “fool’s gold”.', src: ['mmDisc'] },
  { t: 'The Mount Morgan pit is about 360 metres deep.', src: ['qpMM'] },
  { t: 'From 1890 to 1910 Croydon’s gold output was second only to Charters Towers.', src: ['qhrTabletop'] },
  { t: 'The Gulflander railway, built in 1891 for the Croydon field, still runs as a tourist railway.', src: ['slqCroy', 'wikiCroy'] }
]);

// ---------- folklore ----------
var F = I.folklore;
F.intro = F.intro.replace('collects five that', 'collects eight that');
F.stories.push(
  { title: 'Who really found Mount Morgan?', where: 'Mount Morgan · about 1870 to 1882',
    text: [
      'One telling says a stockman, William Mackinlay, found gold in an ironstone hill about 1870 and kept it secret, because the owner of the land would own the minerals. His daughter told Sandy Gordon, whose father owned the block next to the hill. In 1882 Sandy’s wife asked the Morgan brothers to give Sandy work again, saying he would show them where her father had found something. In this telling the Morgans were led to the hill and did not find it by chance.',
      'The Morgan brothers’ own telling is different. Edwin Morgan wrote in 1893 that he picked up a black stone at the top of the mountain by chance while looking for a silver lode.'
    ],
    from: 'A local volunteer association, Mount Morgan Promotions and Development, tells the Mackinlay version on its history page. It draws on J. T. S. Bird, G. S. Pattison, Frank Sykes (1893) and a 1948 lecture to the Historical Society of Queensland.',
    known: [
      'What is documented: The Morgan brothers registered a claim on the mountain on 22 July 1882. They had formed a syndicate with three Rockhampton businessmen. They sold their shares in 1884. The mountain was renamed after them.',
      'Where the sources disagree: The association says that sources differ on what Sandy’s wife said her father had found. Bird and Pattison give copper, and Edwin Morgan’s account gives a silver lode. The association also says the Gordons and others claimed Sandy was cheated of his share.',
      'Why the rest is doubtful: Most of the telling comes from accounts written years or decades later. The association argues that Mackinlay was the true finder, but that is an argument and not a record made at the time. The association also says that when Mackinlay took specimens to Rockhampton nobody was interested.'
    ],
    src: ['mmDisc', 'mmBros', 'qpMM'] },
  { title: 'Posthole Tom and the Croydon gold', where: 'Croydon · 1883 to 1885',
    text: [
      'One legend says a worker named Tom McEvoy, nicknamed Posthole Tom, found gold at Croydon while he was digging a post hole. In the story he worked for either the Alldridge brothers or the station owner, William Brown.'
    ],
    from: 'The Croydon Shire’s tourism history page tells the legend and says that accounts differ on the exact circumstances. It says McEvoy’s life ended in obscurity.',
    known: [
      'What is documented: The Queensland Heritage Register says two of Brown’s employees found quartz carrying gold in late 1883, and that in 1885 Richard and Walter Alldridge, acting under instructions from Brown, found 20 payable reefs. The find was reported in October 1885.',
      'Why the rest is doubtful: McEvoy is not named in the Heritage Register entries read. The tourism page itself says accounts differ, and it gives no record from the time.'
    ],
    src: ['visitCroy', 'qhrTabletop', 'wikiGolden'] },
  { title: 'The 36-kilogram nugget of Sneaker Gully', where: 'Gladstone region · about 1880',
    text: [
      'A later retelling says a nugget of 36 kilograms was found at the Golden Fleece deposit at Sneaker Gully about 1880.'
    ],
    from: 'CQ Diggings, a hobbyist research site, reports this as a regional retelling and labels it folklore.',
    known: [
      'What is documented: CQ Diggings says the first gold from quartz reefs at the Golden Fleece deposit was produced from about 1880, and that a bulk sample from the area mostly describes fine to medium, thin gold.',
      'Why the rest is doubtful: CQ Diggings says no contemporary warden’s return, newspaper report or production record has been found that joins the weight, the name and the place. The sources do not say how far Sneaker Gully is from Calliope.'
    ],
    src: ['cqdChron', 'cqdGladstone'] }
);
I.folkTeach = I.folkTeach || [];
I.folkTeach.push(
  { q: 'The Mount Morgan story has two tellers, the Morgans and a local association. How would you decide which to believe? What would you want to see?', a: [
    'Look for records made at the time, such as the claim registration of 22 July 1882, letters, assay results and newspaper reports of 1882. Ask who gained from each version. The Morgans gained a mine, and the Gordons said they lost a share.',
    'Notice that the association itself says its sources disagree about whether the secret was copper or silver. Students could discuss what “discovered” means: finding the gold, understanding it, or claiming it.'
  ] },
  { q: 'The tourism page says “accounts differ” about Posthole Tom. Why might a town like to keep a legend like this? What question would you ask to test it?', a: [
    'Towns often keep stories that are memorable and help visitors. A legend is not proof. Students could ask who first told it, when it first appeared in print, and whether McEvoy appears in a warden’s record or in the Heritage Register entries.',
    'Compare it with the Heritage Register account of late 1883 and 1885, which names no Tom.'
  ] },
  { q: 'CQ Diggings says there is no record of the 36-kilogram nugget from the time. What kinds of record would count as good evidence of a nugget?', a: [
    'A warden’s gold return, a bank or buyer’s record, a newspaper report of the time, or a photograph or a weight record from a mint. The story gives a weight, a name and a place, but no source joins all three.',
    'Students could discuss why big-nugget stories are popular, and why the same story can be repeated for decades.'
  ] }
);

// ---------- where sources disagree, care ----------
Array.prototype.push.apply(I.disagree, [
  'Calliope: no source read says who found the gold. The claim that Calliope was Queensland’s first proclaimed goldfield, in 1863, is repeated by a travel article, a property developer, Wikipedia (without a reference) and Wikipedia’s gold rush article. It was not verified, because the Queensland Government Gazette was not available. CQ Diggings says only that Calliope was proclaimed in 1861 to 1863.',
  'Calliope: Queensland Places says 400 miners, four stores and three hotels by 1864. Other sources say the population was 800 by 1864. The numbers may count different things. The 1881 census counted 59 people.',
  'Calliope: a large nugget found in May 1867 is given as 16 pounds by the 1909 list and six pounds by CQ Diggings, which quotes a Gladstone correspondent. Neither report was opened in the original newspaper.',
  'Calliope: no source read describes diggings called Cania, Upper Calliope or Boyne. The Milton run (Norton, from 1871) and Raglan (from 1867) are described by CQ Diggings only. A gold commissioner and police at Calliope are not named in any source read.',
  'Calliope and Aboriginal people: no account was found of what the diggings meant for Aboriginal people at Calliope. The names of the Traditional Owners are spelled in different ways: Gooreng Gooreng, Gureng Gureng, Goreng Goreng, Bailai, Byellee and Byele.',
  'Peak Downs: Wikipedia’s Clermont article says the goldfield was declared in 1862. Its article on the gold rushes says August 1863. The Gazette was not available. The figure of up to 4,000 Chinese people in the 1880s comes from one Wikipedia article.',
  'Crocodile Creek: the year of the find is 1865 or 1866. The numbers of people range from 800 and 1,000 in August 1866 to 3,000 to 5,000 in 1867. The main account, by Bird, was written about 40 years later. The traditional owners are not named in any source read.',
  'Cape River: the year of the find is given as 1865, 1866 or 1867. The proclamation date of 4 September 1867 comes from Wikipedia only. Wikipedia’s Pentland article says over 20,000 men worked the field by 1870. That is much higher than the 2,500 miners that About the North gives for 1868, and Wikipedia’s gold rush article calls the rush small. Wikipedia also says the Cape River rush brought Chinese diggers to Queensland “for the first time”. The Heritage Register says to north Queensland, and the 1909 list records Chinese people in Queensland much earlier.',
  'Ravenswood: the find is dated late 1868 by the Heritage Register and 1869 by Queensland Places. The discoverers are given as Jessop, Buchanan and party, or W. Crane and party. The goldfield’s population is given as about 2,000 in November 1870 and 900 in 1871. Gold totals differ: 154,094 ounces to 1877 or 214,652 ounces for 1868 to 1878. No source read names the Traditional Owners of Ravenswood.',
  'Gilbert and Etheridge: Daintree’s report on gold is dated 1867 by Buhrich and others and 1868 by Queensland Places. A raid on a Chinese camp on 22 November and an attack on the township on 21 November 1873 may be the same event or two. The 1909 list says Chinese people were “excluded” from the 1869 rush, while another source says more than half of the people on the Gilbert were Chinese in 1870. The AIATSIS history of the Gilbert goldfield was not read.',
  'Hodgkinson: Wikipedia’s gold rush article dates the Hodgkinson from 1875. Kirkman and Queensland Places date the gold to 1876 and Mulligan’s river visit to 1874. Kirkman’s source for the diary date is the Cooktown Herald of 18 March 1876. The Aboriginal history of the Hodgkinson comes from the South Australian Museum, a native title corporation, a tourism site and a hobby blog, mostly seen in search summaries. It should be checked with Kuku Djungan people.',
  'Mount Morgan: a local volunteer association says William Mackinlay found the gold about 1870 and that the Morgans did not discover it. The Morgans’ account and Queensland Places say the Morgans found it in 1882. Sources differ on whether the Morgans were looking for copper, silver or gold. Total output is 225,000 kg of gold (local association) or about 262 tonnes (Wikipedia). Mount Morgan is Gaangalu (Gangulu) country according to the Queensland Government, and Darumbal Country reaches the foot of the range according to Darumbal Enterprises.',
  'Croydon: gold is dated 1883, 1885 or 1886 by different sources, and the finders are Richard and Walter Alldridge, or James and Walter Aldridge. The peak population is 7,000 (1887), over 8,000 (1890) or 25,000. The Queensland Heritage Register says Croydon had the third highest population in north Queensland in 1897. The State Library of Queensland says it was the fourth largest town in Queensland about 1900.',
  'The map: positions are approximate and come from published coordinates. The map shows where each field was. It does not show the boundaries of any people’s Country. Where a source names the Traditional Owners, the map says whose name it is.',
  'Several pages were seen only in search summaries and not opened in full: Calliope Chase, Gladstone Regional Council, the About the North pages, the Chinese in North Australia page, the South Australian Museum and Nguddaboolgan pages, Qualla, the Visit Croydon page, Gulf Savannah Development, the Tagalaka page and the Queensland Government Mount Morgan page. Each source note says so.',
  'The Queensland Government Gazette, the Queensland State Archives originals and the Trove articles cited by CQ Diggings were not available, so some dates rest on later summaries.'
]);
Array.prototype.push.apply(I.care, [
  'For the added fields, the author wants to ask the Bailai and Gooreng Gooreng peoples (Calliope), the Gangulu (Peak Downs and Mount Morgan), the Gudjal (Cape River), the Ewamian (Gilbert and Etheridge), the Kuku Djungan (Hodgkinson) and the Tagalaka (Croydon) to review what this resource says. Traditional Owners of Crocodile Creek and Ravenswood have not yet been identified from the sources read, and the author will ask local councils and native title bodies.',
  'The Aboriginal and Chinese people named or described in the records of the 1860s to 1880s are shown through European eyes. Some records use insulting words. They are not quoted here. One gully name at Calliope and some of the page headings quoted in the sources use such words and are not repeated.'
]);
I.sourcesIntro += ' The goldfields added later (Calliope, Peak Downs, Crocodile Creek, Cape River, Ravenswood, the Gilbert and Etheridge, the Hodgkinson, Mount Morgan and Croydon) draw on newspapers read on Trove, Queensland Places, the Queensland Heritage Register, scholarly articles and some local and hobby sources. Each source note says what the source is and how it was read.';

// ---------- teacher discussion questions (removed from the student build) ----------
Array.prototype.push.apply(I.discuss, [
  { q: 'In July 1862 the Courier’s Gladstone correspondent wrote that he was anxious not to raise false hopes about the Calliope diggings. In 1861 the Peak Downs report warned that the field might turn out like Canoona. Why were newspapers careful, and what had happened at Canoona?', a: ['Canoona in 1858 drew about 15,000 people to a field that could not support them, and most were sent home at government expense. Writers in 1861 and 1862 remembered this and did not want a repeat.', 'Students can compare how Calliope and Peak Downs grew. Both were small. Peak Downs had about 40 miners in December 1862 and about 200 in July 1863. Calliope had a small number in July 1862 and 400 miners by 1864 according to Queensland Places.'] },
  { q: 'Many websites say Calliope was Queensland’s first proclaimed goldfield, in 1863. How would you check it? Why does this resource say it is not verified?', a: ['Look for the Queensland Government Gazette of 1862 and 1863 and the Colonial Secretary’s records. Look at who makes the claim and whether they give a reference. The travel article and property developer give none. The Wikipedia sentence has no reference. CQ Diggings gives a range, 1861 to 1863.', 'Compare with Peak Downs, which Wikipedia says was declared in 1862 or August 1863, and with Canoona in 1858, when an official wrote to the Colonial Secretary. A claim to be “first” needs evidence of every other field.'] },
  { q: 'Queensland Places says 400 miners at Calliope in 1864. Other sources say 800 people. Can both be right? What would you ask?', a: ['They may count different groups. Miners are one group. A population includes women, children, storekeepers and others. Ask who counted, when and how. None of the sources says. By 1881 the census counted only 59 people in the town, which shows that the numbers fell sharply.'] },
  { q: 'A large nugget was found at Calliope in May 1867. The Courier’s 1909 list says 16 pounds, and CQ Diggings says six pounds. Which would you trust more, and what would you do next?', a: ['The 1909 list was written 42 years later. CQ Diggings summarises a Gladstone correspondent who wrote at the time, but it is a hobby site. Neither is certain. Open the Trove article for May 1867 and compare. A transcription or typing error is possible, because 16 and 6 are close.', 'This links to the discussion of sources for Gympie and Charters Towers.'] },
  { q: 'The Gooreng Gooreng and Bailai peoples are named for Calliope, but their names are spelled in many ways. What should a writer do when a name has several spellings? Why does this resource give each name as its source spells it?', a: ['Use the spelling the people use for themselves, if you know it, and say where you got the name. Records written by Europeans often spelled names by ear. Students can compare Gooreng Gooreng, Gureng Gureng and Goreng Goreng.', 'This resource has not been reviewed by the Traditional Owners. Asking them is the right next step.'] },
  { q: 'At Crocodile Creek in January 1867 European diggers drove Chinese miners from the field. Why did it happen, who protected the Chinese miners, and what happened in court? Why did nothing like it happen on the Palmer, according to Kirkman?', a: ['The immediate cause was a dispute over claims that were not properly pegged. Bird says Jardine protected the Chinese miners, which led to anger among Europeans who were not finding gold. Four people were sentenced to nine months and the judge said they had destroyed property and expelled harmless people.', 'Kirkman says the large riots of Lambing Flat in 1860 and 1861 did not happen on the Palmer. Students can discuss reasons, such as the number of Chinese people and the role of the wardens, but should say where each reason comes from.'] },
  { q: 'Wikipedia says the Cape River rush brought Chinese diggers to Queensland “for the first time”. The Heritage Register says the first Chinese people came to north Queensland in 1867. The 1909 list records Chinese shepherds in the 1840s. What is the best way to write this sentence?', a: ['“The first Chinese people to reach north Queensland arrived during the Cape River rush in 1867.” That follows the Heritage Register. Chinese people were in southern Queensland much earlier.', 'Students should notice that a small change of words (“Queensland” and “north Queensland”) changes whether the claim is true.'] },
  { q: 'Three sources give different people credit for finding gold at Ravenswood, and the Courier says rewards of £400 and £100 were paid. Why did credit matter? How is this like Gympie and the story of Nash and Denman?', a: ['Governments paid rewards for new goldfields. Whoever the government decided was the finder received money and fame. At Gympie James Nash claimed the £3,000 reward, and Denman said he had told him where to dig.', 'Students can discuss how to write about “who found it” when the sources disagree, for example “credited with”.'] },
  { q: 'Gilberton: read the 1873 petition from the residents and the account by Buhrich and others. How do they differ? What does each want the reader to think?', a: ['The petition is from European residents who ask the Colonial Secretary for police. It describes Aboriginal people in insulting terms, which this resource does not copy. Buhrich and others use records and describe the Ewamian people’s resistance and the Native Mounted Police response, and note the diggers’ burial customs may have seemed shocking to the Ewamian people.', 'Students can discuss who wrote each, when, and for whom. The petition was written to get help. The article was written to explain the frontier from both sides.'] },
  { q: 'The Hodgkinson produced less than one-sixth of the Palmer’s gold. Why does Kirkman still say it mattered?', a: ['She says it helped Cairns and Port Douglas grow as ports and led to settlement of the Cairns hinterland. A small goldfield can still lead to a port, a road and a railway.', 'Link this to the line in the overview: each rush brought new towns, roads, ports and railways, and each one took more Country from its Traditional Owners. Ask what the Kuku Djungan sources say was lost.'] },
  { q: 'Who discovered Mount Morgan? Use the Queensland Places account, the local association’s account and the Morgans’ account. What does “discover” mean?', a: ['Queensland Places says the Morgans inspected the district in 1882 and took ore specimens. The local association says Mackinlay found the gold about 1870 and the Morgans learned of it from Sandy Gordon. The Morgans say Edwin Morgan found it by chance.', 'Students can discuss several meanings: first to see gold, first to understand it, first to register a claim. A claim needed a proclaimed goldfield. The association says the mountain was not in one until 1883.'] },
  { q: 'Croydon’s peak population is given as 7,000, over 8,000 and 25,000. Which figure would you use in an essay, and how would you write it?', a: ['The 7,000 figure for 1887 is given by the State Library of Queensland and the Heritage Register. The 8,000 figure is for 1890 on a tourism page. The 25,000 figure is much higher than the others and is not explained. A careful sentence is: “About 7,000 people lived in the Croydon district by 1887, according to the Queensland Heritage Register”, with a note that other figures exist.'] },
  { q: 'Look at the map from the 1850s to the 1880s. Describe where the new fields appeared in each decade. What pattern do you see?', a: ['The 1850s have one field, Canoona. In the 1860s fields appear near the central coast (Calliope, Crocodile Creek), inland (Peak Downs), the south (Gympie) and then in the north (Cape River, Ravenswood, Gilberton). In the 1870s fields appear further north and west (Etheridge, Charters Towers, the Palmer River, the Hodgkinson). The 1880s have Mount Morgan in the centre and Croydon in the far north-west.', 'Over the period, the fields moved north and inland. Students can use this to discuss why ports and railways followed in the north.'] },
  { q: 'The overview says: “Each rush brought new towns, roads, ports and railways, and each one took more Country from its Traditional Owners.” Choose one field. Name one town, road, port or railway that followed it, using the Overview or Places page, and say whose Country it was on.', a: ['Examples: Cairns and Port Douglas and the Douglas Track after the Hodgkinson (Kuku Djungan Country); the Normanton to Croydon railway of 1891 (Tagalaka Country); the Mount Morgan railway of 1898 (Gaangalu Country); the Calliope to Many Peaks railway of 1910 (Bailai and Gooreng Gooreng Country).', 'Good answers give the source for each fact and say where the sources are silent about what was lost.'] },
  { q: 'The map shows markers, not the boundaries of Country. Why? What would you need to do before drawing those boundaries?', a: ['Boundaries belong to the Traditional Owners to describe. Records written by Europeans are not reliable for them, and several groups may share or border an area. For example, the sources read name Gaangalu Country at Mount Morgan but say Darumbal Country reaches the foot of the range.', 'To draw them, a class would need to ask the Traditional Owner organisations, and use native title determinations only with their permission.'] }
]);

// ---------- interactive map data (see app.js, viewMap) ----------
I.sources.naturalEarth = { short: 'Natural Earth, state outline', t: 'Natural Earth. “Admin 1 – States, Provinces” (1:10m), Queensland outline.', u: 'https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-1-states-provinces/', note: 'Natural Earth data is in the public domain. The outline was simplified for this map. The map is not a survey and the positions of the fields are approximate.' };
I.map = {
  title: 'Map of the goldfields',
  intro: [
    'This map shows the goldfields in this resource as they appeared, decade by decade, from the 1850s to the 1880s. Use the buttons or the slider to move through the decades. A list of the same fields is under the map.',
    'Each rush brought new towns, roads, ports and railways, and each one took more Country from its Traditional Owners.',
    'The map shows where each field was. It does not show the boundaries of anyone’s Country. For each field, the list says whose Country it is, and which source says so. Several groups can share or border an area. Where a source does not name the Traditional Owners, the map says that.'
  ],
  decades: [[1850, 'The 1850s'], [1860, 'The 1860s'], [1870, 'The 1870s'], [1880, 'The 1880s']],
  credit: 'Outline: Natural Earth (public domain), simplified. Positions of fields are approximate.',
  src: ['naturalEarth'],
  outline: [[[138.0,-16.54],[138.29,-16.75],[138.66,-16.78],[139.01,-16.9],[139.16,-17.03],[139.15,-17.17],[139.24,-17.32],[139.44,-17.38],[140.0,-17.71],[140.51,-17.64],[140.85,-17.44],[140.95,-17.02],[141.29,-16.5],[141.43,-16.06],[141.38,-15.93],[141.44,-15.65],[141.66,-15.09],[141.52,-14.48],[141.6,-14.11],[141.47,-13.87],[141.53,-13.57],[141.69,-13.25],[141.58,-12.99],[141.75,-12.82],[141.81,-12.67],[141.94,-12.91],[141.91,-12.76],[142.01,-12.71],[141.82,-12.65],[141.97,-12.59],[141.8,-12.58],[141.69,-12.5],[141.74,-12.45],[141.66,-12.45],[141.7,-12.54],[141.59,-12.54],[141.72,-12.23],[141.81,-12.24],[141.75,-12.21],[141.83,-12.01],[141.91,-11.95],[141.92,-12.11],[142.03,-12.04],[141.95,-11.9],[142.13,-11.34],[142.15,-10.95],[142.32,-10.9],[142.45,-10.71],[142.55,-10.69],[142.62,-10.75],[142.5,-10.95],[142.59,-10.86],[142.67,-11.0],[142.74,-10.98],[142.87,-11.38],[142.82,-11.48],[142.86,-11.84],[142.99,-11.93],[143.1,-11.9],[143.25,-11.97],[143.09,-12.15],[143.08,-12.33],[143.25,-12.39],[143.29,-12.53],[143.43,-12.61],[143.36,-12.88],[143.54,-12.83],[143.5,-13.08],[143.6,-13.52],[143.53,-13.75],[143.69,-14.01],[143.78,-14.4],[143.94,-14.51],[144.16,-14.37],[144.2,-14.25],[144.3,-14.31],[144.49,-14.16],[144.58,-14.26],[144.58,-14.36],[144.63,-14.34],[144.62,-14.47],[144.68,-14.56],[144.9,-14.61],[145.03,-14.81],[145.22,-14.83],[145.28,-14.95],[145.35,-14.94],[145.24,-15.17],[145.27,-15.25],[145.35,-15.25],[145.24,-15.43],[145.37,-15.75],[145.36,-15.9],[145.46,-16.06],[145.4,-16.44],[145.72,-16.8],[145.77,-16.99],[145.84,-16.88],[145.96,-16.87],[145.88,-17.06],[146.15,-17.63],[146.01,-18.24],[146.18,-18.38],[146.21,-18.51],[146.34,-18.53],[146.28,-18.87],[146.46,-19.07],[146.75,-19.17],[146.91,-19.3],[147.01,-19.25],[147.02,-19.18],[147.13,-19.41],[147.42,-19.41],[147.42,-19.31],[147.56,-19.54],[147.57,-19.71],[147.68,-19.83],[147.79,-19.84],[147.75,-19.69],[147.82,-19.71],[147.93,-19.9],[148.07,-19.88],[148.28,-19.97],[148.26,-20.08],[148.4,-20.2],[148.46,-20.19],[148.44,-20.06],[148.56,-20.05],[148.61,-20.21],[148.65,-20.16],[148.68,-20.27],[148.78,-20.24],[148.94,-20.53],[148.81,-20.43],[148.7,-20.44],[148.72,-20.5],[148.66,-20.57],[148.84,-20.78],[148.83,-20.89],[148.88,-20.84],[149.06,-20.9],[149.03,-20.98],[149.15,-21.0],[149.23,-21.09],[149.2,-21.22],[149.29,-21.28],[149.29,-21.4],[149.34,-21.42],[149.29,-21.51],[149.4,-21.5],[149.43,-21.58],[149.49,-21.54],[149.44,-21.79],[149.59,-22.28],[149.7,-22.34],[149.66,-22.49],[149.81,-22.38],[150.05,-22.65],[149.92,-22.3],[150.05,-22.14],[150.19,-22.38],[150.61,-22.61],[150.53,-22.43],[150.57,-22.32],[150.76,-22.46],[150.67,-22.52],[150.73,-22.63],[150.77,-22.53],[150.83,-22.7],[150.79,-22.93],[150.74,-22.93],[150.76,-23.16],[150.84,-23.25],[150.79,-23.31],[150.88,-23.49],[150.81,-23.51],[151.01,-23.57],[151.19,-23.8],[151.54,-24.02],[151.55,-24.09],[151.58,-24.04],[151.69,-24.1],[151.64,-23.98],[151.72,-24.06],[151.78,-24.02],[152.12,-24.59],[152.47,-24.81],[152.51,-25.0],[152.64,-25.16],[152.57,-25.18],[152.91,-25.29],[152.93,-25.42],[152.87,-25.48],[152.96,-25.44],[152.97,-25.5],[152.88,-25.67],[153.02,-25.83],[153.02,-25.97],[153.06,-25.82],[153.12,-25.93],[153.21,-25.93],[153.07,-26.32],[153.14,-26.39],[153.11,-26.65],[153.21,-27.08],[153.08,-27.11],[153.04,-27.19],[153.12,-27.2],[153.06,-27.31],[153.17,-27.36],[153.4,-27.81],[153.45,-27.79],[153.4,-27.95],[153.51,-28.15],[153.35,-28.25],[153.19,-28.26],[153.11,-28.35],[152.75,-28.36],[152.62,-28.29],[152.56,-28.33],[152.49,-28.26],[152.39,-28.37],[151.96,-28.54],[152.07,-28.7],[152.01,-28.9],[151.86,-28.92],[151.82,-28.97],[151.73,-28.89],[151.56,-28.95],[151.38,-29.17],[151.29,-28.92],[151.06,-28.83],[151.05,-28.73],[150.79,-28.64],[150.45,-28.65],[150.3,-28.53],[149.7,-28.63],[149.48,-28.58],[149.42,-28.68],[149.09,-28.85],[148.97,-29.0],[141.0,-29.0],[141.0,-26.0],[138.0,-26.0],[138.0,-16.54]],[[153.37,-24.99],[153.06,-25.8],[152.95,-25.55],[153.07,-25.33],[153.02,-25.2],[153.24,-24.99],[153.14,-24.82],[153.28,-24.69],[153.28,-24.88],[153.37,-24.99]],[[139.73,-16.44],[139.71,-16.53],[139.49,-16.52],[139.52,-16.56],[139.47,-16.56],[139.44,-16.66],[139.3,-16.72],[139.18,-16.66],[139.14,-16.76],[139.16,-16.62],[139.29,-16.47],[139.58,-16.4],[139.73,-16.44]]],
  fields: [
 {
  "id": "canoona",
  "name": "Canoona",
  "year": "1858",
  "decade": 1850,
  "lon": 150.15,
  "lat": -23.02,
  "note": "Gold found near Rockhampton. About 15,000 people came and most went home, because the field was too small for that many.",
  "country": "Darumbal Country, according to Darumbal Enterprises.",
  "src": [
   "qpCanoona",
   "darumbal"
  ]
 },
 {
  "id": "peakdowns",
  "name": "Peak Downs and Clermont",
  "year": "1861",
  "decade": 1860,
  "lon": 147.64,
  "lat": -22.82,
  "note": "Gold reported in November 1861. The Peak Downs field stayed small and the dates of its proclamation differ (1862 or 1863).",
  "country": "Gangulu Country, according to Wikipedia’s Clermont article.",
  "src": [
   "trCour1861",
   "wikiClermont"
  ]
 },
 {
  "id": "calliope",
  "name": "Calliope",
  "year": "1862",
  "decade": 1860,
  "lon": 151.2,
  "lat": -24.01,
  "note": "Gold found near Gladstone. The claim that it was the first proclaimed goldfield, in 1863, is not verified.",
  "country": "Bailai (Byellee) and Gooreng Gooreng Country, according to Calliope Chase.",
  "src": [
   "qpCalliope",
   "calChase",
   "glaCouncil"
  ]
 },
 {
  "id": "crocodile",
  "name": "Crocodile Creek",
  "year": "1866",
  "decade": 1860,
  "lon": 150.47,
  "lat": -23.58,
  "note": "A rush near Rockhampton from 1866. In January 1867 Chinese miners were driven from the field.",
  "country": "Not named in the sources read.",
  "src": [
   "bird1904",
   "wikiBoulder"
  ]
 },
 {
  "id": "caperiver",
  "name": "Cape River",
  "year": "1867",
  "decade": 1860,
  "lon": 145.37,
  "lat": -20.45,
  "note": "An early rush in north Queensland. The year of the find is given as 1865, 1866 or 1867.",
  "country": "Gudjal Country, according to About the North.",
  "src": [
   "aboutPentland",
   "wikiPentland"
  ]
 },
 {
  "id": "gympie",
  "name": "Gympie",
  "year": "1867",
  "decade": 1860,
  "lon": 152.67,
  "lat": -26.19,
  "note": "James Nash’s find in October 1867 ended a recession. About 16,000 diggers arrived.",
  "country": "Kabi Kabi (Gubbi Gubbi) Country, according to the Queensland State Archives and the Gympie Family History Society.",
  "src": [
   "qsaGympie",
   "gfhsAb"
  ]
 },
 {
  "id": "ravenswood",
  "name": "Ravenswood",
  "year": "1868",
  "decade": 1860,
  "lon": 146.89,
  "lat": -20.1,
  "note": "Alluvial gold in 1868 or 1869, then reefs. The sources differ on who found it.",
  "country": "Not confirmed in the sources read.",
  "src": [
   "qhrRav",
   "qpRav"
  ]
 },
 {
  "id": "gilberton",
  "name": "Gilberton",
  "year": "1869",
  "decade": 1860,
  "lon": 143.65,
  "lat": -19.27,
  "note": "A rush to the Gilbert diggings in May 1869. The township was left after attacks in November 1873.",
  "country": "Ewamian (Agwamin) Country, according to Buhrich and others. Tagalaka and Kurtjar Country also lie along the Gilbert River, according to About the North.",
  "src": [
   "buhrich",
   "aboutGilbert"
  ]
 },
 {
  "id": "etheridge",
  "name": "Etheridge (Georgetown)",
  "year": "1870",
  "decade": 1870,
  "lon": 143.55,
  "lat": -18.29,
  "note": "A major reef was found in 1870. The town was renamed Georgetown by 1872.",
  "country": "Ewamian (Agwamin) Country, according to Queensland Places and Wikipedia.",
  "src": [
   "qpEth",
   "wikiGilb"
  ]
 },
 {
  "id": "charterstowers",
  "name": "Charters Towers",
  "year": "1871",
  "decade": 1870,
  "lon": 146.26,
  "lat": -20.08,
  "note": "Gold found in December 1871. It became one of the largest goldfields in Queensland.",
  "country": "Gudjal Country and the Country of others, according to the Charters Towers Regional Council.",
  "src": [
   "ctc"
  ]
 },
 {
  "id": "palmer",
  "name": "Palmer River",
  "year": "1873",
  "decade": 1870,
  "lon": 144.29,
  "lat": -16.05,
  "note": "Payable gold was found in 1873. Thousands of Chinese miners came to the field.",
  "country": "The Traditional Owners are not named in the sources read.",
  "src": [
   "kirk84",
   "parks"
  ]
 },
 {
  "id": "hodgkinson",
  "name": "The Hodgkinson",
  "year": "1876",
  "decade": 1870,
  "lon": 145.01,
  "lat": -16.94,
  "note": "Gold was found in 1876 (some sources say 1875). The field was small, but it helped Cairns and Port Douglas grow.",
  "country": "Kuku Djungan Country, according to the South Australian Museum and the Nguddaboolgan Native Title Aboriginal Corporation.",
  "src": [
   "saKuku",
   "nntac",
   "kirk82"
  ]
 },
 {
  "id": "mountmorgan",
  "name": "Mount Morgan",
  "year": "1882",
  "decade": 1880,
  "lon": 150.39,
  "lat": -23.64,
  "note": "The Morgan brothers registered a claim on 22 July 1882. A local association argues that gold was found earlier.",
  "country": "Gaangalu (Gangulu) Country, according to the Queensland Government. Darumbal Enterprises says Darumbal Country reaches the foot of the range.",
  "src": [
   "qldMM",
   "mmDisc",
   "darumbal"
  ]
 },
 {
  "id": "croydon",
  "name": "Croydon",
  "year": "1885",
  "decade": 1880,
  "lon": 142.24,
  "lat": -18.21,
  "note": "Gold was reported in October 1885 and the goldfield was proclaimed on 18 January 1886.",
  "country": "Tagalaka Country, according to Gulf Savannah Development and the Tagalaka Aboriginal Corporation.",
  "src": [
   "gulfSav",
   "tagalaka",
   "qhrCroy"
  ]
 }
]
};
})();
