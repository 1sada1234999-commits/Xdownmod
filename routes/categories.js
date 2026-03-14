const express = require('express');
const router = express.Router();

// الفئات
const categories = [
  { id: 1, name: 'أ��عاب', count: 145 },
  { id: 2, name: 'أدوات', count: 89 },
  { id: 3, name: 'ترفيه', count: 76 },
  { id: 4, name: 'تعليم', count: 52 },
  { id: 5, name: 'إنتاجية', count: 38 },
  { id: 6, name: 'الوسائط', count: 42 },
  { id: 7, name: 'التواصل', count: 31 }
];

// الحصول على جميع الفئات
router.get('/', (req, res) => {
  res.json({ success: true, data: categories });
});

// الحصول على فئة واحدة
router.get('/:id', (req, res) => {
  const category = categories.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ success: false, message: 'الفئة غير موجودة' });
  res.json({ success: true, data: category });
});

module.exports = router;