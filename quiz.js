const LETTERS = ['A','B','C','D','E','F'];

/* ─────────────────────────────────────────────────────────
   ~50 DENOMINATION DEFINITIONS
───────────────────────────────────────────────────────── */
const denominations = {

/* ── CATHOLIC / EASTERN ── */
RC: {
    name: "Roman Catholic",
    family: "Western Catholic",
    tagline: "The fullness of the faith, with Peter as visible head",
    desc: "You find yourself most at home in Roman Catholicism — its teaching authority, seven sacraments, rich tradition of Marian devotion, natural law ethics, and the belief that the Church founded by Christ continues visibly in communion with Rome. You value the Catechism's depth and prefer a consistent, historic faith over pick-and-choose spirituality.",
    traits: [{ label: "Sacraments", val: "Seven — transubstantiation" },{ label: "Authority", val: "Scripture + Tradition + Magisterium" },{ label: "Worship", val: "Roman Rite (Ordinary Form)" },{ label: "Soteriology", val: "Synergistic — grace + faith + works" }]
  },
  RC_TRAD: {
    name: "Traditional Latin Mass Catholic",
    family: "Western Catholic (Traditionalist)",
    tagline: "Lex orandi, lex credendi — the ancient Mass unchanged",
    desc: "You are drawn to the traditionalist side of Roman Catholicism — the Extraordinary Form of the Mass, the 1962 calendar, Gregorian chant, and the Baltimore Catechism. You tend to view the liturgical changes after Vatican II with concern and feel the older form better preserves the faith.",
    traits: [{ label: "Sacraments", val: "Seven — strict transubstantiation" },{ label: "Authority", val: "Pre-Vatican II Magisterium" },{ label: "Worship", val: "Extraordinary Form / TLM" },{ label: "Soteriology", val: "Trent — merit, purgatory, indulgences" }]
  },
  EC: {
    name: "Eastern Catholic",
    family: "Eastern Catholic (in communion with Rome)",
    tagline: "The Eastern lung of the one Church — Rome's communion, Byzantine soul",
    desc: "You are Eastern Catholic — Byzantine, Coptic, Syriac, Armenian, or another Eastern rite in full communion with Rome. You share the Catholic faith and the Pope's authority, but your worship and spirituality follow the Eastern tradition: the Divine Liturgy, theosis, icons, and often a married priesthood.",
    traits: [{ label: "Sacraments", val: "Seven mysteries" },{ label: "Authority", val: "Rome + Eastern Tradition" },{ label: "Worship", val: "Eastern Rite (Byzantine, etc.)" },{ label: "Soteriology", val: "Synergistic, theosis-oriented" }]
  },
  EO: {
    name: "Eastern Orthodox",
    family: "Ancient & Eastern",
    tagline: "One, Holy, Catholic, and Apostolic — the unbroken stream",
    desc: "You are drawn to the ancient, mystical tradition of Eastern Orthodoxy. You lean toward theosis, icons, the Church Fathers, and the Divine Liturgy as heaven on earth. You tend to be wary of both Roman centralization and Protestant fragmentation.",
    traits: [{ label: "Sacraments", val: "Seven holy mysteries" },{ label: "Authority", val: "Scripture + Holy Tradition" },{ label: "Worship", val: "Byzantine Divine Liturgy" },{ label: "Soteriology", val: "Theosis / synergistic" }]
  },
  OO: {
    name: "Oriental Orthodox",
    family: "Ancient Eastern (Non-Chalcedonian)",
    tagline: "The ancient faith before the Council of Chalcedon divided the East",
    desc: "You belong to the Oriental Orthodox family — Coptic, Ethiopian, Eritrean, Armenian, Syriac, or Malankara. Your churches maintained the miaphysite understanding of Christ and represent one of the oldest continuous Christian traditions.",
    traits: [{ label: "Sacraments", val: "Seven mysteries" },{ label: "Authority", val: "Pre-Chalcedonian Holy Tradition" },{ label: "Worship", val: "Coptic/Ethiopian/Armenian liturgy" },{ label: "Christology", val: "Miaphysite (one nature)" }]
  },
  AC: {
    name: "Old Catholic",
    family: "Independent Catholic",
    tagline: "Catholic faith without the First Vatican Council's excesses",
    desc: "You are Old Catholic — part of the Utrecht Union or a related independent Catholic body. You maintain Catholic sacraments and apostolic succession but rejected the definition of papal infallibility in 1870.",
    traits: [{ label: "Sacraments", val: "Seven — valid succession" },{ label: "Authority", val: "Ecumenical councils (first seven)" },{ label: "Worship", val: "Western liturgy (vernacular)" },{ label: "Soteriology", val: "Catholic — synergistic" }]
  },

  /* ── EARLY CHURCH RIGORIST ── */
  NOVAT: {
    name: "Novatianist",
    family: "Early Church Rigorist",
    tagline: "The Pure Church — no compromise with the lapsed",
    desc: "You resonate with the ancient Novatianist movement. After the intense persecutions of the 3rd century, they insisted on keeping the church completely pure. They refused to readmit Christians who had denied the faith or sacrificed to pagan gods during persecution, believing such serious sins could not be forgiven by the church on earth — only by God after a lifetime of penance. They saw themselves as the faithful remnant preserving the church’s holiness.",
    traits: [{ label: "Church", val: "A congregation of saints only" },{ label: "Discipline", val: "No readmission for serious sins" },{ label: "Sacraments", val: "Rebaptism of those from other groups" },{ label: "Morality", val: "Strict — no second marriage" }]
  },
   
  /* ── LUTHERAN ── */
  LU_ELCA: {
    name: "Evangelical Lutheran Church in America (ELCA)",
    family: "Mainline Lutheran",
    tagline: "Sola gratia, sola fide — in dialogue with the modern world",
    desc: "You are part of the largest Lutheran body in the US. The ELCA is known for its ecumenical openness, women's ordination, and progressive stances on social issues while maintaining core Lutheran theology like real presence in the Eucharist.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Lutheran tradition" },{ label: "Worship", val: "Liturgical with contemporary options" },{ label: "Soteriology", val: "Grace-centered, rejects perseverance of the saints" }]
  },
  LU_LCMS: {
    name: "Lutheran Church–Missouri Synod (LCMS)",
    family: "Confessional Lutheran",
    tagline: "Sola gratia, sola fide — the Book of Concord stands",
    desc: "You are in the second-largest Lutheran body in America. The LCMS is strongly confessional, holds to biblical inerrancy, practices closed communion, ordains only men, and emphasizes doctrinal unity.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture (inerrant) + Book of Concord" },{ label: "Worship", val: "Liturgical, historic Lutheran rite" },{ label: "Fellowship", val: "Closed communion" }]
  },
  LU_WELS: {
    name: "Wisconsin Evangelical Lutheran Synod (WELS)",
    family: "Confessional Lutheran (Strict)",
    tagline: "The truth of God’s Word — no compromise",
    desc: "You belong to the WELS, often seen as one of the most conservative Lutheran bodies. You require full doctrinal agreement even for joint prayer, practice very strict closed communion, and do not allow women's suffrage in church voting.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + full Book of Concord" },{ label: "Fellowship", val: "Very strict" },{ label: "Worship", val: "Liturgical, conservative" }]
  },
  LU_ELS: {
    name: "Evangelical Lutheran Synod (ELS)",
    family: "Confessional Lutheran",
    tagline: "Grace alone, faith alone, Scripture alone",
    desc: "You are part of the ELS, a smaller confessional synod with strong Norwegian roots, closely aligned with the WELS. You emphasize doctrinal purity and historic Lutheran teaching.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Book of Concord" },{ label: "Worship", val: "Traditional liturgical" }]
  },
  LU_LCMC: {
    name: "Lutheran Congregations in Mission for Christ (LCMC)",
    family: "Post-ELCA Evangelical Lutheran",
    tagline: "Congregational freedom with Lutheran confession",
    desc: "You are in LCMC, formed by congregations that left the ELCA. You value strong congregational autonomy, allow women's ordination, and blend Lutheran theology with contemporary worship and evangelical energy.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Lutheran Confessions" },{ label: "Polity", val: "Highly congregational" },{ label: "Worship", val: "Varied — traditional to contemporary" }]
  },
  LU_NALC: {
    name: "North American Lutheran Church (NALC)",
    family: "Confessing Lutheran",
    tagline: "Faithful to Scripture and the Lutheran Confessions",
    desc: "You belong to the NALC, another major group that broke from the ELCA. You hold a more structured denominational model, value liturgical worship, ordain women, and seek to be both evangelical and catholic.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Book of Concord" },{ label: "Worship", val: "Liturgical and sacramental" }]
  },
  LU_AFLC: {
    name: "Association of Free Lutheran Congregations (AFLC)",
    family: "Free Lutheran",
    tagline: "Free and living congregations",
    desc: "You are part of the AFLC, rooted in Norwegian revival tradition. You emphasize congregational freedom, liturgical simplicity, conservative theology, and do not ordain women.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Lutheran Confessions" },{ label: "Polity", val: "Strongly congregational" },{ label: "Worship", val: "Simpler, revival-influenced" }]
  },
  LU_CLBA: {
    name: "Church of the Lutheran Brethren of America (CLBA)",
    family: "Lutheran Brethren",
    tagline: "Pure congregations through discipline",
    desc: "You belong to the CLBA, a small but active group with Norwegian Haugean revival roots. You stress personal faith, church discipline, foreign missions, and maintain conservative theology with simpler worship.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Lutheran Confessions" },{ label: "Discipline", val: "Emphasis on pure membership" },{ label: "Worship", val: "Liturgically informal" }]
  },
  LU_CLC: {
    name: "Church of the Lutheran Confession (CLC)",
    family: "Strict Confessional Lutheran",
    tagline: "Standing firmly on the old Synodical Conference principles",
    desc: "You are in the CLC, formed by those who felt the WELS and ELS were not strict enough in applying fellowship principles. You uphold very rigorous confessional standards and biblical inerrancy.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + full Book of Concord" },{ label: "Fellowship", val: "Extremely strict" }]
  },
  LU_AALC: {
    name: "American Association of Lutheran Churches (AALC)",
    family: "Confessional Lutheran",
    tagline: "Standing firm on the Word of God",
    desc: "You belong to the AALC, a smaller group that declined to join the ELCA merger. You share much in common with the LCMS and have fellowship arrangements with them.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Scripture + Book of Concord" },{ label: "Worship", val: "Liturgical" }]
  },
  LU_CONFESSIONAL: {
    name: "Independent / Micro-Synod Confessional Lutheran",
    family: "Strict Confessional Lutheran",
    tagline: "The pure marks of the Church — Word and Sacrament",
    desc: "You identify with smaller independent confessional Lutheran congregations or micro-synods that prioritize complete fidelity to the Book of Concord, often with stricter practices than even the major conservative bodies.",
    traits: [{ label: "Sacraments", val: "Two — real presence" },{ label: "Authority", val: "Full subscription to the Book of Concord" },{ label: "Fellowship", val: "Very strict" }]
  },

  /* ── ANGLICAN ── */
  AN_TRAD: {
    name: "Anglican (ACNA / Global South)",
    family: "Reformed Catholic — Traditional Anglican",
    tagline: "The via media, held with confessional fidelity",
    desc: "You are a traditional Anglican — likely in ACNA, GAFCON, or a Global South province. You value the Book of Common Prayer, the Thirty-Nine Articles, and historic Anglican liturgy and ethics.",
    traits: [{ label: "Sacraments", val: "Two — spiritual presence" },{ label: "Authority", val: "Scripture, BCP, 39 Articles" },{ label: "Worship", val: "BCP 1662 or 2019, liturgical" },{ label: "Soteriology", val: "Reformed-Catholic, justification by faith" }]
  },
  AN_PROG: {
    name: "Episcopal (TEC / Progressive Anglican)",
    family: "Reformed Catholic — Progressive Anglican",
    tagline: "The via media, held with generous orthodoxy",
    desc: "You are a progressive Anglican or Episcopalian — supportive of women's ordination, LGBTQ+ inclusion, and seeing the tradition as something that continues to develop.",
    traits: [{ label: "Sacraments", val: "Two — spiritual presence" },{ label: "Authority", val: "Scripture through reason & tradition" },{ label: "Worship", val: "BCP liturgy, inclusive language" },{ label: "Soteriology", val: "Broad, emphasizes transformation" }]
  },

  /* ── METHODIST ── */
  ME_TRAD: {
    name: "Methodist (Global Methodist Church)",
    family: "Evangelical Wesleyan — Traditional",
    tagline: "Scriptural holiness — and scriptural fidelity",
    desc: "You are a traditional Wesleyan Methodist who left or supports leaving the United Methodist Church over its decisions on human sexuality. The Global Methodist Church represents your conviction that Methodist doctrine is not infinitely malleable, that Scripture must govern the church's ethics, and that holiness — heart and life — is the calling of every Christian. You hold Wesleyan soteriology (prevenient grace, entire sanctification) firmly.",
    traits: [{ label: "Sacraments", val: "Two — spiritual presence" },{ label: "Authority", val: "Wesley's Quadrilateral (Scripture primary)" },{ label: "Worship", val: "Hymnic, order of worship" },{ label: "Soteriology", val: "Arminian, entire sanctification" }]
  },
  ME_UMC: {
    name: "Methodist (United Methodist Church)",
    family: "Evangelical Wesleyan — Ecumenical",
    tagline: "Open hearts, open minds, open doors",
    desc: "You are a United Methodist — holding Wesleyan theology (prevenient grace, free will, sanctification, the Quadrilateral), a connectional church structure, and a broad theological tent. You may hold traditional or progressive views on sexuality, but you remain in the UMC and value its diverse, connectional witness. Social holiness — the pursuit of justice — is as important as personal holiness to you.",
    traits: [{ label: "Sacraments", val: "Two — spiritual presence" },{ label: "Authority", val: "Wesleyan Quadrilateral" },{ label: "Worship", val: "Varied — liturgical to contemporary" },{ label: "Soteriology", val: "Arminian — prevenient grace" }]
  },

  /* ── PRESBYTERIAN ── */
  PR_PCA: {
    name: "Presbyterian (PCA)",
    family: "Calvinist Reformation — Conservative Presbyterian",
    tagline: "Semper reformanda — the Westminster Standards stand",
    desc: "Your theological home is the Presbyterian Church in America — confessional subscription to the Westminster Standards, the five points of Calvinism, male-only ordination, expository preaching, and the regulative principle of worship. You care deeply about both the purity and peace of the church, probably know your Shorter Catechism, and are wary of evangelical compromise on doctrine.",
    traits: [{ label: "Sacraments", val: "Two — spiritual/covenantal presence" },{ label: "Authority", val: "Westminster Confession + Scripture" },{ label: "Worship", val: "Word-centered, regulative principle" },{ label: "Soteriology", val: "TULIP, covenant theology" }]
  },
  PR_PCUSA: {
    name: "Presbyterian (PCUSA)",
    family: "Calvinist Reformation — Progressive Presbyterian",
    tagline: "Reformed and always reforming — in every generation",
    desc: "You are a PCUSA Presbyterian — holding the Reformed theological heritage (covenant theology, the sovereignty of God, sola scriptura) while embracing women's ordination, full LGBTQ+ inclusion, and a generous approach to the Westminster Standards. You care about social justice as an expression of the Reformed tradition's engagement with all of life, and you hold doctrinal questions with a certain theological generosity.",
    traits: [{ label: "Sacraments", val: "Two — spiritual presence" },{ label: "Authority", val: "Scripture + Reformed tradition" },{ label: "Worship", val: "Liturgical to contemporary" },{ label: "Soteriology", val: "Reformed, inclusive emphasis" }]
  },

  /* ── CONTINENTAL REFORMED ── */
  RE_OPC: {
    name: "Orthodox Presbyterian Church",
    family: "Calvinist Reformation — Strict Confessionalist",
    tagline: "Machen's warrior children — Scripture, confession, no compromise",
    desc: "You are OPC — the church J. Gresham Machen founded when he left the liberalizing PCUSA in 1936. You hold strict confessional subscription to the Westminster Standards, reject both liberalism and neo-orthodoxy, insist on biblical inerrancy, practice the regulative principle of worship with care, and take church discipline seriously. Small but sturdy, the OPC values theological precision above all.",
    traits: [{ label: "Sacraments", val: "Two — covenant signs" },{ label: "Authority", val: "Westminster Standards (full subscription)" },{ label: "Worship", val: "Plain, regulated, psalm-singing valued" },{ label: "Soteriology", val: "Strict five-point Calvinism" }]
  },
  RE_URC: {
    name: "United Reformed Churches (URCNA)",
    family: "Calvinist Reformation — Continental Conservative",
    tagline: "Three Forms of Unity — the Dutch Reformed heritage in North America",
    desc: "You are United Reformed — confessionally bound to the Three Forms of Unity (Heidelberg Catechism, Belgic Confession, Canons of Dort), a descendant of the Dutch Reformed tradition that came through the Christian Reformed Church. You take church order seriously (Church Order of Dort), practice the regulative principle, catechize your children thoroughly, and are wary of the CRC's perceived drift.",
    traits: [{ label: "Sacraments", val: "Two — covenant signs" },{ label: "Authority", val: "Three Forms of Unity" },{ label: "Worship", val: "Plain, regulated, Psalter-focused" },{ label: "Soteriology", val: "Dortian Calvinism" }]
  },
  RE_CRC: {
    name: "Christian Reformed Church",
    family: "Calvinist Reformation — Dutch Reformed",
    tagline: "Every square inch — Kuyper's Reformed worldview",
    desc: "You are Christian Reformed — shaped by Abraham Kuyper's Neo-Calvinist vision that every sphere of life falls under Christ's lordship. You hold the Three Forms of Unity, engage seriously with Christian scholarship and culture (think Calvin College, the Kuyperian tradition), and occupy a position between the strict confessionalism of the URCNA and the openness of the RCA. The CRC has been roiled by debates over women's ordination and sexuality.",
    traits: [{ label: "Sacraments", val: "Two — covenant signs" },{ label: "Authority", val: "Three Forms of Unity" },{ label: "Worship", val: "Liturgical structure, Psalms + hymns" },{ label: "Soteriology", val: "Calvinist, common grace emphasis" }]
  },
  RE_RCA: {
    name: "Reformed Church in America",
    family: "Calvinist Reformation — Ecumenical Reformed",
    tagline: "The oldest Protestant denomination in continuous service in North America",
    desc: "You are RCA — the oldest continuous Protestant denomination in North America, with roots in the Dutch Reformed church. Like the CRC you hold the Three Forms of Unity, but you are more ecumenically open, more willing to cooperate across denominational lines, and less culturally distinctive. You take Reformed theology seriously but hold it with generous evangelical warmth.",
    traits: [{ label: "Sacraments", val: "Two — covenant signs" },{ label: "Authority", val: "Three Forms of Unity (broadly)" },{ label: "Worship", val: "Traditional to contemporary" },{ label: "Soteriology", val: "Calvinist, warm evangelical" }]
  },

  /* ── BAPTIST ── */
  BA_SBC: {
    name: "Southern Baptist (SBC)",
    family: "Free Church — Conservative Baptist",
    tagline: "A regenerate church, believer-baptized, Bible-inerrant",
    desc: "You are Southern Baptist — insisting on believer's baptism by immersion, congregational polity, inerrancy of Scripture (Baptist Faith and Message 2000), male-only pastoral office, and cooperative missions through the Cooperative Program. You care about church planting, evangelism, and holding the line on biblical sexuality and gender. The SBC is the largest Protestant denomination in the United States.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture alone (inerrant)" },{ label: "Worship", val: "Expository preaching, varied music" },{ label: "Soteriology", val: "Calvinist and Arminian wings" }]
  },
  BA_IFB: {
    name: "Independent Fundamental Baptist",
    family: "Free Church — Fundamentalist Baptist",
    tagline: "Separated, biblical, uncompromising — the old-time religion",
    desc: "You are IFB — Independent Fundamental Baptist, heir to the fundamentalist movement of the early 20th century. You insist on biblical separation from apostasy and worldliness, KJV-Only (or very conservative Bible translation standards), strict standards of dress and behavior, cessationism, and strong local church autonomy. You distrust the Southern Baptist Convention as too compromised and cooperative with liberals.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "KJV Scripture alone (inerrant)" },{ label: "Worship", val: "Traditional, conservative, formal" },{ label: "Soteriology", val: "Mostly Arminian, eternal security" }]
  },
  BA_REF: {
    name: "Reformed Baptist",
    family: "Free Church — Calvinist Baptist",
    tagline: "The 1689 Confession — sovereign grace and believer's baptism together",
    desc: "You are a Reformed Baptist — holding the Second London Baptist Confession of 1689, the five points of Calvinism, believer's baptism by immersion (not paedobaptism), and congregational polity. You believe the Reformation's recovery of sovereign grace was right, but that Luther and Calvin erred in retaining infant baptism. Your tradition includes Spurgeon and the Particular Baptists.",
    traits: [{ label: "Sacraments", val: "Two ordinances — believer's baptism" },{ label: "Authority", val: "Scripture + 1689 Confession" },{ label: "Worship", val: "Expository, psalm-singing valued" },{ label: "Soteriology", val: "Five-point Calvinism" }]
  },
  BA_ABC: {
    name: "American Baptist (ABC-USA)",
    family: "Free Church — Moderate Baptist",
    tagline: "Freedom of conscience under Scripture — the soul competency",
    desc: "You are American Baptist — the more moderate, northern counterpart to the SBC. You hold believer's baptism and congregational polity as essential, but you allow significant theological diversity on secondary questions. You support women's ordination, are more open on inerrancy, and many ABC churches have embraced LGBTQ+ inclusion. Soul competency — every person's direct accountability to God — is a hallmark.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture (variously interpreted)" },{ label: "Worship", val: "Varied — traditional to progressive" },{ label: "Soteriology", val: "Varied — Arminian to Calvinist" }]
  },
  BA_CBF: {
    name: "Cooperative Baptist Fellowship",
    family: "Free Church — Progressive Baptist",
    tagline: "Soul freedom, Bible freedom, church freedom, religious freedom",
    desc: "You are CBF — the Cooperative Baptist Fellowship, formed in 1991 by Baptists who left the SBC during the conservative resurgence. You hold the four freedoms (soul, Bible, church, religious), support women in ministry at all levels, are open on LGBTQ+ inclusion, and engage the world through cooperative missions and advocacy. You are Baptist in form but progressive in outlook.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture through prayerful interpretation" },{ label: "Worship", val: "Varied, inclusive" },{ label: "Soteriology", val: "Arminian-leaning, broad" }]
  },

  /* ── RESTORATION ── */
  CH_COC: {
    name: "Churches of Christ",
    family: "Restoration Movement — A Cappella",
    tagline: "Speak where the Bible speaks; be silent where it is silent",
    desc: "You are Churches of Christ — rejecting denominationalism and creeds entirely, insisting on a return to New Testament Christianity, practicing baptism for remission of sins (Acts 2:38), and worshipping a cappella because instrumental music in worship has no New Testament precedent. You hold congregational autonomy absolutely and take the 'pattern theology' of Scripture seriously.",
    traits: [{ label: "Sacraments", val: "Baptism for remission of sins" },{ label: "Authority", val: "Scripture alone — NT pattern" },{ label: "Worship", val: "A cappella, no instruments" },{ label: "Soteriology", val: "Conditional — obedient faith" }]
  },
  CH_ICC: {
    name: "Independent Christian Churches",
    family: "Restoration Movement — Instrumental",
    tagline: "Christian unity on the Bible alone — instruments welcome",
    desc: "You are an Independent Christian Church — part of the Restoration Movement alongside Churches of Christ and Disciples of Christ, but in the middle: you use instrumental music unlike the CoC, but you remain theologically conservative and congregationally autonomous unlike the Disciples. You call the communion table the Lord's Supper, baptize believers for remission of sins, and resist denominational structures.",
    traits: [{ label: "Sacraments", val: "Baptism for remission, Lord's Supper weekly" },{ label: "Authority", val: "Scripture alone" },{ label: "Worship", val: "Varied — traditional to contemporary" },{ label: "Soteriology", val: "Broadly evangelical, conditional" }]
  },
  DI: {
    name: "Disciples of Christ",
    family: "Restoration Movement — Progressive",
    tagline: "In essentials unity, in opinions liberty, in all things charity",
    desc: "You are a Disciple of Christ — from the most ecumenical and theologically progressive wing of the Restoration Movement. You value the Lord's Supper every Sunday, believer's baptism (though you accept transfers), and the call to Christian unity above doctrinal division. You support women's ordination, are fully LGBTQ+ affirming, and are members of the National and World Council of Churches.",
    traits: [{ label: "Sacraments", val: "Open communion weekly, baptism" },{ label: "Authority", val: "Scripture through free inquiry" },{ label: "Worship", val: "Open, ecumenical, inclusive" },{ label: "Soteriology", val: "Broad, grace-centered" }]
  },

  /* ── ANABAPTIST ── */
  ME_MEN: {
    name: "Mennonite Church USA",
    family: "Radical Reformation — Anabaptist",
    tagline: "Follow me — the way of Jesus, the Sermon on the Mount",
    desc: "You are a Mennonite — heir to the 16th-century Anabaptist martyrs who insisted on believer's baptism, nonresistance, separation of church and state, and a community of radical discipleship. The Mennonite Church USA is the most progressive Mennonite body, now fully LGBTQ+ affirming, but still shaped by the Anabaptist peace witness and incarnational mission theology.",
    traits: [{ label: "Sacraments", val: "Ordinances — believers only" },{ label: "Authority", val: "Scripture, Christocentric" },{ label: "Worship", val: "Simple, communal, four-part harmony" },{ label: "Soteriology", val: "Discipleship and community-shaped" }]
  },
  MEN_CONS: {
    name: "Conservative Mennonite",
    family: "Radical Reformation — Conservative Anabaptist",
    tagline: "Gelassenheit — yieldedness to God and community",
    desc: "You are a Conservative Mennonite or Beachy Amish — maintaining the Anabaptist distinctives of believer's baptism, nonresistance, and church discipline, while holding traditional views on dress standards, women's head coverings, biblical sexuality, and separation from worldliness. You use cars and electricity (unlike Old Order Amish) but resist cultural accommodation more firmly than Mennonite Church USA.",
    traits: [{ label: "Sacraments", val: "Ordinances — believers only" },{ label: "Authority", val: "Scripture + Anabaptist confession" },{ label: "Worship", val: "Plain, conservative, a cappella singing" },{ label: "Soteriology", val: "Yieldedness, discipleship" }]
  },
  AMISH: {
    name: "Old Order Amish",
    family: "Radical Reformation — Separatist Anabaptist",
    tagline: "Gelassenheit — yielding to God, community, and the Ordnung",
    desc: "You are Old Order Amish — practicing the strictest form of Anabaptist community life. The Ordnung (community order) governs dress, technology use, farming practices, and social interaction with the outside world. You resist electricity, automobiles, and modern technology as threats to community, humility, and dependence on God. Church discipline (the Ban) is taken seriously, and the barn raising is more important than any sermon.",
    traits: [{ label: "Sacraments", val: "Ordinances — foot-washing included" },{ label: "Authority", val: "Scripture + Ordnung + bishop" },{ label: "Worship", val: "Home-based, German, a cappella" },{ label: "Soteriology", val: "Gelassenheit — yield, trust, wait" }]
  },
  HUTTERITE: {
    name: "Hutterite Brethren",
    family: "Radical Reformation — Communal Anabaptist",
    tagline: "All things in common — the Acts 2 community, lived out",
    desc: "You are Hutterite — the most communal of the Anabaptist traditions, living in intentional agricultural communities (colonies) where property is held in common. Named for Jacob Hutter (martyred 1536), you hold believer's baptism, pacifism, communal economics as a theological conviction (not just a lifestyle), and separation from the surrounding world. Your colonies stretch across the northern Great Plains and Canadian prairies.",
    traits: [{ label: "Sacraments", val: "Ordinances — full community context" },{ label: "Authority", val: "Scripture + colony elders" },{ label: "Worship", val: "German, a cappella, colony chapel" },{ label: "Soteriology", val: "Communal salvation — body life" }]
  },
  BRETHREN: {
    name: "Church of the Brethren",
    family: "Radical Reformation — Pietist Anabaptist",
    tagline: "No creed but the New Testament — love feast and threefold baptism",
    desc: "You are Church of the Brethren — a tradition blending Anabaptist and German Pietist streams. You practice believer's baptism by threefold forward immersion (trine immersion), a full Love Feast with foot-washing and the Lord's Supper, nonresistance, and simple living. You have historically been one of the three Historic Peace Churches alongside Quakers and Mennonites. The Brethren tend toward progressive social positions today.",
    traits: [{ label: "Sacraments", val: "Ordinances — trine immersion" },{ label: "Authority", val: "New Testament (no formal creed)" },{ label: "Worship", val: "Simple, love feast, foot-washing" },{ label: "Soteriology", val: "Pietist discipleship, peace emphasis" }]
  },

  /* ── PENTECOSTAL / CHARISMATIC ── */
  PE_AG: {
    name: "Assemblies of God",
    family: "Pentecostal — Classical",
    tagline: "The full gospel — saved, sanctified, Spirit-filled, healed, coming King",
    desc: "You are Assemblies of God — the world's largest Pentecostal denomination. You hold that speaking in tongues is the initial physical evidence of the baptism of the Holy Spirit (a second definite work of grace after conversion), that divine healing is in the atonement, and that Christ's return is imminent. You are premillennial, evangelical on Scripture, and your worship is expressive and Spirit-oriented.",
    traits: [{ label: "Sacraments", val: "Two ordinances — believer's baptism" },{ label: "Authority", val: "Scripture (inerrant) + Spirit's voice" },{ label: "Worship", val: "Expressive, spontaneous, praise" },{ label: "Soteriology", val: "Arminian — four-square gospel" }]
  },
  PE_COG: {
    name: "Church of God (Cleveland)",
    family: "Pentecostal — Holiness",
    tagline: "The church of God — Spirit-filled and sanctified",
    desc: "You are Church of God (Cleveland, TN) — one of the oldest Pentecostal denominations, rooted in the Holiness revival and the Azusa Street awakening. Like the AG you affirm tongues as initial evidence of Spirit baptism, but your tradition has a stronger Wesleyan-holiness emphasis on entire sanctification as a distinct second work of grace before Spirit baptism. You have a more episcopal polity than most Pentecostals.",
    traits: [{ label: "Sacraments", val: "Three ordinances (incl. foot-washing)" },{ label: "Authority", val: "Scripture + Spirit's ongoing work" },{ label: "Worship", val: "Expressive, holiness tradition" },{ label: "Soteriology", val: "Wesleyan-Pentecostal: saved, sanctified, filled" }]
  },
  PE_COGIC: {
    name: "Church of God in Christ (COGIC)",
    family: "Pentecostal — Black Church Tradition",
    tagline: "The largest Black Pentecostal denomination in the world",
    desc: "You are COGIC — the Church of God in Christ, founded by Bishop Charles Harrison Mason in 1897 and the largest Black Pentecostal denomination. You hold classical Pentecostal theology (tongues as initial evidence, divine healing, Spirit baptism) within the rich tradition of Black Christianity, with its emphasis on communal survival, prophetic witness, soulful worship, and powerful preaching. You hold traditional views on gender and sexuality.",
    traits: [{ label: "Sacraments", val: "Two ordinances — believer's baptism" },{ label: "Authority", val: "Scripture + Spirit's anointing" },{ label: "Worship", val: "Vibrant, musical, Spirit-led" },{ label: "Soteriology", val: "Wesleyan-Pentecostal, full gospel" }]
  },
  CH_VIN: {
    name: "Vineyard Church",
    family: "Charismatic — Third Wave",
    tagline: "Naturally supernatural — the kingdom come, the Spirit poured out",
    desc: "You are Vineyard — the Third Wave charismatic movement founded by John Wimber. You believe spiritual gifts are available today, practice healing prayer and prophetic ministry, but you don't require tongues as initial evidence of Spirit baptism. Your worship style — intimate, acoustic, contemporary — has influenced global Christianity. You hold evangelical theology with a relaxed, come-as-you-are ethos and focus on 'doing the stuff' of the kingdom.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture + Spirit's ongoing gifts" },{ label: "Worship", val: "Intimate contemporary worship" },{ label: "Soteriology", val: "Broadly evangelical, Arminian-leaning" }]
  },
  CH_NAR: {
    name: "New Apostolic Reformation",
    family: "Charismatic — Dominionist",
    tagline: "Apostles and prophets restored — taking the seven mountains",
    desc: "You are influenced by the New Apostolic Reformation — the belief that God is restoring the offices of apostle and prophet to the church today, that Christians are called to 'take dominion' over the seven mountains of culture (government, education, media, business, family, religion, arts), and that spiritual warfare is essential to the church's mission. This is the most controversial edge of charismatic Christianity.",
    traits: [{ label: "Sacraments", val: "Informal — Spirit encounter primary" },{ label: "Authority", val: "Scripture + living apostles + prophecy" },{ label: "Worship", val: "Warfare worship, prophetic declarations" },{ label: "Soteriology", val: "Dominionist — kingdom now" }]
  },
  CH_WORD: {
    name: "Word of Faith / Prosperity Gospel",
    family: "Charismatic — Prosperity Movement",
    tagline: "Name it and claim it — health, wealth, and the covenant",
    desc: "You are shaped by the Word of Faith movement — the belief that God's covenant promises include physical health and financial prosperity, that faith is a spiritual force that moves God, and that confession of God's Word releases blessing into your life. Critics call this 'prosperity gospel'; adherents see it as recovering the full blessings of Abraham's covenant. Associated with figures like Kenneth Hagin, Kenneth Copeland, Joel Osteen, and Creflo Dollar.",
    traits: [{ label: "Sacraments", val: "Informal — confession and faith" },{ label: "Authority", val: "Scripture (confessed positively)" },{ label: "Worship", val: "Celebratory, victory-oriented" },{ label: "Soteriology", val: "Full covenant blessing — spirit, soul, body" }]
  },

  /* ── NONDENOMINATIONAL / EVANGELICAL ── */
  CA_NONDENOM: {
    name: "Non-denominational Evangelical",
    family: "Evangelical — Independent",
    tagline: "No creed but Christ, no book but the Bible, no name but Christian",
    desc: "Your spiritual home is the non-denominational evangelical world — Bible-centered, conversion-focused, with flexible polity, contemporary worship, and an evangelical theology that draws on Baptist, Reformed, and Wesleyan streams without fully committing to any. You care about expository preaching, genuine conversion, and practical Christian living more than denominational labels.",
    traits: [{ label: "Sacraments", val: "Symbolic ordinances" },{ label: "Authority", val: "Scripture alone" },{ label: "Worship", val: "Contemporary, praise-oriented" },{ label: "Soteriology", val: "Evangelical, varies by church" }]
  },
  CA_ACT29: {
    name: "Acts 29 / Reformed Evangelical",
    family: "Evangelical — Reformed Nondenominational",
    tagline: "Gospel-centered, church-planting, Reformed in doctrine",
    desc: "You are at home in the Acts 29 network or the broader Reformed evangelical world — Calvinist in soteriology, committed to church planting and mission, expository preaching, complementarian in gender roles, and culturally engaged without being culturally accommodating. You identify with figures like Tim Keller, Mark Driscoll (early), and John Piper. You're Reformed but church-plant obsessed rather than confessionalist.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture alone (inerrant)" },{ label: "Worship", val: "Contemporary with Reformed content" },{ label: "Soteriology", val: "Five-point Calvinism, gospel-centered" }]
  },
  CA_SEEKER: {
    name: "Seeker-Sensitive Megachurch",
    family: "Evangelical — Pragmatic/Attractional",
    tagline: "Removing barriers to the gospel — meeting people where they are",
    desc: "You are at home in the seeker-sensitive megachurch world — the Willow Creek / Saddleback model that prioritizes accessibility for the unchurched, practical teaching, contemporary production values, and reducing barriers to entry. Theology is evangelical and broadly orthodox, but doctrinal precision is subordinated to relevance and felt-need ministry. The vision is to make church a place where non-Christians feel welcome.",
    traits: [{ label: "Sacraments", val: "Minimal — occasional ordinances" },{ label: "Authority", val: "Scripture + practical wisdom" },{ label: "Worship", val: "High production, contemporary" },{ label: "Soteriology", val: "Evangelical, simple gospel" }]
  },
  CA_HOUSE: {
    name: "House Church Movement",
    family: "Evangelical — Organic/Simple Church",
    tagline: "The church is not a building — it's a family",
    desc: "You are drawn to the house church or simple church movement — gathering in homes rather than institutional buildings, rejecting the clergy/laity distinction, practicing mutual ministry where every believer contributes, keeping finances minimal and community intimate. This is not a denomination but a conviction about what church is: an organism, not an organization. You're probably suspicious of institutional Christianity in all its forms.",
    traits: [{ label: "Sacraments", val: "Shared meal — participatory" },{ label: "Authority", val: "Scripture + communal discernment" },{ label: "Worship", val: "Participatory, informal, home-based" },{ label: "Soteriology", val: "Evangelical, community-shaped" }]
  },

  /* ── QUAKER ── */
  QU_UNPRG: {
    name: "Quaker — Unprogrammed (FGC)",
    family: "Radical Reformation — Liberal Quaker",
    tagline: "There is that of God in every person — waiting in the Light",
    desc: "You are an unprogrammed Quaker, likely associated with the Friends General Conference — gathering in expectant silence, waiting for the Spirit to move any member to speak. Your theology is likely liberal: you may not affirm traditional Christian doctrines about Jesus or the atonement, but you hold the Inner Light as the animating spiritual reality. You care deeply about peace, social justice, simplicity, and integrity.",
    traits: [{ label: "Sacraments", val: "None — all life is sacramental" },{ label: "Authority", val: "Inner Light / continuing revelation" },{ label: "Worship", val: "Silent waiting, unprogrammed" },{ label: "Soteriology", val: "Universal Light; universalist tendency" }]
  },
  QU_PRG: {
    name: "Quaker — Programmed / Evangelical (EFI)",
    family: "Radical Reformation — Evangelical Quaker",
    tagline: "Friends who believe Jesus is Lord — and worship accordingly",
    desc: "You are an evangelical or programmed Quaker, likely associated with Evangelical Friends International or Friends Church — holding Quaker distinctives (simplicity, peace testimony, integrity) alongside orthodox evangelical theology. You have a pastor, sing worship songs, preach sermons, and affirm the bodily resurrection and authority of Scripture. You are Quaker in heritage but evangelical in doctrine.",
    traits: [{ label: "Sacraments", val: "None outward — or informal" },{ label: "Authority", val: "Scripture primary + Inner Light" },{ label: "Worship", val: "Programmed — songs, sermon, prayer" },{ label: "Soteriology", val: "Evangelical — conversion, sanctification" }]
  },
  QU_CON: {
    name: "Quaker — Conservative (Ohio Yearly Meeting)",
    family: "Radical Reformation — Conservative Quaker",
    tagline: "Christ-centered silent worship — the original Quaker way",
    desc: "You are a Conservative Quaker — the smallest and least-known Quaker branch, holding to unprogrammed silent worship like FGC Quakers, but orthodox Christology like evangelical Quakers. You are Christocentric — the Inner Light is the Light of Christ — and you maintain traditional Quaker plainness of dress, speech (thee/thou), and lifestyle. Ohio Yearly Meeting and a few other small yearly meetings make up this quiet branch.",
    traits: [{ label: "Sacraments", val: "None outward" },{ label: "Authority", val: "Christ as Inner Light" },{ label: "Worship", val: "Silent, unprogrammed, Christocentric" },{ label: "Soteriology", val: "Inward work of Christ" }]
  },

  /* ── ADVENTIST / SABBATARIAN ── */
  AD_SDA: {
    name: "Seventh-day Adventist",
    family: "Adventist",
    tagline: "The everlasting gospel for the last days",
    desc: "Your distinctive markers are Adventist — Saturday Sabbatarianism, soul sleep (conditional immortality), annihilationism, a distinctive health message (diet, no alcohol/tobacco), a great controversy cosmology, and a strong prophetic tradition centered on Ellen G. White as a lesser light pointing to Scripture. You expect Christ's second coming imminently and understand current events through prophetic frameworks.",
    traits: [{ label: "Sacraments", val: "Two ordinances + foot-washing" },{ label: "Authority", val: "Scripture + prophetic gift (EGW)" },{ label: "Worship", val: "Saturday, conservative" },{ label: "Soteriology", val: "Arminian, investigative judgment" }]
  },
  AD_SDR: {
    name: "Seventh Day Baptist",
    family: "Sabbatarian Baptist",
    tagline: "Baptist in theology, Saturday in worship",
    desc: "You are Seventh Day Baptist — holding Saturday as the biblical Sabbath (as SDAs do) but with mainstream Baptist theology rather than Adventist distinctives. No soul sleep, no Ellen White, no health message or prophetic interpretive grid — just Baptist soteriology and ecclesiology practiced on the seventh day. The SDR tradition is small but ancient, predating Adventism.",
    traits: [{ label: "Sacraments", val: "Two ordinances — symbolic" },{ label: "Authority", val: "Scripture alone" },{ label: "Worship", val: "Saturday, Baptist-style" },{ label: "Soteriology", val: "Broadly Baptist — Arminian or Calvinist" }]
  },
  COG7: {
    name: "Church of God (Seventh Day)",
    family: "Sabbatarian Restorationist",
    tagline: "Saturday Sabbath, soul sleep, no immortal soul",
    desc: "You are Church of God (Seventh Day) — a Sabbatarian body that observes Saturday worship and holds annihilationism (the dead are unconscious until the resurrection) but rejects Ellen White as a prophet and the full Adventist prophetic system. You are close to SDA roots but chose not to follow White. You hold restorationist convictions about returning to New Testament Christianity on the seventh-day Sabbath.",
    traits: [{ label: "Sacraments", val: "Two ordinances" },{ label: "Authority", val: "Scripture alone" },{ label: "Worship", val: "Saturday, conservative" },{ label: "Soteriology", val: "Arminian, conditional immortality" }]
  },

  /* ── PROGRESSIVE / LIBERAL ── */
  ME_LIB: {
    name: "Progressive Mainline Protestant",
    family: "Liberal Mainline",
    tagline: "The gospel as liberation and radical welcome",
    desc: "Your theology is progressive-mainline — you embrace historical-critical Scripture scholarship, support full LGBTQ+ inclusion and ordination, emphasize this-worldly justice and liberation, and understand the gospel primarily in terms of human flourishing and structural transformation. You're comfortable with theological ambiguity, see tradition as always evolving, and may be in a progressive Presbyterian, Methodist, Lutheran, or UCC congregation.",
    traits: [{ label: "Sacraments", val: "Varies — mostly symbolic" },{ label: "Authority", val: "Scripture through reason, experience, tradition" },{ label: "Worship", val: "Inclusive, often contemporary" },{ label: "Soteriology", val: "Liberation, transformation, inclusion" }]
  },
  UCC: {
    name: "United Church of Christ",
    family: "Liberal Mainline — Congregationalist",
    tagline: "God is still speaking — a comma, not a period",
    desc: "You are UCC — the United Church of Christ, formed from Congregationalist and Evangelical/Reformed streams. You hold that God's revelation is not finished — the tradition is always open to new light. You were the first mainline denomination to ordain women, an openly gay minister, and to affirm same-sex marriage. You care deeply about social justice, ecumenism, and honoring conscience above conformity.",
    traits: [{ label: "Sacraments", val: "Two — open communion, inclusive" },{ label: "Authority", val: "Scripture + ongoing revelation" },{ label: "Worship", val: "Varied — liturgical to contemporary" },{ label: "Soteriology", val: "Broadly grace-based, universalist tendency" }]
  },
  UU: {
    name: "Unitarian Universalist",
    family: "Liberal Religion",
    tagline: "Free faith — covenanted community without creedal walls",
    desc: "You find yourself in the UU tradition — committed to the inherent worth of every person, a free and responsible search for truth, religious pluralism, and a prophetic call to justice. You probably draw from multiple wisdom traditions (Christian, Jewish, Buddhist, Pagan, Humanist), are suspicious of creedal boundaries, and understand salvation in terms of this-worldly liberation and human flourishing. The 'seven principles' are your guiding framework.",
    traits: [{ label: "Sacraments", val: "Varies; often none formal" },{ label: "Authority", val: "Individual conscience + community covenant" },{ label: "Worship", val: "Varies widely; often no creed" },{ label: "Soteriology", val: "Universal, pluralist, often secular-humanist" }]
  },

  /* ── NON-TRINITARIAN ── */
  LDS: {
    name: "Latter-day Saints (Mormon)",
    family: "Restorationist — Non-Trinitarian",
    tagline: "The restoration of all things — latter-day scripture and living prophets",
    desc: "You are Latter-day Saint — believing that the primitive church fell into apostasy and was restored through Joseph Smith in 1830. You hold the Book of Mormon, Doctrine & Covenants, and Pearl of Great Price as additional scripture alongside the Bible. You have a non-Nicene theology (the Father, Son, and Holy Ghost are three distinct beings), a living prophet in Salt Lake City, and distinctive temple worship and eternal family doctrines.",
    traits: [{ label: "Sacraments", val: "Ordinances — baptism, endowment, sealing" },{ label: "Authority", val: "Bible + Book of Mormon + living prophet" },{ label: "Worship", val: "Sacrament meeting, temple worship" },{ label: "Soteriology", val: "Exaltation — eternal progression" }]
  },
  JW: {
    name: "Jehovah's Witnesses",
    family: "Restorationist — Non-Trinitarian",
    tagline: "Jehovah's name exalted — the New World is coming",
    desc: "You are a Jehovah's Witness — a member of a theocratic organization governed from Brooklyn (now Warwick, NY) through the Governing Body. You reject the Trinity (Jesus is a created being, Michael the archangel), blood transfusions, flag saluting, and celebration of holidays like Christmas and birthdays. You use the New World Translation, look forward to Armageddon and a Paradise Earth, and actively engage in door-to-door witnessing.",
    traits: [{ label: "Sacraments", val: "Annual Memorial (Lord's Supper)" },{ label: "Authority", val: "Bible (NWT) + Governing Body" },{ label: "Worship", val: "Kingdom Hall, no music instruments" },{ label: "Soteriology", val: "Conditional — Armageddon survivors + 144,000" }]
  },

  /* ── MESSIANIC / HEBREW ROOTS ── */
  MESSIANIC: {
    name: "Messianic Jewish / Hebrew Roots",
    family: "Jewish-Christian Synthesis",
    tagline: "Yeshua is Messiah — Torah and New Covenant together",
    desc: "You are Messianic Jewish or Hebrew Roots — believing that faith in Yeshua (Jesus) as Messiah does not abolish but fulfills Torah, and that Gentile believers are called to observe the biblical feasts, Sabbath, and dietary laws as part of a deeper covenant life. Some branches maintain full Jewish ethnic identity; others are Gentile Christians drawn to the Jewish roots of their faith. This is one of the fastest-growing movements in contemporary Christianity.",
    traits: [{ label: "Sacraments", val: "Torah observance + Yeshua's atonement" },{ label: "Authority", val: "Tanakh + New Covenant writings" },{ label: "Worship", val: "Jewish liturgy + worship music" },{ label: "Soteriology", val: "Grace through faith in Yeshua" }]
  }
};

/* ─────────────────────────────────────────────────────────
   FLOWCHART TREE
   Sequential step counter = history.length + 1
───────────────────────────────────────────────────────── */
const questions = {

  q1: {
    text: "Do you affirm the traditional Christian doctrine of the Trinity — one God in three co-equal, co-eternal persons?",
    sub: "The most fundamental dividing line in all of Christian history.",
    opts: [
      { text: "Yes — Father, Son, and Holy Spirit: one God, three persons, co-equal and co-eternal. The Nicene Creed is correct.", next: 'q2' },
      { text: "The Father, Son, and Holy Ghost are three distinct beings — not one substance", next: 'RESULT:LDS' },
      { text: "Jesus is a created being — not God, but the first and greatest of God's creations", next: 'RESULT:JW' },
      { text: "I believe the church must remain completely pure — no readmitting those who seriously fall away under persecution", next: 'RESULT:NOVAT' },
      { text: "I am post-Christian or pluralist — traditional doctrines about Jesus don't define my faith", next: 'RESULT:UU' }
    ]
  },

  q2: {
    text: "How many sacraments does your tradition recognize?",
    sub: "This one question sorts most of two thousand years of Christian history.",
    opts: [
      { text: "Seven — Baptism, Eucharist, Confirmation, Penance, Anointing of the Sick, Holy Orders, Matrimony", next: 'q3' },
      { text: "Two sacraments (Baptism and the Lord's Supper) as genuine means of grace", next: 'q7' },
      { text: "Two ordinances — but I call them that because they are acts of obedience, not channels of grace", next: 'q20' },
      { text: "None in the traditional sense — all of life is sacramental, or the Spirit needs no outward signs", next: 'q26' },
      { text: "This is a secondary question — what matters is the Spirit's presence and genuine faith", next: 'q31' }
    ]
  },

  /* ── SEVEN SACRAMENT BRANCH ── */
  q3: {
    text: "Is the Bishop of Rome — the Pope — the Vicar of Christ with universal jurisdiction and infallible teaching authority?",
    sub: "The answer to this question created the Eastern-Western Schism and shapes everything downstream.",
    opts: [
      { text: "Yes — the Pope possesses universal jurisdiction and infallibility in matters of faith and morals (ex cathedra)", next: 'q4' },
      { text: "The Bishop of Rome has a primacy of honor among equals, but no universal jurisdiction or infallibility", next: 'q6' },
      { text: "No pope — but I hold Catholic order, apostolic succession, and Western liturgical tradition", next: 'RESULT:AC' }
    ]
  },

  q4: {
    text: "How do you relate to the liturgical reforms of the Second Vatican Council?",
    sub: "Vatican II reshaped Catholic worship in the 1960s — and the debate continues.",
    opts: [
      { text: "The Traditional Latin Mass (Extraordinary Form) is my spiritual home — the Novus Ordo represents a rupture", next: 'RESULT:RC_TRAD' },
      { text: "I worship in the Ordinary Form and embrace Vatican II while respecting the traditional Mass", next: 'q5' },
      { text: "I worship in an Eastern Rite (Byzantine, Coptic, Syriac, etc.) in full communion with Rome", next: 'RESULT:EC' }
    ]
  },

  q5: {
    text: "How do faith and works relate to justification?",
    sub: "Within Roman Catholicism, this question still has important shades.",
    opts: [
      { text: "Grace, faith, and works genuinely cooperate — merit is a real category; the Council of Trent's canons stand", next: 'RESULT:RC' },
      { text: "Faith working through love — I'm not saved by works, but genuine faith necessarily produces them and God takes them seriously", next: 'RESULT:RC' }
    ]
  },

  q6: {
    text: "Which apostolic tradition do you belong to?",
    sub: "The Eastern churches divided in 451 AD at the Council of Chalcedon.",
    opts: [
      { text: "Greek, Russian, Serbian, Antiochian, or another Chalcedonian Orthodox church — two natures, one person", next: 'RESULT:EO' },
      { text: "Coptic, Ethiopian, Armenian, or Syrian — miaphysite, pre-Chalcedonian tradition", next: 'RESULT:OO' }
    ]
  },

  /* ── TWO SACRAMENTS / MAGISTERIAL ── */
  q7: {
    text: "What happens to the bread and wine in the Lord's Supper?",
    sub: "This question split the Reformation in two at Marburg in 1529 — and never healed.",
    opts: [
      { text: "Christ is truly present in, with, and under the bread and wine — a real presence, though the elements remain (Lutheran view)", next: 'q8' },
      { text: "The body and blood are spiritually present and received by faith — no physical change occurs (Calvinist / spiritual presence)", next: 'q10' },
      { text: "It is a memorial — a powerful symbolic remembrance of Christ's sacrifice, nothing more (Zwinglian)", next: 'q10' }
    ]
  },

q8: {
    text: "Does your tradition ordain women to the pastoral office?",
    sub: "This is one of the clearest dividing lines among Lutherans.",
    opts: [
      { text: "No — only men are ordained to the pastoral office", next: 'q8b' },
      { text: "Yes — women may be ordained as pastors", next: 'q9' }
    ]
  },

  q8b: {  // Conservative side
    text: "Which conservative Lutheran tradition fits you best?",
    sub: "The confessional world has several distinct groups.",
    opts: [
      { text: "Lutheran Church–Missouri Synod (LCMS)", next: 'RESULT:LU_LCMS' },
      { text: "Wisconsin Evangelical Lutheran Synod (WELS) — stricter on fellowship and women's roles", next: 'RESULT:LU_WELS' },
      { text: "Evangelical Lutheran Synod (ELS)", next: 'RESULT:LU_ELS' },
      { text: "Church of the Lutheran Confession (CLC)", next: 'RESULT:LU_CLC' },
      { text: "Association of Free Lutheran Congregations (AFLC)", next: 'RESULT:LU_AFLC' },
      { text: "Smaller independent or micro-synod confessional group", next: 'RESULT:LU_CONFESSIONAL' }
    ]
  },

  q9: {  // More moderate / post-ELCA side
    text: "Which Lutheran tradition best describes your home?",
    sub: "Several groups emerged from or relate to the ELCA.",
    opts: [
      { text: "Evangelical Lutheran Church in America (ELCA)", next: 'RESULT:LU_ELCA' },
      { text: "Lutheran Congregations in Mission for Christ (LCMC)", next: 'RESULT:LU_LCMC' },
      { text: "North American Lutheran Church (NALC)", next: 'RESULT:LU_NALC' },
      { text: "American Association of Lutheran Churches (AALC)", next: 'RESULT:LU_AALC' },
      { text: "Church of the Lutheran Brethren (CLBA)", next: 'RESULT:LU_CLBA' }
    ]
  },
   
  q10: {
    text: "How do you understand divine election and salvation?",
    sub: "The Calvinist/Arminian divide — arguably the defining question of Protestant soteriology.",
    opts: [
      { text: "Unconditional election — God sovereignly chose who would be saved before creation (TULIP Calvinism)", next: 'q11' },
      { text: "God desires all to be saved; prevenient grace enables free response; election is conditional on foreseen faith", next: 'q16' }
    ]
  },

  q11: {
    text: "Which confessional stream are you in?",
    sub: "The Reformed world has two great confessional poles — Westminster and the Three Forms of Unity.",
    opts: [
      { text: "Westminster Confession of Faith and Larger/Shorter Catechisms — Presbyterian tradition", next: 'q12' },
      { text: "Three Forms of Unity — Heidelberg Catechism, Belgic Confession, Canons of Dort (Dutch/Continental Reformed)", next: 'q14' },
      { text: "I hold Calvinist convictions but no formal confession — Scripture governs directly", next: 'RESULT:CA_ACT29' }
    ]
  },

  q12: {
    text: "Does your church ordain women to the office of elder/pastor?",
    sub: "The PCA and OPC say no; PCUSA says yes — this divides conservative and progressive Presbyterians.",
    opts: [
      { text: "No — the office of elder and pastor is restricted to qualified men by scriptural principle", next: 'q13' },
      { text: "Yes — women may be ordained as elders, pastors, and teaching officers", next: 'RESULT:PR_PCUSA' }
    ]
  },

  q13: {
    text: "How strictly does your church hold to the Westminster Standards?",
    sub: "The OPC and PCA are both conservative Presbyterian but differ in rigor and culture.",
    opts: [
      { text: "Very strictly — we require full subscription; the OPC's confessionalism is a model", next: 'RESULT:RE_OPC' },
      { text: "Seriously but with pastoral flexibility — PCA's system subscription is appropriate", next: 'RESULT:PR_PCA' }
    ]
  },

  q14: {
    text: "Which continental Reformed body best fits your tradition?",
    sub: "The URCNA, CRC, and RCA all hold the Three Forms of Unity but with different emphases.",
    opts: [
      { text: "URCNA — strict confessionalism, conservative on church order, wary of CRC drift", next: 'RESULT:RE_URC' },
      { text: "CRC — Kuyperian worldview, cultural engagement, between URCNA and RCA", next: 'RESULT:RE_CRC' },
      { text: "RCA — more ecumenical, evangelical warmth, older Dutch Reformed spirit", next: 'RESULT:RE_RCA' }
    ]
  },

  /* ── ARMINIAN / METHODIST / ANGLICAN ── */
  q16: {
    text: "Does apostolic succession — an unbroken chain of bishops from the apostles — matter to your church?",
    sub: "Methodist and Anglican traditions both hold Arminian/Wesleyan theology, but differ sharply on order.",
    opts: [
      { text: "Yes — bishops in apostolic succession are essential for valid sacraments and church order", next: 'q17' },
      { text: "No — the church is constituted by Word and Spirit, not a chain of episcopal ordinations", next: 'q18' }
    ]
  },

  q17: {
    text: "Which Anglican tradition are you part of?",
    sub: "TEC and ACNA/Global South represent the progressive and traditional wings of Anglicanism.",
    opts: [
      { text: "ACNA, GAFCON, or Global South — traditional, biblical sexual ethics, women's ordination debated", next: 'RESULT:AN_TRAD' },
      { text: "TEC (Episcopal USA), Church of England liberal wing — women bishops, full LGBTQ+ inclusion", next: 'RESULT:AN_PROG' }
    ]
  },

  q18: {
    text: "Which Methodist tradition best describes you?",
    sub: "The UMC split over sexuality — Global Methodist Church formed in 2022.",
    opts: [
      { text: "Global Methodist Church — I hold traditional Wesleyan ethics and left the UMC over sexuality decisions", next: 'RESULT:ME_TRAD' },
      { text: "United Methodist Church — broad tent, social holiness, staying to reform from within", next: 'RESULT:ME_UMC' },
      { text: "Wesleyan but not really Methodist — I lean non-denominational with Arminian theology", next: 'RESULT:CA_NONDENOM' }
    ]
  },

  /* ── FREE CHURCH / ORDINANCES BRANCH ── */
  q20: {
    text: "Who may receive baptism, and how?",
    sub: "The mode and recipient of baptism is the defining question of the Free Church tradition.",
    opts: [
      { text: "Believers only, by full immersion — baptism follows a credible profession of faith", next: 'q21' },
      { text: "Believers only, but mode is secondary — sprinkling is acceptable", next: 'q25' },
      { text: "The Spirit baptizes — water baptism is either symbolic or unnecessary", next: 'q31' }
    ]
  },

  q21: {
    text: "What is your eschatological framework?",
    sub: "How you view the end times correlates strongly with your theological tribe in the Baptist world.",
    opts: [
      { text: "Dispensational premillennialism — Christ returns before the millennium; Israel and Church are distinct; rapture theology", next: 'q22' },
      { text: "Historic premillennialism or amillennialism — eschatology is important but not a tribal marker for me", next: 'q23' }
    ]
  },

  q22: {
    text: "Which describes your Baptist identity?",
    sub: "The SBC is the largest Protestant denomination in the US; IFB is its stricter separatist cousin.",
    opts: [
      { text: "Southern Baptist Convention — cooperative missions, BFM 2000, complementarian, inerrantist", next: 'RESULT:BA_SBC' },
      { text: "Independent Fundamental Baptist — KJV-only tendency, strict separation, distrust of SBC compromise", next: 'RESULT:BA_IFB' },
      { text: "Reformed Baptist — 1689 Confession, five-point Calvinist, believer's baptism", next: 'RESULT:BA_REF' }
    ]
  },

  q23: {
    text: "Is your worship shaped by the Restoration Movement — rejecting creeds, restoring the New Testament church?",
    sub: "Campbellite restorationism is a distinct stream from Baptist life.",
    opts: [
      { text: "Yes — no creed but the Bible; the first-century church must be restored", next: 'q24' },
      { text: "No — I'm Baptist but not restorationist in that sense", next: 'q25' }
    ]
  },

  q24: {
    text: "What is your position on instrumental music in worship?",
    sub: "The Churches of Christ split from Christian Churches over this question in the early 20th century.",
    opts: [
      { text: "A cappella only — the New Testament nowhere authorizes instruments in Christian worship", next: 'RESULT:CH_COC' },
      { text: "Instruments are fine — the NT doesn't forbid them; this is a matter of freedom", next: 'q24b' }
    ]
  },

  q24b: {
    text: "Which Restoration tradition are you in?",
    sub: "Independent Christian Churches are conservative; Disciples of Christ are progressive.",
    opts: [
      { text: "Independent Christian Churches / Churches of Christ (instrumental) — theologically conservative, autonomous", next: 'RESULT:CH_ICC' },
      { text: "Disciples of Christ — ecumenical, progressive, open communion, member of the NCC/WCC", next: 'RESULT:DI' }
    ]
  },

  q25: {
    text: "Which stream best describes your Free Church position?",
    sub: "Within moderate-to-progressive Baptist life there are several distinct communities.",
    opts: [
      { text: "American Baptist Churches USA — believer's baptism, diverse, moderate to progressive", next: 'RESULT:BA_ABC' },
      { text: "Cooperative Baptist Fellowship — the four freedoms, post-SBC progressive Baptists", next: 'RESULT:BA_CBF' },
      { text: "I observe the Saturday Sabbath — I'm Baptist in theology but Sabbatarian", next: 'RESULT:AD_SDR' },
      { text: "I don't quite fit any of these — maybe house church or organic church is closer", next: 'RESULT:CA_HOUSE' }
    ]
  },

  /* ── RADICAL / NO SACRAMENTS BRANCH ── */
  q26: {
    text: "Does the Inner Light or direct Spirit revelation take priority over Scripture?",
    sub: "The Quaker 'inner word' vs. the Anabaptist 'outer word' — a crucial distinction in radical Christianity.",
    opts: [
      { text: "Yes — the Spirit's direct voice in the heart is the primary authority; it may correct or supersede the written text", next: 'q27' },
      { text: "No — Scripture is the norm; the Spirit illumines it but does not override it. I'm radical in community, not in epistemology.", next: 'q28' }
    ]
  },

  q27: {
    text: "Which Quaker tradition best describes you?",
    sub: "The three Quaker branches differ substantially in theology and worship style.",
    opts: [
      { text: "Unprogrammed, silent, liberal theology — FGC, likely post-Christian or pluralist", next: 'RESULT:QU_UNPRG' },
      { text: "Programmed worship, evangelical theology, orthodox Christology — Evangelical Friends / EFI", next: 'RESULT:QU_PRG' },
      { text: "Conservative unprogrammed, Christocentric, plain dress, Ohio Yearly Meeting style", next: 'RESULT:QU_CON' }
    ]
  },

  q28: {
    text: "How separated from mainstream society is your community's way of life?",
    sub: "Anabaptism spans from engaged Mennonites to fully separate Old Order communities.",
    opts: [
      { text: "Highly separated — plain dress, restricted technology, shunning enforced, the Ordnung governs life", next: 'q29' },
      { text: "Countercultural but engaged — we witness through service, peace activism, and intentional community", next: 'q30' }
    ]
  },

  q29: {
    text: "Which separatist Anabaptist tradition is yours?",
    sub: "Old Order Amish, Conservative Mennonite, and Hutterites differ in key ways.",
    opts: [
      { text: "Old Order Amish — horse and buggy, home worship, the strictest Ordnung", next: 'RESULT:AMISH' },
      { text: "Conservative Mennonite or Beachy Amish — plain dress but cars and electricity", next: 'RESULT:MEN_CONS' },
      { text: "Hutterite — communal agricultural colony, all property held in common", next: 'RESULT:HUTTERITE' }
    ]
  },

  q30: {
    text: "Which Anabaptist community is your home?",
    sub: "The engaged wing of Anabaptism spans progressive Mennonites to Brethren.",
    opts: [
      { text: "Mennonite Church USA — peace witness, service, now fully LGBTQ+ affirming", next: 'RESULT:ME_MEN' },
      { text: "Church of the Brethren — Pietist-Anabaptist blend, Love Feast, trine immersion, peace churches", next: 'RESULT:BRETHREN' },
      { text: "New Monasticism or intentional community — neither formal Mennonite nor Brethren, but inspired by that vision", next: 'RESULT:CA_HOUSE' }
    ]
  },

  /* ── SPIRIT-FIRST / CHARISMATIC BRANCH ── */
  q31: {
    text: "Is speaking in tongues the initial physical evidence of the baptism of the Holy Spirit?",
    sub: "This is the defining question of Classical Pentecostalism versus the broader charismatic world.",
    opts: [
      { text: "Yes — tongues as initial evidence is a distinctive doctrinal commitment I hold", next: 'q32' },
      { text: "No — tongues is one genuine gift among many; Spirit baptism may not always produce tongues", next: 'q33' },
      { text: "Tongues ceased with the apostolic age — the Spirit works through Word and Sacrament, not sign gifts", next: 'q10' }
    ]
  },

  q32: {
    text: "Which Pentecostal tradition is yours?",
    sub: "Classical Pentecostalism has several major denominational streams.",
    opts: [
      { text: "Assemblies of God — largest Pentecostal denomination, evangelical, four-square gospel", next: 'RESULT:PE_AG' },
      { text: "Church of God (Cleveland, TN) — Wesleyan-holiness Pentecostal, episcopal polity", next: 'RESULT:PE_COG' },
      { text: "Church of God in Christ (COGIC) — largest Black Pentecostal denomination", next: 'RESULT:PE_COGIC' }
    ]
  },

  q33: {
    text: "How do you view apostolic and prophetic offices today?",
    sub: "Third Wave charismatics divide over whether God is restoring first-century offices.",
    opts: [
      { text: "God is restoring apostles and prophets today — spiritual warfare and dominion theology resonate with me", next: 'RESULT:CH_NAR' },
      { text: "Signs and wonders but no new apostles — Vineyard-style third wave, naturally supernatural", next: 'RESULT:CH_VIN' },
      { text: "Health, wealth, and covenant prosperity — positive confession and faith for abundance", next: 'RESULT:CH_WORD' },
      { text: "Open to gifts but mainly evangelical and expository — non-denominational charismatic-leaning", next: 'q34' }
    ]
  },

  q34: {
    text: "Which non-denominational evangelical culture fits you best?",
    sub: "The evangelical non-denom world spans multiple subcultures.",
    opts: [
      { text: "Generic Bible church / community church — expository, evangelical, contemporary", next: 'RESULT:CA_NONDENOM' },
      { text: "Reformed evangelical church plant — Acts 29, Gospel Coalition, Calvinist, missional", next: 'RESULT:CA_ACT29' },
      { text: "Seeker-sensitive megachurch — accessible, production-quality, practical teaching", next: 'RESULT:CA_SEEKER' },
      { text: "House church or organic church — no building, no pastor, every-member ministry", next: 'RESULT:CA_HOUSE' }
    ]
  },

  /* ── SABBATARIAN CHECK ── */
  q35: {
    text: "On which day does your community gather for primary worship?",
    sub: "Most Christians worship Sunday; Adventists and a few others hold Saturday.",
    opts: [
      { text: "Saturday — the seventh-day Sabbath as commanded in Scripture; Sunday worship is a later innovation", next: 'q36' },
      { text: "Sunday — the Lord's Day, day of resurrection, the ancient universal Christian practice", next: 'q37' }
    ]
  },

  q36: {
    text: "Which Saturday-worship tradition do you belong to?",
    sub: "Seventh-day Adventists differ from Seventh Day Baptists and Church of God (7th Day).",
    opts: [
      { text: "Seventh-day Adventist — Ellen White as prophet, soul sleep, health message, investigative judgment", next: 'RESULT:AD_SDA' },
      { text: "Seventh Day Baptist — Baptist in theology, Saturday in worship, no EGW", next: 'RESULT:AD_SDR' },
      { text: "Church of God (Seventh Day) — Adventist roots but rejected Ellen White", next: 'RESULT:COG7' }
    ]
  },

  q37: {
    text: "Do you observe the Jewish biblical feasts and Torah dietary laws as part of your Christian life?",
    sub: "The Hebrew Roots and Messianic movements hold that Gentile believers should observe Torah.",
    opts: [
      { text: "Yes — Yeshua fulfilled but did not abolish Torah; the feasts and dietary laws are for all covenant people", next: 'RESULT:MESSIANIC' },
      { text: "No — Christ fulfilled the ceremonial law; we are not obligated to Torah observance", next: 'q10' }
    ]
  },

  /* ── PROGRESSIVE / LIBERAL BRANCH ── */
  q38: {
    text: "Do you affirm the bodily, physical resurrection of Jesus as a historical event?",
    sub: "A dividing line between orthodox Christianity and liberal protestantism.",
    opts: [
      { text: "Yes, absolutely — the empty tomb is historical; the resurrection was physical and bodily", next: 'q35' },
      { text: "I hold it with genuine openness — the resurrection is profoundly true but I'm uncertain about its historical nature", next: 'q39' }
    ]
  },

  q39: {
    text: "Which progressive tradition resonates most?",
    sub: "Liberal Protestantism has several distinct streams.",
    opts: [
      { text: "Mainline progressive — PCUSA/UMC/ELCA progressive wing, social justice, LGBTQ+ full inclusion", next: 'RESULT:ME_LIB' },
      { text: "United Church of Christ — God is still speaking; most progressive mainline denomination", next: 'RESULT:UCC' },
      { text: "Full pluralism — multiple religions offer valid paths; I identify loosely as Christian or post-Christian", next: 'RESULT:UU' }
    ]
  }
};

/* ─────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────── */
let currentQ = null;
let history = [];

/* ─────────────────────────────────────────────────────────
   ENGINE
───────────────────────────────────────────────────────── */
function startQuiz() {
  history = [];
  currentQ = 'q1';
  document.getElementById('screen-intro').classList.remove('active');
  document.getElementById('screen-quiz').classList.add('active');
  renderQ();
}

function renderQ() {
  const q = questions[currentQ];
  const stepNum = history.length + 1;

  document.getElementById('q-counter').textContent = `Question ${stepNum}`;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-subtext').textContent = q.sub;

  const totalQ = Object.keys(questions).length;
  const fill = Math.min(((stepNum - 1) / 20) * 100, 95);
  document.getElementById('progress-fill').style.width = fill + '%';

  renderTrail();

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${LETTERS[i]}</span><span>${opt.text}</span>`;
    btn.onclick = () => selectAndAdvance(i, opt);
    list.appendChild(btn);
  });

  document.getElementById('btn-back').disabled = history.length === 0;
}

function selectAndAdvance(i, opt) {
  const btns = document.querySelectorAll('.opt-btn');
  btns.forEach((b, j) => b.classList.toggle('selected', j === i));

  setTimeout(() => {
    history.push({ qId: currentQ, optIndex: i, optText: opt.text });
    const next = opt.next;
    if (next.startsWith('RESULT:')) {
      showResult(next.replace('RESULT:', ''));
    } else {
      currentQ = next;
      renderQ();
    }
  }, 200);
}

function goBack() {
  if (history.length === 0) return;
  const last = history.pop();
  currentQ = last.qId;
  renderQ();
}

/* ─────────────────────────────────────────────────────────
   TRAIL
───────────────────────────────────────────────────────── */
function renderTrail() {
  const container = document.getElementById('trail-container');
  if (!container) return;
  if (history.length === 0) { container.innerHTML = ''; return; }

  const show = history.slice(-3);
  container.innerHTML = show.map((step, i) => {
    const isLast = i === show.length - 1;
    const q = questions[step.qId];
    const letter = LETTERS[step.optIndex];
    const shortQ = q.text.length > 46 ? q.text.slice(0, 46) + '…' : q.text;
    return `<div class="trail-item${isLast ? ' trail-last' : ''}">
      <span class="trail-q">${shortQ}</span>
      <span class="trail-arrow">→</span>
      <span class="trail-ans">${letter}</span>
    </div>`;
  }).join('');
}

/* ─────────────────────────────────────────────────────────
   RESULT
───────────────────────────────────────────────────────── */
function showResult(key) {
  const denom = denominations[key];
  if (!denom) { console.error('Missing denomination:', key); return; }

  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-result').classList.add('active');
  document.getElementById('progress-fill').style.width = '100%';

  document.getElementById('result-tradition-family').textContent = denom.family;
  document.getElementById('result-denom-name').textContent = denom.name;
  document.getElementById('result-tagline').textContent = denom.tagline;
  document.getElementById('result-desc').textContent = denom.desc;

  document.getElementById('result-traits').innerHTML = denom.traits.map(t =>
    `<div class="trait-card"><div class="trait-label">${t.label}</div><div class="trait-val">${t.val}</div></div>`
  ).join('');

  renderPath();
}

function renderPath() {
  const el = document.getElementById('path-taken');
  if (!el) return;
  el.innerHTML = history.map((step, i) => {
    const q = questions[step.qId];
    const letter = LETTERS[step.optIndex];
    return `<div class="path-step">
      <div class="path-num">${i + 1}</div>
      <div class="path-content">
        <div class="path-q">${q.text}</div>
        <div class="path-a"><span class="path-letter">${letter}</span>${step.optText}</div>
      </div>
    </div>`;
  }).join('');
}

function restartQuiz() {
  history = [];
  currentQ = 'q1';
  document.getElementById('screen-result').classList.remove('active');
  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-intro').classList.add('active');
  document.getElementById('progress-fill').style.width = '0%';
}
