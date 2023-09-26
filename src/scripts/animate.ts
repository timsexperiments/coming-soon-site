document.addEventListener('DOMContentLoaded', function (_) {
  document.querySelectorAll('.animation').forEach(function (element) {
    const classesToRemove: string[] = [];
    element.classList.forEach(function (className) {
      if (
        className.startsWith('translate-') ||
        className.startsWith('opacity-') ||
        className.startsWith('scale-')
      )
        classesToRemove.push(className);
    });
    element.classList.remove(...classesToRemove);
    element.classList.add(
      'translate-y-0',
      'translate-x-0',
      'opacity-100',
      'scale-100',
    );
  });
});
