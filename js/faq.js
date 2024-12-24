// FAQ functionality
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.getElementById('faq-container');

    // Create FAQ items
    faqData.forEach((item, index) => {
        const faqItem = createFaqItem(item, index);
        faqContainer.appendChild(faqItem);
    });

    faqContainer.addEventListener('click', (e) => {
        const faqItem = e.target.closest('.faq-item');
        if (!faqItem) return;

        const currentlyActive = document.querySelector('.faq-item.active');
        if (currentlyActive && currentlyActive !== faqItem) {
            currentlyActive.classList.remove('active');
        }

        faqItem.classList.toggle('active');
    });
});

function createFaqItem(item, index) {
    const div = document.createElement('div');
    div.className = 'faq-item bg-white rounded-lg shadow-md overflow-hidden';
    div.innerHTML = `
        <div class="faq-question flex items-center justify-between p-4 cursor-pointer">
            <h2 class="text-lg font-medium text-gray-900">${item.question}</h2>
            <span class="faq-icon text-2xl text-purple-600">+</span>
        </div>
        <div class="faq-answer bg-gray-50">
            <p class="p-4 text-gray-600">${item.answer}</p>
        </div>
    `;
    return div;
}