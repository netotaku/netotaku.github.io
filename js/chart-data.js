var charts = {

  roles: {
    fed: { label: 'Frontend Developer' },
    bed: { label: 'Backend Developer' },
    prod:{ label: 'Producer' },
    ted: { label: 'Technical Director' },
    ind: { label: 'Independant' }
  },

  frameworks: {
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
    zend: { label: 'Zend' }
  },

  lang: {
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
    label: 'MediaSmart',
    url: 'http://mediasmart.uk.com',
    frameworks: ['c5'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted'],
    status: 1
  },{
    label: 'BSM',
    url: 'http://bsm.co.uk',
    frameworks: ['modx'],
    lang: ['html','sass','js'],
    roles: ['fed'],
    status: 1
  },{
    label: 'Kia',
    url: 'http://kia.co.uk',
    frameworks: ['score'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 0
  },{
    label: '50 Things',
    url: 'https://www.50things.org.uk',
    frameworks: ['umb'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 1
  },{
    label: 'Alison\'s Kitchen',
    url: 'https://alisons.kitchen',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','ind'],
    status: 1
  },{
    label: 'Gabrielle Blackman',
    url: 'http://gabrielleblackman.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed','bed','ted','ind'],
    status: 1
  },{
    label: 'GigHub',
    url: 'http://gighub.co.uk',
    frameworks: ['slim','lara','jQ'],
    lang: ['html','sass','js','php','blade'],
    roles: ['fed','bed','ted','ind'],
    status: 1
  },{
    label: 'King &amp; Allen',
    url: 'http://kingandallen.co.uk',
    frameworks: ['besp','yui'],
    lang: ['html','css','js','php'],
    roles: ['fed','bed','ind'],
    status: 1
  },{
    label: 'Scottish Dental',
    url: 'http://www.scottishdental.org',
    frameworks: ['besp','yui'],
    lang: ['html','css','js'],
    roles: ['fed','ind'],
    status: 0
  },{
    label: 'Rethink',
    url: 'http://www.rethink.org',
    frameworks: ['besp','flash'],
    lang: ['html','css','js'],
    roles: ['fed','ind'],
    status: 0
  },{
    label: 'Nathan Collis',
    url: 'http://www.nathancollis.com',
    frameworks: ['besp','yui'],
    lang: ['html','css','js'],
    roles: ['fed','ind'],
    status: 0
  },{
    label: 'CreditCall',
    url: 'http://www.creditcall.com',
    frameworks: ['wp','jQ'],
    lang: ['html','sass','js'],
    roles: ['fed','ted'],
    status: 1
  },{
    label: 'The Royal Navy',
    url: 'http://www.royalnavy.mod.uk',
    frameworks: ['score','jQ'],
    lang: ['html','css','js'],
    roles: ['fed'],
    status: 0
  },{
    label: 'Philip Mould',
    url: 'http://www.philipmould.com',
    frameworks: ['perch','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1
  },{
    label: 'The Mill',
    url: 'http://www.themill.com',
    frameworks: ['wp','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1
  },{
    label: 'Stila',
    url: 'http://stila.co.uk',
    frameworks: ['shopify','jQ'],
    lang: ['html','css','js','liquid'],
    roles: ['fed','bed'],
    status: 1
  },{
    label: 'Zettics',
    url: 'http://www.zettics.com',
    frameworks: ['wp','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 1
  },{
    label: 'The Makeup School of London',
    url: 'http://makeupschoollondon.co.uk',
    frameworks: ['cake','jQ'],
    lang: ['html','css','js'],
    roles: ['fed','bed'],
    status: 0
  },{
    label: 'Red Central',
    url: 'http://redcentral.co.uk',
    frameworks: ['tumblr'],
    lang: ['html'],
    roles: ['ted'],
    status: 1
  },{
    //
    label: 'CKD Audit',
    url: 'http://www.ckdaudit.org.uk',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1
  },{
    label: 'Somnium',
    url: 'http://somniumtech.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1
  },{
    label: 'Informatica',
    url: 'http://healthanalytics.bmj.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1
  },{
    label: 'Space Engineering',
    url: 'http://www.space-engineering.co.uk',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1
  },{
    label: 'Ontology',
    url: 'http://www.ontology.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 1
  },{
    label: 'Ebis for Schools',
    url: 'http://www.ebisforschools.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 0
  },{
    label: 'Velocent',
    url: 'http://www.velocent.com',
    frameworks: ['c5','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['ted','fed','bed'],
    status: 0
  },{
    label: 'Bournemouth University',
    url: 'https://home.bournemouth.ac.uk',
    frameworks: ['drup','jQ'],
    lang: ['html','sass','js','php'],
    roles: ['fed'],
    status: 0
  },{
    label: 'Visitor Review',
    url: 'https://home.bournemouth.ac.uk',
    frameworks: ['zend'],
    lang: ['html','css','js','php'],
    roles: ['fed','ted','bed'],
    status: 0
  }
];
