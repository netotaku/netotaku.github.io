var charts = {

  agency: {
    dv: { label: 'Digital Visitor' },
    gv: { label: 'Goram+Vincent' },
    e3: { label: 'e3' },
    ta: { label: 'TheAgency' },
    fr: { label: 'Independent' }
  },

  roles: {
    fed: { label: 'Frontend Developer' },
    bed: { label: 'Backend Developer' },
    prod:{ label: 'Producer' },
    ted: { label: 'Technical Director' },
    ind: { label: 'Independent' },
    des: { label: 'Web Designer' }
  },

  frameworks: {
    ss: { label: 'Squarespace' },
    oct: { label: 'OctoberCMS' },
    modx: { label: 'ModX' },
    c5: { label: 'Concrete5' },
    wp: { label: 'Wordpress' },
    umb: { label: 'Umbraco' },
    cake: { label: 'Cake PHP' },
    besp: { label: 'Bespoke' },
    score: { label: 'Sitecore' },
    jQ: { label: 'jQuery' },
    slim: { label: 'Slim PHP' },
    lara: { label: 'Laravel' },
    yui: { label: 'YUI' },
    flash: { label: 'Flash' },
    perch: { label: 'Perch' },
    shopify: { label: 'Shopify' },
    tumblr: { label: 'Tumblr' },
    drup: { label: 'Drupal' },
    zend: { label: 'Zend' },
    jk: { label: 'Jekyll' },
    phg: { label: 'PhoneGap' },
    mood: { label: 'Moodle' }
  },

  lang: {
    loc: { label: 'Localisation' },
    html: { label: 'HTML' },
    sass: { label: 'SASS' },
    css: { label: 'CSS' },
    js: { label: 'JavaScript' },
    php: { label: 'PHP' },
    net: { label: '.net' },
    liquid: { label: 'Liquid' },
    blade: { label: 'Blade' }
  }

}

///

var projects = [
  {
    label: 'Hannah &amp; The Heartbreak',
    url: 'http://www.hannahandtheheartbreak.com',
    frameworks: ['ss'],
    lang: ['css'],
    roles: ['fed','ted','des'],
    status: 1,
    agency: ['fr']
  },  {
    label: 'Herd PR',
    url: 'http://www.herdpr.co.uk',
    frameworks: ['ss'],
    lang: ['css'],
    roles: ['fed','ted','des'],
    status: 1,
    agency: ['fr']
  },{
    label: 'Pentathlon GB',
    url: 'http://beta.pentathlongb.org',
    frameworks: ['oct'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'AUK',
    url: 'http://www.agencyuk.com',
    frameworks: ['wp'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'Welsh Beef and Lamb',
    url: 'http://eatwelshlambandwelshbeef.com',
    frameworks: ['c5'],
    lang: ['html','sass','js','php','loc'],
    roles: ['fed','bed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'Porc.Wales',
    url: 'http://porc.wales',
    frameworks: ['c5'],
    lang: ['html','sass','js','php','loc'],
    roles: ['fed','bed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'MediaSmart',
    url: 'http://mediasmart.uk.com',
    frameworks: ['c5'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'BSM',
    url: 'http://bsm.co.uk',
    frameworks: ['modx'],
    lang: ['html','sass','js'],
    roles: ['fed'],
    status: 1,
    agency: ['ta']
  },{
    label: 'Kia',
    url: 'http://kia.co.uk',
    frameworks: ['score'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 0,
    agency: ['e3']
  },{
    label: '50 Things',
    url: 'https://www.50things.org.uk',
    frameworks: ['umb'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Alison\'s Kitchen',
    url: 'https://alisons.kitchen',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','ind','des'],
    status: 1,
    agency: ['fr']
  },{
    label: 'Gabrielle Blackman',
    url: 'http://gabrielleblackman.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','ind','des'],
    status: 1,
    agency: ['fr']
  },{
    label: 'GigHub',
    url: 'http://gighub.co.uk',
    frameworks: ['slim','lara','jQ'],
    lang: ['html','sass','js','php','blade'],
    roles: ['fed','bed','ted','ind','des'],
    status: 1,
    agency: ['fr']
  },{
    label: 'Super Dan',
    url: 'http://superdan.io',
    frameworks: ['jk'],
    lang: ['html','sass'],
    roles: ['fed','bed','ted','ind','des'],
    status: 1,
    agency: ['fr']
  },{
    label: 'King &amp; Allen',
    url: 'http://kingandallen.co.uk',
    frameworks: ['besp','yui'],
    lang: ['html','css','js','php'],
    roles: ['fed','bed','ind','des'],
    status: 0,
    agency: ['fr']
  },{
    label: 'Scottish Dental',
    url: 'http://www.scottishdental.org',
    frameworks: ['besp','yui'],
    lang: ['html','css','js'],
    roles: ['fed','ind','des'],
    status: 0,
    agency: ['fr']
  },{
    label: 'Rethink',
    url: 'http://www.rethink.org',
    frameworks: ['besp','flash'],
    lang: ['html','css','js'],
    roles: ['fed','ind','des'],
    status: 0,
    agency: ['fr']
  },{
    label: 'Nathan Collis',
    url: 'http://www.nathancollis.com',
    frameworks: ['besp','yui'],
    lang: ['html','css','js'],
    roles: ['fed','ind','des'],
    status: 0,
    agency: ['fr']
  },{
    label: 'Ecodesk',
    url: 'http://www.nathancollis.com',
    frameworks: ['mood','flash'],
    lang: ['html','css','js','php'],
    roles: ['fed','ind'],
    status: 0,
    agency: ['fr']
  },{
    label: 'CreditCall',
    url: 'http://www.creditcall.com',
    frameworks: ['wp','jQ'],
    lang: ['html','sass','js'],
    roles: ['fed','ted','des'],
    status: 1,
    agency: ['ta']
  },{
    label: 'The Royal Navy',
    url: 'http://www.royalnavy.mod.uk',
    frameworks: ['score','jQ'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 0,
    agency: ['e3']
  },{
    label: 'Kia Soul iBrochure',
    url: 'http://www.kia.co.uk/new-cars/range/compact-cars/soul/view-ibrochure.aspx',
    frameworks: ['score','jQ','phg'],
    lang: ['html','css','js','php'],
    roles: ['fed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Kia Cee\'d iBrochure',
    url: 'http://www.kia.co.uk/new-cars/range/compact-cars/soul/view-ibrochure.aspx',
    frameworks: ['score','jQ','phg'],
    lang: ['html','css','js','php'],
    roles: ['fed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Kia Picanto iBrochure',
    url: 'http://www.kia.co.uk/new-cars/range/compact-cars/soul/view-ibrochure.aspx',
    frameworks: ['score','jQ','phg'],
    lang: ['html','css','js','php'],
    roles: ['fed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Kia Sportage iBrochure',
    url: 'http://www.kia.co.uk/new-cars/range/compact-cars/soul/view-ibrochure.aspx',
    frameworks: ['score','jQ','phg'],
    lang: ['html','css','js','php'],
    roles: ['fed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Philip Mould',
    url: 'http://www.philipmould.com',
    frameworks: ['perch','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'The Mill',
    url: 'http://www.themill.com',
    frameworks: ['wp','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1,
    agency: ['e3']
  },{
    label: 'Stila',
    url: 'http://stila.co.uk',
    frameworks: ['shopify','jQ'],
    lang: ['html','css','js','liquid'],
    roles: ['fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Zettics',
    url: 'http://www.zettics.com',
    frameworks: ['wp','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'The Makeup School of London',
    url: 'http://makeupschoollondon.co.uk',
    frameworks: ['cake','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed','des'],
    status: 0,
    agency: ['gv']
  },{
    label: 'Red Central',
    url: 'http://redcentral.co.uk',
    frameworks: ['tumblr'],
    lang: ['html'],
    roles: ['ted'],
    status: 0,
    agency: ['gv']
  },{
    label: 'CKD Audit',
    url: 'http://www.ckdaudit.org.uk',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Goram+Vincent',
    url: 'http://goramandvincent.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Somnium',
    url: 'http://somniumtech.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Informatica',
    url: 'http://healthanalytics.bmj.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Space Engineering',
    url: 'http://www.space-engineering.co.uk',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Ontology',
    url: 'http://www.ontology.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1,
    agency: ['gv']
  },{
    label: 'Ebis for Schools',
    url: 'http://www.ebisforschools.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 0,
    agency: ['gv']
  },{
    label: 'Velocent',
    url: 'http://www.velocent.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 0,
    agency: ['gv']
  },{
    label: 'Bournemouth University',
    url: 'https://home.bournemouth.ac.uk',
    frameworks: ['drup','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed'],
    status: 0,
    agency: ['dv']
  },{
    label: 'Visitor Review',
    url: 'https://home.bournemouth.ac.uk',
    frameworks: ['zend'],
    lang: ['html','css','js','php'],
    roles: ['fed','ted','bed'],
    status: 0,
    agency: ['dv']
  }
];
