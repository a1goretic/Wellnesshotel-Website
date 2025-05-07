// Hier wird das aktive Menüelement hervorgehoben
var currentLocation = location.href;
var menuItems = document.querySelectorAll('nav a');
for (var i = 0; i < menuItems.length; i++) {
	if (menuItems[i].href === currentLocation) {
		menuItems[i].className = 'active';
	}
}

// Hier werden die Inhalte der jeweiligen Seiten geladen
var pageContent = {
    'home': '<section class="hero-section"><div class="hero-text"><h2>Willkommen im Wellnesshotel</h2><p>Erleben Sie Entspannung und Erholung inmitten der Natur.</p></div></section><section class="feature-section"><div class="feature-container"><div class="feature-item"><h3>SPA-Bereich<p>Genießen Sie unsere Wellness-Angebote im SPA-Bereich.</p></h3><img src="public/images/spa1.jpg" alt="SPA-Bereich" class="feature-image"></div><div class="feature-item"><h3>Restaurant<p>Schmecken Sie die Köstlichkeiten unseres Restaurants.</p></h3><img src="public/images/restaurant.jpg" alt="Restaurant" class="feature-image"></div><div class="feature-item"><h3>Zimmer<p>Erholen Sie sich in unseren gemütlichen Zimmern.</p></h3><img src="public/images/standard.jpg" alt="Zimmer" class="feature-image"></div></div></section><section class="testimonial-section"><div class="testimonial-container"><h3>Kundenrezensionen</h3><div class="testimonial-item"><p>Ich habe einen wundervollen Aufenthalt im Wellnesshotel verbracht. Das Personal war sehr freundlich und zuvorkommend und die Angebote im SPA-Bereich haben mich total entspannt. Ich kann das Hotel auf jeden Fall weiterempfehlen!</p><p class="testimonial-author">- Maria S.</p></div><div class="testimonial-item"><p>Das Essen im Restaurant war einfach unglaublich lecker. Ich konnte gar nicht genug davon bekommen! Die Zimmer waren auch sehr schön und gemütlich eingerichtet.</p><p class="testimonial-author">- Max M.</p></div></div></section>',
	'angebot': '<h2>Unser Angebot</h2><ul><li>Wellness-Anwendungen</li><li>Fitnesstraining</li><li>Ausflüge in die Umgebung</li></ul>',
	'zimmer': '<h2>Unsere Zimmer</h2><ul><li>Standard-Zimmer</li><li>Zimmer mit Balkon</li><li>Zimmer mit Whirlpool</li></ul>',
	'buchung': '<h2>Buchen Sie jetzt</h2><form id="buchung"><label for="name">Vor- und Nachname:</label><input type="text" id="name" name="name" required><label for="anreisedatum">Anreisedatum:</label><input type="date" id="anreisedatum" name="anreisedatum" required><label for="aufenthaltstage">Aufenthaltstage:</label><input type="number" id="aufenthaltstage" name="aufenthaltstage" min="1" max="30" required><label for="betten">Anzahl der Betten:</label><input type="number" id="betten" name="betten" min="1" max="6" required><label for="whirlpool">Zimmer mit Whirlpool:</label><input type="checkbox" id="whirlpool" name="whirlpool"><input type="submit" value="Buchung abschicken"></form>',
	'impressum': '<h2>Impressum</h2><p>Wellnesshotel GmbH<br> Musterstraße 123<br> 12345 Musterstadt<br> Österreich<br><br> Tel.: +43 (0)123 456789<br> E-Mail: info@wellnesshotel.at</p>'

};

// Hier wird der Inhalt der aktuellen Seite gesetzt
var currentPage = window.location.hash.substring(1) || 'home';
document.querySelector('main').innerHTML = pageContent[currentPage];

// Hier wird das Menü aktualisiert, wenn auf einen Link geklickt wird
var links = document.querySelectorAll('nav a');
for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', function () {
		currentPage = this.getAttribute('href').substring(1);
		document.querySelector('main').innerHTML = pageContent[currentPage];
	});
}

$(document).ready(function () {

    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    // Add current class to header navigation links when scrolling to section
    $(window).scroll(function () {
        var position = $(this).scrollTop();
        $('.header-nav a').each(function () {
            var target = $(this.hash);
            if (target.position().top <= position + 150 && target.position().top + target.outerHeight() > position) {
                $('.header-nav a.current').removeClass('current');
                $(this).addClass('current');
            } else {
                $(this).removeClass('current');
            }
        });
    });
});

