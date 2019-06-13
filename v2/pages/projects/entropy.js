// Docusaurus Default Imports
import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import withBaseUrl from '@docusaurus/withBaseUrl';
import styles from '../styles.module.css';


// useful stuff
const context = useDocusaurusContext();
const {siteConfig = {}} = context;

// project component stuff
const projectImage = 'https://imgs.xkcd.com/comics/password_strength.png';
const projectLink = 'https://www.burrrata.ch/entropy';
const projectTextHeader = 'Entropy';


/*
// ALPHABETS
let numbersAlphabet = '0123456789'
let basicSymbolsAlphabet = '`~!@#$%^&*()-_=+[{]}\|;:"/?.>,<'
let numbersAndSymbolsAlphabet = '~1!2@3#4$5%6^7&8*9(0)-_=+[{]}\|;:"/?.>,<'
let englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'
let toyWordDict = ["aaron", "abandoned", "aberdeen", "abilities", "ability", "able", "aboriginal", "abortion", "about", "above", "abraham", "abroad", "absence", "absent", "absolute", "absolutely", "absorption", "abstract", "abstracts", "abuse", "academic", "academics", "academy", "accent", "accept", "acceptable", "biology", "bios", "biotechnology", "bird", "birds", "birmingham", "birth", "birthday", "bishop", "bite", "bits", "bizarre", "bizrate", "black", "blackberry", "blackjack", "blacks", "blade", "blades", "blah", "blair", "blake", "blame", "blank", "blanket", "blast", "bleeding", "blend", "bless", "blessed", "blind", "blink", "block", "blocked", "blocking", "blocks", "blog", "blogger", "bloggers", "blogging", "blogs", "blond", "blonde", "blood", "bloom", "bloomberg", "clone", "close", "closed", "closely", "closer", "closes", "closest", "closing", "closure", "cloth", "clothes", "clothing", "cloud", "clouds", "cloudy", "commitment", "commitments", "committed", "committee", "committees", "commodities", "commodity", "common", "commonly", "commons", "commonwealth", "communicate", "communication", "communications", "communist", "communities", "community", "comp", "compact", "companies", "companion", "company", "compaq", "comparable", "comparative", "compare", "compared", "comparing", "comparison", "comparisons", "compatibility", "compatible", "compensation", "compete", "competent", "competing", "competition", "competitions", "competitive", "competitors", "compilation", "compile", "compiled", "compiler", "complaint", "complaints", "complement", "complete", "completed", "completely", "completing", "completion", "complex", "complexity", "compliance", "compliant", "complicated", "complications", "complimentary", "comply", "component", "components", "composed", "composer", "composite", "composition", "compound", "compounds", "comprehensive", "compressed", "compression", "compromise", "computation", "computational", "compute", "disc", "discharge", "disciplinary", "discipline", "disciplines", "disclaimer", "divine", "diving", "division", "divisions", "divorce", "divx", "dock", "docs", "doctor", "doctors", "doctrine", "document", "documentary", "documentation", "documented", "documents", "dodge", "does", "dogs", "doing", "doll", "dollar", "dollars", "dolls", "domain", "domains", "dome", "domestic", "dominant", "dominican", "donald", "donate", "donated", "donation", "donations", "done", "donna", "donor", "donors", "dont", "doom", "door", "doors", "dosage", "dose", "double", "doubt", "doug", "douglas", "dover", "down", "download", "downloadable", "downloaded", "downloading", "downloads", "downtown", "dozen", "dozens", "draft", "drag", "dragon", "drain", "drainage", "drama", "dramatic", "dramatically", "draw", "drawing", "drawings", "drawn", "draws", "dream", "dreams", "dress", "dressed", "dresses", "dressing", "drew", "dried", "drill", "drilling", "drink", "drinking", "drinks", "drive", "driven", "driver", "drivers", "drives", "driving", "drop", "dropped", "drops", "drove", "drug", "drugs", "drum", "drums", "drunk", "dryer", "dual", "dubai", "dublin", "duck", "dude", "duke", "dumb", "dump", "duncan", "duplicate", "durable", "duration", "durham", "during", "dusk", "dust", "dutch", "duties", "duty", "dvds", "dying", "dylan", "dynamic", "dynamics", "each", "eagle", "eagles", "earl", "earlier", "earliest", "early", "earn", "earned", "earning", "earnings", "earrings", "ears", "earth", "earthquake", "ease", "easier", "easily", "east", "easter", "eastern", "easy", "eating", "ebay", "ebony", "ebook", "ebooks", "echo", "eclipse", "ecological", "ecology", "ecommerce", "flight", "flights", "flip", "float", "floating", "flood", "floor", "flooring", "floors", "floppy", "floral", "florence", "florida", "florist", "florists", "flour", "flow", "flower", "flowers", "flows", "floyd", "fluid", "flush", "flux", "flyer", "flying", "foam", "focal", "focus", "focused", "focuses", "focusing", "fold", "folder", "folders", "folding", "folk", "folks", "follow", "followed", "following", "follows", "font", "fonts", "food", "foods", "fool", "foot", "footage", "football", "footwear", "forbes", "forbidden", "force", "forced", "forces", "ford", "forecast", "forecasts", "foreign", "forest", "forestry", "forests", "forever", "forge", "forget", "forgot", "forgotten", "fork", "form", "formal", "format", "formation", "formats", "formatting", "formed", "former", "formerly", "forming", "forms", "formula", "fort", "forth", "fortieth", "fortune", "forty", "forum", "forums", "forward", "forwarding", "fossil", "foster", "foto", "fotos", "fought", "foul", "found", "foundation", "foundations", "founded", "founder", "fountain", "four", "fourth", "fraction", "fragrance", "fragrances", "frame", "framed", "frames", "framework", "framing", "france", "franchise", "francis", "francisco", "guinea", "guitar", "guitars", "gulf", "guns", "guru", "guyana", "guys", "gzip", "habitat", "habits", "hack", "hacker", "hair", "hairy", "haiti", "half", "halifax", "hall", "halloween", "halo", "halt", "hamburg", "hamilton", "hammer", "hampshire", "hampton", "hand", "handbags", "handbook", "handed", "handheld", "handhelds", "handjobs", "handle", "handled", "handles", "handling", "handmade", "hands", "handy", "hang", "hanging", "hans", "hansen", "happen", "happened", "happening", "happens", "happiness", "happy", "harassment", "harbor", "harbour", "hard", "hardcover", "harder", "hardly", "hardware", "hardwood", "harley", "harm", "harmful", "harmony", "harold", "harper", "harris", "harrison", "harry", "hart", "hartford", "harvard", "harvest", "harvey", "hash", "hate", "hats", "havana", "have", "haven", "having", "hawaii", "hawaiian", "hawk", "hayes", "hazard", "hazardous", "hazards", "hdtv", "head", "headed", "header", "headers", "heading", "headline", "headlines", "headphones", "headquarters", "heads", "headset", "healing", "health", "healthcare", "healthy", "hear", "heard", "hearing", "hearings", "heart", "hearts", "heat", "heated", "heater", "heath", "heather", "heating", "heaven", "install", "installation", "installations", "installed", "installing", "instance", "instances", "instant", "instantly", "instead", "institute", "institutes", "institution", "institutional", "institutions", "invention", "inventory", "invest", "investigate", "investigated", "investigation", "investigations", "investigator", "investigators", "investing", "investment", "investments", "investor", "investors", "invisible", "invision", "invitation", "invitations", "invite", "invited", "invoice", "involve", "involved", "involvement", "involves", "involving", "iowa", "ipaq", "ipod", "iran", "iraq", "iraqi", "ireland", "irish", "iron", "irrigation", "isaac", "looked", "looking", "looks", "looksmart", "lookup", "loop", "loops", "loose", "lopez", "lord", "lose", "losing", "loss", "losses", "lost", "lots", "lottery", "lotus", "loud", "louis", "louise", "louisiana", "louisville", "lounge", "love", "loved", "lovely", "lover", "lovers", "loves", "loving", "lower", "lowest", "lows", "lucas", "lucia", "luck", "lucky", "lucy", "luggage", "luis", "luke", "lunch", "lung", "luther", "luxembourg", "luxury", "lycos", "lying", "lynn", "lyric", "lyrics", "macedonia", "machine", "machinery", "machines", "macintosh", "macro", "macromedia", "madagascar", "made", "madison", "madness", "madonna", "madrid", "magazine", "magazines", "magic", "magical", "magnet", "magnetic", "magnificent", "magnitude", "maiden", "mail", "mailed", "mailing", "mailman", "mails", "mailto", "main", "maine", "mainland", "mainly", "mainstream", "maintain", "maintained", "maintaining", "maintains", "maintenance", "major", "majority", "make", "maker", "makers", "makes", "makeup", "making", "malawi", "malaysia", "maldives", "male", "males", "mali", "mall", "malpractice", "malta", "mambo", "manage", "managed", "management", "manager", "managers", "managing", "manchester", "mandate", "mandatory", "manga", "manhattan", "manitoba", "manner", "manor", "manual", "manually", "manuals", "manufacture", "manufactured", "manufacturer", "manufacturers", "manufacturing", "many", "maple", "mapping", "maps", "marathon", "marble", "marc", "march", "marco", "marcus", "mardi", "margaret", "margin", "maria", "mariah", "marie", "marijuana", "marilyn", "marina", "marine", "mario", "marion", "maritime", "mark", "marked", "marker", "markers", "market", "marketing", "marketplace", "markets", "marking", "marks", "marriage", "married", "marriott", "marry", "mars", "marsh", "marshall", "mart", "martha", "martial", "martin", "marvel", "mary", "maryland", "mask", "mason", "mass", "massachusetts", "massage", "massive", "master", "mastercard", "masters", "nokia", "nominated", "nomination", "nominations", "none", "nonprofit", "noon", "norfolk", "norm", "normal", "normally", "norman", "north", "northeast", "northern", "northwest", "norton", "norway", "norwegian", "nose", "note", "notebook", "notebooks", "noted", "notes", "nothing", "notice", "noticed", "notices", "notification", "notifications", "notified", "notify", "notion", "notre", "nottingham", "noun", "nova", "novel", "novels", "novelty", "november", "nowhere", "ntsc", "nuclear", "nudist", "nuke", "null", "number", "numbers", "numeral", "numeric", "numerical", "numerous", "nurse", "nursery", "nurses", "nursing", "nutrition", "nutritional", "nuts", "nutten", "nvidia", "nylon", "oakland", "oaks", "oasis", "obesity", "obituaries", "object", "objective", "objectives", "objects", "obligation", "obligations", "observation", "observations", "observe", "observed", "observer", "obtain", "obtained", "obtaining", "obvious", "obviously", "occasion", "occasional", "occasionally", "occasions", "occupation", "occupational", "occupations", "partners", "partnership", "partnerships", "parts", "party", "paso", "pass", "passage", "passed", "passenger", "passengers", "passes", "passing", "passion", "passive", "passport", "password", "passwords", "past", "pasta", "paste", "pastor", "patch", "patches", "patent", "patents", "path", "pathology", "paths", "patient", "patients", "patio", "patricia", "patrick", "patrol", "pattern", "patterns", "paul", "pavilion", "paxil", "payable", "payday", "paying", "payment", "payments", "paypal", "payroll", "pays", "pdas", "peace", "peaceful", "peak", "pearl", "peas", "persistent", "person", "personal", "personality", "personalized", "personally", "personals", "personnel", "persons", "perspective", "perspectives", "perth", "peru", "pest", "pete", "peter", "petersburg", "peterson", "petite", "petition", "petroleum", "pets", "phantom", "pharmaceutical", "pharmaceuticals", "pharmacies", "pharmacology", "pharmacy", "phase", "phases", "phenomenon", "phentermine", "phil", "philadelphia", "philip", "philippines", "philips", "phillips", "philosophy", "phoenix", "phone", "public", "publication", "publications", "publicity", "publicly", "publish", "published", "publisher", "publishers", "publishing", "pubmed", "pubs", "puerto", "pull", "pulled", "pulling", "pulse", "pump", "pumps", "punch", "punishment", "punk", "pupils", "puppy", "purchase", "purchased", "purchases", "purchasing", "pure", "purple", "purpose", "purposes", "purse", "pursuant", "pursue", "pursuit", "push", "pushed", "pushing", "puts", "putting", "puzzle", "puzzles", "python", "qatar", "quad", "qualification", "qualifications", "qualified", "qualify", "qualifying", "qualities", "quality", "quantitative", "quantities", "quantity", "quantum", "quarter", "quarterly", "quarters", "quebec", "queen", "queens", "queensland", "queries", "query", "quest", "question", "questionnaire", "questions", "queue", "quick", "quickly", "quiet", "quilt", "quit", "quite", "quiz", "quizzes", "quotations", "quote", "quoted", "quotes", "rabbit", "race", "races", "rachel", "racial", "racing", "rack", "racks", "radar", "radiation", "radical", "radio", "radios", "radius", "rage", "raid", "rail", "railroad", "railway", "rain", "rainbow", "raise", "round", "rounds", "route", "router", "routers", "routes", "routine", "routines", "routing", "rover", "rows", "royal", "royalty", "rubber", "ruby", "rugby", "rugs", "rule", "ruled", "rules", "ruling", "runner", "running", "runs", "runtime", "rural", "rush", "russell", "russia", "russian", "ruth", "rwanda", "ryan", "sacramento", "serbia", "serial", "series", "serious", "seriously", "serum", "serve", "served", "server", "servers", "serves", "service", "services", "serving", "session", "sessions", "sets", "setting", "settings", "settle", "settled", "settlement", "setup", "seven", "seventh", "several", "severe", "sewing", "sexcam", "sexual", "sexuality", "shipments", "shipped", "shipping", "ships", "shirt", "shirts", "shock", "shoe", "shoes", "shoot", "shooting", "shop", "shopper", "shoppers", "shopping", "shops", "shopzilla", "shore", "short", "shortcuts", "shorter", "since", "sing", "singapore", "singer", "singh", "singing", "single", "singles", "sink", "sister", "sisters", "site", "sitemap", "sites", "sitting", "situated", "situation", "situations", "sixth", "size", "span", "spanish", "spank", "spanking", "sparc", "spare", "spas", "spatial", "speak", "speaker", "speakers", "speaking", "speaks", "spears", "spec", "special", "specialist", "specialists", "specialized", "specializing", "specially", "timer", "times", "timing", "timothy", "tiny", "tion", "tions", "tips", "tire", "tired", "tires", "tissue", "titanium", "titans", "title", "titled", "titles", "titten", "tobacco", "tobago", "today", "todd", "toddler", "together", "toilet", "token", "tokyo", "told", "tolerance", "toll", "toshiba", "total", "totally", "totals", "touch", "touched", "tough", "tour", "touring", "tourism", "tourist", "tournament", "tournaments", "tours", "toward", "towards", "tower", "towers", "town", "towns", "township", "toxic", "toyota", "toys", "trace", "track", "trackback", "trackbacks", "tracked", "turn", "turned", "turner", "turning", "turns", "turtle", "tutorial", "tutorials", "twelve", "twenty", "twice", "twiki", "twin", "tyler", "type", "types", "typical", "typically", "typing", "uganda", "ugly", "ukraine", "ultimate", "ultimately", "ultra", "ultram", "unable", "unauthorized", "unavailable", "uncertainty", "uncle", "undefined", "under", "undergraduate", "underground", "underline", "underlying", "understand", "understanding", "understood", "undertake", "undertaken", "uranus", "urban", "urge", "urgent", "urls", "uruguay", "usage", "usda", "used", "useful", "user", "username", "users", "uses", "usgs", "using", "usps", "usual", "usually", "utah", "utilities", "utility", "utilization", "utilize", "utils", "uzbekistan", "vacancies", "vacation", "vacations", "vaccine", "vacuum", "valentine", "valid", "validation", "validity", "valium", "valley", "valuable", "valuation", "value", "valued", "voluntary", "volunteer", "volunteers", "volvo", "vote", "voted", "voters", "votes", "voting", "vowel", "voyeurweb", "voyuer", "vsnet", "vulnerability", "vulnerable", "wide", "widely", "wider", "widescreen", "widespread", "width", "wife", "wifi", "wiki", "wikipedia", "wild", "wilderness", "wildlife", "wiley", "will", "william", "williams", "willing", "willow", "wilson", "wind", "window", "windows", "winds", "windsor", "wine", "wines", "wing", "wings", "winner", "winners", "winning", "wins", "winston", "winter", "wire", "wired", "wireless", "wires", "wiring", "wisconsin", "wisdom", "wise", "wish", "wishes", "wishing", "wishlist", "witch", "with", "withdrawal", "within", "without", "witness", "witnesses", "wives", "wizard", "wrong", "wrote", "wyoming", "xanax", "xbox", "xerox", "xhtml", "xnxx", "yacht", "yahoo", "yale", "yamaha", "yang", "yard", "yards", "yarn", "yeah", "year", "yearly", "years", "yeast", "yellow", "yemen", "yesterday", "yield", "yields", "yoga", "york", "yorkshire", "young", "younger", "your", "yours", "yourself", "youth", "yugoslavia", "yukon", "zambia", "zdnet", "zealand", "zero", "zimbabwe", "zinc", "zoloft", "zone", "zones", "zoning", "zoom", "zope"]

// PASSWORD GENERATION
// Generate Random Number via Web Crypto API
function gRN(base) {
	let arr = new Uint32Array(1)
	window.crypto.getRandomValues(arr)
	let r = arr[0]
	let rN = r%base
	return rN
}
// Password Generator
function createSecurePassword(numWords='r',
															numSpacing='r',
															numPadding='r',
															ALLCAPS='r',
															numSymA='yes',
															wordDict=toyWordDict) {
	// LEGEND
	// r = random
	// c = capitalized
	// w = word
	// a = alphabet
	// arr = array
	// str = string
	// num = number
	// set values if random is selected
	if (numWords === 'r') {
		//numWords = 1 + Math.floor(Math.random()*9)
		numWords = 1 + gRN(9)
	}
	if (numSpacing === 'r') {
		//numSpacing = Math.floor(Math.random()*5)
		numSpacing = gRN(5)
	}
	if (numPadding === 'r') {
		//numPadding = Math.floor(Math.random()*5)
		numPadding = gRN(5)
	}
	if (ALLCAPS === 'r') {
		//ALLCAPS = Math.floor(Math.random()*5)
		ALLCAPS = gRN(5)
	}
	if (numSymA === 'yes') {
		numSymA = numbersAndSymbolsAlphabet
	}
	if (numSymA === 'no') {
		numSymA = 'englishAplphabet'
	}
	// WORDS
	let rWArr = []
	for (let i=0; i<numWords; i++) {
		//rWArr.push(wordDict[Math.floor(Math.random()*wordDict.length)])
		rWArr.push(wordDict[gRN(wordDict.length)])
	}
	// capitalize the first letter of each word string
	let cWArr = rWArr.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
	// words ALL CAPS
	for (let i=0; i<ALLCAPS; i++) {
		//let rUC = Math.floor(Math.random()*cWArr.length)
		let rUC = gRN(cWArr.length)
		let allC = cWArr[rUC].toUpperCase()
		cWArr[rUC] = allC
	}
	// concatenate word array into a string
	let rWStr = cWArr.join()
	// SPACING
	//let rSpacingChar = numSymA[Math.floor(Math.random()*numSymA.length)]
	let rSpacingChar = numSymA[gRN(numSymA.length)]
	let rspacing = ''
	for (let i=0; i<numSpacing;i++) {
		rspacing += rSpacingChar
	}
	let replacedCommas = rWStr.replace(/,/g, rspacing)
	// PADDING
	//let rPadding = numSymA[Math.floor(Math.random()*numSymA.length)]
	let rPadding = numSymA[gRN(numSymA.length)]
	let padding = ''
	for (let i=0; i<numPadding; i++) {
		padding += rPadding
	}
	let rPassword = padding+replacedCommas+padding
	// OUTPUT
	return rPassword
}

// generate a lot of passwords
let pTest = 1000 // >1000 will freeze the app
for (let i=0; i<pTest; i++) {
	//console.log(createSecurePassword()) // DO NOT LEAVE WITH Auto-runJS ON!
}

// Variable Input Password Generator
function variableInputPGen() {
	// get input values from HTML
	let numWords = document.getElementById('numWords').value
	let numSpacing = document.getElementById('numSpacing').value
	let numPadding = document.getElementById('numPadding').value
	let ALLCAPS = document.getElementById('ALLCAPS').value
	let numSymA = document.getElementById('numSymA').value
	// feed HTML values as inputs to createSecurePassword()
	document.getElementById('newPassword').value = createSecurePassword(numWords,numSpacing,numPadding,ALLCAPS,numSymA)
}

// OTHER USEFUL FUNCTIONS
// Copy Text From Element
function copyText(elementToCopy) {
	let elem = document.getElementById(elementToCopy)
	elem.select()
	document.execCommand('copy')
}










function entropyApp() {
	return (
			<div
				style={{
					float: 'left',
					textAlign: 'left',
				}}
			>

      <div class='appModule'>
        <div class='appModuleTitle'>
          Instant Password Creator
        </div>
        <div class='appModuleSubModule left'>
          <div>
            words
            <select id='numWords'>
							<option value='' />
							<option 
								value='r'
								selected='r' />random
							<option value="1" />1
							<option value="2" />2
							<option value="3" />3
							<option value="4" />4
							<option value="5" />5
							<option value="6" />6
							<option value="7" />7
							<option value="8" />8
							<option value="9" />9
            </select>
          </div>

          <br />

          <div>
            words ALL CAPS
            <select id='ALLCAPS'>
							<option value='' />
							<option 
								value='r'
                selected='r' />random
							<option value="1" />1
							<option value="2" />2
							<option value="3" />3
							<option value="4" />4
							<option value="5" />5
            </select>
          </div>

          <br />

          <div>
            spacing
            <select id='numSpacing'>
							<option value='' />
							<option 
								value='r'
                selected='r' />random
							<option value="1" />1
							<option value="2" />2
							<option value="3" />3
							<option value="4" />4
							<option value="5" />5
            </select>
          </div>

          <br />

          <div>
            padding
            <select id='numPadding'>
							<option value='' />
							<option 
								value='r'
                selected='r' />random
							<option value="1" />1
							<option value="2" />2
							<option value="3" />3
							<option value="4" />4
							<option value="5" />5
            </select>
          </div>

          <br />

          <div>
            numbers and special characters?
            <select id='numSymA'>
							<option 
								value='yes'
                selected='yes' />yes
							<option 
								value='no' />no
            </select>
          </div>

          <br />

          <div>
						<button 
							type='button'
							onclick='variableInputPGen()'>
              Click to create a new password
            </button>
            <br />
						<input 
							id='newPassword'
							type='text' />
							<button 
								onclick="copyText('newPassword')">
              copy
            </button>
          </div>

        </div>
			</div>
		</div>
	);
}
*/



function entropyHeader() {
	return(
		<div 
			style={{
				textAlign: 'center',
			}}
		>
			<a href={projectLink}>
				<h2>{projectTextHeader}</h2>
			</a>
			<br />
			<p>
				Passwords are hard. 
				<br />
				They don't have to be. 
				<br />
				ENTROPY makes it easy.
			</p>
		</div>
	);
}



function entropyImage() {
	return (
		<div
			style={{
				float: 'right',
				textAlign: 'left',
			}}
		>
			<a href={projectLink}>
				<img 
					src={projectImage}
				/>
				<p>
					TL;DR: 
					<br />
					security at the cost of usability comes at the cost of security.
				</p>
			</a>
		</div>
	);
}




// Entropy Component
function Entropy() {
	// return the components
  return (
		<div 
			className='container'
			style={{
				padding: '2em',
				margin: '2em',
				minHeight: '50vh',
			}}
		>
			<entropyHeader />
			<entropyImage />	
		</div>
  );
}




export default Entropy;
