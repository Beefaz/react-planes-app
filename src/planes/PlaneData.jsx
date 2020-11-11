const importAll = r => r.keys().map(r);
/*
Example item to add:
    {
        NAME: '',
        TOPIMAGE: importAll(require.context('../planes//TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes//OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Aircraft_information: '',
            History: '',
        },
    },

Sections_generated_dynamically: General_information, _unnamed, _video, _table, _list
    {
        CONTENT:{
                Object_name_defines_what_will_be_rendered: 'Section will be created, named same as object name,\n'+
                    'all newlines from here will be added as paragraphs',
                General_information: 'Will add a div aside of main image, for better layout styling'
                For_example_unnamed: '_unnamed content will be shown as paragraphs in new section,\n'+
                    'but no section name from object name will be rendered',
                Another_ex_video: 'write your (youtube) url here, it will add embedded video section',
                Another_ex_list: 'Every new line will be rendered as list item into DOM.\n'+
                    'Section named "Another_ex"',
                Another_table_ex_unnamed: {
                    tHead: ['will', 'add', 'table', 'header'],
                    anything_else: ['will', 'add', 'simple', 'row'],
                    anything_else2: ['_unnamed','will', 'have', 'no name']
                },
        }
    }
 */
export const ITEMS = [
        {
            NAME: 'Vickers Supermarine Seafire III',
            TOPIMAGE: importAll(require.context('../planes/Vickers Supermarine Seafire III/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Vickers Supermarine Seafire III/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Airframe: A highly original aircraft with only 42,25 hours\n' +
                    'Engine: Rolls Royce Merlin 45 with 47,25 Hours & Dowty Rotol four blade propeller. Inspected and passed on 25/06/2019',
                History: 'Built under contract by Westland Aircraft Ltd at Yeovil, Somerset as a Seaﬁre LF.IIIC serial PP972 was ready for collection on the 27th September 1944. It was then issued to the Royal Naval Deposit Account (RNDA) on the 28th September awaiting collection for the Fleet Air Arm (FAA).\n' +
                    'PP972 is then known to have served with 809 (Naval) Squadron from November 1944 who at the time were converting from the Seaﬁre L.II. 809 Squadron were destined too see service in the Far East and the squadron embarked onto the aircraft carrier HMS Stalker at Plymouth, Devon on the 29th November bound for Gibraltar and then Egypt, the Seaﬁres then ﬂew off onto HMS Attacker on leaving Plymouth as Stalker was due for a reﬁ t at Gibraltar. The carrier arrived at Dekhelia, Egypt and the Seaﬁres disembarked, later they would be reunited with Stalker before setting sail to the Far East in March 1945 as part of the 21st Aircraft Carrier Squadron ﬂeet.\n' +
                    'The ﬂeet arrived at Trincomalee, Ceylon on the 20th March as part of the East Indies Fleet, 809 Squadron becoming part of the 4th Fighter Wing based at RNAS Katukurunda, Ceylon, PP972 acquiring the squadron code ‘D6-M’. Here they spent the following month gaining operational experience of strike missions over the jungle terrain before re-embarking on the carrier during April for sea work and deck landing refresher practice before setting a passage to Akyab, Burma the assembly point for Operation Dracula. They left Akyab on the 30th April with assault convoys bound for Rangoon, Burma.\n' +
                    'Operation Dracula, for which the squadron was to provide support for landings which began on the May 2nd was somewhat of an anti-climax as the Japanese had already evacuated from the area but the Seaﬁres were still operational however carrying out air cover and support missions as well as bombing sorties against ﬂak positions and coastal defence batteries near Thakutpin, Burma and also performing shipping patrols.\n' +
                    'Other Operations the squadron were involved with included: Bishop, these were air attacks on Japanese coastal bases. \n' +
                    'Balsam, June 1945. The 3rd and last of a series of photo reconnaissance missions over Malaya. On the 20th June the Seaﬁres were engaged on offensive sweeps of Japanese held airﬁelds at Lhokseumawe, Midan and Bindjai. \n' +
                    'Collie, July 1945. Providing air cover for mine sweeping operations in the Nicobar area of the Malayan coast. \n' +
                    'Zipper, August 1945. A deployment to cover the landings in Southern Malaya. \n' +
                    'Jurist, September 1945. Providing air cover during the landings of Port Swettenham, Malaya and support co-operation on entering Singapore harbour for support of the re-occupation. \n' +
                    'With its work done in the Far East orders to return home were received and from September 1945 the carrier set sail arriving in the Irish Sea on the 21st October, 809 Squadrons new temporary home was to be at Royal Naval Air Station (RNAS) Nutts Corner, Northern Ireland until squadron disbandment during January 1946.\n' +
                    'PP972 was then issued to 767 (Naval) Squadron in May of 1946 as part of No.1 Operational Flying School at RNAS Easthaven, Tayside before relocating to RNAS Lossiemouth, Grampian, Scotland later in the month. Milltown, Morayshire was used by the squadron as a satellite landing airﬁeld and PP972 gained the code ‘MV’ for Milltown and the fuselage code ‘120’. During its time here it suffered a burst tyre and cropped propeller when landing on HMS Thesus on the 24th October the pilot Lt J. C. S. Wright suffering no injuries.\n' +
                    'The Seaﬁre is then believed to have entered a period storage at RNAS Anthorn, Cumberland and then later sent to RNAS Lee-on-Solent, Hampshire to be serviced and overhauled for sale overseas. \n' +
                    'A new life was to follow with the French Navy (L’ Aéronautique Navale) becoming one of sixty ﬁve Seaﬁres delivered during late 1948, PP972 was test ﬂ own by pilot Ofﬁcer Equipages 1st Class Debrun on the 27th December 1948 but suffered engine trouble, with a new engine ﬁtted and several test ﬂights later it was eventually ferried out and delivered to France in March 1949. It was Issued to No.1 Flottille at Hyères and coded ‘1.F-9’. On the 1st August 1948 No.1 Flottille was split into two forming the No.12 Flottille and PP972 was re-allocated to this unit at Hyères and was re-coded as ‘12.F-2’.\n' +
                    'By July 1949 the Seaﬁres were beginning to show their age and were destined to be retired but PP972 was one of thirty two kept in service for use by Groupement de Chasse Embarquée Escadrille de Servitude No.54 at Hyères where it would almost certainly have carried out deck landing practice on board the carrier Arromanches the one time former HMS Colossus.\n' +
                    'By November 1950 PP972 was one of eleven Seaﬁres left ﬂying and was ﬁnally retired and placed in store at Hyères and struck off charge on the 11th December 1950 and it was classiﬁed as withdrawn from use by 1951. It appears to have been placed at Gâvres gunnery range but was later employed for technical training before it entered storage and was placed in a compound at Aeronavale Base 83 (Gâvres) near Lorient, Brittany. \n' +
                    'During 1965 it was discovered by Jean Frélaut and acquired by him in January 1970 and he moved it to Vannes-Meucon and then later to Plescop by the 17th September 1977. Jean decided that a restoration to static display condition could be undertaken and it was restored into its French Naval colour scheme from its No.1 Flottille days. After restoration it was exhibited at the Musee de la Résistance at St.Marcel near Malestroit, Brittany from 1982 but had returned to VannesMeucon by July 1984. \n' +
                    'Jean decided to part with the Seaﬁre and it was acquired by Warbirds of Great Britain (WofGB) at Biggin Hill, Kent in 1988 and registered as G-BUAR on the 21st January 1992 and then relocated to their Bournemouth, Dorset base. The Seaﬁre was moved around various workshops eventually ending up with Air Leasing Ltd at Bentwaters, Suffolk where after restoration it ﬂew again on the 15th June 2015 with Richard Grace at the controls in a scheme depicting a Seaﬁre of 880 (Naval) Squadron (FAA) of HMS Implacable.',
            },
        },
        {
            NAME: 'Vickers Supermarine Spitfire LF Vb BL688',
            TOPIMAGE: importAll(require.context('../planes/Vickers Supermarine Spitfire LF Vb BL688/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Vickers Supermarine Spitfire LF Vb BL688/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Serial No: BL688\n' +
                    'UK CAA Registration: G-CJWO\n' +
                    'Airframe: A Zero Timed - Under Restoration\n' +
                    'Engine: Rolls Royce Merlin 35 with Zero Hours & Dowty Rotol three blade propeller',
                History: 'Vickers Supermarine Spitfire LF Vb BL688 - pictured above with the CO of 501 Squadron, Capt Bernard Fuchs, at Hawkinge in the summer of 1943. \n' +
                    'An incredible investment opportunity to acquire probably the longest documented combat history of a WW2 Spitfire in the world today ! BL688 was delivered into service on the 25th of January 1942 and served until 29th of May 1945. It served with five RAF Fighter Squadrons, as well as the USAAF 335 FG & US Navy on D-Day.\n' +
                    'So far, 47 Allied pilots have been identified from Australia, Canada, Caribbean, Free French, India, Poland , UK , New Zealand and USA. Some of the men served only a short period and met their fate in combat against the enemy. Others flew BL688 with distinction and survived the war and went onto achieve great things.',
            },
        },
        {
            NAME: 'P-51 Mustang N51TK',
            TOPIMAGE: importAll(require.context('../planes/P-51 Mustang N51TK/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/P-51 Mustang N51TK/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'North American P-51 Mustang 44-63350\n' +
                    'Registration: N51TK\n' +
                    'Price - 1.8 Million\n' +
                    'Airframe: Fuselage Zero Timed rebuild & wings by Odegaard Wings, a second seat has been fitted behind the pilot ( Not dual control)\n' +
                    'Engine: Packard Merlin V-1650-7 serial no 335356 Zero timed and fitted 21/08/2018\n' +
                    'Propeller: Hamilton Standard 24D/50 overhauled and zero timed. Fitted 20/08/2018\n' +
                    'Avionics: Garmin GTX 327 Transponder, Garmin GNS 430 GPS/Nav/Comm. Stock instruments and gauges\n' +
                    'The aircraft was issued a FAA airworthiness certificate on 21/08/2018',
                History: 'WWII Vet: 15th AF & Kentucky NG - Sold surplus\n' +
                    '1963: N2870D, Clearance Head, Eglin IL\n' +
                    '1966: Mark Foutch, Champaign IL\n' +
                    '1969: Sep 01, ground collision, hit by 44-73877\n' +
                    '1984: N51TK, Tom Kelley / John Dilley / Fort Wayne Air Services - restoration\n' +
                    '1989: Apr 11, crashed on takeoff - overrun, Fort Wayne IN\n' +
                    '1989: N151RR (ntu), International Aircraft Ltd., Hockessin DE\n' +
                    '1993: N51TK, Charles Greenhill, Mettawa IL\n' +
                    '1994: Dec 29, crashed-forced landing, Round Lake IL & in 1996: rebuilt - "LouIV"\n' +
                    '2006: N51TK, John McKittrick - California.\n' +
                    '2007: July 15 – Fatal accident and badly damaged\n' +
                    '2008: Sold \n' +
                    '2010: N51TK, Terry Dieno / Fast Toys for Boys – restoration to stock P-51 with second seat \n' +
                    '2010: wings, flaps and ailerons rebuilt \n' +
                    '2011: restoration in progress\n' +
                    '2018: Oct 23, N51TK, first post restoration flight',
            }
        },
        {
            NAME: 'Sopwith Dove',
            TOPIMAGE: importAll(require.context('../planes/Sopwith Dove/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Sopwith Dove/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'C. 1990 SOPWITH DOVE TWO-SEAT BIPLANE\n' +
                    'Registration no.: G-EAGA\n' +
                    'Construction no.: 3004/1\n' +
                    'Derived from the Sopwith Pup fighter\n' +
                    'An exact reconstruction, constructed by Skysport Engineering\n' +
                    'An original 1919 80hp Le Rhône engine\n' +
                    'Dual controls\n' +
                    'Airframe hours: 12\n' +
                    'Engine hours: 2.5 (since complete overhaul)\n' +
                    'Hangared, maintained and flown by the Shuttleworth Collection (agreement extendable) Footnotes',
                History: 'The Dove is a two-seater version of the famous Pup, one of the most delightful of Service machines as far as ease of flying is concerned. This machine produced as a sporting two-seater should prove a great favourite for general utility and stunt flying.\' – The Aeroplane, 31st December 1919.\n' +
                    'Founded in 1912 by Thomas (\'Tommy\', later Sir Thomas) Sopwith, the Sopwith Aviation Company would go on to supply more than 16,000 aircraft to the Allies during WWI. The company\'s first factory was located at Kingston-upon-Thames, with a second added at nearby Ham in 1917, from which would emerge such iconic designs as the Triplane, Pup, Camel, and Snipe fighters.\n' +
                    'With the war\'s end in sight, all of Britain\'s aircraft manufacturers, Sopwith included, were faced with having to restructure their production to cope with greatly reduced demand, while at the same time developing new designs for the emerging civilian market. One of Sopwith\'s first civilian models was the Dove biplane, which shared many features with the popular Pup fighter. Basing the Dove on the Pup was a shrewd move, for the latter was considered one of the easiest of types to fly, unlike the more demanding Camel and Snipe.\n' +
                    'A sporting two-seater, the Dove first flew in March 1919, and like the Pup was powered by an 80hp Le Rhône rotary engine. In August 1919, Sopwith\'s advertisement in Flight magazine announced: \'The Sopwith "Dove" is a sporting and utility aeroplane, based, in point of design and general arrangement upon the famous Sopwith "Pup". With its fast climb, high-speed, quick manoeuvrability and wide speed range it is an ideal safety-first pleasure aircraft.\'\n' +
                    'With a wingspan of 25ft, an overall length of 19ft 6in, and a fully loaded weight of 1,430lb, the Dove had a speed range of 60-100mph and could climb to 5,000ft in 7½ minutes. Range was 200-250 miles. With countless ex-military aircraft on the market, and trading conditions difficult, Sopwith struggled to find buyers in Britain, and most of the relatively few Doves built ended up being exported to Australia and Sweden. The Sopwith company did not survive long after WWI; an attempt to diversify into motorcycle production ended in failure, and by the end of 1920 the firm had been wound up, its assets being acquired by Hawker Engineering.\n' +
                    'The Dove we offer, \'G-EAGA\', was built by Skysport Engineering in 1993, under the personal direction of proprietor Tim Moore. Tim is well known for the detail of his construction and flare for this type of aircraft, even to the extent of hand painting the airframe number on the firewall behind the engine, exactly as it was done in the Sopwith factory. This is unseen from the outside but shows the level of attention to detail; so much so that this aircraft is in fact \'another\' Sopwith Dove.\n' +
                    'Some original parts from the Shuttleworth Collection\'s Sopwith Pup, which was originally a Sopwith Dove, have been incorporated to the aircraft. On completion, it was registered as \'G-EAGA\', inheriting the identity of the Dove \'W/O 3004/1\', which had been first registered to the Sopwith Aviation & Engineering Co Ltd on 3rd July 1919 as \'K157\' (later \'G-EAGA\').\n' +
                    'Following minor damage sustained in a landing accident in July 2000, the engine was rebuilt and a new propeller fitted, and the undercarriage repaired. The engine had already been fitted with aluminium pistons, resulting in a noticeable improvement in performance.\n' +
                    'The present owner has an arrangement with the Shuttleworth Trust whereby they hangar and maintain the Dove and use it in their regular air displays. The Trust is world famous for its knowledge and expertise in maintaining this type of aircraft. They also have at their disposal world class pilots, well known for their care and handling of the Trust\'s rare and valuable machinery. The present owner\'s agreement with the Trust can be transferred to the new owner upon the sale of the Dove, thereby eliminating all concern regarding its maintenance and flying.\n' +
                    'This represents a wonderful opportunity to learn to fly the aircraft with the invaluable help and advice from world class experts.\n' +
                    'In May 2015, \'G-EAGA\' was dismantled and despatched to the Shuttleworth Collection at Old Warden aerodrome for re-assembly and final testing prior to obtaining a Permit to Fly. It is offered with a copy of the illustrated monograph \'Sopwith Dove\' by Philip Jarrett, which relates the history of the model and records details of individual Doves (including \'G-EAGA\'). It concludes with this Dove\'s owner\'s impressions of what the aircraft is like to fly (perusal recommended).',
            }
        },
        {
            NAME: 'PBY Catalina CC-CDT',
            TOPIMAGE: importAll(require.context('../planes/PBY Catalina CC-CDT/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/PBY Catalina CC-CDT/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'We are proud to offer to the market this superb PBY Catalina 5A.\n' +
                    'Price: $450,000 US.',
                Historical_use:
                    'Approximately 3,300 PBY aircraft were built and during World War II, PBYs were used in anti-submarine warfare, patrol bombing, convoy escort, search and rescue missions (especially air-sea rescue), and cargo transport.\n' +
                    'The type operated in nearly all operational theatres of World War II. The Catalina served with distinction and played a prominent and invaluable role in the war against the Japanese.\n' +
                    'These patrol planes shared with land based patrol bombers the combat roles while the very long range Consolidated LB-30 and the Consolidated Coronado were pressed into service to increase the all important logistic strategic air lift capability in the vast Pacific theater. The pairings allowed the Catalina to take on the role of eyes of the fleets at longer ranges than the float plane scouts.\n' +
                    'Several different flying boats were adopted by the Navy, but the PBY was the most widely used and produced.\n' +
                    'Although slow and ungainly, Catalinas distinguished themselves in World War II. Allied forces used them successfully in a wide variety of roles for which the aircraft was never intended. PBYs are remembered for their rescue role, in which they saved the lives of thousands of aircrew downed over water. Catalina airmen called their aircraft the "Cat" on combat missions and "Dumbo" in air-sea rescue service.',
                Aircraft_information_list: 'Manufacturer: Consolidated (Canadian Vickers)\n' +
                    'Year Built: 1943\n' +
                    'Construction No: CV 332\n' +
                    'Current Reg: CC-CDT\n' +
                    'Previous Reg: Last Military Serial no: USAAF 44-34085\n' +
                    'Serial Number: CV-332 \n' +
                    'Airframe Hours 7.193\n' +
                    'Engine manufacturer: PRATT & WHITNEY\n' +
                    'Engine model: R-1830-92\n' +
                    'Serial Number: #1 43-99532 #2 CP304804\n' +
                    'Hours: #1 = 243 & #2 = 127\n' +
                    'Propeller manufacturer: HAMILTON STANDARD\n' +
                    'Propeller model: 23E50-505/6477A-0\n' +
                    'Serial Number: #1 - 53134 #2 - 76154\n' +
                    'Hours: #1 = 232  &  #2 = 164',
                Aircraft_history_list: '1944 - Constructed as a PBV-1A by Canadian Vickers.\n' +
                    'Taken on Strength/Charge with the United States Navy with BuNo 67844.\n' +
                    'Not taken up.\n' +
                    '1944 - Converted to an OA-10A by Canadian Vickers.\n' +
                    '1944 - Taken on Strength/Charge with the United States Army Air Force with s/n 44-33880.\n' +
                    '18 May 1945 - Crashed.\n' +
                    '1950 - Aircraft repaired using fuselage of USAAF 44-34085 cn CV-596.\n' +
                    'Circa 1950 - Certificate of airworthiness for N1933M (PBY-5A, 332) issued.\n' +
                    '1950 - To Aero Corp, Atlanta, GA with c/r N1933M.\n' +
                    '15 May 1951 - Civil registration, N1933M, cancelled.\n' +
                    'Exported to Iceland.\n' +
                    '1951 - To Loftleidir with c/r TF-RVR.\n' +
                    'July 1952 - To Maritime Central Airways with c/r CF-FKV.\n' +
                    'To Wheeler Airlines. - Circa 1966\n' +
                    'To UTA with c/r F-WMKS.\n' +
                    'Taken on Strength/Charge with the Marine Nationale with s/n 32 and operated with these markings: 32.\n' +
                    'Used callsign F-YCHB.\n' +
                    '1974 - To Roberto Parrague, with c/r CC-CDT.',
            }
        },
        {
            NAME: 'PBY 5A Catalina Casno Project',
            TOPIMAGE: importAll(require.context('../planes/PBY 5A Catalina Casno Project/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/PBY 5A Catalina Casno Project/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Manufacturer: Consolidated (Canadian Vickers) CASNO\n' +
                    'Year Built: 1942\n' +
                    'Construction No: CV 264\n' +
                    'Current Reg: N983CF\n' +
                    'Previous Reg: C-FPQK\n' +
                    'Last Military Serial no: RCAF 9830\n' +
                    'Price: $350,000 US.',
                Section_unnamed: 'We are proud to offer to the market this superb PBY Catalina project. The PBY CAT is a highly desirable and popular aircraft. This PBY is currently stored disassembled in Florida, USA. The engines are in storage with Anderson Aeromotive, Idaho whilst corrosion repairs have been carried out on the hull. The entire exterior of the aircraft has been stripped back to the anodize. This aircraft is a FAA registered Standard Catagory. It was a Province of Quebec Canso and they were known for their excellent maintenance and clean airframes.\n' +
                    'The Centre Section in very good condition. The hull has been paint stripped and inspected. All major areas of concern have been repaired. These are marked in green on the drawing below. \n' +
                    'There are still areas of corrosion but they are either a simple stringer repair or skins needing replacement. These aspects are in need of attention and the aircraft is a great candidate for full restoration to flight.',
                Civilian_ownership: 'Sold to Department of Lands and Forests, Province of Quebec.  To civil register as CF-PQK.  Still airworthy with Quebec in 1976. Sold to Foundation Aerovision of St. Hubert, PQ on 1 June 1994, latest Certificate of Registration issued on 18 May 1998 as C-FPQK. Last date: 26 September 1961 - To Crown Assets Disposal Corporation for disposal. Currently registered as N983CF awaiting restoration.',
                History: '31 July 1943 - Taken on strength at Eastern Air Command with No. 116 (BR) Squadron in Newfoundland or Nova Scotia, c.1943 to 1944.  Coded "P".  To Clark Ruse Aircraft Limited for repairs on 17 July 1944, back to EAC on 30 September 1944.  Radar, nose gun installed 2 December 1944.  Redesignated as a Mk. 2R (search and rescue configuration) post war.  it had 735:15 hours on 6 January 1948, when it was delivered to de Havilland Canada for modifications.  To Canada Car and Foundry for repairs on 29 September 1949.  It had 789:00 airframe time at this time.  To No. 6 RD for repairs on 6 May 1950.  To de Havilland for JATO installation on 25 August 1950.  To Aircraft Industries Limited on 23 June 1951 for repair to nose gear door and adjacent area. It went back to AIL on 5 January 1953 for repair of "excessive leak" in starboard fuel tank.  It was based at RCAF Station Greenwood, NS by then, with No. 103 Rescue Unit.  To No. 6 RD on 8 May 1953 for repairs, which were completed January 1954.  To AIL on 29 October 1954 for electrical repairs and modifications.  Still on strength with 103 RU in March 1956.  To No. 6 RD on 11 March 1957, for inspection and installation of SARAH radio homing equipment.  To No. 11 Technical Support Unit (Montreal?) on 10 November 1958 for inspection and weighing.  With No. 102 (KU) Composite Unit at RCAF Station Trenton by 3 April 1959.  Stored at No. 6 Repair Depot, Dunnville, Ontario by 23 February 1961.',
            },
        },
        {
            NAME: 'North American Harvard SNJ-3',
            TOPIMAGE: importAll(require.context('../planes/North American Harvard SNJ-3/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/North American Harvard SNJ-3/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'We are pleased to offer for sale this ex South African Air Force Harvard in Central Flying School scheme with code 7637. \n' +
                    'Registration: ZU-BBF\n' +
                    'C/N 78-7350\n' +
                    'Model: SNJ-3\n' +
                    'Airframe hours: 7377.4\n' +
                    'Engine: Pratt & Whitney R1340\n' +
                    'Engine hours: 977 TBO 1600 hrs\n' +
                    'Propeller hours: 628 TBO 1000 hrs. \n' +
                    'Avionics: SAAF fit with Becker/Fuchs',
            },
        },
        {
            NAME: 'DH 82 Tiger Moth South Africa',
            TOPIMAGE: importAll(require.context('../planes/DH 82 Tiger Moth South Africa/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/DH 82 Tiger Moth South Africa/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Serial number - Ex T6457 South African Air Force\n' +
                    'Construction number - TBA\n' +
                    'Airframe Hours: Total Time 1519.20 Time since full restoration: 1 hour\n' +
                    'Engine: Gypsy Major 1: Total Time: 867.20 since new Total Time since full overhaul: 4 hours\n' +
                    'Current Registration: ZS-CDJ\n' +
                    'Price: £75,000',
                Aircraft_information_unnamed: 'A ground up restoration by renowned master craftsman, the late Noel Otten. All four wings were rebuilt using Canadian Sitka Spruce which was hand selected from West Wide Hard Woods, Vancouver, Canada. The Gypsy Major was zero timed and overhauled. A detailed report of the restoration is available on request. \n' +
                    'This stunning Tiger Moth is originally a UK manufactured aircraft between 1939 & 1941(the exact date of manufacture is being established. This was kept secret as SAAF aircraft did not disclose year of manufacture during WW2) The aircraft has a total of one hour on the airframe and four hours on the engine since full restoration and is being offered with an Export CofA.  \n' +
                    'A tail wheel conversion has been done to ease landing on hard runways. \n' +
                    'All AD’s are currently up to-date.\n' +
                    'This has been a certified ground up nut and bolt restoration with no expense spared. \n' +
                    '\n' +
                    'English built, originally from the UK to South Africa during WW2.'
            },
        },
        {
            NAME: 'Bentley BR2 Aero Engine',
            TOPIMAGE: importAll(require.context('../planes/Bentley BR2 Aero Engine/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Bentley BR2 Aero Engine/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Status: SOLD\n' +
                    'Rare Bentley B.R.2 rotary engine with serial number 101701. It has two PLR Magnetos and an oil pump and in museum quality condition. This engine is presented on an engine stand with a cut away section on one of the cylinders. An internal inspection revealed that two pistons with con rods have been removed.',
                Engine_history: 'The Bentley B.R.2 was a nine-cylinder British rotary aircraft engine developed during the First World War by the motor car engine designer W. O. Bentley from his earlier Bentley BR.1. The BR.2 was built in smaller numbers than the earlier BR.1. Its primary user being by the Royal Air Force in the early 1920s. The initial variant of the BR.2 developed 230, improving to 245 horsepower.',
                General_characteristics_list: 'Type: 9-cylinder rotary\n' +
                    'Bore: 5.51 in (140 mm)\n' +
                    'Stroke: 7.09 in (180 mm)\n' +
                    'Displacement: 1521.8 in (24.94 L)\n' +
                    'Dry weight: 490 lb (220 kg)\n' +
                    'Components\n' +
                    'Valvetrain: Overhead valve\n' +
                    'Cooling system: Air-cooled\n' +
                    'Power output: 250 hp\n' +
                    'Fuel consumption: 20 gallons per hour\n' +
                    'Oil consumption: 16 pints per hour\n' +
                    'Power-to-weight ratio: 0.5 hp/lb',
                Major_applications_list: 'Armstrong Whitworth Armadillo\n' +
                    'Austin Osprey\n' +
                    'Boulton Paul Bobolink\n' +
                    'Brennan Helicopter\n' +
                    'Gloster Grouse\n' +
                    'Gloster Nightjar\n' +
                    'Gloster Sparrowhawk\n' +
                    'Grain Griffin\n' +
                    'Handley Page Type S\n' +
                    'Nieuport Nightjar\n' +
                    'Sopwith Buffalo\n' +
                    'Sopwith Gnu\n' +
                    'Parnall Panther\n' +
                    'Sopwith Salamander\n' +
                    'Sopwith Snipe\n' +
                    'Vickers Vampire',
            },
        },
        {
            NAME: 'Clerget 9B Aero Engine',
            TOPIMAGE: importAll(require.context('../planes/Clerget 9B Aero Engine/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Clerget 9B Aero Engine/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Status: SOLD\n' +
                    'Type: Nine-cylinder air-cooled rotary engine\n' +
                    'Bore: 120 mm (4.72 in)\n' +
                    'Stroke: 9B: 160 mm (6.30 in)\n' +
                    'Displacement: 9B: 16.29 l (994.08 cu in)\n' +
                    'Length: 920 mm (36.22 in)\n' +
                    'Diameter: 9B: 1,020 mm (40.15 in), 9Bf: 1,030 mm (40.55 in)\n' +
                    'Dry weight: 173 kg (381 lb)',
                History: 'Clerget 9B rotary aircraft engine with serial number 22500. Fitted with two PLR Magnetos and an Air pump, an oil pump, Kauper gun gear. The engine is offered in museum quality condition and presented on a purpose-built engine stand. \n' +
                    'Clerget-Blin was a French precision engineering company formed in 1913 by the engineer and inventor Pierre Clerget and industrialist Eugène Blin. The Clerget-Blin company mainly produced aircraft engines. Their successful rotary engine designs were also built in Britain by companies such as Gwynnes Limited, Ruston Proctor and Gordon Watney, to increase the output in the times of World War I.       Gwynnes Limited was a City of London England engineering business, iron founders and pump makers founded in 1849. During the First World War, Gwynnes workshops made Clerget rotary aircraft engines. The Clerget 9B was a nine-cylinder rotary aircraft engine of the World War I era manufactured in both France and Great Britain.',
                Components: 'Valvetrain: Single inlet and exhaust valves operated by pushrods and rockers\n' +
                    'Fuel system: Bloctube carburettor\n' +
                    'Fuel type: Gasoline mixed with Castor oil lubricant\n' +
                    'Oil system: Castor oil mixed with fuel\n' +
                    'Cooling system: Air-cooled',
                Performance: 'Power output: 9B: 96.94 kW (130 hp) at 1,250 rpm\n' +
                    'On closer inspection it was established that this particular engine is a Long Stroke 140 hp version.\n' +
                    'Specific power: 9B: 0.1308 hp/cu in (5.953 kW/l)\n' +
                    'Compression ratio: 9B: 4.56:1\n' +
                    'Specific fuel consumption: 9B: 0.564 l/kW/hour(0.74 pt/hp/hour)\n' +
                    'Oil consumption: 9B: 0.0686 l/kW/hour (0.09 pt/hp/hour)\n' +
                    'Power-to-weight ratio: 9B: 0.563 kW/kg (0.341 hp/lb)',
                Major_applications_list: 'Armstrong Whitworth F.K.10\n' +
                    'Avro 504\n' +
                    'Avro 531\n' +
                    'Bristol M.1\n' +
                    'Cierva C.6\n' +
                    'Cierva C.8\n' +
                    'Fairey Hamble Baby\n' +
                    'FBA Type C\n' +
                    'Nieuport 12\n' +
                    'Nieuport 17bis\n' +
                    'Application -Sopwith Camel\n' +
                    'Sopwith Baby\n' +
                    'Sopwith Camel\n' +
                    'Sopwith Scooter\n' +
                    'Sopwith Triplane\n' +
                    'Sopwith 1½ Strutter',
            },
        },
        {
            NAME: 'Yak 1 Project',
            TOPIMAGE: importAll(require.context('../planes/Yak 1 Project/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Yak 1 Project/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                Status_unnamed: 'Yakovlev Design Bureau Yak-1 WW2 Soviet Fighter\n' +
                    'We are pleased to offer for sale this extremely rare Yak-1. With an incredible combat history. This Yak -1 (G-BTZD) serial No 1342 was recovered in October 1990 from Polonets Lake in the Demlansk area of northern Russia. Locals say that the aircraft landed on the frozen lake in December 1942 after being damaged by German fighter fire. It is clear from the damage evident that the undercarriage collapsed during the landing. Bullet holes were also discovered in the coolant radiator. It is believed that the pilot escaped and returned to Russian lines. Though both the Germans and the Russians attempted to recover the aeroplane, gunfire prevented either from effecting this. During the spring the ice melted and the aircraft sank to the bottom of the lake, in 18 metres of water.',
                History: 'Sources from Russia confirm that this Yak I, number 1342, was made in 1941 at the Saratov plant and was the 13th in the 42nd series. This means that it was the 2063rd made from a total of 8721. Each batch was for a production of 50 aircraft. Although the aircraft data plate, made of thin steel was unreadable, The cowlings, ammunition boxes and several other components are clearly marked 1342, and recently discovered archive information in Russia has listed the serial number of all three guns, confirming beyond doubt this is indeed 1342. Ammunition recovered from the aircraft was found to be dated 1940. The number ‘8188’ being found on the fuselage frame hampered initial research on the aircraft, but it is now thought this number was a manufacturer’s serial number for the frame only. The Yak-1 was fitted with a Klimov engine number PA 135-1067, which means that it was built at aircraft engine plant number 26 in the third quarter of 1941, its order number being 1067. Unfortunately, this steel data plate for the engine was also corroded and it is not possible to read the number on it. \n' +
                    'Yak I s/n 1342 flew with the 423 Fighter Regiment, which at the beginning of the war was part of the Moscow air defence force. Later this regiment became part of the Gorkij City anti-aircraft defence force. The aircraft then was with the 485 Fighter regiment, and its commander was Major G.V.Zimin. A main base of this regiment was Vypolzovo airfield, not far from Kalinin City (now called Twer). There was much fighting in the Derniansk ‘boiler’ where the German 16th Army was surrounded by Soviets. The regiment had Hurricanes but also a few Yak I’s. The pilot who flew the aircraft on its last sortie was Flying Officer Michael Kudrjashov. He had three victories in this aeroplane, and sometimes flew as wingman for Major Zimin. He survived the war and won many medals for his courage, ending out with 12 victories in all. \n' +
                    'The aircraft was acquired by HAC in 1991, and restoration started soon after. The aircraft was of simple design, but had an all-wood wing and other flying surfaces. The glue had deteriorated during the long immersion and the decision was made to manufacture a new wing, incorporating as many of the metal fittings as possible. The airframe is being restored to the original specifications, including its original guns (de-activated) and ammunition boxes. Much of the airframe and equipment was re-usable thanks to the very cold fresh water that the aircraft was under for so many years.\n' +
                    'The engine was in an amazing condition, with no corrosion - except on the steel data plate. Even the oil inside was clean and fresh, as were all the internal steel parts. The magnesium castings had dissolved and so an additional engine was sourced from the Musee de l’Air in Paris, by way of an exchange. In the meantime the original engine is being worked on as it is hoped that enough spare parts can be found to restore it.',
                Aircraft_information_list: 'Wing Span :  32ft 10 in (10m).\n' +
                    'Length :    27ft 9.75in (8.48m).\n' +
                    'Height :    9ft 10in (3m)9ft 10in (3m).\n' +
                    'Power-plant : Kilmov VK-105PF 1,100 hp.\n' +
                    'Weight :    6,270 lbs (2,850 kg).\n' +
                    'Maximum Speed : 367mph (592km/h).\n' +
                    'Service Ceiling : 32,800ft (10,000m).\n' +
                    'Range :    1120 m (700 km).\n' +
                    'Armament : 1x ShVAK cannon ( 20 mm, 120 rounds); 2x ShKAS machine guns (7,62 mm, 1500 rounds)\n' +
                    'The wing section, undercarriage, fuselage have been meticulously restored. The Kilmov V12 engine has been overhauled and run on a test rig. \n' +
                    'Some £1,500,000 has been spent so far on this restoration. ',
            },
        },
        {
            NAME: 'BAC Strikemaster',
            TOPIMAGE: importAll(require.context('../planes/BAC Strikemaster/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/BAC Strikemaster/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Registration VH-ONP (Ex RNZAF 6371)\n' +
                    'Airframe Hours 5165.00\n' +
                    'Fatigue Index 77.56\n' +
                    'Engine Hours 802 ETR\n' +
                    'Avionics VHF, Mode C, ADF\n' +
                    'Location NSW Australia\n' +
                    '2 x MK 88\'s Plus spare engine with logbook, ground equipment and spares only £130,000!',
                Status: 'BAC STRIKEMASTER FOR SALE -  2 x MK 88\'s Plus spare engine with logbook,ground equipment and spares for only £130,000 Sterling !\n' +
                    'This Ex New Zealand Air Force MK88 was retired and imported into Australia in 1994.\n' +
                    'The aircraft underwent a full restoration over a two-year period at which time it was repainted in two-pack to represent the aircraft flown by the Kenyan Air Force.\n' +
                    'Flown regularly until placed in long-term storage in 2006, the aircraft is now offered for immediate sale with minimal work required to bring it back to fully operational status.\n' +
                    'Alternatively, the aircraft can be returned to fully operational status or dismantled for shipping by qualified engineers as required.\n' +
                    'Complete Military and Civilian Logs available for inspection.\n' +
                    'Easy-to-fly and simple to maintain, the Strikemaster is a charismatic warbird that offers superior performance and combat credibility that other light jets simply cannot match.',
                Dimensions_list: 'Span : 10.77m (36\'11ft)\n' +
                    'Length : 11.25m (33\'9ft)\n' +
                    'Height : 3.1m (10\'2ft)',
                Weight_list:
                    'Empty : 2,844kg (6,270lb)\n' +
                    'Max : 5,215kg (11,500lb)\n' +
                    'Power Plant\n' +
                    '1,547 kgp (3,410 lb st) Rolls Royce Viper 535',
                Performance_list:
                    'Max speed : 760km/h (472mph)\n' +
                    'Max climb : 5,300ft/min (26m/sec)',
                Aircraft_information_unnamed:
                    'Ceiling : 34,500ft (10,500m)\n' +
                    'Range : 2,700km (1,675miles)\n' +
                    'A comprehensive spares package is also available. \n' +
                    'Details listed below is an overview of the package:\n' +
                    '1 x spare engine with logbook (inhibited) \n' +
                    'Various ground handling equipment (jacks, towbars, wing trestles, lifting slings etc)\n' +
                    'Various spares (drop tanks, pylons, jet pipes, canopies, seats, parachutes, wheels, brakes, etc)\n' +
                    'There has never been an opportunity to create an inventory the spares list and there are too many to list.\n' +
                    'There are also two ARC159 Radios that have been inspected and tagged.\n' +
                    'The two Strikemasters have been stored undercover in the very dry environment of Tocumwal NSW since 2006.\n' +
                    'They have been regularly ground run and full log books, manuals and service history are available.\n' +
                    'The MK 80 was imported from the UK in 2005 and it was stored in Tocumwal until it was put in storage in Sale VIC to be assembled and signed out. The aircraft was assembled and ground run successfully then the wings were removed and it is now disassembled and ready for shipping.',
            },
        },
        {
            NAME: 'DH Tiger Moth',
            TOPIMAGE: importAll(require.context('../planes/DH Tiger Moth/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/DH Tiger Moth/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Serial number - 83478\n' +
                    'Construction number - T7093\n' +
                    'Current Registration: VH-RVE\n' +
                    'Includes Radio, Cloth headset. \n' +
                    'Discount price: £57,950 Sterling',
                Annotation_unnamed:
                    '​A prime opportunity to own a true classic Bi - Plane.\n' +
                    'This stunning Tiger Moth is originally a UK manufactured aircraft and  has a total of 341 hours on both airframe and engine since full restoration and full CofA.  \n' +
                    'All AD’s are currently up to-date.\n' +
                    'Due at next inspection are the mandatory instrument AD next 100 hourly.\n' +
                    'This has been a ground up nut and bolt restoration and every piece of wood has been renewed (replaced).\n' +
                    'English built, originally from the UK to NZ then on to Australia.',
            }
        },
        {
            NAME: 'De Havilland Dove',
            TOPIMAGE: importAll(require.context('../planes/De Havilland Dove/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/De Havilland Dove/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Own this piece of history. A true Warbird and in the markings of an Admirals Barge.',
                Status_unnamed: 'Total flying time 10,636 hours\n' +
                    'Both engine mounts need X-ray, however there are spare mounts so this can be carried out without        any lengthy delays. \n' +
                    'Need an engine AD’s plus a few other small ones.\n' +
                    'Main planes need to be pulled and mandatory corrosion inspection.\n' +
                    'LH Engine has 1087 hours to run before overhauling \n' +
                    'RH Engine has 1202 hours to run before overhauling \n' +
                    'Included is a large spares consignment of spare parts.',
                History: 'Manufactured in 1953 and built by De Havilland Aircraft Co Ltd at their Hawarden plant, Chester UK as a Dove 2 on 22.1.53 and registered G-AMXZ to De Havilland Aircraft Co Ltd, Hatfield.   The Dove was built for the USA but in the end remained in the UK. On 23.9.54 the aircraft was sold to Royal Navy as part of an order for 10 Sea Devon C.20s (The Devon being the UK Military title for the Dove).\n' +
                    'The aircraft commenced service on 3.5.55 and was taken on charge Royal Navy Fleet Air Arm as Sea Devon C.20 XJ324. The aircraft was operated by RNFAA 781 Squadron based at Lee-on-Solent, Hants and was fitted with an upholstered interior as an “Admirals Barge”.\n' +
                    'In 1990, the Devon was retired by Royal Navy and listed for civil disposal and sold to a UK aircraft dealer. In 1990 the aircraft XJ324 was sold and arrived in Melbourne Victoria and on 1st of Jan 1990  and arrived dismantled on a truck at Essendon Airport, Melbourne where it was re assembled. Now titled a Dove on 28.12.90 the aircraft was added to the Australian Civil Register as Dove 5 VH-DHI. Restored and flown again in 2014 and retaining her admirals Barge scheme.',
            },
        },
        {
            NAME: 'Hawker Hunter GA 11',
            TOPIMAGE: importAll(require.context('../planes/Hawker Hunter GA 11/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Hawker Hunter GA 11/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Hawker Hunter GA 11 For Sale (No Engine)\n' +
                    'Shipping can be arranged to anywhere in the world. \n' +
                    'Our team can pack and ship it for you at a cost.\n' +
                    'Price - $30,000 US',
                Aircraft_information_unnamed: 'Hawker Hunter GA.11 ex Royal Navy team \'Rough Diamonds\' \n' +
                    'Serial No HABL - 003062\n' +
                    'This Hunter only has 3325 airframe hrs in its logbook.\n' +
                    'The cockpit is complete and the fuselage and wings are disassembled and in storage in the USA (Please note that this is being sold without engine). An engine could be acquired from certain suppliers in the USA on request and subject to separate agreement. \n' +
                    'Airframe logbooks are available.',
            },
        },
        {
            NAME: 'Stinson L-5 Sentinel',
            TOPIMAGE: importAll(require.context('../planes/Stinson L-5 Sentinel/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Stinson L-5 Sentinel/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'An excellent opportunity to own and operate a stunning example of  a recently restored L-Bird ! This is a very authentic and accurate restoration and shown in 10:10 condition. All paperwork available.\n' +
                    'Serial No.: 76-1348\n' +
                    'Military serial No.: 42-99107\n' +
                    'Registration: F-AYLV\n' +
                    'Price: 89,000€',
                History: 'The the L-5, affectionately known as the "Flying Jeep", can be traced to the prewar civilian Stinson HW-75. The 75 horsepower civilian high-wing design was built by the Stinson Aircraft Company at Wayne, Michigan and first flew in 1939. \n' +
                    '\n' +
                    'The L5 was accepted by the military after accelerated service trials and entered into service in December 1942 as the Army     O-62 (\'O\' for observation). The L-5 carried a pilot and observer in a tandem-seating configuration, which was preferred by the military for observation work.\n' +
                    '\n' +
                    'In March 1943, with the creation of the liaison category of light observation aircraft (previous examples came from Taylorcraft Aircraft as the L-2, and from Aeronca as their L-3, along with the numerous Piper L-4) the designation for Stinson\'s new purpose-built military design was changed to the L-5. The primary purpose as a liaison aircraft was courier and communication work, artillery spotting and casualty evacuation. The fuselage of later models was redesigned so the aircraft could also be used as an air ambulance, or for cargo work. With a wider and deeper rear fuselage section and a large rear door that folded downward, a litter patient or 250 pounds of cargo could be quickly loaded aboard.\n' +
                    '\n' +
                    'The L-5 series was manufactured between December 1942 and September 1945, during which time 3,590 of the unarmed two-seaters were built for the United States armed forces, making it the second most widely used light observation aircraft of the war behind the Piper L-4 Cub. \n' +
                    '\n' +
                    'The L-5 was also popular with Generals and other high-ranking officers for fast, efficient short-range transportation.\n' +
                    '\n' +
                    'During the Battle of Okinawa, L-5s operated from an LST using the Brodie landing system which allowed a light aircraft to take off and land without a flat surface by snagging a wire hung between two booms.\n' +
                    '\n' +
                    '​Capable of operating from short unimproved airstrips, the L-5 "Sentinel" delivered personnel, critical intelligence and needed supplies to the front line troops. On return flights, wounded soldiers were often evacuated to rear area field hospitals for medical treatment, boosting the morale of combat troops fighting in remote areas. L-5s were also used for aerial photography, controlling vehicle convoys, para-dropping food, medical supplies and ammunition, laying communication wire, distributing propaganda leaflets, spraying pesticide, transporting prisoners, and directing fighter-bombers to ground targets.',
                History_unnamed_list: '21/03/1944 manufactured in New York, USA -Departs to England\n' +
                    '05/04/1944 - England - Arrives in England and is assigned to Soxo and into service in Normandy & Belgium. \n' +
                    '16/01/1952 - Italy - Incorporated in the Aeronautica Militare Italiana (Italian Air Force) as  MM52970\n' +
                    '28/04/1955 - Italy - Leaves the italian army and becomes I-AEFZ. Used for towing gliders.\n' +
                    '20/08/2013 - Italy  - I-BRLU (Called after XX-RLU was the first plane ever Italo Battioli flew). Full Zero Timed Restoration\n' +
                    '17/07/2014 - France F-AYLV',
                Aircraft_details_list: 'Total Time: 3623:05   \n' +
                    'Total Time since full restoration: 193:25\n' +
                    'Total Engine Time: 1358:55\n' +
                    'Total Engine Time since overhaul: 180:55\n' +
                    'Transponder: Mode S\n' +
                    'A set of new covers for the plexi glass provided. \n' +
                    'Crew: two (pilot and observer)\n' +
                    'Length: 24 ft 1 in (7.34m)\n' +
                    'Wingspan: 34ft 0 in (10.36m)\n' +
                    'Height: 7 ft 11 in (2.41m)\n' +
                    'Wing area: 155 ft² (14.40m²)\n' +
                    'Empty weight: 1550 lb (702 kg)\n' +
                    'Useful load: lb (kg)\n' +
                    'Loaded weight: 2020 lb (916 kg)\n' +
                    'Max. takeoff weight: 2050 lb (929 kg)\n' +
                    'Powerplant: 1 × Lycoming O-435-1, 185hp (138kW)',
                Addittional_info_unnamed: 'Armament - none (technically). Some aircraft had jury rigged, anti-tank rocket launchers (mainly bazookas) installed and used with success against ground targets in WWII.\n' +
                    'A full list of avionics and equipment can be supplied on application.',
                Performance_list: 'Never exceed speed: 145 knots (163 mph (262 km/h)(200 mph (322 km/h military, in dive))\n' +
                    'Stall speed: 38 knots (42 mph, 70 km/h)\n' +
                    'Range: 375 sm (603 km)\n' +
                    'Service ceiling: 15,800 ft (4,815.6m)\n' +
                    'Rate of climb: 900 ft/min@sea level (4.6 m/s)',

            },
        },
        {
            NAME: 'Mikoyan-Gurevich MiG-3',
            TOPIMAGE: importAll(require.context('../planes/Mikoyan-Gurevich MiG-3/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Mikoyan-Gurevich MiG-3/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                History: 'The Mikoyan-Gurevich MiG-3 (Russian: Микоян и Гуревич МиГ-3) was a Soviet fighter and interceptor aircraft used during World War II.\n' +
                    '\n' +
                    'It was a development of the MiG-1 by the OKO (opytno-konstruktorskij otdel — Experimental Design Department) of Zavod (Factory) No. 1 to remedy problems found during the MiG-1\'s development and operations. It replaced the MiG-1 on the production line at Factory No. 1 on 20 December 1940 and was built in large numbers during 1941 before Factory No. 1 was converted to build the Ilyushin Il-2.\n' +
                    '\n' +
                    '​On 22 June 1941, at the beginning of Operation Barbarossa, some 981 were in service with the Soviet Air Forces (VVS), the Soviet Air Defence Forces (PVO) and Soviet Naval Aviation.\n' +
                    '\n' +
                    ' The aircraft had been designed for high-altitude combat but combat over the Eastern Front was generally at lower altitudes, where it was inferior to the German Messerschmitt Bf 109, as well as most of its Soviet contemporaries. It was also pressed into service as a fighter-bomber during the autumn of 1941 but it was equally unsuited for this. Over time, the survivors were concentrated in the PVO, where its disadvantages mattered less, the last being withdrawn from service before the end of the war.',
                Aircraft_information: 'This unique airframe comprises 50% original aircraft, with parts from 5 recovered aircraft and restored in 2005 by the Aircraft Restoration Department of Rusavia Ltd.\n' +
                    'The airframe and its systems are in a technically sound state and ready for a flight.\n' +
                    'Retraction of landing gear has been tested and in full working condition.\n' +
                    'The cockpit is fitted with all the necessary instruments in airworthy condition.\n' +
                    'Exterior condition is very good, the aircraft has always been stored in a hangar.\n' +
                    'Dimensions (wing span / length / height) – 10.2m /8.2m /2.6 m.\n' +
                    'Empty weight – 2,400 kg.\n' +
                    'The engine supplied is an original AM 38 engine which has been test run and flown but is problematic but will be supplied.\n' +
                    'It is recommended that an Allison V12 be fitted for operations. ',
            },
        },
        {
            NAME: 'de Havilland DH115 Vampire T Mk.11 WZ507',
            TOPIMAGE: importAll(require.context('../planes/de Havilland DH115 Vampire T Mk.11 WZ507/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/de Havilland DH115 Vampire T Mk.11 WZ507/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Mark: G-VTII\n' +
                    'Year Built: 1952\n' +
                    'Previous ID: WZ507\n' +
                    'Airframe hours: 1373:40 (as of 1st May 2016)\n' +
                    'Engine hours: 121:50 (as of 1st May 2016)\n' +
                    'Cockpit tour:  - \n' +
                    'Guide Price £100.000',
                Aircraft_information_unnamed: 'The Vampire Preservation Group has successfully operated this 1952 de Havilland Vampire T11 for over a decade, maintaining it in pristine condition and delighting millions of spectators at air displays across the UK and Europe. They are very proud of their achievements but have now sadly decided the time has come to sell this unique aircraft.\n' +
                    'This Vampire was built in 1952 at Christchurch, Dorset (c/n 15127) and is believed to be the ONLY airworthy de Havilland Vampire T11 in the world. Other airworthy two seat variants are still flying but these tend to be ex-Swiss Vampire T55\'s. This Vampire is a genuine ex-RAF Vampire T11, making it a very rare aircraft indeed.\n' +
                    '\n' +
                    'This aircraft had its annual inspection earlier this year and has a "Permit to Fly", valid until May 2017.\n' +
                    '\n' +
                    'The aircraft is fully airworthy, capable of aerobatics and has been regularly displayed on the air show circuit by the current owners since 2002.\n' +
                    '\n' +
                    'The CAA registration for this aircraft is G-VTII but we have CAA permission to use the original military registration of WZ507 instead. This enables us to display our Vampire in authentic RAF colours.\n' +
                    '\n' +
                    'This aircraft served in the RAF from 1953 to 1969.\n' +
                    '\n' +
                    'In 2008 the aircraft\'s paint was stripped back to bare metal (and wood!), the airframe treated to prevent corrosion and then repainted, which has helped preserve the aircraft in A1 condition.\n' +
                    '\n' +
                    'In 2011 we replaced the existing Goblin engine with another example, which had only logged around 100 hours flying time. The new engine was completely stripped down, inspected and rebuilt before installation, which has extended the life of our aircraft enormously.\n' +
                    '\n' +
                    'Airframe hours: 1373:40 (as of 1st May 2016)\n' +
                    '\n' +
                    'Engine hours: 121:50 (as of 1st May 2016)\n' +
                    '\n' +
                    'The Goblin engine which was replaced in 2011 is also included in this sale and can be used as a useful source of spares. We are also including a modest selection of other spare parts we have collected over the years and can supply a full inventory to anybody seriously considering buying this aircraft.',
                History: '1952 - Manufactured by the de Havilland Aircraft Company at Christchurch, Dorset. \n' +
                    '1953 - Delivered to RAF in March. \n' +
                    '1954 - Posted to 229 Operation Conversion Unit (OCU), Chivenor \n' +
                    '1955 - Flown to Marshall’s at Cambridge for modifications (fitting of new ‘bubble’ canopy and ejection seats)  \n' +
                    '1959 - Posted to 8 Flight Training School (FTS), Swinderby \n' +
                    '1961 - Posted to 5 FTS, Oakington \n' +
                    '1963 - Posted to 3 / 4 Civil Anti-Aircraft Co-operation Unit (CAACU), Exeter  \n' +
                    '1964 - Posted to Central Air Traffic Control School (CATCS), Shawbury \n' +
                    '1969 - Retired from RAF service and put on static display by the Solway Aviation Society (SAS), based at Carlisle airport. \n' +
                    '1980 - WZ507 became the first ex-RAF jet fighter to be put onto the UK civilian register (as G-VTII), after being restored to full flying condition by the SAS.  \n' +
                    '1982 - Appeared in the BBC production ‘The Aerodrome’ \n' +
                    '1985 - Ownership transferred to the Vintage Aircraft Team at Cranfield \n' +
                    '2002 - After a period of storage and restoration, WZ507 was returned to flying condition by de Havilland Aviation at Swansea.  \n' +
                    '2005 - Vampire Preservation Group formed to operate WZ507 and preserve it as an airworthy aircraft. \n' +
                    '2008 - WZ507 Undergoes major respray.  \n' +
                    '2011 - New Engine fitted to WZ507.',
                FAQ: '-Why are the Vampire Preservation Group selling the aircraft?\n' +
                    'Recently WZ507 has been quieter on the air show circuit than the current owners would have liked. This is because their display pilots (who are also the main co-owners of WZ507) have not had sufficient time to keep current with display flying due to family and work commitments. This situation is not going to improve in the near future - they simply do not have the time to safely practice for flying displays with this aircraft at public events.\n' +
                    '\n' +
                    '-Is the aircraft ready to fly?\n' +
                    'Yes. WZ507 has just completed its annual maintenance inspection and is fully serviceable and in great condition. It has been regularly maintained since its return to flight in 2002 and has flown frequently. All logbooks and maintenance records are available and included in this sale.\n' +
                    '\n' +
                    '-Is the Vampire difficult to operate?\n' +
                    'This aircraft currently operates in the UK on a CAA "Permit to Fly", which is renewed annually. A new Permit to Fly is included in this sale. A CAA approved Operations Control Manual (OCM) is also required for UK operations, based upon CAP 632. UK display flying regulations are covered in CAP 403. There is CAA approval to operate without live ejection seats.\n' +
                    'Please note, if sold abroad, other national regulations may apply.\n' +
                    '\n' +
                    '-Can anybody buy and fly this aircraft?\n' +
                    'Anybody may purchase this aircraft!\n' +
                    'To fly as pilot-in-command you obviously need a pilot licence, successful completion of a short conversion course and an endorsment from the CAA for UK operations. This aircraft was designed to train pilots and is consequently very straight-forward to fly.',
            },
        },
        {
            NAME: 'Beech Model 18 G-BKGM',
            TOPIMAGE: importAll(require.context('../planes/Beech Model 18 G-BKGM/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Beech Model 18 G-BKGM/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                History: 'Taken on strength with the Royal Canadian Air Force on the 29th September 1952 at No 6 Repair depot at RCAF Station, Trenton, Ontario. To Training Command on the 29th September 1952 for use at RCAF Station Saskatoon, Saskatchewan. To RCAF Station Bagotville, PQ on the 8th December 1955. To No 3 (AW) Operation Training Unit at RCAF Station Cold Lake, Alberta on 27th June 1957. To 442 Squadron (Auxiliary) RCAF Station Sea Island, BC on 22 July 1958. To Bristol Aircraft Winnepg for overhaul, to Air Defence Command on 20 August 1958 when completed. Used by No. 104 (Comm) Flight at RCAF St Hubert,PQ. Reserved for museum at Rockcliffe on 19 November 1964 but still in use as a training aircraft on 11 January 1965. To storage on 5th March 1965 at Saskatoon. Pending disposal there form the 10th May 1965. Sold to Bradley Air Services of Carp, Ontario and to civil register as CF-SUQ. In 1976 it was registered to Capitol Air Surveys of Ottawa. This reg cancelled on 13 July 1982 and removed from the register. To the US register on the 19th June 1984 as N5063N. Registration cancelled on 20 August 1993 and exported to the UK. \n' +
                    '\n' +
                    'This stunning aircraft has just completed and epic journey across the Atlantic to tour the USA and Central Americas. The recent pilots reports are that she never missed a beat and performed better than expected. The aircraft is currently in store at it\'s new base in Warwickshire, UK and viewing by arrangement.',
                Aircraft_information_list: 'Airframe: 11342.6  hrs since 1952 construction. All major mods incorporated (spar-strap etc)\n' +
                    'Engines: L/H complete replacement zero-hour unit from Covingtons has 90hrs as of now. R/H was replaced similarly by previous owner about 10 yrs ago and now has 390 hrs on it.\n' +
                    'Props: shop overhauled for last CofA in March 2017. They have a three-year shop-visit requirement.\n' +
                    'All work done by RGV Staverton.\n' +
                    'Current CofA inspection with fresh Annual & NARC and insurance until March 2020 .\n' +
                    'This Beech 18 has just completed an epic journey around the USA & Central America and there was not a single technical unserviceability, or delay The final stats for \'actuals\' on the trip:\n' +
                    'Hours flown: 38\n' +
                    'Gas consumption (AVGAS 100LL): 40 Imp/hr on average\n' +
                    'Oil consumption (100 straight ): over whole trip 20 Ltrs TOTAL! So less than 1 lit/hour both engines. Both the pilots say this is amazing!\n' +
                    'Range on standard (5) tanks is about 5-6 hours @145-150kt TAS. We made it westbound to the USA in 2017 with about 4 stops comfortably. No ferry kit required',
                Inventory_of_extras_list: '4 x beefy chocks\n' +
                    'Hand pump for refuelling from drums\n' +
                    'a new tailwheel tyre, a new mainwheel one (in store in UK) and much newer (than the 3 x DC) single Bose & Sennheiser headsets\n' +
                    'A \'tow-bracket\' for ground-handling (in UK)\n' +
                    'Canvas Engine and Canopy covers. Nylon Wheel/tyre covers',
                Summary: 'The aircraft is presently fully airworthy and is insured (with Haywards). It has paperwork until annual (June) and ARC renewal (August). Insurance would need to be transferred/re-negotiated prior to sale.\n' +
                    'The only known long-term unserviceability is the ILS (u/s throughout current ownership) and the (two) Narco radios are adequate and function.\n' +
                    'The aircraft has \'bolt-on\' Garmin Aera and a Dynon D2, with plumbed-in electrics/aerial and Funkwerk TXPDR (mode S) also \'bolted on and can be utilised for Ferry flight but to be retained by the current owner post delivery. No HF.\n' +
                    'The interior trim is original RCAF fit and so needs some TLC. A 2017-made RFD 4-6 man liferaft and PLB (both new) are on board.\n' +
                    'There is a comprehensive approved line-service spares-pack provided by RGV on board, plus a quantity of unused non-synthetic (non-W) oil.\n' +
                    'Current configuration at present. which has only three pax seats in order to carry a small hot air balloon on board. All seats (inc pilot squabs) were professionally re-upholstered  & restored in blue leather last year Four strong-points (two on fwd bulkhead and two on rear) were installed by RGV for load restraint.\n' +
                    'A store of spares of varying quality are in the UK (including a full spare set of fuel tanks and two main u/c legs), though not \'signed off\'. Two wooden folding tables for installation between pax seats are stored in UK as is the fourth cabin seat which was removed to create space for the balloon.     \n' +
                    'All documents/records are available in UK and can be independently confirmed by Stuart Vincent of RGV, Staverton.',
            },
        },

        {
            NAME: 'Douglas C-47C',
            TOPIMAGE: importAll(require.context('../planes/Douglas C-47C/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Douglas C-47C/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                Aircraft_information_list: 'Features dual control and flight panel, electric loading winch and a wide cargo door.\n' +
                    'Heated cabin.\n' +
                    'Avg. gas 100LL consumption at the cruise speed of 200 km/h and load of 2,000 kg is 380 liters. Good condition of exterior skin and interior. Technically sound.\n' +
                    'Airframe: Total flight hours – 31,200 hours. No service life limit. Condition-based use. No major damage has been suffered.\n' +
                    'Engines: 2xPratt-Whitney R-1830-90D, 1,200 h.p. each, time between overhaul – 1,600 hours, time to overhaul – 1,099/1,006 (left/right).\n' +
                    'Propellers: automatic Hamilton Standard Hydromatic 23E50, time between overhaul – 2,000 hours, residual life – 1,708/1,708 (left/right).\n' +
                    'Avionics: for daylight flights in instrument weather conditions.\n' +
                    'Parking dimensions (wing span / length / height) – 29.0/19.5/5.2 m.\n' +
                    'Empty weight – 8,000 kg.\n' +
                    'Documents are available.',
                Adittional_available_equipment_list: 'Set of tools for the airframe, engine and propeller.\n' +
                    'A spare P& W Radial 1830-90D with 654.5 Hrs and logbook.\n' +
                    'Spare carburettor.\n' +
                    'Spare cylinders.\n' +
                    'Spare magnetos.\n' +
                    'Spare new tyres.\n' +
                    'Spaer new tubes.\n' +
                    'Spare new oil cooler.\n' +
                    'Spare new starter and hydraulic pump.',
                History_list: 'Build date: November 26, 1942г.,serial No. 6055, registration No. RA-05738\n' +
                    'A historical  “Douglas” – a C-47C type aircraft of WW2 Vintage. This particular aircraft was released into service on the 29th of November 1942. On the 29th of May 1943 it was transferred to US Command North Africa. On the 8th of September 1947 this aircraft was transferred to the 9th US Army Air Force based in France.\n' +
                    'On the 26th of November 1947 her miltary flying days were over and she was registered F-BEF with Aigle Azur Airlines. \n' +
                    'She worked under various French and African operators until October 1983 when she returned to the USA and registered as N4550J. In 2015 she was sold to the Russian Aviation Company and flown to Russia together with N12BA. \n' +
                    '2015 – Took part in a legendary Alaska-Siberia 2015 flight dedicated to the 70th anniversary of the Victory in the Great Patriotic War.\n' +
                    '2015 – Took part in the International Aviation and Space Salon MAKS-2015.\n' +
                    '2016 – Performed a flight at the opening of the International Army Games 2016 at the Alabino training ground.\n' +
                    '2017– Took part in filming a feature motion picture Corridor of Immortality.\n' +
                    '2019 - Booked to fly with N12BA to Daks over Normandy.',
            },
        },
        {
            NAME: 'Lightning T. Mk5 ZU-BBD',
            TOPIMAGE: importAll(require.context('../planes/Lightning T. Mk5 ZU-BBD/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Lightning T. Mk5 ZU-BBD/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Lightning T. Mk5\n' +
                    'Registration: ZU-BBD\n' +
                    'Service Registration: XS452\n' +
                    'Built: 30/6/65',
                Aircraft_information: 'Service: "452" 226 OCU, "T" 11 Sqd, "X" 111 Sqd, "X" 56 Sqd, Akrotiri Station Flight (Flamingo on PINK fin, pink-blue nose markings), used APC-detached UK Lightning squadrons, "Y" 11 Sqd (\'C\' Flt). First flight in dark green experimental camouflage.\n' +
                    'LTF, lent 5 Sqd, "T" 11 Sqd, "Z" LTF, "DZ" LTF, "BT" 11 Sqd.\n' +
                    '30/6/88 delivered to Cranfield and subsequently bought by Tony Hulls and restored. The Aircraft was fast taxied at Cranfield Airshow.\n' +
                    'Bought by Mike Beacheyhead in South Africa and registered as ZU-BBD. The aircraft has been resprayed Gloss Black.\n' +
                    '9th March 1999. XS452  flys in Cape Town, South Africa.',
            },
        },
        {
            NAME: 'Lightning F. Mk6 ZU-BEY',
            TOPIMAGE: importAll(require.context('../planes/Lightning F. Mk6 ZU-BEY/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Lightning F. Mk6 ZU-BEY/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Lightning F. Mk6\n' +
                    'Registration: ZU-BEY\n' +
                    'Service Registration: XP693',
            },
        },
        {
            NAME: 'Lightning F. Mk6 ZU-BEW',
            TOPIMAGE: importAll(require.context('../planes/Lightning F. Mk6 ZU-BEW/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Lightning F. Mk6 ZU-BEW/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Lightning F. Mk6\n' +
                    'Registration: ZU-BEW\n' +
                    'Service Registration: XR773',
            },
        },
        {
            NAME: 'Blackburn Buccaneer S Mk.2B ZU-AVI',
            TOPIMAGE: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-AVI/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-AVI/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Buccaneer S Mk 2B\n' +
                    'Registration: ZU-AVI\n' +
                    'Service Registration: XW988',
                History: 'The Blackburn Buccaneer was a British low-level strike aircraft with nuclear weapon delivery capability serving with the Royal Navy and the Royal Air Force between 1962 and 1994, including service in the 1991 Gulf War. Designed and initially produced by Blackburn Aircraft at Brough it was later known as the Hawker Siddeley Buccaneer when Blackburn became a part of the Hawker Siddeley group.\n' +
                    '\n' +
                    'The final three, all owned by Thunder City (XW 986 – now ZU NIP , XW 987 – now ZU BCR and XW 988 – now ZU AVI ) were built specifically for the Defence Ministry (MoD) and primarily used on countless research programs.\n' +
                    '\n' +
                    'The Buccaneer was a mid-wing, twin-engine monoplane with a crew of two seated in tandem under a sliding canopy. To meet the demands of the specification, the Buccaneer featured a number of advanced design features. The fuselage was area ruled; meaning it was designed to reduce drag at transonic speeds. This gives rise to the characteristic curvy "Coke bottle" shape. It featured a variable incidence tailplane that could be trimmed to suit the particular requirements of low-speed handling or high-speed flight. At the low-levels and high speeds traditional bomb bay doors could not be opened safely into the air stream, therefore doors were developed that rotated into the fuselage to expose the payload. This was also useful in assisting ground-level access.\n' +
                    '\n' +
                    'The small wing of the Buccaneer was suited to high-speed flight at low level. Such a wing, however, did not generate the lift that was essential for low-speed carrier operations. Therefore, the wing and horizontal stabiliser were "blown" by bleeding compressor gas from the engine through surface vents. A consequence of the blown wing was that the engines were required to run at high power for low-speed flight in order to generate sufficient compressor gas for blowing. Blackburn\'s solution to this situation was to provide a large airbrake. The tail cone was formed from two leaves that could be hydraulically opened into the airstream to decelerate the aircraft. The nose cone and radar antenna could also be swung around by 180° to reduce the length of the aircraft in the carrier hangar. This feature was particularly important as contemporary British aircraft carriers were small.',
                Description: 'The Buccaneer S Mk 2B is an updated version of the Mk 1 aircraft. Although retaining the main features of the earlier version i.e., the moderately swept, blended-kink main planes, a high-set, all moving tail plane and a cone shaped rear fuselage extension (which opens clamshell fashion to serve as an air brake), the Mk 2 Series aircraft can be distinguished by the larger engine intakes of elliptical section and the absence of the small auxiliary air intakes on the inboard side of each engine air intake and leading edge of each inner wing.\n' +
                    'An improved a.c. generating system and the introduction of the Rolls Royce Spey engine power units formed the major changes to this already successful aircraft.\n' +
                    'A full description of the aircraft can be found in AP101B-1202-1B.\n' +
                    '\n' +
                    'The aircraft have been subjected to regular Primary Star Inspections. Refer to Annexure A.1 for information relating to the next service requirement.',
                Aircraft_information: 'Modification State:\n' +
                    'The aircraft have been modified to the latest modification state as defined in the Master Modification Listing. All Mandatory modifications have been complied with.\n' +
                    'In addition all STI’s and SI’s have been complied with, including all NDT requirements.\n' +
                    '\n' +
                    'Fatigue State:\n' +
                    'All of the fatigue records for this aircraft are available.\n' +
                    'Refer Annexure A.1 for detailed fatigue states.\n' +
                    'The published life of the aircraft wings are 269 FI.\n' +
                    '\n' +
                    'Engines:\n' +
                    'The aircraft are fitted with Rolls Royce Spey 10101 engines (refer Annexure A.1 for serial numbers and engine life). Each engine has a published life of 1200 hours, time before overhaul. They are original build engines and have been returned to Rolls Royce during their life for upgrades and repairs only and have never been overhauled.\n' +
                    'The engines are started by means of an external LP air start trolley which delivers low pressure air via a hose connected to each engine starter.\n' +
                    '\n' +
                    'Ejection Seats:\n' +
                    'The aircraft are equipped with Martin Baker Type 6MS B2 rocket assisted ejection seats. These seats have been serviced by Thunder City AMO (refer Annexure A.1 for details) including the survival packs and parachutes.\n' +
                    '\n' +
                    'Drop Tanks:\n' +
                    'The aircraft are capable of carrying two external 250 gallon slipper tanks, one on each wing. They are jettisonable and are fitted on the inboard station on each wing. As a safety measure the explosive jettison circuit is not armed although the tanks are fitted. They are therefore an integral part of the aircraft and cannot be remotely jettisoned.\n' +
                    '\n' +
                    'Electrical System:\n' +
                    'Two 30 kVA, 200V, 400 Hz a.c. generators provide the primary source of electrical power. One air cooled generator is driven by each engine through the Constant Speed Drive Unit (CSDU). From the 200V ac supply, a 115V ac supply is obtained through a step down transformer, and a 28V dc supply obtained through two transformer/rectifier units. Should the generating system fail the battery is automatically isolated from all but essential services.\n' +
                    '\n' +
                    'Radios:\n' +
                    'The aircraft are equipped with the following radio equipment:\n' +
                    'Marconi AD120 - VHF Comm - Qty 1\n' +
                    'Plessey PTR 1751 - UHF Comm - Qty 1\n' +
                    'Hoffman RT636 - TACAN - Qty 1\n' +
                    'Cossar 1520 - Transponder - Qty 1\n' +
                    'Smiths - ILS System - Qty 1\n' +
                    'Smiths - Radio Altimeter - Qty 1\n' +
                    '\n' +
                    'Systems:\n' +
                    'The main flying control surfaces are controlled by an orthodox control column and rudder pedals, operation being effected by hydraulically-powered control units.\n' +
                    '\n' +
                    'Each power unit, one for each aileron, one for the rudder and one for the tail plane, is fully duplicated by a tandem ram served by two independent hydraulic systems.\n' +
                    '\n' +
                    'Power, for the two flying controls hydraulic systems, is supplied by two pumps, one on each engine right hand gearbox. Each pump serves one half of each of the four powered control units so that, in the event of failure of either engine or pump, the flying controls remain operative.\n' +
                    '\n' +
                    'Two more hydraulic pumps, one on each right hand gearbox, provide power for the general services hydraulic system. The general services include:\n' +
                    'Landing Gear\n' +
                    'Nose wheel steering\n' +
                    'Wheel brakes\n' +
                    'Wing flaps\n' +
                    'Bomb door\n' +
                    'Air brakes\n' +
                    'Wing fold mechanism\n' +
                    'Arrestor hook\n' +
                    'Tail skid\n' +
                    'Fuel flow proportioners.\n' +
                    '\n' +
                    'This system can, under certain emergency conditions, supply hydraulic pressure to one of the two flying control hydraulic systems.\n' +
                    '\n' +
                    'To improve stability and control at low speeds, a blowing system is provided. Air, tapped from the engine compressors, is blown over the aerofoils and horizontal control surfaces. This system supplies air from the engine bleed manifold beneath each engine to ducts in the leading and trailing edges of the main planes and the leading edge of the tail plane. From these ducts the air is directed through the span wise blowing slits over sections of the aerofoil surfaces for boundary layer control purposes.\n' +
                    '\n' +
                    'An auto-pilot/autostabilizer system is fitted and connected electrically to an actuator, which forms an integral part of each powered flying control unit. Safety devices are incorporated in the flying control mechanical circuits to ensure reversion to manual mode of operation in the event of malfunctioning of the auto-pilot/autostabilizer system. For emergency use following autostabilizer yaw channel failure, a standby yaw damper system is fitted which operates an electro-mechanical actuator in the mechanical input to the rudder powered control unit.\n' +
                    '\n' +
                    'Operational Aspects:\n' +
                    'The Aircrew manual states that the fuel recuperators provide sufficient fuel for 10 seconds inverted operation only.\n' +
                    '\n' +
                    'The oxygen system is fully operational, as is the oxygen system on each ejector seat. The cabin pressurization and anti-g systems are operational, as is the windscreen de-icing.\n' +
                    'The arrestor hook is also fully operational for emergency landings on airfields fitted with an arrestor wire.\n' +
                    '\n' +
                    'Manuals:\n' +
                    'A full set of manuals relating to the maintenance of the aircraft and associated equipment is available to the operator as listed in AP101B-1202-1B, Cover 1.\n' +
                    '\n' +
                    'Noise Certification:\n' +
                    'The aircraft does not require a noise certificate as it operates on an Authority to Fly.\n' +
                    '\n' +
                    'Limitations and Concessions:\n' +
                    'The aircraft must be operated in accordance with the Flight Reference Cards (AP101B-1202-14), Aircrew Manual (AP101B01202-15A) and Operating Data Manual (AP101B-1202-16(R)).'
            },
        },
        {
            NAME: 'Blackburn Buccaneer S Mk.2B ZU-BCR',
            TOPIMAGE: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-BCR/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-BCR/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Buccaneer S Mk 2B\n' +
                    'Aircraft Type: Buccaneer S Mk 2B\n' +
                    'Registration: ZU-BCR\n' +
                    'Service Registration: XW987',
                History: 'The Blackburn Buccaneer was a British low-level strike aircraft with nuclear weapon delivery capability serving with the Royal Navy and the Royal Air Force between 1962 and 1994, including service in the 1991 Gulf War. Designed and initially produced by Blackburn Aircraft at Brough it was later known as the Hawker Siddeley Buccaneer when Blackburn became a part of the Hawker Siddeley group.\n' +
                    '\n' +
                    'The final three, all owned by Thunder City (XW 986 – now ZU NIP , XW 987 – now ZU BCR and XW 988 – now ZU AVI ) were built specifically for the Defence Ministry (MoD) and primarily used on countless research programs.\n' +
                    '\n' +
                    'The Buccaneer was a mid-wing, twin-engine monoplane with a crew of two seated in tandem under a sliding canopy. To meet the demands of the specification, the Buccaneer featured a number of advanced design features. The fuselage was area ruled; meaning it was designed to reduce drag at transonic speeds. This gives rise to the characteristic curvy "Coke bottle" shape. It featured a variable incidence tailplane that could be trimmed to suit the particular requirements of low-speed handling or high-speed flight. At the low-levels and high speeds traditional bomb bay doors could not be opened safely into the air stream, therefore doors were developed that rotated into the fuselage to expose the payload. This was also useful in assisting ground-level access.\n' +
                    '\n' +
                    'The small wing of the Buccaneer was suited to high-speed flight at low level. Such a wing, however, did not generate the lift that was essential for low-speed carrier operations. Therefore, the wing and horizontal stabiliser were "blown" by bleeding compressor gas from the engine through surface vents. A consequence of the blown wing was that the engines were required to run at high power for low-speed flight in order to generate sufficient compressor gas for blowing. Blackburn\'s solution to this situation was to provide a large airbrake. The tail cone was formed from two leaves that could be hydraulically opened into the airstream to decelerate the aircraft. The nose cone and radar antenna could also be swung around by 180° to reduce the length of the aircraft in the carrier hangar. This feature was particularly important as contemporary British aircraft carriers were small.',
                Description: 'The Buccaneer S Mk 2B is an updated version of the Mk 1 aircraft. Although retaining the main features of the earlier version i.e., the moderately swept, blended-kink main planes, a high-set, all moving tail plane and a cone shaped rear fuselage extension (which opens clamshell fashion to serve as an air brake), the Mk 2 Series aircraft can be distinguished by the larger engine intakes of elliptical section and the absence of the small auxiliary air intakes on the inboard side of each engine air intake and leading edge of each inner wing.\n' +
                    'An improved a.c. generating system and the introduction of the Rolls Royce Spey engine power units formed the major changes to this already successful aircraft.\n' +
                    'A full description of the aircraft can be found in AP101B-1202-1B.\n' +
                    '\n' +
                    'The aircraft have been subjected to regular Primary Star Inspections. Refer to Annexure A.1 for information relating to the next service requirement.',
                Aircraft_information: 'Modification State:\n' +
                    'The aircraft have been modified to the latest modification state as defined in the Master Modification Listing. All Mandatory modifications have been complied with.\n' +
                    'In addition all STI’s and SI’s have been complied with, including all NDT requirements.\n' +
                    '\n' +
                    'Fatigue State:\n' +
                    'All of the fatigue records for this aircraft are available.\n' +
                    'Refer Annexure A.1 for detailed fatigue states.\n' +
                    'The published life of the aircraft wings are 269 FI.\n' +
                    '\n' +
                    'Engines:\n' +
                    'The aircraft are fitted with Rolls Royce Spey 10101 engines (refer Annexure A.1 for serial numbers and engine life). Each engine has a published life of 1200 hours, time before overhaul. They are original build engines and have been returned to Rolls Royce during their life for upgrades and repairs only and have never been overhauled.\n' +
                    'The engines are started by means of an external LP air start trolley which delivers low pressure air via a hose connected to each engine starter.\n' +
                    '\n' +
                    'Ejection Seats:\n' +
                    'The aircraft are equipped with Martin Baker Type 6MS B2 rocket assisted ejection seats. These seats have been serviced by Thunder City AMO (refer Annexure A.1 for details) including the survival packs and parachutes.\n' +
                    '\n' +
                    'Drop Tanks:\n' +
                    'The aircraft are capable of carrying two external 250 gallon slipper tanks, one on each wing. They are jettisonable and are fitted on the inboard station on each wing. As a safety measure the explosive jettison circuit is not armed although the tanks are fitted. They are therefore an integral part of the aircraft and cannot be remotely jettisoned.\n' +
                    '\n' +
                    'Electrical System:\n' +
                    'Two 30 kVA, 200V, 400 Hz a.c. generators provide the primary source of electrical power. One air cooled generator is driven by each engine through the Constant Speed Drive Unit (CSDU). From the 200V ac supply, a 115V ac supply is obtained through a step down transformer, and a 28V dc supply obtained through two transformer/rectifier units. Should the generating system fail the battery is automatically isolated from all but essential services.\n' +
                    '\n' +
                    'Radios:\n' +
                    'The aircraft are equipped with the following radio equipment:\n' +
                    'Marconi AD120 - VHF Comm - Qty 1\n' +
                    'Plessey PTR 1751 - UHF Comm - Qty 1\n' +
                    'Hoffman RT636 - TACAN - Qty 1\n' +
                    'Cossar 1520 - Transponder - Qty 1\n' +
                    'Smiths - ILS System - Qty 1\n' +
                    'Smiths - Radio Altimeter - Qty 1\n' +
                    '\n' +
                    'Systems:\n' +
                    'The main flying control surfaces are controlled by an orthodox control column and rudder pedals, operation being effected by hydraulically-powered control units.\n' +
                    '\n' +
                    'Each power unit, one for each aileron, one for the rudder and one for the tail plane, is fully duplicated by a tandem ram served by two independent hydraulic systems.\n' +
                    '\n' +
                    'Power, for the two flying controls hydraulic systems, is supplied by two pumps, one on each engine right hand gearbox. Each pump serves one half of each of the four powered control units so that, in the event of failure of either engine or pump, the flying controls remain operative.\n' +
                    '\n' +
                    'Two more hydraulic pumps, one on each right hand gearbox, provide power for the general services hydraulic system. The general services include:\n' +
                    'Landing Gear\n' +
                    'Nose wheel steering\n' +
                    'Wheel brakes\n' +
                    'Wing flaps\n' +
                    'Bomb door\n' +
                    'Air brakes\n' +
                    'Wing fold mechanism\n' +
                    'Arrestor hook\n' +
                    'Tail skid\n' +
                    'Fuel flow proportioners.\n' +
                    'This system can, under certain emergency conditions, supply hydraulic pressure to one of the two flying control hydraulic systems.\n' +
                    '\n' +
                    'To improve stability and control at low speeds, a blowing system is provided. Air, tapped from the engine compressors, is blown over the aerofoils and horizontal control surfaces. This system supplies air from the engine bleed manifold beneath each engine to ducts in the leading and trailing edges of the main planes and the leading edge of the tail plane. From these ducts the air is directed through the span wise blowing slits over sections of the aerofoil surfaces for boundary layer control purposes.\n' +
                    '\n' +
                    'An auto-pilot/autostabilizer system is fitted and connected electrically to an actuator, which forms an integral part of each powered flying control unit. Safety devices are incorporated in the flying control mechanical circuits to ensure reversion to manual mode of operation in the event of malfunctioning of the auto-pilot/autostabilizer system. For emergency use following autostabilizer yaw channel failure, a standby yaw damper system is fitted which operates an electro-mechanical actuator in the mechanical input to the rudder powered control unit.\n' +
                    '\n' +
                    'Operational Aspects:\n' +
                    ' \n' +
                    'The Aircrew manual states that the fuel recuperators provide sufficient fuel for 10 seconds inverted operation only.\n' +
                    'The oxygen system is fully operational, as is the oxygen system on each ejector seat. The cabin pressurization and anti-g systems are operational, as is the windscreen de-icing.\n' +
                    'The arrestor hook is also fully operational for emergency landings on airfields fitted with an arrestor wire.\n' +
                    '\n' +
                    'Manuals:\n' +
                    'A full set of manuals relating to the maintenance of the aircraft and associated equipment is available to the operator as listed in AP101B-1202-1B, Cover 1.\n' +
                    '\n' +
                    'Noise Certification:\n' +
                    'The aircraft does not require a noise certificate as it operates on an Authority to Fly.\n' +
                    '\n' +
                    'Limitations and Concessions:\n' +
                    'The aircraft must be operated in accordance with the Flight Reference Cards (AP101B-1202-14), Aircrew Manual (AP101B01202-15A) and Operating Data Manual (AP101B-1202-16(R)).'
            },
        },
        {
            NAME: 'Blackburn Buccaneer S Mk.2B ZU-NIP',
            TOPIMAGE: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-NIP/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Blackburn Buccaneer S Mk.2B ZU-NIP/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Buccaneer S Mk 2B\n' +
                    'Registration: ZU-NIP\n' +
                    'Service Registration: XW986',
                History: 'The Blackburn Buccaneer was a British low-level strike aircraft with nuclear weapon delivery capability serving with the Royal Navy and the Royal Air Force between 1962 and 1994, including service in the 1991 Gulf War. Designed and initially produced by Blackburn Aircraft at Brough it was later known as the Hawker Siddeley Buccaneer when Blackburn became a part of the Hawker Siddeley group.\n' +
                    '\n' +
                    'The final three, all owned by Thunder City (XW 986 – now ZU NIP , XW 987 – now ZU BCR and XW 988 – now ZU AVI ) were built specifically for the Defence Ministry (MoD) and primarily used on countless research programs.\n' +
                    '\n' +
                    'The Buccaneer was a mid-wing, twin-engine monoplane with a crew of two seated in tandem under a sliding canopy. To meet the demands of the specification, the Buccaneer featured a number of advanced design features. The fuselage was area ruled; meaning it was designed to reduce drag at transonic speeds. This gives rise to the characteristic curvy "Coke bottle" shape. It featured a variable incidence tailplane that could be trimmed to suit the particular requirements of low-speed handling or high-speed flight. At the low-levels and high speeds traditional bomb bay doors could not be opened safely into the air stream, therefore doors were developed that rotated into the fuselage to expose the payload. This was also useful in assisting ground-level access.\n' +
                    '\n' +
                    'The small wing of the Buccaneer was suited to high-speed flight at low level. Such a wing, however, did not generate the lift that was essential for low-speed carrier operations. Therefore, the wing and horizontal stabiliser were "blown" by bleeding compressor gas from the engine through surface vents. A consequence of the blown wing was that the engines were required to run at high power for low-speed flight in order to generate sufficient compressor gas for blowing. Blackburn\'s solution to this situation was to provide a large airbrake. The tail cone was formed from two leaves that could be hydraulically opened into the airstream to decelerate the aircraft. The nose cone and radar antenna could also be swung around by 180° to reduce the length of the aircraft in the carrier hangar. This feature was particularly important as contemporary British aircraft carriers were small.',
                Description: 'The Buccaneer S Mk 2B is an updated version of the Mk 1 aircraft. Although retaining the main features of the earlier version i.e., the moderately swept, blended-kink main planes, a high-set, all moving tail plane and a cone shaped rear fuselage extension (which opens clamshell fashion to serve as an air brake), the Mk 2 Series aircraft can be distinguished by the larger engine intakes of elliptical section and the absence of the small auxiliary air intakes on the inboard side of each engine air intake and leading edge of each inner wing.\n' +
                    'An improved a.c. generating system and the introduction of the Rolls Royce Spey engine power units formed the major changes to this already successful aircraft.\n' +
                    'A full description of the aircraft can be found in AP101B-1202-1B.\n' +
                    '\n' +
                    'The aircraft have been subjected to regular Primary Star Inspections. Refer to Annexure A.1 for information relating to the next service requirement.',
                Aircraft_information: 'Modification State:\n' +
                    'The aircraft have been modified to the latest modification state as defined in the Master Modification Listing. All Mandatory modifications have been complied with.\n' +
                    'In addition all STI’s and SI’s have been complied with, including all NDT requirements.\n' +
                    '\n' +
                    'Fatigue State:\n' +
                    'All of the fatigue records for this aircraft are available.\n' +
                    'Refer Annexure A.1 for detailed fatigue states.\n' +
                    'The published life of the aircraft wings are 269 FI.\n' +
                    '\n' +
                    'Engines:\n' +
                    'The aircraft are fitted with Rolls Royce Spey 10101 engines (refer Annexure A.1 for serial numbers and engine life). Each engine has a published life of 1200 hours, time before overhaul. They are original build engines and have been returned to Rolls Royce during their life for upgrades and repairs only and have never been overhauled.\n' +
                    'The engines are started by means of an external LP air start trolley which delivers low pressure air via a hose connected to each engine starter.\n' +
                    '\n' +
                    'Ejection Seats:\n' +
                    '\n' +
                    'The aircraft are equipped with Martin Baker Type 6MS B2 rocket assisted ejection seats. These seats have been serviced by Thunder City AMO (refer Annexure A.1 for details) including the survival packs and parachutes.\n' +
                    '\n' +
                    'Drop Tanks:\n' +
                    'The aircraft are capable of carrying two external 250 gallon slipper tanks, one on each wing. They are jettisonable and are fitted on the inboard station on each wing. As a safety measure the explosive jettison circuit is not armed although the tanks are fitted. They are therefore an integral part of the aircraft and cannot be remotely jettisoned.\n' +
                    '\n' +
                    'Electrical System:\n' +
                    'Two 30 kVA, 200V, 400 Hz a.c. generators provide the primary source of electrical power. One air cooled generator is driven by each engine through the Constant Speed Drive Unit (CSDU). From the 200V ac supply, a 115V ac supply is obtained through a step down transformer, and a 28V dc supply obtained through two transformer/rectifier units. Should the generating system fail the battery is automatically isolated from all but essential services.\n' +
                    '\n' +
                    'Radios:\n' +
                    'The aircraft are equipped with the following radio equipment:\n' +
                    'Marconi AD120 - VHF Comm - Qty 1\n' +
                    'Plessey PTR 1751 - UHF Comm - Qty 1\n' +
                    'Hoffman RT636 - TACAN - Qty 1\n' +
                    'Cossar 1520 - Transponder - Qty 1\n' +
                    'Smiths - ILS System - Qty 1\n' +
                    'Smiths - Radio Altimeter - Qty 1\n' +
                    '\n' +
                    'Systems:\n' +
                    'The main flying control surfaces are controlled by an orthodox control column and rudder pedals, operation being effected by hydraulically-powered control units.\n' +
                    '\n' +
                    'Each power unit, one for each aileron, one for the rudder and one for the tail plane, is fully duplicated by a tandem ram served by two independent hydraulic systems.\n' +
                    '\n' +
                    'Power, for the two flying controls hydraulic systems, is supplied by two pumps, one on each engine right hand gearbox. Each pump serves one half of each of the four powered control units so that, in the event of failure of either engine or pump, the flying controls remain operative.\n' +
                    '\n' +
                    'Two more hydraulic pumps, one on each right hand gearbox, provide power for the general services hydraulic system. The general services include:\n' +
                    'Landing Gear\n' +
                    'Nose wheel steering\n' +
                    'Wheel brakes\n' +
                    'Wing flaps\n' +
                    'Bomb door\n' +
                    'Air brakes\n' +
                    'Wing fold mechanism\n' +
                    'Arrestor hook\n' +
                    'Tail skid\n' +
                    'Fuel flow proportioners.\n' +
                    '\n' +
                    'This system can, under certain emergency conditions, supply hydraulic pressure to one of the two flying control hydraulic systems.\n' +
                    '\n' +
                    'To improve stability and control at low speeds, a blowing system is provided. Air, tapped from the engine compressors, is blown over the aerofoils and horizontal control surfaces. This system supplies air from the engine bleed manifold beneath each engine to ducts in the leading and trailing edges of the main planes and the leading edge of the tail plane. From these ducts the air is directed through the span wise blowing slits over sections of the aerofoil surfaces for boundary layer control purposes.\n' +
                    '\n' +
                    'An auto-pilot/autostabilizer system is fitted and connected electrically to an actuator, which forms an integral part of each powered flying control unit. Safety devices are incorporated in the flying control mechanical circuits to ensure reversion to manual mode of operation in the event of malfunctioning of the auto-pilot/autostabilizer system. For emergency use following autostabilizer yaw channel failure, a standby yaw damper system is fitted which operates an electro-mechanical actuator in the mechanical input to the rudder powered control unit.\n' +
                    '\n' +
                    'Operational Aspects:\n' +
                    'The Aircrew manual states that the fuel recuperators provide sufficient fuel for 10 seconds inverted operation only.\n' +
                    'The oxygen system is fully operational, as is the oxygen system on each ejector seat. The cabin pressurization and anti-g systems are operational, as is the windscreen de-icing.\n' +
                    'The arrestor hook is also fully operational for emergency landings on airfields fitted with an arrestor wire.\n' +
                    '\n' +
                    'Manuals:\n' +
                    'A full set of manuals relating to the maintenance of the aircraft and associated equipment is available to the operator as listed in AP101B-1202-1B, Cover 1.\n' +
                    '\n' +
                    'Noise Certification:\n' +
                    'The aircraft does not require a noise certificate as it operates on an Authority to Fly.\n' +
                    '\n' +
                    'Limitations and Concessions:\n' +
                    'The aircraft must be operated in accordance with the Flight Reference Cards (AP101B-1202-14), Aircrew Manual (AP101B01202-15A) and Operating Data Manual (AP101B-1202-16(R)).'
            },
        },
        {
            NAME: 'Hawker Hunter F. Mk6A ZU-AUJ',
            TOPIMAGE: importAll(require.context('../planes/Hawker Hunter F. Mk6A ZU-AUJ/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Hawker Hunter F. Mk6A ZU-AUJ/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Hunter F. Mk6A\n' +
                    'Registration: ZU-AUJ\n' +
                    'Service Registration: XE653',
                Status_unnamed: 'We are delighted to be acting on behalf of Thunder City Aircraft Company (Pty) Limited in the sale of their fleet of Hunters, Buccaneers and Lightnings.\n' +
                    'ZU-AUJ is one of four Hunters we have listed and is a single-seat F. Mk6A version of this famous Cold War fighter.',
                History: 'Hawker 1025 based on the Gloster E28 general layout with a 35° sweep back. Powered by the Rolls Royce Nene engine rated at 5,200 pounds of thrust. This was in 1947. by 16 May 1953, production went ahead on the Hunter F with the Rolls Royce Avon Mk 10501 engine without reheat rated at 6 500 pounds of thrust.\n' +
                    'This aircraft, which spent nearly five years with 111 Squadron’s Black Arrows display team, was built at the HAL plant at Kingston in England and first flown on 6 July 1956. It was one of the twenty-two Hunters that performed the record-breaking formation loop at the 1958 Farnborough Air Show. Converted to K.MK.6a configuration in 1975,it spent most of its life with various RAF squadrons including the Tactical Weapons Unit as a ground attack and air to air combat aircraft and was later flown to Cape Town via Bari, Luxor, Khartoum, Addis Abbaba, Nairobi, Lilongwe and Johannesburg. It is one of the only three F6A’s still flying and widely considered to be the finest variant of the marque.',
                Aircraft_information: 'Power plants: Rolls Royce Avon Mk 207C – 15 stage axial flow turbojet rated at 10 200 pounds of thrust\n' +
                    'Performance: Rate of climb 20 000 feet per minute\n' +
                    'Max level speed: 1,150 km/h or Mach0.97\n' +
                    'Combat radius: 720nm Hi-Lo-Hi\n' +
                    'Max ferry range: 1,840nm or 2960 km\n' +
                    'Average clean gross weight: 16 – 18,000 pounds\n' +
                    'Max ferry takeoff weight: 24:000 pounds\n' +
                    'Fuel load: 3,000 pounds or 1,900 litre internal\n' +
                    'Two 150 gallon drop tanks and 100 gallon tanks\n' +
                    '\n' +
                    'Dimensions: \n' +
                    'Wingspan – 33 feet \n' +
                    'Length – 45 feet\n' +
                    'Height – 13 feet',
            },
        },
        {
            NAME: 'Hawker Hunter T. Mk7 ZU-LEE',
            TOPIMAGE: importAll(require.context('../planes/Hawker Hunter T. Mk7 ZU-LEE/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Hawker Hunter T. Mk7 ZU-LEE/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Hunter T. Mk7\n' +
                    'Registration: ZU-LEE\n' +
                    'Service Registration: XL613',
                Status_unnamed: 'We are delighted to be acting on behalf of Thunder City Aircraft Company (Pty) Limited in the sale of their fleet of Hunters, Buccaneers and Lightnings.\n' +
                    'ZU-LEE is one of four Hunters we have listed and is a two-seat T. Mk8A version of this famous Cold War fighter.',
            },
        },
        {
            NAME: 'Hawker Hunter T. Mk8C ZU-ATH',
            TOPIMAGE: importAll(require.context('../planes/Hawker Hunter T. Mk8C ZU-ATH/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            IMAGES: importAll(require.context('../planes/Hawker Hunter T. Mk8C ZU-ATH/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
            CONTENT: {
                General_information: 'Aircraft Type: Hunter T. Mk8C\n' +
                    'Registration: ZU-ATH\n' +
                    'Service Registration: XL598',
                Status_unnamed: 'We are delighted to be acting on behalf of Thunder City Aircraft Company (Pty) Limited in the sale of their fleet of Hunters, Buccaneers and Lightnings.\n' +
                    'ZU-ATH is one of four Hunters we have listed and is a two-seat T. Mk8C version of this famous Cold War fighter.',
                Introduction: 'This aircraft was one of ten Mk.7’s transferred to Royal Navy contract, while on the HAL production line at Kingston and completed to Mk.8 specifications. An arrester hook was added for short field landings. First flown on 15 October 1958, it was operated by the Royal Navy and saw services with the major training establishments, 738 and 764 Squadrons. The aircraft was flown to Exeter airport for preparation and the onward ferry flight to Cape Town, arriving in April 1995.',
                Aircraft_build_standart: 'The Hawker Hunter T8C is the Naval version (with arrester hook) of the RAF\'s T7 which is capable of carrying 4 drop tanks. It is a two seat side-by-side trainer/operational version of the single seat fighter monoplane powered by a Rolls Royce Mk 12201 turbine engine. This aircraft was built as a T8C under contract number 6/ACFT/12626/CB9(c) and the constructors number given above is that of the fuselage. Copies of the Hawker Aviation Ltd records define this build standard together with modification statement and statement of compliance with Special Technical Instructions current at the time. A detailed description of the aircraft may be obtained by reference to the publications listed in section 6 below.',
                Approval_basis: 'The original basis of Service acceptance is AvP-970, the type record exists and British Aerospace Farnborough is still responsible for the design. CAA approval is based on the satisfactory service history of the type and the approved maintenance schedules.',
                Technical_information: 'Armament originally consisted of one 30 mm Aden cannon in the lower forward fuselage but this has been deleted and replaced with appropriate ballast. All historical documentation is available. An electrically actuated follow-up tailplane provides longitudinal trim and a back-up actuator is incorporated. The ailerons and elevators are hydraulically boosted with manual reversion (automatic as hydraulic pressure becomes low). Undercarriage incorporates Maxaret anti-lock units and in the event of hydraulic system failure air bottles provide undercarriage blow-down and operation of flaps and wheel brakes.',
                Modification_state: 'The aircraft has been modified to the latest modification state as required for airworthiness. All Mandatory modifications have been complied with. All relevant SI\'s and STI\'s have been complied with, including special NDT requirements.',
                Fatique_state: 'A Mk14 Fatigue Meter has been fitted to the aircraft for its entire life (the current meter is serial number 3274-M-67 and the operational life consumed has been accounted for in accordance with AP101B-1302-1 Section 2 Chapter 3.)\n' +
                    '\n' +
                    'At aircraft hours 8517.1 hours the FI was:',
                part_table_unnamed: {
                    tHead: ['Part limit remaining', 'Serial No.', 'FI', 'FI', 'FI'],
                    row_1: ['Centre fuselage', '41H-695320', '43.481766', '100', '56.158234'],
                    row_2: ['Port Mainplane', '41H-692311', '66.915134', '111', '44.084866'],
                    row_3: ['Stbd mainplane', '41H-xxxxxx', 'tbc', '111', ''],
                },
                Engine: 'The installed Rolls Royce Avon Mk 12201 engine Serial Number 7392/A654159 was reconditioned by Rolls Royce, East Kilbride on 28th October 1992. It was installed into this aircraft on 14th January 1993 at 7973.55 hours. The reconditioning life is 900 hours with a \'Hot Section\' due at 450 hours, time since overhaul. The time remaining to this \'Hot Section\' is 358.15 hours. The engine is to the latest mod state and has a new LP disc and blades. (see Rolls Royce print-out of Group A parts) Engine cycle usage rate (including ground running carried out in lieu of corrosion inhibiting) is to be accounted in accordance with Rolls Royce Manual viz. 4.0 cycles equivalent to 1 flight hour.\n' +
                    '\n' +
                    'A triple breech cartridge starter is fitted. Fire warning and extinguisher systems are provided and operational. The oil supply system limits negative \'g\' to 10 seconds operation only.',
                Ejection_seats: 'The two Martin-Baker type 4HA(N) Mk 1 seats serial No\'s R76 and R81 have been serviced in accordance with AP109B-0131-12. The parachutes and survival packs have also been serviced in accordance with the relevant Air Publications.',
                Drop_tanks: 'The aircraft is cleared to carry 2 x 230 gallon drop tanks on the inboard pylons only provided no more than 4 g was applied with fuel in the tanks or 5 g with tanks empty.',
                Weight_and_balance: 'The aircrafts weight is 13,347 lbs. The CG is at 0.45 in aft.',
                Electrical_system: 'In the event of generator failure, a dolls eye provides warning that battery power is being consumed. A load analysis confirms that battery duration is adequate for 30 mins flight (in accordance with Airworthiness Notice 88) in this event and load shedding procedures are contained in the applicants supplement to the Aircrew Manual.',
                Radio: 'The following military radio equipment has been retained:',
                radio_table_unnamed: {
                    tHead: ['Number of parts', 'Function', 'Manufacturer', 'Type'],
                    row_1: ['1', 'CHF Comm', 'Marconi', 'AD120'],
                    row_2: ['1', 'UHF', 'Marconi', 'PTR1751'],
                    row_3: ['1', 'Transponder', 'Cossor', 'SSR1520'],
                },
                Operational_aspects: 'The Aircrew Manual states that the negative \'g\' fuel traps provide capacity for "approximately 10 seconds" of negative \'g\' flight.\n' +
                    '\n' +
                    'The brake parachute is not to be relied upon in order to enable planned landing at a field shorter than that which would be required without this parachute. The brake parachute is to be employed only to save wear on the undercarriage, tyres and brakes. The Mk 5D gaseous oxygen system is fully operational, as is the oxygen system on each ejector seat, and altitude will thus be limited by radio fit for compliance with the Air Navigation Order. The cabin pressurisation and anti-g systems are operational, as is windscreen de-icing.\n' +
                    '\n' +
                    'Although not a formal limitation the MoD documentation covering release to service cautions that engine response will be degraded if rpm is allowed to fall below 4500 on approach.',
                Manuals: 'A complete set of manuals AP101B-1309 (previously referenced AP 4347) including Bay Servicing requirements and the following is available:',
                Servicing_requirements_list_unnamed:
                    'AP101B-1305 and 6-15 Aircrew Manual\n' +
                    'AP101B-1311-14 Flight Reference Cards\n' +
                    'AP101B-1302-1 Hunter Aircraft Servicing Manual\n' +
                    'AP 100E-01B Avon Mk 122 Engine Maintenance Manual',
                Noise_certification: 'A noise certificate is not required for this aircraft as it operates on a Permit to Fly.',
                Limitations_and_concessions: 'Airframe and Engine limitations are given in AP 101B-1305 and 6-15 Aircrew Manual, except that those below are to be employed where they are different (* - to be placarded or otherwise marked on gauges):\n' +
                    '\n' +
                    'Aerobatics are permitted in accordance with the Pilots Notes, but flick maneuvers and intentional stalling and spinning are prohibited.',
                Load_factor_table: {
                    row_1: ['Clean', '+7/-3.75 g'],
                    row_2: ['Empty 230 gallon drop tanks fitted', '+5/-3.75 g'],
                    row_3: ['With fuel in 230 gallon drop tanks', '+4/-3.75 g'],
                },
                Limitations_and_concessions2_unnamed:
                    'Negative g is limited to 10 seconds duration only.\n' +
                    '\n' +
                    'C of G to be between 1.0 inches forward of datum and 14.5 inches aft of datum. Datum is marked by a spigot in the main undercarriage bay.\n' +
                    '\n' +
                    'Weights: Maximum take-off 25000 lb\n' +
                    'Normal landing 18500 lb\n' +
                    'Emergency landing weight 23400 lb\n' +
                    '\n' +
                    'Airspeed limitations (see AP101B-1305 and 6-15) summary follows:',
                Airspeed_limitations_list_unnamed:
                    'Max speed clean or 100 gall tanks inboard only 620 knots (no Mach limit)\n' +
                    'Max speed, manual controls below 15000 ft 0.75 Mach (0.85M above 15000 ft)\n' +
                    'Undercarriage operation/deployed 250 knots\n' +
                    'Flaps 0° to 38° 300 knots (or 0.9M - lesser)\n' +
                    '>38° and fully down 250 knots\n' +
                    'Max crosswind (dry runway) 25 kts (20 kts wet runway)',
                Break_section_unnamed: '\n'
                    + 'Engine limitations (see AP101B-1305 and 6-15) summary follows:',
                Engine_limitations_table_unnamed: {
                    tHead: ['Rating', '% RPM', 'JPT(°C)', 'Duration'],
                    row_1: ['Take-off', '96-97.5', '690', '10 mins'],
                    row_2: ['Intermediate', '95.5', '655', '30 mins'],
                    row_3: ['Max continuous', '92.5', '625', '-'],
                    row_4: ['Ground Idling', '35-37', '525', '-']
                },
                Break_section2_unnamed: 'Recommend 4500 rpm minimum on approach.\n' +
                    '\n' +
                    'Day VMC only.\n' +
                    '\n' +
                    'No smoking.\n' +
                    '\n' +
                    'Reliance is not to be placed on the brake parachute when planning a landing. It is not to be streamed before touchdown and the limit speed for streaming is 160 knots.\n' +
                    '\n' +
                    'Fatigue is to be accounted in accordance with section above after each days flight.\n' +
                    '\n' +
                    'Altitude is limited to 10000 ft while the oxygen system is not operational.',
            },
        },
    ]
;