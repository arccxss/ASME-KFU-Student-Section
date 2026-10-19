// ====== هنا تعدّل المحتوى الأسبوعي. أضف العنصر الجديد في أول القائمة ======
const SITE={
  gaId:"", // ضع معرّف Google Analytics مثل G-XXXXXXXXXX لتفعيل عدّاد الزيارات
  socials:{X:"https://x.com/ASMEKFU?s=20",Instagram:"https://www.instagram.com/asmekfu",LinkedIn:"https://sa.linkedin.com/company/asme-kfu-student-section",TikTok:"https://www.tiktok.com/@asmekfu"}
};
// صور الواجهة (4 غالباً). img مثل "images/slides/1.jpg" ، وإذا تركته فارغاً تظهر صورة مؤقتة
const SLIDES=[
  {img:"",title:"عنوان الفعالية الأولى"},
  {img:"",title:"عنوان الفعالية الثانية"},
  {img:"",title:"عنوان الفعالية الثالثة"},
  {img:"",title:"عنوان الفعالية الرابعة"}
];
// المنشورات العلمية الأسبوعية
const POSTS=[
  {title:"عنوان المنشور الأسبوعي",date:"18 أكتوبر 2026",img:"",text:"نص قصير يلخّص فكرة المنشور العلمي لهذا الأسبوع في سطرين أو ثلاثة."},
  {title:"منشور علمي آخر",date:"11 أكتوبر 2026",img:"",text:"نص قصير تجريبي، استبدله بمحتواك."}
];
// إصدارات المجلة (ملف PDF داخل مجلد magazine)
const ISSUES=[
  {no:1,title:"العدد الأول",date:"أكتوبر 2026",cover:"",pdf:"magazine/issue-1.pdf"}
];
// الدورات وورش العمل
const COURSES=[
  {title:"عنوان الورشة",presenter:"اسم المقدم",date:"الأحد 25 أكتوبر 2026",time:"7:00 م",place:"أونلاين",link:"https://forms.gle/",img:""}
];
