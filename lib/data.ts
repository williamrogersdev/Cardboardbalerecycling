import { ServiceOffering, FAQItem, ServiceArea } from "@/types";

// Every service below is provided by partner suppliers in our network, not by
// this site. Cardboard Bale Recycling is a referral service.
export const serviceOfferings: ServiceOffering[] = [
  {
    id: "bale-collection",
    title: "Cardboard Bale Pickup",
    description:
      "Pickup of baled cardboard (OCC) from your business, arranged through a partner recycler in our network.",
    features: [
      "Scheduled or on-call pickup, depending on the partner",
      "Suits retail, warehouse, manufacturing and distribution sites",
      "Pickup frequency based on your volume and storage space",
      "Availability depends on partner suppliers in your area",
    ],
    benefits: [
      "Frees up dock and storage space",
      "Keeps cardboard out of your trash containers",
      "One request reaches partner recyclers",
    ],
    icon: "Truck",
  },
  {
    id: "sell-bales",
    title: "Sell Your Cardboard Bales",
    description:
      "Request a quote from partner buyers for your baled cardboard. Clean, dry, well-made bales are easier to sell.",
    features: [
      "Pricing by quote from partner buyers",
      "Price depends on grade, bale weight, volume and the current market",
      "Partner sets payment terms and weighing method",
      "Free, no-obligation quote request",
    ],
    benefits: [
      "Can offset part of your disposal costs",
      "Compare what a partner offers before you commit",
    ],
    icon: "DollarSign",
  },
  {
    id: "loose-cardboard",
    title: "Loose Cardboard Pickup",
    description:
      "No baler yet? Some partner recyclers collect loose or flattened cardboard, usually in a container or cart.",
    features: [
      "Container or cart service where a partner offers it",
      "Good fit for lower volumes",
      "A step toward baling as your volume grows",
    ],
    benefits: [
      "No equipment needed to start recycling",
      "Simple way to separate cardboard from trash",
    ],
    icon: "Settings",
  },
  {
    id: "equipment-rental",
    title: "Baler and Compactor Rental",
    description:
      "Ask about renting or leasing a vertical baler or compactor through a partner supplier.",
    features: [
      "Vertical and horizontal balers, where available",
      "Partner supplier sets rental terms, installation and service",
      "Sized to your monthly cardboard volume",
    ],
    benefits: [
      "Denser bales take less space",
      "Baled cardboard is easier to transport and sell",
    ],
    icon: "Wrench",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "who-we-are",
    question: "Who will handle my request?",
    answer:
      "Cardboard Bale Recycling is a referral service. We pass your request to partner recyclers and suppliers in our network, and a partner follows up with you directly. The partner sets prices, schedules and terms.",
    category: "general",
  },
  {
    id: "how-pricing-works",
    question: "How is cardboard bale pricing set?",
    answer:
      "Pricing is by quote from partner buyers. It depends on the grade of the cardboard, how clean and dry the bales are, bale weight and density, your volume, your location and the current market for recovered paper, which changes over time.",
    category: "pricing",
  },
  {
    id: "pickup-frequency",
    question: "How often can cardboard be picked up?",
    answer:
      "That depends on your volume, your storage space and what a partner in your area offers. Weekly, every other week, monthly or on-call pickups are common arrangements.",
    category: "process",
  },
  {
    id: "minimum-volume",
    question: "Is there a minimum volume?",
    answer:
      "Each partner sets its own minimums. Many buyers prefer a full load of bales, so lower volumes are often better served by loose cardboard pickup. Tell us your monthly volume and we will pass it on.",
    category: "general",
  },
  {
    id: "bale-quality",
    question: "What makes a good cardboard bale?",
    answer:
      "Clean, dry corrugated cardboard (OCC) with little plastic film, foam, wood or food waste mixed in. Wet or contaminated bales are harder to sell and may be priced lower or refused. Tightly packed bales of a consistent size are easier to handle.",
    category: "process",
  },
  {
    id: "equipment-needs",
    question: "Do I need my own baler?",
    answer:
      "No. Some partners pick up loose cardboard, and you can also ask about renting or leasing a baler through a partner supplier. Baled cardboard is usually easier to transport and sell.",
    category: "general",
  },
  {
    id: "service-areas",
    question: "Which areas do you cover?",
    answer:
      "We accept requests from businesses across the United States. Whether a pickup or purchase is available depends on partner suppliers near you.",
    category: "general",
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    state: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    active: true,
  },
  {
    state: "Texas",
    cities: ["Houston", "Dallas", "Austin", "San Antonio"],
    active: true,
  },
  {
    state: "Florida",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville"],
    active: true,
  },
  {
    state: "New York",
    cities: ["New York City", "Albany", "Buffalo", "Rochester"],
    active: true,
  },
  {
    state: "Illinois",
    cities: ["Chicago", "Rockford", "Peoria", "Springfield"],
    active: true,
  },
  {
    state: "Pennsylvania",
    cities: ["Philadelphia", "Pittsburgh", "Allentown"],
    active: true,
  },
  {
    state: "Ohio",
    cities: ["Columbus", "Cleveland", "Cincinnati"],
    active: true,
  },
  {
    state: "Georgia",
    cities: ["Atlanta", "Augusta", "Savannah"],
    active: true,
  },
  {
    state: "North Carolina",
    cities: ["Charlotte", "Raleigh", "Greensboro"],
    active: true,
  },
  {
    state: "Michigan",
    cities: ["Detroit", "Grand Rapids", "Warren"],
    active: true,
  },
  {
    state: "New Jersey",
    cities: ["Newark", "Jersey City", "Paterson"],
    active: true,
  },
  {
    state: "Virginia",
    cities: ["Virginia Beach", "Norfolk", "Richmond"],
    active: true,
  },
  {
    state: "Washington",
    cities: ["Seattle", "Spokane", "Tacoma"],
    active: true,
  },
  {
    state: "Arizona",
    cities: ["Phoenix", "Tucson", "Mesa"],
    active: true,
  },
  {
    state: "Massachusetts",
    cities: ["Boston", "Worcester", "Springfield"],
    active: true,
  },
  {
    state: "Tennessee",
    cities: ["Nashville", "Memphis", "Knoxville"],
    active: true,
  },
  {
    state: "Indiana",
    cities: ["Indianapolis", "Fort Wayne", "Evansville"],
    active: true,
  },
  {
    state: "Missouri",
    cities: ["Kansas City", "St. Louis", "Springfield"],
    active: true,
  },
  {
    state: "Maryland",
    cities: ["Baltimore", "Frederick", "Rockville"],
    active: true,
  },
  {
    state: "Wisconsin",
    cities: ["Milwaukee", "Madison", "Green Bay"],
    active: true,
  },
  {
    state: "Colorado",
    cities: ["Denver", "Colorado Springs", "Aurora"],
    active: true,
  },
  {
    state: "Minnesota",
    cities: ["Minneapolis", "St. Paul", "Rochester"],
    active: true,
  },
  {
    state: "South Carolina",
    cities: ["Charleston", "Columbia", "Greenville"],
    active: true,
  },
  {
    state: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile"],
    active: true,
  },
  {
    state: "Louisiana",
    cities: ["New Orleans", "Baton Rouge", "Shreveport"],
    active: true,
  },
  {
    state: "Kentucky",
    cities: ["Louisville", "Lexington", "Bowling Green"],
    active: true,
  },
  {
    state: "Oregon",
    cities: ["Portland", "Eugene", "Salem"],
    active: true,
  },
  {
    state: "Oklahoma",
    cities: ["Oklahoma City", "Tulsa", "Norman"],
    active: true,
  },
  {
    state: "Connecticut",
    cities: ["Hartford", "New Haven", "Stamford"],
    active: true,
  },
  {
    state: "Utah",
    cities: ["Salt Lake City", "West Valley City", "Provo"],
    active: true,
  },
  {
    state: "Iowa",
    cities: ["Des Moines", "Cedar Rapids", "Davenport"],
    active: true,
  },
  {
    state: "Nevada",
    cities: ["Las Vegas", "Henderson", "Reno"],
    active: true,
  },
  {
    state: "Arkansas",
    cities: ["Little Rock", "Fort Smith", "Fayetteville"],
    active: true,
  },
  {
    state: "Mississippi",
    cities: ["Jackson", "Gulfport", "Southaven"],
    active: true,
  },
  {
    state: "Kansas",
    cities: ["Wichita", "Overland Park", "Kansas City"],
    active: true,
  },
  {
    state: "New Mexico",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho"],
    active: true,
  },
  {
    state: "Nebraska",
    cities: ["Omaha", "Lincoln", "Bellevue"],
    active: true,
  },
  {
    state: "West Virginia",
    cities: ["Charleston", "Huntington", "Morgantown"],
    active: true,
  },
  {
    state: "Idaho",
    cities: ["Boise", "Meridian", "Nampa"],
    active: true,
  },
  {
    state: "Hawaii",
    cities: ["Honolulu", "Pearl City", "Hilo"],
    active: true,
  },
  {
    state: "New Hampshire",
    cities: ["Manchester", "Nashua", "Concord"],
    active: true,
  },
  {
    state: "Maine",
    cities: ["Portland", "Lewiston", "Bangor"],
    active: true,
  },
  {
    state: "Montana",
    cities: ["Billings", "Missoula", "Great Falls"],
    active: true,
  },
  {
    state: "Rhode Island",
    cities: ["Providence", "Warwick", "Cranston"],
    active: true,
  },
  {
    state: "Delaware",
    cities: ["Wilmington", "Dover", "Newark"],
    active: true,
  },
  {
    state: "South Dakota",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen"],
    active: true,
  },
  {
    state: "North Dakota",
    cities: ["Fargo", "Bismarck", "Grand Forks"],
    active: true,
  },
  {
    state: "Alaska",
    cities: ["Anchorage", "Fairbanks", "Juneau"],
    active: true,
  },
  {
    state: "Vermont",
    cities: ["Burlington", "South Burlington", "Rutland"],
    active: true,
  },
  {
    state: "Wyoming",
    cities: ["Cheyenne", "Casper", "Laramie"],
    active: true,
  },
];
