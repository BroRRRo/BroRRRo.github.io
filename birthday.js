(() => {
  const config = JSON.parse(document.querySelector('#birthday-config').textContent);
  const form = document.querySelector('[data-birthday-form]');
  const players = form.elements.players;
  const packageSelect = form.elements.package;
  const date = form.elements.date;
  const output = document.querySelector('[data-birthday-total]');
  const error = document.querySelector('[data-birthday-error]');
  const request = document.querySelector('[data-birthday-request]');
  const format = new Intl.NumberFormat(config.lang, {style: 'currency', currency: 'EUR', maximumFractionDigits: 0});
  const earliest = new Date();
  earliest.setDate(earliest.getDate() + 7);
  date.min = [earliest.getFullYear(), String(earliest.getMonth() + 1).padStart(2, '0'), String(earliest.getDate()).padStart(2, '0')].join('-');

  const update = () => {
    const count = players.valueAsNumber;
    const option = packageSelect.selectedOptions[0];
    const price = Number(option.dataset.price);
    const valid = players.validity.valid && date.validity.valid;
    output.textContent = players.validity.valid ? format.format(count * price) : '—';
    error.hidden = valid;
    const lines = [config.message, '', `${config.labels[0]}: ${count}`, `${config.labels[1]}: ${config.hours[packageSelect.selectedIndex]} (${format.format(price)})`, `${config.labels[2]}: ${format.format(count * price)}`];
    if (date.value) {
      const [year, month, day] = date.value.split('-').map(Number);
      lines.push(`${config.labels[3]}: ${new Intl.DateTimeFormat(config.lang, {dateStyle: 'long'}).format(new Date(year, month - 1, day))}`);
    }
    request.href = valid ? `https://wa.me/34620965818?text=${encodeURIComponent([...lines, '', config.end].join('\n'))}` : '#reserva';
    request.setAttribute('aria-describedby', valid ? 'birthday-date-hint' : 'birthday-date-hint birthday-form-error');
    return valid;
  };

  error.id = 'birthday-form-error';
  form.addEventListener('input', update);
  form.addEventListener('change', update);
  form.addEventListener('submit', event => event.preventDefault());
  request.addEventListener('click', event => {
    if (!update()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      form.reportValidity();
    }
  });
  document.querySelectorAll('[data-package-pick]').forEach(link => {
    link.addEventListener('click', () => {
      packageSelect.value = link.dataset.packagePick;
      update();
    });
  });
  update();
})();
