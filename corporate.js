const corporateForm = document.querySelector('[data-corporate-form]');
const corporateRequest = document.querySelector('[data-corporate-send]');
const corporateConfig = JSON.parse(document.querySelector('#corporate-config').textContent);

const corporateToday = new Date();
corporateToday.setMinutes(corporateToday.getMinutes() - corporateToday.getTimezoneOffset());
corporateForm.elements.date.min = corporateToday.toISOString().slice(0, 10);

const updateCorporateRequest = () => {
  const fields = corporateForm.elements;
  const benefit = fields.format.value === 'benefit';
  fields.people.disabled = benefit;
  fields.people.closest('label').hidden = benefit;
  fields.food.disabled = benefit;
  fields.food.closest('label').hidden = benefit;
  const selected = corporateConfig.formats.find(format => format.id === fields.format.value);
  const values = [fields.company.value.trim(), selected.name, benefit ? '' : fields.people.value, fields.date.value, fields.note.value.trim()];
  const lines = values.flatMap((value, i) => value ? [`${corporateConfig.labels[i]}: ${value}`] : []);
  if (!benefit) {
    lines.push(`${corporateConfig.food.label}: ${fields.food.checked ? corporateConfig.food.selected : corporateConfig.food.none}`);
  }
  corporateRequest.href = 'https://wa.me/34620965818?text=' + encodeURIComponent([corporateConfig.message, '', ...lines].join('\n'));
};

corporateForm.addEventListener('input', updateCorporateRequest);
corporateForm.addEventListener('change', updateCorporateRequest);
corporateForm.addEventListener('submit', event => {
  event.preventDefault();
  corporateRequest.click();
});

// Validate before the shared consent handler captures the native WhatsApp link.
corporateRequest.addEventListener('click', event => {
  corporateForm.elements.company.value = corporateForm.elements.company.value.trim();
  if (!corporateForm.reportValidity()) {
    event.preventDefault();
    event.stopImmediatePropagation();
    return;
  }
  updateCorporateRequest();
}, {capture: true});

document.querySelectorAll('[data-corporate-pick]').forEach(link => {
  link.addEventListener('click', () => {
    corporateForm.elements.format.value = link.dataset.corporatePick;
    updateCorporateRequest();
  });
});

updateCorporateRequest();

const corporateMobileBar = document.querySelector('.corporate-mobile-bar');
const corporateVisibleSections = new Map();
const corporateBarObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => corporateVisibleSections.set(entry.target, entry.isIntersecting));
  corporateMobileBar.hidden = [...corporateVisibleSections.values()].some(Boolean);
});
corporateBarObserver.observe(document.querySelector('.corporate-hero'));
corporateBarObserver.observe(document.querySelector('#propuesta'));
