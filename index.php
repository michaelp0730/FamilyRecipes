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
                    $breakfast_file = file_get_contents("./recipes/breakfast.json");
                    $breakfast_json = json_decode($breakfast_file,true);
                    foreach ($breakfast_json as $key => $breakfast_value) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $breakfast_value['slug'] ?>"><?php echo $breakfast_value['title'] ?></a>
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
                    $salads_file = file_get_contents("./recipes/salads.json");
                    $salads_json = json_decode($salads_file,true);
                    foreach ($salads_json as $key => $salads_value) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $salads_value['slug'] ?>"><?php echo $salads_value['title'] ?></a>
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
                $soups_file = file_get_contents("./recipes/soups.json");
                $soups_json = json_decode($soups_file,true);
                foreach ($soups_json as $key => $soup_value) {
            ?>
                <li>
                    <a href="/soups/<?php echo $soup_value['slug'] ?>"><?php echo $soup_value['title'] ?></a>
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
                    $entrees_file = file_get_contents("./recipes/entrees.json");
                    $entrees_json = json_decode($entrees_file,true);
                    foreach ($entrees_json as $key => $entree_value) {
                ?>
                    <li>
                        <a href="/breakfast/<?php echo $entree_value['slug'] ?>"><?php echo $entree_value['title'] ?></a>
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