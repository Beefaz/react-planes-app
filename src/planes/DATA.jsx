const importAll = r => r.keys().map(r);
/*

    {
        NAME: '',
        TOPIMAGE: importAll(require.context('../planes//TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes//OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Aircraft_information: '',
            History: '',
        },
    },
 */
export const ITEMS = [
    {
        NAME: 'Vickers Supermarine Seafire III',
        TOPIMAGE: importAll(require.context('../planes/Vickers Supermarine Seafire III/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/Vickers Supermarine Seafire III/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Aircraft_information: 'Airframe: A highly original aircraft with only 42,25 hours\n' +
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
            Aircraft_information: 'Vickers Supermarine Spitfire MK Vb LF\n' +
                'Serial No BL688\n' +
                'UK CAA Registration - G-CJWO\n' +
                '\n' +
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
            Aircraft_information: 'North American P-51 Mustang 44-63350\n' +
                'Registration: N51TK\n' +
                'Price - 1.8 Million\n' +
                '\n' +
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
            Aircraft_information: 'C. 1990 SOPWITH DOVE TWO-SEAT BIPLANE\n' +
                'REGISTRATION NO. G-EAGA\n' +
                'CONSTRUCTION NO. 3004/1\n' +
                '\n' +
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
            Aircraft_information: 'Manufacturer: Consolidated (Canadian Vickers)\n' +
                'Year Built: 1943\n' +
                'Construction No: CV 332\n' +
                'Current Reg: CC-CDT\n' +
                'Previous Reg: \n' +
                'Last Military Serial no: USAAF 44-34085\n' +
                '\n' +
                'Year: 1943\n' +
                '\n' +
                'Serial Number: CV-332 \n' +
                '\n' +
                'Airframe Hours 7.193\n' +
                'Engines: Make/Model: PRATT & WHITNEY / R-1830-92\n' +
                'Serial Number: #1 43-99532 #2 CP304804\n' +
                'Hours: #1 = 243 & #2 = 127\n' +
                'Propellers:\n' +
                'Make/Model: HAMILTON STANDARD / 23E50-505/6477A-0\n' +
                'Serial Number: #1 - 53134 #2 - 76154\n' +
                'Hours: #1 = 232  &  #2 = 164\n' +
                'Price: $450,000 US. \n' +
                '\n' +
                'We are proud to offer to the market this superb PBY Catalina 5A.\n' +
                '\n' +
                'Approximately 3,300 PBY aircraft were built and during World War II, PBYs were used in anti-submarine warfare, patrol bombing, convoy escort, search and rescue missions (especially air-sea rescue), and cargo transport.\n' +
                '\n' +
                'The type operated in nearly all operational theatres of World War II. The Catalina served with distinction and played a prominent and invaluable role in the war against the Japanese.\n' +
                '\n' +
                'These patrol planes shared with land based patrol bombers the combat roles while the very long range Consolidated LB-30 and the Consolidated Coronado were pressed into service to increase the all important logistic strategic air lift capability in the vast Pacific theater. The pairings allowed the Catalina to take on the role of eyes of the fleets at longer ranges than the float plane scouts.\n' +
                '\n' +
                'Several different flying boats were adopted by the Navy, but the PBY was the most widely used and produced.\n' +
                '\n' +
                'Although slow and ungainly, Catalinas distinguished themselves in World War II. Allied forces used them successfully in a wide variety of roles for which the aircraft was never intended. PBYs are remembered for their rescue role, in which they saved the lives of thousands of aircrew downed over water. Catalina airmen called their aircraft the "Cat" on combat missions and "Dumbo" in air-sea rescue service.',
            History: '1944 - Constructed as a PBV-1A by Canadian Vickers.\n' +
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
            Aircraft_information: 'Manufacturer: Consolidated (Canadian Vickers) CASNO\n' +
                'Year Built: 1942\n' +
                'Construction No: CV 264\n' +
                'Current Reg: N983CF\n' +
                'Previous Reg: C-FPQK\n' +
                'Last Military Serial no: RCAF 9830\n' +
                'Price: $350,000 US. \n' +
                '\n' +
                'We are proud to offer to the market this superb PBY Catalina project. The PBY CAT is a highly desirable and popular aircraft. This PBY is currently stored disassembled in Florida, USA. The engines are in storage with Anderson Aeromotive, Idaho whilst corrosion repairs have been carried out on the hull. The entire exterior of the aircraft has been stripped back to the anodize. This aircraft is a FAA registered Standard Catagory. It was a Province of Quebec Canso and they were known for their excellent maintenance and clean airframes.\n' +
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
            Aircraft_information: 'We are pleased to offer for sale this ex South African Air Force Harvard in Central Flying School scheme with code 7637. \n' +
                '\n' +
                'Registration: ZU-BBF\n' +
                'C/N 78-7350\n' +
                'Model: SNJ-3\n' +
                'Airframe hours: 7377.4\n' +
                'Engine: Pratt & Whitney R1340\n' +
                'Engine hours: 977   TBO= 1600 hrs\n' +
                'Propeller hours: 628  TBO=1000 hrs. \n' +
                'Avionics - SAAF fit with Becker/Fuchs',
        },
    },
    {
        NAME: 'DH 82 Tiger Moth South Africa',
        TOPIMAGE: importAll(require.context('../planes/DH 82 Tiger Moth South Africa/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/DH 82 Tiger Moth South Africa/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Aircraft_information: 'Serial number - Ex T6457 South African Air Force\n' +
                'Construction number - TBA\n' +
                'Airframe Hours: Total Time 1519.20 Time since full restoration: 1 hour\n' +
                'Engine: Gypsy Major 1: Total Time: 867.20 since new Total Time since full overhaul: 4 hours\n' +
                'Current Registration: ZS-CDJ\n' +
                '\n' +
                'A ground up restoration by renowned master craftsman, the late Noel Otten. All four wings were rebuilt using Canadian Sitka Spruce which was hand selected from West Wide Hard Woods, Vancouver, Canada. The Gypsy Major was zero timed and overhauled. A detailed report of the restoration is available on request. \n' +
                'This stunning Tiger Moth is originally a UK manufactured aircraft between 1939 & 1941(the exact date of manufacture is being established. This was kept secret as SAAF aircraft did not disclose year of manufacture during WW2) The aircraft has a total of one hour on the airframe and four hours on the engine since full restoration and is being offered with an Export CofA.  \n' +
                'A tail wheel conversion has been done to ease landing on hard runways. \n' +
                'All AD’s are currently up to-date.\n' +
                'This has been a certified ground up nut and bolt restoration with no expense spared. \n' +
                '\n' +
                'English built, originally from the UK to South Africa during WW2.\n' +
                ' Asking Price : £75,000 Sterling'
        },
    },
    {
        NAME: 'Bentley BR2 Aero Engine',
        TOPIMAGE: importAll(require.context('../planes/Bentley BR2 Aero Engine/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/Bentley BR2 Aero Engine/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Status: 'SOLD\n' +
                'We are proud to offer to the market a rare Bentley B.R.2 rotary engine with serial number 101701. It has two PLR Magnetos and an oil pump and in museum quality condition. This engine is presented on an engine stand with a cut away section on one of the cylinders. An internal inspection revealed that two pistons with con rods have been removed.',
            Engine_history: 'The Bentley B.R.2 was a nine-cylinder British rotary aircraft engine developed during the First World War by the motor car engine designer W. O. Bentley from his earlier Bentley BR.1. The BR.2 was built in smaller numbers than the earlier BR.1. Its primary user being by the Royal Air Force in the early 1920s. The initial variant of the BR.2 developed 230, improving to 245 horsepower.',
            General_characteristics: 'Type: 9-cylinder rotary\n' +
                'Bore: 5.51 in (140 mm)\n' +
                'Stroke: 7.09 in (180 mm)\n' +
                'Displacement: 1521.8 in (24.94 L)\n' +
                'Dry weight: 490 lb (220 kg)\n' +
                'Components\n' +
                'Valvetrain: Overhead valve\n' +
                'Cooling system: Air-cooled\n' +
                'Performance\n' +
                'Power output: 250 hp\n' +
                'Fuel consumption: 20 gallons per hour\n' +
                'Oil consumption: 16 pints per hour\n' +
                'Power-to-weight ratio: 0.5 hp/lb\n' +
                'Major Applications: \n' +
                'Armstrong Whitworth Armadillo\n' +
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
            Status: 'SOLD\n' +
                'We are proud to present to the market a Clerget 9B rotary aircraft engine with serial number 22500. Fitted with two PLR Magnetos and an Air pump, an oil pump, Kauper gun gear. The engine is offered in museum quality condition and presented on a purpose-built engine stand. \n' +
                'Clerget-Blin was a French precision engineering company formed in 1913 by the engineer and inventor Pierre Clerget and industrialist Eugène Blin. The Clerget-Blin company mainly produced aircraft engines. Their successful rotary engine designs were also built in Britain by companies such as Gwynnes Limited, Ruston Proctor and Gordon Watney, to increase the output in the times of World War I.       Gwynnes Limited was a City of London England engineering business, iron founders and pump makers founded in 1849. During the First World War, Gwynnes workshops made Clerget rotary aircraft engines. The Clerget 9B was a nine-cylinder rotary aircraft engine of the World War I era manufactured in both France and Great Britain.',
            General_characteristics: 'Type: Nine-cylinder air-cooled rotary engine\n' +
                'Bore: 120 mm (4.72 in)\n' +
                'Stroke: 9B: 160 mm (6.30 in)\n' +
                'Displacement: 9B: 16.29 l (994.08 cu in)\n' +
                'Length: 920 mm (36.22 in)\n' +
                'Diameter: 9B: 1,020 mm (40.15 in), 9Bf: 1,030 mm (40.55 in)\n' +
                'Dry weight: 173 kg (381 lb)',
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
            Major_applications: 'Major Applications: \n' +
                'Armstrong Whitworth F.K.10\n' +
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
            Status: 'Yakovlev Design Bureau Yak-1 WW2 Soviet Fighter Project For Sale\n' +
                '​\n' +
                'We are pleased to offer for sale this extremely rare Yak-1. With an incredible combat history. This Yak -1 (G-BTZD) serial No 1342 was recovered in October 1990 from Polonets Lake in the Demlansk area of northern Russia. Locals say that the aircraft landed on the frozen lake in December 1942 after being damaged by German fighter fire. It is clear from the damage evident that the undercarriage collapsed during the landing. Bullet holes were also discovered in the coolant radiator. It is believed that the pilot escaped and returned to Russian lines. Though both the Germans and the Russians attempted to recover the aeroplane, gunfire prevented either from effecting this. During the spring the ice melted and the aircraft sank to the bottom of the lake, in 18 metres of water.',
            History: 'Sources from Russia confirm that this Yak I, number 1342, was made in 1941 at the Saratov plant and was the 13th in the 42nd series. This means that it was the 2063rd made from a total of 8721. Each batch was for a production of 50 aircraft. Although the aircraft data plate, made of thin steel was unreadable, The cowlings, ammunition boxes and several other components are clearly marked 1342, and recently discovered archive information in Russia has listed the serial number of all three guns, confirming beyond doubt this is indeed 1342. Ammunition recovered from the aircraft was found to be dated 1940. The number ‘8188’ being found on the fuselage frame hampered initial research on the aircraft, but it is now thought this number was a manufacturer’s serial number for the frame only. The Yak-1 was fitted with a Klimov engine number PA 135-1067, which means that it was built at aircraft engine plant number 26 in the third quarter of 1941, its order number being 1067. Unfortunately, this steel data plate for the engine was also corroded and it is not possible to read the number on it. \n' +
                'Yak I s/n 1342 flew with the 423 Fighter Regiment, which at the beginning of the war was part of the Moscow air defence force. Later this regiment became part of the Gorkij City anti-aircraft defence force. The aircraft then was with the 485 Fighter regiment, and its commander was Major G.V.Zimin. A main base of this regiment was Vypolzovo airfield, not far from Kalinin City (now called Twer). There was much fighting in the Derniansk ‘boiler’ where the German 16th Army was surrounded by Soviets. The regiment had Hurricanes but also a few Yak I’s. The pilot who flew the aircraft on its last sortie was Flying Officer Michael Kudrjashov. He had three victories in this aeroplane, and sometimes flew as wingman for Major Zimin. He survived the war and won many medals for his courage, ending out with 12 victories in all. \n' +
                'The aircraft was acquired by HAC in 1991, and restoration started soon after. The aircraft was of simple design, but had an all-wood wing and other flying surfaces. The glue had deteriorated during the long immersion and the decision was made to manufacture a new wing, incorporating as many of the metal fittings as possible. The airframe is being restored to the original specifications, including its original guns (de-activated) and ammunition boxes. Much of the airframe and equipment was re-usable thanks to the very cold fresh water that the aircraft was under for so many years.\n' +
                'The engine was in an amazing condition, with no corrosion - except on the steel data plate. Even the oil inside was clean and fresh, as were all the internal steel parts. The magnesium castings had dissolved and so an additional engine was sourced from the Musee de l’Air in Paris, by way of an exchange. In the meantime the original engine is being worked on as it is hoped that enough spare parts can be found to restore it.',
            Aircraft_information: 'Wing Span :  32ft 10 in (10m).\n' +
                'Length :    27ft 9.75in (8.48m).\n' +
                'Height :    9ft 10in (3m)9ft 10in (3m).\n' +
                'Power-plant : Kilmov VK-105PF 1,100 hp.\n' +
                'Weight :    6,270 lbs (2,850 kg).\n' +
                'Maximum Speed : 367mph (592km/h).\n' +
                'Service Ceiling : 32,800ft (10,000m).\n' +
                'Range :    1120 m (700 km).\n' +
                'Armament : 1x ShVAK cannon ( 20 mm, 120 rounds); 2x ShKAS machine guns (7,62 mm, 1500 rounds)\n' +
                '\n' +
                'The wing section, undercarriage, fuselage have been meticulously restored. The Kilmov V12 engine has been overhauled and run on a test rig. \n' +
                'Some £1,500,000 has been spent so far on this restoration. ',
        },
    },
    {
        NAME: 'BAC Strikemaster - 3 available',
        TOPIMAGE: importAll(require.context('../planes/BAC Strikemaster - 3 available/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/BAC Strikemaster - 3 available/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Status:'BAC STRIKEMASTER FOR SALE -  2 x MK 88\'s Plus spare engine with logbook,ground equipment and spares for only £130,000 Sterling !\n' +
                '\n' +
                'This Ex New Zealand Air Force MK88 was retired and imported into Australia in 1994.\n' +
                'The aircraft underwent a full restoration over a two-year period at which time it was repainted in two-pack to represent the aircraft flown by the Kenyan Air Force.\n' +
                'Flown regularly until placed in long-term storage in 2006, the aircraft is now offered for immediate sale with minimal work required to bring it back to fully operational status.\n' +
                'Alternatively, the aircraft can be returned to fully operational status or dismantled for shipping by qualified engineers as required.\n' +
                'Complete Military and Civilian Logs available for inspection.\n' +
                'General\n' +
                'Easy-to-fly and simple to maintain, the Strikemaster is a charismatic warbird that offers superior performance and combat credibility that other light jets simply cannot match.',
            Aircraft_information: 'Dimensions\n' +
                'Span : 10.77m (36\'11ft)\n' +
                'Length : 11.25m (33\'9ft)\n' +
                'Height : 3.1m (10\'2ft)\n' +
                'Weight\n' +
                'Empty : 2,844kg (6,270lb)\n' +
                'Max : 5,215kg (11,500lb)\n' +
                'Power Plant\n' +
                '1,547 kgp (3,410 lb st) Rolls Royce Viper 535\n' +
                'Performance\n' +
                'Max speed : 760km/h (472mph)\n' +
                'Max climb : 5,300ft/min (26m/sec)\n' +
                'Ceiling : 34,500ft (10,500m)\n' +
                'Range : 2,700km (1,675miles)\n' +
                '\n' +
                'Registration VH-ONP (Ex RNZAF 6371)\n' +
                'Airframe Hours 5165.00\n' +
                'Fatigue Index 77.56\n' +
                'Engine Hours 802 ETR\n' +
                'Avionics VHF, Mode C, ADF\n' +
                'Location NSW Australia\n' +
                '\n' +
                'A comprehensive spares package is also available. \n' +
                'Details listed below is an overview of the package:\n' +
                '1 x spare engine with logbook (inhibited) \n' +
                'Various ground handling equipment (jacks, towbars, wing trestles, lifting slings etc)\n' +
                'Various spares (drop tanks, pylons, jet pipes, canopies, seats, parachutes, wheels, brakes, etc)\n' +
                'There has never been an opportunity to create an inventory the spares list and there are too many to list.\n' +
                '\n' +
                'There are also two ARC159 Radios that have been inspected and tagged.\n' +
                'The two Strikemasters have been stored undercover in the very dry environment of Tocumwal NSW since 2006.\n' +
                'They have been regularly ground run and full log books, manuals and service history are available.\n' +
                'The MK 80 was imported from the UK in 2005 and it was stored in Tocumwal until it was put in storage in Sale VIC to be assembled and signed out. The aircraft was assembled and ground run successfully then the wings were removed and it is now disassembled and ready for shipping.',
            History: '',
        },
    },
    {
        NAME: 'DH Tiger Moth',
        TOPIMAGE: importAll(require.context('../planes/DH Tiger Moth/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/DH Tiger Moth/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Status: 'DH82A TIGER MOTH\n' +
                '\n' +
                'Serial number - 83478\n' +
                'Construction number - T7093\n' +
                'Current Registration: VH-RVE\n' +
                '\n' +
                '​A prime opportunity to own a true classic Bi - Plane.\n' +
                '\n' +
                'This stunning Tiger Moth is originally a UK manufactured aircraft and  has a total of 341 hours on both airframe and engine since full restoration and full CofA.  \n' +
                'All AD’s are currently up to-date.\n' +
                'Due at next inspection are the mandatory instrument AD next 100 hourly.\n' +
                'This has been a ground up nut and bolt restoration and every piece of wood has been renewed (replaced).\n' +
                'English built, originally from the UK to NZ then on to Australia.\n' +
                'Includes Radio, Cloth headset. \n' +
                'Price Reduced ! : £57,950 Sterling',
            }
    },
    {
        NAME: 'De Havilland Dove',
        TOPIMAGE: importAll(require.context('../planes/De Havilland Dove/TopIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        IMAGES: importAll(require.context('../planes/De Havilland Dove/OtherIMG', false, /\.(png|jpe?g|svg|webp)$/)),
        CONTENT: {
            Status: 'Own this piece of history. A true Warbird and in the markings of an Admirals Barge.',
            Aircraft_information: 'Total flying time 10,636 hours\n' +
                'The next AD\'s are:\n' +
                'Both engine mounts need X-ray, however there are spare mounts so this can be carried out without        any lengthy delays. \n' +
                'Need an engine AD’s plus a few other small ones.\n' +
                'Main planes need to be pulled and mandatory corrosion inspection.\n' +
                'LH Engine has 1087 hours to run before overhauling \n' +
                'RH Engine has 1202 hours to run before overhauling \n' +
                'Included is a large spares consignment of spare parts.',
            History: 'Manufactured in 1953 and built by De Havilland Aircraft Co Ltd at their Hawarden plant, Chester UK as a Dove 2 on 22.1.53 and registered G-AMXZ to De Havilland Aircraft Co Ltd, Hatfield.   The Dove was built for the USA but in the end remained in the UK. On 23.9.54 the aircraft was sold to Royal Navy as part of an order for 10 Sea Devon C.20s (The Devon being the UK Military title for the Dove).\n' +
                '​\n' +
                'The aircraft commenced service on 3.5.55 and was taken on charge Royal Navy Fleet Air Arm as Sea Devon C.20 XJ324. The aircraft was operated by RNFAA 781 Squadron based at Lee-on-Solent, Hants and was fitted with an upholstered interior as an “Admirals Barge”.\n' +
                '​\n' +
                'In 1990, the Devon was retired by Royal Navy and listed for civil disposal and sold to a UK aircraft dealer. In 1990 the aircraft XJ324 was sold and arrived in Melbourne Victoria and on 1st of Jan 1990  and arrived dismantled on a truck at Essendon Airport, Melbourne where it was re assembled. Now titled a Dove on 28.12.90 the aircraft was added to the Australian Civil Register as Dove 5 VH-DHI. Restored and flown again in 2014 and retaining her admirals Barge scheme.',
        },
    },
];