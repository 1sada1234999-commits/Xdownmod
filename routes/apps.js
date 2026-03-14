const express = require('express');
const router = express.Router();

// نموذج البيانات المؤقت (استخدام MongoDB لاحقاً)
let apps = [
  {
    id: 1,
    title: 'Space Invaders Pro',
    category: 'ألعاب',
    downloads: '1.2M',
    icon: 'https://cdn.b12.io/...',
    badge: 'جديد',
    featured: false
  },
  {
    id: 2,
    title: 'Productivity Plus',
    category: 'إنتاجية',
    downloads: '850K',
    icon: 'https://cdn.b12.io/...',
    badge: 'جديد',
    featured: false
  }
];

// الحصول على جميع التطبيقات
router.get('/', (req, res) => {
  res.json({ success: true, data: apps });
});

// الحصول على تطبيق واحد
router.get('/:id', (req, res) => {
  const app = apps.find(a => a.id === parseInt(req.params.id));
  if (!app) return res.status(404).json({ success: false, message: 'التطبيق غير موجود' });
  res.json({ success: true, data: app });
});

// إضافة تطبيق جديد
router.post('/', (req, res) => {
  const { title, category, icon, badge } = req.body;
  
  if (!title || !category) {
    return res.status(400).json({ success: false, message: 'البيانات غير كاملة' });
  }

  const newApp = {
    id: apps.length + 1,
    title,
    category,
    downloads: '0',
    icon: icon || '',
    badge: badge || '',
    featured: false,
    createdAt: new Date()
  };

  apps.push(newApp);
  res.status(201).json({ success: true, data: newApp, message: 'تم إضافة التطبيق بنجاح' });
});

// تحديث تطبيق
router.put('/:id', (req, res) => {
  const app = apps.find(a => a.id === parseInt(req.params.id));
  if (!app) return res.status(404).json({ success: false, message: 'التطبيق غير موجود' });

  Object.assign(app, req.body);
  res.json({ success: true, data: app, message: 'تم تحديث التطبيق' });
});

// حذف تطبيق
router.delete('/:id', (req, res) => {
  const index = apps.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'التطبيق غير موجود' });

  apps.splice(index, 1);
  res.json({ success: true, message: 'تم حذف التطبيق' });
});

module.exports = router;