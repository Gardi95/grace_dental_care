const LANG_KEY = 'grace_dental_lang';
const THEME_KEY = 'grace_dental_theme';
const APPOINTMENTS_KEY = 'grace_dental_appointments';
const MESSAGES_KEY = 'grace_dental_messages';

// Dynamic Multi-lingual Doctor Profile Dataset
const DOCTOR_DATA = {
  doctor_1: {
    name: {
      en: "Dr. Ahmed Hassan",
      ar: "د. أحمد حسن",
      ku: "د. ئەحمەد حەسەن"
    },
    spec: {
      en: "Lead Orthodontist",
      ar: "كبير أطباء تقويم الأسنان",
      ku: "سەرۆکی پزیشکانی ڕاستکردنەوەی ددان"
    },
    exp: {
      en: "12 Years",
      ar: "12 عاماً",
      ku: "١٢ ساڵ"
    },
    edu: {
      en: "DDS from Boston University School of Dental Medicine",
      ar: "دكتوراه في طب الأسنان من جامعة بوسطن",
      ku: "دکتۆرا لە پزیشکی ددان لە زانکۆی بۆستن"
    },
    certs: {
      en: "Board Certified in Orthodontics (ABO), Member of AAO",
      ar: "حاصل على البورد الأمريكي لتقويم الأسنان، عضو الجمعية الأمريكية لتقويم الأسنان",
      ku: "بڕوانامەی بۆردی ئەمریکی بۆ ڕاستکردنەوەی ددان، ئەندامی کۆمەڵەی ئەمریکی بۆ تەقویم"
    },
    languages: {
      en: "English, Arabic, Kurdish",
      ar: "الإنجليزية، العربية، الكردية",
      ku: "ئینگلیزی، عەرەبی، کوردی"
    },
    bio: {
      en: "Dr. Ahmed Hassan is a dedicated Orthodontist specialized in both traditional braces and modern clear aligners. Over the past 12 years, he has successfully transformed over 3,000 smiles, blending clinical excellence with compassionate, patient-centered care.",
      ar: "الدكتور أحمد حسن هو طبيب تقويم أسنان مكرس عمله في الأقواس التقليدية والتقويم الشفاف الحديث. على مدى السنوات الـ 12 الماضية، نجح في تحويل أكثر من 3000 ابتسامة، حيث جمع بين التميز السريري والرعاية الرحيمة التي تركز على المريض.",
      ku: "د. ئەحمەد حەسەن پسپۆڕێکی دڵسۆزی ڕاستکردنەوەی ددانە کە لە تەقویمی باو و شەفافی سەردەمدا کار دەکات. لە ماوەی ١٢ ساڵی ڕابردوودا، بە سەرکەوتوویی زیاتر لە ٣٠٠٠ زەردەخەنەی گۆڕیوە بە تێکەڵکردنی لێهاتوویی پزیشکی لەگەڵ چاودێری نەخۆش."
    },
    schedule: {
      en: [
        { day: "Monday - Wednesday", time: "9:00 AM - 4:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" }
      ],
      ar: [
        { day: "الإثنين - الأربعاء", time: "9:00 صباحاً - 4:00 مساءً" },
        { day: "السبت", time: "10:00 صباحاً - 2:00 مساءً" }
      ],
      ku: [
        { day: "دووشەممە - چوارشەممە", time: "٩:٠٠ بەیانی - ٤:٠٠ ئێوارە" },
        { day: "شەممە", time: "١٠:٠٠ بەیانی - ٢:٠٠ دوانیوەڕۆ" }
      ]
    }
  },
  doctor_2: {
    name: {
      en: "Dr. Sarah Ali",
      ar: "د. سارة علي",
      ku: "د. سارا عەلی"
    },
    spec: {
      en: "Cosmetic Dentist",
      ar: "طبيبة تجميل أسنان",
      ku: "پزیشکی جوانکاری ددان"
    },
    exp: {
      en: "8 Years",
      ar: "8 أعوام",
      ku: "٨ ساڵ"
    },
    edu: {
      en: "DDS from New York University (NYU) College of Dentistry",
      ar: "دكتوراه في طب الأسنان من جامعة نيويورك",
      ku: "دکتۆرا لە پزیشکی ددان لە زانکۆی نیویۆرک"
    },
    certs: {
      en: "Accredited Member of AACD, Premium Veneers Specialist",
      ar: "عضو معتمد في الأكاديمية الأمريكية لتجميل الأسنان، أخصائية القشور الخزفية الفاخرة",
      ku: "ئەندامی باوەڕپێکراوی ئەکادیمیای ئەمریکی بۆ جوانکاری ددان، پسپۆڕی ڤینیری پێشکەوتوو"
    },
    languages: {
      en: "English, Arabic",
      ar: "الإنجليزية، العربية",
      ku: "ئینگلیزی، عەرەبی"
    },
    bio: {
      en: "Dr. Sarah Ali is a premier cosmetic dentist who believes that a beautiful smile is a work of art. She specializes in porcelain veneers, advanced teeth whitening, and complete smile makeovers using state-of-the-art restorative techniques.",
      ar: "الدكتورة سارة علي هي طبيبة تجميل أسنان متميزة تؤمن بأن الابتسامة الجميلة هي عمل فني. هي متخصصة في قشور البورسلين، وتبييض الأسنان المتقدم، وتجميل الابتسامة بالكامل باستخدام أحدث تقنيات الترميم.",
      ku: "د. سارا عەلی پزیشکێکی پێشەنگی جوانکاری ددانە کە بڕوای وایە زەردەخەنەیەکی جوان کارێکی هونەرییە. ئەو پسپۆڕە لە ڤینیری پۆرسەلین، سپی کردنەوەی پێشکەوتووی ددان، و جوانکردنی گشتی زەردەخەنە."
    },
    schedule: {
      en: [
        { day: "Sunday - Tuesday", time: "10:00 AM - 5:00 PM" },
        { day: "Thursday", time: "9:00 AM - 3:00 PM" }
      ],
      ar: [
        { day: "الأحد - الثلاثاء", time: "10:00 صباحاً - 5:00 مساءً" },
        { day: "الخميس", time: "9:00 صباحاً - 3:00 مساءً" }
      ],
      ku: [
        { day: "یەکشەممە - سێشەممە", time: "١٠:٠٠ بەیانی - ٥:٠٠ ئێوارە" },
        { day: "پێنجشەممە", time: "٩:٠٠ بەیانی - ٣:٠٠ دوانیوەڕۆ" }
      ]
    }
  },
  doctor_3: {
    name: {
      en: "Dr. Omar Zaid",
      ar: "د. عمر زيد",
      ku: "د. عومەر زەید"
    },
    spec: {
      en: "Oral Surgeon",
      ar: "جراح الفم والأسنان",
      ku: "پزیشکی نەشتەرگەری دەم و ددان"
    },
    exp: {
      en: "15 Years",
      ar: "15 عاماً",
      ku: "١٥ ساڵ"
    },
    edu: {
      en: "DDS & MD from Columbia University Medical Center",
      ar: "دكتوراه في طب الأسنان والطب البشري من جامعة كولومبيا",
      ku: "دکتۆرا لە پزیشکی ددان لە زانکۆی کۆڵۆمبیا"
    },
    certs: {
      en: "Fellowship of AAOMS, Expert in Implants & Wisdom Teeth",
      ar: "زمالة الجمعية الأمريكية لجراحي الفم والفكين، خبير زراعة وجراحة ضرس العقل",
      ku: "ئەندامی کۆمەڵەی پزیشکانی نەشتەرگەری دەم و دەموچاو، پسپۆڕ لە چاندن و ددانی ژیری"
    },
    languages: {
      en: "English, Arabic",
      ar: "الإنجليزية، العربية",
      ku: "ئینگلیزی، عەرەبی"
    },
    bio: {
      en: "Dr. Omar Zaid is a highly skilled Oral Surgeon specializing in dental implants, complex extractions, and pain-free wisdom teeth removal. He is passionate about restorative clinical surgery and provides comfortable, modern anesthesia procedures.",
      ar: "الدكتور عمر زيد هو جراح فم ذو مهارة عالية، متخصص في زراعة الأسنان، والخلع المعقد، وإزالة ضرس العقل بدون ألم. إنه شغوف بالجراحة الترميمية ويوفر إجراءات تخدير حديثة ومريحة.",
      ku: "د. عومەر زەید پزیشکێکی بلیمەتە لە نەشتەرگەری دەم و ددان کە پسپۆڕە لە چاندنی ددان، دەرهێنانی قورس، و دەرهێنانی ددانی ژیری بێ ئازار. ئەو خولیای نەشتەرگەری نۆژەنکردنەوەیە و شێوازی بێهۆشکردنی مۆدێرن بەکاردێنێت."
    },
    schedule: {
      en: [
        { day: "Monday & Wednesday", time: "1:00 PM - 7:00 PM" },
        { day: "Thursday & Friday", time: "10:00 AM - 4:00 PM" }
      ],
      ar: [
        { day: "الإثنين والأربعاء", time: "1:00 مساءً - 7:00 مساءً" },
        { day: "الخميس والجمعة", time: "10:00 صباحاً - 4:00 مساءً" }
      ],
      ku: [
        { day: "دووشەممە و چوارشەممە", time: "١:٠٠ دوانیوەڕۆ - ٧:٠٠ ئێوارە" },
        { day: "پێنجشەممە و هەینی", time: "١٠:٠٠ بەیانی - ٤:٠٠ ئێوارە" }
      ]
    }
  }
};

// Initial Mock Datasets if none exist
const DEFAULT_APPOINTMENTS = [
  { id: 101, patientName: "Sarah Williams", phone: "+1 234 567 890", doctorId: "doctor_2", doctorName: "Dr. Sarah Ali", serviceId: "cosmetic", serviceName: "Cosmetic Veneers", date: "2026-05-19", time: "10:30 AM", status: "Confirmed" },
  { id: 102, patientName: "John Doe", phone: "+1 987 654 321", doctorId: "doctor_1", doctorName: "Dr. Ahmed Hassan", serviceId: "braces", serviceName: "Clear Aligners", date: "2026-05-20", time: "09:00 AM", status: "Confirmed" },
  { id: 103, patientName: "Michael Brown", phone: "+1 456 789 012", doctorId: "doctor_3", doctorName: "Dr. Omar Zaid", serviceId: "implants", serviceName: "Dental Implants", date: "2026-05-21", time: "01:00 PM", status: "Pending" }
];

const DEFAULT_MESSAGES = [
  { id: 1, name: "David Miller", email: "david@example.com", phone: "+1 222 333 444", message: "Hello, I would like to inquire if you accept premium delta dental insurance plans.", date: "2026-05-18" },
  { id: 2, name: "Layla Kurt", email: "layla@example.com", phone: "+964 750 123 4567", message: "Hi! Do you have payment installment plans available for cosmetic dentistry?", date: "2026-05-17" }
];

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // 1. Loading Overlay Dismiss
  const loader = document.getElementById('loader-wrapper');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    }, 400);
  }

  // 2. Sticky Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });

  // 3. Setup Persistent Theme & Language
  initTheme();
  initLanguage();

  // 4. Mobile Hamburger Drawer
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close nav menu on link clicks
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (hamburger && navLinks) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  });

  // 5. Draggable Before/After comparison tool
  initBeforeAfterSlider();

  // 6. FAQ Dropdown Accordion
  initFAQAccordion();

  // 7. Interactive Doctor Profile Overlay Modals
  initDoctorModals();

  // 8. Visual Booking Form Logic (Visual slots + popup)
  initBookingSystem();

  // 9. Initialize dynamic DB values for demo
  initDatabase();

  // 10. Admin Page Dynamic Loading & Functions
  if (window.location.pathname.includes('admin.html')) {
    initAdminDashboard();
  }

  // 11. Custom Contact Message Submission
  initContactFormSubmit();
});

/* Database Store Management */
function initDatabase() {
  if (!localStorage.getItem(APPOINTMENTS_KEY)) {
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(DEFAULT_APPOINTMENTS));
  }
  if (!localStorage.getItem(MESSAGES_KEY)) {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(DEFAULT_MESSAGES));
  }
}

/* Light / Dark Mode Controls */
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem(THEME_KEY, newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;
  
  if (theme === 'dark') {
    // Show Sun icon
    themeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
      </svg>
    `;
  } else {
    // Show Moon icon
    themeBtn.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
    `;
  }
}

/* Language Systems */
function initLanguage() {
  const savedLang = localStorage.getItem(LANG_KEY) || 'en';
  setLanguage(savedLang);

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) {
    langSwitch.value = savedLang;
    langSwitch.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
}

function setLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', (lang === 'ar' || lang === 'ku') ? 'rtl' : 'ltr');
  localStorage.setItem(LANG_KEY, lang);

  const langSwitch = document.getElementById('langSwitch');
  if (langSwitch) langSwitch.value = lang;

  // Translate all marked data
  const elements = document.querySelectorAll('[data-en][data-ar]');
  elements.forEach(el => {
    if (lang === 'en') el.innerHTML = el.getAttribute('data-en');
    else if (lang === 'ar') el.innerHTML = el.getAttribute('data-ar');
    else el.innerHTML = el.getAttribute('data-ku') || el.getAttribute('data-en');
  });

  // Placeholder inputs
  const inputs = document.querySelectorAll('input[data-en-placeholder], textarea[data-en-placeholder]');
  inputs.forEach(input => {
    if (lang === 'en') input.placeholder = input.getAttribute('data-en-placeholder');
    else if (lang === 'ar') input.placeholder = input.getAttribute('data-ar-placeholder');
    else input.placeholder = input.getAttribute('data-ku-placeholder') || input.getAttribute('data-en-placeholder');
  });

  // Dynamically redraw open overlays if they depend on language
  const openModal = document.querySelector('.overlay-modal.active');
  if (openModal && openModal.id.startsWith('doc_modal_')) {
    const docId = openModal.id.replace('doc_modal_', '');
    loadDoctorModalData(docId, lang);
  }
}

/* Draggable Before/After comparison tool slider */
function initBeforeAfterSlider() {
  const container = document.querySelector('.before-after-container');
  if (!container) return;

  const slider = container.querySelector('.ba-slider');
  const resizeWrapper = container.querySelector('.resize-img-wrapper');
  const handle = container.querySelector('.ba-handle');
  const resizeImg = resizeWrapper.querySelector('img');

  if (!slider || !resizeWrapper || !handle) return;

  // Ensure image width matches container box width on load & resize
  const adjustImageSize = () => {
    const width = container.offsetWidth;
    resizeImg.style.width = width + 'px';
  };
  adjustImageSize();
  window.addEventListener('resize', adjustImageSize);

  let isDragging = false;

  const moveSlider = (clientX) => {
    const rect = slider.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;

    // Bounds lock 0% - 100%
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;

    resizeWrapper.style.width = percentage + '%';
    handle.style.left = percentage + '%';
  };

  // Pointer Events (supports mouse and touch natively)
  handle.addEventListener('pointerdown', (e) => {
    isDragging = true;
    handle.setPointerCapture(e.pointerId);
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    moveSlider(e.clientX);
  });

  const stopDrag = () => {
    isDragging = false;
  };
  window.addEventListener('pointerup', stopDrag);
  window.addEventListener('pointercancel', stopDrag);

  // Click on slider also moves it
  slider.addEventListener('pointerdown', (e) => {
    if (e.target !== handle && !handle.contains(e.target)) {
      moveSlider(e.clientX);
    }
  });
}

/* FAQ Collapsible Accordions */
function initFAQAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');
      
      // Close all other active items
      document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* Doctor Overlay Modals */
function initDoctorModals() {
  const viewProfileBtns = document.querySelectorAll('.view-profile-btn');
  const closeBtns = document.querySelectorAll('.modal-close');
  const overlay = document.getElementById('doctorModalOverlay');

  if (!overlay) return;

  viewProfileBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const docId = btn.getAttribute('data-doctor');
      if (docId) {
        overlay.id = `doc_modal_${docId}`;
        const activeLang = localStorage.getItem(LANG_KEY) || 'en';
        loadDoctorModalData(docId, activeLang);
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
}

function loadDoctorModalData(docId, lang) {
  const data = DOCTOR_DATA[docId];
  if (!data) return;

  // Fill in elements inside the modal
  const modalImg = document.getElementById('modalDocImg');
  const modalName = document.getElementById('modalDocName');
  const modalSpec = document.getElementById('modalDocSpec');
  const modalExp = document.getElementById('modalDocExp');
  const modalEdu = document.getElementById('modalDocEdu');
  const modalCerts = document.getElementById('modalDocCerts');
  const modalLang = document.getElementById('modalDocLang');
  const modalBio = document.getElementById('modalDocBio');
  const modalSchedule = document.getElementById('modalDocSchedule');
  const bookBtn = document.getElementById('modalBookBtn');

  if (modalImg) modalImg.src = `assets/${docId}.png`;
  if (modalName) modalName.innerText = data.name[lang];
  if (modalSpec) modalSpec.innerText = data.spec[lang];
  if (modalExp) modalExp.innerText = data.exp[lang];
  if (modalEdu) modalEdu.innerText = data.edu[lang];
  if (modalCerts) modalCerts.innerText = data.certs[lang];
  if (modalLang) modalLang.innerText = data.languages[lang];
  if (modalBio) modalBio.innerText = data.bio[lang];

  if (bookBtn) {
    bookBtn.setAttribute('data-doctor', docId);
    bookBtn.setAttribute('data-doctor-name', data.name.en); // Store standard name for db
  }

  // Draw operational schedule
  if (modalSchedule) {
    modalSchedule.innerHTML = '';
    const schedList = data.schedule[lang];
    schedList.forEach(slot => {
      const row = document.createElement('div');
      row.className = 'schedule-day';
      row.innerHTML = `<span>${slot.day}</span><span>${slot.time}</span>`;
      modalSchedule.appendChild(row);
    });
  }
}

/* Appointment Booking Systems */
function initBookingSystem() {
  const bookingOverlay = document.getElementById('bookingModalOverlay');
  const triggerBtns = document.querySelectorAll('.open-booking-btn');
  const closeBtns = document.querySelectorAll('.booking-close');
  const bookingForm = document.getElementById('appointmentBookingForm');
  const timeSlots = document.querySelectorAll('.time-slot');
  const hiddenTimeInput = document.getElementById('bookingTimeSlot');

  if (!bookingOverlay || !bookingForm) return;

  // Visual Time Slot Select triggers
  timeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
      timeSlots.forEach(s => s.classList.remove('selected'));
      slot.classList.add('selected');
      if (hiddenTimeInput) {
        hiddenTimeInput.value = slot.getAttribute('data-value');
      }
    });
  });

  const openBooking = (e) => {
    if (e) {
      e.preventDefault();
      // Dismiss Doctor Profile Overlay if active
      const docOverlay = document.getElementById('doctorModalOverlay');
      if (docOverlay) {
        docOverlay.classList.remove('active');
      }
      
      const docId = e.currentTarget.getAttribute('data-doctor');
      if (docId) {
        const docSelect = document.getElementById('bookDoctorSelect');
        if (docSelect) docSelect.value = docId;
      }
    }
    bookingOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  triggerBtns.forEach(btn => btn.addEventListener('click', openBooking));

  const closeBooking = () => {
    bookingOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    bookingForm.reset();
    timeSlots.forEach(s => s.classList.remove('selected'));
    if (hiddenTimeInput) hiddenTimeInput.value = '';
  };

  closeBtns.forEach(btn => btn.addEventListener('click', closeBooking));
  bookingOverlay.addEventListener('click', (e) => {
    if (e.target === bookingOverlay) closeBooking();
  });

  // Handle Form Submission
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const email = document.getElementById('bookEmail').value.trim();
    const docSelect = document.getElementById('bookDoctorSelect');
    const doctorId = docSelect.value;
    const doctorName = docSelect.options[docSelect.selectedIndex].text;
    const serviceSelect = document.getElementById('bookServiceSelect');
    const serviceId = serviceSelect.value;
    const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
    const date = document.getElementById('bookDate').value;
    const time = hiddenTimeInput ? hiddenTimeInput.value : '';

    if (!time) {
      alert("Please select a convenient time slot before submitting.");
      return;
    }

    const appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY)) || [];
    const newAppointment = {
      id: Math.floor(Math.random() * 900) + 200,
      patientName: name,
      phone: phone,
      email: email,
      doctorId: doctorId,
      doctorName: doctorName,
      serviceId: serviceId,
      serviceName: serviceName,
      date: date,
      time: time,
      status: "Pending"
    };

    appointments.push(newAppointment);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));

    closeBooking();
    showToastNotification("Appointment Request Submitted Successfully!", "success");

    // Dynamic refresh if on Admin portal
    if (window.location.pathname.includes('admin.html')) {
      initAdminDashboard();
    }
  });
}

/* Contact Message Submission */
function initContactFormSubmit() {
  const contactForm = document.getElementById('clinicContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const phone = contactForm.querySelector('input[type="tel"]').value.trim();
    const msgText = contactForm.querySelector('textarea').value.trim();

    const messages = JSON.parse(localStorage.getItem(MESSAGES_KEY)) || [];
    const newMsg = {
      id: Math.floor(Math.random() * 800) + 100,
      name: name,
      email: email,
      phone: phone,
      message: msgText,
      date: new Date().toISOString().split('T')[0]
    };

    messages.push(newMsg);
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    contactForm.reset();

    showToastNotification("Message Sent Successfully! We will call you soon.", "success");
  });
}

/* Toast Notifications */
function showToastNotification(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon ${type}">✓</span>
    <span class="toast-msg">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* Admin Dashboard Portal */
function initAdminDashboard() {
  const appList = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY)) || [];
  const msgList = JSON.parse(localStorage.getItem(MESSAGES_KEY)) || [];
  const tbody = document.getElementById('adminAppTableBody');

  // Load Table rows
  if (tbody) {
    tbody.innerHTML = '';
    if (appList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">No Appointments Booked Yet.</td></tr>`;
    } else {
      appList.forEach(app => {
        const row = document.createElement('tr');
        const statusClass = `status status-${app.status.toLowerCase()}`;
        
        row.innerHTML = `
          <td><strong>${app.patientName}</strong><br><span style="font-size:0.8rem; color:var(--text-muted);">${app.phone}</span></td>
          <td>${app.date}<br><span style="font-size:0.8rem; color:var(--text-muted);">${app.time}</span></td>
          <td>${app.doctorName}</td>
          <td>${app.serviceName}</td>
          <td><span class="${statusClass}">${app.status}</span></td>
          <td>
            ${app.status === 'Pending' ? `
              <button class="action-btn confirm" onclick="updateAppointmentStatus(${app.id}, 'Confirmed')">Confirm</button>
              <button class="action-btn cancel" onclick="updateAppointmentStatus(${app.id}, 'Cancelled')">Cancel</button>
            ` : `<span style="font-size:0.85rem; color:var(--text-muted);">Handled</span>`}
          </td>
        `;
        tbody.appendChild(row);
      });
    }
  }

  // Load Statistics Cards dynamically
  const statPatients = document.getElementById('statPatients');
  const statAppToday = document.getElementById('statAppToday');
  const statNewMessages = document.getElementById('statNewMessages');

  if (statPatients) {
    // Active patients distinct names count + mock base
    const patientsCount = new Set(appList.map(a => a.patientName)).size + 1280;
    statPatients.innerText = patientsCount.toLocaleString();
  }

  if (statAppToday) {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayCount = appList.filter(a => a.date === todayStr || a.status === 'Pending').length + 5;
    statAppToday.innerText = todayCount;
  }

  if (statNewMessages) {
    statNewMessages.innerText = msgList.length;
  }

  // Load Contact Messages drawer
  const msgBody = document.getElementById('adminMessageLog');
  if (msgBody) {
    msgBody.innerHTML = '';
    if (msgList.length === 0) {
      msgBody.innerHTML = `<div style="text-align:center; padding: 20px; color:var(--text-muted);">No messages found.</div>`;
    } else {
      msgList.forEach(msg => {
        const item = document.createElement('div');
        item.style.padding = '20px';
        item.style.borderBottom = '1px solid var(--border-color)';
        item.innerHTML = `
          <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <strong>${msg.name}</strong>
            <span style="font-size:0.8rem; color:var(--text-muted);">${msg.date}</span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">Email: ${msg.email} | Phone: ${msg.phone}</div>
          <p style="font-size:0.95rem; color:var(--text-main);">${msg.message}</p>
        `;
        msgBody.appendChild(item);
      });
    }
  }
}

// Global hook to update appointments from DOM buttons
window.updateAppointmentStatus = function(appId, newStatus) {
  const appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY)) || [];
  const foundIndex = appointments.findIndex(a => a.id === appId);
  
  if (foundIndex !== -1) {
    appointments[foundIndex].status = newStatus;
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
    showToastNotification(`Appointment updated to ${newStatus}!`, "success");
    initAdminDashboard();
  }
};

/* Session Admin Auth actions override */
const ADMIN_AUTH_KEY = 'grace_dental_admin_auth';
function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true';
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('adminUser')?.value.trim();
  const password = document.getElementById('adminPass')?.value.trim();
  const message = document.getElementById('loginMessage');

  if (!username || !password) {
    if (message) message.textContent = 'Please enter both username and password.';
    return;
  }

  if (username === 'admin' && password === 'password123') {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
    window.location.href = 'admin.html';
    return;
  }

  if (message) {
    message.textContent = 'Invalid credentials. Please try again.';
  }
}

function checkAdminAuth() {
  if (!isAdminAuthenticated()) {
    window.location.href = 'admin-login.html';
  }
}

function redirectIfAlreadyLoggedIn() {
  if (isAdminAuthenticated()) {
    window.location.href = 'admin.html';
  }
}

function logoutAdmin() {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
  window.location.href = 'admin-login.html';
}

window.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
    redirectIfAlreadyLoggedIn();
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logoutAdmin);
    checkAdminAuth();
  }
});
