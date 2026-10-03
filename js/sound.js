  // ایجاد یک آبجکت صدا
    const clickSound = new Audio("https://withachira.ir/files/Bubbles%20Sound.mp3");
    clickSound.preload = "auto"; // پیش‌بارگذاری صدا برای پخش سریع‌تر

    // تابع پخش صدا
    function playClickSound() {
        // اگر صدا در حال پخش است، آن را متوقف و به ابتدا برگردانیم
        clickSound.currentTime = 0; 
        clickSound.play().catch(error => {
            // اگر مرورگر به دلیل سیاست‌های امنیتی اجازه پخش ندهد، خطا را بی‌صدا نادیده می‌گیریم
            console.log("خطا در پخش صدا:", error);
        });
    }

    // شنود رویداد کلیک (برای دسکتاپ)
    document.addEventListener("click", playClickSound);

    // شنود رویداد لمسی (برای موبایل و تبلت)
    // این رویداد باعث می‌شود در موبایل، همزمان با لمس، صدا پخش شود
    document.addEventListener("touchstart", playClickSound, { passive: true });
