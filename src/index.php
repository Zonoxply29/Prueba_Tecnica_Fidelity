<?php

declare(strict_types=1);

$rewards = [
    [
        'image' => 'assets/premios/playstation20usd.jpeg',
        'alt' => 'Certificado PlayStation Store de 20 dólares',
        'title' => 'Certificado Playstation 20 USD',
        'points' => '787 puntos',
        'modifier' => 'reward-card--playstation',
    ],
    [
        'image' => 'assets/premios/ckbe.jpg',
        'alt' => 'Perfume CK Be de Calvin Klein',
        'title' => 'Ck Be 200 ml EDT Caballero Calvin Klein',
        'points' => '2562 puntos',
        'modifier' => 'reward-card--ck',
    ],
    [
        'image' => 'assets/premios/starbucks.png',
        'alt' => 'Certificado de Starbucks',
        'title' => 'Certificado Playstation 20 USD',
        'points' => '1247 puntos',
        'modifier' => 'reward-card--starbucks',
    ],
];

?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Catálogo de premios Fidelity">

    <title>Fidelity | Catálogo de premios</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <?php require __DIR__ . '/partials/header.php'; ?>

    <main>
        <?php require __DIR__ . '/partials/slider.php'; ?>

        <section class="rewards" aria-labelledby="rewards-title">
            <div class="container">
                <h1 id="rewards-title" class="rewards__title">
                    Premios destacados
                </h1>

                <div class="rewards__grid">
                    <?php foreach ($rewards as $reward): ?>
                        <?php require __DIR__ . '/partials/reward-card.php'; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
    </main>

    <?php require __DIR__ . '/partials/footer.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-4.0.0.slim.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>