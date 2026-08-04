/**
 * DENOVA — Dental Innovation Forum
 * Premium Interactive Controller & Bilingual (EN / AR) Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Bilingual Translation Engine
  const translations = {
    en: {
      skip_link: 'Skip to content',
      header_about: 'About',
      header_ecosystem: 'Ecosystem',
      header_conference: 'Conference',
      header_community: 'Community',
      header_join: 'Join DENOVA ↗',
      mobile_footer: 'Dental Innovation Forum · Tripoli, Libya',
      hero_label: 'Global scientific dental conference',
      hero_title: 'Building the Future<br />of Dental Innovation',
      hero_copy: 'DENOVA is a collaborative platform connecting dental students, educators, professionals, researchers, and innovators to shape the future of dentistry through education, scientific events, and innovation.',
      hero_btn_explore: 'Explore DENOVA ↓',
      hero_btn_join: 'Join the Community ↗',
      hero_tagline: 'Innovate <i></i> Discover <i></i> Elevate',
      hero_scroll: 'Scroll to discover',
      about_label: 'The platform',
      about_title: 'What is<br /><em>DENOVA?</em>',
      about_copy: 'A modern dental platform dedicated to education, collaboration, innovation, and scientific growth. DENOVA brings ambitious minds into one progressive space — where knowledge is exchanged, possibilities are examined, and better standards emerge.',
      about_link: 'Discover our ecosystem →',
      about_note_a: 'Knowledge, in motion',
      about_note_b: 'Built for the next generation',
      ecosystem_label: 'A connected platform',
      ecosystem_title: 'One forum.<br />A living <em>ecosystem.</em>',
      ecosystem_copy: 'Every part of DENOVA is designed to strengthen the others. Select a node to explore the network.',
      eco_tab_1: '01 Community',
      eco_tab_2: '02 Education',
      eco_tab_3: '03 Research',
      eco_tab_4: '04 Innovation',
      eco_tab_5: '05 Conference',
      eco_tab_6: '06 Partnerships',
      node_community: 'Community',
      node_education: 'Education',
      node_research: 'Research',
      node_innovation: 'Innovation',
      node_conference: 'Conference',
      node_partnerships: 'Partnerships',
      brand_subtitle: 'Dental Innovation Forum',
      supervision_label: 'Institutional foundation',
      supervision_title: 'Under the<br /><em>Supervision</em>',
      supervision_copy: 'Proudly supported by the Student Union of the Faculty of Dentistry, University of Tripoli — building a stronger environment for academic ambition and professional growth.',
      supervision_sig: 'Student Union · Faculty of Dentistry<br />University of Tripoli',
      partner_label: 'Scientific Partner',
      partner_title: 'In Collaboration With<br /><em>Libyan Dental Association</em>',
      partner_copy: 'Working together to elevate scientific discourse, support dental professionals, and promote evidence-based practice across Libya.',
      partner_link: 'Explore Scientific Program →',
      partner_role: 'Official Scientific Partner',
      partner_name: 'Libyan Dental Association',
      conference_label: 'A defining annual gathering',
      conference_title: 'DENOVA Annual<br /><em>Conference</em>',
      conference_date: 'Held every <span>September</span><br /><small>Tripoli, Libya · Global perspective</small>',
      conference_context: 'A full-spectrum scientific experience: visionary speakers, research exchange, advanced workshops, and new relationships across the dental world.',
      conference_countdown: 'Conference countdown',
      sept_2026: 'September 2026',
      cd_days: 'Days',
      cd_hours: 'Hours',
      cd_mins: 'Mins',
      cd_secs: 'Secs',
      conference_learn: 'Learn More ↗',
      conference_register: 'Register Now →',
      clinical_label: 'Clinical Community',
      clinical_title: 'Learn from real<br /><em>discussions.</em>',
      clinical_copy: 'A refined scientific space to publish clinical cases, ask sharper questions, discuss treatment plans, and learn directly from peers and experts.',
      clinical_visit: 'Visit Clinical Community ↗',
      cat_all: 'All cases',
      cat_endo: 'Endodontics',
      cat_surgery: 'Oral surgery',
      cat_ortho: 'Orthodontics',
      cat_perio: 'Periodontics',
      clinical_motto: 'Knowledge shared with care.',
      cat_pill_all: 'All (24)',
      cat_pill_endo: 'Endo (08)',
      cat_pill_surgery: 'Surgery (06)',
      cat_pill_ortho: 'Ortho (04)',
      cat_pill_perio: 'Perio (06)',
      case_head: 'Case discussions',
      case_activity: '· Latest activity',
      clinical_publish: '+ Publish a case',
      tag_endo: 'ENDODONTICS',
      tag_ortho: 'ORTHODONTICS',
      tag_perio: 'PERIODONTICS',
      time_18m: '18 min ago',
      time_1h: '1h ago',
      time_3h: '3h ago',
      case1_title: 'Management options for a complex canal anatomy',
      case1_desc: 'Seeking a second perspective on access design and a conservative treatment sequence for this posterior case.',
      case2_title: 'Sequencing a Class II correction',
      case3_title: 'Soft tissue profile at the anterior zone',
      author_elhadi: 'Dr. A. Elhadi',
      feat_1: 'Publish clinical cases',
      feat_2: 'Ask & discuss',
      feat_3: 'Share imaging',
      feat_4: 'Learn from experts',
      learning_label: 'Learning Hub',
      learning_title: 'A library for<br /><em>curious practice.</em>',
      learning_copy: 'From clinical notes to recorded sessions, every resource is designed to make a meaningful difference in your next conversation, case, or decision.',
      learn1_title: 'Articles',
      learn1_desc: 'Perspectives that expand the field.',
      learn2_title: 'Clinical Notes',
      learn3_title: 'Recorded Lectures',
      learn4_title: 'Educational Resources',
      learn4_desc: 'A rigorously curated collection, ready when the next question arrives.',
      learn5_title: 'Guidelines',
      why_label: 'Why DENOVA',
      why_title: 'Where the next<br />generation <em>moves forward.</em>',
      why1_title: 'Learn',
      why1_desc: 'Access ideas, evidence and peer-informed experience that strengthen every stage of your learning.',
      why2_title: 'Connect',
      why2_desc: 'Find the people whose questions, expertise and perspective make your own work more ambitious.',
      why3_title: 'Innovate',
      why3_desc: 'Make space for the new thinking, research and collaborations that move dentistry with purpose.',
      stats_label: 'In motion',
      stats_title: 'A growing force<br />for <em>progress.</em>',
      stat_members: 'Members',
      stat_universities: 'Universities',
      stat_cases: 'Published Clinical Cases',
      stat_attendees: 'Annual Conference Attendees',
      stat_partners: 'Educational Partners',
      stat_speakers: 'Scientific Speakers',
      join_label: 'The next chapter starts here',
      join_title: 'Join the Future of<br /><em>Dental Innovation</em>',
      join_copy: 'Become part of a community that believes the future of dentistry is collaborative, rigorous, and built together.',
      join_btn_member: 'Become a Member ↗',
      join_btn_contact: 'Contact Us →',
      footer_motto: 'Dental Innovation Forum<br />Innovate · Discover · Elevate',
      footer_col1_head: 'Explore',
      footer_col2_head: 'Connect',
      footer_col3_head: 'With the support of',
      supervision_sig_short: 'Student Union · Faculty of Dentistry',
      rights_reserved: 'All rights reserved.',
      footer_location: 'Tripoli, Libya',
      footer_community_tag: 'A global scientific community',
      dock_home: 'Home',
      dock_network: 'Network',
      dock_clinical: 'Clinical',
      dock_event: 'Event',
      dock_join: 'Join',
      modal_pub_title: 'Publish a Clinical Case',
      modal_pub_sub: 'Share your case details, imaging, or treatment question with the DENOVA scientific community.',
      form_title: 'Case Title',
      form_specialty: 'Specialty',
      form_summary: 'Clinical Summary',
      form_submit_case: 'Submit Case ↗',
      cancel: 'Cancel',
      modal_reg_label: 'Annual Conference 2026',
      modal_reg_title: 'Register for DENOVA 2026',
      modal_reg_sub: 'Reserve your place at the defining scientific dental gathering in Tripoli, Libya.',
      form_name: 'Full Name',
      form_email: 'Email Address',
      form_reg_type: 'Registration Type',
      reg_opt_student: 'Dental Student / Intern',
      reg_opt_pro: 'Practicing Clinician',
      reg_opt_acad: 'Educator / Researcher',
      form_submit_reg: 'Complete Registration ↗',
      close: 'Close',
      toast_like: 'Appreciated case discussion!',
      toast_submitted: 'Clinical case submitted successfully!',
      toast_registered: 'Registration request sent! Check your email.',
      status_active: 'Active Node',
      node_explore_hint: 'Interactive Node',
    },
    ar: {
      skip_link: 'الانتقال إلى المحتوى الرئيسي',
      header_about: 'عن المنصة',
      header_ecosystem: 'المنظومة',
      header_conference: 'المؤتمر السنوي',
      header_community: 'المجتمع السريري',
      header_join: 'انضم إلى دينوفا ↖',
      mobile_footer: 'منتدى الابتكار الطبي للأسنان · طرابلس، ليبيا',
      hero_label: 'مؤتمر علمي عالمي لطب وجراحة الفم والأسنان',
      hero_title: 'بناء مستقبل الابتكار<br />في طب الأسنان',
      hero_copy: 'دينوفا هي منصة تعاونية تجمع طلاب طب الأسنان، الأكاديميين، المهنيين، الباحثين، والمبتكرين لتشكيل مستقبل طب الأسنان من خلال التعليم، والفعاليات العلمية، والابتكار.',
      hero_btn_explore: 'استكشف دينوفا ↓',
      hero_btn_join: 'انضم للمجتمع ↖',
      hero_tagline: 'ابتكر <i></i> اكتشف <i></i> ارتقِ',
      hero_scroll: 'انزل للاستكشاف',
      about_label: 'عن المنصة',
      about_title: 'ما هي<br /><em>دينوفا؟</em>',
      about_copy: 'منصة حديثة في طب الأسنان مكرسة للتعليم والتعاون والابتكار والنمو العلمي. تجمع دينوفا العقول الطموحة في مساحة واحدة متقدمة — حيث تُتبادل المعرفة وتُدرس الإمكانيات وتصاغ المعايير الأفضل.',
      about_link: 'اكتشف منظومتنا المتكاملة ←',
      about_note_a: 'المعرفة، في حركة مستمرة',
      about_note_b: 'صُممت لأجل أجيال المستقبل',
      ecosystem_label: 'منظومة متكاملة',
      ecosystem_title: 'منتدى واحد.<br />منظومة <em>حية.</em>',
      ecosystem_copy: 'صُمم كل جزء من دينوفا ليعزز الأجزاء الأخرى. اختر أحد العناصر لاستكشاف الشبكة.',
      eco_tab_1: '01 المجتمع',
      eco_tab_2: '02 التعليم',
      eco_tab_3: '03 البحث العلمي',
      eco_tab_4: '04 الابتكار',
      eco_tab_5: '05 المؤتمر',
      eco_tab_6: '06 الشراكات',
      node_community: 'المجتمع',
      node_education: 'التعليم',
      node_research: 'البحث العلمي',
      node_innovation: 'الابتكار',
      node_conference: 'المؤتمر',
      node_partnerships: 'الشراكات',
      brand_subtitle: 'منتدى الابتكار الطبي للأسنان',
      supervision_label: 'المؤسسية والاعتماد',
      supervision_title: 'تحت<br /><em>إشراف</em>',
      supervision_copy: 'برعاية واعتزاز اتحاد طلاب كلية طب وجراحة الفم والأسنان - جامعة طرابلس — لبناء بيئة أقوى للطموح الأكاديمي والنمو المهني.',
      supervision_sig: 'اتحاد الطلاب · كلية طب وجراحة الفم والأسنان<br />جامعة طرابلس',
      partner_label: 'الشريك العلمي',
      partner_title: 'بالتعاون مع<br /><em>Libyan Dental Association</em>',
      partner_copy: 'نعمل معاً للارتقاء بالحوار العلمي، دعم أطباء الأسنان، وتعزيز الممارسة القائمة على الدليل في ليبيا.',
      partner_link: 'استكشف البرنامج العلمي ←',
      partner_role: 'الشريك العلمي الرسمي',
      partner_name: 'Libyan Dental Association',
      conference_label: 'الحدث العلمي السنوي الأبرز',
      conference_title: 'مؤتمر دينوفا<br /><em>السنوي</em>',
      conference_date: 'يُقام كل شهر <span>سبتمبر</span><br /><small>طرابلس، ليبيا · منظور علمي عالمي</small>',
      conference_context: 'تجربة علمية متكاملة: متحدثون رؤيويون، تبادل أبحاث، ورش عمل متقدمة، وعلاقات جديدة عبر عالم طب الأسنان.',
      conference_countdown: 'العد التنازلي للمؤتمر',
      sept_2026: 'سبتمبر 2026',
      cd_days: 'يوم',
      cd_hours: 'ساعة',
      cd_mins: 'دقيقة',
      cd_secs: 'ثانية',
      conference_learn: 'اعرف المزيد ↖',
      conference_register: 'سجل الآن ←',
      clinical_label: 'المجتمع السريري',
      clinical_title: 'تعلم من مناقشات<br /><em>سريرية حقيقية.</em>',
      clinical_copy: 'مساحة علمية رفيعة لنشر الحالات السريرية، وطرح الأسئلة الدقيقة، ومناقشة خطط العلاج، والتعلم المباشر من الزملاء والخبراء.',
      clinical_visit: 'زيارة المجتمع السريري ↖',
      cat_all: 'جميع الحالات',
      cat_endo: 'علاج الجذور',
      cat_surgery: 'جراحة الفم',
      cat_ortho: 'تقويم الأسنان',
      cat_perio: 'أمراض اللثة',
      clinical_motto: 'المعرفة المشاركة برعاية واهتمام.',
      cat_pill_all: 'الكل (24)',
      cat_pill_endo: 'الجذور (08)',
      cat_pill_surgery: 'الجراحة (06)',
      cat_pill_ortho: 'التقويم (04)',
      cat_pill_perio: 'اللثة (06)',
      case_head: 'مناقشات الحالات السريرية',
      case_activity: '· أحدث النشاطات',
      clinical_publish: '+ نشر حالة سريرية',
      tag_endo: 'علاج الجذور',
      tag_ortho: 'تقويم الأسنان',
      tag_perio: 'أمراض اللثة',
      time_18m: 'منذ 18 دقيقة',
      time_1h: 'منذ ساعة',
      time_3h: 'منذ 3 ساعات',
      case1_title: 'خيارات العلاج والتعامل مع التشريح المعقد للقنوات الجذرية',
      case1_desc: 'البحث عن رأي ثانٍ حول تصميم المدخل وتسلسل العلاج المحافظ لهذه الحالة الخلفية.',
      case2_title: 'تسلسل تقويم وتعديل الإطباق من الفئة الثانية Class II',
      case3_title: 'دراسة الملف النسيجي الناعم في المنطقة الأمامية',
      author_elhadi: 'د. أحمد الهادي',
      feat_1: 'نشر الحالات السريرية',
      feat_2: 'طرح الأسئلة والمناقشة',
      feat_3: 'مشاركة الصور الطبية',
      feat_4: 'التعلم من الخبراء',
      learning_label: 'مركز التعلم',
      learning_title: 'مكتبة مخصصة<br /><em>للممارسة المستمرة.</em>',
      learning_copy: 'من الملاحظات السريرية إلى الجلسات المسجلة، كل مورد صُمم ليصنع فارقًا حقيقيًا في مناقشتك أو حالتك أو قرارك القادم.',
      learn1_title: 'المقالات العلمية',
      learn1_desc: 'رؤى وأفكار توسع آفاق المجال.',
      learn2_title: 'الملاحظات السريرية',
      learn3_title: 'المحاضرات المسجلة',
      learn4_title: 'المصادر التعليمية',
      learn4_desc: 'مجموعة منتقاة بدقة، جاهزة عند طرح السؤال التالي.',
      learn5_title: 'الإرشادات الطبية',
      why_label: 'لماذا دينوفا',
      why_title: 'حيث يتقدم<br />جيل المستقبل <em>إلى الأمام.</em>',
      why1_title: 'تعلم',
      why1_desc: 'احصل على الأفكار والأدلة والتجارب الثرية التي تعزز كل مرحلة من رحلة تعلمك.',
      why2_title: 'تواصل',
      why2_desc: 'ابحث عن الأشخاص الذين تجعل أسئلتهم وخبراتهم ورؤيتهم عملك أكثر طموحًا.',
      why3_title: 'ابتكر',
      why3_desc: 'افسح المجال للتفكير الجديد والبحوث والتعاونات التي تحرك طب الأسنان بهدف.',
      stats_label: 'في تطور مستمر',
      stats_title: 'قوة متنامية<br />نحو <em>التقدم.</em>',
      stat_members: 'عضو مسجل',
      stat_universities: 'جامعة ومؤسسة',
      stat_cases: 'حالة سريرية منشورة',
      stat_attendees: 'مشارك في المؤتمر السنوي',
      stat_partners: 'شركاء تعليميون',
      stat_speakers: 'متحدث علمي',
      join_label: 'الفصل القادم يبدأ هنا',
      join_title: 'انضم إلى مستقبل<br /><em>الابتكار في طب الأسنان</em>',
      join_copy: 'كن جزءًا من مجتمع يؤمن بأن مستقبل طب الأسنان تعاوني، دقيق، ويُبنى معًا.',
      join_btn_member: 'كن عضوًا معنا ↖',
      join_btn_contact: 'تواصل معنا ←',
      footer_motto: 'منتدى الابتكار الطبي للأسنان<br />ابتكر · اكتشف · ارتقِ',
      footer_col1_head: 'استكشف',
      footer_col2_head: 'تواصل معنا',
      footer_col3_head: 'برعاية وإشراف',
      supervision_sig_short: 'اتحاد الطلاب · كلية طب وجراحة الفم والأسنان',
      rights_reserved: 'جميع الحقوق محفوظة.',
      footer_location: 'طرابلس، ليبيا',
      footer_community_tag: 'مجتمع علمي عالمي',
      dock_home: 'الرئيسية',
      dock_network: 'المنظومة',
      dock_clinical: 'السريري',
      dock_event: 'المؤتمر',
      dock_join: 'انضمام',
      modal_pub_title: 'نشر حالة سريرية جديدة',
      modal_pub_sub: 'شارك تفاصيل حالتك السريرية، الصور الطبية، أو استفسارك العلاجي مع مجتمع دينوفا العلمي.',
      form_title: 'عنوان الحالة',
      form_specialty: 'التخصص الطبي',
      form_summary: 'الملخص السريري والتشخيص',
      form_submit_case: 'نشر الحالة الآن ↖',
      cancel: 'إلغاء',
      modal_reg_label: 'المؤتمر السنوي 2026',
      modal_reg_title: 'التسجيل في مؤتمر دينوفا 2026',
      modal_reg_sub: 'احجز مقعدك في الملتقى العلمي الطبي الأبرز في طرابلس، ليبيا.',
      form_name: 'الاسم الكامل (د. / الطالب)',
      form_email: 'البريد الإلكتروني',
      form_reg_type: 'صفة التسجيل',
      reg_opt_student: 'طالب طب أسنان / طبيب امتياز',
      reg_opt_pro: 'طبيب ممارس / أخصائي',
      reg_opt_acad: 'عضو هيئة تدريس / باحث',
      form_submit_reg: 'تأكيد التسجيل ↖',
      close: 'إغلاق',
      toast_like: 'تمت إضافة إعجابك بالحالة السريرية!',
      toast_submitted: 'تم إرسال الحالة السريرية بنجاح!',
      toast_registered: 'تم استلام طلب التسجيل! يرجى مراجعة بريدك.',
      status_active: 'عنصر نشط',
      node_explore_hint: 'اضغط لتصفح العنصر',
    },
  };

  const nodeContent = {
    en: {
      community: ['01 / 06', 'Community', 'A shared ground for students, educators and professionals to exchange perspective and move the profession forward.'],
      education: ['02 / 06', 'Education', 'Modern, thoughtfully structured learning that gives rising clinicians a sharper foundation for lifelong progress.'],
      research: ['03 / 06', 'Research', 'A stage for evidence, inquiry and original work — bringing emerging questions into the wider scientific conversation.'],
      innovation: ['04 / 06', 'Innovation', 'New ideas meet practical possibility. DENOVA creates space to examine what the profession could become next.'],
      conference: ['05 / 06', 'Conference', 'Our annual gathering transforms shared ambition into a focused, global exchange of expertise, ideas and momentum.'],
      partnerships: ['06 / 06', 'Partnerships', 'Enduring partnerships connect our community with the institutions, educators and organisations that elevate it.'],
    },
    ar: {
      community: ['01 / 06', 'المجتمع السريري', 'أرضية مشتركة تجمع الطلاب والأكاديميين والمهنيين لتبادل الرؤى والارتقاء بمهنة طب الأسنان.'],
      education: ['02 / 06', 'التعليم المستمر', 'تعلم حديث ومصمم بعناية يمنح الأطباء الصاعدين أساسًا متينًا للتطور والتقدم المستمر.'],
      research: ['03 / 06', 'البحث العلمي', 'منصة للأدلة والاستفسارات والأعمال الأصيلة — جالبةً الأسئلة الواعدة إلى النقاش العلمي الأوسع.'],
      innovation: ['04 / 06', 'الابتكار والتطوير', 'تلتقي الأفكار الجديدة بالإمكانيات العملية. تتيح دينوفا المساحة لدراسة ما يمكن أن تغدو عليه المهنة.'],
      conference: ['05 / 06', 'المؤتمر السنوي', 'تحول تجمعنا السنوي إلى تبادل عالمي ومبؤر للخبرات والأفكار والزخم العلمي.'],
      partnerships: ['06 / 06', 'الشراكات المؤسسية', 'شراكات دائمة تربط مجتمعنا بالمؤسسات والجامعات والمنظمات التي تنهض بالمهنة.'],
    },
  };

  let currentLang = localStorage.getItem('denova_lang') || 'en';

  const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('denova_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update active state on toggle buttons
    document.querySelectorAll('[data-lang-toggle]').forEach((toggle) => {
      toggle.querySelector('.lang-option--en')?.classList.toggle('is-active', lang === 'en');
      toggle.querySelector('.lang-option--ar')?.classList.toggle('is-active', lang === 'ar');
    });

    // Translate static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translations[lang][key];
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // Update current active Ecosystem node text
    const activeNode = document.querySelector('[data-node].is-active')?.dataset.node || 'community';
    updateNodeReading(activeNode);
  };

  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'ar' : 'en';
      setLanguage(nextLang);
    });
  });

  // 2. Header & Navigation Controller
  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  const closeMenu = () => {
    if (!menuToggle) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
    document.body.classList.remove('menu-open');
  };

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    document.body.classList.toggle('menu-open', !open);
  });

  mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  mobileNav?.addEventListener('click', (event) => {
    if (event.target === mobileNav) closeMenu();
  });

  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 28);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  // 3. Ecosystem Network Controller
  const nodeReading = document.querySelector('[data-node-reading]');
  const desktopNodes = document.querySelectorAll('[data-node]');
  const mobileTabs = document.querySelectorAll('[data-node-trigger]');

  const updateNodeReading = (nodeKey) => {
    const dict = nodeContent[currentLang] || nodeContent.en;
    if (!dict[nodeKey] || !nodeReading) return;

    const [index, title, description] = dict[nodeKey];
    const indexEl = nodeReading.querySelector('.node-reading__index');
    const titleEl = nodeReading.querySelector('h3');
    const descEl = nodeReading.querySelector('p');

    if (indexEl) indexEl.textContent = index;
    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = description;

    nodeReading.classList.remove('is-changing');
    void nodeReading.offsetWidth;
    nodeReading.classList.add('is-changing');
  };

  const selectEcosystemNode = (nodeKey) => {
    desktopNodes.forEach((item) => {
      const isActive = item.dataset.node === nodeKey;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    mobileTabs.forEach((tab) => {
      tab.classList.toggle('is-active', tab.dataset.nodeTrigger === nodeKey);
    });

    updateNodeReading(nodeKey);
  };

  desktopNodes.forEach((node) => {
    node.addEventListener('click', () => selectEcosystemNode(node.dataset.node));
  });

  mobileTabs.forEach((tab) => {
    tab.addEventListener('click', () => selectEcosystemNode(tab.dataset.nodeTrigger));
  });

  // 4. Clinical Case Category Filter
  const categoryTriggers = document.querySelectorAll('[data-category-filter]');
  const caseCards = document.querySelectorAll('[data-case-category]');

  categoryTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const filter = trigger.dataset.categoryFilter;

      categoryTriggers.forEach((btn) => btn.classList.remove('is-current'));
      document.querySelectorAll(`[data-category-filter="${filter}"]`).forEach((btn) => btn.classList.add('is-current'));

      caseCards.forEach((card) => {
        if (filter === 'all' || card.dataset.caseCategory === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInCard 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Like case interaction
  document.querySelectorAll('[data-like-btn]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const countEl = btn.querySelector('[data-like-count]');
      if (!countEl) return;
      const isLiked = btn.classList.contains('is-liked');
      let current = parseInt(countEl.textContent || '0', 10);
      if (isLiked) {
        current -= 1;
        btn.classList.remove('is-liked');
      } else {
        current += 1;
        btn.classList.add('is-liked');
        showToast(translations[currentLang].toast_like);
      }
      countEl.textContent = String(current);
    });
  });

  // 5. Live Conference Countdown Timer
  const countdownContainer = document.querySelector('[data-countdown]');
  if (countdownContainer) {
    const targetDate = new Date('2026-09-24T09:00:00+02:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        countdownContainer.innerHTML = `<b style="font-size: 20px; color: var(--cyan)">${currentLang === 'ar' ? 'المؤتمر جارٍ الآن!' : 'Event in session!'}</b>`;
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((difference % (1000 * 60)) / 1000);

      const daysEl = countdownContainer.querySelector('[data-cd-days]');
      const hoursEl = countdownContainer.querySelector('[data-cd-hours]');
      const minsEl = countdownContainer.querySelector('[data-cd-mins]');
      const secsEl = countdownContainer.querySelector('[data-cd-secs]');

      const dict = translations[currentLang];

      if (daysEl) daysEl.innerHTML = `${String(days).padStart(3, '0')} <small>${dict.cd_days}</small>`;
      if (hoursEl) hoursEl.innerHTML = `${String(hours).padStart(2, '0')} <small>${dict.cd_hours}</small>`;
      if (minsEl) minsEl.innerHTML = `${String(mins).padStart(2, '0')} <small>${dict.cd_mins}</small>`;
      if (secsEl) secsEl.innerHTML = `${String(secs).padStart(2, '0')} <small>${dict.cd_secs}</small>`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // 6. Statistics Counter Observer
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.counter);
        const suffix = counter.dataset.suffix || '';
        const start = performance.now();
        const duration = 1400;

        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          counter.textContent = Math.round(target * eased).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US') + suffix;
          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
        counterObserver.unobserve(counter);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-counter]').forEach((counter) => counterObserver.observe(counter));

  // 7. Scroll Reveal Observer
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => revealObserver.observe(el));

  // 8. Modal Dialog Controller
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const focusable = modal.querySelector('input, select, textarea, button:not([data-modal-close])');
    focusable?.focus();
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-modal-target]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.dataset.modalTarget;
      openModal(modalId);
    });
  });

  document.querySelectorAll('[data-modal-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal.is-open');
      if (activeModal) closeModal(activeModal);
    }
  });

  // Modal Form Submissions
  const formPublish = document.getElementById('form-publish');
  formPublish?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(document.getElementById('modal-publish'));
    formPublish.reset();
    showToast(translations[currentLang].toast_submitted);
  });

  const formRegister = document.getElementById('form-register');
  formRegister?.addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal(document.getElementById('modal-register'));
    formRegister.reset();
    showToast(translations[currentLang].toast_registered);
  });

  // 9. Toast Notification Helper
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-mark"></span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('is-visible'), 10);
    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // 10. Mobile Dock Highlight & Active Nav Observer
  const sections = document.querySelectorAll('section[id]');
  const dockItems = document.querySelectorAll('[data-dock-link]');
  const desktopNavItems = document.querySelectorAll('[data-nav-link]');

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          dockItems.forEach((item) => {
            item.classList.toggle('is-active', item.dataset.dockLink === id);
          });

          desktopNavItems.forEach((item) => {
            item.classList.toggle('is-active', item.dataset.navLink === id);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  // Network Bento Card Click Highlight
  document.querySelectorAll('.network-card').forEach((card) => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.network-card').forEach((c) => c.classList.remove('is-active'));
      card.classList.add('is-active');
    });
  });

  sections.forEach((section) => sectionObserver.observe(section));

  // Initial Language Setup
  setLanguage(currentLang);

  // Dynamic Year Insertion
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
});
