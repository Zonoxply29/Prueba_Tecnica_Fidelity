<?php

$cardModifier = htmlspecialchars(
    $reward['modifier'],
    ENT_QUOTES,
    'UTF-8'
);

$image = htmlspecialchars(
    $reward['image'],
    ENT_QUOTES,
    'UTF-8'
);

$alt = htmlspecialchars(
    $reward['alt'],
    ENT_QUOTES,
    'UTF-8'
);

$title = htmlspecialchars(
    $reward['title'],
    ENT_QUOTES,
    'UTF-8'
);

$points = htmlspecialchars(
    $reward['points'],
    ENT_QUOTES,
    'UTF-8'
);

?>

<article class="reward-card <?= $cardModifier ?>">
    <div class="reward-card__content">
        <div class="reward-card__media">
            <img
                class="reward-card__image"
                src="<?= $image ?>"
                alt="<?= $alt ?>"
                loading="lazy"
            >
        </div>

        <h2 class="reward-card__title">
            <?= $title ?>
        </h2>

        <p class="reward-card__points">
            <?= $points ?>
        </p>
    </div>

    <div class="reward-card__overlay">
        <button
            class="reward-card__button"
            type="button"
            aria-label="Canjear <?= $title ?>"
        >
            Canjea ya
        </button>
    </div>
</article>