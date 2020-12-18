<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pellegrini Page | Family Recipes</title>
    <link rel="stylesheet" href="./app.css" />
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif] -->
</head>

<body>
    <div class="wrapper">
        <h1>Family <span>Recipes</span></h1>
        <div class="group">
            <span class="index-subheading">This is a collection of recipes from our family and friends. Lots of special stuff in here. Please enjoy and eat well!</span>
            <form id="recipes-search-form" class="recipes-search-form">
                <label for="recipes-search">Search recipes:</label>
                <input type="text" id="recipes-search" class="recipes-search" />
                <button type="reset" name="Clear Search" class="clear-search-btn">Clear Search</button>
            </form>
        </div>

        <section id="section-breakfast" class="container group">
            <h2 class="breakfast heading-label label">Breakfast</h2>
            <ul class="link-list">
                <?php
                    $breakfastFile = file_get_contents("./recipes/breakfast.json");
                    $breakfastJson = json_decode($breakfastFile,true);
                    foreach ($breakfastJson as $key => $breakfastValue) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $breakfastValue['slug'] ?>"><?php echo $breakfastValue['title'] ?></a>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>

        <section id="section-salads" class="container group">
            <h2 class="salads heading-label label">Salads</h2>
            <ul class="link-list">
                <?php
                    $saladsFile = file_get_contents("./recipes/salads.json");
                    $saladsJson = json_decode($saladsFile,true);
                    foreach ($saladsJson as $key => $saladValue) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $saladValue['slug'] ?>"><?php echo $saladValue['title'] ?></a>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>

        <section id="section-soups" class="container group">
            <h2 class="soups heading-label label">Soups</h2>
            <ul class="link-list">
            <?php
                $soupsFile = file_get_contents("./recipes/soups.json");
                $soupsJson = json_decode($soupsFile,true);
                foreach ($soupsJson as $key => $soupValue) {
            ?>
                <li>
                    <a href="/soups/<?php echo $soupValue['slug'] ?>"><?php echo $soupValue['title'] ?></a>
                </li>
            <?php
                }
            ?>
            </ul>
        </section>

        <section id="section-entrees" class="container group">
            <h2 class="entrees heading-label label">Entrees</h2>
            <ul class="link-list">
                <?php
                    $entreesFile = file_get_contents("./recipes/entrees.json");
                    $entreesJson = json_decode($entreesFile,true);
                    foreach ($entreesJson as $key => $entreeValue) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $entreeValue['slug'] ?>"><?php echo $entreeValue['title'] ?></a>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>

        <section id="section-sides" class="container group">
            <h2 class="sides heading-label label">Sides</h2>
            <ul class="link-list">
                <?php
                    $sidesFile = file_get_contents("./recipes/sides.json");
                    $sidesJson = json_decode($sidesFile,true);
                    foreach ($sidesJson as $key => $sideValue) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $sideValue['slug'] ?>"><?php echo $sideValue['title'] ?></a>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>

        <section id="section-desserts" class="container group">
            <h2 class="desserts heading-label label">Desserts</h2>
            <ul class="link-list">
                <?php
                    $dessertsFile = file_get_contents("./recipes/desserts.json");
                    $dessertsJson = json_decode($dessertsFile,true);
                    foreach ($dessertsJson as $key => $dessertValue) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $dessertValue['slug'] ?>"><?php echo $dessertValue['title'] ?></a>
                    </li>
                <?php
                    }
                ?>
            </ul>
        </section>
    </div>
</body>
</html>