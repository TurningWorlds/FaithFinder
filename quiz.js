const L = ['A','B','C','D','E','F','G','H'];

/* ─────────────────────────────────────────────────────────
   DENOMINATION DEFINITIONS
───────────────────────────────────────────────────────── */
const denoms = {
  RC: {
    name: "Roman Catholic",
    family: "Western Catholic",
    tagline: "The ancient faith — one, holy, catholic, apostolic — centered in Rome",
    desc: "Your convictions align most closely with Roman Catholicism: seven sacraments as genuine channels of grace, the Petrine office as the visible center of unity, transubstantiation, apostolic succession, the Marian dogmas (Immaculate Conception, Assumption, perpetual virginity), purgatory, indulgences as genuine instruments of mercy, and natural law ethics rooted in Aquinas. You probably don't think of the Reformation as a net positive for Christianity and have a certain wariness toward the idea that 'Scripture alone' can hold the faith together without a living teaching authority. The Catechism of the Catholic Church is something you can hand to a confused friend.",
    traits: [
      { label: "Sacraments", val: "Seven — transubstantiation" },
      { label: "Authority", val: "Scripture + Tradition + Magisterium" },
      { label: "Worship", val: "Roman Rite (Ordinary Form)" },
      { label: "Soteriology", val: "Synergistic — grace, faith, works" }
    ]
  },
  RC_TRAD: {
    name: "Traditional Latin Mass Catholic",
    family: "Western Catholic — Traditionalist",
    tagline: "Lex orandi, lex credendi — the ancient Mass, unchanged",
    desc: "You are a traditionalist Roman Catholic — drawn to the Extraordinary Form, the 1962 Missal, Gregorian chant, ad orientem worship, the Baltimore Catechism, and the pre-conciliar theological manuals. You view the Novus Ordo as a rupture, not a development, and probably have strong opinions about the legacy of Vatican II. You may follow Lefebvre's critique without going sedevacantist, or you might simply prefer the old Mass while remaining in communion with Rome. Either way, you believe the faith was expressed more clearly, more beautifully, and more completely before the reforms of the 1960s.",
    traits: [
      { label: "Sacraments", val: "Seven — strict transubstantiation" },
      { label: "Authority", val: "Pre-Vatican II Magisterium" },
      { label: "Worship", val: "Extraordinary Form / TLM" },
      { label: "Soteriology", val: "Trent — merit, purgatory, indulgences" }
    ]
  },
  SEDVAC: {
    name: "Sedevacantist Catholic",
    family: "Western Catholic — Traditionalist Separatist",
    tagline: "The Chair of Peter is vacant — the modernist popes are no popes",
    desc: "You hold the sedevacantist position: that the popes from John XXIII onward (or some of them) are not valid popes because they promulgated heresy and therefore lost office. The Chair of Peter is therefore empty (sede vacante). You attend Mass celebrated by clergy who either never accepted the new ordination rites or were ordained by bishops who left the Novus Ordo entirely. You hold the fullness of pre-conciliar Catholic doctrine, including Pius IX's Syllabus of Errors, and you do not consider yourself schismatic — you believe the institutional Church has temporarily lost its head while remaining in the true faith.",
    traits: [
      { label: "Sacraments", val: "Seven — valid only in old rites" },
      { label: "Authority", val: "Pre-1958 Magisterium" },
      { label: "Worship", val: "Traditional Latin Mass only" },
      { label: "Soteriology", val: "Tridentine — strict" }
    ]
  },
  EC: {
    name: "Eastern Catholic",
    family: "Eastern Catholic — in communion with Rome",
    tagline: "The Eastern lung of the one Church",
    desc: "You are Eastern Catholic — Byzantine, Coptic, Syriac, Maronite, Melkite, Armenian, Ruthenian, or another Eastern rite body in full communion with the Bishop of Rome. You share the Catholic faith and accept papal primacy, but your liturgy, theology, and spirituality follow the Eastern tradition: the Divine Liturgy, theosis, icons, the Trisagion, a married presbyterate (usually), and a spirituality shaped by the Desert Fathers and the Philokalia. You sometimes feel caught between two worlds — Rome wants you, and the Orthodox wonder why you went with Rome.",
    traits: [
      { label: "Sacraments", val: "Seven mysteries" },
      { label: "Authority", val: "Rome + Eastern Holy Tradition" },
      { label: "Worship", val: "Eastern Rite (Byzantine, etc.)" },
      { label: "Soteriology", val: "Theosis — synergistic" }
    ]
  },
  EO: {
    name: "Eastern Orthodox",
    family: "Ancient & Eastern — Chalcedonian",
    tagline: "The unbroken stream — one, holy, catholic, apostolic",
    desc: "You are Eastern Orthodox — holding to the faith of the Seven Ecumenical Councils without the addition of the filioque, without papal supremacy, without scholastic philosophy reshaping doctrine, without the Reformation's rejection of tradition. You are drawn to theosis as the goal of salvation, the Divine Liturgy as heaven on earth, the Philokalia, the Jesus Prayer, and a theology that sees the Church as a sacramental organism rather than a legal institution. You distrust both Roman centralization and Protestant fragmentation and believe the Orthodox Church simply is the Church.",
    traits: [
      { label: "Sacraments", val: "Seven holy mysteries" },
      { label: "Authority", val: "Scripture + Holy Tradition" },
      { label: "Worship", val: "Byzantine Divine Liturgy" },
      { label: "Soteriology", val: "Theosis / synergistic" }
    ]
  },
  OO: {
    name: "Oriental Orthodox",
    family: "Ancient Eastern — Non-Chalcedonian",
    tagline: "The ancient faith before Chalcedon divided the East",
    desc: "You are Oriental Orthodox — Coptic, Ethiopian, Eritrean, Armenian, Syriac (Syrian Orthodox), or Malankara. Your churches parted ways with Chalcedonian Christianity in 451 AD, not because you deny the fullness of Christ's humanity or divinity, but because you hold that the two natures were perfectly united in one nature after the incarnation (miaphysitism) and reject the 'two natures' language of Chalcedon as Nestorian compromise. You represent some of the oldest continuous Christian communities on earth, with liturgies in ancient languages, deep devotion to the Theotokos, and a rich tradition of monasticism.",
    traits: [
      { label: "Sacraments", val: "Seven mysteries" },
      { label: "Authority", val: "Pre-Chalcedonian Holy Tradition" },
      { label: "Worship", val: "Coptic/Ethiopian/Armenian liturgy" },
      { label: "Christology", val: "Miaphysite — one united nature" }
    ]
  },
  CHURCH_EAST: {
    name: "Church of the East (Assyrian)",
    family: "Ancient Eastern — Pre-Ephesus",
    tagline: "The church that took the gospel to Persia, India, and China",
    desc: "You are Assyrian or Chaldean Christian, part of the ancient Church of the East that separated at Ephesus (431 AD) and was historically labelled 'Nestorian' by its opponents. You hold that the theological language of your tradition does not actually divide Christ into two persons — Nestorianism as a heresy was not your teaching — but you reject the title Theotokos ('God-bearer') for Mary, preferring Christotokos ('Christ-bearer'). Your church carried the gospel across the Silk Road to Central Asia, China, and India, and survived Mongol destruction to persist as one of the smallest and most ancient Christian communities.",
    traits: [
      { label: "Sacraments", val: "Two/three holy mysteries" },
      { label: "Authority", val: "Ancient East Syriac Tradition" },
      { label: "Worship", val: "East Syriac (Chaldean) liturgy" },
      { label: "Christology", val: "Dyophysite — pre-Ephesus formulation" }
    ]
  },
  AC: {
    name: "Old Catholic",
    family: "Independent Catholic",
    tagline: "Catholic faith — without the excesses of Vatican I",
    desc: "You are Old Catholic — part of the Utrecht Union or a related independent Catholic body that refused to accept the definition of papal infallibility at Vatican I in 1870. You maintain the seven sacraments, apostolic succession, the first seven ecumenical councils, and a Catholic sacramental spirituality, but you deny that the Pope has universal jurisdiction or personal infallibility. Old Catholic churches are often theologically moderate or progressive — many ordain women, some have accepted same-sex unions — while retaining Catholic liturgy and order.",
    traits: [
      { label: "Sacraments", val: "Seven — valid succession" },
      { label: "Authority", val: "Seven Ecumenical Councils" },
      { label: "Worship", val: "Western liturgy, vernacular" },
      { label: "Soteriology", val: "Catholic — synergistic" }
    ]
  },
  NOVAT: {
    name: "Novatianist",
    family: "Early Church Rigorist — 3rd Century",
    tagline: "The pure church — no compromise with the lapsed",
    desc: "You resonate with the ancient Novatianist movement of the 3rd century. After the devastating Decian persecution, Novatian of Rome insisted that Christians who had apostatized — offered sacrifices to pagan gods to avoid martyrdom — could never be restored to communion by the church on earth. Forgiveness was between them and God; the church was a congregation of saints only. The Novatianists called themselves Katharoi (the Pure Ones) and held a rigorous discipline that later extended to other grave sins: second marriages, idolatry, murder, and adultery. They had valid bishops, valid sacraments, and functioned as an alternative Catholic church for centuries before being absorbed or suppressed. You believe the church's purity matters more than its size.",
    traits: [
      { label: "Church", val: "Congregation of saints only" },
      { label: "Discipline", val: "No readmission for apostasy/grave sin" },
      { label: "Sacraments", val: "Valid — rebaptism of others" },
      { label: "Morality", val: "Strict — no second marriage" }
    ]
  },
  DONAT: {
    name: "Donatist",
    family: "Early Church Rigorist — North African",
    tagline: "The traditors are invalid — only the pure can minister",
    desc: "You are aligned with the Donatist position that swept North Africa in the 4th century. When the Great Persecution ended under Diocletian, some clergy had surrendered (traditio — 'handed over') the scriptures to avoid death. The Donatists held that these traditors were permanently invalid as ministers — that their sacraments were polluted, their ordinations void, and that the true church in Africa was the Donatist church, not the Catholic one that reinstated compromisers. Augustine famously argued against them that the validity of sacraments depends on Christ, not the moral character of the minister (ex opere operato). You are not convinced. A church that forgives its cowards too quickly is a church that will compromise again.",
    traits: [
      { label: "Ministry", val: "Validity depends on minister's holiness" },
      { label: "Church", val: "The saints of the persecution — not the compromisers" },
      { label: "Sacraments", val: "Rebaptism of Catholics required" },
      { label: "Discipline", val: "Rigorous — traditors permanently invalid" }
    ]
  },
  LU_ELCA: {
    name: "ELCA Lutheran",
    family: "Mainline Lutheran",
    tagline: "Sola gratia, sola fide — in dialogue with the modern world",
    desc: "You are ELCA — the Evangelical Lutheran Church in America, the largest Lutheran body in the United States. You hold Luther's core theological insights: justification by grace through faith, the real presence of Christ in the Eucharist (in, with, and under the bread and wine), infant baptism as a genuine means of grace, and a liturgical worship shaped by the Lutheran tradition. But you also embrace women's ordination, full LGBTQ+ inclusion and the blessing of same-sex marriages, historical-critical biblical scholarship, and a broad ecumenical engagement through full communion with the Episcopal Church, the Presbyterians, the UCC, and others.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Lutheran tradition" },
      { label: "Worship", val: "Liturgical with contemporary options" },
      { label: "Soteriology", val: "Grace-centered, not perseverance of saints" }
    ]
  },
  LU_LCMS: {
    name: "Lutheran Church–Missouri Synod",
    family: "Confessional Lutheran",
    tagline: "The Book of Concord stands — closed communion, inerrancy, male-only ordination",
    desc: "You are LCMS — the second-largest Lutheran body in the United States and one of the most theologically consistent confessional denominations in American Protestantism. You hold biblical inerrancy as a formal principle, subscribe to all the Lutheran Confessions in the Book of Concord without exception, practice closed communion (only confirmed LCMS members or those in established fellowship may commune), ordain only men to the pastoral office, and are suspicious of the ELCA's drift from confessional Lutheranism. You are not fundamentalist — you use historical-critical tools in a confessional framework — but you take doctrine seriously.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture (inerrant) + Book of Concord" },
      { label: "Worship", val: "Liturgical, historic Lutheran rite" },
      { label: "Fellowship", val: "Closed communion" }
    ]
  },
  LU_WELS: {
    name: "Wisconsin Evangelical Lutheran Synod",
    family: "Confessional Lutheran — Strict",
    tagline: "The truth of God's Word — no compromise, no joint worship",
    desc: "You are WELS — the Wisconsin Evangelical Lutheran Synod, often considered the most doctrinally strict of the major Lutheran bodies. You require full doctrinal agreement even for joint prayer, refuse to pray with non-WELS Christians in most circumstances, practice very strict closed communion, do not allow women to vote in congregational matters (in most congregations), and separate from bodies you consider theologically errant — including the LCMS on several points. Your fellowship principles flow directly from your doctrine of justification: to pray together with someone is to imply that doctrinal differences don't matter, and they do.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + full Book of Concord" },
      { label: "Fellowship", val: "Very strict — full doctrinal agreement" },
      { label: "Worship", val: "Liturgical, conservative" }
    ]
  },
  LU_ELS: {
    name: "Evangelical Lutheran Synod",
    family: "Confessional Lutheran",
    tagline: "Grace alone, faith alone, Scripture alone",
    desc: "You are ELS — the Evangelical Lutheran Synod, a smaller confessional body with strong Norwegian roots, closely aligned with the WELS and sharing the same strict fellowship principles. You are theologically conservative, hold to biblical inerrancy, practice closed communion, and maintain the male-only pastoral office. Your Norwegian heritage gives you a slight Haugean pietist undertone compared to the German-heavy WELS and LCMS.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Book of Concord" },
      { label: "Worship", val: "Traditional liturgical" }
    ]
  },
  LU_CLC: {
    name: "Church of the Lutheran Confession",
    family: "Strict Confessional Lutheran",
    tagline: "The old synodical conference principles — uncompromised",
    desc: "You are CLC — the Church of the Lutheran Confession, formed by those who believed the WELS and ELS were not strict enough in applying fellowship principles with each other and with the LCMS. You are one of the smallest and strictest Lutheran bodies in North America, holding to full Book of Concord subscription, biblical inerrancy, very strict fellowship principles, and a strong suspicion of Lutheran ecumenism.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + full Book of Concord" },
      { label: "Fellowship", val: "Extremely strict" }
    ]
  },
  LU_LCMC: {
    name: "Lutheran Congregations in Mission for Christ",
    family: "Post-ELCA Evangelical Lutheran",
    tagline: "Congregational freedom with Lutheran confession",
    desc: "You are LCMC — formed by ELCA congregations that left over the 2009 decision to allow the ordination of non-celibate gay pastors. You retain women's ordination and contemporary worship options but hold a more evangelical and traditionally orthodox theology than the ELCA. Your polity is strongly congregational and your style is warm and mission-focused.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Lutheran Confessions" },
      { label: "Polity", val: "Highly congregational" },
      { label: "Worship", val: "Varied — traditional to contemporary" }
    ]
  },
  LU_NALC: {
    name: "North American Lutheran Church",
    family: "Confessing Lutheran",
    tagline: "Faithful to Scripture and the Lutheran Confessions",
    desc: "You belong to the NALC — another major body that broke from the ELCA, but with a more structured denominational model than LCMC. You ordain women, hold more conservative views on sexuality, maintain liturgical worship, and seek to be both evangelical and catholic in the best sense of those words.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Book of Concord" },
      { label: "Worship", val: "Liturgical and sacramental" }
    ]
  },
  LU_AALC: {
    name: "American Association of Lutheran Churches",
    family: "Confessional Lutheran",
    tagline: "Standing firm on the Word of God",
    desc: "You belong to the AALC — a smaller confessional body that declined to join the ELCA merger in 1988. You share much in common with the LCMS and have fellowship with them. You hold biblical inerrancy, historic Lutheran confessions, and the male-only pastoral office, while being smaller and less culturally prominent than the LCMS.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Book of Concord" },
      { label: "Worship", val: "Liturgical" }
    ]
  },
  LU_AFLC: {
    name: "Association of Free Lutheran Congregations",
    family: "Free Lutheran — Pietist",
    tagline: "Free and living congregations",
    desc: "You are AFLC — rooted in Norwegian Haugean revival tradition. You are theologically conservative (male-only ordination, traditional sexual ethics) but strongly congregational in polity, simpler in liturgy than LCMS or WELS, and shaped by a pietist emphasis on personal conversion and living faith rather than confessional precision alone.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Scripture + Lutheran Confessions" },
      { label: "Polity", val: "Strongly congregational" },
      { label: "Worship", val: "Simpler, revival-influenced" }
    ]
  },
  LU_CONFESSIONAL: {
    name: "Independent / Micro-Synod Confessional Lutheran",
    family: "Strict Confessional Lutheran — Independent",
    tagline: "The pure marks of the church — Word and Sacrament",
    desc: "You identify with smaller independent confessional Lutheran congregations, micro-synods, or confessional study groups that hold to the full Book of Concord with stricter practices than even the major conservative bodies. You may have no formal synodical affiliation or belong to a very small and little-known synod. You believe the visible church is constituted by the pure preaching of the Word and the right administration of the sacraments — nothing more, nothing less.",
    traits: [
      { label: "Sacraments", val: "Two — real presence" },
      { label: "Authority", val: "Full subscription to Book of Concord" },
      { label: "Fellowship", val: "Very strict" }
    ]
  },
  AN_TRAD: {
    name: "Anglican / ACNA / Global South",
    family: "Reformed Catholic — Traditional Anglican",
    tagline: "The via media — held with confessional fidelity",
    desc: "You are a traditional Anglican — likely in the Anglican Church in North America, a GAFCON province, or a Global South Anglican body. You value the Book of Common Prayer (1662 or the 2019 ACNA text), the Thirty-Nine Articles, historic Anglican liturgy, the three-fold ministry of bishops/priests/deacons, and a Reformed-Catholic theology that takes seriously both the patristic inheritance and the Reformation's recovery of justification by faith. You believe the Communion's progressive turn on sexuality was a departure from Scripture and left or support those who left the Episcopal Church.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual presence" },
      { label: "Authority", val: "Scripture, BCP, Thirty-Nine Articles" },
      { label: "Worship", val: "BCP 1662 or 2019, liturgical" },
      { label: "Soteriology", val: "Reformed-Catholic, justification by faith" }
    ]
  },
  AN_PROG: {
    name: "Episcopal / Progressive Anglican",
    family: "Reformed Catholic — Progressive Anglican",
    tagline: "The via media — held with generous orthodoxy",
    desc: "You are a progressive Anglican or Episcopalian — in TEC (The Episcopal Church), the Church of England's liberal wing, or a similarly progressive Anglican province. You support women's ordination and women bishops, full LGBTQ+ inclusion and blessing, and you understand the Anglican tradition as something that continues to develop under the Spirit's guidance. You probably value liturgy more than most Protestants, find the Creeds important even if you hold some doctrines with intellectual openness, and care deeply about beauty in worship.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual presence" },
      { label: "Authority", val: "Scripture through reason and tradition" },
      { label: "Worship", val: "BCP liturgy, inclusive language" },
      { label: "Soteriology", val: "Broad, emphasizes transformation" }
    ]
  },
  ME_GMC: {
    name: "Global Methodist Church",
    family: "Evangelical Wesleyan — Traditional",
    tagline: "Scriptural holiness — and scriptural fidelity",
    desc: "You are a traditional Wesleyan Methodist who left or supports leaving the United Methodist Church over its decisions on human sexuality. The Global Methodist Church, launched in 2022, represents your conviction that the Wesleyan theological tradition — prevenient grace, free will, the possibility of entire sanctification, the Quadrilateral with Scripture in primary authority — cannot be infinitely stretched to accommodate positions its founders would have recognized as contrary to Scripture.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual presence" },
      { label: "Authority", val: "Wesley's Quadrilateral (Scripture primary)" },
      { label: "Worship", val: "Hymnic, order of worship" },
      { label: "Soteriology", val: "Arminian, entire sanctification" }
    ]
  },
  ME_UMC: {
    name: "United Methodist Church",
    family: "Evangelical Wesleyan — Ecumenical",
    tagline: "Open hearts, open minds, open doors",
    desc: "You are a United Methodist — holding Wesleyan theology (prevenient grace, free will, the Quadrilateral, sanctification) within a connectional church structure and a broad theological tent. You may hold traditional or progressive views on sexuality but you remain in the UMC and value its diverse, connectional witness. Social holiness — the pursuit of justice in society — is as integral to your faith as personal holiness.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual presence" },
      { label: "Authority", val: "Wesleyan Quadrilateral" },
      { label: "Worship", val: "Varied — liturgical to contemporary" },
      { label: "Soteriology", val: "Arminian — prevenient grace" }
    ]
  },
  PR_PCA: {
    name: "Presbyterian Church in America",
    family: "Calvinist Reformation — Conservative Presbyterian",
    tagline: "Semper reformanda — the Westminster Standards stand",
    desc: "You are PCA — confessional subscription to the Westminster Confession of Faith and the Larger and Shorter Catechisms, the five points of Calvinism, male-only ordination to the offices of elder and deacon, expository preaching as the center of worship, the regulative principle (only what Scripture commands may be included in worship), and a serious concern for both the purity and peace of the church. You probably can recite the first question of the Shorter Catechism from memory and you care about what your church officially teaches, not just what feels right.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual/covenantal presence" },
      { label: "Authority", val: "Westminster Confession + Scripture" },
      { label: "Worship", val: "Word-centered, regulative principle" },
      { label: "Soteriology", val: "TULIP, covenant theology" }
    ]
  },
  PR_PCUSA: {
    name: "Presbyterian Church (USA)",
    family: "Calvinist Reformation — Progressive Presbyterian",
    tagline: "Reformed and always reforming — in every generation",
    desc: "You are PCUSA — holding the Reformed theological heritage (covenant theology, God's sovereignty, the priority of Scripture) while embracing women's ordination at all levels, full LGBTQ+ inclusion and ordination, and a generous approach to the Westminster Standards. You understand 'semper reformanda' as a mandate for ongoing change, care about social justice as an expression of God's shalom, and hold doctrinal questions with a certain theological generosity.",
    traits: [
      { label: "Sacraments", val: "Two — spiritual presence" },
      { label: "Authority", val: "Scripture + Reformed tradition" },
      { label: "Worship", val: "Liturgical to contemporary" },
      { label: "Soteriology", val: "Reformed, inclusive emphasis" }
    ]
  },
  RE_OPC: {
    name: "Orthodox Presbyterian Church",
    family: "Calvinist Reformation — Strict Confessionalist",
    tagline: "Machen's warrior children — Scripture, confession, no compromise",
    desc: "You are OPC — the church J. Gresham Machen founded in 1936 when he left the liberalizing PCUSA. You hold strict confessional subscription to the Westminster Standards, reject liberalism and neo-orthodoxy, insist on biblical inerrancy and infallibility, practice the regulative principle of worship with genuine care (psalm-singing is often valued), and take church discipline seriously. The OPC is small but theologically dense — it has produced some of the most rigorous Reformed scholarship in American church history.",
    traits: [
      { label: "Sacraments", val: "Two — covenant signs" },
      { label: "Authority", val: "Westminster Standards (full subscription)" },
      { label: "Worship", val: "Plain, regulated, psalm-singing valued" },
      { label: "Soteriology", val: "Strict five-point Calvinism" }
    ]
  },
  RE_URC: {
    name: "United Reformed Churches (URCNA)",
    family: "Calvinist Reformation — Continental Conservative",
    tagline: "Three Forms of Unity — the Dutch Reformed heritage in North America",
    desc: "You are United Reformed — confessionally bound to the Three Forms of Unity (Heidelberg Catechism, Belgic Confession, Canons of Dort), a descendant of the Dutch Reformed tradition that came through the Christian Reformed Church. You take the Church Order of Dort seriously, practice the regulative principle, catechize your children with the Heidelberg Catechism every Sunday, and are wary of the CRC's drift on women in office and human sexuality.",
    traits: [
      { label: "Sacraments", val: "Two — covenant signs" },
      { label: "Authority", val: "Three Forms of Unity" },
      { label: "Worship", val: "Plain, regulated, Psalter-focused" },
      { label: "Soteriology", val: "Dortian Calvinism" }
    ]
  },
  RE_CRC: {
    name: "Christian Reformed Church",
    family: "Calvinist Reformation — Dutch Reformed",
    tagline: "Every square inch — Kuyper's Reformed worldview",
    desc: "You are CRC — shaped by Abraham Kuyper's Neo-Calvinist vision that every sphere of life falls under Christ's lordship. You hold the Three Forms of Unity, engage seriously with Christian scholarship and culture (Calvin University, the Institute for Christian Studies), and occupy a position between the strict confessionalism of the URCNA and the more ecumenical openness of the RCA. The CRC has been roiled in recent years by debates over women in office and sexuality.",
    traits: [
      { label: "Sacraments", val: "Two — covenant signs" },
      { label: "Authority", val: "Three Forms of Unity" },
      { label: "Worship", val: "Liturgical, Psalms + hymns" },
      { label: "Soteriology", val: "Calvinist, common grace emphasis" }
    ]
  },
  RE_RCA: {
    name: "Reformed Church in America",
    family: "Calvinist Reformation — Ecumenical Reformed",
    tagline: "The oldest Protestant denomination in continuous service in North America",
    desc: "You are RCA — with roots in the Dutch Reformed church going back to 1628 in New Amsterdam. Like the CRC you nominally hold the Three Forms of Unity, but you are more ecumenically open, more willing to cooperate across denominational lines, and less culturally distinctive. You take Reformed theology seriously but hold it with generous evangelical warmth rather than strict confessionalist boundaries.",
    traits: [
      { label: "Sacraments", val: "Two — covenant signs" },
      { label: "Authority", val: "Three Forms of Unity (broadly)" },
      { label: "Worship", val: "Traditional to contemporary" },
      { label: "Soteriology", val: "Calvinist, warm evangelical" }
    ]
  },
  BA_SBC: {
    name: "Southern Baptist Convention",
    family: "Free Church — Conservative Baptist",
    tagline: "A regenerate church, believer-baptized, Bible-inerrant",
    desc: "You are Southern Baptist — the largest Protestant denomination in the United States. You insist on believer's baptism by immersion as a testimony to regeneration (not a means of grace), congregational polity, the inerrancy of Scripture as defined by the Baptist Faith and Message 2000, the male-only senior pastor office, complementarian views on gender, and cooperative missions through the Cooperative Program. The Conservative Resurgence of the 1970s–90s settled the inerrancy question for the SBC, and current debates center on Calvinism, Critical Race Theory, and denominational governance.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture alone (inerrant, BFM 2000)" },
      { label: "Worship", val: "Expository preaching, varied music" },
      { label: "Soteriology", val: "Calvinist and Arminian wings" }
    ]
  },
  BA_IFB: {
    name: "Independent Fundamental Baptist",
    family: "Free Church — Fundamentalist Baptist",
    tagline: "Separated, biblical, uncompromising — the old-time religion",
    desc: "You are IFB — Independent Fundamental Baptist, heir to the fundamentalist movement of the early 20th century. You insist on ecclesiastical separation from apostasy and worldliness, strong KJV-only tendencies (or at minimum very conservative Bible translation standards), strict standards of dress and behavior, cessationism regarding spiritual gifts, strong local church autonomy, and a deep distrust of the SBC as too compromised and cooperative with neo-evangelicalism. Your church is probably smaller, your pastor's authority is strong, and your standards are clear.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "KJV Scripture alone (inerrant)" },
      { label: "Worship", val: "Traditional, conservative, formal" },
      { label: "Soteriology", val: "Mostly Arminian, eternal security" }
    ]
  },
  BA_REF: {
    name: "Reformed Baptist",
    family: "Free Church — Calvinist Baptist",
    tagline: "The 1689 Confession — sovereign grace and believer's baptism together",
    desc: "You are a Reformed Baptist — holding the Second London Baptist Confession of 1689, the five points of Calvinism, believer's baptism by immersion (not paedobaptism), and congregational polity. You believe the Magisterial Reformers got sovereign grace right but erred in retaining infant baptism from Rome. Your tradition includes Spurgeon, the Particular Baptists, and a rich stream of confessional Baptist life. You may be in a small confessional Baptist church, the ARBCA, or simply an independent Reformed Baptist congregation.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — believer's baptism" },
      { label: "Authority", val: "Scripture + 1689 Confession" },
      { label: "Worship", val: "Expository, psalm-singing valued" },
      { label: "Soteriology", val: "Five-point Calvinism" }
    ]
  },
  BA_ABC: {
    name: "American Baptist Churches USA",
    family: "Free Church — Moderate Baptist",
    tagline: "Freedom of conscience under Scripture — the soul competency",
    desc: "You are American Baptist — the more moderate, historically northern counterpart to the SBC. You hold believer's baptism and congregational polity as essential Baptist distinctives, but you allow significant theological diversity on secondary questions. You support women's ordination, are open on inerrancy questions, and many ABC churches have embraced LGBTQ+ inclusion. Soul competency — every person's direct accountability to God without ecclesiastical mediation — is a core conviction.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture (variously interpreted)" },
      { label: "Worship", val: "Varied — traditional to progressive" },
      { label: "Soteriology", val: "Varied — Arminian to Calvinist" }
    ]
  },
  BA_CBF: {
    name: "Cooperative Baptist Fellowship",
    family: "Free Church — Progressive Baptist",
    tagline: "Soul freedom, Bible freedom, church freedom, religious freedom",
    desc: "You are CBF — formed in 1991 by Baptists who left the SBC during the conservative resurgence over inerrancy and women's ordination. You hold the four freedoms (soul, Bible, church, religious), support women in ministry at all levels, are open to LGBTQ+ inclusion, and engage the world through cooperative missions and advocacy. You are Baptist in form — believer's baptism, congregational polity — but progressive in outlook and suspicious of creedal enforcement.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture through prayerful interpretation" },
      { label: "Worship", val: "Varied, inclusive" },
      { label: "Soteriology", val: "Arminian-leaning, broad" }
    ]
  },
  CH_COC: {
    name: "Churches of Christ",
    family: "Restoration Movement — A Cappella",
    tagline: "Speak where the Bible speaks; be silent where it is silent",
    desc: "You are Churches of Christ — rejecting denominationalism and creeds entirely, insisting on a return to New Testament Christianity, practicing baptism for remission of sins (Acts 2:38), and worshipping a cappella because instrumental music in worship has no New Testament precedent. You hold congregational autonomy absolutely, have no denominational structure, take the 'pattern theology' of Scripture seriously, and believe you are simply the church — not a denomination among denominations.",
    traits: [
      { label: "Sacraments", val: "Baptism for remission of sins" },
      { label: "Authority", val: "Scripture alone — NT pattern" },
      { label: "Worship", val: "A cappella, no instruments" },
      { label: "Soteriology", val: "Conditional — obedient faith" }
    ]
  },
  CH_ICC: {
    name: "Independent Christian Churches",
    family: "Restoration Movement — Instrumental",
    tagline: "Christian unity on the Bible alone — instruments welcome",
    desc: "You are an Independent Christian Church — part of the Restoration Movement alongside Churches of Christ and Disciples of Christ, but in the middle: you use instrumental music unlike the CoC, but you remain theologically conservative and congregationally autonomous unlike the Disciples. You baptize believers for remission of sins, celebrate the Lord's Supper weekly, and resist denominational structures as incompatible with the NT pattern of the church.",
    traits: [
      { label: "Sacraments", val: "Baptism for remission, Lord's Supper weekly" },
      { label: "Authority", val: "Scripture alone" },
      { label: "Worship", val: "Varied — traditional to contemporary" },
      { label: "Soteriology", val: "Broadly evangelical, conditional" }
    ]
  },
  DI: {
    name: "Christian Church (Disciples of Christ)",
    family: "Restoration Movement — Progressive",
    tagline: "In essentials unity, in opinions liberty, in all things charity",
    desc: "You are a Disciple of Christ — from the most ecumenical and theologically progressive wing of the Restoration Movement. You value the Lord's Supper every Sunday, believer's baptism (though you accept transfers from other traditions), and the call to Christian unity above doctrinal division. You fully support women's ordination, are LGBTQ+ affirming, and are members of the National and World Council of Churches. You hold the Restoration ideal loosely — it's more of an ethos than a blueprint.",
    traits: [
      { label: "Sacraments", val: "Open communion weekly, baptism" },
      { label: "Authority", val: "Scripture through free inquiry" },
      { label: "Worship", val: "Open, ecumenical, inclusive" },
      { label: "Soteriology", val: "Broad, grace-centered" }
    ]
  },
  ME_MEN: {
    name: "Mennonite Church USA",
    family: "Radical Reformation — Anabaptist",
    tagline: "Follow me — the way of Jesus, the Sermon on the Mount",
    desc: "You are a Mennonite — heir to the 16th-century Anabaptist martyrs who insisted on believer's baptism, nonresistance, separation of church and state, and a community of radical discipleship. Mennonite Church USA is the most progressive Mennonite body, now fully LGBTQ+ affirming, but still shaped by the Anabaptist peace witness, four-part a cappella congregational singing, and incarnational mission theology.",
    traits: [
      { label: "Sacraments", val: "Ordinances — believers only" },
      { label: "Authority", val: "Scripture, Christocentric" },
      { label: "Worship", val: "Simple, communal, four-part harmony" },
      { label: "Soteriology", val: "Discipleship and community-shaped" }
    ]
  },
  MEN_CONS: {
    name: "Conservative Mennonite / Beachy Amish",
    family: "Radical Reformation — Conservative Anabaptist",
    tagline: "Gelassenheit — yieldedness to God and community",
    desc: "You are a Conservative Mennonite or Beachy Amish — maintaining the Anabaptist distinctives of believer's baptism, nonresistance, and church discipline while holding traditional views on dress standards (prayer veils for women, plain clothing), biblical sexuality, and separation from worldliness. You use cars and electricity (unlike Old Order Amish) but resist cultural accommodation more firmly than Mennonite Church USA, holding that a Christian community should look different from the world.",
    traits: [
      { label: "Sacraments", val: "Ordinances — believers only" },
      { label: "Authority", val: "Scripture + Anabaptist confession" },
      { label: "Worship", val: "Plain, conservative, a cappella" },
      { label: "Soteriology", val: "Yieldedness, discipleship" }
    ]
  },
  AMISH: {
    name: "Old Order Amish",
    family: "Radical Reformation — Separatist Anabaptist",
    tagline: "Gelassenheit — yielding to God, community, and the Ordnung",
    desc: "You are Old Order Amish — practicing the strictest form of Anabaptist community life. The Ordnung (community order) governs dress, technology use (no grid electricity, no automobiles, no internet), farming practices, and social interaction. The Ban (Meidung) enforces community boundaries against those who depart from the order. You resist modern technology not from ignorance but from conviction: dependence on God and community is incompatible with the autonomy that machines provide. Home worship, German, and the barn raising.",
    traits: [
      { label: "Sacraments", val: "Ordinances — foot-washing included" },
      { label: "Authority", val: "Scripture + Ordnung + bishop" },
      { label: "Worship", val: "Home-based, German, a cappella" },
      { label: "Soteriology", val: "Gelassenheit — yield, trust, wait" }
    ]
  },
  HUTTERITE: {
    name: "Hutterite Brethren",
    family: "Radical Reformation — Communal Anabaptist",
    tagline: "All things in common — the Acts 2 community, lived out",
    desc: "You are Hutterite — the most communal of the Anabaptist traditions, living in intentional agricultural colonies where all property is held in common. Named for Jakob Hutter (martyred 1536), you hold believer's baptism, pacifism, and communal economics as theological convictions (not lifestyle choices). Your colonies stretch across the northern Great Plains and Canadian prairies, largely self-sufficient, internally governed by elders, and maintaining German liturgy.",
    traits: [
      { label: "Sacraments", val: "Ordinances — full community context" },
      { label: "Authority", val: "Scripture + colony elders" },
      { label: "Worship", val: "German, a cappella, colony chapel" },
      { label: "Soteriology", val: "Communal salvation — body life" }
    ]
  },
  BRETHREN: {
    name: "Church of the Brethren",
    family: "Radical Reformation — Pietist Anabaptist",
    tagline: "No creed but the New Testament — love feast and threefold baptism",
    desc: "You are Church of the Brethren — a tradition blending Anabaptist and German Pietist streams. You practice believer's baptism by trine (threefold forward) immersion, a full Love Feast with foot-washing and the Lord's Supper, nonresistance, and simple living. You are one of the three Historic Peace Churches alongside Quakers and Mennonites. Today the Brethren tend toward progressive social positions while retaining their peace witness.",
    traits: [
      { label: "Sacraments", val: "Ordinances — trine immersion" },
      { label: "Authority", val: "New Testament (no formal creed)" },
      { label: "Worship", val: "Simple, love feast, foot-washing" },
      { label: "Soteriology", val: "Pietist discipleship, peace emphasis" }
    ]
  },
  PE_AG: {
    name: "Assemblies of God",
    family: "Pentecostal — Classical",
    tagline: "The full gospel — saved, sanctified, Spirit-filled, healed, coming King",
    desc: "You are Assemblies of God — the world's largest Pentecostal denomination. You hold that speaking in tongues is the initial physical evidence of the baptism of the Holy Spirit (a distinct work of grace after conversion), that divine healing is provided for in the atonement, that Christ's return is imminent (premillennial, pretribulation), and that Scripture is inerrant. Your worship is expressive, spontaneous, and oriented toward the Spirit's movement. You are evangelical in theology, Arminian in soteriology, and Pentecostal in experience.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — believer's baptism" },
      { label: "Authority", val: "Scripture (inerrant) + Spirit's voice" },
      { label: "Worship", val: "Expressive, spontaneous, praise" },
      { label: "Soteriology", val: "Arminian — four-square gospel" }
    ]
  },
  PE_COG: {
    name: "Church of God (Cleveland, TN)",
    family: "Pentecostal — Holiness",
    tagline: "Spirit-filled, sanctified, and episcopal",
    desc: "You are Church of God (Cleveland, TN) — one of the oldest Pentecostal denominations, rooted in the Holiness revival of the late 19th century and the Azusa Street awakening. Like the AG you affirm tongues as initial evidence of Spirit baptism, but your tradition has a stronger Wesleyan-holiness emphasis: entire sanctification is a distinct second work of grace that precedes Spirit baptism, making the CoG a three-crisis (or four-stage) soteriology. You have an episcopal polity unlike most Pentecostals.",
    traits: [
      { label: "Sacraments", val: "Three ordinances (incl. foot-washing)" },
      { label: "Authority", val: "Scripture + Spirit's ongoing work" },
      { label: "Worship", val: "Expressive, holiness tradition" },
      { label: "Soteriology", val: "Wesleyan-Pentecostal: saved, sanctified, filled" }
    ]
  },
  PE_COGIC: {
    name: "Church of God in Christ",
    family: "Pentecostal — Black Church Tradition",
    tagline: "The largest Black Pentecostal denomination in the world",
    desc: "You are COGIC — the Church of God in Christ, founded by Bishop Charles Harrison Mason in 1897. You hold classical Pentecostal theology (tongues as initial evidence, divine healing, Spirit baptism) within the rich tradition of Black Christianity: communal survival, prophetic witness, powerful preaching, and soulful worship that brings heaven to earth. You hold traditional views on gender and sexuality, have a strong episcopal polity, and place enormous value on the Holy Spirit's tangible presence.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — believer's baptism" },
      { label: "Authority", val: "Scripture + Spirit's anointing" },
      { label: "Worship", val: "Vibrant, musical, Spirit-led" },
      { label: "Soteriology", val: "Wesleyan-Pentecostal, full gospel" }
    ]
  },
  PE_ONENESS: {
    name: "Oneness Pentecostal",
    family: "Pentecostal — Non-Trinitarian",
    tagline: "Jesus Only — baptism in Jesus' name, not the Trinity formula",
    desc: "You are Oneness Pentecostal — part of the United Pentecostal Church International, the Pentecostal Assemblies of the World, or a similar body. You reject the doctrine of the Trinity as a later philosophical imposition and hold that 'Father, Son, and Holy Ghost' are three titles or manifestations of the one God, Jesus Christ. Baptism must be performed in Jesus' name only (Acts 2:38), and tongues as initial evidence of Spirit baptism is essential. The 'new birth' requires repentance, baptism in Jesus' name, and receiving the Spirit with tongues.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — Jesus' name baptism" },
      { label: "Authority", val: "Scripture (Acts pattern)" },
      { label: "Worship", val: "Expressive, Spirit-led" },
      { label: "Soteriology", val: "Acts 2:38 — repent, baptize, receive Spirit" }
    ]
  },
  CH_VIN: {
    name: "Vineyard Church",
    family: "Charismatic — Third Wave",
    tagline: "Naturally supernatural — the kingdom come",
    desc: "You are Vineyard — the Third Wave charismatic movement founded by John Wimber. You believe spiritual gifts are available today, practice healing prayer and prophetic ministry, but you don't require tongues as initial evidence of Spirit baptism. Your worship style — intimate, acoustic, contemporary — has been enormously influential on global Christianity. You hold evangelical theology with a relaxed, come-as-you-are ethos and focus on 'doing the stuff' of the kingdom.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture + Spirit's ongoing gifts" },
      { label: "Worship", val: "Intimate contemporary worship" },
      { label: "Soteriology", val: "Broadly evangelical, Arminian-leaning" }
    ]
  },
  CH_NAR: {
    name: "New Apostolic Reformation",
    family: "Charismatic — Dominionist",
    tagline: "Apostles and prophets restored — taking the seven mountains",
    desc: "You are influenced by the New Apostolic Reformation — the belief that God is restoring the offices of apostle and prophet to the church today, that Christians are called to 'take dominion' over the seven mountains of culture (government, education, media, business, family, religion, arts), and that spiritual warfare through prophetic declarations and intercession is central to the church's mission. This is the most controversial and politically engaged edge of charismatic Christianity.",
    traits: [
      { label: "Sacraments", val: "Informal — Spirit encounter primary" },
      { label: "Authority", val: "Scripture + living apostles + prophecy" },
      { label: "Worship", val: "Warfare worship, prophetic declarations" },
      { label: "Soteriology", val: "Dominionist — kingdom now" }
    ]
  },
  CH_WORD: {
    name: "Word of Faith / Prosperity Gospel",
    family: "Charismatic — Prosperity Movement",
    tagline: "Name it and claim it — health, wealth, and the covenant",
    desc: "You are shaped by the Word of Faith movement — the belief that God's covenant promises include physical health and financial prosperity, that faith is a spiritual force that moves God, and that positive confession of God's Word releases blessing. Critics call this 'prosperity gospel'; adherents see it as recovering the full blessings of Abraham's covenant. Associated with Kenneth Hagin, Kenneth Copeland, Joel Osteen, and Creflo Dollar.",
    traits: [
      { label: "Sacraments", val: "Informal — confession and faith" },
      { label: "Authority", val: "Scripture (confessed positively)" },
      { label: "Worship", val: "Celebratory, victory-oriented" },
      { label: "Soteriology", val: "Full covenant blessing — spirit, soul, body" }
    ]
  },
  CA_NONDENOM: {
    name: "Non-denominational Evangelical",
    family: "Evangelical — Independent",
    tagline: "No creed but Christ — just the Bible and the community",
    desc: "Your spiritual home is the non-denominational evangelical world — Bible-centered, conversion-focused, with flexible polity, contemporary worship, and an evangelical theology that draws on Baptist, Reformed, and Wesleyan streams without fully committing to any. You care about expository preaching, genuine conversion, and practical Christian living more than denominational labels. You probably believe 'just Christian' is the most honest thing to call yourself.",
    traits: [
      { label: "Sacraments", val: "Symbolic ordinances" },
      { label: "Authority", val: "Scripture alone" },
      { label: "Worship", val: "Contemporary, praise-oriented" },
      { label: "Soteriology", val: "Evangelical, varies by church" }
    ]
  },
  CA_ACT29: {
    name: "Reformed Evangelical / Acts 29",
    family: "Evangelical — Reformed Nondenominational",
    tagline: "Gospel-centered, church-planting, Reformed in doctrine",
    desc: "You are at home in the Acts 29 network or the broader Reformed evangelical world — Calvinist in soteriology, committed to church planting and mission, expository preaching, complementarian in gender roles, and culturally engaged without being culturally accommodating. You identify with figures like Tim Keller and John Piper. You're Reformed but church-plant obsessed rather than confessionalist.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture alone (inerrant)" },
      { label: "Worship", val: "Contemporary with Reformed content" },
      { label: "Soteriology", val: "Five-point Calvinism, gospel-centered" }
    ]
  },
  CA_SEEKER: {
    name: "Seeker-Sensitive Megachurch",
    family: "Evangelical — Pragmatic / Attractional",
    tagline: "Removing barriers to the gospel",
    desc: "You are at home in the seeker-sensitive megachurch world — the Willow Creek / Saddleback model that prioritizes accessibility for the unchurched, practical teaching, contemporary production values, and reducing barriers to entry. Theology is evangelical and broadly orthodox, but doctrinal precision is subordinated to relevance and felt-need ministry. The vision is to make church a place where non-Christians feel welcome.",
    traits: [
      { label: "Sacraments", val: "Minimal — occasional ordinances" },
      { label: "Authority", val: "Scripture + practical wisdom" },
      { label: "Worship", val: "High production, contemporary" },
      { label: "Soteriology", val: "Evangelical, simple gospel" }
    ]
  },
  CA_HOUSE: {
    name: "House Church / Organic Church",
    family: "Evangelical — Simple Church",
    tagline: "The church is not a building — it's a family",
    desc: "You are drawn to the house church or simple church movement — gathering in homes rather than institutional buildings, rejecting the clergy/laity distinction, practicing mutual ministry where every believer contributes, keeping finances minimal and community intimate. This is not a denomination but a conviction about what church is: an organism, not an organization. You are probably suspicious of institutional Christianity in all its forms.",
    traits: [
      { label: "Sacraments", val: "Shared meal — participatory" },
      { label: "Authority", val: "Scripture + communal discernment" },
      { label: "Worship", val: "Participatory, informal, home-based" },
      { label: "Soteriology", val: "Evangelical, community-shaped" }
    ]
  },
  QU_UNPRG: {
    name: "Unprogrammed Quaker (FGC)",
    family: "Radical Reformation — Liberal Quaker",
    tagline: "There is that of God in every person — waiting in the Light",
    desc: "You are an unprogrammed Quaker, likely associated with the Friends General Conference — gathering in expectant silence, waiting for the Spirit to move any member to speak. Your theology is likely liberal: you may not affirm traditional Christian doctrines about the atonement or bodily resurrection, but you hold the Inner Light as the animating spiritual reality. You care deeply about peace, social justice, simplicity, and integrity as outward expressions of inward truth.",
    traits: [
      { label: "Sacraments", val: "None — all life is sacramental" },
      { label: "Authority", val: "Inner Light / continuing revelation" },
      { label: "Worship", val: "Silent waiting, unprogrammed" },
      { label: "Soteriology", val: "Universal Light; universalist tendency" }
    ]
  },
  QU_PRG: {
    name: "Programmed / Evangelical Quaker (EFI)",
    family: "Radical Reformation — Evangelical Quaker",
    tagline: "Friends who believe Jesus is Lord — and worship accordingly",
    desc: "You are an evangelical or programmed Quaker, likely associated with Evangelical Friends International or Friends Church — holding Quaker distinctives (simplicity, peace testimony, integrity, the Inner Light) alongside orthodox evangelical theology. You have a pastor, sing worship songs, preach sermons, and affirm the bodily resurrection and the authority of Scripture. You are Quaker in heritage but evangelical in doctrine.",
    traits: [
      { label: "Sacraments", val: "None outward — or informal" },
      { label: "Authority", val: "Scripture primary + Inner Light" },
      { label: "Worship", val: "Programmed — songs, sermon, prayer" },
      { label: "Soteriology", val: "Evangelical — conversion, sanctification" }
    ]
  },
  QU_CON: {
    name: "Conservative Quaker (Ohio Yearly Meeting)",
    family: "Radical Reformation — Conservative Quaker",
    tagline: "Christ-centered silent worship — the original Quaker way",
    desc: "You are a Conservative Quaker — the smallest and least-known Quaker branch, holding to unprogrammed silent worship like FGC Quakers, but orthodox Christology like evangelical Quakers. The Inner Light is specifically the Light of Christ — not a vague universal spirituality. You maintain traditional Quaker plainness of dress, speech (thee/thou), and lifestyle. Ohio Yearly Meeting and a few other small yearly meetings make up this quiet but sturdy branch.",
    traits: [
      { label: "Sacraments", val: "None outward" },
      { label: "Authority", val: "Christ as Inner Light" },
      { label: "Worship", val: "Silent, unprogrammed, Christocentric" },
      { label: "Soteriology", val: "Inward work of Christ" }
    ]
  },
  AD_SDA: {
    name: "Seventh-day Adventist",
    family: "Adventist",
    tagline: "The everlasting gospel for the last days",
    desc: "You are Seventh-day Adventist — your distinctive markers include Saturday Sabbatarianism, soul sleep (conditional immortality — the dead are unconscious until the resurrection), annihilationism (the wicked are ultimately destroyed, not tormented forever), a health message (vegetarian ideal, no alcohol or tobacco), a great controversy cosmology between Christ and Satan over God's character, and the prophetic ministry of Ellen G. White as a lesser light pointing to Scripture. You expect Christ's second coming imminently and understand current events through a prophetic framework.",
    traits: [
      { label: "Sacraments", val: "Two ordinances + foot-washing" },
      { label: "Authority", val: "Scripture + prophetic gift (EGW)" },
      { label: "Worship", val: "Saturday, conservative" },
      { label: "Soteriology", val: "Arminian, investigative judgment" }
    ]
  },
  AD_SDR: {
    name: "Seventh Day Baptist",
    family: "Sabbatarian Baptist",
    tagline: "Baptist in theology, Saturday in worship",
    desc: "You are Seventh Day Baptist — holding Saturday as the biblical Sabbath, as SDAs do, but with mainstream Baptist theology rather than Adventist distinctives. No soul sleep, no Ellen White, no health message or prophetic interpretive grid — just Baptist soteriology and ecclesiology practiced on the seventh day. The SDB tradition is small but ancient, predating Adventism and tracing back to 17th-century England.",
    traits: [
      { label: "Sacraments", val: "Two ordinances — symbolic" },
      { label: "Authority", val: "Scripture alone" },
      { label: "Worship", val: "Saturday, Baptist-style" },
      { label: "Soteriology", val: "Broadly Baptist — Arminian or Calvinist" }
    ]
  },
  COG7: {
    name: "Church of God (Seventh Day)",
    family: "Sabbatarian Restorationist",
    tagline: "Saturday Sabbath, no immortal soul, no Ellen White",
    desc: "You are Church of God (Seventh Day) — a Sabbatarian body that observes Saturday worship and holds annihilationism (the dead are unconscious until resurrection) but rejects Ellen White as a prophet and the Adventist prophetic system. You are close to SDA roots but chose not to follow White in the 1860s. You hold restorationist convictions about returning to New Testament Christianity on the seventh-day Sabbath.",
    traits: [
      { label: "Sacraments", val: "Two ordinances" },
      { label: "Authority", val: "Scripture alone" },
      { label: "Worship", val: "Saturday, conservative" },
      { label: "Soteriology", val: "Arminian, conditional immortality" }
    ]
  },
  ME_LIB: {
    name: "Progressive Mainline Protestant",
    family: "Liberal Mainline",
    tagline: "The gospel as liberation and radical welcome",
    desc: "Your theology is progressive-mainline — you embrace historical-critical Scripture scholarship, support full LGBTQ+ inclusion and ordination, emphasize this-worldly justice and liberation, and understand the gospel primarily in terms of human flourishing and structural transformation. You're comfortable with theological ambiguity, see tradition as always evolving, and are likely in a progressive PCUSA, UMC, ELCA, or similar congregation.",
    traits: [
      { label: "Sacraments", val: "Varies — mostly symbolic" },
      { label: "Authority", val: "Scripture through reason, experience, tradition" },
      { label: "Worship", val: "Inclusive, often contemporary" },
      { label: "Soteriology", val: "Liberation, transformation, inclusion" }
    ]
  },
  UCC: {
    name: "United Church of Christ",
    family: "Liberal Mainline — Congregationalist",
    tagline: "God is still speaking — a comma, not a period",
    desc: "You are UCC — the United Church of Christ, formed from Congregationalist, Reformed, Evangelical, and Christian streams. You hold that God's revelation is not finished — the tradition is always open to new light. The UCC was the first mainline denomination to ordain women, an openly gay minister, and to affirm same-sex marriage. You care about social justice, ecumenism, and honoring conscience above doctrinal conformity.",
    traits: [
      { label: "Sacraments", val: "Two — open communion, inclusive" },
      { label: "Authority", val: "Scripture + ongoing revelation" },
      { label: "Worship", val: "Varied — liturgical to contemporary" },
      { label: "Soteriology", val: "Broadly grace-based, universalist tendency" }
    ]
  },
  UU: {
    name: "Unitarian Universalist",
    family: "Liberal Religion — Post-Christian",
    tagline: "Free faith — covenanted community without creedal walls",
    desc: "You find yourself in the UU tradition — committed to the inherent worth of every person, a free and responsible search for truth, religious pluralism, and a prophetic call to justice. You draw from multiple wisdom traditions (Christian, Jewish, Buddhist, Pagan, Humanist), are suspicious of creedal boundaries, and understand salvation (to whatever extent that word applies) in terms of this-worldly liberation and human flourishing. The seven principles are your guiding framework.",
    traits: [
      { label: "Sacraments", val: "Varies; often none formal" },
      { label: "Authority", val: "Individual conscience + community covenant" },
      { label: "Worship", val: "Varies widely; often no creed" },
      { label: "Soteriology", val: "Universal, pluralist, often secular-humanist" }
    ]
  },
  LDS: {
    name: "Latter-day Saints (Mormon)",
    family: "Restorationist — Non-Trinitarian",
    tagline: "The restoration of all things — latter-day scripture and living prophets",
    desc: "You are Latter-day Saint — believing that the primitive church fell into apostasy and was fully restored through Joseph Smith in 1830. You hold the Book of Mormon, Doctrine & Covenants, and Pearl of Great Price as additional scripture. You have a non-Nicene theology: the Father, Son, and Holy Ghost are three distinct beings, not one substance. You have a living prophet in Salt Lake City, distinctive temple worship, the doctrine of eternal families, and a vision of humanity's divine potential (exaltation) that mainline Christianity finds unorthodox.",
    traits: [
      { label: "Sacraments", val: "Ordinances — baptism, endowment, sealing" },
      { label: "Authority", val: "Bible + Book of Mormon + living prophet" },
      { label: "Worship", val: "Sacrament meeting, temple worship" },
      { label: "Soteriology", val: "Exaltation — eternal progression" }
    ]
  },
  JW: {
    name: "Jehovah's Witnesses",
    family: "Restorationist — Non-Trinitarian",
    tagline: "Jehovah's name exalted — the New World is coming",
    desc: "You are a Jehovah's Witness — a member of a theocratic organization governed through the Governing Body in Warwick, NY. You reject the Trinity (Jesus is the Archangel Michael, the first of God's creations), blood transfusions, flag saluting, and celebrations of holidays like Christmas and birthdays. You use the New World Translation, look forward to Armageddon and a Paradise Earth, and believe that only 144,000 will reign with Christ in heaven while the rest of the faithful will enjoy a renewed earth.",
    traits: [
      { label: "Sacraments", val: "Annual Memorial (Lord's Supper)" },
      { label: "Authority", val: "Bible (NWT) + Governing Body" },
      { label: "Worship", val: "Kingdom Hall, no musical instruments" },
      { label: "Soteriology", val: "Conditional — Armageddon survivors + 144,000" }
    ]
  },
  MESSIANIC: {
    name: "Messianic Jewish / Hebrew Roots",
    family: "Jewish-Christian Synthesis",
    tagline: "Yeshua is Messiah — Torah and New Covenant together",
    desc: "You are Messianic Jewish or Hebrew Roots — believing that faith in Yeshua (Jesus) as Messiah does not abolish but fulfills Torah, and that Gentile believers are called to observe the biblical feasts, Saturday Sabbath, and dietary laws as part of a deeper covenant life. Some branches maintain full Jewish ethnic identity; others are Gentile Christians drawn to the Jewish roots of their faith. You observe Passover, Shavuot, Sukkot, and Hanukkah, worship with Hebrew words and liturgy, and believe the church lost its Jewish identity too early.",
    traits: [
      { label: "Sacraments", val: "Torah observance + Yeshua's atonement" },
      { label: "Authority", val: "Tanakh + New Covenant writings" },
      { label: "Worship", val: "Jewish liturgy + worship music" },
      { label: "Soteriology", val: "Grace through faith in Yeshua" }
    ]
  },
  SPIRITIST: {
    name: "Spiritist / African Diaspora Christian",
    family: "Syncretic Christian — African Diaspora",
    tagline: "The Spirit moves — and the ancestors speak",
    desc: "Your faith lives in the borderlands between Christianity and African traditional religion — Candomblé, Umbanda, Vodou, Santería, or a related tradition where Christian saints overlay African orishas or loa, where the veneration of ancestors is a central practice, and where the Spirit's presence is felt in possession, ecstatic dance, divination, and healing. These traditions were born in the crucible of the transatlantic slave trade, as enslaved Africans preserved their ancestral religion under a Catholic veneer. The result is not syncretism as compromise but syncretism as survival.",
    traits: [
      { label: "Sacraments", val: "Ritual practice, initiation, offering" },
      { label: "Authority", val: "Tradition, elders, divination, Scripture" },
      { label: "Worship", val: "Dance, music, possession, feast days" },
      { label: "Soteriology", val: "Balance, protection, ancestors' blessing" }
    ]
  },
  COPTIC: {
    name: "Coptic Orthodox",
    family: "Ancient Eastern — Oriental Orthodox",
    tagline: "The church of Saint Mark — Egypt's ancient faith",
    desc: "You are Coptic Orthodox — the ancient church of Egypt, tracing its founding to the Apostle Mark. You hold the miaphysite Christology (one united nature after the incarnation), a rich tradition of desert monasticism (Antony and Pachomius were Coptic), the Coptic liturgy in ancient Egyptian and Arabic, and a deep tradition of martyrdom — the Coptic cross and the flame symbolizing those who gave their lives. Under severe pressure in modern Egypt, the Coptic church has maintained a remarkable fidelity.",
    traits: [
      { label: "Sacraments", val: "Seven mysteries" },
      { label: "Authority", val: "Holy Tradition + Coptic Patriarchate" },
      { label: "Worship", val: "Coptic liturgy — ancient Egyptian" },
      { label: "Soteriology", val: "Theosis through the mysteries" }
    ]
  }
};


/* ─────────────────────────────────────────────────────────
   QUESTION TREE
───────────────────────────────────────────────────────── */
const Q = {
  q1: {
    text: "Do you believe that Jesus Christ physically and bodily rose from the dead — that the tomb was genuinely empty?",
    sub: "The anchor question of Christian orthodoxy.",
    opts: [
      { text: "Yes", next: 'q2' },
      { text: "No, or I hold significant doubt about its literal, physical nature", next: 'q_prog1' }
    ]
  },

  q2: {
    text: "Do you affirm the traditional doctrine of the Trinity — one God eternally existing as Father, Son, and Holy Spirit, co-equal and co-eternal?",
    sub: "The most foundational divide in the history of Christian doctrine.",
    opts: [
      { text: "Yes — one God, three co-equal persons", next: 'q3' },
      { text: "Father, Son, and Holy Ghost are three distinct beings — not one substance", next: 'qLDS1' },
      { text: "Jesus is a created being — the first and greatest of God's creations — not co-eternal with the Father", next: 'qJW1' },
      { text: "'Father, Son, and Holy Ghost' are three titles or manifestations of the one God, Jesus Christ — not three persons", next: 'RESULT:PE_ONENESS' }
    ]
  },

  qLDS1: {
    text: "Do you believe Joseph Smith was a genuine prophet who restored the primitive church through new revelation?",
    sub: "",
    opts: [
      { text: "Yes", next: 'RESULT:LDS' },
      { text: "No", next: 'RESULT:JW' }
    ]
  },

  qJW1: {
    text: "Do you accept the authority of the Governing Body of Jehovah's Witnesses as God's channel of communication today?",
    sub: "",
    opts: [
      { text: "Yes", next: 'RESULT:JW' },
      { text: "No — I hold a non-Trinitarian view but don't follow the Witnesses", next: 'q3_alt' }
    ]
  },

  q3_alt: {
    text: "Is Jesus the Archangel Michael, or a purely human Messiah, or something else?",
    sub: "Non-Trinitarian Christians hold many different views.",
    opts: [
      { text: "I hold a subordinationist view — Jesus is divine but derived from the Father, not co-equal", next: 'q3' },
      { text: "Jesus is fully human — a great teacher and Messiah but not pre-existent God", next: 'q_prog1' }
    ]
  },

  q3: {
    text: "How many sacraments does your tradition recognize?",
    sub: "This one question has sorted two thousand years of Christian history.",
    opts: [
      { text: "Seven — Baptism, Eucharist, Confirmation, Penance, Anointing of the Sick, Holy Orders, Matrimony", next: 'q4' },
      { text: "Two sacraments (Baptism and the Lord's Supper) as genuine means of grace", next: 'q20' },
      { text: "Two ordinances — I call them that because they are acts of obedience, not channels of grace in themselves", next: 'q40' },
      { text: "None in the traditional sense — all of life is sacramental, or the Spirit needs no fixed outward signs", next: 'q70' },
      { text: "I'm not sure the number is what matters — what matters is the Spirit's presence and genuine faith", next: 'q_char1' }
    ]
  },

  /* ── 7 SACRAMENT BRANCH ── */
  q4: {
    text: "Is the Bishop of Rome — the Pope — the Vicar of Christ with universal jurisdiction and infallible teaching authority when speaking ex cathedra?",
    sub: "The answer to this created the East-West Schism and shapes everything downstream.",
    opts: [
      { text: "Yes", next: 'q5' },
      { text: "The Bishop of Rome has a primacy of honor among equals, but no universal jurisdiction or personal infallibility", next: 'q6' },
      { text: "No pope, but I hold apostolic succession, seven sacraments, and Western Catholic liturgy", next: 'RESULT:AC' }
    ]
  },

  q5: {
    text: "Did the Second Vatican Council (1962–65) represent a legitimate development of Catholic doctrine?",
    sub: "",
    opts: [
      { text: "Yes — Vatican II was a genuine council of the Church, and its reforms are valid", next: 'q5b' },
      { text: "Vatican II introduced novelties incompatible with the prior Magisterium — the Traditional Latin Mass is my home", next: 'q5c' },
      { text: "I worship in an Eastern Rite in full communion with Rome", next: 'RESULT:EC' }
    ]
  },

  q5b: {
    text: "Do you celebrate Mass in the Ordinary Form (Novus Ordo)?",
    sub: "",
    opts: [
      { text: "Yes — and I'm comfortable with it", next: 'RESULT:RC' },
      { text: "I'm Roman Catholic but attend the Extraordinary Form by preference within Ordinary Form obedience", next: 'RESULT:RC' }
    ]
  },

  q5c: {
    text: "Do you believe the post-conciliar popes are valid popes who erred, or that they are not valid popes at all?",
    sub: "",
    opts: [
      { text: "They are valid popes who made serious errors — I follow the traditional Mass but remain in communion", next: 'RESULT:RC_TRAD' },
      { text: "They are not valid popes — the seat is vacant (sedevacantism)", next: 'RESULT:SEDVAC' }
    ]
  },

  q6: {
    text: "Which Eastern tradition do you belong to?",
    sub: "The Eastern churches divided in 451 AD at Chalcedon — and again in 431 at Ephesus.",
    opts: [
      { text: "Greek, Russian, Serbian, Antiochian, Romanian, or another Chalcedonian Orthodox body", next: 'RESULT:EO' },
      { text: "Coptic Orthodox — the ancient church of Egypt", next: 'RESULT:COPTIC' },
      { text: "Ethiopian, Eritrean, Armenian, or Syrian (Syriac Orthodox) — pre-Chalcedonian tradition", next: 'RESULT:OO' },
      { text: "Assyrian Church of the East or Chaldean Catholic — ancient East Syriac tradition", next: 'RESULT:CHURCH_EAST' }
    ]
  },

  /* ── MAGISTERIAL PROTESTANT ── */
  q20: {
    text: "What happens to the bread and wine in the Lord's Supper?",
    sub: "This question split the Reformation irrevocably at Marburg in 1529.",
    opts: [
      { text: "Christ is truly and bodily present in, with, and under the bread and wine — real presence without transubstantiation (Lutheran)", next: 'q21' },
      { text: "The body and blood are present spiritually, received by faith — no physical change occurs (Calvinist / Reformed)", next: 'q30' },
      { text: "It is a memorial — a powerful symbolic remembrance of Christ's death, nothing more (Zwinglian)", next: 'q30' }
    ]
  },

  /* ── LUTHERAN ── */
  q21: {
    text: "Do you subscribe to the Lutheran Book of Concord (the Augsburg Confession, Luther's Catechisms, Apology, Smalcald Articles, Formula of Concord, etc.)?",
    sub: "",
    opts: [
      { text: "Yes, fully — the Book of Concord is my confessional standard", next: 'q22' },
      { text: "I am Lutheran but hold it loosely — more evangelical than confessional in my self-understanding", next: 'q21b' }
    ]
  },

  q21b: {
    text: "Does your church ordain women to the pastoral office?",
    sub: "",
    opts: [
      { text: "Yes", next: 'RESULT:LU_ELCA' },
      { text: "No", next: 'RESULT:LU_AFLC' }
    ]
  },

  q22: {
    text: "Does your church ordain women to the pastoral office?",
    sub: "This is the clearest dividing line among confessional Lutherans.",
    opts: [
      { text: "No — the pastoral office is restricted to qualified men", next: 'q23' },
      { text: "Yes — women may be ordained", next: 'q22b' }
    ]
  },

  q22b: {
    text: "Did your congregation leave the ELCA (or decline to join it) because of its stance on sexuality or inerrancy?",
    sub: "",
    opts: [
      { text: "Yes — we're post-ELCA but still ordain women", next: 'q22c' },
      { text: "No — we're ELCA and comfortable there", next: 'RESULT:LU_ELCA' }
    ]
  },

  q22c: {
    text: "Which describes your church body better?",
    sub: "",
    opts: [
      { text: "More structured, liturgical, and denominationally organized", next: 'RESULT:LU_NALC' },
      { text: "More congregational, networked, flexible, and mission-focused", next: 'RESULT:LU_LCMC' }
    ]
  },

  q23: {
    text: "How strict is your church's fellowship practice — who may you pray or commune with?",
    sub: "This is the deepest divide in conservative Lutheran life.",
    opts: [
      { text: "Very strict — we require full doctrinal agreement even for joint prayer or shared worship", next: 'q24' },
      { text: "Strict on altar and pulpit fellowship, but we can cooperate civically — broadly LCMS-style", next: 'RESULT:LU_LCMS' },
      { text: "Strongly confessional but more congregational and pietistic in feel", next: 'RESULT:LU_AFLC' },
      { text: "Confessional and conservative, small, historically older American synod", next: 'RESULT:LU_AALC' }
    ]
  },

  q24: {
    text: "Which best describes your denomination's history?",
    sub: "",
    opts: [
      { text: "Upper Midwest, large, German-dominant, long-standing strict fellowship — the Wisconsin Synod", next: 'RESULT:LU_WELS' },
      { text: "Smaller, Norwegian-rooted, closely associated with WELS", next: 'RESULT:LU_ELS' },
      { text: "Very small, separated from both WELS and ELS over fellowship concerns", next: 'RESULT:LU_CLC' },
      { text: "Fully independent, micro-synod, or unaffiliated confessional congregation", next: 'RESULT:LU_CONFESSIONAL' }
    ]
  },

  /* ── REFORMED / CALVINIST ── */
  q30: {
    text: "Do you hold the five points of Calvinism — Total Depravity, Unconditional Election, Limited Atonement, Irresistible Grace, Perseverance of the Saints?",
    sub: "The TULIP question. You can partially agree — that's fine.",
    opts: [
      { text: "Yes — all five, or substantially all five", next: 'q31' },
      { text: "No — God desires all to be saved; election is conditional on foreseen faith; grace can be resisted", next: 'q50' },
      { text: "I hold a mediating position — some points but not all", next: 'q31' }
    ]
  },

  q31: {
    text: "Which confessional standard governs your church?",
    sub: "The two great confessional poles of Reformed Protestantism.",
    opts: [
      { text: "Westminster Confession of Faith and Catechisms — the Presbyterian tradition", next: 'q32' },
      { text: "Three Forms of Unity — Heidelberg Catechism, Belgic Confession, Canons of Dort (Dutch/Continental Reformed)", next: 'q35' },
      { text: "No formal confession — Scripture alone governs directly, though I hold Calvinist convictions", next: 'RESULT:CA_ACT29' }
    ]
  },

  q32: {
    text: "Does your church ordain women to the office of elder or pastor?",
    sub: "",
    opts: [
      { text: "No", next: 'q33' },
      { text: "Yes", next: 'RESULT:PR_PCUSA' }
    ]
  },

  q33: {
    text: "How fully does your church subscribe to the Westminster Standards?",
    sub: "",
    opts: [
      { text: "Full subscription is required — the OPC model of confessional rigor", next: 'RESULT:RE_OPC' },
      { text: "System subscription — we hold the Standards seriously but allow exceptions on secondary matters", next: 'RESULT:PR_PCA' }
    ]
  },

  q35: {
    text: "Which continental Reformed body fits your tradition?",
    sub: "",
    opts: [
      { text: "URCNA — strict confessionalism, conservative on church order, wary of CRC's drift", next: 'RESULT:RE_URC' },
      { text: "CRC — Kuyperian worldview, cultural engagement, between URCNA and RCA", next: 'RESULT:RE_CRC' },
      { text: "RCA — more ecumenical, evangelical warmth, the oldest continuous Protestant denomination in North America", next: 'RESULT:RE_RCA' }
    ]
  },

  /* ── ARMINIAN / WESLEYAN / METHODIST / ANGLICAN ── */
  q50: {
    text: "Does apostolic succession — an unbroken chain of bishops ordained from the apostles — matter for the validity of your church's order?",
    sub: "Methodist and Anglican traditions both have Arminian-leaning theologies but differ sharply on church order.",
    opts: [
      { text: "Yes — episcopal order with apostolic succession is essential", next: 'q51' },
      { text: "No — the church is constituted by Word and Spirit, not a chain of episcopal ordinations", next: 'q52' }
    ]
  },

  q51: {
    text: "Which Anglican tradition describes you?",
    sub: "",
    opts: [
      { text: "Traditional Anglican — ACNA, GAFCON, or Global South", next: 'RESULT:AN_TRAD' },
      { text: "Progressive Anglican or Episcopalian — TEC, Church of England liberal wing", next: 'RESULT:AN_PROG' }
    ]
  },

  q52: {
    text: "Do you hold a Wesleyan view of sanctification — including the possibility of entire sanctification or 'second blessing' in this life?",
    sub: "This is the core of Wesleyan-Holiness theology.",
    opts: [
      { text: "Yes — entire sanctification as a distinct work of grace is a genuine possibility in this life", next: 'q53' },
      { text: "I'm broadly Arminian but don't emphasize entire sanctification as a distinct crisis experience", next: 'q57' }
    ]
  },

  q53: {
    text: "Have you left or do you support leaving the United Methodist Church over its decisions on sexuality?",
    sub: "",
    opts: [
      { text: "Yes", next: 'RESULT:ME_GMC' },
      { text: "No — I remain in the UMC", next: 'RESULT:ME_UMC' }
    ]
  },

  q57: {
    text: "Are you part of a programmed, denominational worship structure, or more nondenominational?",
    sub: "",
    opts: [
      { text: "I'm denominationally Wesleyan or Methodist but without the full Holiness emphasis", next: 'RESULT:ME_UMC' },
      { text: "I'm non-denominational with Arminian theology", next: 'q_char1' }
    ]
  },

  /* ── FREE CHURCH / ORDINANCES ── */
  q40: {
    text: "Who may receive baptism?",
    sub: "The mode and recipient of baptism defines the Free Church tradition.",
    opts: [
      { text: "Believers only — baptism follows a credible profession of faith", next: 'q41' },
      { text: "Believers and their households, including infants, as a sign of covenant inclusion", next: 'q30' }
    ]
  },

  q41: {
    text: "How is baptism administered in your church?",
    sub: "",
    opts: [
      { text: "By full immersion — the whole body under water", next: 'q42' },
      { text: "By sprinkling or pouring — mode is secondary to the act", next: 'q45' },
      { text: "By trine (threefold) forward immersion — a distinctive Brethren practice", next: 'RESULT:BRETHREN' }
    ]
  },

  q42: {
    text: "Is baptism itself a means of grace for the forgiveness of sins (Acts 2:38), or is it an outward symbol of inward salvation already received?",
    sub: "This one question divides Restoration Movement churches from Baptists.",
    opts: [
      { text: "Baptism is for the remission of sins — it is part of the obedience through which salvation is received", next: 'q43' },
      { text: "Baptism is an outward symbol of inward grace already received — it does not save", next: 'q44' }
    ]
  },

  q43: {
    text: "Do you use musical instruments in worship?",
    sub: "The Churches of Christ split from Christian Churches over this question in the early 20th century.",
    opts: [
      { text: "No — a cappella worship only; instruments have no New Testament precedent", next: 'RESULT:CH_COC' },
      { text: "Yes — instruments are permitted; the NT doesn't forbid them", next: 'q43b' }
    ]
  },

  q43b: {
    text: "Are you theologically conservative and congregationally autonomous, or more ecumenical and progressive?",
    sub: "",
    opts: [
      { text: "Conservative, autonomous — Independent Christian Churches", next: 'RESULT:CH_ICC' },
      { text: "Ecumenical, progressive, open — Disciples of Christ", next: 'RESULT:DI' }
    ]
  },

  q44: {
    text: "Do you hold the doctrine of biblical inerrancy?",
    sub: "",
    opts: [
      { text: "Yes — the Scriptures are without error in all that they affirm", next: 'q44b' },
      { text: "Scripture is authoritative and inspired but I allow for human limitations in the text", next: 'q45' }
    ]
  },

  q44b: {
    text: "What is your eschatological framework?",
    sub: "Your end-times view often reflects broader theological commitments.",
    opts: [
      { text: "Dispensational premillennialism — pre-trib rapture, Israel and Church are distinct, literal future millennium", next: 'q44c' },
      { text: "Historic premillennialism — Christ returns before the millennium, no separate Israel/Church distinction", next: 'q44d' },
      { text: "Amillennialism — the millennium is fulfilled spiritually through Christ's present reign", next: 'q44d' },
      { text: "Postmillennialism — the gospel gradually transforms the world before Christ returns", next: 'q44d' },
      { text: "I don't hold a firm eschatological position", next: 'q44d' }
    ]
  },

  q44c: {
    text: "Which Baptist identity fits you best?",
    sub: "",
    opts: [
      { text: "Southern Baptist — cooperative missions, BFM 2000, complementarian, inerrancy", next: 'RESULT:BA_SBC' },
      { text: "Independent Fundamental Baptist — KJV-only tendency, strict separation, distrust of SBC compromise", next: 'RESULT:BA_IFB' },
      { text: "Reformed Baptist — 1689 Confession, five-point Calvinist, believer's baptism by immersion", next: 'RESULT:BA_REF' }
    ]
  },

  q44d: {
    text: "How would you describe your Baptist tradition?",
    sub: "",
    opts: [
      { text: "Southern Baptist or similar conservative evangelical Baptist", next: 'RESULT:BA_SBC' },
      { text: "Reformed Baptist — 1689 Confession, sovereign grace", next: 'RESULT:BA_REF' },
      { text: "American Baptist — moderate, diverse, soul competency", next: 'RESULT:BA_ABC' },
      { text: "Cooperative Baptist Fellowship — post-SBC progressive Baptists", next: 'RESULT:BA_CBF' }
    ]
  },

  q45: {
    text: "Do you observe the Saturday Sabbath as the biblical day of rest?",
    sub: "",
    opts: [
      { text: "Yes — Saturday is the seventh-day Sabbath commanded in Scripture", next: 'q46' },
      { text: "No — I worship on Sunday", next: 'q47' }
    ]
  },

  q46: {
    text: "Which Saturday-worship tradition do you belong to?",
    sub: "",
    opts: [
      { text: "Seventh-day Adventist — Ellen White, soul sleep, health message, investigative judgment", next: 'RESULT:AD_SDA' },
      { text: "Seventh Day Baptist — Baptist theology, no EGW, ancient SDB tradition", next: 'RESULT:AD_SDR' },
      { text: "Church of God (7th Day) — Adventist roots, rejected Ellen White", next: 'RESULT:COG7' }
    ]
  },

  q47: {
    text: "Do you observe the biblical feasts (Passover, Shavuot, Sukkot, etc.) and Torah dietary laws as part of your Christian practice?",
    sub: "",
    opts: [
      { text: "Yes — Yeshua fulfilled but did not abolish Torah; these are for all covenant people", next: 'RESULT:MESSIANIC' },
      { text: "No", next: 'q48' }
    ]
  },

  q48: {
    text: "Does your faith community gather in homes rather than a dedicated church building?",
    sub: "",
    opts: [
      { text: "Yes — house church is my primary Christian community", next: 'RESULT:CA_HOUSE' },
      { text: "No", next: 'q49' }
    ]
  },

  q49: {
    text: "Which describes your faith community?",
    sub: "",
    opts: [
      { text: "Mennonite or Anabaptist in identity", next: 'q60' },
      { text: "Broadly evangelical and non-denominational", next: 'q_nondenom1' },
      { text: "Progressive or mainline Protestant", next: 'q_prog1' },
      { text: "I don't fit those categories", next: 'q_nondenom1' }
    ]
  },

  /* ── ANABAPTIST BRANCH ── */
  q60: {
    text: "How separated is your community's way of life from mainstream society?",
    sub: "Anabaptism spans from engaged urban Mennonites to fully separate Old Order communities.",
    opts: [
      { text: "Highly separated — plain dress, restricted technology, the Ordnung or equivalent governs daily life", next: 'q61' },
      { text: "Countercultural but engaged — peace activism, service, intentional community, but not withdrawn", next: 'q62' }
    ]
  },

  q61: {
    text: "Which separatist Anabaptist tradition fits you?",
    sub: "",
    opts: [
      { text: "Old Order Amish — horse and buggy, home worship, strictest Ordnung", next: 'RESULT:AMISH' },
      { text: "Conservative Mennonite or Beachy Amish — plain dress but cars and electricity", next: 'RESULT:MEN_CONS' },
      { text: "Hutterite — communal agricultural colony, all property in common", next: 'RESULT:HUTTERITE' }
    ]
  },

  q62: {
    text: "Which Anabaptist community is your home?",
    sub: "",
    opts: [
      { text: "Mennonite Church USA — peace witness, service, now LGBTQ+ affirming", next: 'RESULT:ME_MEN' },
      { text: "Conservative Mennonite — peace witness, traditional ethics, not withdrawn but plain", next: 'RESULT:MEN_CONS' },
      { text: "Church of the Brethren — pietist-Anabaptist blend, love feast, trine immersion", next: 'RESULT:BRETHREN' }
    ]
  },

  /* ── NO SACRAMENTS / QUAKER / SPIRIT-FIRST ── */
  q70: {
    text: "Does the Spirit speak directly to you in a way that can correct or supplement Scripture?",
    sub: "The Quaker 'inner word' versus the Protestant 'outer word' is the crucial distinction.",
    opts: [
      { text: "Yes — the Spirit's direct voice in the heart is the primary authority", next: 'q71' },
      { text: "No — Scripture is the norm; the Spirit illumines the text but does not override it", next: 'q72' }
    ]
  },

  q71: {
    text: "Which Quaker tradition fits you?",
    sub: "The three Quaker branches differ substantially in theology and worship style.",
    opts: [
      { text: "Unprogrammed, silent, liberal theology — FGC, possibly post-Christian or pluralist", next: 'RESULT:QU_UNPRG' },
      { text: "Programmed worship, evangelical theology, orthodox Christology — Evangelical Friends", next: 'RESULT:QU_PRG' },
      { text: "Conservative unprogrammed, Christocentric, plain dress, Ohio Yearly Meeting", next: 'RESULT:QU_CON' }
    ]
  },

  q72: {
    text: "Is speaking in tongues the initial physical evidence of the baptism of the Holy Spirit?",
    sub: "This is the defining question of Classical Pentecostalism versus the broader charismatic world.",
    opts: [
      { text: "Yes — tongues as initial evidence is a distinctive doctrinal commitment", next: 'q73' },
      { text: "No — tongues is one genuine gift among many; Spirit baptism doesn't require it", next: 'q74' }
    ]
  },

  q73: {
    text: "Which Pentecostal tradition is yours?",
    sub: "",
    opts: [
      { text: "Assemblies of God — largest Pentecostal denomination, evangelical, four-square gospel", next: 'RESULT:PE_AG' },
      { text: "Church of God (Cleveland, TN) — Wesleyan-holiness Pentecostal, episcopal polity", next: 'RESULT:PE_COG' },
      { text: "Church of God in Christ (COGIC) — largest Black Pentecostal denomination", next: 'RESULT:PE_COGIC' }
    ]
  },

  q74: {
    text: "Do you believe God is restoring the offices of apostle and prophet to the church today?",
    sub: "",
    opts: [
      { text: "Yes — apostles and prophets speak authoritatively today; dominion theology resonates with me", next: 'RESULT:CH_NAR' },
      { text: "No — but signs and wonders are genuine; Vineyard-style third wave fits me", next: 'RESULT:CH_VIN' },
      { text: "I'm broadly charismatic but mainly evangelical and non-denominational", next: 'q_char1' }
    ]
  },

  q_char1: {
    text: "Do you believe God promises physical health and financial prosperity to those with enough faith?",
    sub: "",
    opts: [
      { text: "Yes — the covenant includes material blessing", next: 'RESULT:CH_WORD' },
      { text: "No", next: 'q_nondenom1' }
    ]
  },

  q_nondenom1: {
    text: "How would you describe your church's worship style?",
    sub: "",
    opts: [
      { text: "High production, contemporary, seeker-oriented megachurch", next: 'RESULT:CA_SEEKER' },
      { text: "Expository, Reformed, gospel-centered — church plant style", next: 'RESULT:CA_ACT29' },
      { text: "Generic evangelical — Bible church, community church", next: 'RESULT:CA_NONDENOM' },
      { text: "House church or organic church", next: 'RESULT:CA_HOUSE' }
    ]
  },

  /* ── PROGRESSIVE BRANCH ── */
  q_prog1: {
    text: "Do you still identify as Christian, or as post-Christian / spiritual but not religious?",
    sub: "",
    opts: [
      { text: "I identify as Christian — the tradition matters to me even if I hold some doctrines loosely", next: 'q_prog2' },
      { text: "I'm post-Christian, pluralist, or spiritual but not religious", next: 'RESULT:UU' }
    ]
  },

  q_prog2: {
    text: "Do you affirm the physical bodily resurrection of Jesus as a historical event?",
    sub: "",
    opts: [
      { text: "Yes", next: 'q_prog3' },
      { text: "No, or I hold it with deep uncertainty", next: 'q_prog4' }
    ]
  },

  q_prog3: {
    text: "Do you support full LGBTQ+ inclusion in your church — ordination, marriage blessing, and full membership without conditions?",
    sub: "",
    opts: [
      { text: "Yes", next: 'q_prog4' },
      { text: "No — I hold traditional Christian teaching on sexual ethics", next: 'q30' }
    ]
  },

  q_prog4: {
    text: "Which progressive tradition resonates most?",
    sub: "",
    opts: [
      { text: "Mainline progressive — PCUSA, UMC, or ELCA progressive wing; social justice; LGBTQ+ full inclusion", next: 'RESULT:ME_LIB' },
      { text: "United Church of Christ — God is still speaking; the most progressive mainline denomination", next: 'RESULT:UCC' },
      { text: "Full religious pluralism — multiple traditions offer valid paths", next: 'RESULT:UU' }
    ]
  },

  /* ── NOVATIANIST / DONATIST ── */
  qNOV1: {
    text: "How should the Church treat baptized Christians who denied Christ under persecution and later repent?",
    sub: "The core controversy behind the Novatian schism after the Decian persecution (249–251 AD).",
    opts: [
      { text: "They may be restored after sincere repentance, confession, and a period of penance", next: 'q4' },
      { text: "The Church cannot restore them to communion — forgiveness belongs to God alone after such grave apostasy", next: 'qNOV2' },
      { text: "They should be restored quickly if sincere; the church's mercy should be generous", next: 'q40' }
    ]
  },

  qNOV2: {
    text: "Does the validity of a sacrament depend on the holiness of the minister who performs it?",
    sub: "This is the precise question that divided Novatianists from Donatists from Catholics.",
    opts: [
      { text: "No — the sacrament's validity depends on Christ, not the minister's virtue (ex opere operato)", next: 'qNOV3' },
      { text: "Yes — a compromised or sinful minister cannot validly baptize or preside at the Eucharist", next: 'RESULT:DONAT' },
      { text: "I think purity matters but it's more about the community's discipline than the minister's character", next: 'qNOV3' }
    ]
  },

  qNOV3: {
    text: "Is your primary concern the moral purity of the congregation, or the doctrinal unity of the episcopate?",
    sub: "",
    opts: [
      { text: "Moral purity — the church must be visibly holy and free from grave public sinners", next: 'RESULT:NOVAT' },
      { text: "Doctrinal unity — right belief under recognized bishops is what makes the Church", next: 'q4' },
      { text: "Neither — congregational discipline should aim at restoration, not permanent exclusion", next: 'q40' }
    ]
  }
};


/* ─────────────────────────────────────────────────────────
   STATE
───────────────────────────────────────────────────────── */
let curQ = null;
let hist = [];


/* ─────────────────────────────────────────────────────────
   ENGINE
───────────────────────────────────────────────────────── */
function startQuiz() {
  hist = [];
  curQ = 'q1';
  document.getElementById('screen-intro').classList.remove('active');
  document.getElementById('screen-quiz').classList.add('active');
  renderQ();
}

function renderQ() {
  const q = Q[curQ];
  if (!q) { console.error('Missing question:', curQ); return; }

  const step = hist.length + 1;
  document.getElementById('q-counter').textContent = 'Question ' + step;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('q-subtext').textContent = q.sub || '';

  const fill = Math.min(((step - 1) / 22) * 100, 93);
  document.getElementById('progress-fill').style.width = fill + '%';

  renderTrail();

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  q.opts.forEach((o, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerHTML = `<span class="opt-letter">${L[i]}</span><span class="opt-text">${o.text}</span>`;
    btn.onclick = () => selectAndAdvance(i, o);
    list.appendChild(btn);
  });

  document.getElementById('btn-back').disabled = hist.length === 0;
}

function selectAndAdvance(i, opt) {
  document.querySelectorAll('.opt-btn').forEach((b, j) => b.classList.toggle('selected', j === i));
  setTimeout(() => {
    hist.push({ qId: curQ, optIndex: i, optText: opt.text });
    const nxt = opt.next;
    if (nxt.startsWith('RESULT:')) {
      showResult(nxt.replace('RESULT:', ''));
    } else {
      curQ = nxt;
      renderQ();
    }
  }, 200);
}

function goBack() {
  if (!hist.length) return;
  const last = hist.pop();
  curQ = last.qId;
  const resultScreen = document.getElementById('screen-result');
  if (resultScreen.classList.contains('active')) {
    resultScreen.classList.remove('active');
    document.getElementById('screen-quiz').classList.add('active');
  }
  renderQ();
}


/* ─────────────────────────────────────────────────────────
   TRAIL
───────────────────────────────────────────────────────── */
function renderTrail() {
  const c = document.getElementById('trail-container');
  if (!c) return;
  if (!hist.length) { c.innerHTML = ''; return; }

  const show = hist.slice(-3);
  c.innerHTML = show.map((s, i) => {
    const isLast = i === show.length - 1;
    const q = Q[s.qId];
    const letter = L[s.optIndex];
    const shortQ = q.text.length > 50 ? q.text.slice(0, 50) + '…' : q.text;
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
  const d = denoms[key];
  if (!d) { console.error('Missing denomination:', key); return; }

  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-result').classList.add('active');

  document.getElementById('result-tradition-family').textContent = d.family;
  document.getElementById('result-denom-name').textContent = d.name;
  document.getElementById('result-tagline').textContent = d.tagline;
  document.getElementById('result-desc').textContent = d.desc;

  document.getElementById('result-traits').innerHTML = (d.traits || []).map(t =>
    `<div class="trait">
      <div class="trait-label">${t.label}</div>
      <div class="trait-val">${t.val}</div>
    </div>`
  ).join('');

  renderPath();
}

function renderPath() {
  const el = document.getElementById('path-taken');
  if (!el) return;
  el.innerHTML = hist.map((s, i) => {
    const q = Q[s.qId];
    const letter = L[s.optIndex];
    return `<div class="path-step">
      <div class="path-num">${i + 1}</div>
      <div>
        <div class="path-q">${q.text}</div>
        <div class="path-a"><span class="path-letter">${letter}</span>${s.optText}</div>
      </div>
    </div>`;
  }).join('');
}

function restartQuiz() {
  hist = [];
  curQ = 'q1';
  document.getElementById('screen-result').classList.remove('active');
  document.getElementById('screen-quiz').classList.remove('active');
  document.getElementById('screen-intro').classList.add('active');
  document.getElementById('progress-fill').style.width = '0%';
}
