document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('li');
    const containers = document.querySelectorAll('.slider');

    function handleTranslateChange(event) {
        const elArr = Array.from(navItems)
        const clickedIndex = elArr.indexOf(event.target);
        navItems.forEach((el, i) => {
            if (clickedIndex === i) {
                el.classList.add('active')
            } else {
                el.classList.remove('active')
            }
        })
        const lastIndex = elArr.length - 1
        containers.forEach((container) => {
            const transformIndex = parseInt(container.getAttribute('data-transform-index'), 10)
            const items = container.querySelectorAll('.slider-item')
            items.forEach((el, i) => {
                const isOdd = i % 2 === 0
                if (clickedIndex === lastIndex) {

                    if (!isOdd) {
                        el.style.transform = `translateY(${(transformIndex + 1) * 100}%)`

                    } else {
                        el.style.transform = `translateY(${(transformIndex - 1) * 100}%)`
                    }
                } else {
                    if (isOdd) {
                        el.style.transform = `translateY(${(transformIndex + clickedIndex) * 100}%)`

                    } else {
                        el.style.transform = `translateY(${(transformIndex - clickedIndex) * 100}%)`
                    }
                }

            })
        });
    }



    navItems.forEach((el) => {
        el.addEventListener('click', handleTranslateChange);
    });
});
